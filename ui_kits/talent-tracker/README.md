# RITE Talent Tracker — application UI kit

A working front end for the Talent Tracker recruitment platform, built entirely on the Rite
Design System. Open `index.html`.

**Source of truth:** `uploads/TALENT_TRACKER_UI_REQUIREMENTS.md` (the API contract) and
`uploads/RITE_Talent_Tracker_Technical_Functional_Documentation.pdf` (screen mockups, §3).
Screen layouts follow the PDF mockups; every field name, payload shape and status code follows
the requirements document.

---

## Two approved departures from the written spec

Both were raised with the client and **signed off on 9 August 2026**. They supersede §2 of
`TALENT_TRACKER_UI_REQUIREMENTS.md`; update that document to match.

1. **Palette — Rite, not Redwood-navy.** The spec asked for a navy shell with a cyan primary
   (`#0f1e3d` / `#00a3e0`). This application uses the Rite brand palette instead:
   **Deep Forest `#06211A`** sidebar, **Tropical Rainforest `#006F53`** primary actions,
   **Signal Mint `#3DED97`** active state and positive signals. Layouts, columns, tabs and
   field order are unchanged from the PDF mockups — only the colour system differs.
2. **Component library — Rite primitives, not Ant Design 5.** The app is built on this design
   system's own components (`Button`, `DataTable`, `Badge`, `Modal`, `SideNav`, `Tabs`,
   `Input`, `Select`…), so it inherits Rite tokens directly with no theme-override layer and no
   AntD dependency. Everything the spec needed from AntD has a Rite equivalent; nothing was
   dropped for lack of one.

**What this means for the production build:** install no `antd` / `@ant-design/icons`. Copy
`styles.css`, `tokens/` and `components/` into the app (see the root `readme.md` § "Index"), and
import `styles.css` once at the root. The rest of the §2 stack — React 18, TypeScript, Vite 6,
axios, dayjs, react-router-dom 6 — is unaffected.

---

## Screens

| File | Screen | Spec § |
| --- | --- | --- |
| `index.html` → `Login` | 1 · Login | §8, PDF 3.1 |
| `Requirements.jsx` | 2 · Requirements dashboard | §8.2, PDF 3.2 |
| `RequirementModal.jsx` | 3 · New/Edit Requirement (3 tabs) | §8.3, PDF 3.3 |
| `Candidates.jsx` | 4 · Candidate pipeline — Kanban + Table + bulk upload | §8.4, PDF 3.4 |
| `CandidateModal.jsx` | 5 · Candidate profile (Profile / Rounds / Feedback / Documents / History) | §8.5, PDF 3.5 |
| `MISReports.jsx` | 6 · MIS Reports | §8.6, PDF 3.6 |
| `OffersDocs.jsx` | 7 · Documentation Verification + Offer Initiation | §8.7, PDF 3.7 |
| `Admin.jsx` | 8 · Admin — Users / Role Permissions / Integrations | §8.8, PDF 3.8 |
| `OfferPortal.jsx` | 9 · Candidate offer portal (unauthenticated) | §7 Offer Portal |
| `Shell.jsx` | App chrome — RBAC nav, role switcher, ⌘K palette, activity drawer | §5 |
| `data.js` | Mock data in the exact response shapes | §3 |
| `rbac.js` | The seeded role × page matrix and component overrides | §5 |

Two extra surfaces the spec names in the page list but never specifies (`TT_TRACK_LEADS`,
`TT_RECRUITER`) are rendered as **derived views** with an explicit banner saying so, rather than
inventing a screen. Replace them when you have the real designs.

## Contract behaviours actually implemented

- **`"Y"`/`"N"` ↔ boolean mapping** at the form boundary (`fromDto` in `RequirementModal.jsx`).
  No `"Y"` string leaks into a component.
- **Omitted-not-null**: every optional read uses optional chaining and renders `—`, never
  `undefined` or `NaN`. MIS scalars degrade to `—` individually.
- **409 as an actionable warning, not an error.** Kanban drag optimistically moves the card,
  then reverts it and shows the server message as a warning toast. Try dragging **Arjun Nair**
  (on hold) or skipping two columns. Same treatment on "Proceed to Offer Initiation" with
  pending documents, and on rejecting a document with no reason.
- **RBAC drives everything.** The sidebar is built from the visible-pages list, `READ_ONLY`
  disables create/edit and shows a "Read only" chip in the header, and the commercial-field
  overrides hide Margin and CTC per role. **Switch role from the avatar menu, top right** — the
  Interviewer loses Requirements entirely and sees "Restricted" where margin would be.
- **Lookup-driven dropdowns.** No hardcoded enum arrays in a component; every list reads
  `TT_LOOKUPS` and sorts by `attribute1`.
- **Reschedules render as history.** An `L1` that was moved shows struck through and marked
  *Rescheduled*, with the replacement round below it — not a single mutable row.
- **Offer token shown once**, with a copy button and a note that it cannot be re-read.
- **Portal is outside the shell** — no sidebar, no role, and it renders only the nine fields the
  portal endpoint returns. No margin, bill rate or internal ids.

## Industry-standard additions (beyond the spec — remove any you don't want)

| Addition | Why |
| --- | --- |
| **⌘K command palette** | Jump to any page, requirement or candidate. Standard in every modern enterprise console; costs one keystroke, saves a lot of clicking. |
| **Saved views** on Requirements (All open / Critical / Owned by me / Stop-gap / Past need-by) | Recruiters return to the same three filters daily; chips beat re-selecting dropdowns. |
| **Activity log drawer** in the header | The `ActivityLog` object already exists server-side (PDF §5.3) but had no surface. |
| **SLA aging on every card and row** | The SLA rules table is seeded; showing "4d · SLA exceeded" inline turns MIS reporting into daily prevention. |
| **Row density toggle + CSV export** | Operational tables get scanned, not read. |
| **Bulk selection + assign/email** on the candidate table | 30-row batches after a bulk upload are the normal case. |
| **Stage history tab** on the candidate profile | `/candidates/{id}/history` was in the API with no screen; SLA breaches render as red timeline nodes. |
| **Per-tab error counts** on the requirement form | A 3-tab form hides validation errors on inactive tabs; the count makes them findable. |
| **Progress + verification counters** on Documentation | Makes the 409 predictable before the user hits it. |
| **Empty, loading and restricted states everywhere** | The spec's acceptance criteria demand no crashes on absent data; these make absence legible. |

## Going live

1. Replace `data.js` with an axios module: base `/talenttracker`, an interceptor that sets
   `X-Person-Number` from the session, and mappers at the boundary for `"Y"`/`"N"`.
2. Replace `rbac.js`'s local matrix with the `pages[]` array from
   `POST /common/rbac/v1/authz/session-context`. The helper signatures
   (`ttCanSee`, `ttCanEdit`, `ttShowComponent`) are already the right shape — only their
   data source changes.
3. Swap the role switcher for MSAL. It is deliberately isolated in `Shell.jsx` behind one prop.
4. Wire paging: the tables currently slice locally; the footer is already built for the
   zero-based `{ items, page, size, totalElements, hasMore }` envelope.
