White surface, 12px radius, 1px #E3EAE7 hairline. The default container for everything in a Rite screen.

```jsx
<Card header={<h3>Conversion runs</h3>} footer={<Button variant="ghost" size="sm">View all</Button>}>
  …
</Card>
```

Border **or** shadow, never both at rest — app cards get the border, and only pick up a shadow on hover when `interactive`. `tone="dark"` gives the Tiber card used inside dark bands. No coloured left-border stripe; that is not a Rite pattern.
