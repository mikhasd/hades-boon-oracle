/* =========================================================================
   Hades — Boon Oracle
   Picks boons, tracks your run, and highlights the picks that unlock
   the strongest Duo Boons. Includes an Attack / Special / Cast damage
   calculator driven by weapon, Daedala, and selected boons (rarity + level).

   Mobile-first layout:
     1. header (brand)
     2. damage readout + collapsible breakdown
     3. weapon icons (row collapses to the pick; tap it to change)
     4. selected boons strip + "New boon" button
     5. picker overlay: god filter + god lanes + Daedalus lane
   ========================================================================= */
"use strict";

/* ---------------------------- indexes ---------------------------------- */
const GOD_BY_ID = Object.fromEntries(GODS.map(g => [g.id, g]));
const BOON_BY_ID = Object.fromEntries(BOONS.map(b => [b.id, b]));
const DUO_BY_ID = Object.fromEntries(DUOS.map(d => [d.id, d]));
const WEAPON_BY_ID = Object.fromEntries(WEAPONS.map(w => [w.id, w]));
const DAEDALUS_BY_ID = Object.fromEntries(DAEDALA.map(d => [d.id, d]));

const SLOT_LABEL = {
  attack: "Attack", special: "Special", cast: "Cast",
  dash: "Dash", call: "Call", util: "Utility",
};

/* --------------------------- damage model ------------------------------ */
/* Base values come from the Fandom wiki god "Boons (Hades)" tables
   (rank-1 value per rarity). Level scaling follows the documented
   "Pom of Power" model: per-level boosts of ~28/20/14/10/7 % of the
   base for level 2..6 (diminishing), or +1 flat per level for low-base
   boons (base < 10). Legendary / duo values are fixed. */
const RARITIES = ["common", "rare", "epic", "heroic"];
const RARITY_SHORT = { common: "C", rare: "R", epic: "E", heroic: "H" };
const RARITY_COLOR = {
  common: "#a89f94", rare: "#4d9be6", epic: "#b06be0", heroic: "#e5a50b",
};
const DEF_CURVE = [1, 1.25, 1.5, 2];            // default rarity curve
const LEVEL_MULT = [1, 1.28, 1.48, 1.62, 1.72, 1.79]; // level 1..6
const MIN_LEVEL = 1, MAX_LEVEL = 6;

function entryValue(e, r, l) {
  if (e.lg) return e.b;                                   // fixed value
  const rv = e.st != null ? e.b + e.st * r
                          : e.b * (e.c ? e.c[r] : DEF_CURVE[r]);
  if (e.b < 10) return rv + (l - 1);                      // low base: +1/level
  return rv * LEVEL_MULT[l - 1];
}

const fmt = x => {
  const r = Math.round(x * 10) / 10;
  return Number.isInteger(r) ? String(r) : r.toFixed(1);
};

function entryLine(e, v) {
  const slotName = {
    attack: "Attack", special: "Special", cast: "Cast",
    asp: "Attack + Special", all: "All damage",
    crit: "Crit damage", critc: "Crit chance",
    dash: "Dash", call: "Call", revenge: "Revenge", other: "Effect",
  }[e.s] || e.s;
  const val = e.k === "pct" ? "+" + fmt(v) + "%" : fmt(v);
  return slotName + (e.lb ? " " + e.lb : "") + ": " + val;
}

/* ---------------------------- state ------------------------------------ */
const state = {
  selected: new Set(),          // boon ids in your run
  weapon: "blade",              // current weapon id
  daedala: {                    // per-weapon selected daedala ids
    blade: new Set(), spear: new Set(), bow: new Set(),
    shield: new Set(), fists: new Set(), rail: new Set(),
  },
  bonus: {},                    // boon id -> { r: 0..3, l: 1..6 }
  godFilter: null,              // picker: null = all gods, Set = only these
};
const bonusOf = id => state.bonus[id] || (state.bonus[id] = { r: 0, l: 1 });

/* ---------------------------- logic ------------------------------------ */
const groupMet = (group, sel) => group.some(id => sel.has(id));

function duoReady(duo, sel) {
  return duo.req.every(g => groupMet(g, sel));
}

function readyDuos(sel) {
  return DUOS.filter(d => duoReady(d, sel));
}

