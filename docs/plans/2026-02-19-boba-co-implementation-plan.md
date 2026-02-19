# The Boba Co. Rebrand Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a 4-page static website for The Boba Co. boba tea shop with bold street-food aesthetic, embedded Square ordering, and Skotteco-consistent architecture.

**Architecture:** Pure static HTML/CSS/JS site matching Skotteco's modular CSS pattern (variables, reset, layout, components, responsive). Dark theme with neon accents. Square Market embed on order page. No frameworks, no build step.

**Tech Stack:** HTML5, CSS3 (custom properties), Vanilla JS (IIFE pattern), Google Fonts (Bebas Neue + Inter + Space Mono), Cloudflare Pages deployment.

**Design Doc:** `docs/plans/2026-02-19-boba-co-rebrand-design.md`

**Reference:** Skotteco project at `/home/peteylinux/Projects/Skotteco/` — match its CSS architecture, JS patterns, and HTML structure conventions.

---

### Task 1: CSS Foundation — Design Tokens

**Files:**
- Create: `css/variables.css`

**Step 1: Create the design tokens file**

Follow the exact structure of `/home/peteylinux/Projects/Skotteco/css/variables.css` but with Boba Co. tokens:

```css
/* === DESIGN TOKENS - The Boba Co. Bold Street-Food Theme === */
:root {
  /* Colors — Bold Street-Food */
  --bg: #0A0A0A;
  --bg-alt: #141414;
  --bg-elevated: #1E1E1E;
  --bg-dark: #050505;
  --text: #F5F5F5;
  --text-muted: #8A8A8A;
  --accent: #FF3D00;
  --accent-hover: #FF5722;
  --accent-light: rgba(255, 61, 0, 0.1);
  --accent-glow: rgba(255, 61, 0, 0.3);
  --accent-secondary: #00E5FF;
  --accent-secondary-hover: #18FFFF;
  --accent-secondary-glow: rgba(0, 229, 255, 0.3);
  --success: #00E676;
  --danger: #FF1744;
  --border: rgba(255, 255, 255, 0.08);
  --border-light: rgba(255, 255, 255, 0.15);
  --overlay: rgba(5, 5, 5, 0.7);
  --overlay-heavy: rgba(5, 5, 5, 0.9);

  /* Typography */
  --font-display: 'Bebas Neue', 'Impact', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Space Mono', 'Courier New', monospace;

  /* Type Scale — same as Skotteco */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
  --text-5xl: 3.25rem;
  --text-6xl: 4rem;
  --text-7xl: 5rem;

  /* Line Heights */
  --leading-tight: 1.08;
  --leading-snug: 1.2;
  --leading-normal: 1.7;
  --leading-relaxed: 1.8;

  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.1em;
  --tracking-editorial: 0.2em;

  /* Font Weights */
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* Spacing — same scale as Skotteco */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Containers */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1200px;
  --content-padding: 5%;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Shadows — neon glow style */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.6);
  --shadow-accent: 0 4px 20px var(--accent-glow);
  --shadow-accent-lg: 0 8px 40px var(--accent-glow);

  /* Transitions — same as Skotteco */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
  --transition-fast: 150ms cubic-bezier(0.22, 1, 0.36, 1);
  --transition-base: 300ms cubic-bezier(0.22, 1, 0.36, 1);
  --transition-slow: 600ms cubic-bezier(0.22, 1, 0.36, 1);

  /* Section Padding */
  --section-padding: clamp(4rem, 8vw, 8rem);

  /* Z-Index */
  --z-behind: -1;
  --z-base: 0;
  --z-above: 1;
  --z-header: 100;
  --z-overlay: 200;
  --z-modal: 300;
  --z-toast: 400;
  --z-sticky: 50;

  /* Layout */
  --header-height: 72px;
}
```

**Step 2: Verify the file was created correctly**

Run: `wc -l css/variables.css`
Expected: ~105 lines

**Step 3: Commit**

```bash
git add css/variables.css
git commit -m "feat: add design tokens for Boba Co. street-food theme"
```

---

### Task 2: CSS Foundation — Reset + Layout

