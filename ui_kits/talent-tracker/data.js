/* Mock data for the Talent Tracker UI kit.
   Shapes mirror the real API contract in TALENT_TRACKER_UI_REQUIREMENTS.md exactly:
   camelCase, "Y"/"N" boolean strings on responses, omitted (not null) optional fields,
   zero-based paging envelopes. Swap this file for the axios layer to go live. */

const LOOKUPS = {
  TT_REQUIREMENT_PRIORITY: [
    { lookupCode: 'CRITICAL', meaning: 'Critical', attribute1: '1' },
    { lookupCode: 'HIGH', meaning: 'High', attribute1: '2' },
    { lookupCode: 'MEDIUM', meaning: 'Medium', attribute1: '3' },
    { lookupCode: 'LOW', meaning: 'Low', attribute1: '4' },
  ],
  TT_REQUIREMENT_TYPE: [
    { lookupCode: 'STAFFING', meaning: 'Staffing', attribute1: '1' },
    { lookupCode: 'INTERNAL', meaning: 'Internal', attribute1: '2' },
  ],
  TT_REQUIREMENT_STATUS: [
    { lookupCode: 'OPEN', meaning: 'Open', attribute1: '1' },
    { lookupCode: 'SOURCING', meaning: 'Sourcing', attribute1: '2' },
    { lookupCode: 'PARTIAL', meaning: 'Partial', attribute1: '3' },
    { lookupCode: 'CLOSED', meaning: 'Closed', attribute1: '4' },
  ],
  TT_ENGAGEMENT_TYPE: [
    { lookupCode: 'NEW_PROJECT', meaning: 'New Project', attribute1: '1' },
    { lookupCode: 'REPLACEMENT', meaning: 'Replacement', attribute1: '2' },
    { lookupCode: 'EXPANSION', meaning: 'Expansion', attribute1: '3' },
  ],
  TT_WORK_MODE: [
    { lookupCode: 'ONSITE', meaning: 'Onsite', attribute1: '1' },
    { lookupCode: 'HYBRID', meaning: 'Hybrid', attribute1: '2' },
    { lookupCode: 'REMOTE', meaning: 'Remote', attribute1: '3' },
  ],
  TT_RATE_UNIT: [
    { lookupCode: 'HOUR', meaning: '/ hr', attribute1: '1' },
    { lookupCode: 'DAY', meaning: '/ day', attribute1: '2' },
    { lookupCode: 'MONTH', meaning: '/ month', attribute1: '3' },
  ],
  TT_INTERVIEW_ROUND_TYPE: [
    { lookupCode: 'SCREENING', meaning: 'Screening', attribute1: '1' },
    { lookupCode: 'L1', meaning: 'L1 Technical', attribute1: '2' },
    { lookupCode: 'L2', meaning: 'L2 Technical', attribute1: '3' },
    { lookupCode: 'CLIENT', meaning: 'Client Round', attribute1: '4' },
  ],
  TT_INTERVIEW_MODE: [
    { lookupCode: 'TEAMS', meaning: 'Microsoft Teams', attribute1: '1' },
    { lookupCode: 'MEET', meaning: 'Google Meet', attribute1: '2' },
    { lookupCode: 'IN_PERSON', meaning: 'In person', attribute1: '3' },
  ],
  TT_DROP_REASON: [
    { lookupCode: 'CANDIDATE_WITHDREW', meaning: 'Candidate withdrew', attribute1: '1' },
    { lookupCode: 'REJECTED_TECH', meaning: 'Rejected — technical', attribute1: '2' },
    { lookupCode: 'CTC_MISMATCH', meaning: 'CTC mismatch', attribute1: '3' },
    { lookupCode: 'POSITION_CLOSED', meaning: 'Position closed', attribute1: '4' },
  ],
};

const VERTICALS = [
  { id: 1, name: 'Staffing' },
  { id: 2, name: 'Managed Services' },
  { id: 3, name: 'Rite Internal' },
];

