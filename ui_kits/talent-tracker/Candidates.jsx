const { Card, Badge, Button, IconButton, DataTable, Input, Select, Tabs, Tag, Tooltip, Icon, EmptyState, Avatar, ProgressBar, Modal, Checkbox, Banner } = window.RiteDS;

const STAGE_TONE = { SOURCED: 'neutral', SCREENING: 'info', L1_SCHEDULED: 'warning', L2_SELECT: 'warning', DOCUMENTATION: 'info', OFFER_RELEASED: 'success', JOINED: 'success' };
const SLA_DAYS = { SOURCED: 5, SCREENING: 3, L1_SCHEDULED: 2, L2_SELECT: 4, DOCUMENTATION: 3, OFFER_RELEASED: 7, JOINED: 99 };
const TODAY = new Date('2026-08-09');

function daysIn(c) { return Math.max(0, Math.round((TODAY - new Date(c.stageChangedDate)) / 86400000)); }
function slaState(c) {
  const d = daysIn(c), limit = SLA_DAYS[c.currentStageCode] || 5;
  if (d > limit) return { tone: 'danger', label: d + 'd · SLA exceeded' };
  if (d >= limit - 1) return { tone: 'warning', label: d + 'd · SLA due' };
  return { tone: 'neutral', label: d + 'd in stage' };
}
function reqNo(id) { const r = window.TT_REQUIREMENTS.find((x) => x.id === id); return r ? r.reqNo : '—'; }
function reqSkill(id) { const r = window.TT_REQUIREMENTS.find((x) => x.id === id); return r ? window.ttSkillPath(r) : '—'; }
function money(n) { return '$' + n; }

/* ── Kanban card ────────────────────────────────────────────────────────── */
function KanbanCard({ c, showMargin, onOpen, onDragStart, dragging }) {
  const [hover, setHover] = React.useState(false);
  const sla = slaState(c);
  const stage = c.currentStageCode;
  let meta = null;
  if (stage === 'SOURCED' || stage === 'SCREENING') {
    if (c.skillMatchScore != null) meta = (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: c.skillMatchScore >= 85 ? 'var(--status-success)' : 'var(--text-secondary)' }}>
        {c.skillMatchSource === 'AI' && <Icon name="sparkles" size={12} />}{c.skillMatchScore + '% match'}
      </span>
    );
  } else if (stage === 'L1_SCHEDULED' && c.nextInterviewLabel) {
    meta = <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="calendar-clock" size={12} />{c.nextInterviewLabel}</span>;
  } else if (stage === 'DOCUMENTATION') {
    meta = <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="file-clock" size={12} />Docs pending verification</span>;
  } else if (stage === 'OFFER_RELEASED') {
    meta = <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="mail" size={12} />Portal · awaiting response</span>;
  } else if (showMargin && c.marginAmount != null) {
    meta = <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--status-success)' }}><Icon name="trending-up" size={12} />{'Margin ' + money(c.marginAmount) + '/hr'}</span>;
  } else if (c.talent.totalExperienceYrs) {
    meta = <span>{c.talent.totalExperienceYrs + ' yrs experience'}</span>;
  }

  return (
    <div draggable onDragStart={(e) => onDragStart(e, c)} onClick={() => onOpen(c)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 13,
        border: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        opacity: dragging ? .4 : 1, cursor: 'grab',
        transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
        display: 'flex', flexDirection: 'column', gap: 9,
      }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
        <Avatar name={c.talent.fullName} size="sm" tone={c.holdFlag === 'Y' ? 'muted' : 'brand'} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ font: '600 13px/1.25 var(--font-sans)', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.talent.fullName}</div>
          <div style={{ font: '400 11px/1.3 var(--font-mono)', color: 'var(--text-tertiary)', marginTop: 3 }}>{c.candNo + ' · ' + reqSkill(c.requirementId)}</div>
        </div>
        {c.holdFlag === 'Y' && <Tooltip label={c.holdReason || 'On hold'}><Icon name="pause" size={14} style={{ color: 'var(--status-warning)' }} /></Tooltip>}
      </div>
      {meta && <div style={{ font: '400 12px/1.3 var(--font-sans)', color: 'var(--text-secondary)' }}>{meta}</div>}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, paddingTop: 8, borderTop: '1px solid var(--border-subtle)' }}>
        <span style={{ font: '400 10px/1.2 var(--font-mono)', color: sla.tone === 'danger' ? 'var(--status-danger)' : sla.tone === 'warning' ? 'var(--status-warning)' : 'var(--text-tertiary)' }}>{sla.label}</span>
        <span style={{ font: '400 10px/1.2 var(--font-mono)', color: 'var(--text-tertiary)' }}>{reqNo(c.requirementId)}</span>
      </div>
    </div>
  );
}

