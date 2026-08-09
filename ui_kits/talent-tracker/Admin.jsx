const { Card, Badge, Button, IconButton, DataTable, Tabs, Input, Select, Checkbox, Switch, Banner, Icon, Tooltip, Avatar, EmptyState, Modal, FieldGroup } = window.RiteDS;

/* ── Users tab ──────────────────────────────────────────────────────────── */
function UsersTab({ role, onToast }) {
  const [q, setQ] = React.useState('');
  const canViewCred = window.ttShowComponent(role, 'TT_ADMIN_VIEW_CRED');
  const canResetCred = window.ttShowComponent(role, 'TT_ADMIN_RESET_CRED');
  const rows = window.TT_USERS.filter((u) => !q || (u.name + ' ' + u.email + ' ' + u.role).toLowerCase().includes(q.toLowerCase()));

  const cols = [
    { key: 'name', header: 'User', render: (u) => (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        <Avatar name={u.name} size="sm" tone={u.status === 'ACTIVE' ? 'brand' : 'muted'} />
        <span>
          <span style={{ display: 'block', font: '500 14px/1.2 var(--font-sans)' }}>{u.name}</span>
          <span style={{ display: 'block', font: '400 12px/1.2 var(--font-sans)', color: 'var(--text-tertiary)', marginTop: 3 }}>{u.email}</span>
        </span>
      </span>
    ) },
    { key: 'personNumber', header: 'Person no.', mono: true, muted: true, width: 120 },
    { key: 'role', header: 'Role', width: 190, render: (u) => (
      <Select size="sm" defaultValue={u.role} options={window.TT_ROLES.map((r) => ({ value: r.code, label: r.label }))} />
    ) },
    { key: 'status', header: 'Status', width: 120, render: (u) => <Badge tone={u.status === 'ACTIVE' ? 'success' : 'neutral'} dot>{u.status.toLowerCase()}</Badge> },
    { key: 'act', header: '', align: 'right', width: 130, render: (u) => (
      <span style={{ display: 'inline-flex', gap: 6, justifyContent: 'flex-end' }}>
        {canViewCred && <Tooltip label="View credentials"><IconButton icon="key-round" label="View credentials" /></Tooltip>}
        {canResetCred && <Tooltip label="Reset password"><IconButton icon="rotate-ccw" label="Reset credentials" onClick={() => onToast({ tone: 'info', title: 'Reset link sent', body: u.email })} /></Tooltip>}
        <IconButton icon="ellipsis" label="More" />
      </span>
    ) },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Banner tone="info" title="Users and roles come from Oracle Fusion">
        Talent Tracker owns no user table. Roles resolve through common-service; this screen is a window onto that data, not a local registry.
      </Banner>
      {!canViewCred && (
        <Banner tone="neutral" title="Credential actions are hidden for your role">
          <span>Viewing and resetting login credentials is itself governed by the permission matrix (<code style={{ font: '400 12px var(--font-mono)' }}>TT_ADMIN_VIEW_CRED</code>).</span>
        </Banner>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Input size="sm" icon="search" placeholder="Search users…" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: 250 }} />
        <div style={{ flex: 1 }} />
        <Button size="sm" variant="secondary" icon="refresh-cw">Sync from Fusion</Button>
      </div>
      <Card padding={0}>
        <DataTable columns={cols} rows={rows} empty={<EmptyState icon="users" title="No users match that search" />} />
      </Card>
    </div>
  );
}

