12px trail with chevron separators. Sits in the `TopBar` slot where the eyebrow would otherwise go.

```jsx
<Breadcrumbs items={[{ id: 'home', label: 'RiteSuite' }, { id: 'cr', label: 'ConvertRite' }, { label: 'Cianbro HCM' }]} onNavigate={go} />
```

The last crumb is the current page: never a link.
