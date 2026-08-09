# Rite Design System

The design system for **Rite** (Rite Software) — the brand, the presentation language, and the
UI foundations for **RiteSuite**, the company's React web application.

---

## 1 · Company & product context

Rite is a 20-year-old (2006 → 2026) Oracle transformation partner. It runs two businesses that
share one brand:

1. **Services** — Oracle Cloud/ERP implementation, managed services (AMS), data conversion and
   enterprise-AI delivery for capital-intensive industries.
2. **Products (RiteSuite)** — its own PaaS/SaaS applications that fill gaps in the Oracle stack.

**Industries.** Primary: Engineering, Procurement & Construction (EPC); Energy, Oil & Gas.
Expansion: Healthcare; Professional Services.

**Brand positioning line:** *So you can change the world.*

**Purpose / Vision / Mission** (verbatim from the brand deck):
- *Purpose* — To be the **quiet force** behind the world's most ambitious enterprises.
- *Vision* — To be the **most trusted** Oracle transformation partner for the enterprises that change the world.
- *Mission* — To deliver deep industry expertise, end-to-end ownership and purpose-built products;
  and an unwavering commitment to making Oracle **work exactly the way our customers need it to.**

**Brand promise:** Rite takes complete ownership of your Oracle ecosystem across design,
implementation, products and ongoing operations, so the only thing your team ever has to focus on
is the work that moves your business forward.

**Five values** — Expertise without ego · Care that goes the distance · Build what's missing ·
Proof before promises · Outcomes over activity.

**Personality axes** — Warmly Committed · Quietly Confident · Candidly Direct ·
Relentlessly Resourceful · Generously Strategic.

### The product surface this system serves

**RiteSuite** is a portfolio of web applications, not one app. Modules named in the source
material:

| Module | What it does |
| --- | --- |
| **ConvertRite** / ConvertLite | Oracle data conversion & migration (incl. Oracle→Salesforce) |
| **BidRite** | AI bid-to-project lifecycle platform (Oracle VBCS + OIC) |
| **RevRite** | Revenue / Opportunity-to-Cash engine |
| **WageRite** | Payroll & wage processing |
| **RecruitRite** / OnboardRite | Recruiting and onboarding (Oracle Redwood HCM patterns) |
| **ConfigRite AI** | AI-assisted configuration |
| **LienRite** | Lien waiver management (E&C Suite) |
| **EquipRite** | Equipment agreements (E&C Suite) |
| **PayWhenPaid** | AP/AR pay-when-paid matching (E&C Suite) |
| **Invoice Backup** | Invoice backup generation (E&C Suite) |
| **CoWork / CWK** | Contingent-worker costing & scheduling (ProServ Suite) |
| **CrewRite** | Crew management, rebuilt on Oracle Redwood patterns |
| **Rite Analytics** | Warehouse, prebuilt dimensions/facts, Power BI interconnect |
| **DiscoveryAI / Inspectra AI** | AI requirement discovery; AI document QA & code review |

The UI kit in this system recreates the **RiteSuite console** shell that these modules sit inside.

---

## 2 · Sources this system was built from

Everything here is derived from material the user supplied. There is **no application codebase in
this project** — see Caveats.

| Source | Path given | What it gave us |
| --- | --- | --- |
| Brand deck | `D:\Documents\RiteSuite\rite-theme\Rite AHM Aug'26 final_v3.pptx` — *Rite All Hands Meet, August 2026*, 77 slides | Named brand colours, typeface, logo anatomy & usage, tone of voice, values, product inventory, slide layouts, all icons/illustrations/photography |
| Primary logo mark | `rite-theme/rite-logo.png` | → `assets/logo/rite-mark.png` |
| Primary lockup | `rite-theme/rite-logo-title.png` | → `assets/logo/rite-logo-lockup.png` |
| Theme reference screenshots | `rite-theme/rite-theme.png`, `rite-theme-2.png` | Section-divider and chapter-title slide layouts |
| Public touchpoints named in the deck | `www.rite.digital`, `hello@rite.digital` | Not fetched; listed for reference |

