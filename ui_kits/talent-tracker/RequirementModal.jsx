const { Modal, Tabs, Button, Input, Textarea, Select, Checkbox, Radio, Switch, FieldGroup, Badge, Banner, Icon, Tooltip, Card } = window.RiteDS;

const EMPTY = {
  requirementType: 'STAFFING', verticalId: '', clientId: '', skillId: '', subSkillId: '',
  positionTitle: '', noOfPositions: 1, priority: '', engagementType: '', experienceText: '',
  jobDescription: '', billRateAmount: '', billRateUnit: 'HOUR', contractPosition: false, tenureMonths: '',
  stopGap: false, stopGapNotes: '', clientHiringManagerContactId: '', needByDate: '',
  ownerName: '', managerName: '', workLocation: '', workMode: '', probabilityPct: 50,
};

function opts(type) {
  return (window.TT_LOOKUPS[type] || [])
    .slice().sort((a, b) => Number(a.attribute1) - Number(b.attribute1))
    .map((l) => ({ value: l.lookupCode, label: l.meaning }));
}

/* Maps the "Y"/"N" response shape onto the boolean request shape — §3.4 of the spec. */
function fromDto(r) {
  if (!r) return { ...EMPTY };
  return {
    ...EMPTY, ...r,
    verticalId: r.verticalId ? String(r.verticalId) : '',
    clientId: r.clientId ? String(r.clientId) : '',
    skillId: r.skillId ? String(r.skillId) : '',
    subSkillId: r.subSkillId ? String(r.subSkillId) : '',
    clientHiringManagerContactId: r.clientHiringManagerContactId ? String(r.clientHiringManagerContactId) : '',
    contractPosition: r.isContractPosition === 'Y',
    stopGap: r.stopGapFlag === 'Y',
    billRateAmount: r.billRateAmount != null ? String(r.billRateAmount) : '',
    tenureMonths: r.tenureMonths != null ? String(r.tenureMonths) : '',
  };
}

function F({ l, error, hint, required, children, span }) {
  return (
    <div style={{ gridColumn: span ? 'span ' + span : undefined }}>
      <FieldGroup label={l} error={error} hint={hint} required={required}>{children}</FieldGroup>
    </div>
  );
}

const TABS = [
  { id: 'core', label: 'Core Info', icon: 'info' },
  { id: 'jd', label: 'Job Description & Hiring', icon: 'file-text' },
  { id: 'schedule', label: 'Schedule & Management', icon: 'calendar' },
];

