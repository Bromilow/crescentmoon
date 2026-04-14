# CRESCENT MOON INSULATION LLC — UX & PAGE STRUCTURE PLAN

**Prepared:** 2026-02-25
**Company:** Crescent Moon Insulation LLC | Owner: Ben | +1 218 232 9884 | Minnesota

---

## 1. SITEMAP (11 pages)

```
crescentmooninsulation.com/
├── /                                    (Homepage)
├── /about                               (About Us)
├── /services                            (Services Overview)
│   ├── /services/spray-foam-insulation
│   ├── /services/blown-in-insulation
│   ├── /services/batt-insulation
│   ├── /services/commercial-insulation
│   └── /services/new-construction-insulation
├── /service-areas                       (Service Areas)
└── /contact                             (Contact / Get a Quote)
```

---

## 2. GLOBAL LAYOUT PATTERNS

### 2.1 Header / Navigation

```
+-----------------------------------------------------------------------+
| [Logo]       Home  About  Services ▾  Service Areas  Contact  [CTA]  |
+-----------------------------------------------------------------------+
```

- **Position:** Sticky/fixed to top (z-index: 200)
- **Height:** 80px desktop, 64px mobile
- **Background:** White, transparent on hero, transitions to white on scroll
- **On scroll (>100px):** Gains `box-shadow: 0 2px 10px rgba(0,0,0,0.08)` + `border-bottom: 1px solid #F5F5F5`
- **Logo:** `assets/newLogo.png`, left-aligned, 48px height desktop, 40px mobile. Circular badge displays cleanly on white nav background.
- **Nav links:** Center/right, 14px Inter 600 uppercase, ls 0.06em. Red underline on hover/active.
- **Services dropdown:** Reveals on hover/click, lists all service pages
- **Header CTA:** "Get a Free Quote" — red button, far right
- **Mobile:** Logo left + hamburger right. Full-screen white overlay with stacked vertical links + CTA at bottom.

### 2.2 Footer

```
+-----------------------------------------------------------------------+
| [newLogo.png]       Quick Links    Our Services     Get In Touch      |
| (black ring blends  Home           Spray Foam       Central MN        |
| into footer bg —    About Us       Blown-In         (218) 232-9884    |
| reads as red badge) Services       Batt & Roll      crescentmoonco    |
|                     Service Areas  Commercial       2022@gmail.com    |
| Mon–Fri 7am–5pm     Contact        New Construction Mon–Fri 7am–5pm  |
+-----------------------------------------------------------------------+
| © 2026 Crescent Moon Insulation LLC. All rights reserved.             |
+-----------------------------------------------------------------------+
```

- **Background:** #111111
- **Text:** White / #666666 secondary
- **Layout:** 4 columns desktop, 2 tablet, 1 mobile
- **Bottom bar:** #111111 slightly darker, copyright + legal links

### 2.3 Mobile Sticky CTA Bar

- **Mobile only** — fixed to bottom of viewport
- **Height:** 56px, white background, top shadow
- **Appears:** After scrolling past hero
- **Buttons:** "Call Now" (left) + "Get a Quote" (right, red)
- **Desktop:** Not shown — sticky header CTA serves this purpose

### 2.4 Section Spacing System

| Context                    | Desktop | Mobile |
|---------------------------|---------|--------|
| Section padding (top/bottom)| 96px  | 56px   |
| Heading to content gap     | 48px   | 32px   |
| Card grid gap              | 32px   | 24px   |
| Container max-width        | 1280px | 100% (20px side padding) |

---

## 3. PAGE-BY-PAGE SPECIFICATIONS

---

### PAGE 1: HOMEPAGE ( / )

**Goal:** Primary landing page. Establish credibility, showcase services, drive conversions.

**SEO:**
- Meta Title: `Minnesota Insulation Contractor | Crescent Moon Insulation` (58 chars)
- Meta Description: `Professional residential and commercial insulation services across Minnesota. Spray foam, blown-in, and batt insulation. Free estimates. Call (218) 232-9884.` (155 chars)
- H1: "Built for Minnesota Winters."
- URL: `/`

**Section Order:**

| # | Section | Background | Purpose |
|---|---------|-----------|---------|
| 1 | Hero | Full-bleed image + dark overlay | Hook, trust, dual CTA |
| 2 | Services Overview | #FFFFFF | Drive service page clicks |
| 3 | Why Choose Us | #F5F5F5 | Trust building |
| 4 | Stats Bar | #333333 | Social proof — numbers |
| 5 | Testimonials | #FFFFFF | Social proof — words |
| 6 | Service Areas Callout | #F5F5F5 | Local SEO, geographic trust |
| 7 | CTA Banner | #333333 | Conversion push |
| 8 | Footer | #111111 | Navigation + contact |

