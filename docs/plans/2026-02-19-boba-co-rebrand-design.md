# The Boba Co. Website Rebrand — Design Document

**Date:** 2026-02-19
**Project:** Boba (`/home/peteylinux/Projects/Boba`)
**Client:** The Boba Co. (thebobaco.com) — Boba tea shop in Poway, CA
**Purpose:** First client showcase site for Skotteco (skotte.co)

---

## Overview

Rebrand The Boba Co.'s website from a generic Square Online template to a custom-designed static site with bold, street-food aesthetic. The site embeds Square ordering for functional pickup orders while showcasing Skotteco's design capabilities.

## Tech Stack

- Pure HTML/CSS/JS (no frameworks)
- Modular CSS matching Skotteco's pattern
- Cloudflare Pages deployment
- Square Market embed for ordering
- No build step required

## Site Architecture

### Pages (4)

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, featured drinks, brand story, location, Instagram, CTA |
| Menu | `menu.html` | Full menu with category filtering, drink cards, order CTA |
| Order | `order.html` | Square Market embed for actual ordering + pickup info |
| About | `about.html` | Brand story, location/map, contact info |

### Navigation

- Fixed header: Logo (left) + nav links (right) + "Order Now" accent CTA
- Mobile: Hamburger menu with overlay
- Links: Home, Menu, Order, About

## Visual Design System

### Theme: "Bold & Street-Food"

High contrast, dark backgrounds, neon accents. Urban energy meets artisanal boba.

### Color Palette

```css
--bg: #0A0A0A;              /* Base background (near-black) */
--bg-alt: #141414;           /* Card/section alternate */
--bg-elevated: #1E1E1E;     /* Elevated surfaces */
--text: #F5F5F5;             /* Primary text */
--text-muted: #8A8A8A;       /* Secondary text */
--accent: #FF3D00;           /* Primary accent (neon orange-red) */
--accent-secondary: #00E5FF; /* Secondary accent (electric cyan) */
--accent-glow: rgba(255, 61, 0, 0.3); /* Glow effects */
--border: rgba(255,255,255,0.08);      /* Subtle borders */
```

### Typography

- **Headings:** Bebas Neue or Oswald (bold condensed sans-serif, uppercase)
- **Body:** Inter or DM Sans (clean, modern)
- **Prices/Labels:** Monospace (JetBrains Mono or Space Mono) for street-food ticket feel

### Visual Elements

- Neon glow effects on hover states and CTAs
- High-contrast dark overlays on photography areas
- Subtle grain/noise texture on backgrounds
- Bold geometric shapes and dividers
- Category badges with bright accent colors

## Page Layouts

### Home Page

1. **Hero** — Full-screen, dark bg, placeholder drink photo, headline "THE BOBA CO.", subhead "Your Next Obsession", dual CTAs (Order Now, See Menu), neon glow on buttons
2. **Favorites** — 4-6 featured drink cards in grid, placeholder images, name + price (monospace), hover glow + scale
3. **The Vibe** — Brand story snippet, split layout (text | placeholder image)
4. **Find Us** — Location address + hours grid, map placeholder
5. **Instagram** — @thebobaco_poway grid of placeholder tiles
6. **Footer** — Logo, nav links, social icons, copyright

### Menu Page

1. **Header** — "OUR MENU" title
2. **Category Filter** — Horizontal pills/tabs (All, Milk Teas, Fruit Teas, Matcha, etc.), horizontal scroll on mobile
3. **Drink Cards Grid** — 3-col desktop, 2-col tablet, 1-col mobile. Each card: placeholder image, name, price (monospace), short description
4. **Sticky Order CTA** — Bottom bar: "ORDER NOW — Pick up in Poway"

### Order Page

1. **Header** — "ORDER ONLINE" + "Pick up at our Poway location"
2. **Square Embed** — Full-width container with Square Market embed iframe, custom border/shadow
3. **Pickup Info** — Location address + hours below embed

### About Page

1. **Our Story** — Brand narrative + placeholder shop photo
2. **Visit Us** — Address, hours, map placeholder, phone, email
3. **Footer**

## Square Integration

### Approach: Hybrid (Custom Menu + Square Ordering)

- **Menu page**: Custom-designed showcase with our visual design system. Static content, no Square dependency.
- **Order page**: Square Market embed using their embed script:

```html
<a href="https://mkt.com/thebobaco" class="sq-embed-menu">Order Online</a>
<script src="https://cdn.sq-api.com/market/embed.js" charset="utf-8"></script>
```

Customization via data attributes:
- `data-menu-accent-color` — Match our accent color
- `data-menu-item-images` — Control image size
- `data-menu-template` — Layout control

### Why Hybrid

- Menu page is the design showcase (Skotteco portfolio piece)
- Order page is functional (client manages menu in Square only)
- No dual-maintenance burden for the client

## File Structure

```
/home/peteylinux/Projects/Boba/
├── index.html
├── menu.html
├── order.html
├── about.html
├── css/
│   ├── variables.css      # Design tokens
│   ├── reset.css          # CSS reset + base styles
│   ├── layout.css         # Container, grid, flex utilities
│   ├── components.css     # All component styles
│   └── responsive.css     # Breakpoints
├── js/
│   └── main.js            # Nav, scroll reveal, category filter, etc.
├── img/                   # Placeholder images
├── docs/
│   └── plans/
│       └── 2026-02-19-boba-co-rebrand-design.md
├── CLAUDE.md
├── sitemap.xml
├── robots.txt
└── favicon.ico
```

## CSS Architecture (Matching Skotteco Pattern)

- `variables.css` — All design tokens (colors, spacing, typography, shadows)
- `reset.css` — Modern reset + base element styles + noise texture
- `layout.css` — Container, grid, flexbox utilities, spacing classes
- `components.css` — Header, nav, hero, cards, buttons, footer, etc.
- `responsive.css` — Mobile-first breakpoints (768px, 1024px, 1440px)

## Responsive Breakpoints

- Mobile: < 768px (default)
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1440px+

## Content Notes

- All images are placeholders (client provides real assets later)
- Menu items use The Boba Co.'s actual categories and sample drink names
- Prices are approximate based on current site
- Instagram section uses placeholder tiles

## Deployment

- Cloudflare Pages (matching Skotteco)
- No build step — serve files directly
- Custom domain: TBD (client's domain)
