The RiteSuite sidebar: Deep Forest (#06211A), 248px, grouped items, mint active state.

```jsx
<SideNav
  header={<Logo on="dark" height={26} />}
  sections={[{ label: 'Workspace', items: [{ id: 'home', label: 'Overview', icon: 'layout-dashboard' }] }]}
  active="home" onSelect={setView}
/>
```

Active item is `rgba(61,237,151,.12)` fill with mint label — never a green bar or left stripe. `collapsed` gives the 64px icon rail. The sidebar is always dark; there is no light variant.