**Section Details:**

**Section 1 — Hero (85vh)**
- Eyebrow: "MINNESOTA'S INSULATION PROFESSIONALS" (red, uppercase, Inter 14px)
- H1 (Display): "Built for Minnesota Winters."
- Subheadline (Body Large, white 85%): "Professional insulation services that keep your home warm, your energy bills low, and your comfort year-round. Residential and commercial projects across Minnesota."
- CTA row: [Get Your Free Estimate (red)] [Our Services (white outline)]
- Trust badges row below CTAs: "Licensed & Insured" / "Locally Owned" / "Free Estimates"

**Section 2 — Services Overview**
- Eyebrow: "WHAT WE DO"
- H2: "Our Insulation Services"
- Intro: "From attic upgrades to full commercial builds, we provide insulation solutions designed for Minnesota's toughest conditions."
- 6 service cards: Spray Foam, Blown-In, Batt & Roll, Insulation Removal, Attic Insulation, Commercial Insulation
- Each card: Lucide icon, H3 title, 2-3 sentence description, "Learn More →" red link

**Section 3 — Why Choose Us (2-col: content left, image right)**
- Eyebrow: "WHY CRESCENT MOON"
- H2: "Why Minnesota Homeowners Trust Crescent Moon"
- 4 checklist items with red checkmark icons
- Ghost CTA: "Learn About Us →"

**Section 4 — Stats Bar**
- 4 stat blocks: "10+" Years Experience / "500+" Projects Completed / "100%" Satisfaction Guarantee / "Statewide" Service Area
- Red accent on + and % characters

**Section 5 — Testimonials**
- H2: "What Our Customers Say"
- 3 testimonial cards

**Section 6 — Service Areas Callout**
- H2: "Serving Communities Across Minnesota"
- Key city names (Duluth, Minneapolis, St. Paul, Brainerd, St. Cloud, Bemidji, Rochester, Moorhead)
- Ghost CTA: "View All Service Areas →" → /service-areas

**Section 7 — CTA Banner (Charcoal)**
- H2: "Stop Losing Heat. Start Saving Money."
- Subtext + red CTA: "Request a Free Estimate"
- Phone number displayed prominently

---

### PAGE 2: ABOUT US ( /about )

**Goal:** Build trust and personal connection. Introduce Ben.

**SEO:**
- Meta Title: `About Crescent Moon Insulation | Minnesota Owned` (47 chars)
- Meta Description: `Crescent Moon Insulation is a Minnesota-owned insulation company founded by Ben. Over 10 years of experience serving homes and businesses across the state.` (155 chars)
- H1: "The People Behind Your Comfort"
- URL: `/about`

**Section Order:**

| # | Section | Background |
|---|---------|-----------|
| 1 | Hero | Image + dark overlay |
| 2 | Our Story | #FFFFFF |
| 3 | Mission Statement | #F5F5F5 |
| 4 | Our Values | #FFFFFF |
| 5 | Stats Bar | #333333 |
| 6 | Owner Spotlight | #F5F5F5 |
| 7 | CTA Banner | #333333 |
| 8 | Footer | #111111 |

**Section Details:**

**Section 1 — Hero (40-50vh)**
- H1: "The People Behind Your Comfort"
- Subtitle: "Minnesota-owned. Professionally operated. Built on trust."

**Section 2 — Our Story (2-col: text left, image right)**
- H2: "Our Story"
- 4 paragraphs (see site copy document)

**Section 3 — Mission Statement (Narrow, centered)**
- Eyebrow: "OUR MISSION"
- Pull-quote style: large italic text, centered, max-width 720px

**Section 4 — Our Values (3 cards)**
- H2: "What We Stand For"
- 3 value cards: Integrity / Craftsmanship / Community

**Section 5 — Stats Bar (reused global component)**

**Section 6 — Owner Spotlight (2-col: image left, text right)**
- Eyebrow: "MEET THE OWNER"
- H3: "Ben — Owner & Founder"
- Bio paragraph
- Professional portrait photo

**Section 7 — CTA Banner**
- H2: "Work With a Team That Cares"
- Red CTA + phone number

---

### PAGE 3: SERVICES OVERVIEW ( /services )