const CLIENTS = [
  { id: 1, verticalId: 1, name: 'Acme Financial Corp' },
  { id: 2, verticalId: 1, name: 'Nova Retail Group' },
  { id: 3, verticalId: 2, name: 'Meridian Logistics' },
  { id: 4, verticalId: 1, name: 'Cianbro' },
  { id: 5, verticalId: 3, name: 'Rite Software' },
];

const CONTACTS = [
  { id: 11, clientId: 1, name: 'Rebecca Shaw', title: 'VP Engineering' },
  { id: 12, clientId: 2, name: 'Daniel Cruz', title: 'Head of Digital' },
  { id: 13, clientId: 3, name: 'Anita Bose', title: 'Programme Director' },
  { id: 14, clientId: 4, name: 'Mark Ellery', title: 'CIO' },
];

const SKILLS = [
  { id: 1, name: 'HCM', children: [{ id: 11, name: 'EBS' }, { id: 12, name: 'Fusion' }, { id: 13, name: 'Payroll' }] },
  { id: 2, name: 'FIN', children: [{ id: 21, name: 'GL' }, { id: 22, name: 'AP / AR' }] },
  { id: 3, name: 'SCM', children: [{ id: 31, name: 'Inventory' }, { id: 32, name: 'Procurement' }] },
  { id: 4, name: 'Tech', children: [{ id: 41, name: 'React' }, { id: 42, name: 'Java' }, { id: 43, name: 'OIC' }] },
  { id: 5, name: 'PPM', children: [{ id: 51, name: 'Projects' }] },
];

const STAGES = [
  { stageCode: 'SOURCED', stageName: 'Sourced', stageSeq: 1, stageGroup: 'SOURCING' },
  { stageCode: 'SCREENING', stageName: 'Screening', stageSeq: 2, stageGroup: 'SCREENING' },
  { stageCode: 'L1_SCHEDULED', stageName: 'L1 Scheduled', stageSeq: 3, stageGroup: 'INTERVIEW' },
  { stageCode: 'L2_SELECT', stageName: 'L2 Select', stageSeq: 4, stageGroup: 'INTERVIEW' },
  { stageCode: 'DOCUMENTATION', stageName: 'Documentation', stageSeq: 5, stageGroup: 'OFFER' },
  { stageCode: 'OFFER_RELEASED', stageName: 'Offer Released', stageSeq: 6, stageGroup: 'OFFER' },
  { stageCode: 'JOINED', stageName: 'Joined', stageSeq: 7, stageGroup: 'CLOSED' },
];

const SUMMARY = { openRequirements: 47, staffingOpen: 18, internalOpen: 29, criticalPriority: 6, stopGapArrangements: 5 };

