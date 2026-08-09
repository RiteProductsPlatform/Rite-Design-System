One-of-many choice. Supports a description line, which is how Rite explains mutually exclusive run modes.

```jsx
<Radio checked={mode === 'full'} onChange={() => setMode('full')} label="Full load" description="Truncates the target and reloads every record" />
```