/* Boons that, if added to the selection, complete at least one duo that
   is not already complete. This drives the "candidate" highlight. */
function candidateSet(sel) {
  const out = new Set();
  for (const duo of DUOS) {
    if (duoReady(duo, sel)) continue;           // already complete
    // groups still missing with the current selection
    const missing = duo.req.filter(g => !groupMet(g, sel));
    if (missing.length === 0) continue;
    // a boon completes the duo if it lies in every missing group
    for (const b of BOONS) {
      if (sel.has(b.id)) continue;
      if (missing.every(g => g.includes(b.id))) out.add(b.id);
    }
  }
  return out;
}

/* ------------------------ damage calculator ---------------------------- */
/* Applies weapon base damage, selected Daedala, selected boons (at their
   rarity/level), and ready-duo modifiers. Returns per-stat values plus a
   contributor breakdown. Formula (per the wiki "Damage Calculation" page):
   (base + flat adds) x (1 + sum of % bonuses). */
function computeDamage() {
  const w = WEAPON_BY_ID[state.weapon];
  const acc = {
    attack:  { base: [...w.atk], flat: 0, mult: 1, hits: w.atk_hits, list: [] },
    special: { base: [w.sp, w.sp], flat: 0, mult: 1, hits: w.sp_hits, list: [] },
    cast:    { base: [0, 0], flat: 0, mult: 1, hits: 1, list: [], source: null },
    crit:    { bonus: 200, list: [] },
  };
  let hasCond = false;

  const push = (slot, name, text, cond) => {
    if (cond) hasCond = true;
    acc[slot].list.push({ name, text, cond });
  };
  const apply = (slot, e, v, name, cond) => {
    if (e.k === "pct") acc[slot].mult += v / 100;
    else acc[slot].flat += v;
    push(slot, name, entryLine(e, v), cond);
  };

  /* selected boons */
  const castFlatPick = [];   // every selected cast-flat boon, in pick order
  for (const id of state.selected) {
    const b = BOON_BY_ID[id];
    if (!b.dmg || !b.dmg.length) continue;
    const { r, l } = bonusOf(id);
    const tag = (RARITY_SHORT[RARITIES[r]] + (l > 1 ? l : ""));
    const name = b.name + (tag && (r > 0 || l > 1) ? " (" + tag + ")" : "");
    for (const e of b.dmg) {
      const v = entryValue(e, r, l);
      const cond = !!e.cd;
      /* cast boons define the cast's base damage; one is active in-game
         (last pick wins), so collect them instead of adding to the total */
      if (e.s === "cast" && e.k === "flat") {
        castFlatPick.push({ b, e, v, name, cond });
        continue;
      }
      switch (e.s) {
        case "attack":  apply("attack", e, v, name, cond); break;
        case "special": apply("special", e, v, name, cond); break;
        case "cast":    apply("cast", e, v, name, cond); break;
        case "asp":     apply("attack", e, v, name, cond);
                        apply("special", e, v, name, cond); break;
        case "all":     apply("attack", e, v, name, cond);
                        apply("special", e, v, name, cond);
                        apply("cast", e, v, name, cond); break;
        case "crit":    acc.crit.bonus += v;
                        push("crit", name, entryLine(e, v), cond); break;
        case "critc":   push("crit", name, entryLine(e, v), cond); break;
        default:        push("attack", name, entryLine(e, v), cond); // info only
      }
    }
  }
  /* cast base: one cast boon is active in-game; last pick wins */
  if (castFlatPick.length) {
    const active = castFlatPick[castFlatPick.length - 1];
    acc.cast.base = [active.v, active.v];
    acc.cast.source = active.b.name;
    push("cast", active.name, entryLine(active.e, active.v), active.cond);
    for (let i = 0; i < castFlatPick.length - 1; i++) {
      acc.cast.list.push({ name: castFlatPick[i].name, text: "replaced by " + active.b.name, cond: false });
    }
  }

  /* ready duo modifiers (fixed values, no rarity/level) */
  for (const d of readyDuos(state.selected)) {
    if (!d.dmg || !d.dmg.length) continue;
    for (const e of d.dmg) {
      const v = entryValue(e, 0, 1);
      const name = "Duo: " + d.name;
      if (e.s === "crit") {
        acc.crit.bonus += v;
        push("crit", name, entryLine(e, v), !!e.cd);
      } else if (e.s === "cast") {
        apply("cast", e, v, name, !!e.cd);
      }
    }
  }

  /* daedala of the current weapon (in-game upgrades persist per weapon,
     but only the current weapon's numbers matter for its damage line) */
  for (const id of state.daedala[state.weapon]) {
    const dd = DAEDALUS_BY_ID[id];
    for (const m of dd.mods || []) {
      if (m.t === "repl") {
        acc[m.s].base = [m.v, m.v];
        if (m.h) acc[m.s].hits = m.h;
        push(m.s, dd.name, m.s === "attack" ? "Attack base → " + m.v : "Special base → " + m.v, false);
      } else if (m.t === "pct") {
        acc[m.s].mult += m.v / 100;
        push(m.s, dd.name, (m.s === "attack" ? "Attack" : "Special") + " " + (m.v > 0 ? "+" : "") + m.v + "%", false);
      } else if (m.t === "flat") {
        acc[m.s].flat += m.v;
        push(m.s, dd.name, fmt(m.v) + " flat", false);
      } else if (m.t === "hits") {
        acc[m.s].hits = m.v;
        push(m.s, dd.name, "Hits → " + m.v, false);
      } else if (m.t === "hits+") {
        acc[m.s].hits += m.v;
        push(m.s, dd.name, "Hits +" + m.v, false);
      }
    }
  }

  const fin = a => [
    Math.round((a.base[0] + a.flat) * a.mult * 10) / 10,
    Math.round((a.base[1] + a.flat) * a.mult * 10) / 10,
  ];
  const [a0, a1] = fin(acc.attack);
  const [s0, s1] = fin(acc.special);
  const [c0, c1] = fin(acc.cast);
  return {
    attack: { min: a0, max: a1, hits: acc.attack.hits, list: acc.attack.list },
    special: { min: s0, max: s1, hits: acc.special.hits, list: acc.special.list },
    cast: { min: c0, max: c1, hits: acc.cast.hits, list: acc.cast.list, source: acc.cast.source },
    crit: Math.round(acc.crit.bonus),
    critList: acc.crit.list,
    hasCond,
  };
}