const REQUIREMENTS = [
  { id: 231, reqNo: 'RM00231', requirementType: 'STAFFING', verticalId: 1, clientId: 1, skillId: 1, subSkillId: 11,
    positionTitle: 'Oracle HCM — EBS Integration Specialist', noOfPositions: 2, positionsFilled: 0,
    priority: 'CRITICAL', status: 'SOURCING', engagementType: 'NEW_PROJECT', experienceMinYrs: 6, experienceMaxYrs: 10,
    experienceText: '6+ years', jobDescription: 'Oracle HCM Cloud — EBS integration specialist, payroll & absence management modules. Must have led at least two full-cycle payroll conversions and be comfortable owning the interface design end to end.',
    billRateAmount: 68, billRateCurrency: 'USD', billRateUnit: 'HOUR', isContractPosition: 'Y', tenureMonths: 6,
    stopGapFlag: 'Y', stopGapNotes: 'Temporary cover while the permanent hire is approved.',
    clientHiringManagerContactId: 11, clientHiringManagerName: 'Rebecca Shaw',
    ownerPersonNumber: '100231', ownerName: 'AnilRaj', managerPersonNumber: '100002', managerName: 'GKM',
    probabilityPct: 80, needByDate: '2026-07-12', loggedDate: '2026-06-02', workLocation: 'Hyderabad, IN', workMode: 'HYBRID' },
  { id: 229, reqNo: 'RM00229', requirementType: 'INTERNAL', verticalId: 3, clientId: 5, skillId: 2, subSkillId: 21,
    positionTitle: 'Oracle Financials Consultant', noOfPositions: 1, positionsFilled: 0,
    priority: 'HIGH', status: 'OPEN', engagementType: 'EXPANSION', experienceText: '4–8 years',
    jobDescription: 'Internal bench build for GL and reconciliation work across the Energy portfolio.',
    isContractPosition: 'N', stopGapFlag: 'N',
    ownerPersonNumber: '100002', ownerName: 'GKM', managerPersonNumber: '100002', managerName: 'GKM',
    probabilityPct: 60, needByDate: '2026-07-18', loggedDate: '2026-06-10', workLocation: 'Hyderabad, IN', workMode: 'ONSITE' },
  { id: 227, reqNo: 'RM00227', requirementType: 'STAFFING', verticalId: 1, clientId: 2, skillId: 4, subSkillId: 41,
    positionTitle: 'Senior React Engineer', noOfPositions: 3, positionsFilled: 1,
    priority: 'MEDIUM', status: 'SOURCING', engagementType: 'NEW_PROJECT', experienceText: '5+ years',
    jobDescription: 'Front-end lead for the Nova customer portal rebuild.',
    billRateAmount: 58, billRateCurrency: 'USD', billRateUnit: 'HOUR', isContractPosition: 'N', stopGapFlag: 'N',
    clientHiringManagerContactId: 12, clientHiringManagerName: 'Daniel Cruz',
    ownerPersonNumber: '100227', ownerName: 'Srinivas R', managerPersonNumber: '100002', managerName: 'GKM',
    probabilityPct: 70, needByDate: '2026-07-22', loggedDate: '2026-06-14', workLocation: 'Remote', workMode: 'REMOTE' },
  { id: 224, reqNo: 'RM00224', requirementType: 'STAFFING', verticalId: 2, clientId: 3, skillId: 3, subSkillId: 32,
    positionTitle: 'SCM Procurement Lead', noOfPositions: 1, positionsFilled: 0,
    priority: 'HIGH', status: 'PARTIAL', engagementType: 'REPLACEMENT', experienceText: '8+ years',
    jobDescription: 'Replacement for the outgoing procurement workstream lead on the Meridian AMS account.',
    billRateAmount: 52, billRateCurrency: 'USD', billRateUnit: 'HOUR', isContractPosition: 'Y', tenureMonths: 12,
    stopGapFlag: 'Y', clientHiringManagerContactId: 13, clientHiringManagerName: 'Anita Bose',
    ownerPersonNumber: '100224', ownerName: 'Seshendra', managerPersonNumber: '100002', managerName: 'GKM',
    probabilityPct: 55, needByDate: '2026-07-09', loggedDate: '2026-05-28', workLocation: 'Chicago, US', workMode: 'ONSITE' },
  { id: 220, reqNo: 'RM00220', requirementType: 'INTERNAL', verticalId: 3, clientId: 5, skillId: 5, subSkillId: 51,
    positionTitle: 'PPM Functional Analyst', noOfPositions: 1, positionsFilled: 0,
    priority: 'LOW', status: 'OPEN', engagementType: 'EXPANSION', experienceText: '3+ years',
    jobDescription: 'Support the internal projects practice with Oracle PPM configuration.',
    isContractPosition: 'N', stopGapFlag: 'N',
    ownerPersonNumber: '100231', ownerName: 'AnilRaj', managerPersonNumber: '100002', managerName: 'GKM',
    probabilityPct: 40, needByDate: '2026-07-30', loggedDate: '2026-06-20', workLocation: 'Hyderabad, IN', workMode: 'HYBRID' },
  { id: 218, reqNo: 'RM00218', requirementType: 'STAFFING', verticalId: 1, clientId: 4, skillId: 1, subSkillId: 13,
    positionTitle: 'Payroll Parallel Lead', noOfPositions: 1, positionsFilled: 1,
    priority: 'MEDIUM', status: 'CLOSED', engagementType: 'NEW_PROJECT', experienceText: '7+ years',
    jobDescription: 'Own the payroll parallel cycles through Cianbro go-live.',
    billRateAmount: 71, billRateCurrency: 'USD', billRateUnit: 'HOUR', isContractPosition: 'N', stopGapFlag: 'N',
    clientHiringManagerContactId: 14, clientHiringManagerName: 'Mark Ellery',
    ownerPersonNumber: '100227', ownerName: 'Srinivas R', managerPersonNumber: '100002', managerName: 'GKM',
    probabilityPct: 100, needByDate: '2026-06-28', loggedDate: '2026-05-02', closedDate: '2026-06-24',
    workLocation: 'Maine, US', workMode: 'ONSITE' },
];