**Goal:** Hub page for all services. Drive clicks to individual pages.

**SEO:**
- Meta Title: `Insulation Services | Crescent Moon Insulation, Minnesota` (55 chars)
- Meta Description: `Explore our full range of insulation services: spray foam, blown-in, batt, removal, attic, and commercial insulation. Serving all of Minnesota.` (142 chars)
- H1: "Our Insulation Services"
- URL: `/services`

**Section Order:**

| # | Section | Background |
|---|---------|-----------|
| 1 | Hero | Image + overlay |
| 2 | Services Grid | #FFFFFF |
| 3 | Why Insulation Matters | #F5F5F5 |
| 4 | Process Overview | #FFFFFF |
| 5 | CTA Banner | #333333 |
| 6 | Footer | #111111 |

**Section 4 — Process Overview (horizontal steps)**
- H2: "How We Work"
- 4 steps: Free Consultation → Custom Proposal → Professional Installation → Quality Assurance
- Each step: number (red), title, brief description

---

### PAGES 4-8: INDIVIDUAL SERVICE PAGES (Template)

**URL pattern:** `/services/[service-slug]`

All 5 service pages follow identical structure:

| # | Section | Background |
|---|---------|-----------|
| 1 | Hero | Image + overlay |
| 2 | Service Description | #FFFFFF (2-col) |
| 3 | Benefits | #F5F5F5 |
| 4 | Why It Matters in Minnesota | #FFFFFF |
| 5 | Process | #F5F5F5 |
| 6 | CTA Banner | #333333 |
| 7 | Related Services | #FFFFFF (2-3 cards) |
| 8 | Footer | #111111 |

**Service Pages Table:**

| Page | URL | H1 | Focus Keyword | Related Services |
|------|-----|----|---------------|-----------------|
| Spray Foam | /services/spray-foam-insulation | Spray Foam Insulation | spray foam insulation Minnesota | Attic, Commercial |
| Blown-In | /services/blown-in-insulation | Blown-In Attic Insulation | blown-in attic insulation Minnesota | Attic, Removal |
| Batt & Roll | /services/batt-insulation | Batt & Roll Insulation | batt insulation Minnesota | Blown-In, Commercial |
| Commercial | /services/commercial-insulation | Commercial Insulation Services | commercial insulation Minnesota | Spray Foam, Batt |
| New Construction | /services/new-construction-insulation | New Construction Insulation | new construction insulation Minnesota | Spray Foam, Batt |

---

### PAGE 9: SERVICE AREAS ( /service-areas )

**Goal:** Establish geographic reach. Support local SEO.

**SEO:**
- Meta Title: `Insulation Near Brainerd & Pillager MN | Crescent Moon` (53 chars)
- Meta Description: `Crescent Moon Insulation serves Brainerd, Baxter, Little Falls, Staples, Crosslake, Wadena and surrounding central Minnesota. Based in Pillager, MN.` (148 chars)
- H1: "Serving Central Minnesota from Pillager"
- URL: `/service-areas`

**Sections:**
1. Hero (40vh)
2. Coverage Overview — areas by zone:
   - **Home Base:** Pillager, MN (Crow Wing County)
   - **Brainerd Lakes Area (~15–30 min):** Brainerd, Baxter, Pequot Lakes, Breezy Point, Nisswa, Crosslake, Staples, Motley
   - **Little Falls & Morrison County (~30 min):** Little Falls, Royalton
   - **West (~30–60 min):** Wadena, Long Prairie, Staples, Verndale
   - **East (~30–60 min):** Crosby, Aitkin, Onamia
   - **South (~45–60 min):** Pine River, Hackensack, Walker
3. "Not On The List?" — copy: "If you're within about an hour of Pillager, there's a good chance we can help. Give Ben a call and we'll let you know."
4. Local Climate section — H2 "Central Minnesota Winters Demand Expert Insulation"
5. CTA Banner — "Wondering if we serve your area? Call us."
6. Footer

---

### PAGE 10: CONTACT / GET A QUOTE ( /contact )

**Goal:** Primary conversion page.

**SEO:**
- Meta Title: `Get a Free Insulation Estimate | Crescent Moon Insulation` (57 chars)
- Meta Description: `Contact Crescent Moon Insulation for a free estimate on residential or commercial insulation in Minnesota. Call (218) 232-9884 or fill out our online form.` (156 chars)
- H1: "Let's Talk About Your Project"
- URL: `/contact`