Slides 43–60 of the deck are an internal brand-guidelines chapter ("A New era for Rite") and are
the single most authoritative source in this system.

### Caveats — read before extending

- **No React codebase was provided.** The mounted folder `rite-theme/` contained only the deck,
  two logo files and two screenshots. The component library below is therefore authored from the
  brand foundations, not lifted from production code. **If a RiteSuite repo exists, connect it and
  this system should be re-derived from it — the code wins over anything here.**
- **The UI kit is a brand-faithful construction, not a recreation.** No product screenshots or
  screens were supplied. It follows the brand's colour, type, spacing and card language exactly,
  but its information architecture is inferred from the module list above. Treat it as a
  starting point to correct, not as ground truth.
- **Fonts are CDN-linked, not self-hosted.** The deck embeds Poppins and IBM Plex Mono as
  PowerPoint `.fntdata` (an obfuscated container that cannot be unpacked to `.ttf` here). Both
  families are open-source and are loaded from Google Fonts. **If Rite has licensed/self-hosted
  webfont files, drop them in `assets/fonts/` and replace the `@import` in `tokens/fonts.css`
  with real `@font-face` rules.**
- **Icons are raster PNGs extracted from the deck.** See Iconography.

---

## 3 · Content fundamentals

Rite's writing is **plain, declarative and low-ego**. It states what happened, names the thing,
and stops. Where most enterprise-IT brands reach for superlatives, Rite reaches for a full stop.

**Voice**
- **Short declaratives, often fragments.** *"One name. Everywhere."* · *"The form never breaks."*
  · *"Syntax just became free. Domain depth, architecture and judgement did not."*
- **Understatement as confidence.** *"We never announced ourselves. We just kept showing up, and
  kept getting it right."* Never "revolutionary", "cutting-edge", "world-class".
- **Concrete over abstract.** Claims carry a number or a named proof: *"20 years and zero failed
  go-lives"*, *"150 successful deployments"*, *"85 tickets resolved in the last 6 weeks"*.
- **Candid about difficulty.** *"What Got You Here Won't Get You There"* · *"Honest about
  challenges. Tells clients what they need, not what they want to hear."*

**Person**
- **"We" for Rite, "you/your" for the reader.** *"Rite takes complete ownership of your Oracle
  ecosystem…"* · *"It arrives in your inbox. You build nothing."*
- Internal comms address the employee directly and reassure before they ask: *"Nothing you send
  this week is wrong."*
- The client is the subject of the outcome; Rite is the reason it worked, never the hero.

**Casing**
- **Eyebrows: ALL CAPS, wide-tracked** — `UPDATES` · `THE NEW BRAND` · `MARKET INTELLIGENCE` ·
  `ENTERPRISE AI · 1 OF 2`. Use `·` as the separator inside an eyebrow, never a dash.
- **Headlines: sentence case** — *"People & Organization"*, *"Where the Edge Moves"*,
  *"Said plainly"*. Title Case appears only in short label pairs (*"Adopt Boldly"*).
- **The brand name is lowercase in the wordmark, uppercase in copy when standing alone as the
  name**: "One word. RITE." In running prose it is "Rite".
- Product names are camel-cased and never spaced: `ConvertRite`, `PayWhenPaid`, `BidRite`.

**Structure**
- Eyebrow → headline → one-sentence standfirst. That triad opens almost every slide:
  `UPDATES` / **People & Organization** / *"New leadership, the organization structure, and how
  performance is set, measured and progressed."*
- Numbered lists use zero-padded ordinals: `01 02 03`.
- Metrics are stated as a big figure plus a lowercase label: **20** *Years of Rite*.
- Trajectories use an arrow: `$865B → $1.18T`, `2006 → 2026`, `New → Design → Build → Test → Deploy`.

