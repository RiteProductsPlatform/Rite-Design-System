Section switcher. `underline` for page-level navigation, `pill` for a segmented control inside a card.

```jsx
<Tabs items={[{ id: 'map', label: 'Mapping', count: 42 }, { id: 'log', label: 'Run log' }]} active={tab} onSelect={setTab} />
<Tabs variant="pill" items={[{ id: 'w', label: 'Week' }, { id: 'm', label: 'Month' }]} active={range} onSelect={setRange} />
```

Active underline is a 2px #006F53 rule with a green label — no background fill.
