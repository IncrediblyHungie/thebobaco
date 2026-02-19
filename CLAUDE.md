# The Boba Co. Website

Static website rebrand for The Boba Co. boba tea shop in Poway, CA.
First client showcase for Skotteco (skotte.co).

## Tech Stack

Pure HTML/CSS/JS. No frameworks. Deployed via Cloudflare Pages.

## File Structure

```
index.html          - Homepage (hero, featured drinks, about preview, CTA)
menu.html           - Full drink menu
order.html          - Order page (Square Market embed placeholder)
about.html          - About / story page
css/
  variables.css     - Design tokens (colors, fonts, spacing)
  reset.css         - CSS reset / normalize
  layout.css        - Grid and layout utilities
  components.css    - All component styles
  responsive.css    - Media queries
js/
  main.js           - Navigation, animations, interactions
robots.txt          - Search engine directives
sitemap.xml         - Sitemap for SEO
docs/plans/         - Design and planning documents
```

## Preview

```bash
python3 -m http.server 8000
```

## Deploy

Cloudflare Pages. Needs project setup:

```bash
npx wrangler pages deploy . --project-name=thebobaco
```

## Square Integration

`order.html` has a placeholder for the Square Market embed. When the client provides their Square account, uncomment the embed code in that file.

## Design System

- **Background**: #0A0A0A (near black)
- **Primary accent**: #FF3D00 (neon orange-red)
- **Secondary accent**: #00E5FF (electric cyan)
- **Fonts**: Bebas Neue (headings) + Inter (body) + Space Mono (accents)
- **Theme**: Bold street-food aesthetic

## Content Notes

All images are placeholders. Client provides real photos, logo, and exact address.
