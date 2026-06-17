# Pause for a Minute — Design System

A complete brand + design system for **Pause for a Minute**, a musician-led podcast hosted by **Brandon Commodore** — touring musician, bandleader, composer and educator — about life, culture, ambition, success, failure, and the importance of slowing down. *Where introspection meets ambition.*

This project is the visual source of truth. It is built directly around the uploaded **"PAUSE — for a minute"** logo: bold rounded lettering, a pause-bar symbol, a clock arc with tick marks, brush-stroke detailing, and a warm dark backdrop. Everything here preserves that feeling — premium, intimate, cinematic, mature — without neon purple, digital gradients, glow, or glossy tech polish.

> **Source materials** (uploaded by the client, preserved in `assets/`):
> - `pause-logo-dark.svg` → `assets/logos/pause-logo-primary.svg` (full-colour: near-black ink `#1C1C1C` + purple `#7E44B4`)
> - `pause-logo-light.svg` → `assets/logos/pause-logo-mono.svg` (single-colour outline; recoloured into ivory/purple/black/dark-bg variants)
> - `AveriaSansLibre-{Bold,Light,Regular}.ttf` → `assets/fonts/` (the rounded brand display typeface)

---

## 1 · Brand Overview

Pause for a Minute is a space to slow down. Each episode is a real conversation with hustlers, doers, movers and shakers — creative people tracing the tapestry of life, culture and ambition, and the intriguing tales of success and failure that shape our paths. It is introspective but never soft, ambitious but never loud.

The brand should feel **warm, thoughtful, culturally grounded, musical, mature, intimate, ambitious, reflective, conversational, human, and slightly nostalgic** — like a late-evening studio conversation between people who take their craft seriously and themselves lightly.

**Audience:** creatives, musicians, founders, and curious people in their late-20s through 50s who value depth over hype — listeners who want substance, story, and a moment to reflect amid a busy life.

**Emotional tone:** the hush after a song ends. Considered, grounded, a little analog. Confident enough to leave space.

## 2 · Brand Keywords

`Grounded` · `Reflective` · `Rhythmic` · `Ambitious` · `Human` · `Cultural` · `Warm` · `Mature` · `Honest` · `Creative` · `Timeless` · `Conversational`

Every design decision should be defensible against these words. If something feels cold, clinical, hyped, or trendy-for-its-own-sake, it's off-brand.

## 3 · Logo System

The logo is the visual anchor. **Do not redesign it.** Use the supplied lockups and the derived single-element marks.

| Variant | File | Use on |
|---|---|---|
| Primary (full colour) | `assets/logos/pause-logo-primary.svg` | Light / ivory backgrounds |
| Dark-background full colour | `assets/logos/pause-logo-darkbg.svg` | Near-black & plum backgrounds (ivory letters, purple bars) |
| Ivory (mono) | `assets/logos/pause-logo-ivory.svg` | Dark backgrounds, footers, small sizes |
| Purple (mono) | `assets/logos/pause-logo-purple.svg` | Tonal / single-colour layouts |
| Black (mono) | `assets/logos/pause-logo-black.svg` | Ivory backgrounds, print, stamps |
| Icon mark | `assets/logos/pause-mark.svg` (+ `-purple`) | Avatars, favicons, watermarks, app tile |
| Clock arc | `assets/logos/clock-arc.svg` | Standalone graphic element / section accent |
| Pause bars | `assets/logos/pause-bars.svg` | Bullet, divider motif, play/pause UI |

- **Primary logo** — the full lockup (wordmark + clock arc + "FOR A MINUTE" rule). Lead with it on covers and headers.
- **Secondary / horizontal** — when vertical room is tight, pair the icon mark + "PAUSE FOR A MINUTE" set in the display font.
- **Icon-only** — the clock arc + pause bars. Use for the social avatar, app tile, and favicon. Square-crop with even padding.
- **Square podcast cover** — centre the dark-background lockup on near-black with generous margin; add the tagline below.
- **Social avatar** — icon mark on a solid near-black or deep-purple circle.
- **Clear space:** keep a margin of at least one cap-height of the "P" on all sides. Never crowd it.
- **Minimum size:** 120px wide (digital) / 28mm (print) for the full lockup; 24px for the icon mark.
- **Placement:** top-left or centred. Anchor to a margin, never floating arbitrarily.