function RequirementModal({ open, requirement, readOnly, onClose, onSaved }) {
  const [tab, setTab] = React.useState('core');
  const [form, setForm] = React.useState(() => fromDto(requirement));
  const [touched, setTouched] = React.useState(false);

  React.useEffect(() => { if (open) { setForm(fromDto(requirement)); setTab('core'); setTouched(false); } }, [open, requirement]);

  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));
  const setEv = (k) => (e) => set(k)(e.target.value);

  const isStaffing = form.requirementType === 'STAFFING';
  const skill = window.TT_SKILLS.find((s) => String(s.id) === form.skillId);
  const subSkills = skill ? (skill.children || []).map((c) => ({ value: String(c.id), label: c.name })) : [];
  const clients = window.TT_CLIENTS.filter((c) => !form.verticalId || String(c.verticalId) === form.verticalId)
    .map((c) => ({ value: String(c.id), label: c.name }));
  const contacts = window.TT_CONTACTS.filter((c) => String(c.clientId) === form.clientId)
    .map((c) => ({ value: String(c.id), label: c.name + ' (' + c.title + ')' }));

  /* Validation — the fields the service rejects with a 400. */
  const errors = {};
  if (touched) {
    if (!form.skillId) errors.skillId = 'Skill is required';
    if (!form.priority) errors.priority = 'Priority is required';
    if (!form.requirementType) errors.requirementType = 'Type is required';
    if (isStaffing && !form.clientId) errors.clientId = 'Client is required for Staffing requirements';
    if (!form.positionTitle) errors.positionTitle = 'Position title is required';
    if (!form.needByDate) errors.needByDate = 'Need-by date is required';
    if (form.contractPosition && !form.tenureMonths) errors.tenureMonths = 'Tenure is required for contract positions';
  }
  const errorCount = Object.keys(errors).length;
  const tabErrors = {
    core: ['skillId', 'priority', 'requirementType', 'clientId', 'positionTitle'].filter((k) => errors[k]).length,
    jd: ['tenureMonths'].filter((k) => errors[k]).length,
    schedule: ['needByDate'].filter((k) => errors[k]).length,
  };

  const save = () => {
    setTouched(true);
    const next = { ...form };
    const errs = {};
    if (!next.skillId) errs.skillId = 1;
    if (!next.priority) errs.priority = 1;
    if (isStaffing && !next.clientId) errs.clientId = 1;
    if (!next.positionTitle) errs.positionTitle = 1;
    if (!next.needByDate) errs.needByDate = 1;
    if (next.contractPosition && !next.tenureMonths) errs.tenureMonths = 1;
    if (Object.keys(errs).length) { setTab(errs.skillId || errs.priority || errs.clientId || errs.positionTitle ? 'core' : errs.tenureMonths ? 'jd' : 'schedule'); return; }
    onSaved(next);
  };

  return (
    <Modal open={open} onClose={onClose} size="lg"
      title={requirement ? 'Requirement ' + requirement.reqNo : 'New requirement'}
      description={isStaffing ? 'Staffing requirement — raised against a client account.' : 'Internal requirement — raised against a Rite vertical.'}
      footer={
        <>
          {errorCount > 0 && (
            <span style={{ marginRight: 'auto', display: 'inline-flex', alignItems: 'center', gap: 7, font: '400 13px/1.2 var(--font-sans)', color: 'var(--status-danger)' }}>
              <Icon name="triangle-alert" size={15} />{errorCount} field{errorCount > 1 ? 's' : ''} need attention
            </span>
          )}
          <Button variant="secondary" size="sm" onClick={onClose}>Cancel</Button>
          {!readOnly && <Button size="sm" icon="check" onClick={save}>Save requirement</Button>}
        </>
      }>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Tabs items={TABS.map((t) => ({ ...t, count: tabErrors[t.id] || undefined }))} active={tab} onSelect={setTab} />

        {readOnly && <Banner tone="info" title="Read-only">Your role can view this requirement but not change it.</Banner>}

        {tab === 'core' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            <F l="Type" required error={errors.requirementType}>
              <Select value={form.requirementType} onChange={setEv('requirementType')} options={opts('TT_REQUIREMENT_TYPE')} disabled={readOnly} />
            </F>
            <F l="Skill" required error={errors.skillId}>
              <Select value={form.skillId} onChange={(e) => setForm((f) => ({ ...f, skillId: e.target.value, subSkillId: '' }))} placeholder="Select a skill"
                options={window.TT_SKILLS.map((s) => ({ value: String(s.id), label: s.name }))} invalid={!!errors.skillId} disabled={readOnly} />
            </F>
            <F l="Sub-skill" hint={skill ? undefined : 'Pick a skill first'}>
              <Select value={form.subSkillId} onChange={setEv('subSkillId')} placeholder={skill ? 'Select a sub-skill' : '—'} options={subSkills} disabled={readOnly || !skill} />
            </F>

            <F l="Vertical" required>
              <Select value={form.verticalId} onChange={(e) => setForm((f) => ({ ...f, verticalId: e.target.value, clientId: '', clientHiringManagerContactId: '' }))}
                placeholder="Select a vertical" options={window.TT_VERTICALS.map((v) => ({ value: String(v.id), label: v.name }))} disabled={readOnly} />
            </F>
            <F l={isStaffing ? 'Client' : 'Client (optional for Internal)'} required={isStaffing} error={errors.clientId}
               hint={!isStaffing ? 'Internal requirements sit against Rite Software' : undefined}>
              <Select value={form.clientId} onChange={(e) => setForm((f) => ({ ...f, clientId: e.target.value, clientHiringManagerContactId: '' }))}
                placeholder="Select a client" options={clients} invalid={!!errors.clientId} disabled={readOnly} />
            </F>
            <F l="Priority" required error={errors.priority}>
              <Select value={form.priority} onChange={setEv('priority')} placeholder="Select a priority" options={opts('TT_REQUIREMENT_PRIORITY')} invalid={!!errors.priority} disabled={readOnly} />
            </F>

            <F l="Position title" required error={errors.positionTitle} span={2}>
              <Input value={form.positionTitle} onChange={setEv('positionTitle')} placeholder="e.g. Oracle HCM — EBS Integration Specialist" invalid={!!errors.positionTitle} disabled={readOnly} />
            </F>
            <F l="Number of positions" required>
              <Input type="number" min="1" value={form.noOfPositions} onChange={setEv('noOfPositions')} disabled={readOnly} />
            </F>

            <F l="Engagement type">
              <Select value={form.engagementType} onChange={setEv('engagementType')} placeholder="Select" options={opts('TT_ENGAGEMENT_TYPE')} disabled={readOnly} />
            </F>
            <F l="Experience required" hint="Free text, e.g. “6+ years”">
              <Input value={form.experienceText} onChange={setEv('experienceText')} placeholder="6+ years" disabled={readOnly} />
            </F>
            <F l="Work mode">
              <Select value={form.workMode} onChange={setEv('workMode')} placeholder="Select" options={opts('TT_WORK_MODE')} disabled={readOnly} />
            </F>
          </div>
        )}

        {tab === 'jd' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FieldGroup label="Job description" hint="Shown to candidates and used by the AI matcher to score resumes.">
              <Textarea rows={6} value={form.jobDescription} onChange={setEv('jobDescription')} disabled={readOnly}
                placeholder="Describe the role, the modules involved, and what “good” looks like in the first 90 days." />
            </FieldGroup>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
              <F l="Bill rate">
                <Input value={form.billRateAmount} onChange={setEv('billRateAmount')} placeholder="68" suffix="USD" disabled={readOnly} />
              </F>
              <F l="Rate unit">
                <Select value={form.billRateUnit} onChange={setEv('billRateUnit')} options={opts('TT_RATE_UNIT')} disabled={readOnly} />
              </F>
              <F l="Probability of closure" hint={form.probabilityPct + '%'}>
                <input type="range" min="0" max="100" step="5" value={form.probabilityPct} onChange={setEv('probabilityPct')} disabled={readOnly}
                  style={{ width: '100%', accentColor: 'var(--rite-tropical-rainforest)', marginTop: 12 }} />
              </F>
            </div>

            <Card tone="subtle" padding={18}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Switch checked={form.contractPosition} onChange={set('contractPosition')} label="This is a contract position" disabled={readOnly} />
                {form.contractPosition && (
                  <FieldGroup label="Tenure of the project" required error={errors.tenureMonths} hint="Contract positions only">
                    <Input value={form.tenureMonths} onChange={setEv('tenureMonths')} placeholder="6" suffix="months" invalid={!!errors.tenureMonths} disabled={readOnly} style={{ maxWidth: 240 }} />
                  </FieldGroup>
                )}
              </div>
            </Card>

            <Card tone="subtle" padding={18}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ font: '500 13px/1.3 var(--font-sans)', color: 'var(--text-secondary)' }}>Stop-gap arrangement</span>
                  <Tooltip label="Temporary cover raised while a permanent hire is approved"><Icon name="circle-help" size={14} style={{ color: 'var(--text-tertiary)' }} /></Tooltip>
                </div>
                <div style={{ display: 'flex', gap: 24 }}>
                  <Radio checked={!form.stopGap} onChange={() => set('stopGap')(false)} label="No" disabled={readOnly} />
                  <Radio checked={form.stopGap} onChange={() => set('stopGap')(true)} label="Yes — temporary cover" disabled={readOnly} />
                </div>
                {form.stopGap && (
                  <FieldGroup label="Stop-gap notes">
                    <Textarea rows={2} value={form.stopGapNotes} onChange={setEv('stopGapNotes')} disabled={readOnly}
                      placeholder="What is being covered, and until when?" />
                  </FieldGroup>
                )}
              </div>
            </Card>
          </div>
        )}

        {tab === 'schedule' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
              <F l="Client hiring manager" hint={form.clientId ? undefined : 'Select a client first'}>
                <Select value={form.clientHiringManagerContactId} onChange={setEv('clientHiringManagerContactId')}
                  placeholder={form.clientId ? 'Select a contact' : '—'} options={contacts} disabled={readOnly || !form.clientId} />
              </F>
              <F l="Need by date" required error={errors.needByDate}>
                <Input type="date" value={form.needByDate} onChange={setEv('needByDate')} invalid={!!errors.needByDate} disabled={readOnly} />
              </F>
              <F l="Work location">
                <Input value={form.workLocation} onChange={setEv('workLocation')} placeholder="Hyderabad, IN" disabled={readOnly} />
              </F>
              <F l="Owner">
                <Select value={form.ownerName} onChange={setEv('ownerName')} placeholder="Select an owner"
                  options={window.TT_USERS.filter((u) => u.status === 'ACTIVE').map((u) => ({ value: u.name, label: u.name + ' · ' + u.role.replace('_', ' ').toLowerCase() }))} disabled={readOnly} />
              </F>
              <F l="Reporting manager">
                <Select value={form.managerName} onChange={setEv('managerName')} placeholder="Select a manager"
                  options={window.TT_USERS.filter((u) => ['MANAGER', 'DELIVERY_HEAD'].includes(u.role)).map((u) => ({ value: u.name, label: u.name }))} disabled={readOnly} />
              </F>
            </div>
            <Banner tone="info" title="Client records are read-only">
              The reference API exposes clients and contacts but has no write endpoint yet, so a new client cannot be created from this form.
            </Banner>
          </div>
        )}
      </div>
    </Modal>
  );
}

Object.assign(window, { RequirementModal });
