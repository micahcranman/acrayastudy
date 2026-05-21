---
name: acraya-design
description: Use this skill to generate well-branded interfaces and assets for Acraya, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

Acraya is a network of **dark meditation retreat sanctuaries**. The brand is monochrome, contemplative, and minimal. The visual signature is a **single glowing sphere** ("the moon") against pure black, with airy thin uppercase headlines and B&W documentary photography.

## Key files

- `README.md` — full content + visual foundations, voice, motifs, what to avoid
- `colors_and_type.css` — drop-in stylesheet with all tokens and element defaults
- `assets/logo-acraya.svg` — horizontal mark (sphere + wordmark)
- `assets/sphere-mark.svg` — sphere only
- `ui_kits/website/` — full clickthrough recreation of the marketing site

## Non-negotiables

- **Monochrome.** No accent colors, no gradients (except the moon's radial bloom).
- **Two shapes only:** rectangle (zero radius) or perfect circle / pill.
- **No drop shadows.** The only elevation is the moon glow.
- **No emoji, no decorative icons.** Use Lucide at `stroke-width: 1.25` if absolutely needed.
- **Thin display type, all caps, wide tracking.** Body in humanist sans, sentence case.
- **Massive whitespace.** Sections breathe at 128–192px apart.
- **Slow motion.** Fades over translates, no spring/bounce.