**Do** recolour using the supplied variants · keep the brush texture and tick marks · use the pause bars and clock arc as standalone motifs.
**Don't** stretch, rotate, add glow/drop-shadow, recolour into neon, place full-colour-on-near-black (letters vanish — use the dark-bg variant), box it in, or rebuild the lettering in another font.

## 4 · Colour Palette

Anchored to the logo's `#1C1C1C` and `#7E44B4`. Premium, intimate, musical, warm, grounded. (Full tokens in `tokens/colors.css`; specimens under the **Colors** group in the Design System tab.)

| Name | Hex | Token | Use |
|---|---|---|---|
| Near Black | `#1C1C1C` | `--ink-800` | Primary dark surface, logo ink |
| Ink Black | `#141414` | `--ink-900` | Deepest base, full-bleed backgrounds |
| Purple-Black | `#18121F` | `--plum-950` | Rich tonal background |
| Deep Purple | `#4A2C63` | `--plum-700` | Grounded violet, borders, pressed accent |
| Pause Purple | `#7E44B4` | `--plum-500` | The brand accent — buttons, marks |
| Muted Lavender | `#B59CD0` | `--plum-300` | Soft accent, links, hover |
| Lavender Mist | `#CDBEDE` | `--plum-200` | Tints, dividers on dark |
| Ivory | `#F4EEE2` | `--ivory-50` | Light surface / text on dark |
| Warm Paper | `#ECE4D4` | `--ivory-100` | Secondary light surface |
| Warm Tan | `#D8C3A5` | `--tan-300` | Beige accent, texture |
| Clay | `#B79A73` | `--tan-500` | Muted warm lines, metadata |
| Amber | `#CF8A3E` | `--amber-500` | Golden-orange accent — *sparing* |

**Avoid:** neon/electric purple, bright digital gradients, glossy or metallic fills, corporate blues. Purple is muted and grounded; amber is the single warm spark — use it for one element per layout, not everywhere.

## 5 · Typography System

Three families, each with a job. Specimens under the **Type** group.

- **Display — Averia Sans Libre** (uploaded). Rounded, hand-feel, slightly imperfect. The PAUSE voice: big headlines, cover titles, wordmark-adjacent type. Tokens: `--font-display`.
- **Editorial — Newsreader** (Google Fonts). A warm literary serif for **episode titles, guest names (italic), and pull-quotes**. Mature, editorial, a little artistic. Tokens: `--font-editorial`.
- **UI / Body — Hanken Grotesk** (Google Fonts). A clean humanist sans, readable at small sizes, warm not cold. **Body copy, buttons, inputs, metadata, labels.** Tokens: `--font-body`.

Roles: display font → PAUSE / hero · editorial serif → titles, guests, quotes · grotesk → body & metadata · grotesk uppercase + wide tracking (`--ls-label`) → kickers and labels.

> **Font substitution flag:** the client supplied only the Averia display TTFs. **Newsreader** and **Hanken Grotesk** were chosen (from Google Fonts) as the editorial-serif and body pairings because they match the brief — clean, mature, editorial, warm, readable, modern-but-not-generic. If you have preferred licensed fonts for body/titles, send them and they'll be swapped in.

## 6 · Graphic Elements

A flexible kit drawn from the logo — see `assets/logos/` and the `PauseMark` / `BrushDivider` components.