/* ── Role permissions grid ──────────────────────────────────────────────── */
function PermissionsTab({ onToast }) {
  const [matrix, setMatrix] = React.useState(() => JSON.parse(JSON.stringify(window.TT_MATRIX)));
  const [dirty, setDirty] = React.useState(false);
  const pages = window.TT_PAGES;

  const toggle = (roleCode, pageCode) => {
    if (roleCode === 'ADMIN') return;
    setMatrix((m) => ({ ...m, [roleCode]: { ...m[roleCode], [pageCode]: m[roleCode][pageCode] === 'HIDDEN' ? 'FULL' : 'HIDDEN' } }));
    setDirty(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Banner tone="warning" title="Saving is not wired yet">
        The grid reads the RBAC matrix returned by <code style={{ font: '400 12px var(--font-mono)' }}>session-context</code>. common-service has no write endpoint yet, so changes here are local to this session.
      </Banner>
      <p style={{ font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-tertiary)' }}>
        Toggle a cell to change which screens a role sees, application-wide, without a redeploy. Admin’s row is always locked on.
      </p>
      <Card padding={0}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', font: '400 13px/1.4 var(--font-sans)' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '11px 16px', font: '600 11px/1.2 var(--font-sans)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)', background: 'var(--surface-sunken)', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', left: 0, zIndex: 2 }}>Role</th>
                {pages.map((p) => (
                  <th key={p.pageCode} style={{ textAlign: 'center', padding: '11px 12px', whiteSpace: 'nowrap', font: '600 11px/1.2 var(--font-sans)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)', background: 'var(--surface-sunken)', borderBottom: '1px solid var(--border-subtle)' }}>{p.pageName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {window.TT_ROLES.map((r) => {
                const locked = r.code === 'ADMIN';
                return (
                  <tr key={r.code}>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-card)', position: 'sticky', left: 0, zIndex: 1 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ font: '500 14px/1.2 var(--font-sans)' }}>{r.label}</span>
                        {locked && <Tooltip label="Admin always has full access"><Icon name="lock" size={13} style={{ color: 'var(--text-tertiary)' }} /></Tooltip>}
                      </span>
                    </td>
                    {pages.map((p) => {
                      const on = matrix[r.code][p.pageCode] !== 'HIDDEN';
                      return (
                        <td key={p.pageCode} style={{ textAlign: 'center', padding: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                          <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 3, opacity: locked ? .65 : 1 }}>
                            <Checkbox checked={on} disabled={locked} onChange={() => toggle(r.code, p.pageCode)} />
                            {locked && <span style={{ font: '400 9px/1 var(--font-sans)', color: 'var(--text-tertiary)' }}>locked</span>}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
        <Button variant="secondary" onClick={() => { setMatrix(JSON.parse(JSON.stringify(window.TT_MATRIX))); setDirty(false); }}>Reset to default</Button>
        <Button icon="check" disabled={!dirty} onClick={() => onToast({ tone: 'info', title: 'Save endpoint not available', body: 'common-service does not expose an RBAC write endpoint yet.' })}>Save permissions</Button>
      </div>
    </div>
  );
}

/* ── Integrations ───────────────────────────────────────────────────────── */
const INTEGRATIONS = [
  { id: 'ms', name: 'Microsoft 365', desc: 'SSO, Outlook mail and attachments, Teams meeting links for interview rounds.', icon: 'building-2', status: 'NOT_CONFIGURED' },
  { id: 'google', name: 'Google Workspace', desc: 'Gmail send, Google Meet links, Calendar sync.', icon: 'globe', status: 'NOT_CONFIGURED' },
  { id: 'claude', name: 'Anthropic Claude', desc: 'Resume parsing, candidate match scoring, interview question generation.', icon: 'sparkles', status: 'CONNECTED' },
  { id: 'notify', name: 'Notification service', desc: 'Server-side email for interview invites, decisions and offer links.', icon: 'bell', status: 'CONNECTED' },
];

function IntegrationsTab({ onToast }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Banner tone="info" title="Email is sent server-side">
        The UI never sends mail directly — notification-service owns delivery, so templates and audit stay in one place.
      </Banner>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
        {INTEGRATIONS.map((i) => {
          const on = i.status === 'CONNECTED';
          return (
            <Card key={i.id} padding={20}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 13 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, flex: '0 0 auto', borderRadius: 'var(--radius-md)', background: 'var(--surface-subtle)', color: 'var(--text-brand)' }}>
                  <Icon name={i.icon} size={19} />
                </span>
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <span style={{ font: '600 15px/1.2 var(--font-sans)' }}>{i.name}</span>
                    <Badge tone={on ? 'success' : 'neutral'} dot>{on ? 'Connected' : 'Not configured'}</Badge>
                  </span>
                  <p style={{ font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-tertiary)' }}>{i.desc}</p>
                  <div style={{ marginTop: 4 }}>
                    <Button size="sm" variant={on ? 'secondary' : 'primary'} icon={on ? 'settings' : 'plug'}
                      onClick={() => onToast({ tone: 'info', title: on ? 'Configuration is server-side' : 'Not wired yet', body: i.name + ' is managed through environment configuration.' })}>
                      {on ? 'Configure' : 'Connect'}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function Admin({ role, onToast }) {
  const [tab, setTab] = React.useState('users');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 1480 }}>
      <Tabs active={tab} onSelect={setTab} items={[
        { id: 'users', label: 'Users', icon: 'users', count: window.TT_USERS.length },
        { id: 'perms', label: 'Role Permissions', icon: 'shield-check' },
        { id: 'integrations', label: 'Integrations', icon: 'plug' },
      ]} />
      {tab === 'users' && <UsersTab role={role} onToast={onToast} />}
      {tab === 'perms' && <PermissionsTab onToast={onToast} />}
      {tab === 'integrations' && <IntegrationsTab onToast={onToast} />}
    </div>
  );
}

Object.assign(window, { Admin, UsersTab, PermissionsTab, IntegrationsTab });
