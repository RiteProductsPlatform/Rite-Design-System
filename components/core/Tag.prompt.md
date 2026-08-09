An interactive pill: a filter chip, or a removable token in a multi-select.

```jsx
<Tag selected>Oracle Fusion</Tag>
<Tag onRemove={() => drop('HCM')}>HCM</Tag>
```

Unlike `Badge`, `Tag` is clickable and outlined. Use `selected` for the active state in a filter row.