**Emoji: never.** Not one appears in 77 slides. Checkmarks are drawn glyphs (`✓`) or icons,
bullets are `•`/`●`. Don't introduce emoji anywhere in Rite work.

**Vibe.** Quietly senior. A partner who has been in the room for twenty years, is not impressed
by hype, and would rather show you the number.

---

## 4 · Visual foundations

### Colour
Five named brand colours, taken verbatim from the deck's colour slide:

| Name | Hex | Role |
| --- | --- | --- |
| Tropical Rainforest | `#006F53` | **Primary.** Buttons, links, active state, key data. |
| Deep Forest | `#06211A` | Darkest surface, section dividers, near-black text on light |
| Signal Mint | `#3DED97` | Accent only — underline rules, highlights, positive deltas, dots |
| Tiber | `#184343` | Second dark surface; hero bands, sidebars |
| Sage | `#9FB4AD` | Muted text on dark, dividers, disabled |

Rules that hold across the deck:
- **A deck or screen runs on at most two backgrounds** — one light (`#F9F9F9`/white) and one dark
  (`#06211A` or `#184343`). Never three.
- **Mint is a signal, not a surface.** It is a 4px rule, a 12px dot, a highlighted word, a chart
  series. It is never a large fill except at very small sizes (a dot, a badge).
- Support accents (`#99ACFF` periwinkle, `#333F70` indigo, `#B88A2E` amber, `#FA5323` ember)
  appear in charts and status only. Purple/blue gradients are **not** part of this brand.
- Greys are true neutrals: `#1A1A1A` `#4A4A4A` `#767676` `#9A9A9A` `#E0E0E0` `#F9F9F9`.
  The green-tinted neutrals (`#EAF6F0` `#CDD9D5` `#E3EAE7`) are used for surfaces and borders.

### Typography
**Poppins is the whole system.** Geometric, open, unfussy — one family, many weights. Weights in
use: 200 (ExtraLight, display only), 300, 400, 500, 600, 700.
- Display and headlines: **700**, tight tracking (`-0.02em`), sentence case.
- A recurring headline device mixes weights in one line: *"Updates from the* **coo***"* —
  light/regular for the run-in, bold for the subject.
- Body: 400 at 1.45 line-height. Secondary body `#4A4A4A`, tertiary `#767676`.
- Eyebrows: 600, 12px, `letter-spacing:.18em`, uppercase.
- **IBM Plex Mono** for figures, IDs, dates, deltas, code — anything you would scan in a column.
- **Georgia** appears only in editorial pull quotes in the deck. Don't use it in product UI.

### Layout
- Slides are 16:9 at 20in (`18288000 × 10287000` EMU). Web app: 248px sidebar, 60px top bar,
  1280px content max, 24px gutters.
- Generous left margin; content starts on a strong left rail and never centres a whole slide's
  text. Big display headings sit at optical-left and are underlined with a mint rule.
- Two-column split (text left, image/illustration right in a rounded card) is the workhorse layout.
- Fixed chrome in the app: sidebar and top bar are fixed; content scrolls under a sticky header.

### Backgrounds
- **Flat colour first.** Deep Forest or Tiber for dark sections; `#F9F9F9` for light.
- **The loop mark used oversized and cropped** as a watermark on dark title slides — set at very
  low contrast (a shade or two off the background), bleeding off the top-right corner.
- **Dotted / dashed arcs** in mint sweep across dark backgrounds with small mint dots along them
  (`assets/illustrations/deco-arc-dotted.png`, `deco-arc-dashed.png`).
- **Flat vector illustrations** — the house style: deep-forest and mint figures, no outlines on
  skin, light grey environment shapes, occasional mint plant. See `assets/illustrations/`.
- Full-bleed photography exists but is rare and always duotoned toward Tiber with the wordmark
  reversed out of it (`assets/logo/logo-usage-photo.png`).
