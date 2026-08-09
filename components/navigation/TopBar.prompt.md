Sticky 60px application header — the only translucent surface in the system (`rgba(255,255,255,.72)` + 12px blur).

```jsx
<TopBar eyebrow="ConvertRite" title="Cianbro HCM conversion"
  actions={<><TopBarSearch /><IconButton icon="bell" label="Notifications" /><Button size="sm">Run</Button></>} />
```

Pass `breadcrumbs={<Breadcrumbs …/>}` instead of `eyebrow` on detail pages. `TopBarSearch` is the matching 34px search field.