/* ── Bulk upload (stub — no parsing endpoint yet, §9.3) ─────────────────── */
function BulkUploadModal({ open, onClose, onDone }) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => { if (open) setStep(0); }, [open]);
  React.useEffect(() => {
    if (!open || step !== 1) return undefined;
    const t = setTimeout(() => setStep(2), 1500);
    return () => clearTimeout(t);
  }, [open, step]);

  return (
    <Modal open={open} onClose={onClose} size="md" title="Bulk upload resumes"
      description="Drop a batch of resumes; the AI parser fills experience, education and a skill-match score."
      footer={step === 2
        ? <><Button variant="secondary" size="sm" onClick={onClose}>Close</Button><Button size="sm" icon="plus" onClick={onDone}>Add 4 candidates</Button></>
        : <Button variant="secondary" size="sm" onClick={onClose}>Cancel</Button>}>
      {step === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <button type="button" onClick={() => setStep(1)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '40px 24px', width: '100%',
              background: 'var(--surface-subtle)', border: '1.5px dashed var(--border-strong)', borderRadius: 'var(--radius-lg)', cursor: 'pointer' }}>
            <Icon name="cloud-upload" size={30} style={{ color: 'var(--text-brand)' }} />
            <span style={{ font: '500 14px/1.3 var(--font-sans)', color: 'var(--text-primary)' }}>Drop resumes here, or click to browse</span>
            <span style={{ font: '400 12px/1.4 var(--font-sans)', color: 'var(--text-tertiary)' }}>PDF or DOCX · up to 50 files per batch</span>
          </button>
          <Banner tone="info" title="Upload is stubbed in this kit">
            Object storage and the resume-parsing endpoint are not wired yet. The flow below shows the intended behaviour.
          </Banner>
        </div>
      )}
      {step === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '20px 0' }}>
          <ProgressBar value={62} label="Parsing 4 resumes" showValue />
          <span style={{ font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-tertiary)' }}>Extracting experience, education and skills, then scoring each against the requirement.</span>
        </div>
      )}
      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Banner tone="success" title="4 resumes parsed">1 duplicate was matched to an existing databank record and skipped.</Banner>
          {[['Ananya Desai', 91], ['Tarun Bhatia', 84], ['Leena Fernandes', 79], ['Mohit Sharma', 68]].map((row) => (
            <div key={row[0]} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <Avatar name={row[0]} size="sm" />
              <span style={{ flex: 1, font: '500 13px/1.2 var(--font-sans)' }}>{row[0]}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, font: '500 12px/1 var(--font-mono)', color: row[1] >= 85 ? 'var(--status-success)' : 'var(--text-secondary)' }}>
                <Icon name="sparkles" size={12} />{row[1] + '%'}
              </span>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}