const statText = (st, suffix) => {
  const t = st.min === st.max ? fmt(st.min) : fmt(st.min) + "–" + fmt(st.max);
  return t + (suffix || "") + (st.hits > 1 ? " ×" + st.hits : "");
};

/* ---------------------------- helpers ---------------------------------- */
const $ = sel => document.querySelector(sel);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const iconSrc = f => "icons/" + f;

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1900);
}

/* ---------------------------- god filter ------------------------------- */
/* Picker filter. Starts with all gods shown. Tapping a god shows only
   that god; tapping more gods adds them to the view; removing the last
   one shows all again. Gods of already-selected boons are shown by
   default when the picker opens. */
function buildGodFilter() {
  const wrap = $("#godFilter");
  for (const g of GODS) {
    const chip = el("button", "god-chip");
    chip.type = "button";
    chip.style.setProperty("--c", g.color);
    chip.dataset.god = g.id;
    chip.innerHTML = `<img src="${iconSrc(g.symbol)}" alt="">`;
    chip.title = g.name;
    chip.addEventListener("click", () => {
      let set = state.godFilter;
      if (set === null) {
        set = new Set([g.id]);                       // first tap: solo
      } else if (set.has(g.id)) {
        set.delete(g.id);
        if (set.size === 0) set = null;              // none left: show all
      } else {
        set.add(g.id);                               // add more
      }
      state.godFilter = set;
      updateGodFilter();
      updateLanes();
    });
    wrap.appendChild(chip);
  }
}

function updateGodFilter() {
  for (const chip of $("#godFilter").children) {
    const on = state.godFilter === null || state.godFilter.has(chip.dataset.god);
    chip.setAttribute("aria-pressed", String(on));
    chip.classList.toggle("dimmed", !on);
  }
}

