# CRESCENT MOON INSULATION LLC — MASTER IMPLEMENTATION PLAN

**Date:** 2026-02-25
**Owner:** Ben | +1 218 232 9884 | crescentmoonco2022@gmail.com | Pillager, MN
**Stack:** Static HTML/CSS/JS | GoDaddy Deluxe Managed WordPress Hosting (SSL included)
**Produced by:** Three Opus sub-agents (UX/Structure + Design/Visual + Copy/Content)

---

## OVERVIEW

This is the combined, cohesive implementation plan for the Crescent Moon Insulation LLC website. Three specialist agents have produced outputs that are fully aligned and cross-referenced. This document is the single source of truth before any code is written.

**Detailed references:**
- `plan/01-site-copy.md` — All final copy, metadata, schema text, local SEO content
- `plan/02-design-system.md` — Full visual design system, CSS custom properties, .htaccess config
- `plan/03-ux-structure.md` — Sitemap, page-by-page section specs, conversion strategy, SEO structure

---

## PART 1: SITE STRUCTURE

### Pages (11 total)

| # | Page | URL | Purpose |
|---|------|-----|---------|
| 1 | Homepage | `/` | Primary landing, conversion hub |
| 2 | About | `/about` | Trust, Ben's story |
| 3 | Services Overview | `/services` | Service hub, internal links |
| 4 | Spray Foam | `/services/spray-foam-insulation` | Service page |
| 5 | Blown-In Insulation | `/services/blown-in-insulation` | Service page |
| 6 | Batt & Roll | `/services/batt-insulation` | Service page |
| 7 | Commercial Insulation | `/services/commercial-insulation` | Service page |
| 8 | New Construction | `/services/new-construction-insulation` | Service page |
| 9 | Service Areas | `/service-areas` | Local SEO, geographic reach |
| 10 | Contact / Quote | `/contact` | Primary conversion page |
| 11 | 404 | `/404.html` | Error handling |

### Navigation Structure

```
Sticky Header (80px desktop / 64px mobile):
[newLogo.png 48px] — Home — About — Services ▾ — Service Areas — Contact — [Get a Free Quote]
                         └ Spray Foam
                         └ Blown-In
                         └ Batt & Roll
                         └ Commercial
                         └ New Construction

Mobile: Hamburger → full-screen overlay with stacked links
```

---

## PART 2: DESIGN SYSTEM (SUMMARY)

### Colours

| Role | Hex | Usage |
|------|-----|-------|
| White | #FFFFFF | Dominant background (60%+ of layout) |
| Light Grey | #F5F5F5 | Alternating section backgrounds |
| Mid Grey | #E0E0E0 | Borders, dividers |
| Charcoal | #333333 | Body text, CTA banner backgrounds |
| Black | #111111 | Headings, nav, footer |
| **Red** | **#CC0000** | **CTAs, eyebrow text, icon accents ONLY** |
| Red Hover | #A30000 | Button hover |

**Rule:** Red is used sparingly. Never as a large background. Maximum 1 red CTA banner per page.

### Typography

| Level | Font | Weight | Desktop Size |
|-------|------|--------|-------------|
| Display / H1 | Barlow Condensed | 900/800 | 61px / 49px |
| H2 | Barlow Condensed | 700 | 39px |
| H3 | Barlow Condensed | 700 | 31px |
| H4 | Barlow Condensed | 600 | 25px |
| Eyebrow | Inter | 600 | 14px uppercase |
| Body Large | Inter | 400 | 18px |
| Body | Inter | 400 | 16px |

All headings: `text-transform: uppercase`. Eyebrow: `color: #CC0000`.

### Key Components

