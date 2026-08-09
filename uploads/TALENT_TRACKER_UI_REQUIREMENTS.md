# RITE Talent Tracker — UI Requirements

**For:** the agent/developer building the Talent Tracker web front end in a separate folder.
**Companion documents:** `RITE_Talent_Tracker_Technical_Functional_Documentation.pdf`
(screen mockups and process flows) and `product-service-data-ownership-guide.md`.

The backend already exists, is deployed against a live Oracle schema, and every
endpoint below has been exercised end to end. **This document is the contract —
build to it; do not invent endpoints or field names.**

---

## 1. What you are building

A recruitment and talent-pipeline web application with **eight screens**:

| # | Screen | Purpose |
|---|---|---|
| 1 | Login | Microsoft 365 SSO, then resolve the user's role |
| 2 | Requirements dashboard | KPI tiles + filterable table of open positions |
| 3 | New/Edit Requirement | 3-tab modal form |
| 4 | Candidate pipeline | Kanban board **and** tabular view, with bulk upload |
| 5 | Candidate profile | Tabbed modal: Profile / Interview Rounds / Feedback / Documents |
| 6 | MIS Reports | Aggregate analytics (Management Information System) |
| 7 | Documentation Verification | Document review between interview selection and offer |
| 8 | Admin — Access Control | Users / Role Permissions / Integrations tabs |

Plus a **ninth, unauthenticated** surface: the **candidate Offer Portal**, reached by
a single-use token link. It is not part of the main app shell and must not
require login.

## 2. Stack

Match the platform (`common-web`) so the two apps stay consistent:

- **React 18** + **TypeScript** + **Vite 6**
- **Ant Design 5** (`antd`) + `@ant-design/icons`
- `axios`, `dayjs`, `react-router-dom` 6
- Design language: **Redwood-navy** palette per the functional document
  (dark navy sidebar `#0f1e3d`-ish, white content area, cyan primary action
  `#00a3e0`-ish, status pills in red/amber/blue/green). Reproduce the look of
  the mockups in the PDF; treat the exact hex values as yours to define.

Dev server proxy (mirroring `common-web/vite.config.ts`):

```ts
proxy: {
  '/talenttracker': { target: 'http://localhost:9010', changeOrigin: true },
  '/common':        { target: 'http://localhost:8082', changeOrigin: true },
}
```

## 3. Integration conventions — read this before writing any API call

These are real behaviours of the deployed service. Getting them wrong produces
silent blanks or spurious 500s.

1. **JSON is camelCase.** No configuration needed.
2. **Null fields are OMITTED, not sent as `null`.** The service runs
   `default-property-inclusion: non_null`. `candidate.dropReason` simply will not
   exist until the candidate is dropped. **Never assume a key is present** — use
   optional chaining and defaults throughout. This is the single most likely
   source of runtime crashes.
3. **The acting user goes in the `X-Person-Number` header** on every mutating
   call. Set it once in an axios interceptor from the session.
4. **Booleans are `"Y"` / `"N"` strings on responses**, but plain booleans on
   some requests. Note the asymmetry:
   - Response: `stopGapFlag: "Y"`, `isContractPosition: "N"`, `holdFlag: "N"`
   - Request: `stopGap: true`, `contractPosition: false`
   Write mappers at the API boundary; do not leak `"Y"`/`"N"` into components.
5. **Paged list envelope** (`GET /requirements`, `/candidates`, `/talents`):
   ```json
   { "items": [...], "page": 0, "size": 20, "totalElements": 47,
     "totalPages": 3, "hasMore": true }
   ```
   Send Spring `Pageable` params: `?page=0&size=20&sort=needByDate,asc`.
   Note `page` is **zero-based** while AntD `Table` pagination is one-based.
6. **Error envelope** — always this shape:
   ```json
   { "timestamp": "...", "status": 409, "error": "Conflict",
     "message": "Candidate is already in stage L1_SELECT", "path": "/talenttracker/..." }
   ```
   Surface `message` directly to the user; it is written to be human-readable.