- No noise, no grain, no glass-morphism, no mesh gradients. The one gradient in the brand is the
  3D shading *inside the loop mark itself*.

### Cards
- White (`#FFFFFF`) on `#F9F9F9`; `12px` radius in product UI, `24px` on slides.
- `1px solid #E3EAE7` border **or** `0 4px 12px rgba(6,33,26,.08)` shadow — one or the other,
  rarely both. Slide cards use shadow only; app cards use border only.
- Padding `20–28px`. No coloured left-border accent stripe — that is not a Rite pattern.
- Dark cards on dark backgrounds are `#0E3A2C`/`#184343` with a `rgba(255,255,255,.10)` hairline.

### Elevation & shadow
Shadows are green-tinted (`rgba(6,33,26,…)`), never pure black, and never above `0 24px 56px`.
Inner shadows are used only on inset tracks (progress rails, input wells).

### Interaction states
- **Hover, filled:** darken to `#0E3A2C`. **Press:** darken again to `#06211A`. No scale-down.
- **Hover, ghost/neutral:** `#F2F4F3` fill appears. **Press:** `#E3EAE7`.
- **Hover on dark:** `rgba(255,255,255,.08)` fill. **Press:** `.14`.
- **Hover on a card/row:** border goes `#E3EAE7` → `#CDD9D5`, shadow steps up one level.
  Never lift-and-translate.
- **Focus:** 2px `#006F53` outline at 2px offset (mint on dark). Always visible — this is an
  enterprise tool.
- Links underline on hover at 3px offset; they are not underlined at rest.

### Motion
Quiet and short. `140ms` for control feedback, `200ms` for surfaces, `320ms` for panels,
`480ms` for a page/route change. Easing is `cubic-bezier(.2,0,0,1)`. **No bounce, no spring, no
elastic.** Transitions fade and shift by a few pixels at most; nothing flies in.

### Borders & radii
`0` for full-bleed bands · `4–6px` inputs-in-tables · `8px` controls · `12px` cards ·
`16px` modals · `24px` slide cards & image frames · pill for badges/tags/chips only.
Hairlines are `1px` and `#E3EAE7` on light, `rgba(255,255,255,.10)` on dark.

### Transparency & blur
Used sparingly: modal scrim `rgba(6,33,26,.55)`; sticky headers get
`background:rgba(255,255,255,.72); backdrop-filter:blur(12px)`. Nothing else is translucent.
No frosted cards.

### Imagery colour
Cool and green. Illustrations are deep forest + mint + light grey on white. Photography is
desaturated and pushed toward teal, never warm, never black & white.

---

## 5 · Iconography

**What the source actually uses.** The brand deck draws its icons from the **Microsoft 365 stock
icon library** (the outline set bundled with PowerPoint) — a single-weight, ~2px, rounded-join,
outline style with no fills. They are placed as monochrome glyphs in Tropical Rainforest on light,
or white/mint on dark, typically at 24–48px, often inside a circular or rounded-square mint-tint
plate.

**What was copied in.** Every distinct icon in the deck is in `assets/icons/` as a
transparent PNG at its embedded resolution:
`building` `bolt` `expand` `heart` `medal` `feedback` `wrench` `door` `roots` `handshake-dark`
`gear` `graduation-white` `robot-white` `brain-white` `handshake-white` `globe-white`
`person-white` `target-white`.
They are **rasters** — PowerPoint stores its stock icons as PNG + a shape-only SVG companion, so
no clean vector source exists in the deck.