function defaultGodFilter() {
  const selGods = new Set([...state.selected].map(id => BOON_BY_ID[id].god));
  if (state.godFilter === null) {
    state.godFilter = selGods.size ? selGods : null;
  } else {
    for (const g of selGods) state.godFilter.add(g);
  }
}

/* ------------------------------ weapons -------------------------------- */
// After a weapon is picked, the row collapses to that one icon.
// Tap the active weapon icon to open the row again and pick another.
let weaponsLocked = false;

function buildWeapons() {
  const wrap = $("#dpWeapons");
  for (const w of WEAPONS) {
    const btn = el("button", "wpn");
    btn.type = "button";
    btn.dataset.id = w.id;
    btn.dataset.title = `${w.name} — Attack ${w.atk[0] === w.atk[1] ? w.atk[0] : w.atk[0] + "–" + w.atk[1]}, Special ${w.sp}`;
    btn.title = btn.dataset.title;
    btn.innerHTML = `<img src="${iconSrc(w.icon)}" alt="">`;
    btn.addEventListener("click", () => {
      if (weaponsLocked && state.weapon === w.id) {
        weaponsLocked = false;
        updateWeapons();
        return;
      }
      if (state.weapon === w.id) return;
      state.weapon = w.id;
      weaponsLocked = true;
      updateWeapons();
      fillDaedalaLane();
      renderDamage();
    });
    wrap.appendChild(btn);
  }
}

function updateWeapons() {
  for (const btn of $("#dpWeapons").children) {
    const isSel = state.weapon === btn.dataset.id;
    btn.setAttribute("aria-pressed", String(isSel));
    btn.hidden = weaponsLocked && !isSel;
    btn.title = weaponsLocked && isSel ? btn.dataset.title + " — tap to change weapon" : btn.dataset.title;
  }
}

/* --------------------------- daedalus lane ----------------------------- */
/* Daedalus is a lane inside the picker (like a god): the Daedalus Hammer
   upgrades for the current weapon. Selected Daedala stay visible with a
   check so they can be removed; the max-2 and exclusivity rules apply. */
function buildDaedalusLane() {
  const lane = el("section", "lane lane-daedalus");
  lane.dataset.god = "daedalus";
  const head = el("header", "lane-head");
  head.innerHTML =
    `<span class="lane-glyph" aria-hidden="true">⚒</span>` +
    `<h2>Daedalus</h2>` +
    `<span class="count" id="daedaCount"></span>`;
  const grid = el("div", "boon-grid");
  lane.appendChild(head);
  lane.appendChild(grid);
  return lane;
}

function fillDaedalaLane() {
  const lane = $("#lanes .lane-daedalus");
  if (!lane) return;
  const grid = lane.querySelector(".boon-grid");
  grid.innerHTML = "";
  for (const dd of DAEDALA.filter(d => d.weapon === state.weapon)) {
    const tile = el("button", "dae-tile");
    tile.type = "button";
    tile.dataset.id = dd.id;
    tile.title = dd.desc;
    tile.innerHTML =
      `<img src="${iconSrc(dd.icon)}" alt="">` +
      `<span class="dae-name">${dd.name}</span>` +
      `<span class="sel-mark" aria-hidden="true">✓</span>`;
    tile.addEventListener("click", () => toggleDaedala(dd));
    grid.appendChild(tile);
  }
  $("#daedaCount").textContent = WEAPON_BY_ID[state.weapon].name;
  syncDaedalaLane();
}

function syncDaedalaLane() {
  const lane = $("#lanes .lane-daedalus");
  if (!lane) return;
  const set = state.daedala[state.weapon];
  for (const t of lane.querySelectorAll(".dae-tile")) {
    const isSel = set.has(t.dataset.id);
    t.classList.toggle("selected", isSel);
    t.setAttribute("aria-pressed", String(isSel));
    t.querySelector(".sel-mark").style.display = isSel ? "flex" : "none";
  }
}

function totalDaedala() {
  return Object.values(state.daedala).reduce((n, s) => n + s.size, 0);
}