- **Nav:** Sticky, white, transparent on hero → white on scroll
- **Hero:** 85vh, full-bleed image, dark overlay (80%→30%), left-aligned content on desktop
- **Service cards:** White bg, 8px radius, hover lift shadow + translateY(-4px), Lucide line icons
- **Stat bar:** #333333 bg, large Barlow Condensed numbers, red accent chars (+, %)
- **Testimonials:** #F5F5F5 section, white cards, subtle red quote mark
- **CTA banners:** #333333 bg (standard), max 1 × #CC0000 bg per page
- **Footer:** #111111, 4-col desktop
- **Forms:** #F5F5F5 input bg, 52px height, 1px border → #333333 on focus
- **Buttons:** Red primary (hover #A30000 + shadow + -1px lift), charcoal/white outline secondary

### Grid & Spacing

- 8px base unit
- Container max-width: 1280px (narrow: 960px, text: 720px)
- Section padding: 96px desktop / 64px tablet / 48px mobile
- Card grid: 3-col desktop / 2-col tablet / 1-col mobile, 32px gap

---

## PART 3: PAGE-BY-PAGE SECTION MAP

### Homepage ( / )

```
1. HERO (85vh, dark overlay)
   Eyebrow → H1 "Built for Minnesota Winters." → Subheadline → [Get Free Estimate] [Our Services]
   Trust badges: Licensed & Insured | Locally Owned | Free Estimates

2. SERVICES OVERVIEW (white)
   Eyebrow "WHAT WE DO" → H2 "Our Insulation Services" → intro
   6 service cards: Spray Foam / Blown-In / Batt & Roll / Removal / Attic / Commercial

3. WHY CHOOSE US (light grey, 2-col)
   H2 "Why Minnesota Homeowners Trust Crescent Moon"
   4 trust points with red checkmark icons → Ghost CTA "Learn About Us →"

4. STATS BAR (charcoal)
   10+ Years | 500+ Projects | 100% Satisfaction | Statewide Service

5. TESTIMONIALS (white)
   H2 "What Our Customers Say" → 3 cards (Sarah M. Duluth / Tom & Linda R. Brainerd / Mark D. Minneapolis)

6. SERVICE AREAS CALLOUT (light grey)
   H2 → key cities list → "View All Service Areas →"

7. CTA BANNER (charcoal)
   H2 "Stop Losing Heat. Start Saving Money." → [Request a Free Estimate] + phone

8. FOOTER
```

### About ( /about )

```
1. HERO (40-50vh) — "The People Behind Your Comfort"
2. OUR STORY (white, 2-col) — 4 paragraphs, image right
3. MISSION (light grey, centered narrow) — pull-quote style
4. VALUES (white) — 3 cards: Integrity / Craftsmanship / Community
5. STATS BAR (charcoal) — reused
6. OWNER SPOTLIGHT (light grey, 2-col) — Ben's photo + bio
7. CTA BANNER (charcoal) — "Work With a Team That Cares"
8. FOOTER
```

### Services Overview ( /services )

```
1. HERO — "Our Insulation Services"
2. SERVICES GRID (white) — 6 large cards with images + descriptions + "Learn More" buttons
3. WHY INSULATION MATTERS (light grey) — 4 benefit items with icons
4. PROCESS (white) — 4 horizontal steps: Consultation → Proposal → Installation → QA
5. CTA BANNER (charcoal) — "Not Sure Which Insulation You Need?"
6. FOOTER
```

### Individual Service Pages (template for all 5)

```
1. HERO — [Service Name]
2. SERVICE DESCRIPTION (white, 2-col) — H2 "What Is [Service]?" + image
3. BENEFITS (light grey) — 5 benefit items in grid
4. WHY IT MATTERS IN MINNESOTA (white)
5. PROCESS (light grey) — 3-4 steps
6. CTA BANNER (charcoal)
7. RELATED SERVICES (white) — 2-3 cross-link cards
8. FOOTER
```

### Service Areas ( /service-areas )

```
1. HERO — "Areas We Serve Across Minnesota"
2. COVERAGE MAP (white) — areas by region: Northern / Central / Twin Cities / Southern MN
3. LOCAL CLIMATE SECTION (light grey) — "Minnesota's Climate Demands Expert Insulation"
4. CTA BANNER (charcoal)
5. FOOTER
```

### Contact ( /contact )

```
1. HERO (30-40vh) — "Let's Talk About Your Project"
2. TWO-COLUMN CONTACT (white)
   LEFT 60%: H2 "Request a Free Quote" + form
   RIGHT 40%: Phone / Email / Hours / Service area note
3. FOOTER
```

---

## PART 4: SEO PLAN

### Per-Page Metadata

| Page | Meta Title | H1 | Focus Keyword |
|------|-----------|-----|---------------|
| Home | Minnesota Insulation Contractor \| Crescent Moon Insulation | Built for Minnesota Winters. | Minnesota insulation contractor |
| About | About Crescent Moon Insulation \| Minnesota Owned | The People Behind Your Comfort | Minnesota insulation company |
| Services | Insulation Services \| Crescent Moon Insulation, Minnesota | Our Insulation Services | Minnesota insulation services |
| Spray Foam | Spray Foam Insulation Minnesota \| Crescent Moon Insulation | Spray Foam Insulation | spray foam insulation Minnesota |
| Blown-In | Blown-In Attic Insulation Minnesota \| Crescent Moon | Blown-In Attic Insulation | blown-in attic insulation Minnesota |
| Batt & Roll | Batt & Roll Insulation Minnesota \| Crescent Moon Insulation | Batt & Roll Insulation | batt insulation Minnesota |
| Commercial | Commercial Insulation Services Minnesota \| Crescent Moon | Commercial Insulation Services | commercial insulation Minnesota |
| New Construction | New Construction Insulation Minnesota \| Crescent Moon | New Construction Insulation | new construction insulation Minnesota |
| Service Areas | Insulation Service Areas in Minnesota \| Crescent Moon | Areas We Serve Across Minnesota | insulation contractor Minnesota |
| Contact | Get a Free Insulation Estimate \| Crescent Moon Insulation | Let's Talk About Your Project | free insulation estimate Minnesota |

### Technical SEO Requirements (every page)
- One `<h1>` per page
- Canonical tag: `<link rel="canonical" href="https://www.crescentmooninsulation.com/[page]">`
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- All images: `alt` text, explicit `width` + `height`, `loading="lazy"` (except hero `loading="eager"`)
- `lang="en"` on `<html>`

### Schema Markup (JSON-LD)

**All pages — LocalBusiness:**
```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Crescent Moon Insulation LLC",
  "telephone": "+1-218-232-9884",
  "areaServed": { "@type": "State", "name": "Minnesota" },
  "url": "https://www.crescentmooninsulation.com",
  "priceRange": "$$"
}
```

**Service pages — Service schema (in addition to LocalBusiness)**

**Contact page — ContactPage schema**

**Homepage — WebSite schema + AggregateRating**

### Files Required
- `sitemap.xml` — all pages, priorities (Home 1.0, Contact 0.8, Services 0.9, About 0.7)
- `robots.txt` — allow all crawlers, reference sitemap
- `favicon.ico` + `favicon-32.png` + `apple-touch-icon.png`

### Local SEO
- **NAP (consistent everywhere):** Crescent Moon Insulation LLC | +1 (218) 232-9884 | Minnesota
- **Google Business Profile:** Set up / claim for Ben — service-area business (statewide MN)
- **Service areas content:** Northern MN (Duluth, Hibbing, Grand Rapids, Bemidji, International Falls) / Central (Brainerd, St. Cloud, Alexandria) / Twin Cities (Minneapolis, St. Paul) / Southern (Rochester, Moorhead, Willmar)

---

## PART 5: PERFORMANCE & HOSTING

### Performance Targets
- Initial page load: under 500KB
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- Google PageSpeed: 90+ desktop, 80+ mobile

### Image Strategy
- Format: WebP (AVIF optional for hero) with JPEG fallback
- Hero: provide 640w / 1280w / 1920w via `<picture>` + `srcset`
- All photos compressed to under 200KB
- Hero: `loading="eager"`, all else: `loading="lazy"`

### Fonts
- Google Fonts: Barlow Condensed (600/700/800/900) + Inter (400/500/600/700)
- `<link rel="preconnect">` to fonts.googleapis.com + fonts.gstatic.com
- `&display=swap` in URL (font-display: swap)
- Fallback stacks defined

### Critical CSS
- Inline navbar + hero styles in `<head>` (~14KB max)
- Defer full stylesheet with preload pattern

### JavaScript
- Vanilla JS only — no frameworks
- `main.js` handles: hamburger toggle, scroll nav effect, mobile sticky CTA, smooth scroll

### GoDaddy Hosting Setup
- Upload to `public_html/`
- `.htaccess` configured for: HTTPS redirect, www redirect, Gzip compression, browser caching (images 1yr, CSS/JS 1mo, HTML 1hr), security headers, directory listing disabled
- No server-side language needed — fully static
- Use `?v=x.x` cache-busting on CSS/JS updates

---

## PART 6: IMPLEMENTATION ORDER

### Phase 1 — Foundation
1. Set up file structure in `public_html/`
2. Write `styles.css` with all CSS custom properties and global styles
3. Write `main.js` with nav toggle, scroll behaviour, mobile sticky CTA
4. Build `header.html` snippet (nav component)
5. Build `footer.html` snippet

### Phase 2 — Core Pages
6. `index.html` (Homepage) — all 7 sections
7. `about.html`
8. `contact.html`

### Phase 3 — Service Pages
9. `services.html` (overview)
10. `services/spray-foam-insulation.html`
11. `services/blown-in-insulation.html`
12. `services/batt-insulation.html`
13. `services/commercial-insulation.html`
14. `services/new-construction-insulation.html`

### Phase 4 — Supporting Pages
15. `service-areas.html`
16. `404.html`

### Phase 5 — SEO & Performance
17. `sitemap.xml`
18. `robots.txt`
19. `.htaccess`
20. All meta tags, schema markup, Open Graph tags
21. Image optimisation (WebP conversion, srcset)
22. Critical CSS extraction

### Phase 6 — QA
23. Test all pages on desktop, tablet, mobile
24. Validate HTML (W3C), accessibility (contrast, ARIA, tab order)
25. Run Lighthouse audit — target 90+ scores
26. Test all CTAs and form submission
27. Cross-browser test (Chrome, Firefox, Safari, Edge)

---

## LOGO ASSETS

- `assets/newLogo.png` — the definitive brand logo. Circular badge: black outer ring,
  red inner circle, white crescent moon + bird silhouette, white banner with bold red
  "INSULATION" text. Use on white/light backgrounds (header, cards, about page).
- **Footer treatment:** The black outer ring naturally blends into the dark footer
  (#111111), giving the impression of a floating red badge — this works well.
  No separate inverted version is needed.
- The old `CrescentMoon.svg` and `CrescentMoon-white.svg` files are superseded by
  `newLogo.png` and can be ignored.

## HOSTING NOTES

This plan deploys a STATIC site onto GoDaddy Managed WordPress Hosting.
WordPress is pre-installed but will be bypassed. The `.htaccess` routes traffic
to static HTML files instead. Full step-by-step publishing instructions are in:
`host.txt`

Key differences from standard shared hosting:
- SSL is already active — no HTTPS redirect needed in .htaccess
- GoDaddy manages server-level caching and some gzip settings
- If .htaccess modification is blocked, contact GoDaddy support or ask to switch
  to a cPanel Web Hosting plan (better suited for pure static sites)

## NOTES FOR BEN

- **Email confirmed:** `crescentmoonco2022@gmail.com` — used throughout contact sections
- **Service area confirmed:** 1-hour radius from Pillager, MN. Copy and service areas page
  updated to reflect Brainerd Lakes area + surrounding central MN towns.
- **Business hours confirmed:** Monday–Friday, 7:00 AM – 5:00 PM
- **Testimonials:** Your Google reviews link (https://share.google/1VsP62lXfGZQUfXNo)
  requires a logged-in Google account and could not be accessed automatically.
  Please copy your real reviews from Google Business Profile and send them over —
  they will replace the placeholders in `plan/01-site-copy.md`.
- **Stats:** "10+ years" and "500+ projects" are estimates. Update to accurate numbers.
- **Schema:** Using service-area business schema (no fixed public address). If you have
  a business address, provide it to add to schema for stronger local SEO.
- **Form handler:** The contact form needs a submission service. Recommended: Formspree
  (free tier at formspree.io) — set the form action to your Formspree endpoint and
  replies will arrive at crescentmoonco2022@gmail.com.
- **Domain:** Confirm the live domain to finalise canonical URLs and sitemap.
