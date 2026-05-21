# Acraya Design System

> *Dark retreat sanctuaries for spiritual wanderers.*

Acraya operates a global network of dark meditation sanctuaries — sealed, light-free spaces where guests stay anywhere from days to weeks for extended meditation, rooted in traditions like Tibetan Buddhism, Native American shamanism, and Christian mysticism. Retreats are held in dedicated cabins or simple rooms; locations include destinations like Holos in Costa Rica's Diamante Valley.

The brand is the experience: **darkness as medium**, the **single glowing sphere** as the only source of light, and a quiet, contemplative voice throughout. This design system gives you everything to build interfaces and assets that feel like Acraya.

---

## Sources & References

| Source | URL / Path |
| --- | --- |
| Live website | `https://acraya-website.vercel.app` |
| Brand brief | Provided in chat (May 2026) |
| Reference screenshots | `uploads/Screenshot 2026-05-21 at 3.49.*.png` |

> No codebase, Figma file, or font files were provided. This system is reconstructed from website screenshots. **Action requested from brand owner:** see "Typography substitution" below.

---

## Products Represented

1. **Marketing website** — `acraya-website.vercel.app`
   - Public-facing site with hero, About ("Discover The Acraya"), Locations directory (e.g. Holos – Costa Rica), Sanctuaries gallery.
   - Two visual modes: **dark** (hero, intro, contemplative pages) and **light** (location detail, body-heavy content). Same global nav (black bar) sits over both.
   - UI kit lives in `ui_kits/website/`.

> No mobile app, dashboard, or product UI was provided. If/when those exist, add a new folder under `ui_kits/<product>/`.

---

## Index — What's In This Folder

```
README.md                      ← you are here
SKILL.md                       ← Claude Code skill entrypoint
colors_and_type.css            ← all tokens (color, type, spacing, motion, radii)
assets/
  logo-acraya.svg              ← horizontal mark: sphere + ACRAYA wordmark
  sphere-mark.svg              ← sphere-only mark (favicon / standalone)
  circle-contour.svg           ← faint circle outline (background motif)
preview/                       ← cards rendered in the Design System tab
ui_kits/
  website/
    README.md
    index.html                 ← interactive clickthrough recreation
    Nav.jsx, Hero.jsx, Sphere.jsx, ...
```

---

## Content Fundamentals

Acraya's voice is **quiet, declarative, and reverent** — never marketing-speak, never urgent. Copy is the antithesis of conversion-driven SaaS prose.

### Tone

- **Stillness over excitement.** No exclamation marks. No "now," "today," "limited spots." Time is irrelevant in the dark.
- **Third-person and direct second-person mix.** The website uses "you" sparingly and "we" rarely. It prefers declarative statements about the *practice itself*: *"A dark retreat is a profound meditation practice involving an extended stay in complete darkness."*
- **Reverent but grounded.** Spiritual vocabulary ("wholeness," "presence," "consciousness," "seekers," "wanderers," "truth gatherers") sits next to plain operational language ("sealed, light-free spaces," "ranging from simple rooms to dedicated cabins"). Never sanctimonious.
- **Slow rhythm.** Short sentences. Long pauses (lots of whitespace, line breaks between paragraphs). Punctuation does spiritual work — em-dashes carve out clauses where commas would rush.

### Casing

- **Display copy: ALL CAPS** with wide tracking (~0.18–0.22em on small, ~0.02em on display). Treats type as architecture.
- **Body copy: sentence case.** Proper nouns capitalized normally.
- **Nav, labels, eyebrows: ALL CAPS**, very tight font weight (200–400), wide tracking.
- **Buttons: ALL CAPS** ("RESERVE"), pill-shaped.

### Pronouns

- "Our sanctuaries," "we offer," "your experience and goals" — only when the speaker is operationally Acraya.
- Most descriptive copy avoids first person entirely. The practice speaks for itself.

### Emoji & Special Characters

- **Never.** No emoji anywhere — they would shatter the contemplative register.
- **Em-dashes (—)** appear frequently and deliberately. Use them.
- **Hyphens (-)** are used in location names: "HOLOS - COSTA RICA".
- **No exclamation marks.** Period.

### Example Copy Samples

> A DARK RETREAT IS A PROFOUND MEDITATION PRACTICE INVOLVING AN EXTENDED STAY IN COMPLETE DARKNESS.

> It is rooted in traditions like Tibetan Buddhism, Native American shamanism, and Christian mysticism.

> Conducted in sealed, light-free spaces—ranging from simple rooms to dedicated cabins—retreats last from days to weeks, tailored to your experience and goals.

> A global network of dark meditation sanctuaries designed for seekers, wanderers, and truth gatherers.

