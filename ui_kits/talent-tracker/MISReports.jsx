const { Card, StatTile, Badge, Button, DataTable, Tabs, Select, Icon, Tooltip, EmptyState, ProgressBar } = window.RiteDS;

function Bar({ item, max, isLast }) {
  const h = Math.max(6, Math.round((item.count / max) * 170));
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, minWidth: 0 }}>
      <span style={{ font: '500 12px/1 var(--font-mono)', color: 'var(--text-secondary)' }}>{item.count}</span>
      <Tooltip label={item.stageName + ' · ' + item.count + ' candidates'}>
        <div style={{
          width: '100%', height: h, borderRadius: '6px 6px 0 0',
          background: isLast ? 'var(--rite-signal-mint)' : 'var(--rite-tropical-rainforest)',
          opacity: isLast ? 1 : 0.35 + (item.count / max) * 0.65,
        }} />
      </Tooltip>
      <span style={{ font: '400 11px/1.2 var(--font-sans)', color: 'var(--text-tertiary)', textAlign: 'center' }}>{item.stageName}</span>
    </div>
  );
}

function dash(v, suffix) { return v == null ? '—' : v + (suffix || ''); }

function MISReports({ role }) {
  const [range, setRange] = React.useState('q');
  const m = window.TT_MIS;
  const showMargin = window.ttShowComponent(role, 'TT_CAND_MARGIN');
  const max = Math.max.apply(null, m.funnel.map((f) => f.count));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 1480 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
        <Tabs variant="pill" items={[{ id: 'w', label: 'Week' }, { id: 'm', label: 'Month' }, { id: 'q', label: 'Quarter' }]} active={range} onSelect={setRange} />
        <Select size="sm" placeholder="All verticals" options={window.TT_VERTICALS.map((v) => ({ value: String(v.id), label: v.name }))} style={{ width: 165 }} />
        <Button size="sm" variant="secondary" icon="download">Export</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        <StatTile value={dash(m.avgTimeToFillDays, ' days')} label="Avg time to fill" delta="−1.8 days" icon="timer" />
        <StatTile value={dash(m.slaBreachesThisWeek)} label="SLA breaches this week" delta="+1" deltaTone="danger" icon="triangle-alert" />
        <StatTile value={showMargin ? '$' + dash(m.avgMargin) + '/hr' : '—'} label={showMargin ? 'Avg margin (staffing)' : 'Avg margin · restricted'} delta={showMargin ? '+$2' : undefined} icon="trending-up" />
        <StatTile value={dash(m.l1ToOfferConversionPct, '%')} label="L1 → offer conversion" delta="+4 pts" icon="target" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,1fr)', gap: 20, alignItems: 'start' }}>
        <Card padding={22} header={<span style={{ font: '600 14px/1.2 var(--font-sans)' }}>Candidates by stage</span>}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 220, paddingTop: 8 }}>
            {m.funnel.map((f, i) => <Bar key={f.stageCode} item={f} max={max} isLast={i === m.funnel.length - 1} />)}
          </div>
        </Card>

        <Card padding={0} header={<>
          <span style={{ font: '600 14px/1.2 var(--font-sans)' }}>Aging candidates</span>
          <Badge tone="danger">{m.agingCandidates.length + ' SLA exceeded'}</Badge>
        </>}>
          <DataTable dense columns={[
            { key: 'candidateName', header: 'Candidate' },
            { key: 'stageName', header: 'Stage', muted: true },
            { key: 'daysInStage', header: 'Days', align: 'right', width: 90, render: (r) => (
              <Badge tone={r.daysInStage - r.slaDays >= 3 ? 'danger' : 'warning'}>{r.daysInStage}</Badge>
            ) },
          ]} rows={m.agingCandidates}
            empty={<EmptyState compact icon="circle-check" title="Nothing is aging" description="Every candidate is inside its stage SLA." />} />
        </Card>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h2 style={{ font: '600 16px/1.3 var(--font-sans)', letterSpacing: '-0.01em' }}>Requirements by vertical &amp; client</h2>
        <Card padding={0}>
          <DataTable columns={[
            { key: 'vertical', header: 'Vertical' },
            { key: 'client', header: 'Client', muted: true, render: (r) => r.client || <span style={{ color: 'var(--text-disabled)' }}>—</span> },
            { key: 'openReqs', header: 'Open reqs', align: 'right', mono: true },
            { key: 'avgBillRate', header: 'Avg bill rate', align: 'right', mono: true,
              render: (r) => (r.avgBillRate != null ? '$' + r.avgBillRate + '/hr' : <span style={{ color: 'var(--text-disabled)' }}>—</span>) },
            { key: 'avgMargin', header: 'Avg margin', align: 'right', mono: true, render: (r) => {
              if (!showMargin) return <span style={{ color: 'var(--text-disabled)' }}>Restricted</span>;
              return r.avgMargin != null ? <span style={{ color: 'var(--status-success)' }}>{'$' + r.avgMargin + '/hr'}</span> : <span style={{ color: 'var(--text-disabled)' }}>—</span>;
            } },
          ]} rows={m.byVerticalAndClient.map((r, i) => ({ ...r, id: i }))} />
        </Card>
      </div>
    </div>
  );
}

Object.assign(window, { MISReports });