7. **Status codes are meaningful.** `409` = a business rule was violated (show
   the message as a warning, not an error toast); `404` = not found; `400` =
   validation; `500` = the server is genuinely broken. Do not treat 409 as a crash.
8. **Dates**: `LocalDate` fields serialize as `"2026-09-15"`, `LocalDateTime` as
   `"2026-08-09T13:22:31.577"` — no timezone suffix, no epoch numbers.

## 4. Authentication & session

```
MSAL (Microsoft 365 SSO)  →  email (UPN)
        ↓
POST /common/rbac/v1/authz/session-context
  { "applicationCode": "TALENT_TRACKER", "username": "...", "email": "...", "forceRefresh": false }
        ↓
  { "sessionId": "...", "resolvedRole": "RECRUITER",
    "dataScope": { "crewFilter": "...", "filterField": "..." },
    "pages": [ { "pageCode": "TT_CANDIDATES", "pageName": "Candidates",
                 "accessLevel": "FULL", "actions": [...] }, ... ] }
```

- Talent Tracker owns **no** users or roles. Roles come from Oracle Fusion via
  common-service. Never build a local user table or a registration screen.
- Store `sessionId` and `resolvedRole` in context; use `pages[]` to drive
  navigation (§5).
- `POST /common/rbac/v1/authz/check-permission` with
  `{ sessionId, pageCode, actionCode }` for finer-grained checks.

> **Status:** no MSAL dependency or SSO configuration exists anywhere on the
> platform yet — Talent Tracker is establishing this pattern. Build behind a
> `AuthProvider` abstraction with a **dev stub** that lets you pick a role from a
> dropdown, so the UI is buildable and testable before SSO is wired. Do not block
> on SSO.

## 5. RBAC-driven navigation — do not hardcode the menu

The sidebar is rendered from the `pages[]` array returned by `session-context`.
Show a nav item only when its `accessLevel` is `FULL` or `READ_ONLY`; hide it on
`HIDDEN`. `READ_ONLY` must disable create/edit/delete controls on that screen.

Seeded page codes (global across the platform, hence the `TT_` prefix):

| PAGE_CODE | Label | Route |
|---|---|---|
| `TT_REQUIREMENTS` | Requirements | `/requirements` |
| `TT_CANDIDATES` | Candidates | `/candidates` |
| `TT_TRACK_LEADS` | Track Leads | `/track-leads` |
| `TT_RECRUITER` | Recruiter | `/recruiter` |
| `TT_MIS_REPORTS` | MIS Reports | `/mis-reports` |
| `TT_OFFERS_DOCS` | Offers & Docs | `/offers-docs` |
| `TT_ADMIN` | Admin | `/admin` |

Roles: `ADMIN`, `DELIVERY_HEAD`, `MANAGER`, `TRACK_LEAD`, `RECRUITER`, `INTERVIEWER`.

The seeded default matrix (Admin is locked on everywhere):

| Role | Reqs | Cands | Track Leads | Recruiter | MIS | Offers & Docs | Admin |
|---|---|---|---|---|---|---|---|
| Admin | ✓🔒 | ✓🔒 | ✓🔒 | ✓🔒 | ✓🔒 | ✓🔒 | ✓🔒 |
| DeliveryHead | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Manager | ✓ | ✓ | ✓ | — | ✓ | ✓ | — |
| TrackLead | ✓ | ✓ | ✓ | — | ✓ | — | — |
| Recruiter | ✓ | ✓ | — | ✓ | ✓ | ✓ | — |
| Interviewer | — | ✓ | ✓ | — | ✓ | — | — |

**Component-level visibility.** Commercially sensitive fields are governed
separately. Hide them per the seeded overrides:

| Component | Hidden from |
|---|---|
| `TT_CAND_MARGIN` (Margin) | Interviewer, Recruiter, TrackLead |
| `TT_CAND_CTC` (CTC fields) | Interviewer |
| `TT_REQ_BILL_RATE` (Bill Rate) | Interviewer |
| `TT_ADMIN_VIEW_CRED` / `TT_ADMIN_RESET_CRED` | everyone except Admin |

## 6. Dropdown values come from common-service, not from constants

Do **not** hardcode enum lists. Fetch them:

```
GET /common/v1/lookups/values?lookupType=TT_REQUIREMENT_PRIORITY&application_code=TALENT_TRACKER
```

⚠️ `application_code` is **snake_case and required** (it is a list — repeat the
param for multiple). Getting the casing wrong returns a 400.

Available types (all seeded): `TT_REQUIREMENT_PRIORITY`, `TT_REQUIREMENT_TYPE`,
`TT_REQUIREMENT_STATUS`, `TT_ENGAGEMENT_TYPE`, `TT_WORK_MODE`, `TT_DOCUMENT_TYPE`,
`TT_DOCUMENT_STATUS`, `TT_INTERVIEW_ROUND_TYPE`, `TT_INTERVIEW_MODE`,
`TT_INTERVIEW_RESULT`, `TT_CANDIDATE_SOURCE`, `TT_CANDIDATE_TYPE`,
`TT_DROP_REASON`, `TT_OFFER_STATUS`, `TT_RATE_UNIT`.

Each row gives `lookupCode` (the value to send), `meaning` (the label to show),
`description` (tooltip), and `attribute1` (display sort order — sort by it).

Cache these at app start; they change rarely.

**Structural reference data comes from Talent Tracker itself** (it is not flat
lookup data — it carries ordering, hierarchy and foreign keys):

```
GET /talenttracker/reference/verticals
GET /talenttracker/reference/clients?verticalId=1
GET /talenttracker/reference/clients/{clientId}/contacts?hiringManagersOnly=true
GET /talenttracker/reference/skills                  → top-level skills
GET /talenttracker/reference/skills?parentId=1       → sub-skills (HCM › EBS)
GET /talenttracker/reference/stages?kanbanOnly=true  → Kanban columns, ordered
```

## 7. API reference

Base path `/talenttracker`. All mutating calls take `X-Person-Number`.

### Requirements

| Method | Path | Notes |
|---|---|---|
| GET | `/requirements` | params: `verticalId`, `clientId`, `status`, `priority`, `type`, `search` + paging |
| GET | `/requirements/summary` | KPI tiles |
| GET | `/requirements/{id}` | |
| POST | `/requirements` | → 201 |
| PUT | `/requirements/{id}` | |
| DELETE | `/requirements/{id}` | soft-cancel → 204 |

`summary` returns exactly:
```json
{ "openRequirements": 47, "staffingOpen": 18, "internalOpen": 29,
  "criticalPriority": 6, "stopGapArrangements": 5 }
```

`RequirementDto`: `id, reqNo, requirementType, verticalId, clientId, skillId,
subSkillId, positionTitle, noOfPositions, positionsFilled, priority, status,
engagementType, experienceMinYrs, experienceMaxYrs, experienceText,
jobDescription, billRateAmount, billRateCurrency, billRateUnit,
isContractPosition, tenureMonths, stopGapFlag, stopGapNotes,
clientHiringManagerContactId, clientHiringManagerName, ownerPersonNumber,
ownerName, managerPersonNumber, managerName, probabilityPct, needByDate,
loggedDate, closedDate, workLocation, workMode`

`RequirementRequest` (create/update) — same, except: no `id`/`reqNo`/
`positionsFilled`/`loggedDate`/`closedDate` (server-assigned), and
`contractPosition` + `stopGap` are **booleans**.

### Candidates