function toggleDaedala(dd) {
  const set = state.daedala[dd.weapon];
  if (set.has(dd.id)) {
    set.delete(dd.id);
  } else {
    if (totalDaedala() >= 2) {
      toast("Max 2 Daedala per run. Remove one first.");
      return;
    }
    // resolve mutual exclusivity (in-game hammer exclusions)
    let dropped = [];
    for (const other of DAEDALA.filter(x => x.weapon === dd.weapon)) {
      if (other.id === dd.id) continue;
      const conflicts =
        (other.excl || []).includes(dd.id) || (dd.excl || []).includes(other.id);
      if (conflicts && set.has(other.id)) {
        set.delete(other.id);
        dropped.push(other.name);
      }
    }
    set.add(dd.id);
    if (dropped.length) toast(`Replaced: ${dropped.join(", ")}`);
  }
  syncDaedalaLane();
  renderDamage();
}

/* --------------------------- damage panel ------------------------------ */
function renderDamage() {
  const d = computeDamage();
  const w = WEAPON_BY_ID[state.weapon];

  $("#dpAttackVal").textContent = statText(d.attack);
  $("#dpAttackNote").textContent =
    `${w.name.split(" ")[0]} ${w.atk_note}` + (d.hasCond ? " · ⚠" : "");
  $("#dpSpecialVal").textContent = statText(d.special);
  $("#dpSpecialNote").textContent = `${w.sp_note}` + (d.hasCond ? " · ⚠" : "");
  if (d.cast.source) {
    $("#dpCastVal").textContent = statText(d.cast);
    $("#dpCastNote").textContent = d.cast.source + (d.hasCond ? " · ⚠" : "");
  } else {
    $("#dpCastVal").textContent = "–";
    $("#dpCastNote").textContent = "no cast boon selected";
  }
  $("#dpCritVal").textContent = "+" + d.crit + "%";

  renderBreakdown(d);
}

function renderBreakdown(d) {
  const box = $("#dpBreakdown");
  const statRow = (ico, title, list) => {
    if (!list.length) return "";
    const items = list.map(c =>
      `<span class="bd-item${c.cond ? " cond" : ""}" title="${c.name}">${c.name}: ${c.text}${c.cond ? " ⚠" : ""}</span>`
    ).join("");
    return `<div class="bd-row"><span class="bd-stat">${ico} ${title}</span>${items}</div>`;
  };
  const parts = [
    statRow("⚔", "Attack", d.attack.list),
    statRow("✦", "Special", d.special.list),
    statRow("☄", "Cast", d.cast.list),
    statRow("☠", "Crit", d.critList),
  ].filter(Boolean);
  box.innerHTML = parts.length
    ? parts.join("")
    : `<div class="bd-row bd-empty">Pick boons or Daedala to see what changes your damage.</div>`;
}

/* ------------------------------ lanes ----------------------------------- */
function buildLanes() {
  const lanes = $("#lanes");
  for (const g of GODS) {
    const lane = el("section", "lane");
    lane.dataset.god = g.id;
    lane.style.setProperty("--c", g.color);

    const head = el("header", "lane-head");
    const boonsOfGod = BOONS.filter(b => b.god === g.id);
    head.innerHTML =
      `<img src="${iconSrc(g.symbol)}" alt="">` +
      `<h2>${g.name}</h2>` +
      `<span class="count">${boonsOfGod.length} boons</span>`;
    lane.appendChild(head);

    const grid = el("div", "boon-grid");
    for (const b of boonsOfGod) {
      const tile = el("button", "boon");
      tile.type = "button";
      tile.dataset.id = b.id;
      tile.title = b.name;
      tile.style.anchorName = "--pop-" + b.id;
      tile.innerHTML =
        `<img src="${iconSrc(b.icon)}" alt="${b.name}">` +
        `<span class="duo-mark" aria-hidden="true">◆</span>`;
      if (b.duoCapable) tile.classList.add("duo");
      tile.addEventListener("click", () => openPop(b.id, tile));
      grid.appendChild(tile);
    }
    lane.appendChild(grid);
    lanes.appendChild(lane);
  }
  lanes.appendChild(buildDaedalusLane());
}

/* Shows/hides lanes and tiles. Picked boons leave the list; a god lane
   hides when it has nothing left to offer. The Daedalus lane is always
   visible. */
