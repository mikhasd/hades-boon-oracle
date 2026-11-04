# Hades — Boon Oracle

A single-page helper for picking the best boons during a Hades run.
It tracks the boons you collect, highlights the picks that unlock the
strongest **Duo Boons**, and computes your damage for Attack, Special,
and Cast.

## Run it

Open `index.html` in a browser (double-click it), or serve the folder:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

Everything is local. No internet is needed once the icons are present.

## Install as an app (offline)

The app is a progressive web app. It runs from the cache after the
first visit, so it works with no network at all.

1. Serve the folder over http (or https on a phone):

   ```
   python3 -m http.server 8000
   # then open http://localhost:8000
   ```

2. On the first visit the app stores itself: the page, the styles,
   the logic, the data, and all 249 icons.
3. After that you can close the network and the app still loads.
   Reload the page to be sure it comes from the cache.
4. To install:
   - **Android / Chrome**: menu → **Install app** (or the install icon
     in the address bar).
   - **Desktop Chrome / Edge**: the install icon in the address bar.
   - **iOS / Safari**: Share → **Add to Home Screen**.

Notes:

- The service worker only works over http(s). Opening `index.html`
  straight from disk (file://) still works as a plain page, but it
  cannot cache for offline use.
- To force a fresh cache (for example after a data update), change
  `VERSION` in `sw.js`. Old caches are removed on update.

## How to use it

1. **Filter your gods.** At the top, tap the gods you have met this run.
   Hidden gods remove their whole lane to keep the list short.
   Use **All** / **None** to reset. You can also type in **Search**.
2. **Read a boon.** Click any boon icon. A popover opens with the name,
   the god, the ability slot, the effect, its damage, and every Duo Boon
   it can help unlock.
3. **Add it to your run.** Press **Select boon** in the popover.
   Selected boons appear in the **Your boons** bar at the bottom.
   Press **×** on a chip, or **Clear all**, to remove them.
4. **Tune the boon.** In the popover, set the **rarity**
   (common / rare / epic / heroic) and the **level** (1–6, the number
   of Poms of Power on it). Both change the damage shown in the
   popover and in the calculator. Boons that cannot take Poms
   (all Hermes boons, legendary boons, some effect-only boons) show a
   **fixed** badge; their level stays at 1.
5. **Follow the glow.** Once you hold a boon, the app lights up the other
   boons that would complete a Duo Boon with it. Pick those to set up
   strong duos.
6. **Watch the ready duos.** The **Ready duos** bar lists every Duo Boon
   you can activate right now from your selected boons. Duos that change
   damage (for example **Heart Rend**, **+350% critical damage**) apply
   to the calculator automatically.

## Damage calculator

The panel below the god filter shows four numbers:

- **Attack** and **Special**: base damage of the selected weapon,
  plus boon modifiers.
- **Cast**: damage of the selected cast boon. The weapon has no base
  cast. If you pick more than one cast boon, the last pick wins, and
  the breakdown names the replaced ones.
- **Crit**: critical damage bonus. Base is +200%.

Formula (from the wiki *Damage Calculation* page):

```
damage = (weapon base + flat boon adds) × (1 + sum of % boon bonuses)
```

Critical hits add the crit bonus on top of the normal damage.

- **Weapon**: choose one of the six weapons. The **Daedala** row shows
  only the Daedalus Hammer upgrades for that weapon. You can hold at
  most 2 Daedala per run, and some exclude each other (the app removes
  the replaced one and tells you). Your Daedala picks are kept per
  weapon, so switching weapons does not lose them. Switching weapons
  also keeps your boon picks.
- **breakdown**: open it to see every selected modifier by name.
  A ⚠ marks a conditional boon (it only works in a certain situation,
  but the calculator counts it).

## How boon values scale

- **Rarity.** Each boon stores its rank-1 value per rarity, taken from
  the god *Boons (Hades)* wiki pages. Most boons follow the same shape
  (about ×1 / ×1.25 / ×1.5 / ×2 from common to heroic); a few have a
  steeper or shallower curve, and a few (legendary and duo values)
  are fixed.
- **Level (Poms of Power).** The wiki does not publish an exact
  rarity-by-level formula. This app uses the documented *Pom of Power*
  model: each Pom raises the boon value by a diminishing amount
  (roughly +28%, +20%, +14%, +10%, +7% for levels 2–6). Boons with a
  low base value (below 10) get a flat +1 per level instead. Level is
  independent of rarity.

## Markers

- **◆ (gold diamond)** on a boon = it can form a Duo Boon.
- **Glowing border** = picking this boon completes a Duo Boon you can reach.
- **Gold border + ✓** = the boon is in your current run.

## Notes

- Boon data, Duo Boons, weapon stats, Daedala, and icons come from the
  Hades Fandom wiki.
- The 8 Olympus gods that grant Duo Boons are all covered. **Hermes**
  grants boons but never takes part in a Duo, so its boons are not marked.
- **Hecate** and **Persephone** grant special Call abilities that never
  combine into Duo Boons, so they are not part of the picker.
- A few boons share one icon in the game (for example `Crush Shot` and
  `Passion Flare`), so the same picture can appear twice.
- Damage values are rank-1 values from the wiki. Higher-rank boons in
  the game scale further; the rarity buttons here cover the rank-1
  spread.

## Files

```
index.html   page markup, including the damage panel
style.css    Hades-themed styling
app.js       selection, highlighting, popover, damage math
data.js      generated boon / duo / weapon / daedala data (source: hades.fandom.com)
sw.js        service worker: offline cache
manifest.webmanifest  web app manifest
icon.svg     app icon source (gold flame)
icon-*.png   rendered app icons (192, 512, maskable 512)
apple-touch-icon.png  iOS home-screen icon (180)
icons/       249 boon, duo, god, weapon, and daedala icons (WebP)
```
