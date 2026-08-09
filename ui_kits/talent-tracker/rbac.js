/* RBAC — mirrors the seeded matrix in TALENT_TRACKER_UI_REQUIREMENTS.md §5.
   In production this comes from POST /common/rbac/v1/authz/session-context; here it is
   computed locally so the role switcher works without a backend. */

const PAGES = [
  { pageCode: 'TT_REQUIREMENTS', pageName: 'Requirements', route: 'requirements', icon: 'clipboard-list' },
  { pageCode: 'TT_CANDIDATES', pageName: 'Candidates', route: 'candidates', icon: 'users' },
  { pageCode: 'TT_TRACK_LEADS', pageName: 'Track Leads', route: 'track-leads', icon: 'git-branch' },
  { pageCode: 'TT_RECRUITER', pageName: 'Recruiter', route: 'recruiter', icon: 'user-search' },
  { pageCode: 'TT_MIS_REPORTS', pageName: 'MIS Reports', route: 'mis-reports', icon: 'chart-column' },
  { pageCode: 'TT_OFFERS_DOCS', pageName: 'Offers & Docs', route: 'offers-docs', icon: 'file-check' },
  { pageCode: 'TT_ADMIN', pageName: 'Admin', route: 'admin', icon: 'shield-check' },
];

const ROLES = [
  { code: 'ADMIN', label: 'Admin', user: 'System Admin', personNumber: '100001' },
  { code: 'DELIVERY_HEAD', label: 'Delivery Head', user: 'GKM', personNumber: '100002' },
  { code: 'MANAGER', label: 'Manager', user: 'Srinivas R', personNumber: '100227' },
  { code: 'TRACK_LEAD', label: 'Track Lead', user: 'Anil Raj', personNumber: '100231' },
  { code: 'RECRUITER', label: 'Recruiter', user: 'Priya Nair', personNumber: '100456' },
  { code: 'INTERVIEWER', label: 'Interviewer', user: 'K. Mannuru', personNumber: '100310' },
];

/* FULL | READ_ONLY | HIDDEN, per the seeded default matrix. */
const MATRIX = {
  ADMIN:         { TT_REQUIREMENTS: 'FULL', TT_CANDIDATES: 'FULL', TT_TRACK_LEADS: 'FULL', TT_RECRUITER: 'FULL', TT_MIS_REPORTS: 'FULL', TT_OFFERS_DOCS: 'FULL', TT_ADMIN: 'FULL' },
  DELIVERY_HEAD: { TT_REQUIREMENTS: 'FULL', TT_CANDIDATES: 'FULL', TT_TRACK_LEADS: 'FULL', TT_RECRUITER: 'FULL', TT_MIS_REPORTS: 'FULL', TT_OFFERS_DOCS: 'FULL', TT_ADMIN: 'HIDDEN' },
  MANAGER:       { TT_REQUIREMENTS: 'FULL', TT_CANDIDATES: 'FULL', TT_TRACK_LEADS: 'FULL', TT_RECRUITER: 'HIDDEN', TT_MIS_REPORTS: 'FULL', TT_OFFERS_DOCS: 'FULL', TT_ADMIN: 'HIDDEN' },
  TRACK_LEAD:    { TT_REQUIREMENTS: 'FULL', TT_CANDIDATES: 'FULL', TT_TRACK_LEADS: 'FULL', TT_RECRUITER: 'HIDDEN', TT_MIS_REPORTS: 'FULL', TT_OFFERS_DOCS: 'HIDDEN', TT_ADMIN: 'HIDDEN' },
  RECRUITER:     { TT_REQUIREMENTS: 'FULL', TT_CANDIDATES: 'FULL', TT_TRACK_LEADS: 'HIDDEN', TT_RECRUITER: 'FULL', TT_MIS_REPORTS: 'FULL', TT_OFFERS_DOCS: 'FULL', TT_ADMIN: 'HIDDEN' },
  INTERVIEWER:   { TT_REQUIREMENTS: 'HIDDEN', TT_CANDIDATES: 'READ_ONLY', TT_TRACK_LEADS: 'READ_ONLY', TT_RECRUITER: 'HIDDEN', TT_MIS_REPORTS: 'READ_ONLY', TT_OFFERS_DOCS: 'HIDDEN', TT_ADMIN: 'HIDDEN' },
};

/* Component-level overrides for commercially sensitive fields. */
const COMPONENT_HIDDEN = {
  TT_CAND_MARGIN: ['INTERVIEWER', 'RECRUITER', 'TRACK_LEAD'],
  TT_CAND_CTC: ['INTERVIEWER'],
  TT_REQ_BILL_RATE: ['INTERVIEWER'],
  TT_ADMIN_VIEW_CRED: ['DELIVERY_HEAD', 'MANAGER', 'TRACK_LEAD', 'RECRUITER', 'INTERVIEWER'],
  TT_ADMIN_RESET_CRED: ['DELIVERY_HEAD', 'MANAGER', 'TRACK_LEAD', 'RECRUITER', 'INTERVIEWER'],
};

function accessLevel(role, pageCode) { return (MATRIX[role] || {})[pageCode] || 'HIDDEN'; }
function canSee(role, pageCode) { return accessLevel(role, pageCode) !== 'HIDDEN'; }
function canEdit(role, pageCode) { return accessLevel(role, pageCode) === 'FULL'; }
function showComponent(role, componentCode) { return !(COMPONENT_HIDDEN[componentCode] || []).includes(role); }
function visiblePages(role) { return PAGES.filter((p) => canSee(role, p.pageCode)); }

Object.assign(window, { TT_PAGES: PAGES, TT_ROLES: ROLES, TT_MATRIX: MATRIX, TT_COMPONENT_HIDDEN: COMPONENT_HIDDEN,
  ttAccessLevel: accessLevel, ttCanSee: canSee, ttCanEdit: canEdit, ttShowComponent: showComponent, ttVisiblePages: visiblePages });