**Files:**
- Create: `css/reset.css`
- Create: `css/layout.css`

**Step 1: Create reset.css**

Copy the exact structure from `/home/peteylinux/Projects/Skotteco/css/reset.css`. The only changes needed:
- Same grain/noise texture overlay (body::after)
- Same box-sizing reset, html smoothing, body base styles
- Headings use `--font-display` (which maps to Bebas Neue)
- For Boba Co., headings should have `text-transform: uppercase` and `letter-spacing: var(--tracking-wide)` since Bebas Neue is a display font that looks best uppercase

**Step 2: Create layout.css**

Copy the exact structure from `/home/peteylinux/Projects/Skotteco/css/layout.css`. Same container, section, grid, flex, spacing helpers. No changes needed — the layout utilities are theme-agnostic.

**Step 3: Verify**

Run: `wc -l css/reset.css css/layout.css`
Expected: ~130 lines for reset, ~70 lines for layout

**Step 4: Commit**

```bash
git add css/reset.css css/layout.css
git commit -m "feat: add CSS reset and layout utilities"
```

---

### Task 3: CSS Foundation — Components (Header, Nav, Buttons, Footer)

**Files:**
- Create: `css/components.css`

**Step 1: Write the component styles**

This is the largest CSS file. Follow Skotteco's `components.css` structure but with Boba Co.-specific styling. Key components needed:

**Header/Nav:**
```css
.nav { position: fixed; top: 0; left: 0; right: 0; height: var(--header-height); z-index: var(--z-header); background: var(--bg); border-bottom: 1px solid var(--border); transition: background var(--transition-base); }
.home .nav { background: transparent; border-color: transparent; }
.nav.scrolled { background: rgba(10, 10, 10, 0.95); backdrop-filter: blur(20px); border-color: var(--border); }
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: 100%; }
.logo { font-family: var(--font-display); font-size: var(--text-2xl); color: var(--text); letter-spacing: var(--tracking-wider); text-transform: uppercase; }
.nav-links { display: none; align-items: center; gap: var(--space-8); }
.nav-link { font-size: var(--text-sm); color: var(--text-muted); letter-spacing: var(--tracking-wide); text-transform: uppercase; font-weight: var(--weight-medium); transition: color var(--transition-fast); }
.nav-link:hover { color: var(--text); }
```

**Buttons:**
```css
.btn { display: inline-flex; align-items: center; justify-content: center; padding: var(--space-3) var(--space-6); font-family: var(--font-body); font-size: var(--text-sm); font-weight: var(--weight-semibold); letter-spacing: var(--tracking-wide); text-transform: uppercase; border-radius: var(--radius-sm); transition: all var(--transition-base); cursor: pointer; }
.btn-primary { background: var(--accent); color: #fff; box-shadow: var(--shadow-accent); }
.btn-primary:hover { background: var(--accent-hover); box-shadow: var(--shadow-accent-lg); transform: translateY(-2px); }
.btn-secondary { background: transparent; color: var(--text); border: 1px solid var(--border-light); }
.btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
.btn-lg { padding: var(--space-4) var(--space-8); font-size: var(--text-base); }
.btn-sm { padding: var(--space-2) var(--space-4); font-size: var(--text-xs); }
```

**Hero:**
```css
.hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: calc(var(--header-height) + var(--space-16)) var(--content-padding) var(--space-16); position: relative; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; background: var(--bg); z-index: var(--z-behind); }
.hero-content { position: relative; z-index: var(--z-above); max-width: 800px; }
.hero h1 { font-size: clamp(3.5rem, 8vw, 7rem); letter-spacing: var(--tracking-wider); text-transform: uppercase; margin-bottom: var(--space-4); }
.hero-subtitle { font-size: clamp(1rem, 2vw, 1.25rem); color: var(--text-muted); margin-bottom: var(--space-8); }
.hero-ctas { display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap; }
```

**Section Labels:**
```css
.section-label { display: inline-block; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent); letter-spacing: var(--tracking-editorial); text-transform: uppercase; margin-bottom: var(--space-4); }
.section-title { margin-bottom: var(--space-4); }
.section-subtitle { color: var(--text-muted); max-width: 600px; }
```