- **Pause icon (bars)** — bullet, divider centre, play/pause control, accent.
- **Clock tick marks** — radiating dashes; use as a kicker dash, a rhythm strip, or framing a headline.
- **Half-circle clock arc** — section header accent, a "time" motif over a quote, a quiet crown above the wordmark.
- **Brush-stroke underline / rule** — echoes the hand-painted "— FOR A MINUTE —". Use under kickers or to break a quote.
- **Rounded frames** — soft 16–32px radii on cards and photo crops.
- **Rhythm marks / audiogram bars** — purple bars of varying height = sound, used on audiograms and clip covers.
- **Subtle paper grain** — a 4–7px radial-dot texture at very low opacity over dark surfaces.

Used across covers, social posts, guest announcements, audiograms and ads. The system nods to **music and time without clichés** — no microphones, headphones or musical notes unless extremely subtle.

## 7 · Layout System

Intentional, spacious, balanced. Bold hierarchy for **PAUSE**, episode names, guest names and quotes. Generous margins (≥64px on a 1080 canvas). One clear focal point per layout. See the **Templates** group and `ui_kits/templates/`.

Hierarchy ladder: *kicker (label) → title (editorial serif) → guest (italic serif) → supporting line (grotesk muted) → logo / CTA.* Left-align long text; centre only short, ceremonial layouts (covers, prompts). Anchor the logo or mark to a margin.

## 8 · Photography Direction

Natural, warm, honest, human, cultural, slightly cinematic — **never** stock, influencer-style, or over-polished.

- **Cropping:** tight, intimate portrait crops; let subjects breathe but stay close. Eyes near upper third.
- **Treatment:** warm shadows, gentle film **grain**, soft background blur. Optional **black-and-white** for timeless guest portraits, or a **muted purple duotone** (`--plum-700`→`--ink-900`) when integrating into dark layouts.
- **Overlays:** dark-to-transparent gradient from the bottom so type sits legibly over the image (see Guest Announcement).
- **Avoid:** harsh flash, saturated colour grading, clean studio seamless white, obvious posing.

> The template kit uses tasteful **duotone placeholders** in place of real photography. Drop real portraits in and apply the warm/B&W/purple treatments above.

## 9 · Texture & Backgrounds

- **Deep black** `#141414`, **near-black** `#1C1C1C`, **purple-black** `#18121F` — the default canvases.
- **Subtle paper grain:** low-opacity radial-dot pattern (4–7px) over dark fills — adds the analog, matte feel.
- **Ivory / Warm Paper** for light layouts; **muted purple** tonal blocks for variety.
- **Avoid:** neon, glow, shiny digital gradients, metallic shine, busy patterns, clutter.

## 10 · Voice & Copy Tone

See the **Content Fundamentals** section below for the full voice guide and example copy for every post type.

## 11 · Template System

Reusable layouts live in two places:
- **`ui_kits/templates/`** — a rendered gallery (`index.html`) plus the JSX for **podcast cover, episode cover, guest announcement, quote card, pause prompt, new-episode, audiogram, YouTube thumbnail, Instagram story**.
- **`templates/<slug>/`** — directly-editable Design-Component templates a consuming project can copy (`EpisodeCover`, `QuoteCard`).

Each layout pairs a kicker, an editorial-serif title, optional guest/quote, a supporting grotesk line, and the logo or mark — on a dark, grainy canvas with a single purple (or one amber) accent.

## 12 · Music & Culture Design Direction

Nod to music, culture and creative ambition without becoming literal or cheesy. Quiet inspiration from **jazz posters, soul album covers, vintage radio graphics, tour posters, community flyers, editorial magazines, hand-painted signage, and analog music textures** — translated into: hand-feel display type, warm dark fields, brush-stroke rules, tick-mark rhythm, restrained ink-and-spot-colour palettes, and generous editorial whitespace. Keep it modern, restrained, podcast-friendly. Suggestion, not pastiche.

## 13 · Accessibility & Production Rules

