const { Card, Tabs, Badge, Button, IconButton, DataTable, Select, Input, ProgressBar, Banner, Modal, Toast, Tooltip, Icon, Checkbox, EmptyState, Eyebrow } = window.RiteDS;

const OBJECTS = [
  { id: 1, name: 'Worker', module: 'HCM', src: 46210, loaded: 46210, err: 0, status: 'Loaded', tone: 'success' },
  { id: 2, name: 'Assignment', module: 'HCM', src: 51004, loaded: 38220, err: 0, status: 'Running', tone: 'info' },
  { id: 3, name: 'Salary', module: 'HCM', src: 12880, loaded: 12866, err: 14, status: '14 errors', tone: 'danger' },
  { id: 4, name: 'Cost centre', module: 'GL', src: 3102, loaded: 0, err: 0, status: 'Queued', tone: 'neutral' },
  { id: 5, name: 'Supplier', module: 'AP', src: 8940, loaded: 8940, err: 0, status: 'Loaded', tone: 'success' },
  { id: 6, name: 'Invoice header', module: 'AP', src: 121004, loaded: 0, err: 0, status: 'Not started', tone: 'neutral' },
];

const MAPPING = [
  { id: 1, target: 'PersonNumber', type: 'VARCHAR2(30)', req: true, source: 'EMP_ID', rule: 'Direct', conf: 100 },
  { id: 2, target: 'LegalEmployerName', type: 'VARCHAR2(240)', req: true, source: 'LEGAL_ENTITY', rule: 'Lookup · LE_XREF', conf: 98 },
  { id: 3, target: 'DateOfBirth', type: 'DATE', req: true, source: 'DOB', rule: 'Format DD-MON-YYYY', conf: 100 },
  { id: 4, target: 'HireDate', type: 'DATE', req: true, source: 'ORIG_HIRE_DT', rule: 'Direct', conf: 100 },
  { id: 5, target: 'NationalIdentifier', type: 'VARCHAR2(30)', req: false, source: 'SSN', rule: 'Mask · last 4', conf: 87 },
  { id: 6, target: 'PayrollName', type: 'VARCHAR2(80)', req: true, source: '—', rule: 'Unmapped', conf: 0 },
  { id: 7, target: 'GradeCode', type: 'VARCHAR2(30)', req: false, source: 'JOB_GRADE', rule: 'Lookup · GRADE_XREF', conf: 72 },
];

