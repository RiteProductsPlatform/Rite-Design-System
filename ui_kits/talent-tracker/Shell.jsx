const { SideNav, TopBar, TopBarSearch, IconButton, Avatar, Badge, Button, Icon, Select, Tooltip, Card, EmptyState } = window.RiteDS;

/* ── Brand lockup: Rite mark + product name ─────────────────────────────── */
function ProductLogo({ collapsed }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
      <img src="../../assets/logo/rite-mark.png" alt="Rite" style={{ height: 26, width: 'auto', flex: '0 0 auto' }} />
      {!collapsed && (
        <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <span style={{ font: '700 15px/1.1 var(--font-sans)', letterSpacing: '-0.01em', color: '#FFFFFF' }}>Talent Tracker</span>
          <span style={{ font: '500 9px/1.2 var(--font-sans)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--rite-sage)', marginTop: 3 }}>Rite Software</span>
        </span>
      )}
    </div>
  );
}

/* ── Role switcher (dev stub for MSAL, per §4 of the spec) ──────────────── */
function RoleSwitcher({ role, onChange, compact }) {
  const [open, setOpen] = React.useState(false);
  const current = window.TT_ROLES.find((r) => r.code === role) || window.TT_ROLES[0];
  return (
    <div style={{ position: 'relative', flex: '0 0 auto' }}>
      <button type="button" onClick={() => setOpen(!open)}
        style={{
          display: 'flex', alignItems: 'center', gap: 9, height: 34, padding: '0 8px 0 6px', flex: '0 0 auto',
          background: open ? 'var(--interactive-neutral-hover)' : 'transparent',
          border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-pill)',
          cursor: 'pointer', transition: 'var(--transition-control)',
        }}>
        <Avatar name={current.user} size="sm" />
        {!compact && (
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ font: '500 12px/1.2 var(--font-sans)', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{current.user}</span>
            <span style={{ font: '400 10px/1.2 var(--font-sans)', color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>{current.label}</span>
          </span>
        )}
        <Icon name="chevron-down" size={14} style={{ color: 'var(--text-tertiary)' }} />
      </button>
      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 40 }} />
          <div style={{
            position: 'absolute', right: 0, top: 42, zIndex: 50, width: 250, padding: 6,
            background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)',
          }}>
            <div style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)', padding: '8px 10px 6px' }}>
              Sign in as · SSO stub
            </div>
            {window.TT_ROLES.map((r) => (
              <button key={r.code} type="button" onClick={() => { onChange(r.code); setOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '8px 10px',
                  background: r.code === role ? 'var(--surface-subtle)' : 'transparent',
                  border: 0, borderRadius: 'var(--radius-sm)', cursor: 'pointer', textAlign: 'left',
                }}>
                <Avatar name={r.user} size="xs" tone={r.code === role ? 'brand' : 'muted'} />
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: 'block', font: '500 13px/1.2 var(--font-sans)', color: 'var(--text-primary)' }}>{r.user}</span>
                  <span style={{ display: 'block', font: '400 11px/1.3 var(--font-sans)', color: 'var(--text-tertiary)' }}>{r.label}</span>
                </span>
                {r.code === role && <Icon name="check" size={15} style={{ color: 'var(--text-brand)' }} />}
              </button>
            ))}
            <div style={{ borderTop: '1px solid var(--border-subtle)', margin: '6px 0 0', padding: '10px 10px 4px', font: '400 11px/1.45 var(--font-sans)', color: 'var(--text-tertiary)' }}>
              Microsoft 365 SSO is not wired yet. Switching role re-resolves navigation and field visibility exactly as <code style={{ font: '400 11px var(--font-mono)' }}>session-context</code> will.
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Command palette (⌘K) ───────────────────────────────────────────────── */
function CommandPalette({ open, onClose, role, onNavigate }) {
  const [q, setQ] = React.useState('');
  const inputRef = React.useRef(null);
  React.useEffect(() => { if (open && inputRef.current) inputRef.current.focus(); if (!open) setQ(''); }, [open]);
  if (!open) return null;

  const pages = window.ttVisiblePages(role).map((p) => ({ kind: 'Page', label: p.pageName, icon: p.icon, go: p.route }));
  const reqs = window.TT_REQUIREMENTS.map((r) => ({ kind: 'Requirement', label: r.reqNo + ' · ' + r.positionTitle, icon: 'clipboard-list', go: 'requirements' }));
  const cands = window.TT_CANDIDATES.map((c) => ({ kind: 'Candidate', label: c.talent.fullName + ' · ' + c.candNo, icon: 'user', go: 'candidates' }));
  const all = [...pages, ...(window.ttCanSee(role, 'TT_REQUIREMENTS') ? reqs : []), ...(window.ttCanSee(role, 'TT_CANDIDATES') ? cands : [])];
  const hits = q ? all.filter((i) => i.label.toLowerCase().includes(q.toLowerCase())).slice(0, 8) : pages;

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'var(--surface-overlay)', display: 'flex', justifyContent: 'center', paddingTop: '14vh' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(560px, 92vw)', height: 'fit-content', background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', borderBottom: '1px solid var(--border-subtle)' }}>
          <Icon name="search" size={17} style={{ color: 'var(--text-tertiary)' }} />
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Jump to a page, requirement or candidate…"
            onKeyDown={(e) => { if (e.key === 'Escape') onClose(); if (e.key === 'Enter' && hits[0]) { onNavigate(hits[0].go); onClose(); } }}
            style={{ flex: 1, border: 0, outline: 'none', background: 'transparent', font: '400 15px/1.2 var(--font-sans)', color: 'var(--text-primary)' }} />
          <kbd style={{ font: '500 11px/1 var(--font-mono)', color: 'var(--text-tertiary)', border: '1px solid var(--border-default)', borderRadius: 4, padding: '3px 6px' }}>esc</kbd>
        </div>
        <div style={{ maxHeight: 340, overflowY: 'auto', padding: 6 }}>
          {hits.length === 0 && <div style={{ padding: '24px 12px', textAlign: 'center', font: '400 13px/1.4 var(--font-sans)', color: 'var(--text-tertiary)' }}>Nothing matches “{q}”.</div>}
          {hits.map((h, i) => (
            <button key={i} type="button" onClick={() => { onNavigate(h.go); onClose(); }}
              style={{ display: 'flex', alignItems: 'center', gap: 11, width: '100%', padding: '9px 10px', background: 'transparent', border: 0, borderRadius: 'var(--radius-sm)', cursor: 'pointer', textAlign: 'left' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--surface-subtle)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
              <Icon name={h.icon} size={16} style={{ color: 'var(--text-brand)' }} />
              <span style={{ flex: 1, font: '400 14px/1.3 var(--font-sans)', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{h.label}</span>
              <span style={{ font: '500 10px/1 var(--font-sans)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{h.kind}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Audit trail drawer ─────────────────────────────────────────────────── */
const AUDIT = [
  { who: 'Priya Nair', what: 'moved Meera Joshi to L2 Select', when: '10 minutes ago', icon: 'arrow-right-left', tone: 'var(--text-brand)' },
  { who: 'System', what: 'flagged CAND00398 — Documentation SLA exceeded by 3 days', when: '1 hour ago', icon: 'triangle-alert', tone: 'var(--status-warning)' },
  { who: 'Anil Raj', what: 'created requirement RM00231', when: '2 hours ago', icon: 'plus', tone: 'var(--text-tertiary)' },
  { who: 'Priya Nair', what: 'rejected farhan_payslip.pdf — unreadable', when: 'Yesterday', icon: 'x', tone: 'var(--status-danger)' },
  { who: 'GKM', what: 'approved offer OFR00119 for Neha Kapoor', when: 'Yesterday', icon: 'circle-check', tone: 'var(--status-success)' },
  { who: 'AI Parser', what: 'auto-filled 6 fields on CAND00405 from resume', when: '2 days ago', icon: 'sparkles', tone: 'var(--text-brand)' },
];

function AuditDrawer({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 250, background: 'var(--surface-overlay)', display: 'flex', justifyContent: 'flex-end' }}>
      <aside onClick={(e) => e.stopPropagation()} style={{
        width: 'min(400px, 92vw)', height: '100%', background: 'var(--surface-card)',
        boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column',
        animation: 'rite-fade var(--duration-base) var(--ease-out)',
      }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid var(--border-subtle)' }}>
          <div>
            <div style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-brand)' }}>Activity log</div>
            <h3 style={{ font: '600 16px/1.3 var(--font-sans)', marginTop: 5 }}>Recent activity</h3>
          </div>
          <IconButton icon="x" label="Close" onClick={onClose} />
        </header>
        <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 20px' }}>
          {AUDIT.map((a, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '15px 0', borderBottom: i < AUDIT.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
              <span style={{ color: a.tone, display: 'flex', marginTop: 1 }}><Icon name={a.icon} size={16} /></span>
              <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ font: '400 13px/1.45 var(--font-sans)', color: 'var(--text-secondary)' }}>
                  <strong style={{ font: '500 13px/1.45 var(--font-sans)', color: 'var(--text-primary)' }}>{a.who}</strong> {a.what}
                </span>
                <span style={{ font: '400 11px/1.2 var(--font-mono)', color: 'var(--text-tertiary)' }}>{a.when}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

/* Collapses header controls before they can crush the page title. */
function useNarrow(px) {
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const check = () => setNarrow(window.innerWidth < px);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [px]);
  return narrow;
}

/* ── The shell ──────────────────────────────────────────────────────────── */
function Shell({ role, onRoleChange, route, onNavigate, title, eyebrow, actions, children }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [palette, setPalette] = React.useState(false);
  const [audit, setAudit] = React.useState(false);
  const narrow = useNarrow(1240);
  const veryNarrow = useNarrow(980);

  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setPalette(true); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const pages = window.ttVisiblePages(role);
  const sections = [{
    label: 'Talent pipeline',
    items: pages.filter((p) => p.pageCode !== 'TT_ADMIN').map((p) => ({ id: p.route, label: p.pageName, icon: p.icon })),
  }];
  if (pages.some((p) => p.pageCode === 'TT_ADMIN')) {
    sections.push({ label: 'Configuration', items: [{ id: 'admin', label: 'Admin', icon: 'shield-check' }] });
  }
  const readOnly = !window.ttCanEdit(role, (window.TT_PAGES.find((p) => p.route === route) || {}).pageCode);

  return (
    <div style={{ display: 'flex', height: '100%', background: 'var(--surface-page)', overflow: 'hidden' }}>
      <SideNav
        sections={sections} active={route} onSelect={onNavigate} collapsed={collapsed}
        header={<ProductLogo collapsed={collapsed} />}
        footer={
          <button type="button" onClick={() => setCollapsed(!collapsed)}
            style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '6px 4px', background: 'transparent', border: 0, cursor: 'pointer', color: 'var(--rite-sage)', justifyContent: collapsed ? 'center' : 'flex-start' }}>
            <Icon name={collapsed ? 'panel-left-open' : 'panel-left-close'} size={17} />
            {!collapsed && <span style={{ font: '400 12px/1.2 var(--font-sans)' }}>Collapse</span>}
          </button>
        }
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        <TopBar
          eyebrow={eyebrow} title={title}
          actions={
            <>
              {narrow ? (
                <Tooltip label="Search — ⌘K"><IconButton icon="search" label="Search" variant="outline" onClick={() => setPalette(true)} /></Tooltip>
              ) : (
                <button type="button" onClick={() => setPalette(true)}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '0 1 auto', minWidth: 0, height: 34, padding: '0 10px', background: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', cursor: 'pointer', color: 'var(--text-tertiary)' }}>
                  <Icon name="search" size={15} />
                  <span style={{ font: '400 13px/1 var(--font-sans)', width: 120, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Search…</span>
                  <kbd style={{ font: '500 10px/1 var(--font-mono)', border: '1px solid var(--border-default)', borderRadius: 4, padding: '3px 5px', flex: '0 0 auto' }}>⌘K</kbd>
                </button>
              )}
              {readOnly && !veryNarrow && <Badge tone="neutral" icon="eye">Read only</Badge>}
              <Tooltip label="Activity log"><IconButton icon="history" label="Activity log" onClick={() => setAudit(true)} /></Tooltip>
              {!veryNarrow && <Tooltip label="3 SLA breaches this week"><IconButton icon="bell" label="Notifications" /></Tooltip>}
              {actions}
              <span style={{ width: 1, height: 24, background: 'var(--border-subtle)', margin: '0 2px', flex: '0 0 auto' }} />
              <RoleSwitcher role={role} onChange={onRoleChange} compact={veryNarrow} />
            </>
          }
        />
        <main style={{ flex: 1, overflowY: 'auto', padding: 24 }}>{children}</main>
      </div>
      <CommandPalette open={palette} onClose={() => setPalette(false)} role={role} onNavigate={onNavigate} />
      <AuditDrawer open={audit} onClose={() => setAudit(false)} />
    </div>
  );
}

/* ── Shared page helpers ────────────────────────────────────────────────── */
function PageHead({ title, sub, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 4 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <h2 style={{ font: '600 17px/1.25 var(--font-sans)', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{title}</h2>
        {sub && <p style={{ font: '400 13px/1.45 var(--font-sans)', color: 'var(--text-tertiary)' }}>{sub}</p>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{children}</div>
    </div>
  );
}

function NotPermitted({ page }) {
  return (
    <Card padding={0}>
      <EmptyState icon="lock" title={'You do not have access to ' + page}
        description="Navigation is driven by the RBAC matrix returned by session-context. Ask an administrator to grant this page to your role." />
    </Card>
  );
}

Object.assign(window, { Shell, PageHead, ProductLogo, RoleSwitcher, CommandPalette, AuditDrawer, NotPermitted });