**Drink Cards:**
```css
.drink-card { background: var(--bg-alt); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; transition: all var(--transition-base); }
.drink-card:hover { border-color: var(--accent); box-shadow: var(--shadow-accent); transform: translateY(-4px); }
.drink-card-img { width: 100%; aspect-ratio: 1; background: var(--bg-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-size: var(--text-sm); }
.drink-card-body { padding: var(--space-4); }
.drink-card-name { font-family: var(--font-display); font-size: var(--text-xl); text-transform: uppercase; letter-spacing: var(--tracking-wide); }
.drink-card-price { font-family: var(--font-mono); font-size: var(--text-sm); color: var(--accent); margin-top: var(--space-1); }
.drink-card-desc { font-size: var(--text-sm); color: var(--text-muted); margin-top: var(--space-2); }
```

**Category Filter:**
```css
.category-filter { display: flex; gap: var(--space-2); overflow-x: auto; padding-bottom: var(--space-2); -webkit-overflow-scrolling: touch; scrollbar-width: none; }
.category-filter::-webkit-scrollbar { display: none; }
.category-pill { padding: var(--space-2) var(--space-4); font-size: var(--text-sm); font-weight: var(--weight-medium); color: var(--text-muted); background: var(--bg-alt); border: 1px solid var(--border); border-radius: var(--radius-full); white-space: nowrap; cursor: pointer; transition: all var(--transition-fast); }
.category-pill:hover, .category-pill.active { color: var(--text); background: var(--accent); border-color: var(--accent); }
```

**Sticky Order Bar:**
```css
.sticky-order { position: fixed; bottom: 0; left: 0; right: 0; background: var(--bg); border-top: 1px solid var(--border); padding: var(--space-3) var(--content-padding); z-index: var(--z-sticky); display: flex; justify-content: center; backdrop-filter: blur(20px); }
```

**Square Embed Container:**
```css
.square-embed { background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: var(--space-8); min-height: 600px; }
.square-embed iframe { width: 100%; min-height: 500px; border: none; }
```

**Mobile Menu:**
```css
.menu-toggle { display: flex; flex-direction: column; gap: 5px; width: 24px; cursor: pointer; z-index: var(--z-overlay); }
.menu-toggle span { display: block; height: 2px; background: var(--text); transition: all var(--transition-fast); }
.menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.menu-toggle.active span:nth-child(2) { opacity: 0; }
.menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
.mobile-menu { position: fixed; top: 0; right: -100%; width: 80%; max-width: 360px; height: 100vh; background: var(--bg); z-index: var(--z-overlay); padding: calc(var(--header-height) + var(--space-8)) var(--space-8) var(--space-8); transition: right var(--transition-base); }
.mobile-menu.active { right: 0; }
.mobile-overlay { position: fixed; inset: 0; background: var(--overlay-heavy); z-index: calc(var(--z-overlay) - 1); opacity: 0; pointer-events: none; transition: opacity var(--transition-base); }
.mobile-overlay.active { opacity: 1; pointer-events: all; }
.mobile-menu-link { display: block; font-family: var(--font-display); font-size: var(--text-3xl); text-transform: uppercase; letter-spacing: var(--tracking-wide); color: var(--text); padding: var(--space-3) 0; border-bottom: 1px solid var(--border); }
.mobile-menu-link:hover { color: var(--accent); }
```

**Footer:**
```css
.footer { padding: var(--section-padding) 0 var(--space-8); border-top: 1px solid var(--border); }
.footer-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }
.footer-logo { font-family: var(--font-display); font-size: var(--text-3xl); color: var(--text); text-transform: uppercase; letter-spacing: var(--tracking-wider); }
.footer-tagline { color: var(--text-muted); margin-top: var(--space-2); }
.footer-heading { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent); letter-spacing: var(--tracking-editorial); text-transform: uppercase; margin-bottom: var(--space-4); }
.footer-link { display: block; color: var(--text-muted); font-size: var(--text-sm); padding: var(--space-1) 0; transition: color var(--transition-fast); }
.footer-link:hover { color: var(--text); }
.footer-bottom { margin-top: var(--space-12); padding-top: var(--space-6); border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-4); color: var(--text-muted); font-size: var(--text-sm); }
.social-links { display: flex; gap: var(--space-4); }
.social-link { color: var(--text-muted); transition: color var(--transition-fast); }
.social-link:hover { color: var(--accent); }
```