function ConvertRite() {
  const [tab, setTab] = React.useState('mapping');
  const [selected, setSelected] = React.useState(1);
  const [confirm, setConfirm] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const obj = OBJECTS.find((o) => o.id === selected) || OBJECTS[0];

  React.useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(false), 4200);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 'var(--content-max)' }}>
      {obj.err > 0 && (
        <Banner tone="danger" title={obj.err + ' rows failed validation on ' + obj.name}
          action={<Button size="sm" variant="secondary">Open exceptions</Button>}>
          Fix the source values or map them to a default before re-running this object.
        </Banner>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '288px minmax(0,1fr)', gap: 18, alignItems: 'start' }}>
        <Card padding={0} header={
          <>
            <span style={{ font: '600 14px/1.2 var(--font-sans)' }}>Objects</span>
            <IconButton icon="plus" label="Add object" />
          </>
        }>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {OBJECTS.map((o) => {
              const on = o.id === selected;
              return (
                <button key={o.id} type="button" onClick={() => setSelected(o.id)}
                  style={{
                    display: 'flex', flexDirection: 'column', gap: 7, padding: '12px 14px', textAlign: 'left',
                    background: on ? 'var(--surface-subtle)' : 'transparent', border: 0,
                    borderLeft: '2px solid ' + (on ? 'var(--interactive-brand)' : 'transparent'),
                    cursor: 'pointer', transition: 'var(--transition-control)',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ font: (on ? '600' : '500') + ' 13px/1.2 var(--font-sans)', color: on ? 'var(--text-brand)' : 'var(--text-primary)' }}>{o.name}</span>
                    <span style={{ font: '400 11px/1 var(--font-mono)', color: 'var(--text-tertiary)' }}>{o.module}</span>
                  </div>
                  <ProgressBar value={o.loaded} max={o.src} size="sm" tone={o.err ? 'danger' : 'brand'} />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ font: '400 11px/1 var(--font-mono)', color: 'var(--text-tertiary)' }}>{o.loaded.toLocaleString()} / {o.src.toLocaleString()}</span>
                    <Badge tone={o.tone} dot>{o.status}</Badge>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
          <Card padding={20}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Eyebrow>Mock 4 · DEV20 → TEST04</Eyebrow>
                <h2 style={{ font: '600 22px/1.2 var(--font-sans)', letterSpacing: '-0.02em' }}>{obj.name}</h2>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <Button variant="secondary" size="sm" icon="download">Export mapping</Button>
                <Button variant="secondary" size="sm" icon="clipboard-check">Validate</Button>
                <Button size="sm" icon="play" onClick={() => setConfirm(true)}>Run load</Button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--border-subtle)' }}>
              {[['Source records', obj.src.toLocaleString()], ['Loaded', obj.loaded.toLocaleString()], ['Exceptions', String(obj.err)], ['Last run', '21-AUG 04:12']].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{l}</span>
                  <span style={{ font: '500 18px/1.2 var(--font-mono)', color: 'var(--text-primary)' }}>{v}</span>
                </div>
              ))}
            </div>
          </Card>

          <Tabs items={[
            { id: 'mapping', label: 'Column mapping', count: MAPPING.length },
            { id: 'rules', label: 'Transform rules' },
            { id: 'exceptions', label: 'Exceptions', count: obj.err },
            { id: 'log', label: 'Run log' },
          ]} active={tab} onSelect={setTab} />

          {tab === 'mapping' && (
            <Card padding={0}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
                <Input size="sm" icon="search" placeholder="Filter target columns" style={{ width: 220 }} />
                <Select size="sm" placeholder="All statuses" options={[{ value: 'u', label: 'Unmapped only' }, { value: 'l', label: 'Low confidence' }]} style={{ width: 170 }} />
                <Checkbox label="Required only" checked={false} onChange={() => {}} />
                <div style={{ flex: 1 }} />
                <Tooltip label="Match by name and data type"><Button size="sm" variant="ghost" icon="wand-sparkles" onClick={() => setToast(true)}>Auto-map</Button></Tooltip>
              </div>
              <DataTable
                dense
                columns={[
                  { key: 'target', header: 'Target column', render: (r) => (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                      <span style={{ font: '500 13px/1.2 var(--font-mono)' }}>{r.target}</span>
                      {r.req && <span title="Required" style={{ color: 'var(--status-danger)', font: '600 12px/1 var(--font-sans)' }}>*</span>}
                    </span>
                  ) },
                  { key: 'type', header: 'Type', mono: true, muted: true },
                  { key: 'source', header: 'Source field', mono: true, render: (r) => r.source === '—'
                    ? <span style={{ color: 'var(--text-disabled)' }}>—</span>
                    : <span style={{ font: '500 13px/1.2 var(--font-mono)' }}>{r.source}</span> },
                  { key: 'rule', header: 'Rule', muted: true },
                  { key: 'conf', header: 'Confidence', align: 'right', width: 150, render: (r) => r.conf === 0
                    ? <Badge tone="danger">Unmapped</Badge>
                    : <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
                        <ProgressBar value={r.conf} size="sm" tone={r.conf < 80 ? 'warning' : 'brand'} style={{ width: 64 }} />
                        <span style={{ font: '500 12px/1 var(--font-mono)', color: 'var(--text-tertiary)', width: 34, textAlign: 'right' }}>{r.conf}%</span>
                      </span> },
                ]}
                rows={MAPPING} onRowClick={() => {}}
              />
            </Card>
          )}

          {tab === 'rules' && (
            <Card padding={0}><EmptyState icon="function-square" title="No custom transform rules"
              description="Everything on this object uses direct mapping or a shared cross-reference table."
              action={<Button size="sm" icon="plus">Add a rule</Button>} /></Card>
          )}
          {tab === 'exceptions' && (
            <Card padding={0}>{obj.err
              ? <DataTable dense columns={[
                  { key: 'row', header: 'Row', mono: true, width: 90 },
                  { key: 'field', header: 'Field', mono: true },
                  { key: 'value', header: 'Source value', mono: true, muted: true },
                  { key: 'msg', header: 'Message', wrap: true },
                ]} rows={[
                  { id: 1, row: '4,102', field: 'SALARY_BASIS', value: 'BIWKLY', msg: 'Value not present in lookup SALARY_BASIS_XREF' },
                  { id: 2, row: '4,880', field: 'EFFECTIVE_DT', value: '00-00-0000', msg: 'Not a valid date' },
                  { id: 3, row: '5,331', field: 'AMOUNT', value: '-1200.00', msg: 'Negative amount not permitted on a base salary record' },
                ]} />
              : <EmptyState icon="circle-check" title="No exceptions" description="Every row passed validation on the last run." />}
            </Card>
          )}
          {tab === 'log' && (
            <Card padding={18}>
              <pre style={{ margin: 0, font: '400 12px/1.9 var(--font-mono)', color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>{
`04:12:08  START   object=WORKER mode=FULL target=TEST04
04:12:09  READ    46,210 rows from DEV20.STG_WORKER
04:12:31  VALIDATE  46,210 passed · 0 failed
04:13:55  LOAD    46,210 rows → HCM_WORKER
04:16:20  DONE    duration 4m 12s`
              }</pre>
            </Card>
          )}
        </div>
      </div>

      <Modal open={confirm} onClose={() => setConfirm(false)} size="sm"
        title={'Run full load for ' + obj.name + '?'}
        description="This truncates the target table before loading."
        footer={<>
          <Button variant="secondary" size="sm" onClick={() => setConfirm(false)}>Cancel</Button>
          <Button size="sm" onClick={() => { setConfirm(false); setToast(true); }}>Run load</Button>
        </>}>
        <span style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--text-secondary)' }}>
          {obj.src.toLocaleString()} source records will replace everything currently in TEST04.
        </span>
      </Modal>

      {toast && (
        <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 200 }}>
          <Toast title="Run queued" onDismiss={() => setToast(false)}>{obj.name} will start in about a minute.</Toast>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { ConvertRite });
