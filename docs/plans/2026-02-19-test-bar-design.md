# Test Bar — Font & Color Scheme Previewer

**Goal:** Add a hidden developer toolbar that lets you swap fonts and color schemes live to demo options with the shop owner.

**Architecture:** Single JS file (`js/testbar.js`) that injects a toolbar into the DOM, overrides CSS custom properties on `:root`, and persists selections in `localStorage`. Zero impact on existing code — remove by deleting the script tag.

---

## Trigger

- **Desktop:** `Ctrl+Shift+T` toggles the bar
- **iPad/touch:** Triple-tap the nav logo to toggle

## Bar Layout

- Fixed bar beneath the nav, slides down when activated
- Two rows: Fonts (10 buttons) | Colors (8 swatches)
- "Reset" button restores defaults
- First option in each row = current site defaults (highlighted as active)

## Fonts (10 — all Google Fonts, loaded on-demand)

1. Bebas Neue (current default)
2. Oswald
3. Montserrat
4. Playfair Display
5. Poppins
6. Raleway
7. Archivo Black
8. Permanent Marker
9. Righteous
10. Fredoka One

Clicking a font button sets `--font-display` to the selected font.

## Color Schemes (8)

1. **Neon Street** (current default) — `#0A0A0A` bg, `#FF3D00` accent
2. **Matcha Zen** — `#0A0F0A` bg, `#4CAF50` accent
3. **Ocean Chill** — `#0A0A14` bg, `#00BCD4` accent
4. **Berry Burst** — `#140A14` bg, `#E040FB` accent
5. **Golden Hour** — `#14100A` bg, `#FFB300` accent
6. **Clean Light** — `#FAFAFA` bg, `#FF3D00` accent
7. **Cream Classic** — `#FFF8F0` bg, `#D84315` accent
8. **Midnight Blue** — `#0D1117` bg, `#58A6FF` accent

Each scheme overrides: `--bg`, `--bg-alt`, `--bg-elevated`, `--text`, `--text-muted`, `--accent`, `--accent-hover`, `--accent-glow`, `--border`, `--border-light`.

## Persistence

- `localStorage` keys: `testbar-font`, `testbar-scheme`
- Applied on page load (before paint if possible)
- "Reset" clears both keys and restores CSS defaults

## Removal

Delete `js/testbar.js` and remove the `<script>` tag from each HTML file.