**Scroll Reveal:**
```css
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out); }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-group > * { opacity: 0; transform: translateY(20px); transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out); }
.reveal-group.visible > *:nth-child(1) { transition-delay: 0s; opacity: 1; transform: translateY(0); }
.reveal-group.visible > *:nth-child(2) { transition-delay: 0.1s; opacity: 1; transform: translateY(0); }
.reveal-group.visible > *:nth-child(3) { transition-delay: 0.2s; opacity: 1; transform: translateY(0); }
.reveal-group.visible > *:nth-child(4) { transition-delay: 0.3s; opacity: 1; transform: translateY(0); }
.reveal-group.visible > *:nth-child(5) { transition-delay: 0.4s; opacity: 1; transform: translateY(0); }
.reveal-group.visible > *:nth-child(6) { transition-delay: 0.5s; opacity: 1; transform: translateY(0); }
```

**Instagram Grid:**
```css
.ig-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
.ig-tile { aspect-ratio: 1; background: var(--bg-elevated); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-size: var(--text-xs); }
```

**Info Grid (Location/Hours):**
```css
.info-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }
.info-label { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--accent); text-transform: uppercase; letter-spacing: var(--tracking-editorial); margin-bottom: var(--space-3); }
.hours-list dt { font-weight: var(--weight-medium); }
.hours-list dd { color: var(--text-muted); margin-bottom: var(--space-2); }
.map-placeholder { width: 100%; aspect-ratio: 16/9; background: var(--bg-elevated); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--text-muted); border: 1px solid var(--border); }
```

**Step 2: Verify file size**

Run: `wc -l css/components.css`
Expected: ~200-300 lines

**Step 3: Commit**

```bash
git add css/components.css
git commit -m "feat: add component styles (nav, hero, cards, footer)"
```

---

### Task 4: CSS Foundation — Responsive Breakpoints

**Files:**
- Create: `css/responsive.css`

**Step 1: Create responsive.css**

Match the Skotteco responsive pattern exactly. Key additions for Boba Co.:

```css
/* 768px+ (Tablet) */
@media (min-width: 768px) {
  .nav-links { display: flex; }
  .menu-toggle { display: none; }
  .mobile-menu, .mobile-overlay { display: none; }
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 2fr 1fr 1fr; }
  .info-grid { grid-template-columns: 1fr 1fr; }
  .ig-grid { grid-template-columns: repeat(6, 1fr); }
}

/* 1024px+ (Desktop) */
@media (min-width: 1024px) {
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-4 { grid-template-columns: repeat(3, 1fr); }
}

/* 1440px+ */
@media (min-width: 1440px) {
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
}
```

Include same accessibility patterns: landscape mobile, touch devices, reduced motion, print.

**Step 2: Verify**

Run: `wc -l css/responsive.css`
Expected: ~80-100 lines

**Step 3: Commit**

```bash
git add css/responsive.css
git commit -m "feat: add responsive breakpoints"
```

---

### Task 5: Home Page (index.html)

**Files:**
- Create: `index.html`

**Step 1: Build the home page**

Follow the Skotteco `index.html` structure exactly for the `<head>` pattern (meta tags, Open Graph, fonts, CSS links, JSON-LD, deferred JS).

Key sections in `<body class="home">`:

1. **Header/Nav** — same pattern as Skotteco: `.nav > .nav-inner.container > .logo + .nav-links + .menu-toggle`, plus mobile menu and overlay
2. **Hero** — `.hero > .hero-bg + .hero-content > h1 + .hero-subtitle + .hero-ctas`
3. **Favorites** — `.section.reveal > .container > .section-label + .section-title + .grid-4.reveal-group > .drink-card * 6`
4. **The Vibe** — `.section.section-alt.reveal > .container > .grid-2 > text-col + img-placeholder-col`
5. **Find Us** — `.section.reveal > .container > .info-grid > location-col + hours-col + map-placeholder`
6. **Instagram** — `.section.section-alt.reveal > .container > .section-label + .ig-grid > .ig-tile * 6`
7. **Footer** — `.footer > .container > .footer-grid + .footer-bottom`