/* Candidates. Note: dropReason / holdReason are OMITTED unless set — mirroring the service. */
const CANDIDATES = [
  { id: 412, candNo: 'CAND00412', requirementId: 231, talentId: 88, currentStageCode: 'L2_SELECT',
    stageChangedDate: '2026-08-04', recruiterPersonNumber: '100456', recruiterName: 'Priya Nair',
    skillMatchScore: 94, skillMatchSource: 'AI', aiFilledFlag: 'Y',
    currentCtcAmount: 2400000, expectedCtcAmount: 2900000, monthlyCtcInr: 241667, usdInrRate: 90.0,
    marginAmount: 18, marginCurrency: 'USD', marginUnit: 'HOUR', holdFlag: 'N',
    sourcedDate: '2026-07-02', timeToFillDays: 33,
    talent: { id: 88, fullName: 'Meera Joshi', email: 'meera.joshi@example.com', phone: '+91 98450 11234',
      currentRole: 'Sr HCM Consultant', currentCompany: 'Zenith Consulting', totalExperienceYrs: 8.0,
      education: 'M.Tech, IIT Kharagpur', candidateType: 'EXPERIENCED', source: 'BULK_UPLOAD',
      currentLocation: 'Hyderabad, IN', workModePreference: 'HYBRID' } },
  { id: 405, candNo: 'CAND00405', requirementId: 231, talentId: 81, currentStageCode: 'SOURCED',
    stageChangedDate: '2026-08-07', recruiterName: 'Priya Nair', skillMatchScore: 92, skillMatchSource: 'AI', aiFilledFlag: 'Y',
    currentCtcAmount: 1800000, expectedCtcAmount: 2200000, monthlyCtcInr: 183333, usdInrRate: 90.0, holdFlag: 'N',
    sourcedDate: '2026-08-07',
    talent: { id: 81, fullName: 'Rahul Mehta', email: 'rahul.mehta@example.com', currentRole: 'HCM Techno-functional',
      currentCompany: 'Larsen Digital', totalExperienceYrs: 6.5, education: 'B.E., NIT Warangal',
      candidateType: 'EXPERIENCED', source: 'BULK_UPLOAD', currentLocation: 'Pune, IN', workModePreference: 'REMOTE' } },
  { id: 407, candNo: 'CAND00407', requirementId: 227, talentId: 83, currentStageCode: 'SOURCED',
    stageChangedDate: '2026-08-06', recruiterName: 'Priya Nair', skillMatchScore: 78, skillMatchSource: 'AI', aiFilledFlag: 'Y',
    currentCtcAmount: 1600000, expectedCtcAmount: 2100000, monthlyCtcInr: 175000, usdInrRate: 90.0, holdFlag: 'N',
    sourcedDate: '2026-08-06',
    talent: { id: 83, fullName: 'Divya Rao', email: 'divya.rao@example.com', currentRole: 'Frontend Engineer',
      currentCompany: 'Nimbus Labs', totalExperienceYrs: 5.0, education: 'B.Tech, VIT',
      candidateType: 'EXPERIENCED', source: 'REFERRAL', currentLocation: 'Bengaluru, IN', workModePreference: 'REMOTE' } },
  { id: 401, candNo: 'CAND00401', requirementId: 229, talentId: 79, currentStageCode: 'SCREENING',
    stageChangedDate: '2026-08-05', recruiterName: 'Priya Nair', skillMatchScore: 81, skillMatchSource: 'MANUAL', aiFilledFlag: 'N',
    currentCtcAmount: 1400000, expectedCtcAmount: 1750000, monthlyCtcInr: 145833, usdInrRate: 90.0, holdFlag: 'N',
    sourcedDate: '2026-07-28',
    talent: { id: 79, fullName: 'Kiran Patel', email: 'kiran.patel@example.com', currentRole: 'Financials Consultant',
      currentCompany: 'Deloitte India', totalExperienceYrs: 5.0, education: 'MBA Finance, SIBM',
      candidateType: 'EXPERIENCED', source: 'JOB_BOARD', currentLocation: 'Ahmedabad, IN', workModePreference: 'HYBRID' } },
  { id: 409, candNo: 'CAND00409', requirementId: 224, talentId: 85, currentStageCode: 'L1_SCHEDULED',
    stageChangedDate: '2026-08-08', recruiterName: 'Priya Nair', skillMatchScore: 88, skillMatchSource: 'AI', aiFilledFlag: 'Y',
    currentCtcAmount: 2100000, expectedCtcAmount: 2600000, monthlyCtcInr: 216667, usdInrRate: 90.0, holdFlag: 'N',
    sourcedDate: '2026-07-30', nextInterviewLabel: 'Today 3:00 PM',
    talent: { id: 85, fullName: 'Sana Iqbal', email: 'sana.iqbal@example.com', currentRole: 'SCM Lead',
      currentCompany: 'Mahindra Logistics', totalExperienceYrs: 9.0, education: 'B.E. Industrial, COEP',
      candidateType: 'EXPERIENCED', source: 'REFERRAL', currentLocation: 'Mumbai, IN', workModePreference: 'ONSITE' } },
  { id: 410, candNo: 'CAND00410', requirementId: 220, talentId: 86, currentStageCode: 'L1_SCHEDULED',
    stageChangedDate: '2026-08-08', recruiterName: 'Priya Nair', skillMatchScore: 73, skillMatchSource: 'AI', aiFilledFlag: 'Y',
    currentCtcAmount: 1200000, expectedCtcAmount: 1500000, monthlyCtcInr: 125000, usdInrRate: 90.0,
    holdFlag: 'Y', holdReason: 'Client paused the requisition until the Q3 budget clears.',
    sourcedDate: '2026-08-01', nextInterviewLabel: 'Tomorrow 11:00 AM',
    talent: { id: 86, fullName: 'Arjun Nair', email: 'arjun.nair@example.com', currentRole: 'PPM Analyst',
      currentCompany: 'Infosys', totalExperienceYrs: 4.0, education: 'B.Tech, CUSAT',
      candidateType: 'EXPERIENCED', source: 'JOB_BOARD', currentLocation: 'Kochi, IN', workModePreference: 'HYBRID' } },
  { id: 398, candNo: 'CAND00398', requirementId: 227, talentId: 74, currentStageCode: 'DOCUMENTATION',
    stageChangedDate: '2026-08-02', recruiterName: 'Priya Nair', skillMatchScore: 90, skillMatchSource: 'AI', aiFilledFlag: 'Y',
    currentCtcAmount: 1900000, expectedCtcAmount: 2400000, monthlyCtcInr: 200000, usdInrRate: 90.0,
    marginAmount: 14, marginCurrency: 'USD', marginUnit: 'HOUR', holdFlag: 'N',
    officialEmail: 'farhan.ali@newcompany.com', officialEmailVerifiedFlag: 'Y', sourcedDate: '2026-07-05',
    talent: { id: 74, fullName: 'Farhan Ali', email: 'farhan.ali@example.com', currentRole: 'React Tech Lead',
      currentCompany: 'Publicis Sapient', totalExperienceYrs: 7.5, education: 'B.Tech, Jamia Millia',
      candidateType: 'EXPERIENCED', source: 'BULK_UPLOAD', currentLocation: 'Delhi, IN', workModePreference: 'HYBRID' } },
  { id: 392, candNo: 'CAND00392', requirementId: 229, talentId: 71, currentStageCode: 'OFFER_RELEASED',
    stageChangedDate: '2026-08-01', recruiterName: 'Priya Nair', skillMatchScore: 86, skillMatchSource: 'AI', aiFilledFlag: 'Y',
    currentCtcAmount: 1500000, expectedCtcAmount: 1900000, monthlyCtcInr: 158333, usdInrRate: 90.0, holdFlag: 'N',
    sourcedDate: '2026-06-24',
    talent: { id: 71, fullName: 'Neha Kapoor', email: 'neha.kapoor@example.com', currentRole: 'GL Consultant',
      currentCompany: 'EY India', totalExperienceYrs: 6.0, education: 'CA, ICAI',
      candidateType: 'EXPERIENCED', source: 'REFERRAL', currentLocation: 'Gurugram, IN', workModePreference: 'HYBRID' } },
  { id: 380, candNo: 'CAND00380', requirementId: 218, talentId: 66, currentStageCode: 'JOINED',
    stageChangedDate: '2026-06-24', recruiterName: 'Priya Nair', skillMatchScore: 95, skillMatchSource: 'AI', aiFilledFlag: 'Y',
    currentCtcAmount: 2600000, expectedCtcAmount: 3100000, monthlyCtcInr: 258333, usdInrRate: 90.0,
    marginAmount: 22, marginCurrency: 'USD', marginUnit: 'HOUR', holdFlag: 'N',
    sourcedDate: '2026-05-06', joinedDate: '2026-06-24', timeToFillDays: 49,
    talent: { id: 66, fullName: 'Vikram Sethi', email: 'vikram.sethi@example.com', currentRole: 'Payroll Architect',
      currentCompany: 'Accenture', totalExperienceYrs: 11.0, education: 'M.Sc, Delhi University',
      candidateType: 'EXPERIENCED', source: 'REFERRAL', currentLocation: 'Portland, US', workModePreference: 'ONSITE' } },
];