function updateLanes() {
  const cands = candidateSet(state.selected);
  for (const lane of $("#lanes").children) {
    const god = lane.dataset.god;
    if (god === "daedalus") {
      lane.classList.remove("hidden");
      continue;
    }
    const inFilter = state.godFilter === null || state.godFilter.has(god);
    let unseen = 0;
    for (const tile of lane.querySelectorAll(".boon")) {
      const id = tile.dataset.id;
      const isSel = state.selected.has(id);
      tile.hidden = isSel;
      tile.classList.toggle("candidate", !isSel && cands.has(id));
      if (!isSel) unseen++;
    }
    lane.classList.toggle("hidden", !(inFilter && unseen > 0));
    lane.querySelector(".count").textContent =
      unseen + " boon" + (unseen === 1 ? "" : "s");
  }
  syncDaedalaLane();
}

/* --------------------------- selected strip ---------------------------- */
function renderSelStrip() {
  const strip = $("#selectedStrip");
  strip.innerHTML = "";
  const sel = [...state.selected];
  if (sel.length === 0) {
    strip.appendChild(el("span", "empty-note", "No boons yet. Pick one to start your run."));
    return;
  }
  for (const id of sel) {
    const b = BOON_BY_ID[id];
    const g = GOD_BY_ID[b.god];
    const { r, l } = bonusOf(id);
    const chip = el("button", "chip");
    chip.type = "button";
    chip.style.setProperty("--c", g.color);
    chip.style.anchorName = "--pop-" + id;
    chip.title = b.name + (r > 0 || l > 1 ? ` (${RARITIES[r]}, Lv ${l})` : "");
    chip.dataset.id = id;
    chip.innerHTML =
      `<img src="${iconSrc(b.icon)}" alt="">` +
      `<span class="chip-name">${b.name}</span>` +
      (r > 0 || l > 1
        ? `<span class="chip-lv" style="color:${RARITY_COLOR[RARITIES[r]]}">${RARITY_SHORT[RARITIES[r]]}${l > 1 ? l : ""}</span>`
        : "") +
      `<span class="chip-x" title="Remove" aria-label="Remove">×</span>`;
    chip.addEventListener("click", (ev) => {
      if (ev.target.closest(".chip-x")) {
        toggleSelect(id);
        return;
      }
      openPop(id, chip);
    });
    strip.appendChild(chip);
  }
}

/* ---------------------------- selection -------------------------------- */
function toggleSelect(id) {
  if (state.selected.has(id)) {
    state.selected.delete(id);
  } else {
    state.selected.add(id);
  }
  refresh();
  // the boon popover closes after a pick: the tile left the list (or the
  // chip that anchors it was re-rendered)
  const pop = $("#boonPop");
  if (pop.matches(":popover-open") && pop.dataset.bid === id) pop.hidePopover();
  const ready = readyDuos(state.selected);
  if (ready.length) toast(`${ready.length} duo${ready.length > 1 ? "s" : ""} ready: ${ready.map(d => d.name).join(", ")}`);
}

/* ------------------------------ picker --------------------------------- */
function openPicker() {
  defaultGodFilter();
  updateGodFilter();
  updateLanes();
  const picker = $("#picker");
  picker.hidden = false;
  requestAnimationFrame(() => picker.classList.add("open"));
  document.body.classList.add("picker-open");
  $("#pickerClose").focus();
}

function closePicker() {
  const picker = $("#picker");
  if (picker.hidden) return;
  picker.classList.remove("open");
  document.body.classList.remove("picker-open");
  setTimeout(() => { picker.hidden = true; }, 180);
  $("#btnNewBoon").focus();
}

/* ---------------------------- popover ---------------------------------- */
function openPop(bid, anchorEl) {
  const pop = $("#boonPop");
  const b = BOON_BY_ID[bid];
  const g = GOD_BY_ID[b.god];
  pop.dataset.bid = bid;

  $("#popIcon").src = iconSrc(b.icon);
  $("#popName").textContent = b.name;
  const godEl = $("#popGod");
  godEl.textContent = g.name;
  godEl.style.color = g.color;
  $("#popSlot").textContent = SLOT_LABEL[b.slot] || b.slot;
  $("#popDesc").textContent = b.desc;

  buildPopRarity(b);
  syncPopTuning(bid);
  syncPopDmg(bid);
  syncSelectButton(bid);
  rebuildPopDuoList(bid);

  if (CSS.supports("anchor-name", "--x") && anchorEl && anchorEl.style.anchorName) {
    pop.style.positionAnchor = anchorEl.style.anchorName;
    pop.style.positionArea = "bottom top";
  }
  pop.showPopover();
  $("#popClose").focus();
}

