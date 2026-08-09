const { Card, Tabs, Badge, Button, IconButton, DataTable, Avatar, ProgressBar, StatTile, Banner, Icon, Eyebrow, Switch, Tooltip } = window.RiteDS;

const MILESTONES = [
  { id: 1, name: 'Design confirmed', date: '14-MAR-2026', state: 'done' },
  { id: 2, name: 'CRP 1', date: '02-MAY-2026', state: 'done' },
  { id: 3, name: 'CRP 2', date: '19-JUN-2026', state: 'done' },
  { id: 4, name: 'Mock 4 reconciliation', date: '21-AUG-2026', state: 'current' },
  { id: 5, name: 'UAT sign-off', date: '16-SEP-2026', state: 'todo' },
  { id: 6, name: 'Cutover rehearsal', date: '28-SEP-2026', state: 'todo' },
  { id: 7, name: 'Go-live', date: '12-OCT-2026', state: 'todo' },
];

const TEAM = [
  { id: 1, name: 'Rob Brown', role: 'Delivery lead', alloc: '100%', loc: 'Houston' },
  { id: 2, name: 'K. Mannuru', role: 'HCM functional', alloc: '80%', loc: 'Hyderabad' },
  { id: 3, name: 'S. Kanala', role: 'Data conversion', alloc: '100%', loc: 'Hyderabad' },
  { id: 4, name: 'M. Gandham', role: 'Integrations', alloc: '60%', loc: 'Hyderabad' },
  { id: 5, name: 'R. Chigurupati', role: 'Payroll SME', alloc: '40%', loc: 'Houston' },
];

const RISKS = [
  { id: 1, ref: 'R-08', title: 'Legacy salary basis values not in the target lookup', sev: 'High', tone: 'danger', owner: 'S. Kanala', due: '26-AUG' },
  { id: 2, ref: 'R-11', title: 'Payroll parallel window overlaps client month-end', sev: 'Medium', tone: 'warning', owner: 'Rob Brown', due: '05-SEP' },
  { id: 3, ref: 'R-14', title: 'Third-party benefits feed still in test', sev: 'Low', tone: 'neutral', owner: 'M. Gandham', due: '20-SEP' },
];

