Record list: uppercase 11px header on #F2F4F3, 1px #E3EAE7 row rules, mint-tint hover.

```jsx
<DataTable
  columns={[
    { key: 'name', header: 'Object', sortable: true },
    { key: 'rows', header: 'Records', align: 'right', mono: true },
    { key: 'status', header: 'Status', render: (r) => <Badge tone={r.tone} dot>{r.status}</Badge> },
  ]}
  rows={objects} onRowClick={open} sortKey="name" sortDir="asc" onSort={setSort}
/>
```

Put every number, ID and date in a `mono` column — that is the brand's scanning convention. Drop it inside a `<Card padding={0}>` for the standard framed treatment.
