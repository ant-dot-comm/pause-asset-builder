---
name: pause-for-a-minute-design
description: Use this skill to generate well-branded interfaces and assets for Pause for a Minute, a musician-led podcast hosted by Brandon Commodore — either for production or throwaway prototypes/mocks/social graphics. Contains essential design guidelines, colors, type, fonts, logos, brand marks, and reusable UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files. It is the brand source of truth — a warm, intimate, mature black-and-purple podcast identity (*where introspection meets ambition*).

Key files:
- `readme.md` — full brand guide: overview, keywords, logo system, colour, type, graphic elements, layout, photography, texture, voice, templates, accessibility.
- `styles.css` — global token entry (link this one file); pulls in `tokens/{fonts,colors,typography,spacing}.css`.
- `assets/logos/` — logo lockups + variants + the pause-bar / clock-arc / mark elements. **On near-black backgrounds use `pause-logo-darkbg.svg` or `pause-logo-ivory.svg` — never the full-colour primary (its black letters vanish).**
- `assets/fonts/` — Averia Sans Libre (the rounded display face).
- `components/core/` — React primitives (Button, Badge, Tag, Kicker, Avatar, Card, Input, IconButton, PauseMark, BrushDivider).
- `ui_kits/templates/` — rendered social/podcast template gallery + JSX (cover, episode, guest, quote, prompt, audiogram, thumbnail, story).
- `templates/` — editable Design-Component templates to copy.

Fonts pair Averia Sans Libre (display) with Newsreader (editorial serif — titles & quotes) and Hanken Grotesk (UI/body). Palette is anchored to near-black `#1C1C1C` and purple `#7E44B4` with ivory, warm tan and a sparing amber accent. No neon, no glow, no digital gradients, no emoji.

If creating visual artifacts (slides, mocks, throwaway prototypes, social graphics), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts or production code, depending on the need.