**⚠️ Substitution to confirm.** For the React application, use **[Lucide](https://lucide.dev)**
(`https://unpkg.com/lucide-static@latest/icons/<name>.svg`, or `lucide-react` in production).
Lucide is the closest CDN match: 24×24 grid, 2px stroke, round caps and joins, no fill — visually
consistent with the deck's Microsoft set. The UI kit and components in this system use Lucide.
**This is a substitution, not the brand's own set — please confirm or supply Rite's icon library.**

**Other glyph conventions in the brand:**
- Checkmarks are the Unicode `✓` in Signal Mint, or a mint circle plate with a white tick.
- List bullets are `•` / `●`, never dashes.
- `·` (middle dot) separates the parts of an eyebrow or a metadata line.
- `→` marks a trajectory (`$865B → $1.18T`). `TL;DR:` is used as an intro token in internal comms.
- **No emoji, ever.**
- The loop mark itself is never used as an icon inside a UI — it is the logo only.

---

## 6 · Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills wrapper so this folder works inside Claude Code.
- `thumbnail.html` — homepage tile.

**Tokens** (`tokens/`) — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` ·
`radius.css` · `elevation.css` · `motion.css` · `semantic.css` · `base.css`

**Guidelines** (`guidelines/`) — foundation specimen cards for the Design System tab:
colours (brand / neutral / semantic / dark), type (display / body / mono / eyebrow), spacing,
radius, elevation, motion, logo, illustration, iconography.

**Components** (`components/`)
- `core/` — `Button` `IconButton` `Badge` `Tag` `Card` `StatTile` `Eyebrow` `Logo`
- `forms/` — `Input` `Select` `Checkbox` `Radio` `Switch` `Textarea` `FieldGroup`
- `data/` — `DataTable` `ProgressBar` `Avatar` `EmptyState`
- `navigation/` — `SideNav` `TopBar` `Tabs` `Breadcrumbs`
- `feedback/` — `Banner` `Modal` `Toast` `Tooltip`

**UI kits** (`ui_kits/`)
- `talent-tracker/` — **RITE Talent Tracker**, a full 9-surface recruitment application built on
  this system: requirements dashboard, 3-tab requirement form, candidate Kanban + table, candidate
  profile, MIS reports, documentation verification, offer initiation, admin access control, and an
  unauthenticated candidate offer portal. RBAC-driven navigation with a live role switcher.
  Built on Rite primitives with the Rite palette (both approved over the spec's AntD +
  Redwood-navy) — see its README.
- `ritesuite/` — the RiteSuite console. `index.html` is the interactive shell
(sign in → overview → any module → back). Screens: `SignIn` · `Overview` · `ConvertRite`
(mapping workspace) · `BidRite` (pipeline) · `ProjectDetail` (engagement). `AppShell.jsx` holds
the sidebar/top-bar chrome and the module nav. See `ui_kits/ritesuite/README.md` for the
provenance warning — the IA is inferred, the styling is exact.

**Slides** (`slides/`) — nine 1280×720 deck layouts lifted from the brand deck's own grammar:
`TitleSlide` · `SectionDivider` · `HeadlineStandfirst` · `MetricRow` · `TwoColumn` ·
`ValuesList` · `BigQuote` · `Timeline` · `ThankYou`. Plain HTML — copy one and replace the copy.

**Templates** (`templates/`) — starting folders a consuming project can copy:
- `rite-deck/RiteDeck.dc.html` — six-slide Rite deck (title, divider, headline grid, metrics,
  quote, closer) at 1280×720.
- `rite-app-screen/RiteAppScreen.dc.html` — the RiteSuite console shell, composed from the
  design system's own `SideNav`, `TopBar`, `StatTile`, `Card` and `DataTable`.

**Assets** (`assets/`) — `logo/` (current marks, usage lockups, logo anatomy, 2006/2013/2019/2024
heritage marks) · `icons/` · `illustrations/` (flat vector set, decorative arcs, world map).

### Intentional additions
Because no component source existed, the component set is a standard enterprise-app inventory
authored to the brand. Two entries are worth calling out explicitly:
- **`Logo`** — a wrapper that picks the right lockup/mark for a given background, so consumers
  never hand-pick a PNG.
- **`Eyebrow`** — the brand's most recurrent text device, promoted to a component so casing and
  tracking stay correct.