const STAGE_HISTORY = {
  412: [
    { id: 1, candidateId: 412, toStageCode: 'SOURCED', changedByName: 'Priya Nair', changedDate: '2026-07-02T09:14:00', slaBreachedFlag: 'N' },
    { id: 2, candidateId: 412, fromStageCode: 'SOURCED', toStageCode: 'SCREENING', changedByName: 'Priya Nair', changedDate: '2026-07-09T11:02:00', daysInFromStage: 7, slaDays: 5, slaBreachedFlag: 'Y', notes: 'Delayed — candidate was on notice-period discussions.' },
    { id: 3, candidateId: 412, fromStageCode: 'SCREENING', toStageCode: 'L1_SCHEDULED', changedByName: 'Priya Nair', changedDate: '2026-07-18T15:40:00', daysInFromStage: 9, slaDays: 10, slaBreachedFlag: 'N' },
    { id: 4, candidateId: 412, fromStageCode: 'L1_SCHEDULED', toStageCode: 'L2_SELECT', changedByName: 'Anil Raj', changedDate: '2026-08-04T10:20:00', daysInFromStage: 17, slaDays: 14, slaBreachedFlag: 'Y' },
  ],
};

const INTERVIEWS = {
  412: [
    { id: 91, roundType: 'L1', roundSeq: 1, status: 'RESCHEDULED', scheduledStart: '2026-07-21T14:00:00', scheduledEnd: '2026-07-21T15:00:00',
      interviewMode: 'TEAMS', panelistName: 'K. Mannuru', result: 'RESCHEDULED' },
    { id: 92, roundType: 'L1', roundSeq: 1, status: 'COMPLETED', rescheduledFromRoundId: 91, scheduledStart: '2026-07-24T14:00:00', scheduledEnd: '2026-07-24T15:00:00',
      interviewMode: 'TEAMS', panelistName: 'K. Mannuru', result: 'SELECTED' },
    { id: 93, roundType: 'L2', roundSeq: 2, status: 'COMPLETED', scheduledStart: '2026-08-03T11:30:00', scheduledEnd: '2026-08-03T12:30:00',
      interviewMode: 'TEAMS', panelistName: 'S. Kanala', result: 'SELECTED' },
    { id: 94, roundType: 'CLIENT', roundSeq: 3, status: 'SCHEDULED', scheduledStart: '2026-08-12T16:00:00', scheduledEnd: '2026-08-12T17:00:00',
      interviewMode: 'TEAMS', panelistName: 'Rebecca Shaw', meetingLink: 'https://teams.microsoft.com/l/meetup-join/…' },
  ],
};

