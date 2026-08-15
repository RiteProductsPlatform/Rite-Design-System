# Rite e-mail notifications

Transactional notification e-mails for RiteSuite applications. One shell every module writes
into, plus nine notification types built on it.

## What is here

| File | Type |
| --- | --- |
| `emails/rite-notification-shell.html` | **The shell.** Start here for any new type. |
| `emails/rite-approval-request.html` | Approval request — action needed (WageRite) |
| `emails/rite-status-update.html` | Status change / workflow update (ConvertRite) |
| `emails/rite-assignment.html` | Assignment — routed to you (RecruitRite) |
| `emails/rite-alert-failure.html` | Alert / job failure (ConvertRite) |
| `emails/rite-run-complete.html` | Run or report completed (ConvertRite) |
| `emails/rite-digest.html` | Daily digest (WageRite) |
| `emails/rite-welcome-invite.html` | Account welcome + invite (OnboardRite) |
| `emails/rite-otp-reset.html` | One-time code / password reset (RiteSuite) |
| `emails/rite-reminder-escalation.html` | Reminder / SLA escalation (WageRite) |
| `RiteEmailNotifications.dc.html` | Pattern sheet — anatomy, palette, copy rules, live previews of all ten |

Each e-mail is a standalone, dependency-free `.html` file. Open one in a browser to preview it;
drop it into the sending service as-is.

## Constraints these files obey

E-mail rendering is not browser rendering, so the usual design-system mechanics do not apply
inside `emails/`:

- **Nested `<table role="presentation">` layout**, single column, 600px max — no flex, grid or float.
- **Every style inlined** on the element it styles. The `<style>` block carries only the mobile
  media query, which several clients drop.
- **Literal hex, not tokens.** `var(--*)` does not resolve in mail clients, so brand values are
  written out: `#06211A` header, `#006F53` actions, `#3DED97` signal rule, `#F9F9F9` canvas,
  `#E3EAE7` hairlines, `#FA5323` failure, `#B88A2E` overdue.
- **No web fonts.** Poppins and IBM Plex Mono are unavailable; body type falls back to
  Arial/Helvetica and figures/IDs to Courier New, keeping the mono-for-scannable-values convention.
- **One image only** — the reversed Rite lockup in the header (`emails/assets/rite-logo-lockup-white.png`,
  displayed 71×28). It ships with a relative `src` so the repo preview renders; **host it and swap in
  the absolute https URL before sending.** `alt="Rite"` is already set, so image-blocking clients
  still read correctly. No other images.
- **Bulletproof buttons** — padded `<td>` with `bgcolor` and a `display:block` anchor.
- **Outlook conditionals** and `mso-line-height-rule:exactly` throughout; a hidden preheader
  span is the first element in `<body>`.

## Shell anatomy

1. Deep Forest header — lowercase *rite* left, module name right in Sage caps.
2. 4px signal rule — Mint normally, Ember for failures, Amber for overdue.
3. Eyebrow → headline → standfirst (the brand triad, sentence-case headline).
4. One or two content blocks: record details, tabular rows, status timeline, metrics row,
   counted list, or code/OTP panel. Never more than two.
5. One primary action (green), optional ghost second. Never two green buttons.
6. Footnote (what happens next, by when), then the standard footer.

## Placeholders

All variables use `${field}`, substituted server-side before send. Three are shell-level and
appear in all ten files:

    ${moduleName}      header right, caps
    ${preheaderText}   inbox preview, ~85 chars
    ${recipientEmail}  confidentiality line

The rest are per-type and named for what they carry (`${batchId}`, `${runId}`, `${errorCount}`,
`${otpCode}`, `${approveUrl}`, …). Every URL must be absolute https.

## Adding a new type

1. Copy `emails/rite-notification-shell.html`.
2. Replace the triad, pick at most two blocks from the pattern comments in that file.
3. Change the 4px rule colour only for failure or overdue states.
4. Keep the footer block byte-identical across every module.
5. Add the file to the table above and to the pattern sheet.

## Before shipping

- Send a plain-text alternative part — same facts, same URL, no markup.
- Keep each file under 100KB so Gmail does not clip it.
- Footer carries the support contact and the confidentiality notice. There is no unsubscribe:
  these are transactional. Add one if a template becomes marketing-shaped.

## Root readme index entry

Add to the `templates/` list in the design system's root `readme.md`:

    - `rite-email-notifications/RiteEmailNotifications.dc.html` — notification e-mail shell plus
      nine types (approval, status, assignment, failure, completion, digest, invite, OTP,
      escalation) as standalone send-ready HTML in `emails/`.
