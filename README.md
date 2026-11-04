# Hades — Boon Oracle

A single-page helper for picking the best boons during a Hades run.
It tracks the boons you collect and highlights the picks that unlock the
strongest **Duo Boons**.

## Run it

Open `index.html` in a browser (double-click it), or serve the folder:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

Everything is local. No internet is needed once the icons are present.

## How to use it

1. **Filter your gods.** At the top, tap the gods you have met this run.
   Hidden gods remove their whole lane to keep the list short.
   Use **All** / **None** to reset. You can also type in **Search**.
2. **Read a boon.** Click any boon icon. A popover opens with the name,
   the god, the ability slot, the effect, and every Duo Boon it can help
   unlock.
3. **Add it to your run.** Press **Select boon** in the popover.
   Selected boons appear in the **Your boons** bar at the bottom.
   Press **×** on a chip, or **Clear all**, to remove them.
4. **Follow the glow.** Once you hold a boon, the app lights up the other
   boons that would complete a Duo Boon with it. Pick those to set up
   strong duos.
5. **Watch the ready duos.** The **Ready duos** bar lists every Duo Boon
   you can activate right now from your selected boons.

## Markers

- **◆ (gold diamond)** on a boon = it can form a Duo Boon.
- **Glowing border** = picking this boon completes a Duo Boon you can reach.
- **Gold border + ✓** = the boon is in your current run.

## Notes

- Boon data, Duo Boons, and icons come from the Hades Fandom wiki.
- The 8 Olympus gods that grant Duo Boons are all covered. **Hermes**
  grants boons but never takes part in a Duo, so its boons are not marked.
- **Hecate** and **Persephone** grant special Call abilities that never
  combine into Duo Boons, so they are not part of the picker.
- A few boons share one icon in the game (for example `Crush Shot` and
  `Passion Flare`), so the same picture can appear twice.

## Files

```
index.html   page markup
style.css    Hades-themed styling
app.js       selection, highlighting, popover logic
data.js      generated boon / duo data (source: hades.fandom.com)
icons/       166 boon, duo, and god icons (WebP)
```