- **Contrast:** ivory `#F4EEE2` on near-black easily clears AA. Pause-purple `#7E44B4` text on near-black is borderline for small text — use **Muted Lavender `#B59CD0`** for small purple text on dark. Never set amber text below 18px on dark.
- **Thumbnail readability:** the podcast cover must read at ~120px. Keep title ≤4 words at cover scale; lean on the logo + one line.
- **Small text:** body never below 14px digital / 12pt print; metadata labels 11px minimum with wide tracking.
- **Social safe margins:** keep type ≥64px from edges on a 1080 canvas (≥120px bottom on Stories for the UI gutter).
- **Hit targets:** ≥44px.
- **Export sizes:** square 1080×1080 · story/reel 1080×1920 · YouTube 1280×720 · newsletter header 1200×400.
- **Combinations to avoid:** full-colour logo on near-black, amber-on-purple, body text in the display font, more than one amber accent per layout.
- **Decoration limit:** one hero motif + grain per layout. If a design has a clock arc *and* brush rule *and* tick strip *and* bars, remove until one leads.

## 14 · Final Brand Summary

Pause for a Minute looks like a warm, analog, late-night studio: **near-black and purple-black canvases, a single grounded purple accent, ivory type, and one warm amber spark.** Rounded **Averia** display for PAUSE, literary **Newsreader** for titles and quotes, clean **Hanken Grotesk** for everything else. The logo's pause bars, clock arc, tick marks and brush rule are the recurring motifs. Layouts are spacious and editorial with a bold single focal point. Photography is honest, warm and cinematic. The voice is reflective, grounded and conversational — *where introspection meets ambition.* A designer with this system and the `assets/` folder can build every future cover, post, audiogram and ad on-brand.

---

## Content Fundamentals — Voice & Copy

**How copy is written:** first person from Brandon ("I sit with…"), speaking to the listener as "you". Sentences are unhurried and human. Reflective and grounded — never preachy, hype, or cliché-inspirational. Mature and conversational. Occasional fragments for rhythm, like a spoken pause.

- **Casing:** Sentence case for everything readable. UPPERCASE only for short kickers/labels with wide tracking. Titles in editorial serif, sentence case.
- **Person:** "I / we" (host) speaking to "you" (listener).
- **Emoji:** none. The brand expresses warmth through words and texture, not emoji.
- **Punctuation:** the middot `·` separates metadata (Episode 47 · Season 3). Em-dashes for asides. Curly quotes always.
- **Vibe:** thoughtful, a little nostalgic, confident enough to leave space. Avoid exclamation marks, growth-hack language, and "🔥 don't miss this" energy.

**Example copy**

- **New episode post:** "Episode 47 is live. Maya Okonkwo on craft, doubt, and the quiet work of showing up before the world is watching. Listen wherever you find your podcasts."
- **Guest announcement:** "This week I sit with Maya Okonkwo — composer, bandleader, reluctant optimist. We get into discipline, drift, and what she's still figuring out."
- **Quote card:** "Some of the best things I've made came right after I stopped trying so hard."
- **Reflection / Pause Prompt:** "What are you still doing only because you started it?"
- **Subscribe CTA:** "Follow Pause for a Minute. A new conversation every Tuesday — for the times even a busy mind needs a moment."
- **Mission statement:** "Pause for a Minute is where introspection meets ambition — honest conversations with the people building a life worth talking about."
- **Audiogram caption:** "You don't find the time. You defend it. — Maya Okonkwo, Episode 47."

---

## Visual Foundations

