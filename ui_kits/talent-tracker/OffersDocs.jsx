const { Card, Badge, Button, IconButton, DataTable, Tabs, Banner, Icon, Tooltip, Modal, Input, Textarea, Select, FieldGroup, Avatar, EmptyState, ProgressBar, Checkbox } = window.RiteDS;

const DOC_TONE = { VERIFIED: 'success', PENDING_REVIEW: 'warning', REJECTED: 'danger' };

function DocVerification({ role, candidate, onToast }) {
  const [docs, setDocs] = React.useState(() => (window.TT_DOCUMENTS[candidate.id] || []).map((d) => ({ ...d })));
  const [reject, setReject] = React.useState(null);
  const [reason, setReason] = React.useState('');
  const canEdit = window.ttCanEdit(role, 'TT_OFFERS_DOCS');

  const blocking = docs.filter((d) => d.status === 'PENDING_REVIEW' || d.status === 'REJECTED');
  const verified = docs.filter((d) => d.status === 'VERIFIED').length;

  const approve = (id) => {
    setDocs((ds) => ds.map((d) => (d.id === id ? { ...d, status: 'VERIFIED', verifiedByName: 'Priya Nair', rejectionReason: undefined } : d)));
    onToast({ tone: 'success', title: 'Document verified' });
  };
  const doReject = () => {
    if (!reason.trim()) { onToast({ tone: 'warning', title: 'Rejection reason required · 409', body: 'The service rejects a document review without a reason.' }); return; }
    setDocs((ds) => ds.map((d) => (d.id === reject.id ? { ...d, status: 'REJECTED', rejectionReason: reason, verifiedByName: 'Priya Nair' } : d)));
    setReject(null); setReason('');
    onToast({ tone: 'info', title: 'Document rejected', body: 'The candidate will be asked to resubmit.' });
  };
  const proceed = () => {
    if (blocking.length) {
      onToast({ tone: 'warning', title: 'Cannot proceed · 409', body: blocking.length + ' document(s) are still pending review or rejected.' });
      return;
    }
    onToast({ tone: 'success', title: 'Moved to offer initiation', body: candidate.talent.fullName + ' is ready for an offer.' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 1040 }}>
      <Card padding={0} header={<>
        <span style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <Avatar name={candidate.talent.fullName} size="sm" />
          <span>
            <span style={{ display: 'block', font: '600 15px/1.2 var(--font-sans)' }}>{candidate.talent.fullName}</span>
            <span style={{ display: 'block', font: '400 12px/1.2 var(--font-mono)', color: 'var(--text-tertiary)', marginTop: 3 }}>{candidate.candNo + ' · ' + window.ttReqNo(candidate.requirementId)}</span>
          </span>
        </span>
        <Badge tone="info" dot>Documentation Verification</Badge>
      </>}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Verification progress</span>
            <ProgressBar value={verified} max={docs.length} showValue />
            <span style={{ font: '400 12px/1.4 var(--font-sans)', color: 'var(--text-tertiary)' }}>{verified + ' of ' + docs.length + ' documents verified'}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Official company email</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, minHeight: 40, padding: '9px 12px', background: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <Icon name="mail" size={15} style={{ color: 'var(--text-tertiary)' }} />
              <span style={{ flex: 1, font: '400 13px/1.2 var(--font-mono)', color: 'var(--text-primary)' }}>{candidate.officialEmail || '—'}</span>
              {candidate.officialEmailVerifiedFlag === 'Y'
                ? <Badge tone="success" icon="check">Verified</Badge>
                : <Button size="sm" variant="ghost">Verify</Button>}
            </div>
          </div>
        </div>
      </Card>

      {blocking.length > 0 && (
        <Banner tone="warning" title={blocking.length + ' document(s) block offer initiation'}>
          Proceeding while anything is pending or rejected returns a 409 from the service. Review or reject-and-request each item first.
        </Banner>
      )}

      <Card padding={0} header={<span style={{ font: '600 14px/1.2 var(--font-sans)' }}>Uploaded documents</span>}>
        <DataTable columns={[
          { key: 'documentName', header: 'Document type', render: (d) => (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              <Icon name="file-text" size={16} style={{ color: 'var(--text-tertiary)' }} />
              <span style={{ font: '500 14px/1.2 var(--font-sans)' }}>{d.documentName}</span>
            </span>
          ) },
          { key: 'fileName', header: 'File', mono: true, muted: true },
          { key: 'status', header: 'Status', width: 190, render: (d) => (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <Badge tone={DOC_TONE[d.status]} dot>{d.status.replace('_', ' ').toLowerCase()}</Badge>
              {d.rejectionReason && <Tooltip label={d.rejectionReason}><Icon name="circle-help" size={13} style={{ color: 'var(--text-tertiary)' }} /></Tooltip>}
            </span>
          ) },
          { key: 'verifiedByName', header: 'Verified by', muted: true, render: (d) => d.verifiedByName || <span style={{ color: 'var(--text-disabled)' }}>—</span> },
          { key: 'act', header: '', align: 'right', width: 130, render: (d) => (canEdit && d.status !== 'VERIFIED'
            ? <span style={{ display: 'inline-flex', gap: 6, justifyContent: 'flex-end' }}>
                <Button size="sm" variant="ghost" icon="check" onClick={() => approve(d.id)}>Verify</Button>
                <IconButton icon="x" label="Reject" onClick={() => { setReject(d); setReason(d.rejectionReason || ''); }} />
              </span>
            : <IconButton icon="eye" label="Preview" />) },
        ]} rows={docs} />
      </Card>

      {canEdit && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
          <Button variant="secondary" icon="rotate-ccw" onClick={() => onToast({ tone: 'info', title: 'Re-submission requested', body: 'The candidate has been emailed the list of documents to resend.' })}>Request re-submission</Button>
          <Button icon="arrow-right" onClick={proceed}>Proceed to offer initiation</Button>
        </div>
      )}

      <Modal open={!!reject} onClose={() => setReject(null)} size="sm" title="Reject this document"
        description="The reason is shown to the candidate in the re-submission request."
        footer={<><Button variant="secondary" size="sm" onClick={() => setReject(null)}>Cancel</Button><Button variant="danger" size="sm" onClick={doReject}>Reject document</Button></>}>
        <FieldGroup label="Rejection reason" required hint="Required — the service returns 409 without it">
          <Textarea rows={3} value={reason} onChange={(e) => setReason(e.target.value)} placeholder="e.g. Unreadable — please rescan at higher resolution" />
        </FieldGroup>
      </Modal>
    </div>
  );
}

