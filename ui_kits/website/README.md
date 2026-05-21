# Acraya — Marketing Website UI Kit

Interactive recreation of `acraya-website.vercel.app`. Open `index.html` to scroll through the homepage flow: hero with glowing sphere → intro/about → sanctuaries gallery → location detail (Holos, Costa Rica) → reservation CTA.

## Components

- `Nav.jsx` — sticky black top nav (logo + 4 links + RESERVE pill)
- `Sphere.jsx` — the glowing moon with breathing animation
- `Hero.jsx` — landing section ("SANCTUARIES FOR SPIRITUAL WANDERERS")
- `Intro.jsx` — "DISCOVER THE ACRAYA" with three offset B&W portraits
- `PracticeSection.jsx` — "A DARK RETREAT IS A PROFOUND MEDITATION PRACTICE…" + body
- `SanctuariesGrid.jsx` — three B&W landscape images
- `LocationDetail.jsx` — "HOLOS — COSTA RICA" with color carousel
- `Reserve.jsx` — final reservation form section
- `ImageFrame.jsx` — neutral placeholder that swaps to a real `<image-slot>` users can drag photos onto

## Imagery

All photographic positions use `<image-slot>` from the starter — users can drag-and-drop their own images and they persist. Until they do, you see a labeled placeholder so the layout still reads correctly. Toggle B&W vs color via the `bw` prop on `<ImageFrame>`.

## Brand fidelity

Components use the tokens from `../../colors_and_type.css` directly. The nav stays solid black across both modes (per the source). Section breaks alternate dark/light with hard cuts.
