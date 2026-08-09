The Rite action button — filled green for the primary action, outlined for secondary, ghost for tertiary.

```jsx
<Button variant="primary" icon="plus">New conversion</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="ghost" iconAfter="arrow-right">View all</Button>
```

Variants: `primary` (#006F53) · `accent` (Signal Mint — at most one per screen, for a hero CTA) · `secondary` (white, 1px #CDD9D5) · `ghost` · `danger`. Sizes `sm` 32px · `md` 40px · `lg` 48px. Hover darkens to #0E3A2C, press to #06211A — never a scale transform.