- **Colour vibe:** warm darks, grounded purple, ivory, one amber spark. No neon, no cool blues. Imagery is warm / cinematic / optionally B&W or purple-duotone.
- **Type:** Averia (display, rounded, hand-feel) · Newsreader (editorial serif, titles + quotes, italic for guests) · Hanken Grotesk (UI/body/metadata). Labels uppercase, `0.18em` tracking.
- **Spacing:** 4px base scale (`--space-1…9`), generous. Reading measure ~38rem. Big margins on social canvases.
- **Backgrounds:** mostly solid near-black / purple-black with a **subtle radial-dot paper grain** at very low opacity. No digital gradients; the only gradients allowed are dark-to-transparent **protection overlays** on photos. Ivory for light layouts.
- **Borders & cards:** soft radii — `--radius-md 16px` to `--radius-lg 24px`; pill (`999px`) for buttons/badges. Cards are warm matte `--surface-2` with a 1px hairline (`--line`), optional 4px purple accent tab, and a **soft matte shadow** (`--shadow-md`). Never glossy or glowing.
- **Shadows:** soft, warm, low — `--shadow-sm/md/lg`; a warm low-ambient (`--shadow-warm`) for ivory surfaces. No hard or coloured-glow shadows.
- **Animation:** calm and considered — short fades and gentle scales (`--ease-soft`, `--ease-out`, 140–420ms). **No bounce, no infinite loops** on content. Press = subtle `scale(0.97)`; hover = darker/lighter fill or border shift.
- **Hover states:** primary button → deepens to `--accent-deep`; ghost → faint purple wash; secondary/tag → border shifts to lavender.
- **Press states:** slight shrink (`scale(0.93–0.97)`), no colour flash.
- **Transparency & blur:** sparingly — protection gradients on photos, low-opacity grain. Avoid frosted-glass tech tropes.
- **Layout rules:** one focal point; logo/mark anchored to a margin; bold hierarchy for PAUSE / titles / guests / quotes.

---

## Iconography

The brand's iconography is **drawn from its own logo** — it does not ship a third-party icon font.

- **Brand marks (primary):** `pause-bars.svg`, `clock-arc.svg`, `pause-mark.svg` — the pause bars, clock arc and combined mark. These are the signature icons: use them for play/pause, bullets, dividers and accents. The `PauseMark` React component renders them inline and recolourable.
- **UI glyphs (functional):** for generic interface icons (play ▶, share, arrow, search, etc.) use **[Lucide](https://lucide.dev)** — a calm, rounded, even-stroke set that matches the brand's softness. Load from CDN (`https://unpkg.com/lucide@latest`) or inline the SVGs you need. *(This is a substitution — no icon set was supplied; Lucide was chosen for its rounded, mature stroke. Swap if you have a preferred set.)*
- **Emoji:** never used in brand copy or UI.
- **Unicode:** the middot `·`, em-dash `—`, and curly quotes `" "` are used typographically (metadata separators, asides). Avoid decorative unicode as icons.
- Keep icon stroke weight consistent and corners rounded; size functional icons 16–24px, brand marks 24px+.

---

## File Index / Manifest

```
styles.css                  Global entry — @imports only (consumers link this)
tokens/
  fonts.css                 @font-face (Averia local) + Google import (Newsreader, Hanken Grotesk)
  colors.css                Raw palette + semantic aliases (dark default, [data-theme=light])
  typography.css            Families, weights, type scale, line-height, tracking
  spacing.css               Spacing, radii, shadows, motion, layout tokens
assets/
  logos/                    Logo lockups + variants + derived marks (see Logo System table)
  fonts/                    Averia Sans Libre TTFs
components/core/            React primitives + .d.ts + .prompt.md + core.card.html
  Button · IconButton · Badge · Tag · Kicker · Avatar · Card · Input · PauseMark · BrushDivider
ui_kits/templates/          Rendered template gallery (index.html) + JSX
  Shared.jsx · Covers.jsx · Social.jsx · Wide.jsx
templates/                  Editable Design-Component templates (copy into a consuming project)
  episode-cover/ · quote-card/
guidelines/                 Foundation specimen cards (Design System tab)
SKILL.md                    Agent-skill manifest
```

**Components:** Button, IconButton, Badge, Tag, Kicker, Avatar, Card, Input, PauseMark, BrushDivider — namespace `window.PauseForAMinuteDesignSystem_16ad29`.
**UI kit:** `ui_kits/templates/` — the social & podcast template set.
**Templates:** `templates/episode-cover`, `templates/quote-card`.