> Our sanctuaries offer transformative spaces where individuals can explore the depths of consciousness.

> A sanctuary where people return to their wholeness, through presence, practice, and lived experience.

---

## Visual Foundations

### Color

Acraya is **monochrome by design** — there are no brand accent colors, no gradients (except the moon's radial bloom), no hues. The full palette is greyscale, with two semantic poles:

- **Black (#000000)** — the void, the sealed sanctuary, the dominant surface of the dark mode.
- **White (#FFFFFF)** — the moon, the reveal, the dominant surface of the light mode.

Mid-tones are reserved for hairline borders, secondary type, and the sphere's halo. Photographic imagery is the *only* place color enters — and only on Location pages. All other imagery (portraits, landscapes used as section breaks, the homepage hero gallery) is **black & white** with slightly raised contrast.

See `colors_and_type.css` for the full scale (`--acraya-black` → `--acraya-white`, with eleven steps).

### Type

- **Display:** thin geometric sans — `Jost` 200 / 300, all caps, tight line-height (1.04), light letter-spacing (0.02em). Used for hero copy, section headlines, page titles, the wordmark.
- **Body:** humanist sans — `Inter` 400, sentence case, comfortable line-height (1.55), neutral tracking. Used for descriptive paragraphs, captions.
- **Nav / labels / buttons:** `Jost` 400, all caps, **wide tracking** (0.18em+).
- **Hierarchy is achieved by scale and weight, not weight alone.** Headlines are 2–4× body and very thin. There's no "bold" headline weight in this system.

#### Typography Substitution ⚠️

The original site appears to use a **licensed thin geometric sans** (likely Söhne, Neue Haas Unica, Albra, or similar). We've substituted **Jost** (display) and **Inter** (body) from Google Fonts as the closest free equivalents. They share the same geometric proportions and thin-weight character.

**Please send the original font files** (TTF / WOFF / WOFF2) and we'll drop them into `fonts/` and update `colors_and_type.css` — the override is a single `@font-face` swap.

### Backgrounds & Imagery

- **No full-bleed gradients.** No bluish-purple tech gradients, no glass morphism.
- **No repeating patterns or textures.** The page is meant to feel empty.
- **The "moon" / sphere** is the one and only signature visual. A radial white-to-grey gradient with a soft outer bloom. Used: (a) as the brand mark, (b) hovering in hero sections as a meditation anchor, (c) as the favicon.
- **Faint circular contours** sometimes appear as backgrounds (large outlined circles in `--border-soft`) — see `assets/circle-contour.svg`.
- **Photography:**
  - **Hero / sanctuaries / portraits:** **black & white**, raised contrast, often vignetted naturally by sky or fog. Documentary feel. Square or vertical crops. Cropped into **circles** for portraits ("Discover The Acraya" section).
  - **Location pages (e.g. Holos – Costa Rica):** **full color**, warm, naturalistic. Square crops in a horizontal carousel with circular nav buttons.

### Layout

- **Massive whitespace.** Sections are separated by ~128–192px of vertical space (`--space-10` / `--space-11`). The page breathes.
- **Asymmetric placement.** Hero copy is left-aligned, descriptive copy is bottom-right of the same section. Section titles ("DISCOVER THE ACRAYA") wrap across two lines indented from the left margin. **Centered layouts are rare.**
- **Edge-to-edge dark sections** (full viewport-height, true black bg) **alternate with edge-to-edge light sections** (full viewport-height, white bg) as you scroll. The transition between them is a hard cut — no fade.
- **Sticky top nav** (~64–72px tall, true black bar, white text, persistent across light and dark sections). This is the brand's continuous thread.

### Borders, Dividers, Shadows

- **Hairlines only.** All borders are 1px, in `--border` (≈14% opacity white on dark, 14% opacity black on light).
- **Section dividers** are full-width 1px hairlines with `~48px` margin above and below (see the horizontal line above the hero on the homepage, and below body copy on the Holos page).
- **No drop shadows.** Anywhere. Not on cards, not on buttons, not on images.
- **The only "elevation" is the moon glow** — a soft radial bloom (`--glow-moon`) used on the sphere and, sparingly, on the wordmark when it sits on dark.

### Corner Radii

The system uses **two shapes only**:

- **Rectangles with zero radius** for images, image cards, the nav bar, photo crops.
- **Perfect circles / pills** for the sphere, portrait crops, the RESERVE button, prev/next carousel arrows, and the favicon.

There is no "rounded card" with `border-radius: 8px`. The choice is binary: square or circle.

### Cards

There is no traditional card. Imagery sits **flat against the background** with no border, no shadow, no rounding. Spacing alone separates them. The "card" component is just an image with a caption underneath.

### Buttons

- **Primary CTA:** white pill, black text, all caps, wide tracking, generous horizontal padding. The "RESERVE" button in the nav.
- **Secondary on dark:** ghost — transparent, hairline white border, white text. Same pill shape.
- **Carousel nav (prev/next):** circular black button (`var(--bg)`) with thin white chevron, 48px diameter.
- **No drop shadow on any button.** No ring on focus that isn't a 1px outline.

### Hover & Press States

- **Links / nav:** opacity fades to `0.65` over `150ms`. No color change, no underline.
- **Primary button:** background lightens by ~12% (`rgba(255,255,255,0.88)`). No transform.
- **Press:** opacity to `0.5`. **No scale-down, no shrink.** Movement is foreign to this brand.
- **Images on hover:** no transform. Maybe a 1.5s opacity fade if it's a gallery item being entered.

### Transparency & Blur

- **Used very sparingly.**
- The moon's halo uses RGBA white over black to fake bloom.
- Borders use RGBA `0.06–0.20` so they pick up the underlying surface tone.
- **No backdrop-blur.** The nav bar is **solid black**, not translucent.

### Motion

- **Slow and meditative.** Default duration is `320ms`; section reveals run `600–1200ms`.
- **Fades over translates.** Things appear by fading in, not sliding up. When a translate is used, it's tiny (≤8px) and paired with a long ease-out.
- **No bouncing, no spring physics.** Easing is always `cubic-bezier(0.22, 0.61, 0.36, 1)` (ease-out) or `cubic-bezier(0.65, 0, 0.35, 1)` (ease-in-out).
- The sphere has a near-imperceptible breathing glow (`--glow-moon` opacity oscillating ±10% over ~6s). It is the only animated element on the page.

### Color Vibe of Imagery

- **Documentary, archival, slightly grainy.** B&W with raised contrast — silvers and deep blacks, very little mid-grey muddiness.
- **Cool when greyscale, warm when color.** The Holos / Costa Rica color photography is warm (terracotta, gold, green) — earth tones, midday-to-dusk lighting. Never blue or magenta.
- **No filters that look obviously filtered.** Just clean exposure.

### What Acraya Avoids

- Emoji, illustrations, hand-drawn marks, mascots
- Drop shadows, glass morphism, neon
- Rounded corners between 0 and 999px
- Bluish-purple gradients, conversion-style accent colors
- Multiple fonts mixed within a single section
- Centered hero text (it's always left-aligned with asymmetric counter-weight)

---

## Iconography

Acraya is **almost iconless**. There are no decorative icons on the site. Iconography is reserved for:

1. **Nav state / carousel controls** — the prev/next circular arrow on the Holos carousel. A thin chevron, white on black.
2. **The sphere mark** — used as a logo, a favicon, and an in-page focal point. See `assets/sphere-mark.svg`.

There is no icon font, no Lucide / Heroicons set on the original site. **If you need additional icons**, use **[Lucide](https://lucide.dev)** via CDN — its **`stroke-width: 1` to `1.25`** weight matches the brand's thin geometric character better than any other free set. Always render Lucide icons at `1px` stroke (not the default `2px`), in `currentColor`, sized 16–24px, no fill.

```html
<!-- example: chevron-right carousel button -->
<button class="acraya-carousel-nav">
  <svg width="20" height="20" stroke="currentColor" stroke-width="1.25" fill="none" viewBox="0 0 24 24">
    <path d="M9 6l6 6-6 6"/>
  </svg>
</button>
```

- **Emoji:** never used.
- **Unicode characters as icons:** never. (No "★" or "→" symbols. If you need an arrow, draw it with SVG at 1px stroke.)
- **PNG icons:** none in the codebase.

> *Substitution flag:* Lucide is a substitution — the original site doesn't appear to use any icon library. If icons end up shipping on Acraya pages, please confirm direction.

---

## How To Use This System

1. **Drop `colors_and_type.css` into `<head>`.** That gives you tokens + element defaults.
2. **Apply `.acraya-light`** to any container (or `<body>`) to switch into light mode.
3. **Use semantic vars (`--bg`, `--fg`, `--border`)** in your own CSS — they swap automatically when the mode flips.
4. **Headlines** → `<h1 class="display-lg">…</h1>` or just `<h2>` (already styled).
5. **Body copy** → `<p class="lede">…</p>` for the larger descriptive paragraphs, default `<p>` otherwise.
6. **Nav labels / eyebrows / button text** → `class="eyebrow"` or `class="nav-link"`.
7. **B&W imagery** → add `class="acraya-bw"` to `<img>`. Color imagery on location pages → `class="acraya-color-image"`.

See `ui_kits/website/index.html` for a working clickthrough.