const FEEDBACK = {
  412: [
    { id: 51, roundId: 92, roundType: 'L1', panelistName: 'K. Mannuru', overallRating: 4, technicalRating: 4, communicationRating: 5,
      recommendation: 'PROCEED', feedbackText: 'Strong on payroll and absence. Walked through a full EBS→Fusion interface design without prompting. Would place on a client-facing workstream.' },
    { id: 52, roundId: 93, roundType: 'L2', panelistName: 'S. Kanala', overallRating: 5, technicalRating: 5, communicationRating: 4,
      recommendation: 'STRONG_PROCEED', feedbackText: 'Best conversion candidate we have seen this quarter. Handled the reconciliation edge cases cleanly.' },
  ],
};

const DOCUMENTS = {
  398: [
    { id: 301, documentType: 'GOVERNMENT_ID', documentName: 'Government ID', fileName: 'farhan_id.pdf', status: 'VERIFIED', verifiedByName: 'Priya Nair' },
    { id: 302, documentType: 'EDUCATION', documentName: 'Education Certificate', fileName: 'farhan_mtech.pdf', status: 'VERIFIED', verifiedByName: 'Priya Nair' },
    { id: 303, documentType: 'EXPERIENCE', documentName: 'Experience Letter', fileName: 'farhan_exp_letter.pdf', status: 'PENDING_REVIEW' },
    { id: 304, documentType: 'PAYSLIP', documentName: 'Latest Payslip', fileName: 'farhan_payslip.pdf', status: 'REJECTED', rejectionReason: 'Unreadable — please rescan at higher resolution', verifiedByName: 'Priya Nair' },
  ],
};