**Sections:**
1. Hero (30-40vh)
2. Two-column contact layout:
   - **Left (60%):** H2 "Request a Free Quote" + form
   - **Right (40%):** Contact info card, service area note, business hours
3. Footer

**Form fields:** Full Name, Phone, Email, Service Needed (dropdown), Property Type (dropdown), Project Details (textarea), Submit

---

## 4. CONVERSION STRATEGY

### CTA Hierarchy
1. **Primary:** "Get a Free Quote" (red button → /contact)
2. **Secondary:** "Call +1 218 232 9884" (tel: link)
3. **Tertiary:** "Learn More", "Our Services" (ghost buttons, text links)

### Conversion Points Per Page

| Page | # CTAs | Types |
|------|--------|-------|
| Homepage | 5+ | Hero dual CTA, stat bar, CTA banner, header CTA, mobile sticky |
| About | 3 | Header CTA, CTA banner, owner section |
| Services Overview | 4+ | Service cards, CTA banner, header CTA |
| Each Service Page | 4 | CTA banner, related services, header CTA |
| Service Areas | 3 | CTA banner, header CTA, inline |
| Contact | Full page | Form + phone |

### Trust Signals
- "Licensed & Insured" / "Locally Owned" / "Free Estimates" badges (hero, about, footer)
- Stats bar with real numbers (10+ years, 500+ projects)
- 3 testimonials with city attribution
- Ben's personal introduction on About page
- Minnesota-specific language throughout every page
- Professional imagery — clean, real, quality

---

## 5. SEO TECHNICAL STRUCTURE

### Per-Page Requirements
- One H1 per page (no exceptions)
- H2 → H3 → H4 hierarchy within sections (never skip levels)
- Self-referencing canonical tag
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card meta tags
- Explicit `alt` text on every image (descriptive, keyword-relevant)

### Schema Markup

**Sitewide — LocalBusiness (in `<head>` on every page):**
```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Crescent Moon Insulation LLC",
  "telephone": "+1-218-232-9884",
  "areaServed": { "@type": "State", "name": "Minnesota" },
  "url": "https://www.crescentmooninsulation.com",
  "priceRange": "$$",
  "description": "Professional residential and commercial insulation contractor serving communities across Minnesota. Spray foam, blown-in, batt & roll, commercial, and new construction insulation."
}
```

**Each Service Page — Service schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Crescent Moon Insulation LLC"
  },
  "areaServed": { "@type": "State", "name": "Minnesota" },
  "description": "[Service description from copy document]"
}
```

**Homepage — WebSite schema (for sitelinks searchbox potential):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Crescent Moon Insulation LLC",
  "url": "https://www.crescentmooninsulation.com"
}
```

**Testimonials — AggregateRating (on homepage + service pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "3",
  "itemReviewed": { "@type": "LocalBusiness", "name": "Crescent Moon Insulation LLC" }
}
```

### Internal Linking Strategy
- Every service page → 2-3 related service pages (Related Services section)
- Services overview → all 5 individual service pages (card grid)
- Homepage → all service pages (services grid)
- All CTA banners → /contact
- Footer → ALL pages
- Service areas page ← linked from homepage + about page
- Use descriptive anchor text (never "click here")

### Technical Files Required
- `sitemap.xml` — list all pages with `<lastmod>`, `<changefreq>`, `<priority>`
- `robots.txt` — allow all, reference sitemap URL
- `favicon.ico` + `favicon-32.png` + `apple-touch-icon.png`
- `404.html` — custom branded not-found page

### sitemap.xml priorities:
| Page | Priority | Changefreq |
|------|---------|------------|
| Homepage | 1.0 | weekly |
| Service pages | 0.9 | monthly |
| About | 0.7 | monthly |
| Service Areas | 0.7 | monthly |
| Contact | 0.8 | monthly |

---

## 6. MOBILE RESPONSIVENESS

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Desktop | 1024px+ | Full multi-column layouts |
| Tablet | 640–1023px | 2-col grids, hamburger nav |
| Mobile | 0–639px | 1-col, sticky bottom CTA bar, hamburger nav, 60vh hero |

### Mobile-Specific Requirements
- All phone numbers: `<a href="tel:+12182329884">` (clickable)
- Minimum 44×44px tap targets on all interactive elements
- Form inputs minimum 52px height (prevents iOS zoom)
- No horizontal scrolling at any width
- Hamburger menu accessible via keyboard (aria-expanded, role="button")
- Images use `srcset` for responsive sizing
