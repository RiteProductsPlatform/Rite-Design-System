# RiteSuite console — UI kit

A high-fidelity construction of the RiteSuite application shell and five core screens,
composed entirely from this design system's component primitives.

## ⚠️ Provenance

**No RiteSuite source code or product screenshots were supplied.** The mounted `rite-theme/`
folder contained only the brand deck, two logo files and two theme screenshots. This kit is
therefore **brand-faithful, not a recreation**:

- Colour, type, spacing, radii, shadows, states and motion are exact — every value comes from
  `styles.css`, which was derived from the deck's brand chapter.
- **Information architecture, screen composition and copy are inferred** from the module
  inventory named in the deck (ConvertRite, BidRite, RevRite, WageRite, LienRite, EquipRite,
  PayWhenPaid, CoWork, Rite Analytics, DiscoveryAI…).

Treat it as a starting point to correct against the real product, not as ground truth.
Where the real product's behaviour is unknown, the kit shows the plainest sensible thing rather
than inventing a novel pattern.

## Screens

| File | Screen | Notes |
| --- | --- | --- |
| `SignIn.jsx` | Sign in | Split layout: Deep Forest brand panel + light form panel |
| `Overview.jsx` | Portfolio overview | Stat row, active engagements table, module grid, activity rail |
| `ConvertRite.jsx` | ConvertRite mapping workspace | Object list, column mapping table, run panel, exception banner |
| `BidRite.jsx` | BidRite pipeline | Filter bar, bid table, stage funnel, detail drawer |
| `ProjectDetail.jsx` | Engagement detail | Tabs, milestone timeline, team, health metrics |

`index.html` mounts them in an interactive shell: sign in → overview → any module → back.

## Composition rules followed

- Every control is a design-system component (`Button`, `DataTable`, `Badge`, `SideNav`…);
  nothing is re-implemented locally.
- Layout-only wrappers are plain divs using `--space-*` tokens.
- The sidebar is always Deep Forest; content is always `--surface-page`.
- Mint appears only as: the sidebar active state, one accent CTA per screen at most, positive
  deltas, and progress fills on dark.
