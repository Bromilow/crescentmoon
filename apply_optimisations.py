#!/usr/bin/env python3
"""
Batch-apply performance, accessibility, and SEO optimisations to all HTML files.
Run from the crescentMoonConstruction/ directory.
"""

import os
import re
import glob

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public_html')

# ── Hero image map: which preload each page needs ───────────────────────────
HERO_PRELOADS = {
    'index.html':               '/assets/images/hero-home.webp',
    'about.html':               '/assets/images/hero-about.webp',
    'contact.html':             '/assets/images/hero-contact.webp',
    'service-areas.html':       '/assets/images/hero-service-areas.webp',
    'services/index.html':      '/assets/images/cta-background.webp',
    'blog/index.html':          '/assets/images/cta-background.webp',
    'blog/welcome-to-crescent-insights.html': '/assets/images/blog/blog-1-featured.webp',
    # All service pages share the same hero
    '_service_default':         '/assets/servicepage/Hero%20Image%20on%20all%20service%20Pages.webp',
}

OLD_FONTS = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap">'
NEW_FONTS = (
    '<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;500;600;700&display=swap" onload="this.onload=null;this.rel=\'stylesheet\'">\n'
    '  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;500;600;700&display=swap"></noscript>'
)

UNPKG_PRECONNECT = (
    '  <link rel="preconnect" href="https://unpkg.com">\n'
    '  <link rel="dns-prefetch" href="https://unpkg.com">\n'
)

SKIP_LINK = '<a class="skip-link" href="#main-content">Skip to main content</a>\n'

def get_html_files():
    files = []
    for pattern in ['*.html', 'services/*.html', 'blog/*.html']:
        files += glob.glob(os.path.join(ROOT, pattern))
    return sorted(files)

def relative_path(filepath):
    return os.path.relpath(filepath, ROOT)

def get_hero_preload(rel_path):
    if rel_path in HERO_PRELOADS:
        return HERO_PRELOADS[rel_path]
    # Service pages
    if rel_path.startswith('services/') and rel_path != 'services/index.html':
        return HERO_PRELOADS['_service_default']
    return None

def process_file(filepath):
    rel = relative_path(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    original = html
    changed = []

    # ── 1. Non-blocking Google Fonts (trim unused weights too) ──────────────
    if OLD_FONTS in html:
        html = html.replace(OLD_FONTS, NEW_FONTS)
        changed.append('non-blocking fonts')

    # ── 2. Preconnect + dns-prefetch for unpkg ──────────────────────────────
    if 'unpkg.com' in html and 'rel="preconnect" href="https://unpkg.com"' not in html:
        html = html.replace(
            '  <link rel="preconnect" href="https://fonts.googleapis.com">',
            UNPKG_PRECONNECT + '  <link rel="preconnect" href="https://fonts.googleapis.com">'
        )
        changed.append('unpkg preconnect')

    # ── 3. Hero image preload ────────────────────────────────────────────────
    hero_img = get_hero_preload(rel)
    if hero_img and 'rel="preload" as="image"' not in html:
        preload_tag = f'  <link rel="preload" as="image" href="{hero_img}" fetchpriority="high">\n'
        html = html.replace('  <link rel="icon" href="/favicon.ico">', preload_tag + '  <link rel="icon" href="/favicon.ico">')
        changed.append('hero preload')

    # ── 4. Skip link after <body> ────────────────────────────────────────────
    if 'skip-link' not in html:
        html = html.replace('<body>\n', '<body>\n' + SKIP_LINK)
        html = html.replace('<body>\n\n', '<body>\n' + SKIP_LINK + '\n')
        changed.append('skip link')

    # ── 5. id="main-content" on <main> ──────────────────────────────────────
    if '<main>' in html and 'id="main-content"' not in html:
        html = html.replace('<main>', '<main id="main-content">')
        changed.append('main id')

    # ── 6. aria-hidden="true" on all decorative Lucide icons ────────────────
    # Add aria-hidden to <i data-lucide="..."> that don't already have it
    def add_aria_hidden(m):
        tag = m.group(0)
        if 'aria-hidden' in tag:
            return tag
        return tag.replace('>', ' aria-hidden="true">', 1)

    new_html = re.sub(r'<i data-lucide="[^"]*"[^>]*>', add_aria_hidden, html)
    if new_html != html:
        html = new_html
        changed.append('aria-hidden on icons')

    # ── 7. fetchpriority="high" on nav logo ─────────────────────────────────
    html = re.sub(
        r'(<img src="/assets/images/newLogo\.png" alt="Crescent Moon Insulation LLC" width="48" height="48")(?! fetchpriority)',
        r'\1 fetchpriority="high"',
        html
    )

    # ── 8. Mobile nav: wrap links in <nav aria-label="Mobile navigation"> ───
    if 'site-nav__mobile-links' in html and 'aria-label="Mobile navigation"' not in html:
        html = html.replace(
            '    <ul class="site-nav__mobile-links">',
            '    <nav aria-label="Mobile navigation">\n    <ul class="site-nav__mobile-links">'
        )
        # Close the nav before the CTA button
        html = html.replace(
            '    </ul>\n    <a href="/contact" class="btn btn--primary">Get a Free Quote</a>\n  </div>',
            '    </ul>\n    </nav>\n    <a href="/contact" class="btn btn--primary">Get a Free Quote</a>\n  </div>'
        )
        changed.append('mobile nav landmark')

    # ── 9. Version bump on CSS/JS references ────────────────────────────────
    html = html.replace('styles.css?v=1.2', 'styles.css?v=2.0')
    html = html.replace('main.js?v=1.2', 'main.js?v=2.0')

    if html != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f'  ✓ {rel}: {", ".join(changed)}')
    else:
        print(f'  – {rel}: no changes needed')

    return html != original

if __name__ == '__main__':
    files = get_html_files()
    print(f'\nProcessing {len(files)} HTML files...\n')
    updated = sum(1 for f in files if process_file(f))
    print(f'\nDone. {updated}/{len(files)} files updated.\n')
