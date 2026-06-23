# Pause Asset Builder AI Generation Rules

Use these rules when generating or editing this project. The app is in a client-handoff state, so future work should preserve the current visual direction and avoid broad rewrites.

## Product Intent

- This is a branded asset builder for Pause for a Minute, not a generic template tool.
- Treat the preview templates as the source of truth for exported assets. The surrounding builder UI can change, but preview canvases should only change when the requested asset design changes.
- Keep changes small, visual, and purposeful. Avoid refactoring the single-file React structure unless the user explicitly asks for maintainability work.

## Brand System

- Use only the existing design-system palette. Do not add freeform color pickers or arbitrary new colors unless the brand palette itself is being updated.
- Core colors: near black, deep plum, Pause purple, muted lavender, ivory, warm tan, clay, and amber.
- Prefer dark plum/near-black surfaces for app chrome, with ivory text and lavender metadata.
- Keep warmth and analog texture in the templates: paper grain, tick fields, arc scallops, brush rules, tick strips, and pause dividers.
- Do not reintroduce corner flourishes. They were intentionally removed from the design system.

## Logo Rules

- Use the handmade, logo-derived assets already in `public/brand/assets/logos`.
- Prefer `TwoColorLogo` where a full logo appears in templates.
- Expose logo primary and secondary color controls when logo contrast needs to adapt to the selected background.
- For horizontal Episode Cover and Guest Announcement photo layouts, use the rounded-square `LogoAvatar` treatment. Do not add a second standalone logo in the same visual area.
- Avoid generic geometric marks. Marks and arcs should come from the approved brand assets.

## Template Layout Rules

- Preserve vertical and horizontal image orientation switches for image templates.
- Keep image-led templates protected with dark overlays, gradient fades, or pill treatments so text remains readable on arbitrary uploads.
- Kicker and episode pills should use the existing blurred pill style, with independent palette-based background/text colors where available.
- Main Cover uses the two-color logo, hosted-by line, brush divider, tagline, and optional PNG cutout aligned flush right.
- Quote Card is left-aligned with the logo at top right, slightly larger than the original small mark.
- Pause Prompt is an inward-question template with centered full logo, mirrored tick strips, and a bottom pause divider.
- Live Post, Audiogram, YouTube Thumbnail, and Instagram Story should use full two-color logos where currently implemented.

## Builder UI Rules

- Keep the UI outside the preview container in dark mode using the existing palette.
- Do not darken or restyle the preview canvas wrapper in a way that changes exported artwork.
- Color inputs should stay as palette dropdowns. Do not use native full-spectrum color inputs.
- Image uploads should continue to compress regular image uploads and preserve PNG cutouts when transparency matters.
- Keep the branded upload loading state.

## Implementation Notes

- Main app code currently lives in `src/main.jsx`; custom CSS lives in `src/styles.css`.
- Prefer existing helpers and components: `Template`, `Photo`, `Texture`, `Deco`, `TwoColorLogo`, `LogoAvatar`, `KickerPill`, `PaletteDropdown`, and `BrushClockLoader`.
- After visual or code edits, run `npm run build` and check lints for changed files.
- Preserve user-upload/session behavior unless explicitly changing persistence.
