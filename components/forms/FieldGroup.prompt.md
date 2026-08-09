Label + control + hint/error, stacked with 6px gaps. Wrap every form control in one.

```jsx
<FieldGroup label="Source system" hint="Where the data is being read from" htmlFor="src">
  <Select id="src" options={[{ value: 'ebs', label: 'Oracle EBS' }]} />
</FieldGroup>
```

Pass `error` and set `invalid` on the control together — the group colours the message, the control colours its border.
