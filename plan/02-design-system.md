# CRESCENT MOON INSULATION LLC — VISUAL DESIGN SYSTEM

**Version 1.0 | February 2026**

---

## 1. TYPOGRAPHY SYSTEM

### Font Selection

**Primary Heading Font: Barlow Condensed**
- Source: Google Fonts (free)
- Bold, condensed, industrial character that complements the circular badge logo's strong,
  uppercase lettering ("CRESCENT", "MOON", "INSULATION")
- Condensed proportions echo the tight, confident spacing of the brand mark

**Body Font: Inter**
- Source: Google Fonts (free)
- Exceptionally legible at all sizes, extensive weight range (400-700), optimised for screen rendering
- Pairs perfectly with condensed display fonts

### Font Loading (add to `<head>` before any stylesheet)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800&family=Inter:wght@400;500;600;700&display=swap">
```

### Type Scale

| Level      | Size (rem) | Size (px) | Weight  | Line Height | Letter Spacing | Font              | Usage                       |
|------------|-----------|-----------|---------|-------------|---------------|-------------------|-----------------------------|
| Display    | 3.815     | 61px      | 900     | 1.1         | -0.02em       | Barlow Condensed  | Hero headline only          |
| H1         | 3.052     | 49px      | 800     | 1.1         | -0.02em       | Barlow Condensed  | Page titles                 |
| H2         | 2.441     | 39px      | 700     | 1.2         | -0.01em       | Barlow Condensed  | Major section headings      |
| H3         | 1.953     | 31px      | 700     | 1.2         | -0.01em       | Barlow Condensed  | Sub-section headings        |
| H4         | 1.563     | 25px      | 600     | 1.25        | 0             | Barlow Condensed  | Card headings               |
| H5         | 1.25      | 20px      | 600     | 1.25        | 0.02em        | Barlow Condensed  | Small headings, labels      |
| Body Large | 1.125     | 18px      | 400     | 1.75        | 0             | Inter             | Lead paragraphs, intro text |
| Body       | 1.0       | 16px      | 400     | 1.6         | 0             | Inter             | Standard body text          |
| Small      | 0.875     | 14px      | 400-500 | 1.6         | 0             | Inter             | Captions, meta, nav items   |
| XS         | 0.75      | 12px      | 400     | 1.6         | 0             | Inter             | Legal, fine print           |
| Stat       | 4.0       | 64px      | 900     | 1.0         | -0.02em       | Barlow Condensed  | Trust bar big numbers       |
| Eyebrow    | 0.875     | 14px      | 600     | 1.2         | 0.1em         | Inter             | Kicker text above headings  |

**All headings:** `text-transform: uppercase;`
**Eyebrow text:** `text-transform: uppercase;` with color `#CC0000`
**Maximum body text width:** 70ch per line

### Text Color Rules by Background