| Method | Path | Notes |
|---|---|---|
| GET | `/candidates` | params: `requirementId`, `stageCode`, `recruiter`, `holdFlag` + paging |
| GET | `/candidates/kanban?requirementId=` | array of columns |
| GET | `/candidates/{id}` | includes nested `talent` object |
| GET | `/candidates/{id}/history` | stage transitions |
| POST | `/candidates` | → 201 |
| PUT | `/candidates/{id}` | recruiter-editable fields |
| POST | `/candidates/{id}/stage` | `{ toStageCode, changedByPersonNumber?, changedByName?, notes? }` |
| POST | `/candidates/{id}/hold` | `{ reason, byPersonNumber? }` |
| DELETE | `/candidates/{id}/hold` | release hold |
| POST | `/candidates/{id}/drop` | `{ reason, byPersonNumber?, byName? }` |

**Create payload** — pass either an existing `talentId` **or** a `talent` block;
the server dedupes on email and reuses the databank record:
```json
{ "requirementId": 1,
  "talent": { "fullName": "Meera Joshi", "email": "...", "phone": "...",
              "currentRole": "...", "currentCompany": "...", "totalExperienceYrs": 8.0,
              "education": "...", "candidateType": "EXPERIENCED", "source": "BULK_UPLOAD" },
  "recruiterPersonNumber": "100456", "recruiterName": "Priya Nair",
  "currentCtcAmount": 2400000, "expectedCtcAmount": 2900000, "usdInrRate": 90.0,
  "skillMatchScore": 94, "skillMatchSource": "AI", "aiFilled": true }
```
Posting a talent already on that requirement returns **409** — show "already a
candidate on this requirement", don't crash.

`CandidateDto` key fields: `id, candNo, requirementId, talentId, talent{...},
currentStageCode, stageChangedDate, recruiterName, skillMatchScore,
skillMatchSource, aiFilledFlag, currentCtcAmount, expectedCtcAmount,
assignedCtcAmount, monthlyCtcInr, usdInrRate, marginAmount, marginCurrency,
marginUnit, holdFlag, holdReason, dropReason, dropStageCode, officialEmail,
officialEmailVerifiedFlag, sourcedDate, joinedDate, timeToFillDays`

`KanbanColumnDto`: `{ stageCode, stageName, stageSeq, stageGroup, count, candidates[] }`

`StageHistoryDto`: `{ id, candidateId, fromStageCode?, toStageCode,
changedByName?, changedDate, daysInFromStage?, slaDays?, slaBreachedFlag, notes? }`
— render `slaBreachedFlag === "Y"` as a red marker on the timeline.

### Interviews

| Method | Path | Body |
|---|---|---|
| GET | `/candidates/{id}/interviews` | |
| POST | `/candidates/{id}/interviews` | `{ roundType, roundSeq?, scheduledStart, scheduledEnd, timeZone?, interviewMode, meetingLink?, calendarProvider?, providerEventId?, panelistPersonNumber?, panelistName?, panelistEmail? }` |
| POST | `/interviews/{roundId}/reschedule` | `{ scheduledStart, scheduledEnd, meetingLink?, providerEventId?, reason }` |
| POST | `/interviews/{roundId}/result` | `{ result, notes? }` |
| POST | `/interviews/{roundId}/cancel` | `{ reason }` |
| POST | `/interviews/{roundId}/feedback` | `{ panelistName?, overallRating?, technicalRating?, communicationRating?, recommendation?, feedbackText? }` |
| GET | `/candidates/{id}/feedback` | all feedback for a candidate |

**Reschedule creates a NEW round** linked via `rescheduledFromRoundId`; the
original is marked `RESCHEDULED`. Render rounds as a history, not a single
mutable row — otherwise reschedules look like they vanished.

### Documentation Verification

| Method | Path | Body |
|---|---|---|
| GET | `/candidates/{id}/documentation` | current cycle + its documents |
| POST | `/candidates/{id}/documentation` | open a cycle → 201 |
| GET | `/candidates/{id}/documents` | |
| POST | `/candidates/{id}/documents` | `{ documentType, documentName?, fileName, contentType?, fileSizeBytes?, storageRef }` |
| POST | `/documents/{documentId}/review` | `{ status, rejectionReason?, verifiedByName? }` |
| POST | `/candidates/{id}/documentation/email` | `{ officialCompanyEmail, verified }` |
| POST | `/candidates/{id}/documentation/decision` | `{ decision, remarks? }` |

