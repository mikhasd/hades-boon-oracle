/* =========================================================================
   Hades — Boon Oracle
   Picks boons, tracks your run, and highlights the picks that unlock
   the strongest Duo Boons.
   ========================================================================= */
"use strict";

/* ---------------------------- indexes ---------------------------------- */
const GOD_BY_ID = Object.fromEntries(GODS.map(g => [g.id, g]));
const BOON_BY_ID = Object.fromEntries(BOONS.map(b => [b.id, b]));
const DUO_BY_ID = Object.fromEntries(DUOS.map(d => [d.id, d]));

const SLOT_LABEL = {
  attack: "Attack", special: "Special", cast: "Cast",
  dash: "Dash", call: "Call", util: "Utility",
};

/* ---------------------------- state ------------------------------------ */
const state = {
  selected: new Set(),          // boon ids in your run
  visibleGods: new Set(GODS.map(g => g.id)),
  search: "",
};

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
function buildGodFilter() {
  const wrap = $("#godFilter");
  for (const g of GODS) {
    const chip = el("button", "god-chip");
    chip.type = "button";
    chip.style.setProperty("--c", g.color);
    chip.setAttribute("aria-pressed", "true");
    chip.dataset.god = g.id;
    chip.innerHTML = `<img src="${iconSrc(g.symbol)}" alt="">${g.name}`;
    chip.title = `Show / hide ${g.name} boons`;
    chip.addEventListener("click", () => {
      if (state.visibleGods.has(g.id)) state.visibleGods.delete(g.id);
      else state.visibleGods.add(g.id);
      refresh();
    });
    wrap.appendChild(chip);
  }
}

function updateGodFilter() {
  for (const chip of $("#godFilter").children) {
    chip.setAttribute("aria-pressed", state.visibleGods.has(chip.dataset.god) ? "true" : "false");
  }
}

/* ---------------------------- lanes ------------------------------------ */
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
      tile.style.anchorName = "--tile-" + b.id;
      tile.innerHTML =
        `<img src="${iconSrc(b.icon)}" alt="${b.name}">` +
        `<span class="duo-mark" aria-hidden="true">◆</span>` +
        `<span class="sel-mark" aria-hidden="true">✓</span>`;
      if (b.duoCapable) tile.classList.add("duo");
      tile.querySelector(".sel-mark").style.display = "none";
      tile.addEventListener("click", () => openPop(b.id, tile));
      grid.appendChild(tile);
    }
    lane.appendChild(grid);
    lanes.appendChild(lane);
  }
}

function updateLanes() {
  const cands = candidateSet(state.selected);
  const q = state.search.trim().toLowerCase();

  for (const lane of $("#lanes").children) {
    const god = lane.dataset.god;
    lane.classList.toggle("hidden", !state.visibleGods.has(god));
    if (!state.visibleGods.has(god)) continue;

    for (const tile of lane.querySelectorAll(".boon")) {
      const id = tile.dataset.id;
      const b = BOON_BY_ID[id];
      const isSel = state.selected.has(id);
      const dim = q.length > 0 && !b.name.toLowerCase().includes(q);

      tile.classList.toggle("selected", isSel);
      tile.classList.toggle("dim", dim);
      tile.classList.toggle("candidate", !isSel && cands.has(id) && !dim);
      tile.querySelector(".sel-mark").style.display = isSel ? "flex" : "none";
    }
  }
}