function Milestone({ m, last }) {
  const color = m.state === 'done' ? 'var(--interactive-brand)' : m.state === 'current' ? 'var(--rite-signal-mint)' : 'var(--border-strong)';
  return (
    <div style={{ display: 'flex', gap: 14 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: '50%', background: m.state === 'todo' ? 'transparent' : color, border: '2px solid ' + color, color: m.state === 'current' ? 'var(--rite-deep-forest)' : '#FFFFFF' }}>
          {m.state === 'done' && <Icon name="check" size={12} />}
          {m.state === 'current' && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--rite-deep-forest)' }} />}
        </span>
        {!last && <span style={{ flex: 1, width: 2, background: m.state === 'done' ? 'var(--interactive-brand)' : 'var(--border-subtle)', minHeight: 26 }} />}
      </div>
      <div style={{ paddingBottom: last ? 0 : 20, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ font: (m.state === 'current' ? '600' : '400') + ' 14px/1.3 var(--font-sans)', color: m.state === 'todo' ? 'var(--text-tertiary)' : 'var(--text-primary)' }}>{m.name}</span>
        <span style={{ font: '400 12px/1.2 var(--font-mono)', color: 'var(--text-tertiary)' }}>{m.date}</span>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const [tab, setTab] = React.useState('plan');
  const [weekly, setWeekly] = React.useState(true);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 'var(--content-max)' }}>
      <Card padding={22}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Eyebrow>Engagement · ENG-1042</Eyebrow>
            <h2 style={{ font: '700 26px/1.15 var(--font-sans)', letterSpacing: '-0.02em' }}>Cianbro · HCM + Payroll</h2>
            <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
              <Badge tone="success" dot>On track</Badge>
              <Badge tone="brand">ConvertRite</Badge>
              <Badge tone="brand">WageRite</Badge>
              <Badge>EPC</Badge>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Tooltip label="Send the weekly status pack"><IconButton icon="send" label="Send status" variant="outline" /></Tooltip>
            <Button variant="secondary" size="sm" icon="calendar">Schedule review</Button>
            <Button size="sm" icon="file-text">Status report</Button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20, marginTop: 22, paddingTop: 18, borderTop: '1px solid var(--border-subtle)' }}>
          {[['Phase', 'Mock 4'], ['Go-live', '12-OCT-2026'], ['Budget used', '68%'], ['Open risks', '3'], ['Team', '11 people']].map(([l, v]) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{l}</span>
              <span style={{ font: '500 16px/1.2 var(--font-mono)' }}>{v}</span>
            </div>
          ))}
        </div>
      </Card>

      <Tabs items={[{ id: 'plan', label: 'Plan' }, { id: 'team', label: 'Team', count: TEAM.length }, { id: 'risks', label: 'Risks', count: RISKS.length }, { id: 'health', label: 'Health' }]} active={tab} onSelect={setTab} />

      {tab === 'plan' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 20, alignItems: 'start' }}>
          <Card padding={22} header={<span style={{ font: '600 14px/1.2 var(--font-sans)' }}>Milestones</span>}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {MILESTONES.map((m, i) => <Milestone key={m.id} m={m} last={i === MILESTONES.length - 1} />)}
            </div>
          </Card>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <StatTile value="115,196" label="Records converted" icon="database" />
              <StatTile value="4" label="Mock loads complete" delta="of 4" deltaTone="neutral" icon="layers" />
            </div>
            <Card padding={22} header={<span style={{ font: '600 14px/1.2 var(--font-sans)' }}>Workstreams</span>}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <ProgressBar value={92} label="Data conversion" showValue />
                <ProgressBar value={74} label="Payroll parallel" showValue />
                <ProgressBar value={61} label="Integrations" showValue />
                <ProgressBar value={38} label="Change & training" showValue />
              </div>
            </Card>
            <Card padding={18}>
              <Switch checked={weekly} onChange={setWeekly} label="Send the client a weekly status digest" />
            </Card>
          </div>
        </div>
      )}

      {tab === 'team' && (
        <Card padding={0}>
          <DataTable columns={[
            { key: 'name', header: 'Person', render: (r) => <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}><Avatar name={r.name} size="sm" /><span style={{ font: '500 14px/1.2 var(--font-sans)' }}>{r.name}</span></span> },
            { key: 'role', header: 'Role', muted: true },
            { key: 'alloc', header: 'Allocation', align: 'right', mono: true },
            { key: 'loc', header: 'Location', muted: true },
          ]} rows={TEAM} />
        </Card>
      )}

      {tab === 'risks' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Banner tone="warning" title="One high-severity risk is unmitigated" action={<Button size="sm" variant="secondary">Open R-08</Button>}>
            Tell clients what they need to hear — raise this at Thursday's steering call.
          </Banner>
          <Card padding={0}>
            <DataTable columns={[
              { key: 'ref', header: 'Ref', mono: true, width: 76 },
              { key: 'title', header: 'Risk', wrap: true },
              { key: 'owner', header: 'Owner', muted: true },
              { key: 'due', header: 'Mitigate by', mono: true, align: 'right' },
              { key: 'sev', header: 'Severity', render: (r) => <Badge tone={r.tone} dot>{r.sev}</Badge> },
            ]} rows={RISKS} />
          </Card>
        </div>
      )}

      {tab === 'health' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          <StatTile value="98.4%" label="SLA adherence" delta="+1.2 pts" icon="gauge" />
          <StatTile value="12" label="Open tickets" delta="−4" icon="ticket" />
          <StatTile value="4.6" label="Client CSAT · of 5" delta="+0.2" icon="heart" />
          <StatTile value="0" label="Failed go-lives" icon="shield-check" />
        </div>
      )}
    </div>
  );
}

Object.assign(window, { ProjectDetail });