`decision` is `PROCEED_TO_OFFER` or `REQUEST_RESUBMISSION`. Proceeding while any
document is `PENDING_REVIEW` or `REJECTED` returns **409** with a count — show it
inline. Rejecting a document without a `rejectionReason` also returns 409.

> The service stores a `storageRef`, **not** the file bytes. Object-storage upload
> is **not implemented** — see §9.

### Offers

| Method | Path | Notes |
|---|---|---|
| GET | `/offers/{id}` | includes `approvals[]` |
| GET | `/offers/candidate/{candidateId}` | all versions, newest first |
| POST | `/offers` | `{ candidateId, offeredCtcAmount, offeredCtcCurrency?, offeredCtcUnit?, joiningDate, offerLetterText?, offerLetterStorageRef?, approvers: [{ approverName, approverRole, approverEmail? }] }` |
| POST | `/offers/approvals/{approvalId}` | `{ status, comments? }` — `APPROVED`/`REJECTED` |
| POST | `/offers/{id}/release` | **returns the portal token — see below** |
| POST | `/offers/{id}/reset` | back to draft, invalidates the link |

Releasing before all approvals are `APPROVED` returns **409**.

**`POST /offers/{id}/release` is the only response that ever contains the portal
token:**
```json
{ "offer": {...}, "portalToken": "OxUV0_SK...",
  "portalPath": "/talenttracker/offers/portal/OxUV0_SK...", "expiresAt": "2026-08-22T21:23:26" }
```
Show the link once with a copy button. Subsequent `GET /offers/{id}` never
returns it — do not build UI that expects to re-read it.

### Offer Portal (unauthenticated)

| Method | Path |
|---|---|
| GET | `/offers/portal/{token}` |
| POST | `/offers/portal/{token}/accept` |
| POST | `/offers/portal/{token}/decline` (`{ reason? }`) |

Returns only: `offerNo, candidateName, positionTitle, offeredCtcAmount,
offeredCtcCurrency, offeredCtcUnit, joiningDate, offerLetterText, status, expiresAt`.
Deliberately no margin, bill rate or internal ids — **never display or request
anything else here**. Invalid token → 404, expired → 409, double-accept → 409.

This must be a **separate route outside the authenticated shell**: no sidebar, no
role lookup, no MSAL redirect. A candidate has no account.

### MIS

| Method | Path |
|---|---|
| GET | `/mis/dashboard` |
| GET | `/mis/funnel` |
| GET | `/mis/aging` |
| GET | `/mis/by-vertical-client` |

`dashboard` returns `{ avgTimeToFillDays, slaBreachesThisWeek, avgMargin,
l1ToOfferConversionPct, funnel[], agingCandidates[], byVerticalAndClient[] }`.
Any of the scalar KPIs may be **absent** when there is no data yet (§3.2) — render
"—", not `NaN`.

## 8. Screen-by-screen requirements

**2. Requirements dashboard** — 5 KPI tiles from `/requirements/summary`.
Filter row: search box, Vertical select, Client select, "+ New Requirement".
Table columns: REQ ID, Skill/Sub-skill, Type, Client/Vertical, Priority (pill),
Status (pill), Owner, Need By. Server-side paging and filtering.

**3. New Requirement modal** — three tabs, exactly as the PDF:
- *Core Info*: Skill/Sub-skill (cascading), Client, Vertical, **Priority**, Type,
  Experience Required
- *Job Description & Hiring*: Job Description, Bill Rate, **Tenure of the Project**
  (only when `contractPosition`), **Stop-Gap Arrangement** (first-class Yes/No)
- *Schedule & Management*: **Client Hiring Manager** (from client contacts),
  Need By Date, Owner/Manager