Google Fonts to load:
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&family=Space+Mono&display=swap" rel="stylesheet">
```

Menu categories from the current Boba Co site: Milk Teas, Premium Milk Teas, Fruit Teas, Matcha, Fruit Milks, Butterfly Juices, Plain Tea, Smoothies & Slushees, Coffee, Shaved Snow.

Sample featured drinks for the Favorites section (use placeholder images):
- Classic Milk Tea — $5.50
- Taro Milk Tea — $6.00
- Mango Fruit Tea — $5.75
- Matcha Latte — $6.50
- Brown Sugar Boba — $6.25
- Thai Tea — $5.50

**Step 2: Preview the page**

Run: `python3 -m http.server 8000 -d /home/peteylinux/Projects/Boba` (background)
Then verify the page loads and looks correct.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add home page with hero, favorites, location sections"
```

---

### Task 6: JavaScript — Navigation + Scroll Animations

**Files:**
- Create: `js/main.js`

**Step 1: Write main.js**

Follow Skotteco's `main.js` IIFE pattern exactly. Include:

1. **Header scroll** — transparent to frosted glass on home page (same as Skotteco)
2. **Mobile menu** — toggle, close on link click, close on ESC, close on overlay click
3. **Scroll reveal** — IntersectionObserver on `.reveal` and `.reveal-group` elements
4. **Smooth scroll** — anchor links with header offset
5. **Category filter** — click `.category-pill` to filter `.drink-card` by `data-category` attribute (show/hide with CSS class)

Category filter logic:
```javascript
function initCategoryFilter() {
  var pills = document.querySelectorAll('.category-pill');
  var cards = document.querySelectorAll('.drink-card');
  if (!pills.length || !cards.length) return;

  pills.forEach(function(pill) {
    pill.addEventListener('click', function() {
      var category = this.getAttribute('data-category');

      pills.forEach(function(p) { p.classList.remove('active'); });
      this.classList.add('active');

      cards.forEach(function(card) {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
```

**Step 2: Verify JS loads without errors**

Open browser console, check for no errors. Test: mobile menu toggle, scroll reveal, smooth scrolling.

**Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add JS for nav, scroll reveal, category filter"
```

---

### Task 7: Menu Page (menu.html)

**Files:**
- Create: `menu.html`

**Step 1: Build the menu page**

Same `<head>` structure as index.html but with menu-specific meta tags.

Sections:
1. **Header/Nav** — same as index.html (copy the nav HTML)
2. **Menu Header** — `.section > .container > h1 "OUR MENU" + subtitle`
3. **Category Filter** — `.category-filter > .category-pill[data-category] * N`
   Categories: All, Milk Teas, Premium Milk Teas, Fruit Teas, Matcha, Fruit Milks, Butterfly Juices, Coffee, Smoothies, Shaved Snow
4. **Drink Cards Grid** — `.grid-3.reveal-group > .drink-card[data-category] * ~20-30 items`
5. **Sticky Order CTA** — `.sticky-order > .btn.btn-primary` linking to order.html
6. **Footer** — same as index.html

Sample drink items per category (use placeholder images, approximate prices):

**Milk Teas:** Classic Milk Tea $5.50, Taro Milk Tea $6.00, Thai Tea $5.50, Wintermelon Milk Tea $5.75, Honeydew Milk Tea $5.75
**Premium Milk Teas:** Brown Sugar Boba $6.25, Dirty Matcha $6.50, Ube Milk Tea $6.50
**Fruit Teas:** Mango Fruit Tea $5.75, Passion Fruit Tea $5.75, Lychee Fruit Tea $5.75, Peach Fruit Tea $5.75
**Matcha:** Matcha Latte $6.50, Matcha Fruit Tea $6.00
**Coffee:** Vietnamese Coffee $5.50, Iced Latte $5.75
**Smoothies:** Mango Smoothie $6.50, Strawberry Smoothie $6.50, Taro Smoothie $6.75

Each card: `data-category` attribute for filtering, placeholder image div, name, price, short description.

**Step 2: Verify category filtering works**

Open menu.html, click category pills, verify cards filter correctly.

**Step 3: Commit**

```bash
git add menu.html
git commit -m "feat: add menu page with category filtering"
```

---

### Task 8: Order Page (order.html)

**Files:**
- Create: `order.html`

**Step 1: Build the order page**

Sections:
1. **Header/Nav** — same nav
2. **Order Header** — `.section > .container > h1 "ORDER ONLINE" + .section-subtitle "Pick up at our Poway location"`
3. **Square Embed** — `.square-embed` container with the Square Market embed code:
```html
<div class="square-embed">
  <a href="https://mkt.com/thebobaco" class="sq-embed-menu"
     data-menu-accent-color="FF3D00">Order Online</a>
  <script src="https://cdn.sq-api.com/market/embed.js" charset="utf-8"></script>
