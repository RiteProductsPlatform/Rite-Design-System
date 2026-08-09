const { SideNav, TopBar, TopBarSearch, IconButton, Avatar, Logo, Button } = window.RiteDS;

const NAV = [
  { label: 'Workspace', items: [
    { id: 'overview', label: 'Overview', icon: 'layout-dashboard' },
    { id: 'projects', label: 'Engagements', icon: 'briefcase', count: 18 },
  ] },
  { label: 'RiteSuite', items: [
    { id: 'convertrite', label: 'ConvertRite', icon: 'database', count: 6 },
    { id: 'bidrite', label: 'BidRite', icon: 'file-text', count: 12 },
    { id: 'revrite', label: 'RevRite', icon: 'receipt' },
    { id: 'wagerite', label: 'WageRite', icon: 'wallet' },
    { id: 'lienrite', label: 'LienRite', icon: 'file-check' },
    { id: 'cowork', label: 'CoWork', icon: 'users' },
  ] },
  { label: 'Insight', items: [
    { id: 'analytics', label: 'Rite Analytics', icon: 'chart-column' },
    { id: 'discovery', label: 'DiscoveryAI', icon: 'sparkles' },
  ] },
];

function AppShell({ view, onNavigate, title, eyebrow, breadcrumbs, actions, children }) {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div style={{ display: 'flex', height: '100%', background: 'var(--surface-page)', overflow: 'hidden' }}>
      <SideNav
        sections={NAV} active={view} onSelect={onNavigate} collapsed={collapsed}
        header={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <Logo variant={collapsed ? 'mark' : 'lockup'} on="dark" height={collapsed ? 24 : 24} base="../../assets/logo/" />
          </div>
        }
        footer={
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: collapsed ? 'center' : 'flex-start' }}>
            <Avatar name="Rob Brown" size="sm" tone="mint" />
            {!collapsed && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ font: '500 13px/1.2 var(--font-sans)', color: '#FFFFFF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Rob Brown</div>
                <div style={{ font: '400 11px/1.3 var(--font-sans)', color: 'var(--rite-sage)' }}>Delivery lead</div>
              </div>
            )}
          </div>
        }
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        <TopBar
          eyebrow={eyebrow} breadcrumbs={breadcrumbs} title={title}
          actions={
            <>
              <IconButton icon={collapsed ? 'panel-left-open' : 'panel-left-close'} label="Toggle sidebar" onClick={() => setCollapsed(!collapsed)} />
              <TopBarSearch width={170} placeholder="Search" />
              <IconButton icon="bell" label="Notifications" />
              <IconButton icon="circle-help" label="Help" />
              {actions}
            </>
          }
        />
        <main style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>{children}</main>
      </div>
    </div>
  );
}

function PageSection({ title, action, children, style }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      {(title || action) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          {title && <h2 style={{ font: '600 16px/1.3 var(--font-sans)', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

Object.assign(window, { AppShell, PageSection, RITE_NAV: NAV });