/* ── Offer initiation & approvals ───────────────────────────────────────── */
function OfferPanel({ onToast, onOpenPortal }) {
  const o = window.TT_OFFER;
  const [released, setReleased] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const pending = o.approvals.filter((a) => a.status !== 'APPROVED');
  const token = 'OxUV0_SK7hQ2mNz9';

  const release = () => {
    if (pending.length) { onToast({ tone: 'warning', title: 'Cannot release · 409', body: pending.length + ' approval(s) are still outstanding.' }); return; }
    setReleased(true);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 330px', gap: 20, alignItems: 'start', maxWidth: 1040 }}>
      <Card padding={22} header={<>
        <span style={{ font: '600 14px/1.2 var(--font-mono)' }}>{o.offerNo}</span>
        <Badge tone={released ? 'success' : 'warning'} dot>{released ? 'Released' : 'Awaiting approvals'}</Badge>
      </>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {[['Candidate', o.candidateName], ['Position', o.positionTitle], ['Joining date', window.ttFmtDate(o.joiningDate)],
              ['Offered CTC', '₹ ' + o.offeredCtcAmount.toLocaleString('en-IN') + ' / yr'], ['Currency', o.offeredCtcCurrency], ['Link expires', '22-Aug-2026']].map((p) => (
              <div key={p[0]} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{p[0]}</span>
                <span style={{ font: '500 14px/1.3 var(--font-sans)', color: 'var(--text-primary)' }}>{p[1]}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Offer letter</span>
            <p style={{ font: '400 14px/1.6 var(--font-sans)', color: 'var(--text-secondary)' }}>{o.offerLetterText}</p>
          </div>

          {released && (
            <Banner tone="success" title="Offer released — copy the portal link now"
              action={<Button size="sm" variant="secondary" icon={copied ? 'check' : 'copy'} onClick={() => setCopied(true)}>{copied ? 'Copied' : 'Copy link'}</Button>}>
              <span style={{ font: '400 12px/1.5 var(--font-mono)', wordBreak: 'break-all' }}>{'/talenttracker/offers/portal/' + token}</span>
              <span style={{ display: 'block', marginTop: 6 }}>This is the only response that ever contains the token — it cannot be read back later.</span>
            </Banner>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            {released
              ? <Button variant="secondary" icon="external-link" onClick={onOpenPortal}>Preview candidate portal</Button>
              : <><Button variant="secondary" icon="rotate-ccw">Reset to draft</Button><Button icon="send" onClick={release}>Release offer</Button></>}
          </div>
        </div>
      </Card>

      <Card padding={0} header={<span style={{ font: '600 14px/1.2 var(--font-sans)' }}>Approvals</span>}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {o.approvals.map((a, i) => (
            <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 0', borderBottom: i < o.approvals.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
              <Avatar name={a.approverName} size="sm" tone={a.status === 'APPROVED' ? 'brand' : 'muted'} />
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', font: '500 13px/1.2 var(--font-sans)' }}>{a.approverName}</span>
                <span style={{ display: 'block', font: '400 11px/1.3 var(--font-sans)', color: 'var(--text-tertiary)', marginTop: 3 }}>{a.approverRole}</span>
              </span>
              <Badge tone={a.status === 'APPROVED' ? 'success' : 'warning'} dot>{a.status.toLowerCase()}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function OffersDocs({ role, onToast, onOpenPortal }) {
  const [tab, setTab] = React.useState('docs');
  const candidate = window.TT_CANDIDATES.find((c) => c.id === 398);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <Tabs active={tab} onSelect={setTab} items={[
        { id: 'docs', label: 'Documentation Verification', icon: 'file-check', count: 1 },
        { id: 'offers', label: 'Offer Initiation', icon: 'file-signature', count: 1 },
      ]} />
      {tab === 'docs'
        ? <DocVerification role={role} candidate={candidate} onToast={onToast} />
        : <OfferPanel onToast={onToast} onOpenPortal={onOpenPortal} />}
    </div>
  );
}

Object.assign(window, { OffersDocs, DocVerification, OfferPanel });
