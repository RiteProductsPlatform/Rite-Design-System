const { Card, StatTile, Badge, Button, IconButton, DataTable, Input, Select, Tag, Tooltip, Icon, EmptyState, Banner, ProgressBar } = window.RiteDS;

const PRIORITY_TONE = { CRITICAL: 'danger', HIGH: 'warning', MEDIUM: 'info', LOW: 'neutral' };
const STATUS_TONE = { OPEN: 'info', SOURCING: 'warning', PARTIAL: 'neutral', CLOSED: 'success' };

function label(type, code) {
  const row = (window.TT_LOOKUPS[type] || []).find((l) => l.lookupCode === code);
  return row ? row.meaning : code || '—';
}
function skillPath(r) {
  const s = window.TT_SKILLS.find((x) => x.id === r.skillId);
  if (!s) return '—';
  const sub = (s.children || []).find((c) => c.id === r.subSkillId);
  return sub ? s.name + ' › ' + sub.name : s.name;
}
function clientName(id) { const c = window.TT_CLIENTS.find((x) => x.id === id); return c ? c.name : '—'; }
function verticalName(id) { const v = window.TT_VERTICALS.find((x) => x.id === id); return v ? v.name : '—'; }
function fmtDate(iso) {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-');
  return d + '-' + ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Number(m) - 1] + '-' + y;
}
function daysUntil(iso) {
  if (!iso) return null;
  return Math.round((new Date(iso) - new Date('2026-08-09')) / 86400000);
}

const SAVED_VIEWS = [
  { id: 'all', label: 'All open' },
  { id: 'critical', label: 'Critical only' },
  { id: 'mine', label: 'Owned by me' },
  { id: 'stopgap', label: 'Stop-gap' },
  { id: 'overdue', label: 'Past need-by' },
];

