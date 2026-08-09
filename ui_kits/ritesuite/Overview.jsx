const { Card, StatTile, Badge, Button, DataTable, Avatar, ProgressBar, Eyebrow, Icon, Banner } = window.RiteDS;

const ENGAGEMENTS = [
  { id: 1, client: 'Cianbro', scope: 'HCM + Payroll', phase: 'Mock 4', health: 'On track', tone: 'success', lead: 'Rob Brown', pct: 78, go: '12-OCT-2026' },
  { id: 2, client: 'Sunbelt Energy', scope: 'ERP Financials', phase: 'CRP 2', health: 'At risk', tone: 'warning', lead: 'K. Mannuru', pct: 41, go: '04-FEB-2027' },
  { id: 3, client: 'Halvorsen EPC', scope: 'Projects + BidRite', phase: 'Design', health: 'On track', tone: 'success', lead: 'S. Kanala', pct: 22, go: '18-MAY-2027' },
  { id: 4, client: 'Northline Health', scope: 'HCM Redwood', phase: 'Cutover', health: 'Escalated', tone: 'danger', lead: 'M. Gandham', pct: 94, go: '29-AUG-2026' },
  { id: 5, client: 'Delta Marine', scope: 'AMS · Managed', phase: 'Steady state', health: 'On track', tone: 'success', lead: 'R. Chigurupati', pct: 100, go: 'Live' },
];

const MODULES = [
  { name: 'ConvertRite', icon: 'database', line: '6 active conversions', metric: '115,196', metricLabel: 'records this week' },
  { name: 'BidRite', icon: 'file-text', line: '12 bids in flight', metric: '$41.2M', metricLabel: 'pipeline value' },
  { name: 'RevRite', icon: 'receipt', line: 'Opportunity-to-cash', metric: '99.1%', metricLabel: 'invoice accuracy' },
  { name: 'WageRite', icon: 'wallet', line: 'Payroll processing', metric: '8,410', metricLabel: 'workers paid' },
  { name: 'LienRite', icon: 'file-check', line: 'Lien waiver management', metric: '312', metricLabel: 'waivers open' },
  { name: 'CoWork', icon: 'users', line: 'Contingent workforce', metric: '1,204', metricLabel: 'assignments' },
];

const ACTIVITY = [
  { who: 'K. Mannuru', what: 'closed 14 exceptions on Sunbelt GL conversion', when: '12m ago', icon: 'circle-check', tone: 'var(--status-success)' },
  { who: 'DiscoveryAI', what: 'flagged 3 requirement conflicts in Halvorsen scope', when: '48m ago', icon: 'sparkles', tone: 'var(--rite-tropical-rainforest)' },
  { who: 'Northline Health', what: 'raised a P1 on payroll cutover rehearsal', when: '2h ago', icon: 'octagon-alert', tone: 'var(--status-danger)' },
  { who: 'S. Kanala', what: 'published Mock 4 reconciliation for Cianbro', when: '5h ago', icon: 'file-text', tone: 'var(--text-tertiary)' },
  { who: 'Rite Analytics', what: 'refreshed the AMS ticket warehouse', when: 'Yesterday', icon: 'refresh-cw', tone: 'var(--text-tertiary)' },
];

function ModuleCard({ m, onOpen }) {
  return (
    <Card interactive padding={18} onClick={onOpen} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 'var(--radius-md)', background: 'var(--surface-subtle)', color: 'var(--text-brand)' }}>
          <Icon name={m.icon} size={18} />
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{ font: '600 14px/1.2 var(--font-sans)', color: 'var(--text-primary)' }}>{m.name}</div>
          <div style={{ font: '400 12px/1.35 var(--font-sans)', color: 'var(--text-tertiary)', marginTop: 2 }}>{m.line}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ font: '700 22px/1 var(--font-sans)', letterSpacing: '-0.02em' }}>{m.metric}</span>
        <span style={{ font: '400 12px/1.2 var(--font-sans)', color: 'var(--text-tertiary)' }}>{m.metricLabel}</span>
      </div>
    </Card>
  );
}

function Overview({ onOpenModule, onOpenProject }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 'var(--content-max)' }}>
      <Banner tone="warning" title="Oracle 26C update lands 30 September"
        action={<Button size="sm" variant="secondary">View readiness</Button>}>
        Four environments still need the regression pack run. Nothing you send this week is wrong — flag blockers early.
      </Banner>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        <StatTile value="18" label="Active engagements" delta="+2" icon="briefcase" />
        <StatTile value="$41.2M" label="Bid pipeline" delta="+8.4%" icon="trending-up" />
        <StatTile value="98.4%" label="SLA adherence" delta="+1.2 pts" icon="gauge" />
        <StatTile value="27" label="Open escalations" delta="+5" deltaTone="danger" icon="octagon-alert" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.62fr) minmax(0,1fr)', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ font: '600 16px/1.3 var(--font-sans)', letterSpacing: '-0.01em' }}>Active engagements</h2>
              <Button variant="ghost" size="sm" iconAfter="arrow-right">View all 18</Button>
            </div>
            <Card padding={0}>
              <DataTable
                onRowClick={onOpenProject} sortKey="client" sortDir="asc" onSort={() => {}}
                columns={[
                  { key: 'client', header: 'Client', sortable: true, render: (r) => (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ font: '500 14px/1.2 var(--font-sans)' }}>{r.client}</span>
                      <span style={{ font: '400 12px/1.2 var(--font-sans)', color: 'var(--text-tertiary)' }}>{r.scope}</span>
                    </div>
                  ) },
                  { key: 'phase', header: 'Phase', muted: true },
                  { key: 'pct', header: 'Progress', width: 130, render: (r) => <ProgressBar value={r.pct} size="sm" tone={r.tone === 'danger' ? 'danger' : 'brand'} /> },
                  { key: 'go', header: 'Go-live', mono: true, align: 'right' },
                  { key: 'lead', header: 'Lead', render: (r) => (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                      <Avatar name={r.lead} size="xs" /><span style={{ color: 'var(--text-secondary)' }}>{r.lead}</span>
                    </span>
                  ) },
                  { key: 'health', header: 'Health', render: (r) => <Badge tone={r.tone} dot>{r.health}</Badge> },
                ]}
                rows={ENGAGEMENTS}
              />
            </Card>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h2 style={{ font: '600 16px/1.3 var(--font-sans)', letterSpacing: '-0.01em' }}>Your modules</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
              {MODULES.map((m) => <ModuleCard key={m.name} m={m} onOpen={() => onOpenModule(m.name)} />)}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
          <Card padding={0} header={<span style={{ font: '600 14px/1.2 var(--font-sans)' }}>Activity</span>}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {ACTIVITY.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: i < ACTIVITY.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
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
          </Card>

          <div className="rite-dark" style={{ background: 'var(--rite-deep-forest)', borderRadius: 'var(--radius-lg)', padding: 22, position: 'relative', overflow: 'hidden' }}>
            <img src="../../assets/illustrations/deco-arc-dotted.png" alt="" style={{ position: 'absolute', right: -46, bottom: -54, width: 190, opacity: .85, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Eyebrow tone="mint">Managed services</Eyebrow>
              <div style={{ font: '700 26px/1.15 var(--font-sans)', letterSpacing: '-0.02em', color: '#FFFFFF' }}>85 tickets resolved<br />in the last 6 weeks</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 2 }}>
                <ProgressBar value={92} tone="mint" label="First-response SLA" showValue />
                <ProgressBar value={78} tone="mint" label="Resolution SLA" showValue />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Overview });
