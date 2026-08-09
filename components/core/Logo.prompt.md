Picks the correct Rite artwork for the background it sits on, so nobody hand-references a PNG.

```jsx
<Logo height={30} />
<Logo on="dark" height={28} />
<Logo variant="mark" height={32} />
```

The loop mark keeps its teal gradient on every background — only the wordmark flips white. Clear space around the lockup is at least the height of the loop mark's inner triangle. Minimum lockup height 20px; below that use `variant="mark"`. Set `base` when your page is not two levels below the project root.