function Requirements({ role, onOpenRequirement, onNewRequirement, onOpenCandidates }) {
  const [view, setView] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [vertical, setVertical] = React.useState('');
  const [client, setClient] = React.useState('');
  const [dense, setDense] = React.useState(false);
  const [sortKey, setSortKey] = React.useState('needByDate');
  const [sortDir, setSortDir] = React.useState('asc');

  const canEdit = window.ttCanEdit(role, 'TT_REQUIREMENTS');
  const showBillRate = window.ttShowComponent(role, 'TT_REQ_BILL_RATE');
  const me = (window.TT_ROLES.find((r) => r.code === role) || {}).user;

  const rows = React.useMemo(() => {
    let list = window.TT_REQUIREMENTS.slice();
    if (view === 'critical') list = list.filter((r) => r.priority === 'CRITICAL');
    if (view === 'mine') list = list.filter((r) => r.ownerName === me);
    if (view === 'stopgap') list = list.filter((r) => r.stopGapFlag === 'Y');
    if (view === 'overdue') list = list.filter((r) => r.status !== 'CLOSED' && daysUntil(r.needByDate) < 0);
    if (vertical) list = list.filter((r) => String(r.verticalId) === vertical);
    if (client) list = list.filter((r) => String(r.clientId) === client);
    if (q) {
      const t = q.toLowerCase();
      list = list.filter((r) => (r.reqNo + ' ' + r.positionTitle + ' ' + skillPath(r) + ' ' + clientName(r.clientId) + ' ' + (r.ownerName || '')).toLowerCase().includes(t));
    }
    const dir = sortDir === 'asc' ? 1 : -1;
    return list.sort((a, b) => String(a[sortKey] || '').localeCompare(String(b[sortKey] || '')) * dir);
  }, [view, q, vertical, client, sortKey, sortDir, me]);

  const onSort = (key) => {
    if (key === sortKey) setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  };

  const columns = [
    { key: 'reqNo', header: 'Req ID', mono: true, width: 108, sortable: true,
      render: (r) => <span style={{ font: '500 13px/1.2 var(--font-mono)', color: 'var(--text-brand)' }}>{r.reqNo}</span> },
    { key: 'skill', header: 'Skill / Sub-skill', sortable: true, render: (r) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ font: '500 14px/1.2 var(--font-sans)' }}>{skillPath(r)}</span>
        <span style={{ font: '400 12px/1.2 var(--font-sans)', color: 'var(--text-tertiary)', maxWidth: 260, overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.positionTitle}</span>
      </div>
    ) },
    { key: 'requirementType', header: 'Type', muted: true, render: (r) => label('TT_REQUIREMENT_TYPE', r.requirementType) },
    { key: 'client', header: 'Client / Vertical', render: (r) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ font: '400 14px/1.2 var(--font-sans)' }}>{clientName(r.clientId)}</span>
        <span style={{ font: '400 12px/1.2 var(--font-sans)', color: 'var(--text-tertiary)' }}>{verticalName(r.verticalId)}</span>
      </div>
    ) },
    { key: 'positions', header: 'Filled', align: 'center', width: 96, render: (r) => (
      <Tooltip label={r.positionsFilled + ' of ' + r.noOfPositions + ' positions filled'}>
        <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 5, alignItems: 'center', width: 60 }}>
          <span style={{ font: '500 12px/1 var(--font-mono)', color: 'var(--text-secondary)' }}>{r.positionsFilled}/{r.noOfPositions}</span>
          <ProgressBar value={r.positionsFilled} max={r.noOfPositions} size="sm" style={{ width: 52 }} />
        </span>
      </Tooltip>
    ) },
    { key: 'priority', header: 'Priority', width: 104, sortable: true,
      render: (r) => <Badge tone={PRIORITY_TONE[r.priority]} dot>{label('TT_REQUIREMENT_PRIORITY', r.priority)}</Badge> },
    { key: 'status', header: 'Status', width: 104,
      render: (r) => <Badge tone={STATUS_TONE[r.status]}>{label('TT_REQUIREMENT_STATUS', r.status)}</Badge> },
  ];
  if (showBillRate) {
    columns.push({ key: 'billRateAmount', header: 'Bill rate', align: 'right', mono: true, width: 100,
      render: (r) => r.billRateAmount ? '$' + r.billRateAmount + label('TT_RATE_UNIT', r.billRateUnit) : <span style={{ color: 'var(--text-disabled)' }}>—</span> });
  }
  columns.push(
    { key: 'ownerName', header: 'Owner', muted: true, sortable: true },
    { key: 'needByDate', header: 'Need by', align: 'right', mono: true, sortable: true, render: (r) => {
      const d = daysUntil(r.needByDate);
      const late = r.status !== 'CLOSED' && d < 0;
      return (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
          {late && <Tooltip label={Math.abs(d) + ' days past need-by'}><Icon name="triangle-alert" size={13} style={{ color: 'var(--status-danger)' }} /></Tooltip>}
          <span style={{ color: late ? 'var(--status-danger)' : 'var(--text-primary)' }}>{fmtDate(r.needByDate)}</span>
        </span>
      );
    } },
    { key: 'flags', header: '', width: 84, align: 'right', render: (r) => (
      <span style={{ display: 'inline-flex', gap: 4, justifyContent: 'flex-end' }}>
        {r.stopGapFlag === 'Y' && <Tooltip label="Stop-gap arrangement"><Icon name="life-buoy" size={15} style={{ color: 'var(--status-warning)' }} /></Tooltip>}
        {r.isContractPosition === 'Y' && <Tooltip label={'Contract · ' + r.tenureMonths + ' months'}><Icon name="file-clock" size={15} style={{ color: 'var(--text-tertiary)' }} /></Tooltip>}
        <Tooltip label="View candidates"><span onClick={(e) => { e.stopPropagation(); onOpenCandidates(r.id); }} style={{ display: 'inline-flex', cursor: 'pointer', color: 'var(--text-tertiary)' }}><Icon name="users" size={15} /></span></Tooltip>
      </span>
    ) },
  );

  const s = window.TT_SUMMARY;
  const clientOptions = window.TT_CLIENTS
    .filter((c) => !vertical || String(c.verticalId) === vertical)
    .map((c) => ({ value: String(c.id), label: c.name }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 1480 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14 }}>
        <StatTile value={s.openRequirements} label="Open requirements" icon="clipboard-list" />
        <StatTile value={s.staffingOpen} label="Staffing (client)" icon="building-2" />
        <StatTile value={s.internalOpen} label="Internal" icon="house" />
        <StatTile value={s.criticalPriority} label="Critical priority" deltaTone="danger" icon="flame" />
        <StatTile value={s.stopGapArrangements} label="Stop-gap arrangements" icon="life-buoy" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {SAVED_VIEWS.map((v) => <Tag key={v.id} selected={view === v.id} onClick={() => setView(v.id)}>{v.label}</Tag>)}
        </div>
        <div style={{ flex: 1 }} />
        <Input size="sm" icon="search" placeholder="Search by skill, client, owner…" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: 250 }} />
        <Select size="sm" placeholder="All verticals" value={vertical} onChange={(e) => { setVertical(e.target.value); setClient(''); }}
          options={window.TT_VERTICALS.map((v) => ({ value: String(v.id), label: v.name }))} style={{ width: 165 }} />
        <Select size="sm" placeholder="All clients" value={client} onChange={(e) => setClient(e.target.value)} options={clientOptions} style={{ width: 185 }} />
        <Tooltip label={dense ? 'Comfortable rows' : 'Compact rows'}><IconButton icon={dense ? 'rows-3' : 'rows-2'} label="Row density" onClick={() => setDense(!dense)} variant="outline" /></Tooltip>
        <Tooltip label="Export the filtered list to CSV"><IconButton icon="download" label="Export" variant="outline" /></Tooltip>
        {canEdit && <Button size="sm" icon="plus" onClick={onNewRequirement}>New requirement</Button>}
      </div>

      <Card padding={0}>
        <DataTable
          columns={columns} rows={rows} dense={dense} onRowClick={onOpenRequirement}
          sortKey={sortKey} sortDir={sortDir} onSort={onSort}
          empty={<EmptyState icon="clipboard-list" title="No requirements match these filters"
            description="Clear the search or pick a different saved view."
            action={<Button size="sm" variant="secondary" onClick={() => { setQ(''); setVertical(''); setClient(''); setView('all'); }}>Reset filters</Button>} />}
        />
        {rows.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-sunken)' }}>
            <span style={{ font: '400 12px/1.2 var(--font-sans)', color: 'var(--text-tertiary)' }}>
              Showing <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{rows.length}</span> of <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{s.openRequirements}</span> · page 1 of 3
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              <Button size="sm" variant="secondary" icon="chevron-left" disabled>Previous</Button>
              <Button size="sm" variant="secondary" iconAfter="chevron-right">Next</Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

Object.assign(window, { Requirements, ttLabel: label, ttSkillPath: skillPath, ttClientName: clientName, ttVerticalName: verticalName, ttFmtDate: fmtDate, TT_PRIORITY_TONE: PRIORITY_TONE, TT_STATUS_TONE: STATUS_TONE });