/* ---------------------------- loadout ---------------------------------- */
function renderLoadout() {
  const selStrip = $("#selectedStrip");
  const duoStrip = $("#duoStrip");
  selStrip.innerHTML = "";
  duoStrip.innerHTML = "";

  const sel = [...state.selected];
  if (sel.length === 0) {
    selStrip.appendChild(el("span", "empty-note", "No boons selected. Click a boon to add it to your run."));
  } else {
    for (const id of sel) {
      const b = BOON_BY_ID[id];
      const g = GOD_BY_ID[b.god];
      const chip = el("div", "chip");
      chip.style.setProperty("--c", g.color);
      chip.title = b.name;
      chip.innerHTML =
        `<img src="${iconSrc(b.icon)}" alt="">` +
        `<span class="chip-name">${b.name}</span>` +
        `<span class="chip-x" title="Remove">×</span>`;
      chip.querySelector(".chip-x").addEventListener("click", e => {
        e.stopPropagation();
        toggleSelect(id);
      });
      chip.addEventListener("click", () => {
        const tile = document.querySelector(`.boon[data-id="${id}"]`);
        if (tile) openPop(id, tile);
      });
      selStrip.appendChild(chip);
    }
  }

  const ready = readyDuos(state.selected);
  $("#btnClear").hidden = sel.length === 0;

  if (ready.length === 0) {
    duoStrip.appendChild(el("span", "empty-note", "No ready duos yet. Combine boons from two gods to unlock one."));
  } else {
    for (const d of ready) {
      const chip = el("div", "duo-chip");
      chip.title = d.effect;
      chip.innerHTML =
        `<img src="${iconSrc(d.icon)}" alt="">` +
        `<span class="chip-name">${d.name}</span>` +
        `<span class="chip-gods">${d.gods.map(gid =>
          `<img src="${iconSrc(GOD_BY_ID[gid].symbol)}" title="${GOD_BY_ID[gid].name}">`).join("")}</span>`;
      duoStrip.appendChild(chip);
    }
  }
}

/* ---------------------------- selection -------------------------------- */
function toggleSelect(id) {
  const b = BOON_BY_ID[id];
  if (state.selected.has(id)) {
    state.selected.delete(id);
  } else {
    state.selected.add(id);
  }
  refresh();
  // keep the popover button in sync if it is open for this boon
  const pop = $("#boonPop");
  if (pop.matches(":popover-open") && pop.dataset.bid === id) {
    syncSelectButton(id);
    rebuildPopDuoList(id);
  }
  const ready = readyDuos(state.selected);
  if (ready.length) toast(`${ready.length} duo${ready.length > 1 ? "s" : ""} ready: ${ready.map(d => d.name).join(", ")}`);
}

/* ---------------------------- popover ---------------------------------- */
function openPop(bid, tile) {
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

  syncSelectButton(bid);
  rebuildPopDuoList(bid);

  if (CSS.supports("anchor-name", "--x")) {
    pop.style.positionAnchor = "--tile-" + bid;
    pop.style.positionArea = "bottom top";
  }
  pop.showPopover();
  $("#popClose").focus();
}

function syncSelectButton(bid) {
  const btn = $("#popSelect");
  const isSel = state.selected.has(bid);
  btn.classList.toggle("selected", isSel);
  btn.textContent = isSel ? "✓ Selected" : "Select boon";
  btn.onclick = () => toggleSelect(bid);
}

function duoStatusFor(duo, sel, bid) {
  // returns { level: 'ready'|'soon'|'part', rows: [{gods, label, state}] }
  const rows = duo.req.map((group, i) => {
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
  updateGodFilter();
  updateLanes();
  renderLoadout();
}

/* ---------------------------- init ------------------------------------- */
function init() {
  buildGodFilter();
  buildLanes();

  $("#btnAll").addEventListener("click", () => {
    state.visibleGods = new Set(GODS.map(g => g.id));
    refresh();
  });
  $("#btnNone").addEventListener("click", () => {
    state.visibleGods = new Set();
    refresh();
  });
  $("#btnClear").addEventListener("click", () => {
    state.selected.clear();
    refresh();
  });

  const search = $("#search");
  search.addEventListener("input", () => {
    state.search = search.value;
    updateLanes();
  });

  $("#popClose").addEventListener("click", () => $("#boonPop").hidePopover());

  refresh();
}

document.addEventListener("DOMContentLoaded", init);
