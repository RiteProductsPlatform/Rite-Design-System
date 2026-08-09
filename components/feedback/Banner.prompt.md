In-page message tied to the content below it. Persistent — for transient feedback use `Toast`.

```jsx
<Banner tone="warning" title="14 rows failed validation"
  action={<Button size="sm" variant="secondary">Review</Button>}>
  Fix the source values or map them to a default before re-running.
</Banner>
```

Tone sets the tint, the border and the Lucide glyph. Keep the title to a fact and the body to what to do next.
