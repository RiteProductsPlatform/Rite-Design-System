const { Card, Button, Badge, Banner, Icon, Modal, Textarea, FieldGroup } = window.RiteDS;

/* Unauthenticated candidate surface. No sidebar, no role lookup, no internal ids.
   Renders ONLY the fields the portal endpoint returns (§ Offer Portal). */
function OfferPortal({ onExit }) {
  const o = window.TT_OFFER;
  const [state, setState] = React.useState('OPEN');
  const [decline, setDecline] = React.useState(false);
  const [reason, setReason] = React.useState('');

  return (
    <div style={{ minHeight: '100%', background: 'var(--surface-page)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: 'var(--rite-deep-forest)', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
        <img src="../../assets/logo/rite-mark.png" alt="" style={{ position: 'absolute', right: -60, top: -80, width: 260, opacity: .12, pointerEvents: 'none' }} />
        <img src="../../assets/logo/rite-logo-lockup-white.png" alt="Rite" style={{ height: 28, position: 'relative' }} />
        <button type="button" onClick={onExit} style={{ position: 'relative', background: 'transparent', border: '1px solid rgba(255,255,255,.2)', color: 'rgba(255,255,255,.7)', borderRadius: 'var(--radius-pill)', padding: '6px 12px', font: '400 12px/1 var(--font-sans)', cursor: 'pointer' }}>
          Back to the app
        </button>
      </header>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '48px 24px' }}>
        <div style={{ width: '100%', maxWidth: 620, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {state === 'OPEN' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ font: '600 12px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-brand)' }}>Your offer from Rite Software</div>
              <h1 className="rite-underline" style={{ font: '700 34px/1.15 var(--font-sans)', letterSpacing: '-0.02em' }}>{o.candidateName}, we would like you to join us.</h1>
            </div>
          )}

          {state === 'ACCEPTED' && (
            <Banner tone="success" title="Offer accepted — thank you">
              Our team will be in touch within one working day about onboarding and your first-week schedule.
            </Banner>
          )}
          {state === 'DECLINED' && (
            <Banner tone="info" title="Offer declined">
              Thank you for letting us know. We have passed this to the recruiting team and hope to speak again.
            </Banner>
          )}

          <Card padding={26}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ font: '500 13px/1.2 var(--font-mono)', color: 'var(--text-tertiary)' }}>{o.offerNo}</span>
                <Badge tone={state === 'ACCEPTED' ? 'success' : state === 'DECLINED' ? 'neutral' : 'info'} dot>
                  {state === 'OPEN' ? 'Awaiting your response' : state.toLowerCase()}
                </Badge>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, paddingBottom: 20, borderBottom: '1px solid var(--border-subtle)' }}>
                {[['Position', o.positionTitle], ['Joining date', window.ttFmtDate(o.joiningDate)],
                  ['Annual CTC', '₹ ' + o.offeredCtcAmount.toLocaleString('en-IN')], ['Offer valid until', '22 August 2026']].map((p) => (
                  <div key={p[0]} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{p[0]}</span>
                    <span style={{ font: '600 17px/1.3 var(--font-sans)', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{p[1]}</span>
                  </div>
                ))}
              </div>

              <p style={{ font: '400 15px/1.65 var(--font-sans)', color: 'var(--text-secondary)' }}>{o.offerLetterText}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '13px 15px', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)' }}>
                <Icon name="file-text" size={17} style={{ color: 'var(--text-brand)' }} />
                <span style={{ flex: 1, font: '400 13px/1.3 var(--font-sans)', color: 'var(--text-secondary)' }}>Offer letter — Rite Software.pdf</span>
                <Button size="sm" variant="ghost" icon="download">Download</Button>
              </div>

              {state === 'OPEN' && (
                <div style={{ display: 'flex', gap: 10, paddingTop: 4 }}>
                  <Button size="lg" fullWidth icon="check" onClick={() => setState('ACCEPTED')}>Accept offer</Button>
                  <Button size="lg" variant="secondary" onClick={() => setDecline(true)}>Decline</Button>
                </div>
              )}
            </div>
          </Card>

          <p style={{ font: '400 12px/1.6 var(--font-sans)', color: 'var(--text-tertiary)', textAlign: 'center' }}>
            This link is personal to you and expires on 22 August 2026.<br />
            Questions? Reply to the email this link came from, or write to <a href="#" onClick={(e) => e.preventDefault()}>hello@rite.digital</a>.
          </p>
        </div>
      </div>

      <Modal open={decline} onClose={() => setDecline(false)} size="sm" title="Decline this offer"
        description="Telling us why helps — it is optional."
        footer={<><Button variant="secondary" size="sm" onClick={() => setDecline(false)}>Cancel</Button>
          <Button variant="danger" size="sm" onClick={() => { setDecline(false); setState('DECLINED'); }}>Decline offer</Button></>}>
        <FieldGroup label="Reason" hint="Optional">
          <Textarea rows={3} value={reason} onChange={(e) => setReason(e.target.value)} placeholder="e.g. Accepted another role" />
        </FieldGroup>
      </Modal>
    </div>
  );
}

Object.assign(window, { OfferPortal });
