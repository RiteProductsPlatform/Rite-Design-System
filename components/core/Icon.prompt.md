A Lucide glyph masked to `currentColor` — the icon primitive every other Rite component uses.

```jsx
<Icon name="database" size={20} />
<span style={{ color: 'var(--rite-signal-mint)' }}><Icon name="check" size={16} /></span>
```

Names are Lucide kebab-case (lucide.dev). Colour it by setting `color` on the icon or its parent — there is no `color` prop. Sizes in Rite UI: 16 (inline/table), 20 (buttons, nav), 24 (headers), 32–48 (empty states, feature plates).

Lucide is a **flagged substitution** for the deck's Microsoft 365 outline icons; the deck's own rasters live in `assets/icons/`.