const MIS = {
  avgTimeToFillDays: 14.2,
  slaBreachesThisWeek: 3,
  avgMargin: 21,
  l1ToOfferConversionPct: 68,
  funnel: [
    { stageCode: 'SOURCED', stageName: 'Sourced', count: 142 },
    { stageCode: 'SCREENING', stageName: 'Screening', count: 96 },
    { stageCode: 'L1_SCHEDULED', stageName: 'L1', count: 61 },
    { stageCode: 'L2_SELECT', stageName: 'L2', count: 38 },
    { stageCode: 'DOCUMENTATION', stageName: 'Doc', count: 19 },
    { stageCode: 'OFFER_RELEASED', stageName: 'Offer', count: 12 },
    { stageCode: 'JOINED', stageName: 'Joined', count: 9 },
  ],
  agingCandidates: [
    { candidateId: 398, candidateName: 'Farhan Ali', stageName: 'Documentation', daysInStage: 6, slaDays: 3 },
    { candidateId: 401, candidateName: 'Kiran Patel', stageName: 'Screening', daysInStage: 3, slaDays: 2 },
    { candidateId: 410, candidateName: 'Arjun Nair', stageName: 'L1 Scheduled', daysInStage: 2, slaDays: 2 },
  ],
  byVerticalAndClient: [
    { vertical: 'Staffing', client: 'Acme Financial Corp', openReqs: 7, avgBillRate: 64, avgMargin: 19 },
    { vertical: 'Staffing', client: 'Nova Retail Group', openReqs: 4, avgBillRate: 58, avgMargin: 15 },
    { vertical: 'Managed Services', client: 'Meridian Logistics', openReqs: 3, avgBillRate: 52, avgMargin: 12 },
    { vertical: 'Rite Internal', openReqs: 29 },
  ],
};