Per the 7 July feedback: Priority appears in Core Info for **both** Staffing and
Internal; the field is labelled **Client** Hiring Manager. Client is required for
Staffing, hidden/optional for Internal.

**4. Candidate pipeline** — toggle between Kanban and Table. Kanban columns come
from `/candidates/kanban` (already ordered). Cards show name, skill, and — by
stage — AI match %, interview time, or margin. Drag-and-drop calls
`POST /candidates/{id}/stage`; on 409 revert the card and show the message.
"+ Bulk Upload" lives on this screen.

**5. Candidate profile modal** — tabs Profile / Interview Rounds / Feedback /
Documents. AI-filled fields (Experience, Education, Skill Match Score) show a ✨
marker and remain **editable**; editing the score flips `skillMatchSource` to
`MANUAL`. Current CTC and Expected CTC are separate. Monthly CTC (INR) and the
USD/INR rate are interlinked and read-only (server-computed). Margin is
server-computed. A **Hold** control sits in the header.

**6. MIS Reports** — KPI row, "Candidates by Stage" bar chart, "Aging Candidates
(SLA Exceeded)" table, per-Vertical/Client breakdown table.

**7. Documentation Verification** — candidate stage badge, official company email
with verified tick, document grid (Type / File / Status pill / Verified By), and
two actions: "Request Re-submission" and "Proceed to Offer Initiation".

**8. Admin — Access Control** — three tabs: Users, Role Permissions, Integrations.
The Role Permissions tab is a role × page checkbox grid; Admin's row renders
locked. **Note:** this grid reads and writes shared RBAC config in
common-service, not Talent Tracker. Build it read-only first (§9).

## 9. Out of scope / not yet available

Do not build UI that depends on these without asking first:

1. **No client/contact write API.** `/reference/clients` is read-only. The New
   Requirement form can *select* a client but not create one. Either build the
   form select-only, or ask for the admin endpoints to be added.
2. **No file upload endpoint.** Document and resume endpoints accept a
   `storageRef` string; object storage is not wired. Stub the upload and send a
   placeholder ref, or ask for the upload endpoint.
3. **No bulk-upload / AI parsing endpoint yet.** The tables exist
   (`TT_UPLOAD_BATCHES`, `TT_RESUMES`, `TT_RESUME_PARSE_RESULTS`,
   `TT_MATCH_SCORES`) but no REST surface. Build the button and a stub flow.
4. **No RBAC write endpoint from Talent Tracker.** The Access Control grid can
   read `pages[]` from session-context; saving changes needs a common-service
   endpoint that does not exist yet.
5. **No Outlook/Teams integration.** `meetingLink` and `providerEventId` are
   accepted as inputs; nothing generates them. Let the user paste a link.
6. **No email sending from the UI.** Notifications go through notification-service
   server-side.

## 10. Acceptance criteria

- Every screen renders correctly for each of the six roles, with hidden nav items
  and hidden commercial fields respected.
- No crash when optional fields are absent from a response.
- 409s render as actionable inline messages, never as generic error toasts.
- The offer portal works in a clean browser with no session, and exposes no
  internal data.
- All dropdowns are lookup-driven; no hardcoded enum arrays in components.
- Kanban drag-and-drop optimistically updates and correctly reverts on rejection.
- Paging, sorting and filtering are server-side, not client-side slicing.

## 11. Local development

1. Start the backend: `java -jar target/talent-tracker-svc.jar --spring.flyway.target=7`
   (port 9010; `--spring.flyway.target=7` is needed only until the DBA grants land).
2. Swagger UI — the live contract: `http://localhost:9010/swagger-ui.html`
3. Seeded data available immediately: 3 verticals, 21 pipeline stages, 16 SLA
   rules, 9 skills. **No clients are seeded**, so Staffing requirements cannot be
   created through the UI until §9.1 is resolved — use Internal requirements
   (`verticalId` = the `RITE_INTERNAL` vertical) while developing.
