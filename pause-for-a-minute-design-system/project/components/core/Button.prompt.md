Rounded pill button for Pause for a Minute — use for any primary or secondary action; warm, calm, no glow.

```jsx
<Button variant="primary" size="md">Listen now</Button>
<Button variant="secondary">Browse episodes</Button>
<Button variant="ghost" iconLeft={<img src="assets/logos/pause-bars.svg" width="12" />}>Pause</Button>
```

Variants: `primary` (purple solid), `secondary` (outline), `ghost` (subtle purple), `warm` (amber, sparing — reserve for one standout CTA). Sizes `sm | md | lg`. All pill-shaped. Pass `full` to stretch, `as="a"` for links.