</div>
```
Note: The actual Square Market URL for The Boba Co may differ. Use `https://mkt.com/thebobaco` as placeholder — client will provide the correct URL.
4. **Pickup Info** — Location address, hours, phone
5. **Footer** — same

**Step 2: Verify page loads**

The Square embed won't work without the correct merchant URL, but verify the page structure renders correctly and the embed container is styled properly.

**Step 3: Commit**

```bash
git add order.html
git commit -m "feat: add order page with Square Market embed"
```

---

### Task 9: About Page (about.html)

**Files:**
- Create: `about.html`

**Step 1: Build the about page**

Sections:
1. **Header/Nav** — same nav
2. **Our Story** — `.section.reveal > .container > .grid-2 > text-col (brand story paragraph) + img-placeholder-col`
3. **Visit Us** — `.section.section-alt.reveal > .container > .info-grid > address-col + hours-col + .map-placeholder`
4. **Footer** — same

Brand story placeholder text (client will replace):
"The Boba Co. started with a simple idea: bring hand-crafted, high-quality boba drinks to the Poway community. Every drink is made to order with fresh ingredients, real fruit, and carefully sourced tea. Whether you're a boba veteran or trying it for the first time, we've got something you'll love."

**Step 2: Verify page loads**

Open about.html, check all sections render correctly.

**Step 3: Commit**

```bash
git add about.html
git commit -m "feat: add about page with brand story and location"
```

---

### Task 10: SEO + Meta Files

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`
- Create: `CLAUDE.md`

**Step 1: Create robots.txt**

```
User-agent: *
Allow: /
Sitemap: https://thebobaco.com/sitemap.xml
```

**Step 2: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://thebobaco.com/</loc><priority>1.0</priority></url>
  <url><loc>https://thebobaco.com/menu.html</loc><priority>0.9</priority></url>
  <url><loc>https://thebobaco.com/order.html</loc><priority>0.9</priority></url>
  <url><loc>https://thebobaco.com/about.html</loc><priority>0.7</priority></url>
</urlset>
```

**Step 3: Create CLAUDE.md**

Document the project: tech stack, file structure, deployment commands, Square integration notes.

**Step 4: Commit**

```bash
git add robots.txt sitemap.xml CLAUDE.md
git commit -m "feat: add SEO files and project documentation"
```

---

### Task 11: Final Review + Visual Polish

**Step 1: Run local server and review all 4 pages**

Run: `python3 -m http.server 8000 -d /home/peteylinux/Projects/Boba`

Check each page for:
- Header transparency on home page, solid on inner pages
- Mobile menu works on all pages
- Scroll reveal animations trigger
- Category filter works on menu page
- Square embed container renders on order page
- Footer is consistent across all pages
- Responsive behavior at all breakpoints

**Step 2: Fix any visual issues found**

**Step 3: Final commit**

```bash
git add -A
git commit -m "fix: visual polish and responsive adjustments"
```