const USERS = [
  { id: 1, personNumber: '100002', name: 'GKM', email: 'gkm@rite.digital', role: 'DELIVERY_HEAD', status: 'ACTIVE' },
  { id: 2, personNumber: '100231', name: 'Anil Raj', email: 'anil.raj@rite.digital', role: 'TRACK_LEAD', status: 'ACTIVE' },
  { id: 3, personNumber: '100456', name: 'Priya Nair', email: 'priya.nair@rite.digital', role: 'RECRUITER', status: 'ACTIVE' },
  { id: 4, personNumber: '100227', name: 'Srinivas R', email: 'srinivas.r@rite.digital', role: 'MANAGER', status: 'ACTIVE' },
  { id: 5, personNumber: '100310', name: 'K. Mannuru', email: 'k.mannuru@rite.digital', role: 'INTERVIEWER', status: 'ACTIVE' },
  { id: 6, personNumber: '100001', name: 'System Admin', email: 'admin@rite.digital', role: 'ADMIN', status: 'ACTIVE' },
  { id: 7, personNumber: '100511', name: 'Seshendra', email: 'seshendra@rite.digital', role: 'TRACK_LEAD', status: 'INACTIVE' },
];

const OFFER = {
  offerNo: 'OFR00119', candidateName: 'Neha Kapoor', positionTitle: 'Oracle Financials Consultant',
  offeredCtcAmount: 1900000, offeredCtcCurrency: 'INR', offeredCtcUnit: 'YEAR', joiningDate: '2026-09-15',
  status: 'RELEASED', expiresAt: '2026-08-22T21:23:26',
  offerLetterText: 'We are delighted to offer you the position of Oracle Financials Consultant at Rite Software. Your appointment is subject to the standard background verification and the documents already submitted.',
  approvals: [
    { id: 1, approverName: 'GKM', approverRole: 'Delivery Head', status: 'APPROVED' },
    { id: 2, approverName: 'Srinivas R', approverRole: 'Manager', status: 'APPROVED' },
    { id: 3, approverName: 'Finance Desk', approverRole: 'Finance', status: 'PENDING' },
  ],
};

Object.assign(window, { TT_LOOKUPS: LOOKUPS, TT_VERTICALS: VERTICALS, TT_CLIENTS: CLIENTS, TT_CONTACTS: CONTACTS,
  TT_SKILLS: SKILLS, TT_STAGES: STAGES, TT_SUMMARY: SUMMARY, TT_REQUIREMENTS: REQUIREMENTS, TT_CANDIDATES: CANDIDATES,
  TT_STAGE_HISTORY: STAGE_HISTORY, TT_INTERVIEWS: INTERVIEWS, TT_FEEDBACK: FEEDBACK, TT_DOCUMENTS: DOCUMENTS,
  TT_MIS: MIS, TT_USERS: USERS, TT_OFFER: OFFER });
