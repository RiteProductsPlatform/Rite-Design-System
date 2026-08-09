const { Modal, Tabs, Button, IconButton, Input, Textarea, Select, Badge, Banner, Icon, Tooltip, Card, Avatar, FieldGroup, ProgressBar, EmptyState, Switch } = window.RiteDS;

function AiField({ children }) {
  return (
    <Tooltip label="AI-filled from the uploaded resume — editable">
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, font: '500 10px/1 var(--font-sans)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-brand)', background: 'var(--surface-subtle)', padding: '3px 7px', borderRadius: 'var(--radius-pill)' }}>
        <Icon name="sparkles" size={11} />{children || 'AI'}
      </span>
    </Tooltip>
  );
}

function Row({ label, hint, ai, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{label}</span>
        {ai && <AiField />}
      </span>
      {children}
      {hint && <span style={{ font: '400 11px/1.4 var(--font-sans)', color: 'var(--text-tertiary)' }}>{hint}</span>}
    </div>
  );
}

function ReadOnlyValue({ children, tone }) {
  return (
    <div style={{ minHeight: 40, display: 'flex', alignItems: 'center', padding: '9px 12px', background: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', font: '400 14px/1.3 var(--font-sans)', color: tone || 'var(--text-secondary)' }}>
      {children}
    </div>
  );
}

/* ── Interview rounds — reschedules render as history, not a mutable row ── */
function Rounds({ candidateId }) {
  const rounds = window.TT_INTERVIEWS[candidateId] || [];
  if (!rounds.length) return <EmptyState icon="calendar-x" title="No interviews scheduled" description="Schedule the first round to start the interview history for this candidate." action={<Button size="sm" icon="calendar-plus">Schedule a round</Button>} />;
  const tone = { SELECTED: 'success', REJECTED: 'danger', RESCHEDULED: 'neutral', PENDING: 'warning' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {rounds.map((r) => {
        const superseded = r.status === 'RESCHEDULED';
        return (
          <div key={r.id} style={{
            display: 'flex', alignItems: 'flex-start', gap: 14, padding: 15,
            background: superseded ? 'var(--surface-sunken)' : 'var(--surface-card)',
            border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
            opacity: superseded ? .68 : 1,
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, flex: '0 0 auto', borderRadius: 'var(--radius-md)', background: 'var(--surface-subtle)', color: 'var(--text-brand)' }}>
              <Icon name={superseded ? 'calendar-x' : r.status === 'SCHEDULED' ? 'calendar-clock' : 'calendar-check' } size={17} />
            </span>
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, flexWrap: 'wrap' }}>
                <span style={{ font: '600 14px/1.2 var(--font-sans)', textDecoration: superseded ? 'line-through' : 'none' }}>{window.ttLabel('TT_INTERVIEW_ROUND_TYPE', r.roundType)}</span>
                <Badge tone={tone[r.result] || (r.status === 'SCHEDULED' ? 'info' : 'neutral')}>{r.result || r.status}</Badge>
                {r.rescheduledFromRoundId && <Badge tone="neutral" icon="rotate-ccw">Rescheduled</Badge>}
              </div>
              <span style={{ font: '400 12px/1.3 var(--font-mono)', color: 'var(--text-tertiary)' }}>
                {new Date(r.scheduledStart).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                {' · ' + window.ttLabel('TT_INTERVIEW_MODE', r.interviewMode)}
              </span>
              <span style={{ font: '400 13px/1.3 var(--font-sans)', color: 'var(--text-secondary)' }}>{'Panel: ' + (r.panelistName || '—')}</span>
            </div>
            {!superseded && r.status === 'SCHEDULED' && (
              <div style={{ display: 'flex', gap: 6 }}>
                <Button size="sm" variant="secondary" icon="video">Join</Button>
                <IconButton icon="rotate-ccw" label="Reschedule" variant="outline" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Feedback({ candidateId }) {
  const items = window.TT_FEEDBACK[candidateId] || [];
  if (!items.length) return <EmptyState icon="message-square-text" title="No feedback yet" description="Panellists submit feedback after each completed round." />;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((f) => (
        <Card key={f.id} padding={18}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <Avatar name={f.panelistName} size="md" />
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span style={{ font: '600 14px/1.2 var(--font-sans)' }}>{f.panelistName}</span>
                <span style={{ font: '400 12px/1.2 var(--font-mono)', color: 'var(--text-tertiary)' }}>{f.roundType}</span>
                <Badge tone={f.recommendation === 'STRONG_PROCEED' ? 'success' : f.recommendation === 'PROCEED' ? 'success' : 'warning'}>
                  {f.recommendation.replace('_', ' ').toLowerCase()}
                </Badge>
              </div>
              <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
                {[['Overall', f.overallRating], ['Technical', f.technicalRating], ['Communication', f.communicationRating]].map((p) => (
                  <span key={p[0]} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ font: '400 11px/1.2 var(--font-sans)', color: 'var(--text-tertiary)' }}>{p[0]}</span>
                    <span style={{ display: 'inline-flex', gap: 2 }}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Icon key={n} name="star" size={13} style={{ color: n <= (p[1] || 0) ? 'var(--rite-tropical-rainforest)' : 'var(--border-strong)' }} />
                      ))}
                    </span>
                  </span>
                ))}
              </div>
              <p style={{ font: '400 13px/1.6 var(--font-sans)', color: 'var(--text-secondary)' }}>{f.feedbackText}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function History({ candidateId }) {
  const items = window.TT_STAGE_HISTORY[candidateId] || [];
  if (!items.length) return <EmptyState icon="git-commit-horizontal" title="No stage history" />;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map((h, i) => {
        const breached = h.slaBreachedFlag === 'Y';
        const stage = window.TT_STAGES.find((s) => s.stageCode === h.toStageCode) || {};
        return (
          <div key={h.id} style={{ display: 'flex', gap: 14 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', marginTop: 5, background: breached ? 'var(--status-danger)' : 'var(--interactive-brand)' }} />
              {i < items.length - 1 && <span style={{ flex: 1, width: 2, minHeight: 26, background: 'var(--border-subtle)' }} />}
            </div>
            <div style={{ paddingBottom: i === items.length - 1 ? 0 : 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 9, flexWrap: 'wrap' }}>
                <span style={{ font: '500 14px/1.3 var(--font-sans)' }}>{stage.stageName || h.toStageCode}</span>
                {breached && <Badge tone="danger" icon="triangle-alert">{'SLA ' + h.daysInFromStage + 'd / ' + h.slaDays + 'd'}</Badge>}
              </span>
              <span style={{ font: '400 12px/1.3 var(--font-mono)', color: 'var(--text-tertiary)' }}>
                {new Date(h.changedDate).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }) + ' · ' + (h.changedByName || 'System')}
              </span>
              {h.notes && <span style={{ font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-secondary)', maxWidth: 520 }}>{h.notes}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Documents({ candidateId }) {
  const docs = window.TT_DOCUMENTS[candidateId] || [];
  if (!docs.length) return <EmptyState icon="file-plus" title="No documents uploaded" description="Documents are requested once the candidate reaches Documentation Verification." />;
  const tone = { VERIFIED: 'success', PENDING_REVIEW: 'warning', REJECTED: 'danger' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {docs.map((d) => (
        <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
          <Icon name="file-text" size={17} style={{ color: 'var(--text-tertiary)' }} />
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: 'block', font: '500 13px/1.2 var(--font-sans)' }}>{d.documentName}</span>
            <span style={{ display: 'block', font: '400 12px/1.2 var(--font-mono)', color: 'var(--text-tertiary)', marginTop: 3 }}>{d.fileName}</span>
          </span>
          <Badge tone={tone[d.status]}>{d.status.replace('_', ' ').toLowerCase()}</Badge>
        </div>
      ))}
    </div>
  );
}

/* ── The modal ──────────────────────────────────────────────────────────── */
function CandidateModal({ open, candidate, role, readOnly, onClose, onToast }) {
  const [tab, setTab] = React.useState('profile');
  const [score, setScore] = React.useState('');
  const [source, setSource] = React.useState('AI');
  const [holdOpen, setHoldOpen] = React.useState(false);

  React.useEffect(() => {
    if (open && candidate) { setTab('profile'); setScore(String(candidate.skillMatchScore != null ? candidate.skillMatchScore : '')); setSource(candidate.skillMatchSource || 'AI'); }
  }, [open, candidate]);

  if (!candidate) return null;
  const t = candidate.talent || {};
  const showMargin = window.ttShowComponent(role, 'TT_CAND_MARGIN');
  const showCtc = window.ttShowComponent(role, 'TT_CAND_CTC');
  const stage = window.TT_STAGES.find((s) => s.stageCode === candidate.currentStageCode) || {};
  const sla = window.ttSlaState(candidate);

  const onScore = (e) => {
    setScore(e.target.value);
    if (source !== 'MANUAL') { setSource('MANUAL'); onToast({ tone: 'info', title: 'Match source set to Manual', body: 'Editing an AI score flips skillMatchSource to MANUAL.' }); }
  };

  return (
    <Modal open={open} onClose={onClose} size="lg" title={t.fullName}
      description={candidate.candNo + ' · ' + window.ttReqSkill(candidate.requirementId) + ' · req ' + window.ttReqNo(candidate.requirementId)}
      footer={
        <>
          <span style={{ marginRight: 'auto', display: 'inline-flex', alignItems: 'center', gap: 9 }}>
            <Badge tone={window.TT_STAGE_TONE[candidate.currentStageCode]} dot>{stage.stageName}</Badge>
            <span style={{ font: '400 12px/1.2 var(--font-mono)', color: sla.tone === 'danger' ? 'var(--status-danger)' : 'var(--text-tertiary)' }}>{sla.label}</span>
            {candidate.holdFlag === 'Y' && <Badge tone="warning" icon="pause">On hold</Badge>}
          </span>
          {!readOnly && (candidate.holdFlag === 'Y'
            ? <Button size="sm" variant="secondary" icon="play" onClick={() => onToast({ tone: 'success', title: 'Hold released', body: t.fullName + ' is back in the active pipeline.' })}>Release hold</Button>
            : <Button size="sm" variant="secondary" icon="pause" onClick={() => setHoldOpen(true)}>Put on hold</Button>)}
          <Button variant="secondary" size="sm" onClick={onClose}>Close</Button>
          {!readOnly && <Button size="sm" icon="check">Save changes</Button>}
        </>
      }>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {candidate.holdFlag === 'Y' && <Banner tone="warning" title="This candidate is on hold">{candidate.holdReason}</Banner>}

        <Tabs active={tab} onSelect={setTab} items={[
          { id: 'profile', label: 'Profile', icon: 'user' },
          { id: 'rounds', label: 'Interview Rounds', icon: 'calendar', count: (window.TT_INTERVIEWS[candidate.id] || []).length || undefined },
          { id: 'feedback', label: 'Feedback', icon: 'message-square-text', count: (window.TT_FEEDBACK[candidate.id] || []).length || undefined },
          { id: 'documents', label: 'Documents', icon: 'file-text', count: (window.TT_DOCUMENTS[candidate.id] || []).length || undefined },
          { id: 'history', label: 'History', icon: 'git-commit-horizontal' },
        ]} />

        {tab === 'profile' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            <Row label="Current role"><Input defaultValue={t.currentRole || ''} disabled={readOnly} /></Row>
            <Row label="Current company"><Input defaultValue={t.currentCompany || ''} disabled={readOnly} /></Row>
            <Row label="Current location"><Input defaultValue={t.currentLocation || ''} disabled={readOnly} /></Row>

            <Row label="Work mode preference">
              <Select defaultValue={t.workModePreference || ''} disabled={readOnly}
                options={(window.TT_LOOKUPS.TT_WORK_MODE || []).map((l) => ({ value: l.lookupCode, label: l.meaning }))} />
            </Row>
            <Row label="Experience" ai={candidate.aiFilledFlag === 'Y'}>
              <Input defaultValue={t.totalExperienceYrs != null ? t.totalExperienceYrs + ' yrs' : ''} disabled={readOnly} />
            </Row>
            <Row label="Education" ai={candidate.aiFilledFlag === 'Y'}>
              <Input defaultValue={t.education || ''} disabled={readOnly} />
            </Row>

            {showCtc ? (
              <>
                <Row label="Current CTC">
                  <Input defaultValue={candidate.currentCtcAmount != null ? '₹ ' + candidate.currentCtcAmount.toLocaleString('en-IN') : ''} suffix="/ yr" disabled={readOnly} />
                </Row>
                <Row label="Expected CTC">
                  <Input defaultValue={candidate.expectedCtcAmount != null ? '₹ ' + candidate.expectedCtcAmount.toLocaleString('en-IN') : ''} suffix="/ yr" disabled={readOnly} />
                </Row>
                <Row label="Monthly CTC (INR) ⇄ USD/INR" hint="Server-computed and interlinked — read only">
                  <ReadOnlyValue>
                    {'₹ ' + (candidate.monthlyCtcInr != null ? candidate.monthlyCtcInr.toLocaleString('en-IN') : '—') + '  ⇄  ' + (candidate.usdInrRate != null ? candidate.usdInrRate.toFixed(1) : '—')}
                  </ReadOnlyValue>
                </Row>
              </>
            ) : (
              <Row label="Compensation" span={3} hint="Hidden for your role by the TT_CAND_CTC component rule">
                <ReadOnlyValue tone="var(--text-disabled)"><Icon name="eye-off" size={14} style={{ marginRight: 8 }} />Restricted</ReadOnlyValue>
              </Row>
            )}

            <Row label="Skill match score" ai={source === 'AI'} hint={source === 'MANUAL' ? 'Source: MANUAL — overridden by a recruiter' : 'Source: AI'}>
              <Input value={score} onChange={onScore} suffix="%" disabled={readOnly} />
            </Row>
            <Row label="Margin (bill rate − expected CTC)" hint={showMargin ? 'Server-computed' : undefined}>
              {showMargin
                ? <ReadOnlyValue tone={candidate.marginAmount != null ? 'var(--status-success)' : 'var(--text-disabled)'}>
                    {candidate.marginAmount != null ? '$' + candidate.marginAmount + ' / hr' : '— not yet computed'}
                  </ReadOnlyValue>
                : <ReadOnlyValue tone="var(--text-disabled)"><Icon name="eye-off" size={14} style={{ marginRight: 8 }} />Restricted</ReadOnlyValue>}
            </Row>
            <Row label="Source">
              <ReadOnlyValue>{(t.source || '—').replace('_', ' ').toLowerCase()}</ReadOnlyValue>
            </Row>
          </div>
        )}

        {tab === 'rounds' && <Rounds candidateId={candidate.id} />}
        {tab === 'feedback' && <Feedback candidateId={candidate.id} />}
        {tab === 'documents' && <Documents candidateId={candidate.id} />}
        {tab === 'history' && <History candidateId={candidate.id} />}
      </div>

      <Modal open={holdOpen} onClose={() => setHoldOpen(false)} size="sm" title="Put this candidate on hold"
        description="A held candidate stays in the pipeline but cannot change stage."
        footer={<>
          <Button variant="secondary" size="sm" onClick={() => setHoldOpen(false)}>Cancel</Button>
          <Button size="sm" onClick={() => { setHoldOpen(false); onToast({ tone: 'success', title: 'Candidate on hold', body: t.fullName + ' will not appear in active stage counts.' }); }}>Confirm hold</Button>
        </>}>
        <FieldGroup label="Reason" required><Textarea rows={3} placeholder="Why is this candidate being paused?" /></FieldGroup>
      </Modal>
    </Modal>
  );
}

Object.assign(window, { CandidateModal, TTRounds: Rounds, TTFeedback: Feedback, TTHistory: History, TTDocuments: Documents });