/* rarity + level controls */
function buildPopRarity(b) {
  const wrap = $("#popRarity");
  wrap.innerHTML = "";
  for (let i = 0; i < RARITIES.length; i++) {
    const btn = el("button", "rar");
    btn.type = "button";
    btn.dataset.r = i;
    btn.style.setProperty("--rc", RARITY_COLOR[RARITIES[i]]);
    btn.textContent = RARITIES[i];
    btn.addEventListener("click", () => {
      bonusOf(b.id).r = i;
      syncPopTuning(b.id);
      syncPopDmg(b.id);
      renderDamage();
    });
    wrap.appendChild(btn);
  }
}

function syncPopTuning(bid) {
  const b = BOON_BY_ID[bid];
  const { r, l } = bonusOf(bid);
  for (const btn of $("#popRarity").children) {
    btn.setAttribute("aria-pressed", String(Number(btn.dataset.r) === r));
  }
  $("#lvVal").textContent = l;
  const locked = !b.pom;
  $("#lvDown").disabled = locked || l <= MIN_LEVEL;
  $("#lvUp").disabled = locked || l >= MAX_LEVEL;
  $("#lvDown").title = locked ? "Cannot be levelled" : "Level down";
  $("#lvUp").title = locked ? "Cannot be levelled" : "Level up";
  $("#popLevelLock").hidden = !locked;
  // keep the strip chip badge in sync without rebuilding the strip
  // (rebuilding would detach the popover's anchor element)
  const chip = document.querySelector(`#selectedStrip .chip[data-id="${bid}"]`);
  if (chip) {
    const badge = chip.querySelector(".chip-lv");
    if (r > 0 || l > 1) {
      if (!badge) chip.querySelector(".chip-x").before(el("span", "chip-lv"));
      const bEl = chip.querySelector(".chip-lv");
      bEl.textContent = RARITY_SHORT[RARITIES[r]] + (l > 1 ? l : "");
      bEl.style.color = RARITY_COLOR[RARITIES[r]];
    } else if (badge) {
      badge.remove();
    }
    chip.title = b.name + (r > 0 || l > 1 ? ` (${RARITIES[r]}, Lv ${l})` : "");
  }
}

function syncPopDmg(bid) {
  const box = $("#popDmg");
  const b = BOON_BY_ID[bid];
  if (!b.dmg || !b.dmg.length) { box.innerHTML = ""; box.hidden = true; return; }
  const { r, l } = bonusOf(bid);
  const rows = b.dmg.map(e => {
    const v = entryValue(e, r, l);
    const fixed = e.lg ? " <i>fixed</i>" : "";
    const cond = e.cd ? " <i>conditional</i>" : "";
    return `<span class="pop-dmg-row${e.k === "pct" ? " pct" : ""}">
              ${entryLine(e, v)}${fixed}${cond}
            </span>`;
  }).join("");
  box.innerHTML = `<div class="pop-dmg-title">Damage (${RARITIES[r]}, Lv ${l})</div>${rows}`;
  box.hidden = false;
}

function syncSelectButton(bid) {
  const btn = $("#popSelect");
  const isSel = state.selected.has(bid);
  btn.classList.toggle("selected", isSel);
  btn.textContent = isSel ? "✓ Selected" : "Select boon";
  btn.onclick = () => toggleSelect(bid);
}

function duoStatusFor(duo, sel, bid) {
  // returns { level: 'ready'|'soon'|'part', rows: [{gods, met, byThis}] }
  const rows = duo.req.map((group) => {
    const met = groupMet(group, sel);
    const byThis = !met && group.includes(bid);
    // gods represented in this group (for the symbol row)
    const gods = [...new Set(group.map(id => BOON_BY_ID[id].god))];
    return { gods, met, byThis };
  });
  const allMet = rows.every(r => r.met || r.byThis);
  const already = duoReady(duo, sel);
  let level;
  if (already) level = "ready";
  else if (allMet) level = "soon";   // picking this boon completes it
  else level = "part";               // still needs other gods' boons
  return { level, rows };
}