/* ── Pipeline screen ────────────────────────────────────────────────────── */
function Candidates({ role, requirementFilter, onOpenCandidate, onToast }) {
  const [mode, setMode] = React.useState('kanban');
  const [q, setQ] = React.useState('');
  const [req, setReq] = React.useState(requirementFilter ? String(requirementFilter) : '');
  const [rows, setRows] = React.useState(() => window.TT_CANDIDATES.slice());
  const [drag, setDrag] = React.useState(null);
  const [over, setOver] = React.useState(null);
  const [bulk, setBulk] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

  React.useEffect(() => { if (requirementFilter) setReq(String(requirementFilter)); }, [requirementFilter]);

  const canEdit = window.ttCanEdit(role, 'TT_CANDIDATES');
  const showMargin = window.ttShowComponent(role, 'TT_CAND_MARGIN');
  const showCtc = window.ttShowComponent(role, 'TT_CAND_CTC');

  const filtered = rows.filter((c) => {
    if (req && String(c.requirementId) !== req) return false;
    if (q && !(c.talent.fullName + ' ' + c.candNo + ' ' + reqSkill(c.requirementId)).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  /* Drag-and-drop: optimistic update, revert on a simulated 409 (§10). */
  const onDrop = (stageCode) => {
    setOver(null);
    if (!drag || !canEdit) { setDrag(null); return; }
    const card = drag;
    setDrag(null);
    if (card.currentStageCode === stageCode) return;

    const from = window.TT_STAGES.findIndex((s) => s.stageCode === card.currentStageCode);
    const to = window.TT_STAGES.findIndex((s) => s.stageCode === stageCode);
    const prev = rows;
    setRows((rs) => rs.map((r) => (r.id === card.id ? { ...r, currentStageCode: stageCode, stageChangedDate: '2026-08-09' } : r)));

    let conflict = null;
    if (card.holdFlag === 'Y') conflict = 'Candidate is on hold — release the hold before moving stage.';
    else if (to > from + 1) conflict = 'Cannot skip from ' + window.TT_STAGES[from].stageName + ' to ' + window.TT_STAGES[to].stageName + '. Move one stage at a time.';
    else if (stageCode === 'OFFER_RELEASED' && card.currentStageCode === 'DOCUMENTATION' && card.officialEmailVerifiedFlag !== 'Y') conflict = 'Documents are still pending review for this candidate.';

    setTimeout(() => {
      if (conflict) { setRows(prev); onToast({ tone: 'warning', title: 'Stage change rejected · 409', body: conflict }); }
      else onToast({ tone: 'success', title: 'Moved to ' + window.TT_STAGES[to].stageName, body: card.talent.fullName + ' · ' + card.candNo });
    }, 300);
  };

  const columns = window.TT_STAGES.map((s) => ({ ...s, cards: filtered.filter((c) => c.currentStageCode === s.stageCode) }));

  const tableColumns = [
    { key: 'sel', header: '', width: 40, render: (c) => (
      <span onClick={(e) => e.stopPropagation()}>
        <Checkbox checked={selected.includes(c.id)} onChange={(v) => setSelected((s) => (v ? [...s, c.id] : s.filter((x) => x !== c.id)))} />
      </span>
    ) },
    { key: 'name', header: 'Candidate', render: (c) => (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
        <Avatar name={c.talent.fullName} size="sm" tone={c.holdFlag === 'Y' ? 'muted' : 'brand'} />
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ font: '500 14px/1.2 var(--font-sans)' }}>{c.talent.fullName}</span>
          <span style={{ font: '400 11px/1.2 var(--font-mono)', color: 'var(--text-tertiary)' }}>{c.candNo}</span>
        </span>
      </span>
    ) },
    { key: 'req', header: 'Requirement', render: (c) => (
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ font: '400 13px/1.2 var(--font-mono)', color: 'var(--text-secondary)' }}>{reqNo(c.requirementId)}</span>
        <span style={{ font: '400 12px/1.2 var(--font-sans)', color: 'var(--text-tertiary)' }}>{reqSkill(c.requirementId)}</span>
      </span>
    ) },
    { key: 'exp', header: 'Exp', align: 'right', mono: true, width: 70, render: (c) => (c.talent.totalExperienceYrs != null ? c.talent.totalExperienceYrs + ' yrs' : '—') },
    { key: 'match', header: 'AI match', align: 'right', width: 118, render: (c) => (c.skillMatchScore == null
      ? <span style={{ color: 'var(--text-disabled)' }}>—</span>
      : <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, justifyContent: 'flex-end' }}>
          <ProgressBar value={c.skillMatchScore} size="sm" tone={c.skillMatchScore >= 85 ? 'brand' : 'warning'} style={{ width: 50 }} />
          <span style={{ font: '500 12px/1 var(--font-mono)', color: 'var(--text-secondary)', width: 30, textAlign: 'right' }}>{c.skillMatchScore + '%'}</span>
        </span>) },
  ];
  if (showCtc) tableColumns.push({ key: 'ctc', header: 'Expected CTC', align: 'right', mono: true,
    render: (c) => (c.expectedCtcAmount != null ? '₹' + (c.expectedCtcAmount / 100000).toFixed(1) + 'L' : '—') });
  if (showMargin) tableColumns.push({ key: 'margin', header: 'Margin', align: 'right', mono: true, width: 92,
    render: (c) => (c.marginAmount != null
      ? <span style={{ color: 'var(--status-success)' }}>{money(c.marginAmount) + '/hr'}</span>
      : <span style={{ color: 'var(--text-disabled)' }}>—</span>) });
  tableColumns.push(
    { key: 'recruiterName', header: 'Recruiter', muted: true },
    { key: 'sla', header: 'In stage', align: 'right', width: 132, render: (c) => {
      const s = slaState(c);
      return <span style={{ font: '400 12px/1.2 var(--font-mono)', color: s.tone === 'danger' ? 'var(--status-danger)' : s.tone === 'warning' ? 'var(--status-warning)' : 'var(--text-tertiary)' }}>{s.label}</span>;
    } },
    { key: 'stage', header: 'Stage', width: 148, render: (c) => (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <Badge tone={STAGE_TONE[c.currentStageCode]} dot>{(window.TT_STAGES.find((s) => s.stageCode === c.currentStageCode) || {}).stageName}</Badge>
        {c.holdFlag === 'Y' && <Tooltip label={c.holdReason || 'On hold'}><Icon name="pause" size={13} style={{ color: 'var(--status-warning)' }} /></Tooltip>}
      </span>
    ) },
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <Input size="sm" icon="search" placeholder="Search candidates…" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: 220 }} />
        <Select size="sm" placeholder="All requirements" value={req} onChange={(e) => setReq(e.target.value)}
          options={window.TT_REQUIREMENTS.map((r) => ({ value: String(r.id), label: r.reqNo + ' · ' + window.ttSkillPath(r) }))} style={{ width: 230 }} />
        <div style={{ flex: 1 }} />
        {selected.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 4px 0 12px', height: 34, background: 'var(--surface-subtle)', borderRadius: 'var(--radius-pill)' }}>
            <span style={{ font: '500 12px/1 var(--font-sans)', color: 'var(--text-brand)' }}>{selected.length + ' selected'}</span>
            <Button size="sm" variant="ghost" icon="user-round-check">Assign</Button>
            <Button size="sm" variant="ghost" icon="mail">Email</Button>
            <IconButton icon="x" label="Clear selection" onClick={() => setSelected([])} />
          </div>
        )}
        <Tabs variant="pill" items={[{ id: 'table', label: 'Table', icon: 'table' }, { id: 'kanban', label: 'Kanban', icon: 'columns-3' }]} active={mode} onSelect={setMode} />
        {canEdit && <Button size="sm" variant="secondary" icon="upload" onClick={() => setBulk(true)}>Bulk upload</Button>}
        {canEdit && <Button size="sm" icon="plus">Add candidate</Button>}
      </div>

      {mode === 'kanban' ? (
        <div style={{ flex: 1, minHeight: 0, overflowX: 'auto', paddingBottom: 8 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            {columns.map((col) => (
              <div key={col.stageCode}
                onDragOver={(e) => { e.preventDefault(); setOver(col.stageCode); }}
                onDragLeave={() => setOver((o) => (o === col.stageCode ? null : o))}
                onDrop={() => onDrop(col.stageCode)}
                style={{
                  width: 246, flex: '0 0 246px', display: 'flex', flexDirection: 'column', gap: 10,
                  padding: 10, borderRadius: 'var(--radius-lg)',
                  background: over === col.stageCode ? 'var(--surface-subtle)' : 'transparent',
                  outline: over === col.stageCode ? '1.5px dashed var(--rite-tropical-rainforest)' : '1.5px dashed transparent',
                  transition: 'background-color var(--duration-fast) var(--ease-standard)',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '2px 4px' }}>
                  <span style={{ font: '600 12px/1.2 var(--font-sans)', color: 'var(--text-primary)' }}>{col.stageName}</span>
                  <span style={{ font: '500 11px/1 var(--font-mono)', color: 'var(--text-tertiary)', background: 'var(--surface-sunken)', padding: '4px 7px', borderRadius: 'var(--radius-pill)' }}>{col.cards.length}</span>
                </div>
                {col.cards.map((c) => (
                  <KanbanCard key={c.id} c={c} showMargin={showMargin} onOpen={onOpenCandidate} dragging={!!drag && drag.id === c.id}
                    onDragStart={(e, card) => { setDrag(card); e.dataTransfer.effectAllowed = 'move'; }} />
                ))}
                {col.cards.length === 0 && (
                  <div style={{ padding: '18px 10px', textAlign: 'center', font: '400 12px/1.4 var(--font-sans)', color: 'var(--text-disabled)', border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
                    No candidates
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Card padding={0}>
          <DataTable columns={tableColumns} rows={filtered} onRowClick={onOpenCandidate}
            empty={<EmptyState icon="users" title="No candidates match these filters" description="Clear the search, or upload a batch of resumes to start sourcing." />} />
        </Card>
      )}

      <BulkUploadModal open={bulk} onClose={() => setBulk(false)}
        onDone={() => { setBulk(false); onToast({ tone: 'success', title: '4 candidates added', body: 'They are in Sourced, with AI-filled fields marked for review.' }); }} />
    </div>
  );
}

Object.assign(window, { Candidates, KanbanCard, BulkUploadModal, ttSlaState: slaState, ttReqNo: reqNo, ttReqSkill: reqSkill, ttMoney: money, TT_STAGE_TONE: STAGE_TONE });
