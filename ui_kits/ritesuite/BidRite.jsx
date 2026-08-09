const { Card, Badge, Button, IconButton, DataTable, Tag, Select, Input, StatTile, Avatar, Icon, Eyebrow, ProgressBar } = window.RiteDS;

const BIDS = [
  { id: 'BID-2411', client: 'Halvorsen EPC', scope: 'Offshore platform · Phase 2', value: '$12.4M', stage: 'Estimating', tone: 'info', owner: 'S. Kanala', due: '02-SEP-2026', win: 62 },
  { id: 'BID-2409', client: 'Sunbelt Energy', scope: 'Pipeline integrity programme', value: '$8.9M', stage: 'Submitted', tone: 'neutral', owner: 'K. Mannuru', due: '18-AUG-2026', win: 48 },
  { id: 'BID-2404', client: 'Cianbro', scope: 'Marine terminal rebuild', value: '$6.1M', stage: 'Negotiation', tone: 'warning', owner: 'Rob Brown', due: '25-AUG-2026', win: 74 },
  { id: 'BID-2398', client: 'Delta Marine', scope: 'Drydock modernisation', value: '$5.3M', stage: 'Won', tone: 'success', owner: 'M. Gandham', due: 'Closed', win: 100 },
  { id: 'BID-2390', client: 'Northline Health', scope: 'Campus expansion MEP', value: '$4.8M', stage: 'Qualifying', tone: 'info', owner: 'R. Chigurupati', due: '11-SEP-2026', win: 31 },
  { id: 'BID-2381', client: 'Ferrovia Group', scope: 'Rail depot fit-out', value: '$3.7M', stage: 'Lost', tone: 'danger', owner: 'S. Kanala', due: 'Closed', win: 0 },
];

const FUNNEL = [
  { stage: 'Qualifying', n: 5, value: '$18.2M', pct: 100 },
  { stage: 'Estimating', n: 4, value: '$14.9M', pct: 78 },
  { stage: 'Submitted', n: 2, value: '$9.4M', pct: 51 },
  { stage: 'Negotiation', n: 1, value: '$6.1M', pct: 33 },
  { stage: 'Won', n: 1, value: '$5.3M', pct: 28 },
];

function BidRite() {
  const [filter, setFilter] = React.useState('All');
  const [open, setOpen] = React.useState(null);
  const stages = ['All', 'Qualifying', 'Estimating', 'Submitted', 'Negotiation', 'Won'];
  const rows = filter === 'All' ? BIDS : BIDS.filter((b) => b.stage === filter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 'var(--content-max)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        <StatTile value="12" label="Bids in flight" icon="file-text" />
        <StatTile value="$41.2M" label="Pipeline value" delta="+8.4%" icon="trending-up" />
        <StatTile value="38%" label="Win rate · rolling 12m" delta="+3 pts" icon="target" />
        <StatTile value="9 days" label="Median turnaround" delta="−2 days" icon="clock" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: open ? 'minmax(0,1fr) 320px' : 'minmax(0,1fr) 260px', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <Input size="sm" icon="search" placeholder="Search bids" style={{ width: 200 }} />
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {stages.map((s) => <Tag key={s} selected={filter === s} onClick={() => setFilter(s)}>{s}</Tag>)}
            </div>
            <div style={{ flex: 1 }} />
            <Select size="sm" placeholder="This quarter" options={[{ value: 'y', label: 'This year' }]} style={{ width: 150 }} />
            <Button size="sm" icon="plus">New bid</Button>
          </div>

          <Card padding={0}>
            <DataTable
              onRowClick={(r) => setOpen(r)} sortKey="value" sortDir="desc" onSort={() => {}}
              columns={[
                { key: 'id', header: 'Bid', mono: true, width: 96 },
                { key: 'client', header: 'Client', render: (r) => (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ font: '500 14px/1.2 var(--font-sans)' }}>{r.client}</span>
                    <span style={{ font: '400 12px/1.2 var(--font-sans)', color: 'var(--text-tertiary)' }}>{r.scope}</span>
                  </div>
                ) },
                { key: 'value', header: 'Value', align: 'right', mono: true },
                { key: 'win', header: 'Win prob.', align: 'right', width: 110, render: (r) => (
                  <span style={{ font: '500 13px/1 var(--font-mono)', color: r.win >= 60 ? 'var(--status-success)' : r.win === 0 ? 'var(--text-disabled)' : 'var(--text-secondary)' }}>{r.win}%</span>
                ) },
                { key: 'due', header: 'Due', mono: true, muted: true },
                { key: 'owner', header: 'Owner', render: (r) => <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Avatar name={r.owner} size="xs" /><span style={{ color: 'var(--text-secondary)' }}>{r.owner}</span></span> },
                { key: 'stage', header: 'Stage', render: (r) => <Badge tone={r.tone} dot>{r.stage}</Badge> },
              ]}
              rows={rows}
            />
          </Card>
        </div>

        {open ? (
          <Card padding={0} header={<>
            <span style={{ font: '600 14px/1.2 var(--font-mono)' }}>{open.id}</span>
            <IconButton icon="x" label="Close" onClick={() => setOpen(null)} />
          </>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Eyebrow>{open.stage}</Eyebrow>
                <div style={{ font: '600 18px/1.25 var(--font-sans)', letterSpacing: '-0.01em' }}>{open.client}</div>
                <div style={{ font: '400 13px/1.45 var(--font-sans)', color: 'var(--text-tertiary)' }}>{open.scope}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, paddingTop: 14, borderTop: '1px solid var(--border-subtle)' }}>
                {[['Value', open.value], ['Win prob.', open.win + '%'], ['Due', open.due], ['Owner', open.owner]].map(([l, v]) => (
                  <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{l}</span>
                    <span style={{ font: '500 14px/1.2 var(--font-mono)' }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 14, borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Checklist</span>
                {[['Scope confirmed', true], ['Cost model built', true], ['Risk review', open.win > 50], ['Approval to submit', open.stage === 'Submitted' || open.stage === 'Won']].map(([l, done]) => (
                  <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 8, font: '400 13px/1.3 var(--font-sans)', color: done ? 'var(--text-primary)' : 'var(--text-tertiary)' }}>
                    <span style={{ color: done ? 'var(--status-success)' : 'var(--border-strong)', display: 'flex' }}><Icon name={done ? 'circle-check' : 'circle'} size={15} /></span>{l}
                  </span>
                ))}
              </div>
              <Button fullWidth size="sm" iconAfter="arrow-right">Open bid workspace</Button>
            </div>
          </Card>
        ) : (
          <Card padding={20} header={<span style={{ font: '600 14px/1.2 var(--font-sans)' }}>Pipeline</span>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {FUNNEL.map((f) => (
                <div key={f.stage} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                    <span style={{ font: '400 13px/1.2 var(--font-sans)', color: 'var(--text-secondary)' }}>{f.stage}</span>
                    <span style={{ font: '500 13px/1.2 var(--font-mono)' }}>{f.value}</span>
                  </div>
                  <ProgressBar value={f.pct} size="sm" />
                  <span style={{ font: '400 11px/1.2 var(--font-mono)', color: 'var(--text-tertiary)' }}>{f.n} bid{f.n > 1 ? 's' : ''}</span>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { BidRite });