const STATE_TEXT = { ready: "Ready", soon: "Ready if picked", part: "Needs more" };
const STATE_CLASS = { ready: "ready", soon: "soon", part: "part" };
const ROW_STATE = { met: "In run", byThis: "This boon", need: "Needed" };
const ROW_CLASS = { met: "met", byThis: "bythis", need: "need" };

function duoCardHTML(duo, status) {
  const rows = status.rows.map(r => {
    const key = r.met ? "met" : (r.byThis ? "byThis" : "need");
    const gods = r.gods.map(gid =>
      `<img src="${iconSrc(GOD_BY_ID[gid].symbol)}" title="${GOD_BY_ID[gid].name}">`).join("");
    return `<div class="req-row ${ROW_CLASS[key]}">
              <span class="req-gods">${gods}</span>
              <span class="req-label">${r.gods.map(gid => GOD_BY_ID[gid].name).join(" + ")}</span>
              <span class="req-state">${ROW_STATE[key]}</span>
            </div>`;
  }).join("");

  const note = duo.note ? `<p class="duo-card-note">${duo.note}</p>` : "";
  return `<div class="duo-card ${status.level === "ready" ? "ready" : status.level === "soon" ? "ready-soon" : ""}">
            <div class="duo-card-top">
              <img class="duo-ico" src="${iconSrc(duo.icon)}" alt="">
              <span class="duo-card-name">${duo.name}</span>
              <span class="duo-card-status ${STATE_CLASS[status.level]}">${STATE_TEXT[status.level]}</span>
            </div>
            <p class="duo-card-effect">${duo.effect}</p>
            ${note}
            <div class="req-rows">${rows}</div>
          </div>`;
}

function rebuildPopDuoList(bid) {
  const b = BOON_BY_ID[bid];
  const wrap = $("#popDuoList");
  if (!b.duos.length) {
    wrap.innerHTML = `<div class="pop-duos-title">Duo boons</div>
                      <div class="no-duos">This boon is not part of any Duo Boon.</div>`;
    return;
  }
  const cards = b.duos
    .map(id => DUO_BY_ID[id])
    .map(d => duoCardHTML(d, duoStatusFor(d, state.selected, bid)))
    .join("");
  wrap.innerHTML = `<div class="pop-duos-title">Duo boons this can unlock (${b.duos.length})</div>${cards}`;
}

/* ---------------------------- refresh ---------------------------------- */
function refresh() {
  renderDamage();
  renderSelStrip();
  updateLanes();
}

/* ---------------------------- init ------------------------------------- */
function init() {
  buildGodFilter();
  buildWeapons();
  buildLanes();
  fillDaedalaLane();

  $("#btnNewBoon").addEventListener("click", openPicker);
  $("#pickerClose").addEventListener("click", closePicker);
  $("#pickerBackdrop").addEventListener("click", closePicker);
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && !$("#picker").hidden) closePicker();
  });

  $("#popClose").addEventListener("click", () => $("#boonPop").hidePopover());

  $("#lvDown").addEventListener("click", () => {
    const bid = $("#boonPop").dataset.bid;
    const s = bonusOf(bid);
    if (s.l > MIN_LEVEL) { s.l--; syncPopTuning(bid); syncPopDmg(bid); renderDamage(); }
  });
  $("#lvUp").addEventListener("click", () => {
    const bid = $("#boonPop").dataset.bid;
    const b = BOON_BY_ID[bid];
    const s = bonusOf(bid);
    if (b.pom && s.l < MAX_LEVEL) { s.l++; syncPopTuning(bid); syncPopDmg(bid); renderDamage(); }
  });

  $("#dpToggle").addEventListener("click", () => {
    const bd = $("#dpBreakdown");
    const open = bd.classList.toggle("open");
    $("#dpToggle").setAttribute("aria-expanded", String(open));
  });

  updateWeapons();
  updateGodFilter();
  refresh();
}

document.addEventListener("DOMContentLoaded", init);

// PWA: register the service worker for offline use.
// Service workers need http(s); on file:// this does nothing.
if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js", { scope: "./" }).catch(() => {});
  });
}