| Background          | Headings | Body Text | Eyebrow | Lead/Muted         |
|---------------------|----------|-----------|---------|--------------------|
| White (#FFFFFF)     | #111111  | #333333   | #CC0000 | #666666            |
| Light Grey (#F5F5F5)| #111111  | #333333   | #CC0000 | #666666            |
| Charcoal (#333333)  | #FFFFFF  | #FFFFFF   | #CC0000 | #E0E0E0            |
| Black (#111111)     | #FFFFFF  | #FFFFFF   | #CC0000 | #E0E0E0            |
| Red (#CC0000)       | #FFFFFF  | #FFFFFF   | #FFFFFF | rgba(255,255,255,0.8) |

### Responsive Type Scale Adjustments

| Token   | Desktop   | Tablet  | Mobile  |
|---------|----------|---------|---------|
| Display | 3.815rem | 2.8rem  | 2.2rem  |
| H1      | 3.052rem | 2.4rem  | 1.9rem  |
| H2      | 2.441rem | 2.0rem  | 1.6rem  |
| H3      | 1.953rem | 1.6rem  | 1.35rem |
| H4      | 1.563rem | 1.563rem| 1.2rem  |
| Stat    | 4.0rem   | 3.0rem  | 2.5rem  |

---

## 2. COLOR SYSTEM

### Full Palette

| Token        | Hex      | Usage                                                |
|--------------|----------|------------------------------------------------------|
| White        | #FFFFFF  | Primary background, dominant across the site         |
| Off-White    | #FAFAFA  | Subtle card backgrounds stacked on white             |
| Light Grey   | #F5F5F5  | Alternating section backgrounds, form inputs         |
| Mid Grey     | #E0E0E0  | Borders, dividers, muted UI elements                 |
| Border Grey  | #D0D0D0  | Input field borders (default state)                  |
| Text Grey    | #666666  | Muted body text, secondary information               |
| Charcoal     | #333333  | Primary body text, CTA banner backgrounds            |
| Near Black   | #1A1A1A  | Active states on dark elements                       |
| Black        | #111111  | Headings, navbar, footer background                  |
| Red          | #CC0000  | Primary CTA buttons, eyebrow, icon accents           |
| Red Hover    | #A30000  | Button hover state                                   |
| Red Active   | #8A0000  | Button active/pressed state                          |
| Red Light    | #FFF0F0  | Subtle hover tint on card backgrounds                |

### Usage Rules
- **White dominates** — at least 60% of any page's visible area should be white
- **Red is sparingly used** — CTAs, eyebrow labels, icon accents, stat characters (+, %) only
- **Never** use red as a large section background (max one CTA banner per page)
- **Black/Charcoal** — headings, nav text, borders, footer, dark CTA banners
- **Light Grey** — alternates with white to create visual rhythm without noise

### Button States

**Primary (Red CTA)**

| State   | Background | Border  | Text    | Shadow                            | Transform       |
|---------|-----------|---------|---------|-----------------------------------|-----------------|
| Default | #CC0000   | #CC0000 | #FFFFFF | none                              | none            |
| Hover   | #A30000   | #A30000 | #FFFFFF | 0 4px 12px rgba(204,0,0,0.3)     | translateY(-1px)|
| Active  | #8A0000   | #8A0000 | #FFFFFF | none                              | translateY(0)   |
| Focus   | #CC0000   | #CC0000 | #FFFFFF | 0 0 0 3px rgba(204,0,0,0.3)      | none            |

**Secondary (Outlined)**

| State   | Background  | Border  | Text    | Context        |
|---------|------------|---------|---------|----------------|
| Default | transparent | #111111 | #111111 | On white/grey  |
| Hover   | #111111     | #111111 | #FFFFFF | On white/grey  |
| Default | transparent | #FFFFFF | #FFFFFF | On dark bg     |
| Hover   | #FFFFFF     | #FFFFFF | #111111 | On dark bg     |

### Background Rules by Section Type

| Section Type        | Background | Frequency                        |
|--------------------|-----------|----------------------------------|
| Default content     | #FFFFFF   | Most sections                    |
| Alternating section | #F5F5F5   | Every other content section      |
| Trust/stat bar      | #333333   | Once per page, near top          |
| CTA banner          | #333333   | Standard mid-page / end-of-page  |
| CTA banner (accent) | #CC0000   | Maximum once per page            |
| Footer              | #111111   | Bottom of every page             |

---

## 3. COMPONENT SPECIFICATIONS

### 3A. Navigation Bar

| Property          | Desktop                                      | Mobile         |
|-------------------|----------------------------------------------|----------------|
| Height            | 80px                                         | 64px           |
| Background        | #FFFFFF                                      | #FFFFFF        |
| Bottom border     | transparent → #F5F5F5 on scroll              | Same           |
| Logo              | `assets/newLogo.png` — circular badge, black ring on white bg | Same file |
| Logo height       | 48px                                         | 40px           |
| Link font         | Inter 14px, 600 weight, uppercase, ls 0.06em | N/A            |
| Link color        | #111111                                      | N/A            |
| Link hover        | #CC0000, 2px red bottom border               |                |
| Link gap          | 32px                                         | N/A            |
| CTA               | .btn--primary .btn--sm                       | In hamburger   |
| z-index           | 200                                          | 200            |

Mobile hamburger: Three 24px × 2px lines, #111111, 6px apart. 48×48px tap target. Full-screen white overlay with stacked links.

### 3B. Hero Section

| Property          | Value                                                              |
|-------------------|--------------------------------------------------------------------|
| Width             | Full viewport (100vw)                                              |
| Height            | 85vh, min 600px, max 800px                                         |
| Top margin        | 80px (desktop) / 64px (mobile) for fixed navbar                    |
| Image             | Full-bleed bg, `object-fit: cover`, `object-position: center`      |
| Overlay           | linear-gradient(135deg, rgba(17,17,17,0.80) 0%, rgba(17,17,17,0.30) 100%) |
| Content alignment | Left-aligned, vertically centered (desktop). Centered on mobile.  |
| Content max-width | 680px                                                              |
| Elements          | Eyebrow → H1 → Lead paragraph → Button row                        |
| Primary CTA       | .btn--primary .btn--lg                                             |
| Secondary CTA     | .btn--secondary (white outline variant)                            |

### 3C. Service Cards

| Property       | Value                                                          |
|----------------|----------------------------------------------------------------|
| Background     | #FFFFFF                                                        |
| Border         | 1px solid #F5F5F5                                              |
| Border radius  | 8px                                                            |
| Padding        | 40px                                                           |
| Shadow default | 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)       |
| Shadow hover   | 0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04)     |
| Hover transform| translateY(-4px)                                               |
| Transition     | 250ms ease on shadow and transform                             |
| Icon           | 48×48px, Lucide Icons, stroke 1.5px, #333333                  |
| Title          | Barlow Condensed, 25px, Bold, uppercase                        |
| Description    | Inter, 16px, #333333                                           |
| Link           | Inter, 14px, Semibold, uppercase, #CC0000, 2px underline hover |
| Grid layout    | 3-col desktop / 2-col tablet / 1-col mobile                    |
| Gap            | 32px                                                           |

### 3D. Trust / Stat Bar

| Property       | Value                                                     |
|----------------|-----------------------------------------------------------|
| Background     | #333333                                                   |
| Vertical pad   | 64px                                                      |
| Grid           | 4-col desktop / 2-col tablet+mobile                       |
| Number font    | Barlow Condensed, 64px (desktop) / 48px / 40px, 900, #FFFFFF |
| Accent chars   | + % → rendered in #CC0000                                 |
| Label          | Inter, 14px, 500, uppercase, ls 0.06em, #E0E0E0           |

### 3E. Testimonial Cards

| Property       | Value                                                     |
|----------------|-----------------------------------------------------------|
| Section bg     | #F5F5F5                                                   |
| Card bg        | #FFFFFF                                                   |
| Border radius  | 8px                                                       |
| Padding        | 40px                                                      |
| Quote mark     | Georgia serif, 4rem, #CC0000 at 20% opacity, top-left    |
| Quote text     | Inter, 18px, italic, lh 1.75, #333333                    |
| Author name    | Inter, 16px, Bold, #111111                                |
| Author detail  | Inter, 14px, Regular, #666666                             |
| Grid           | 3-col desktop / 2-col tablet / 1-col mobile               |

### 3F. CTA Banners

**Charcoal (standard):** bg #333333, vertical padding 96px, centered text, H2 white, subtext rgba(255,255,255,0.8) max 60ch, red primary + white outline secondary buttons.

**Red (sparingly, max 1/page):** bg #CC0000, H2 white, subtext rgba(255,255,255,0.85), primary button white bg/red text.

### 3G. Footer

| Property       | Value                                               |
|----------------|-----------------------------------------------------|
| Logo           | `assets/newLogo.png`, height 64px. The black outer ring blends into the #111111 footer background — the logo reads as a floating red badge. No separate white variant needed. |
| Background     | #111111                                             |
| Top padding    | 80px                                                |
| Bottom padding | 32px                                                |
| Grid           | 2fr 1fr 1fr 1.5fr (desktop) / 2-col / 1-col        |
| Gap            | 48px                                                |
| Col headings   | Barlow Condensed, 20px, Bold, uppercase, #FFFFFF    |
| Link text      | Inter, 16px, #666666                                |
| Link hover     | #FFFFFF                                             |
| Bottom bar     | 1px solid rgba(255,255,255,0.1), copyright left, legal right, 14px #666666 |

### 3H. Forms

| Property       | Value                                               |
|----------------|-----------------------------------------------------|
| Label          | Inter, 14px, 600, uppercase, ls 0.06em, #333333     |
| Input height   | 52px                                                |
| Input bg       | #F5F5F5                                             |
| Input border   | 1px solid #D0D0D0 → #333333 focus → #CC0000 error   |
| Input radius   | 4px                                                 |
| Input font     | Inter, 16px, #111111                                |
| Placeholder    | #666666                                             |
| Focus shadow   | 0 0 0 3px rgba(51,51,51,0.1)                        |
| Textarea       | min-height 140px, vertical resize only              |
| Field spacing  | 24px between groups                                 |
| Submit margin  | 32px top                                            |

---

## 4. SPACING & GRID

### Base Unit: 8px grid

| Token    | Value   | px    | Usage                              |
|----------|---------|-------|------------------------------------|
| space-1  | 0.25rem | 4px   | Tight internal spacing             |
| space-2  | 0.5rem  | 8px   | Base unit                          |
| space-3  | 0.75rem | 12px  | Label-to-input                     |
| space-4  | 1rem    | 16px  | Button padding, mobile gutter      |
| space-5  | 1.5rem  | 24px  | Form spacing, card internal        |
| space-6  | 2rem    | 32px  | Grid gap, card gap                 |
| space-7  | 2.5rem  | 40px  | Card padding                       |
| space-8  | 3rem    | 48px  | Mobile section padding             |
| space-9  | 4rem    | 64px  | Tablet section padding             |
| space-10 | 5rem    | 80px  | Footer top padding                 |
| space-11 | 6rem    | 96px  | Desktop section padding            |

### Section Padding

| Breakpoint  | Padding |
|------------|---------|
| Desktop (1024px+) | 96px |
| Tablet (640-1023px)| 64px |
| Mobile (<640px)    | 48px |

### Container Widths

| Variant | Max-Width | Usage                     |
|---------|-----------|---------------------------|
| Default | 1280px    | Standard content          |
| Narrow  | 960px     | Forms, focused pages      |
| Text    | 720px     | Long-form text, About     |

### Responsive Breakpoints

| Name    | Range         | Media Query                  |
|---------|--------------|------------------------------|
| Mobile  | 0–639px      | `@media (max-width: 639px)`  |
| Tablet  | 640–1023px   | `@media (max-width: 1023px)` |
| Desktop | 1024px+      | Default (mobile-first)       |
| Wide    | 1280px+      | `@media (min-width: 1280px)` |

---

## 5. IMAGERY GUIDELINES

### Stock Photo Style
- Professional insulation work in progress, Minnesota homes (winter context), commercial buildings
- Neutral to warm colour temperature, authentic not over-staged
- Avoid: blurry, heavily filtered, clip art, visible competing branding

### Image Treatment

| Context       | Aspect Ratio | Object-Fit | Overlay                       |
|---------------|-------------|------------|-------------------------------|
| Hero          | 16:9+       | cover      | gradient: 80% → 30% black     |
| Service cards | 3:2         | cover      | None                          |
| About/team    | 4:3         | cover      | None                          |

### Hero Image Specs
- Min resolution: 1920×1080px (recommended 2560×1440px)
- Format: WebP + JPEG fallback
- File size target: Under 200KB after compression
- Provide 3 sizes: 640w, 1280w, 1920w for `srcset`

### Icon Style
- Library: Lucide Icons (free, open-source)
- Line icons, stroke 1.5px
- 48×48px (service cards), 24×24px (inline/nav)
- #333333 on light backgrounds, #FFFFFF on dark

---

## 6. PERFORMANCE & OPTIMISATION

### Image Formats

| Format | Usage                      | Fallback |
|--------|----------------------------|----------|
| WebP   | All photos                 | JPEG     |
| AVIF   | Hero image (progressive)   | WebP     |
| SVG    | Logo, icons                | PNG      |

```html
<picture>
  <source srcset="hero-640.avif 640w, hero-1280.avif 1280w, hero-1920.avif 1920w" type="image/avif">
  <source srcset="hero-640.webp 640w, hero-1280.webp 1280w, hero-1920.webp 1920w" type="image/webp">
  <img src="hero-1280.jpg" alt="..." width="1920" height="1080" loading="eager">
</picture>
```

### Lazy Loading
- Hero: `loading="eager"` (above fold, critical)
- All other images: `loading="lazy"` with explicit `width` and `height`

### Critical CSS
- Inline critical CSS in `<head>` (navbar, hero, above-fold content ~14KB max)
- Defer full stylesheet with `<link rel="preload" as="style" onload="this.rel='stylesheet'">`

### Performance Targets
- Total initial page weight: under 500KB
- No JS frameworks — vanilla JS only (hamburger toggle, scroll listener, smooth scroll)
- SVG icons inlined where possible to eliminate HTTP requests
- Minify all CSS and JS before deployment

---

## 7. GODADDY HOSTING CONFIGURATION

### File Structure

```
public_html/
├── index.html
├── about.html
├── services.html
├── contact.html
├── service-areas.html
├── services/
│   ├── spray-foam-insulation.html
│   ├── blown-in-insulation.html
│   ├── batt-insulation.html
│   ├── commercial-insulation.html
│   └── new-construction-insulation.html
├── 404.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── favicon.ico
└── assets/
    ├── css/
    │   ├── critical.css
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── images/
        ├── newLogo.png              (primary logo — used in header + footer)
        ├── hero/
        ├── services/
        └── about/
```

### .htaccess

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Force www
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [L,R=301]

# Enable Gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/avif "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png  "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Prevent Directory Listing
Options -Indexes

# Custom 404
ErrorDocument 404 /404.html
```

---

## 8. CSS CUSTOM PROPERTIES

```css
:root {
  /* Colors */
  --color-white:        #FFFFFF;
  --color-off-white:    #FAFAFA;
  --color-light-grey:   #F5F5F5;
  --color-mid-grey:     #E0E0E0;
  --color-border-grey:  #D0D0D0;
  --color-text-grey:    #666666;
  --color-charcoal:     #333333;
  --color-near-black:   #1A1A1A;
  --color-black:        #111111;
  --color-red:          #CC0000;
  --color-red-hover:    #A30000;
  --color-red-active:   #8A0000;
  --color-red-light:    #FFF0F0;

  /* Typography */
  --font-heading: 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif;
  --font-body:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  --text-display: 3.815rem;
  --text-h1:      3.052rem;
  --text-h2:      2.441rem;
  --text-h3:      1.953rem;
  --text-h4:      1.563rem;
  --text-h5:      1.25rem;
  --text-body-lg: 1.125rem;
  --text-body:    1rem;
  --text-small:   0.875rem;
  --text-xs:      0.75rem;
  --text-stat:    4rem;

  /* Spacing */
  --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
  --space-4: 1rem;     --space-5: 1.5rem;    --space-6: 2rem;
  --space-7: 2.5rem;   --space-8: 3rem;      --space-9: 4rem;
  --space-10: 5rem;    --space-11: 6rem;     --space-12: 8rem;

  /* Layout */
  --container-max:    1280px;
  --container-narrow: 960px;
  --container-text:   720px;
  --grid-gap:         2rem;

  /* Borders & Radii */
  --radius-sm: 4px;   --radius-md: 8px;
  --radius-lg: 12px;  --radius-xl: 16px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;

  /* Z-index */
  --z-sticky: 200;  --z-overlay: 300;  --z-modal: 400;
}
```
