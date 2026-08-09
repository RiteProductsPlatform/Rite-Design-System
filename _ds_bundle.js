/* @ds-bundle: {"format":4,"namespace":"RiteDesignSystem_277c56","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"StatTile","sourcePath":"components/core/StatTile.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FieldGroup","sourcePath":"components/forms/FieldGroup.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"},{"name":"TopBarSearch","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0be041dc36ec","components/core/Button.jsx":"62651943f97f","components/core/Card.jsx":"2989a51e72b4","components/core/Eyebrow.jsx":"0bd9918824a0","components/core/Icon.jsx":"e0169924e6ed","components/core/IconButton.jsx":"d8816f15700c","components/core/Logo.jsx":"2e3a65e7e879","components/core/StatTile.jsx":"ac07bc6feb8b","components/core/Tag.jsx":"366c47c3ec05","components/data/Avatar.jsx":"f384555a045a","components/data/DataTable.jsx":"3fe500e16160","components/data/EmptyState.jsx":"b138200b405f","components/data/ProgressBar.jsx":"58b98d59b252","components/feedback/Banner.jsx":"c8b2b264f461","components/feedback/Modal.jsx":"a971809e1d13","components/feedback/Toast.jsx":"2b994c777985","components/feedback/Tooltip.jsx":"6a67aa628b77","components/forms/Checkbox.jsx":"2d735f100bda","components/forms/FieldGroup.jsx":"a6ae63588056","components/forms/Input.jsx":"5930643a9c42","components/forms/Radio.jsx":"62ceb7ff11f0","components/forms/Select.jsx":"541006191561","components/forms/Switch.jsx":"3a403a6d4ba0","components/forms/Textarea.jsx":"775aeac5ec3a","components/navigation/Breadcrumbs.jsx":"84340f5bcbaf","components/navigation/SideNav.jsx":"a0531368f34f","components/navigation/Tabs.jsx":"2f20d4d88432","components/navigation/TopBar.jsx":"7aca1a4c45ce","ui_kits/ritesuite/AppShell.jsx":"2c2a92e6789a","ui_kits/ritesuite/BidRite.jsx":"07242a05e5a8","ui_kits/ritesuite/ConvertRite.jsx":"a73a5c261374","ui_kits/ritesuite/Overview.jsx":"98937f74fd8d","ui_kits/ritesuite/ProjectDetail.jsx":"fadaad37241f","ui_kits/ritesuite/SignIn.jsx":"42fff7047620","ui_kits/talent-tracker/Admin.jsx":"f08ef7b6aaeb","ui_kits/talent-tracker/CandidateModal.jsx":"12b625d91ad6","ui_kits/talent-tracker/Candidates.jsx":"374a48114c97","ui_kits/talent-tracker/MISReports.jsx":"a4b5ec631f87","ui_kits/talent-tracker/OfferPortal.jsx":"a572898cbb19","ui_kits/talent-tracker/OffersDocs.jsx":"369f567781f2","ui_kits/talent-tracker/RequirementModal.jsx":"f11e556ccb0f","ui_kits/talent-tracker/Requirements.jsx":"20a2db22f9be","ui_kits/talent-tracker/Shell.jsx":"dd0c7e02e179","ui_kits/talent-tracker/data.js":"6c2410b9ce6d","ui_kits/talent-tracker/rbac.js":"546f91efb177"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RiteDesignSystem_277c56 = window.RiteDesignSystem_277c56 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  padding = 24,
  interactive = false,
  tone = 'default',
  header,
  footer,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("section", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      background: dark ? 'var(--surface-inverse-alt)' : tone === 'subtle' ? 'var(--surface-subtle)' : 'var(--surface-card)',
      border: '1px solid ' + (dark ? 'rgba(255,255,255,.10)' : hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-lg)',
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'none',
      color: dark ? '#FFFFFF' : 'var(--text-primary)',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
      overflow: 'hidden',
      ...style
    }
  }), header && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: `${Math.max(padding - 6, 12)}px ${padding}px`,
      borderBottom: '1px solid ' + (dark ? 'rgba(255,255,255,.10)' : 'var(--border-subtle)')
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: `${Math.max(padding - 8, 10)}px ${padding}px`,
      borderTop: '1px solid ' + (dark ? 'rgba(255,255,255,.10)' : 'var(--border-subtle)'),
      background: dark ? 'transparent' : 'var(--surface-sunken)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'brand',
  style,
  ...rest
}) {
  const color = tone === 'mint' ? 'var(--rite-signal-mint)' : tone === 'muted' ? 'var(--text-tertiary)' : tone === 'inverse' ? 'rgba(255,255,255,.72)' : 'var(--text-brand)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      font: 'var(--weight-semibold) var(--text-xs)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
const cache = typeof window !== 'undefined' && (window.__riteIconCache = window.__riteIconCache || {}) || {};

/**
 * Lucide glyph inlined as SVG so its strokes inherit currentColor.
 * See readme.md > Iconography — Lucide is a flagged substitution for the
 * Microsoft 365 outline set used in the Rite brand deck.
 */
function Icon({
  name,
  size = 20,
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState(() => cache[name] || null);
  React.useEffect(() => {
    let live = true;
    if (cache[name]) {
      setSvg(cache[name]);
      return undefined;
    }
    fetch(CDN + name + '.svg').then(r => r.ok ? r.text() : '').then(t => {
      if (!t) return;
      const clean = t.replace(/width="24"/, 'width="100%"').replace(/height="24"/, 'height="100%"');
      cache[name] = clean;
      if (live) setSvg(clean);
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    dangerouslySetInnerHTML: svg ? {
      __html: svg
    } : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      lineHeight: 0,
      color: 'inherit',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['var(--status-neutral-bg)', 'var(--status-neutral-text)'],
  success: ['var(--status-success-bg)', 'var(--status-success-text)'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning-text)'],
  danger: ['var(--status-danger-bg)', 'var(--status-danger-text)'],
  info: ['var(--status-info-bg)', 'var(--status-info-text)'],
  brand: ['var(--surface-brand)', 'var(--text-on-brand)'],
  mint: ['var(--surface-accent)', 'var(--text-on-accent)']
};
function Badge({
  tone = 'neutral',
  dot = false,
  icon,
  children,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: dot ? '0 10px 0 8px' : '0 10px',
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-pill)',
      font: '500 12px/1 var(--font-sans)',
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: .85
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 32,
    padding: '0 12px',
    font: '500 13px/1 var(--font-sans)',
    gap: 6,
    icon: 16
  },
  md: {
    height: 40,
    padding: '0 16px',
    font: '500 14px/1 var(--font-sans)',
    gap: 8,
    icon: 18
  },
  lg: {
    height: 48,
    padding: '0 24px',
    font: '600 15px/1 var(--font-sans)',
    gap: 10,
    icon: 20
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--interactive-brand)',
    color: 'var(--text-on-brand)',
    border: '1px solid transparent',
    hover: 'var(--interactive-brand-hover)',
    active: 'var(--interactive-brand-active)'
  },
  accent: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-accent)',
    border: '1px solid transparent',
    hover: '#2FD886',
    active: '#1FC073'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)',
    hover: 'var(--interactive-neutral-hover)',
    active: 'var(--interactive-neutral-active)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    border: '1px solid transparent',
    hover: 'var(--interactive-neutral-hover)',
    active: 'var(--interactive-neutral-active)'
  },
  danger: {
    background: 'var(--status-danger)',
    color: '#FFFFFF',
    border: '1px solid transparent',
    hover: '#DB4318',
    active: '#B93711'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [state, setState] = React.useState('rest');
  const off = disabled || loading;
  const bg = off ? 'var(--interactive-disabled-bg)' : state === 'active' ? v.active : state === 'hover' ? v.hover : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: off,
    onMouseEnter: () => !off && setState('hover'),
    onMouseLeave: () => setState('rest'),
    onMouseDown: () => !off && setState('active'),
    onMouseUp: () => !off && setState('hover')
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      font: s.font,
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      flex: '0 0 auto',
      width: fullWidth ? '100%' : undefined,
      background: bg,
      color: off ? 'var(--interactive-disabled-text)' : v.color,
      border: off ? '1px solid transparent' : v.border,
      borderRadius: 'var(--radius-md)',
      cursor: off ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: s.icon,
    style: {
      animation: 'rite-spin 900ms linear infinite'
    }
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 28,
  md: 34,
  lg: 40
};
const GLYPH = {
  sm: 15,
  md: 18,
  lg: 20
};
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  label,
  active = false,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = SIZES[size] || SIZES.md;
  const solid = variant === 'solid';
  const bg = disabled ? 'transparent' : solid ? hover ? 'var(--interactive-brand-hover)' : 'var(--interactive-brand)' : active ? 'var(--surface-subtle)' : hover ? 'var(--interactive-neutral-hover)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      flex: '0 0 auto',
      padding: 0,
      background: bg,
      color: disabled ? 'var(--interactive-disabled-text)' : solid ? 'var(--text-on-brand)' : active ? 'var(--text-brand)' : 'var(--text-secondary)',
      border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: GLYPH[size] || 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = '../../assets/logo/';
function Logo({
  variant = 'lockup',
  on = 'light',
  height = 32,
  base = BASE,
  style,
  ...rest
}) {
  const file = variant === 'mark' ? 'rite-mark.png' : variant === 'wordmark' ? on === 'dark' ? 'rite-wordmark-white.png' : 'rite-wordmark-dark.png' : on === 'dark' ? 'rite-logo-lockup-white.png' : 'rite-logo-lockup.png';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: base + file,
    alt: "Rite"
  }, rest, {
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTile({
  value,
  label,
  delta,
  deltaTone = 'success',
  icon,
  tone = 'default',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  const deltaColor = deltaTone === 'danger' ? 'var(--status-danger)' : deltaTone === 'neutral' ? 'var(--text-tertiary)' : dark ? 'var(--rite-signal-mint)' : 'var(--status-success)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: 20,
      background: dark ? 'transparent' : 'var(--surface-card)',
      border: '1px solid ' + (dark ? 'rgba(255,255,255,.10)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-lg)',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--rite-signal-mint)' : 'var(--text-brand)',
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 32px/1 var(--font-sans)',
      letterSpacing: '-0.02em',
      color: dark ? '#FFFFFF' : 'var(--text-primary)'
    }
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-mono)',
      color: deltaColor
    }
  }, delta)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.3 var(--font-sans)',
      color: dark ? 'var(--text-on-inverse-muted)' : 'var(--text-tertiary)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  onRemove,
  selected = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: onRemove ? '0 6px 0 12px' : '0 12px',
      background: selected ? 'var(--surface-subtle)' : hover ? 'var(--interactive-neutral-hover)' : 'var(--surface-card)',
      color: selected ? 'var(--text-brand)' : 'var(--text-secondary)',
      border: '1px solid ' + (selected ? 'var(--border-brand)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-pill)',
      font: '500 13px/1 var(--font-sans)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 22,
  sm: 28,
  md: 34,
  lg: 44
};
function Avatar({
  name = '',
  src,
  size = 'md',
  tone = 'brand',
  style,
  ...rest
}) {
  const box = SIZES[size] || SIZES.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const bg = tone === 'mint' ? 'var(--surface-accent)' : tone === 'muted' ? 'var(--surface-subtle)' : 'var(--surface-brand)';
  const fg = tone === 'brand' ? '#FFFFFF' : 'var(--rite-deep-forest)';
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: box,
      height: box,
      borderRadius: '50%',
      overflow: 'hidden',
      background: src ? 'var(--surface-sunken)' : bg,
      color: fg,
      font: '600 ' + Math.round(box * 0.38) + 'px/1 var(--font-sans)',
      letterSpacing: '0.02em',
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  dense = false,
  sortKey,
  sortDir = 'asc',
  onSort,
  empty,
  style,
  ...rest
}) {
  const [hoverRow, setHoverRow] = React.useState(null);
  const padY = dense ? 9 : 13;
  if (!rows.length && empty) return /*#__PURE__*/React.createElement("div", {
    style: style
  }, empty);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width: '100%',
      overflowX: 'auto',
      ...style
    }
  }), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: '400 14px/1.4 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    onClick: () => c.sortable && onSort && onSort(c.key),
    style: {
      textAlign: c.align || 'left',
      padding: `10px 16px`,
      whiteSpace: 'nowrap',
      font: '600 11px/1.2 var(--font-sans)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      background: 'var(--surface-sunken)',
      borderBottom: '1px solid var(--border-subtle)',
      width: c.width,
      cursor: c.sortable ? 'pointer' : 'default',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, c.header, c.sortable && sortKey === c.key && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sortDir === 'asc' ? 'arrow-up' : 'arrow-down',
    size: 12
  })))))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id != null ? r.id : i,
    onMouseEnter: () => setHoverRow(i),
    onMouseLeave: () => setHoverRow(null),
    onClick: () => onRowClick && onRowClick(r),
    style: {
      background: hoverRow === i ? 'var(--surface-subtle)' : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background-color var(--duration-fast) var(--ease-standard)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: `${padY}px 16px`,
      borderBottom: '1px solid var(--border-subtle)',
      color: c.muted ? 'var(--text-tertiary)' : 'var(--text-primary)',
      fontFamily: c.mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontSize: c.mono ? 13 : 14,
      whiteSpace: c.wrap ? 'normal' : 'nowrap'
    }
  }, c.render ? c.render(r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  illustration,
  compact = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 10,
      padding: compact ? '32px 24px' : '56px 32px',
      ...style
    }
  }), illustration ? /*#__PURE__*/React.createElement("img", {
    src: illustration,
    alt: "",
    style: {
      width: compact ? 120 : 176,
      height: 'auto',
      marginBottom: 6
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--surface-subtle)',
      color: 'var(--text-brand)',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 16px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)',
      maxWidth: 380
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'brand',
  label,
  showValue = false,
  size = 'md',
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = tone === 'mint' ? 'var(--rite-signal-mint)' : tone === 'warning' ? 'var(--status-warning)' : tone === 'danger' ? 'var(--status-danger)' : 'var(--interactive-brand)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%',
      ...style
    }
  }), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.3 var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: size === 'sm' ? 4 : 8,
      width: '100%',
      background: 'var(--chart-track)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'inset 0 1px 2px rgba(6,33,26,.06)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: pct + '%',
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--duration-slow) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: ['var(--status-info-bg)', 'var(--status-info)', 'var(--status-info-text)', 'info'],
  success: ['var(--status-success-bg)', 'var(--status-success)', 'var(--status-success-text)', 'circle-check'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning)', 'var(--status-warning-text)', 'triangle-alert'],
  danger: ['var(--status-danger-bg)', 'var(--status-danger)', 'var(--status-danger-text)', 'octagon-alert']
};
function Banner({
  tone = 'info',
  title,
  children,
  action,
  onDismiss,
  style,
  ...rest
}) {
  const [bg, accent, fg, defIcon] = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '14px 16px',
      background: bg,
      border: '1px solid ' + accent + '33',
      borderRadius: 'var(--radius-md)',
      color: fg,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      display: 'flex',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: defIcon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      font: '600 14px/1.35 var(--font-sans)'
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      opacity: .92
    }
  }, children)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, action), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      background: 'none',
      border: 0,
      color: 'inherit',
      opacity: .6,
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WIDTHS = {
  sm: 400,
  md: 540,
  lg: 720
};
function Modal({
  open = false,
  title,
  description,
  size = 'md',
  onClose,
  footer,
  children,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'var(--surface-overlay)',
      animation: 'rite-fade var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest, {
    style: {
      width: '100%',
      maxWidth: WIDTHS[size] || WIDTHS.md,
      maxHeight: '86vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      ...style
    }
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      padding: '20px 24px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 18px/1.3 var(--font-sans)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      padding: 4,
      margin: -4,
      cursor: 'pointer',
      color: 'var(--text-tertiary)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 20px',
      overflowY: 'auto',
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '14px 24px',
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: ['var(--rite-signal-mint)', 'circle-check'],
  info: ['var(--rite-sage)', 'info'],
  warning: ['var(--status-warning)', 'triangle-alert'],
  danger: ['var(--status-danger)', 'octagon-alert']
};
function Toast({
  tone = 'success',
  title,
  children,
  action,
  onDismiss,
  style,
  ...rest
}) {
  const [accent, icon] = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      minWidth: 300,
      maxWidth: 420,
      padding: '14px 16px',
      background: 'var(--rite-deep-forest)',
      color: '#FFFFFF',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid rgba(255,255,255,.10)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      display: 'flex',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      font: '600 14px/1.35 var(--font-sans)'
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-on-inverse-muted)'
    }
  }, children)), action, onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      background: 'none',
      border: 0,
      color: 'rgba(255,255,255,.6)',
      cursor: 'pointer',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 60,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      background: 'var(--rite-deep-forest)',
      color: '#FFFFFF',
      font: '400 12px/1.35 var(--font-sans)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": indeterminate ? 'mixed' : checked,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onKeyDown: e => {
      if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        onChange && onChange(!checked);
      }
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      flex: '0 0 auto',
      background: disabled ? 'var(--interactive-disabled-bg)' : on ? 'var(--interactive-brand)' : 'var(--surface-card)',
      border: '1px solid ' + (disabled ? 'var(--border-default)' : on ? 'var(--interactive-brand)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-xs)',
      color: '#FFFFFF',
      transition: 'var(--transition-control)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 13
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  }) : null), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.3 var(--font-sans)',
      color: disabled ? 'var(--interactive-disabled-text)' : 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FieldGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FieldGroup({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: '500 13px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-danger)',
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.35 var(--font-sans)',
      color: error ? 'var(--status-danger)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { FieldGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FieldGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function inputShell({
  invalid,
  focused,
  disabled,
  size
}) {
  return {
    width: '100%',
    minHeight: size === 'sm' ? 32 : 40,
    padding: size === 'sm' ? '6px 10px' : '9px 12px',
    font: '400 14px/1.4 var(--font-sans)',
    color: disabled ? 'var(--interactive-disabled-text)' : 'var(--text-primary)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
    border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--border-brand)' : 'var(--border-default)'),
    borderRadius: 'var(--radius-md)',
    boxShadow: focused ? invalid ? 'var(--ring-danger)' : 'var(--ring-focus)' : 'none',
    outline: 'none',
    transition: 'var(--transition-control)'
  };
}
function Input({
  icon,
  suffix,
  invalid = false,
  disabled = false,
  size = 'md',
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const shell = inputShell({
    invalid,
    focused,
    disabled,
    size
  });
  if (!icon && !suffix) {
    return /*#__PURE__*/React.createElement("input", _extends({
      disabled: disabled,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    }, rest, {
      style: {
        ...shell,
        ...style
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...shell,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: size === 'sm' ? '0 10px' : '0 12px',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'inherit',
      color: 'inherit',
      height: size === 'sm' ? 30 : 38
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  disabled = false,
  label,
  description,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: description ? 'flex-start' : 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    role: "radio",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && onChange && onChange(true),
    onKeyDown: e => {
      if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        onChange && onChange(true);
      }
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: description ? 2 : 0,
      background: 'var(--surface-card)',
      border: '1px solid ' + (disabled ? 'var(--border-default)' : checked ? 'var(--interactive-brand)' : 'var(--border-strong)'),
      borderRadius: '50%',
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: disabled ? 'var(--interactive-disabled-text)' : 'var(--interactive-brand)'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.3 var(--font-sans)',
      color: disabled ? 'var(--interactive-disabled-text)' : 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function selectShell({
  invalid,
  focused,
  disabled,
  size
}) {
  return {
    width: '100%',
    minHeight: size === 'sm' ? 32 : 40,
    padding: size === 'sm' ? '6px 10px' : '9px 12px',
    font: '400 14px/1.4 var(--font-sans)',
    color: disabled ? 'var(--interactive-disabled-text)' : 'var(--text-primary)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
    border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--border-brand)' : 'var(--border-default)'),
    borderRadius: 'var(--radius-md)',
    boxShadow: focused ? invalid ? 'var(--ring-danger)' : 'var(--ring-focus)' : 'none',
    outline: 'none',
    transition: 'var(--transition-control)'
  };
}
function Select({
  options = [],
  placeholder,
  invalid = false,
  disabled = false,
  size = 'md',
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest, {
    style: {
      ...selectShell({
        invalid,
        focused,
        disabled,
        size
      }),
      appearance: 'none',
      paddingRight: 34,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 11,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-tertiary)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onKeyDown: e => {
      if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        onChange && onChange(!checked);
      }
    },
    style: {
      position: 'relative',
      width: 38,
      height: 22,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: disabled ? 'var(--interactive-disabled-bg)' : checked ? 'var(--interactive-brand)' : 'var(--border-strong)',
      transition: 'background-color var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#FFFFFF',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.3 var(--font-sans)',
      color: disabled ? 'var(--interactive-disabled-text)' : 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function textareaShell({
  invalid,
  focused,
  disabled,
  size
}) {
  return {
    width: '100%',
    minHeight: size === 'sm' ? 32 : 40,
    padding: size === 'sm' ? '6px 10px' : '9px 12px',
    font: '400 14px/1.4 var(--font-sans)',
    color: disabled ? 'var(--interactive-disabled-text)' : 'var(--text-primary)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
    border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--border-brand)' : 'var(--border-default)'),
    borderRadius: 'var(--radius-md)',
    boxShadow: focused ? invalid ? 'var(--ring-danger)' : 'var(--ring-focus)' : 'none',
    outline: 'none',
    transition: 'var(--transition-control)'
  };
}
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest, {
    style: {
      ...textareaShell({
        invalid,
        focused,
        disabled,
        size: 'md'
      }),
      resize: 'vertical',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb"
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      ...style
    }
  }), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.id || it.label
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: last,
      onClick: () => !last && onNavigate && onNavigate(it.id),
      style: {
        background: 'none',
        border: 0,
        padding: 0,
        cursor: last ? 'default' : 'pointer',
        font: (last ? '500' : '400') + ' 12px/1.2 var(--font-sans)',
        color: last ? 'var(--text-secondary)' : 'var(--text-tertiary)'
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--border-strong)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 13
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Item({
  item,
  active,
  collapsed,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  const on = active === item.id;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSelect && onSelect(item.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    title: collapsed ? item.label : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: collapsed ? '10px 0' : '10px 12px',
      justifyContent: collapsed ? 'center' : 'flex-start',
      background: on ? 'rgba(61,237,151,.12)' : hover ? 'rgba(255,255,255,.08)' : 'transparent',
      color: on ? 'var(--rite-signal-mint)' : 'rgba(255,255,255,.78)',
      border: 0,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textAlign: 'left',
      font: (on ? '500' : '400') + ' 14px/1.2 var(--font-sans)',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 18
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, item.label), !collapsed && item.count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      color: on ? 'var(--rite-signal-mint)' : 'var(--text-on-inverse-muted)'
    }
  }, item.count));
}
function SideNav({
  sections = [],
  active,
  onSelect,
  collapsed = false,
  header,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: collapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width)',
      flex: '0 0 auto',
      height: '100%',
      background: 'var(--rite-deep-forest)',
      borderRight: '1px solid rgba(255,255,255,.08)',
      transition: 'width var(--duration-base) var(--ease-standard)',
      ...style
    }
  }), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: collapsed ? '18px 8px' : '18px 16px',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: collapsed ? '12px 8px' : '12px'
    }
  }, sections.map((sec, i) => /*#__PURE__*/React.createElement("div", {
    key: sec.label || i,
    style: {
      marginBottom: 18
    }
  }, sec.label && !collapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.38)',
      padding: '6px 12px 8px'
    }
  }, sec.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, sec.items.map(it => /*#__PURE__*/React.createElement(Item, {
    key: it.id,
    item: it,
    active: active,
    collapsed: collapsed,
    onSelect: onSelect
  })))))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: collapsed ? '12px 8px' : '12px 16px',
      borderTop: '1px solid rgba(255,255,255,.08)'
    }
  }, footer));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  active,
  onSelect,
  variant = 'underline',
  style,
  ...rest
}) {
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: pill ? 4 : 24,
      padding: pill ? 4 : 0,
      background: pill ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: pill ? 'var(--radius-md)' : 0,
      borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
      width: pill ? 'fit-content' : '100%',
      ...style
    }
  }), items.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onSelect && onSelect(t.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: pill ? '6px 14px' : '0 0 12px',
        background: pill && on ? 'var(--surface-card)' : 'transparent',
        boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
        color: on ? pill ? 'var(--text-primary)' : 'var(--text-brand)' : 'var(--text-tertiary)',
        border: 0,
        borderBottom: pill ? 'none' : '2px solid ' + (on ? 'var(--interactive-brand)' : 'transparent'),
        borderRadius: pill ? 'var(--radius-sm)' : 0,
        marginBottom: pill ? 0 : -1,
        font: (on ? '600' : '500') + ' 14px/1.2 var(--font-sans)',
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 16
    }), t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 11px/1 var(--font-mono)',
        color: on ? 'var(--text-brand)' : 'var(--text-tertiary)',
        background: 'var(--surface-subtle)',
        padding: '3px 6px',
        borderRadius: 'var(--radius-pill)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopBar({
  title,
  eyebrow,
  breadcrumbs,
  actions,
  sticky = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      minHeight: 'var(--topbar-height)',
      padding: '0 24px',
      background: 'rgba(255,255,255,.72)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 20,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 148,
      flex: '1 1 auto'
    }
  }, breadcrumbs || eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '600 17px/1.25 var(--font-sans)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: '0 1 auto',
      minWidth: 0
    }
  }, actions));
}
function TopBarSearch({
  placeholder = 'Search',
  width = 260,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: '0 1 auto',
      width,
      minWidth: 44,
      height: 34,
      padding: '0 12px',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 15
  })), /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      background: 'transparent',
      outline: 'none',
      font: '400 13px/1 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  })));
}
Object.assign(__ds_scope, { TopBar, TopBarSearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ritesuite/AppShell.jsx
try { (() => {
const {
  SideNav,
  TopBar,
  TopBarSearch,
  IconButton,
  Avatar,
  Logo,
  Button
} = window.RiteDS;
const NAV = [{
  label: 'Workspace',
  items: [{
    id: 'overview',
    label: 'Overview',
    icon: 'layout-dashboard'
  }, {
    id: 'projects',
    label: 'Engagements',
    icon: 'briefcase',
    count: 18
  }]
}, {
  label: 'RiteSuite',
  items: [{
    id: 'convertrite',
    label: 'ConvertRite',
    icon: 'database',
    count: 6
  }, {
    id: 'bidrite',
    label: 'BidRite',
    icon: 'file-text',
    count: 12
  }, {
    id: 'revrite',
    label: 'RevRite',
    icon: 'receipt'
  }, {
    id: 'wagerite',
    label: 'WageRite',
    icon: 'wallet'
  }, {
    id: 'lienrite',
    label: 'LienRite',
    icon: 'file-check'
  }, {
    id: 'cowork',
    label: 'CoWork',
    icon: 'users'
  }]
}, {
  label: 'Insight',
  items: [{
    id: 'analytics',
    label: 'Rite Analytics',
    icon: 'chart-column'
  }, {
    id: 'discovery',
    label: 'DiscoveryAI',
    icon: 'sparkles'
  }]
}];
function AppShell({
  view,
  onNavigate,
  title,
  eyebrow,
  breadcrumbs,
  actions,
  children
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--surface-page)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SideNav, {
    sections: NAV,
    active: view,
    onSelect: onNavigate,
    collapsed: collapsed,
    header: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: collapsed ? 'mark' : 'lockup',
      on: "dark",
      height: collapsed ? 24 : 24,
      base: "../../assets/logo/"
    })),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        justifyContent: collapsed ? 'center' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Rob Brown",
      size: "sm",
      tone: "mint"
    }), !collapsed && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: '500 13px/1.2 var(--font-sans)',
        color: '#FFFFFF',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, "Rob Brown"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: '400 11px/1.3 var(--font-sans)',
        color: 'var(--rite-sage)'
      }
    }, "Delivery lead")))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    eyebrow: eyebrow,
    breadcrumbs: breadcrumbs,
    title: title,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      icon: collapsed ? 'panel-left-open' : 'panel-left-close',
      label: "Toggle sidebar",
      onClick: () => setCollapsed(!collapsed)
    }), /*#__PURE__*/React.createElement(TopBarSearch, {
      width: 170,
      placeholder: "Search"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Notifications"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "circle-help",
      label: "Help"
    }), actions)
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '24px'
    }
  }, children)));
}
function PageSection({
  title,
  action,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, (title || action) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 16px/1.3 var(--font-sans)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, title), action), children);
}
Object.assign(window, {
  AppShell,
  PageSection,
  RITE_NAV: NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ritesuite/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ritesuite/BidRite.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  IconButton,
  DataTable,
  Tag,
  Select,
  Input,
  StatTile,
  Avatar,
  Icon,
  Eyebrow,
  ProgressBar
} = window.RiteDS;
const BIDS = [{
  id: 'BID-2411',
  client: 'Halvorsen EPC',
  scope: 'Offshore platform · Phase 2',
  value: '$12.4M',
  stage: 'Estimating',
  tone: 'info',
  owner: 'S. Kanala',
  due: '02-SEP-2026',
  win: 62
}, {
  id: 'BID-2409',
  client: 'Sunbelt Energy',
  scope: 'Pipeline integrity programme',
  value: '$8.9M',
  stage: 'Submitted',
  tone: 'neutral',
  owner: 'K. Mannuru',
  due: '18-AUG-2026',
  win: 48
}, {
  id: 'BID-2404',
  client: 'Cianbro',
  scope: 'Marine terminal rebuild',
  value: '$6.1M',
  stage: 'Negotiation',
  tone: 'warning',
  owner: 'Rob Brown',
  due: '25-AUG-2026',
  win: 74
}, {
  id: 'BID-2398',
  client: 'Delta Marine',
  scope: 'Drydock modernisation',
  value: '$5.3M',
  stage: 'Won',
  tone: 'success',
  owner: 'M. Gandham',
  due: 'Closed',
  win: 100
}, {
  id: 'BID-2390',
  client: 'Northline Health',
  scope: 'Campus expansion MEP',
  value: '$4.8M',
  stage: 'Qualifying',
  tone: 'info',
  owner: 'R. Chigurupati',
  due: '11-SEP-2026',
  win: 31
}, {
  id: 'BID-2381',
  client: 'Ferrovia Group',
  scope: 'Rail depot fit-out',
  value: '$3.7M',
  stage: 'Lost',
  tone: 'danger',
  owner: 'S. Kanala',
  due: 'Closed',
  win: 0
}];
const FUNNEL = [{
  stage: 'Qualifying',
  n: 5,
  value: '$18.2M',
  pct: 100
}, {
  stage: 'Estimating',
  n: 4,
  value: '$14.9M',
  pct: 78
}, {
  stage: 'Submitted',
  n: 2,
  value: '$9.4M',
  pct: 51
}, {
  stage: 'Negotiation',
  n: 1,
  value: '$6.1M',
  pct: 33
}, {
  stage: 'Won',
  n: 1,
  value: '$5.3M',
  pct: 28
}];
function BidRite() {
  const [filter, setFilter] = React.useState('All');
  const [open, setOpen] = React.useState(null);
  const stages = ['All', 'Qualifying', 'Estimating', 'Submitted', 'Negotiation', 'Won'];
  const rows = filter === 'All' ? BIDS : BIDS.filter(b => b.stage === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 'var(--content-max)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "12",
    label: "Bids in flight",
    icon: "file-text"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "$41.2M",
    label: "Pipeline value",
    delta: "+8.4%",
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "38%",
    label: "Win rate \xB7 rolling 12m",
    delta: "+3 pts",
    icon: "target"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "9 days",
    label: "Median turnaround",
    delta: "\u22122 days",
    icon: "clock"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: open ? 'minmax(0,1fr) 320px' : 'minmax(0,1fr) 260px',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search bids",
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, stages.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: filter === s,
    onClick: () => setFilter(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    placeholder: "This quarter",
    options: [{
      value: 'y',
      label: 'This year'
    }],
    style: {
      width: 150
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "plus"
  }, "New bid")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: r => setOpen(r),
    sortKey: "value",
    sortDir: "desc",
    onSort: () => {},
    columns: [{
      key: 'id',
      header: 'Bid',
      mono: true,
      width: 96
    }, {
      key: 'client',
      header: 'Client',
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 14px/1.2 var(--font-sans)'
        }
      }, r.client), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '400 12px/1.2 var(--font-sans)',
          color: 'var(--text-tertiary)'
        }
      }, r.scope))
    }, {
      key: 'value',
      header: 'Value',
      align: 'right',
      mono: true
    }, {
      key: 'win',
      header: 'Win prob.',
      align: 'right',
      width: 110,
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 13px/1 var(--font-mono)',
          color: r.win >= 60 ? 'var(--status-success)' : r.win === 0 ? 'var(--text-disabled)' : 'var(--text-secondary)'
        }
      }, r.win, "%")
    }, {
      key: 'due',
      header: 'Due',
      mono: true,
      muted: true
    }, {
      key: 'owner',
      header: 'Owner',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.owner,
        size: "xs"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-secondary)'
        }
      }, r.owner))
    }, {
      key: 'stage',
      header: 'Stage',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.stage)
    }],
    rows: rows
  }))), open ? /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-mono)'
      }
    }, open.id), /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Close",
      onClick: () => setOpen(null)
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, open.stage), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 18px/1.25 var(--font-sans)',
      letterSpacing: '-0.01em'
    }
  }, open.client), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.45 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, open.scope)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      paddingTop: 14,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, [['Value', open.value], ['Win prob.', open.win + '%'], ['Due', open.due], ['Owner', open.owner]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.2 var(--font-mono)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 14,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Checklist"), [['Scope confirmed', true], ['Cost model built', true], ['Risk review', open.win > 50], ['Approval to submit', open.stage === 'Submitted' || open.stage === 'Won']].map(([l, done]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '400 13px/1.3 var(--font-sans)',
      color: done ? 'var(--text-primary)' : 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: done ? 'var(--status-success)' : 'var(--border-strong)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: done ? 'circle-check' : 'circle',
    size: 15
  })), l))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "sm",
    iconAfter: "arrow-right"
  }, "Open bid workspace"))) : /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    header: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-sans)'
      }
    }, "Pipeline")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, FUNNEL.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.stage,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.2 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, f.stage), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.2 var(--font-mono)'
    }
  }, f.value)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: f.pct,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px/1.2 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, f.n, " bid", f.n > 1 ? 's' : '')))))));
}
Object.assign(window, {
  BidRite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ritesuite/BidRite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ritesuite/ConvertRite.jsx
try { (() => {
const {
  Card,
  Tabs,
  Badge,
  Button,
  IconButton,
  DataTable,
  Select,
  Input,
  ProgressBar,
  Banner,
  Modal,
  Toast,
  Tooltip,
  Icon,
  Checkbox,
  EmptyState,
  Eyebrow
} = window.RiteDS;
const OBJECTS = [{
  id: 1,
  name: 'Worker',
  module: 'HCM',
  src: 46210,
  loaded: 46210,
  err: 0,
  status: 'Loaded',
  tone: 'success'
}, {
  id: 2,
  name: 'Assignment',
  module: 'HCM',
  src: 51004,
  loaded: 38220,
  err: 0,
  status: 'Running',
  tone: 'info'
}, {
  id: 3,
  name: 'Salary',
  module: 'HCM',
  src: 12880,
  loaded: 12866,
  err: 14,
  status: '14 errors',
  tone: 'danger'
}, {
  id: 4,
  name: 'Cost centre',
  module: 'GL',
  src: 3102,
  loaded: 0,
  err: 0,
  status: 'Queued',
  tone: 'neutral'
}, {
  id: 5,
  name: 'Supplier',
  module: 'AP',
  src: 8940,
  loaded: 8940,
  err: 0,
  status: 'Loaded',
  tone: 'success'
}, {
  id: 6,
  name: 'Invoice header',
  module: 'AP',
  src: 121004,
  loaded: 0,
  err: 0,
  status: 'Not started',
  tone: 'neutral'
}];
const MAPPING = [{
  id: 1,
  target: 'PersonNumber',
  type: 'VARCHAR2(30)',
  req: true,
  source: 'EMP_ID',
  rule: 'Direct',
  conf: 100
}, {
  id: 2,
  target: 'LegalEmployerName',
  type: 'VARCHAR2(240)',
  req: true,
  source: 'LEGAL_ENTITY',
  rule: 'Lookup · LE_XREF',
  conf: 98
}, {
  id: 3,
  target: 'DateOfBirth',
  type: 'DATE',
  req: true,
  source: 'DOB',
  rule: 'Format DD-MON-YYYY',
  conf: 100
}, {
  id: 4,
  target: 'HireDate',
  type: 'DATE',
  req: true,
  source: 'ORIG_HIRE_DT',
  rule: 'Direct',
  conf: 100
}, {
  id: 5,
  target: 'NationalIdentifier',
  type: 'VARCHAR2(30)',
  req: false,
  source: 'SSN',
  rule: 'Mask · last 4',
  conf: 87
}, {
  id: 6,
  target: 'PayrollName',
  type: 'VARCHAR2(80)',
  req: true,
  source: '—',
  rule: 'Unmapped',
  conf: 0
}, {
  id: 7,
  target: 'GradeCode',
  type: 'VARCHAR2(30)',
  req: false,
  source: 'JOB_GRADE',
  rule: 'Lookup · GRADE_XREF',
  conf: 72
}];
function ConvertRite() {
  const [tab, setTab] = React.useState('mapping');
  const [selected, setSelected] = React.useState(1);
  const [confirm, setConfirm] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const obj = OBJECTS.find(o => o.id === selected) || OBJECTS[0];
  React.useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(false), 4200);
    return () => clearTimeout(t);
  }, [toast]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 'var(--content-max)'
    }
  }, obj.err > 0 && /*#__PURE__*/React.createElement(Banner, {
    tone: "danger",
    title: obj.err + ' rows failed validation on ' + obj.name,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "Open exceptions")
  }, "Fix the source values or map them to a default before re-running this object."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '288px minmax(0,1fr)',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-sans)'
      }
    }, "Objects"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "plus",
      label: "Add object"
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, OBJECTS.map(o => {
    const on = o.id === selected;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      type: "button",
      onClick: () => setSelected(o.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        padding: '12px 14px',
        textAlign: 'left',
        background: on ? 'var(--surface-subtle)' : 'transparent',
        border: 0,
        borderLeft: '2px solid ' + (on ? 'var(--interactive-brand)' : 'transparent'),
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: (on ? '600' : '500') + ' 13px/1.2 var(--font-sans)',
        color: on ? 'var(--text-brand)' : 'var(--text-primary)'
      }
    }, o.name), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 11px/1 var(--font-mono)',
        color: 'var(--text-tertiary)'
      }
    }, o.module)), /*#__PURE__*/React.createElement(ProgressBar, {
      value: o.loaded,
      max: o.src,
      size: "sm",
      tone: o.err ? 'danger' : 'brand'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 11px/1 var(--font-mono)',
        color: 'var(--text-tertiary)'
      }
    }, o.loaded.toLocaleString(), " / ", o.src.toLocaleString()), /*#__PURE__*/React.createElement(Badge, {
      tone: o.tone,
      dot: true
    }, o.status)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Mock 4 \xB7 DEV20 \u2192 TEST04"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 22px/1.2 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, obj.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "download"
  }, "Export mapping"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "clipboard-check"
  }, "Validate"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "play",
    onClick: () => setConfirm(true)
  }, "Run load"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginTop: 20,
      paddingTop: 18,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, [['Source records', obj.src.toLocaleString()], ['Loaded', obj.loaded.toLocaleString()], ['Exceptions', String(obj.err)], ['Last run', '21-AUG 04:12']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 18px/1.2 var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'mapping',
      label: 'Column mapping',
      count: MAPPING.length
    }, {
      id: 'rules',
      label: 'Transform rules'
    }, {
      id: 'exceptions',
      label: 'Exceptions',
      count: obj.err
    }, {
      id: 'log',
      label: 'Run log'
    }],
    active: tab,
    onSelect: setTab
  }), tab === 'mapping' && /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-subtle)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Filter target columns",
    style: {
      width: 220
    }
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    placeholder: "All statuses",
    options: [{
      value: 'u',
      label: 'Unmapped only'
    }, {
      value: 'l',
      label: 'Low confidence'
    }],
    style: {
      width: 170
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Required only",
    checked: false,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Match by name and data type"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "wand-sparkles",
    onClick: () => setToast(true)
  }, "Auto-map"))), /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: 'target',
      header: 'Target column',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 13px/1.2 var(--font-mono)'
        }
      }, r.target), r.req && /*#__PURE__*/React.createElement("span", {
        title: "Required",
        style: {
          color: 'var(--status-danger)',
          font: '600 12px/1 var(--font-sans)'
        }
      }, "*"))
    }, {
      key: 'type',
      header: 'Type',
      mono: true,
      muted: true
    }, {
      key: 'source',
      header: 'Source field',
      mono: true,
      render: r => r.source === '—' ? /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-disabled)'
        }
      }, "\u2014") : /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 13px/1.2 var(--font-mono)'
        }
      }, r.source)
    }, {
      key: 'rule',
      header: 'Rule',
      muted: true
    }, {
      key: 'conf',
      header: 'Confidence',
      align: 'right',
      width: 150,
      render: r => r.conf === 0 ? /*#__PURE__*/React.createElement(Badge, {
        tone: "danger"
      }, "Unmapped") : /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement(ProgressBar, {
        value: r.conf,
        size: "sm",
        tone: r.conf < 80 ? 'warning' : 'brand',
        style: {
          width: 64
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 12px/1 var(--font-mono)',
          color: 'var(--text-tertiary)',
          width: 34,
          textAlign: 'right'
        }
      }, r.conf, "%"))
    }],
    rows: MAPPING,
    onRowClick: () => {}
  })), tab === 'rules' && /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "function-square",
    title: "No custom transform rules",
    description: "Everything on this object uses direct mapping or a shared cross-reference table.",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "plus"
    }, "Add a rule")
  })), tab === 'exceptions' && /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, obj.err ? /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: 'row',
      header: 'Row',
      mono: true,
      width: 90
    }, {
      key: 'field',
      header: 'Field',
      mono: true
    }, {
      key: 'value',
      header: 'Source value',
      mono: true,
      muted: true
    }, {
      key: 'msg',
      header: 'Message',
      wrap: true
    }],
    rows: [{
      id: 1,
      row: '4,102',
      field: 'SALARY_BASIS',
      value: 'BIWKLY',
      msg: 'Value not present in lookup SALARY_BASIS_XREF'
    }, {
      id: 2,
      row: '4,880',
      field: 'EFFECTIVE_DT',
      value: '00-00-0000',
      msg: 'Not a valid date'
    }, {
      id: 3,
      row: '5,331',
      field: 'AMOUNT',
      value: '-1200.00',
      msg: 'Negative amount not permitted on a base salary record'
    }]
  }) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "circle-check",
    title: "No exceptions",
    description: "Every row passed validation on the last run."
  })), tab === 'log' && /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      font: '400 12px/1.9 var(--font-mono)',
      color: 'var(--text-secondary)',
      whiteSpace: 'pre-wrap'
    }
  }, `04:12:08  START   object=WORKER mode=FULL target=TEST04
04:12:09  READ    46,210 rows from DEV20.STG_WORKER
04:12:31  VALIDATE  46,210 passed · 0 failed
04:13:55  LOAD    46,210 rows → HCM_WORKER
04:16:20  DONE    duration 4m 12s`)))), /*#__PURE__*/React.createElement(Modal, {
    open: confirm,
    onClose: () => setConfirm(false),
    size: "sm",
    title: 'Run full load for ' + obj.name + '?',
    description: "This truncates the target table before loading.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setConfirm(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => {
        setConfirm(false);
        setToast(true);
      }
    }, "Run load"))
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, obj.src.toLocaleString(), " source records will replace everything currently in TEST04.")), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: "Run queued",
    onDismiss: () => setToast(false)
  }, obj.name, " will start in about a minute.")));
}
Object.assign(window, {
  ConvertRite
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ritesuite/ConvertRite.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ritesuite/Overview.jsx
try { (() => {
const {
  Card,
  StatTile,
  Badge,
  Button,
  DataTable,
  Avatar,
  ProgressBar,
  Eyebrow,
  Icon,
  Banner
} = window.RiteDS;
const ENGAGEMENTS = [{
  id: 1,
  client: 'Cianbro',
  scope: 'HCM + Payroll',
  phase: 'Mock 4',
  health: 'On track',
  tone: 'success',
  lead: 'Rob Brown',
  pct: 78,
  go: '12-OCT-2026'
}, {
  id: 2,
  client: 'Sunbelt Energy',
  scope: 'ERP Financials',
  phase: 'CRP 2',
  health: 'At risk',
  tone: 'warning',
  lead: 'K. Mannuru',
  pct: 41,
  go: '04-FEB-2027'
}, {
  id: 3,
  client: 'Halvorsen EPC',
  scope: 'Projects + BidRite',
  phase: 'Design',
  health: 'On track',
  tone: 'success',
  lead: 'S. Kanala',
  pct: 22,
  go: '18-MAY-2027'
}, {
  id: 4,
  client: 'Northline Health',
  scope: 'HCM Redwood',
  phase: 'Cutover',
  health: 'Escalated',
  tone: 'danger',
  lead: 'M. Gandham',
  pct: 94,
  go: '29-AUG-2026'
}, {
  id: 5,
  client: 'Delta Marine',
  scope: 'AMS · Managed',
  phase: 'Steady state',
  health: 'On track',
  tone: 'success',
  lead: 'R. Chigurupati',
  pct: 100,
  go: 'Live'
}];
const MODULES = [{
  name: 'ConvertRite',
  icon: 'database',
  line: '6 active conversions',
  metric: '115,196',
  metricLabel: 'records this week'
}, {
  name: 'BidRite',
  icon: 'file-text',
  line: '12 bids in flight',
  metric: '$41.2M',
  metricLabel: 'pipeline value'
}, {
  name: 'RevRite',
  icon: 'receipt',
  line: 'Opportunity-to-cash',
  metric: '99.1%',
  metricLabel: 'invoice accuracy'
}, {
  name: 'WageRite',
  icon: 'wallet',
  line: 'Payroll processing',
  metric: '8,410',
  metricLabel: 'workers paid'
}, {
  name: 'LienRite',
  icon: 'file-check',
  line: 'Lien waiver management',
  metric: '312',
  metricLabel: 'waivers open'
}, {
  name: 'CoWork',
  icon: 'users',
  line: 'Contingent workforce',
  metric: '1,204',
  metricLabel: 'assignments'
}];
const ACTIVITY = [{
  who: 'K. Mannuru',
  what: 'closed 14 exceptions on Sunbelt GL conversion',
  when: '12m ago',
  icon: 'circle-check',
  tone: 'var(--status-success)'
}, {
  who: 'DiscoveryAI',
  what: 'flagged 3 requirement conflicts in Halvorsen scope',
  when: '48m ago',
  icon: 'sparkles',
  tone: 'var(--rite-tropical-rainforest)'
}, {
  who: 'Northline Health',
  what: 'raised a P1 on payroll cutover rehearsal',
  when: '2h ago',
  icon: 'octagon-alert',
  tone: 'var(--status-danger)'
}, {
  who: 'S. Kanala',
  what: 'published Mock 4 reconciliation for Cianbro',
  when: '5h ago',
  icon: 'file-text',
  tone: 'var(--text-tertiary)'
}, {
  who: 'Rite Analytics',
  what: 'refreshed the AMS ticket warehouse',
  when: 'Yesterday',
  icon: 'refresh-cw',
  tone: 'var(--text-tertiary)'
}];
function ModuleCard({
  m,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: 18,
    onClick: onOpen,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-subtle)',
      color: 'var(--text-brand)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.2 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.35 var(--font-sans)',
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, m.line))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 22px/1 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, m.metric), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.2 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, m.metricLabel)));
}
function Overview({
  onOpenModule,
  onOpenProject
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 'var(--content-max)'
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "warning",
    title: "Oracle 26C update lands 30 September",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "View readiness")
  }, "Four environments still need the regression pack run. Nothing you send this week is wrong \u2014 flag blockers early."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "18",
    label: "Active engagements",
    delta: "+2",
    icon: "briefcase"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "$41.2M",
    label: "Bid pipeline",
    delta: "+8.4%",
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "98.4%",
    label: "SLA adherence",
    delta: "+1.2 pts",
    icon: "gauge"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "27",
    label: "Open escalations",
    delta: "+5",
    deltaTone: "danger",
    icon: "octagon-alert"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.62fr) minmax(0,1fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 16px/1.3 var(--font-sans)',
      letterSpacing: '-0.01em'
    }
  }, "Active engagements"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconAfter: "arrow-right"
  }, "View all 18")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: onOpenProject,
    sortKey: "client",
    sortDir: "asc",
    onSort: () => {},
    columns: [{
      key: 'client',
      header: 'Client',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 14px/1.2 var(--font-sans)'
        }
      }, r.client), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '400 12px/1.2 var(--font-sans)',
          color: 'var(--text-tertiary)'
        }
      }, r.scope))
    }, {
      key: 'phase',
      header: 'Phase',
      muted: true
    }, {
      key: 'pct',
      header: 'Progress',
      width: 130,
      render: r => /*#__PURE__*/React.createElement(ProgressBar, {
        value: r.pct,
        size: "sm",
        tone: r.tone === 'danger' ? 'danger' : 'brand'
      })
    }, {
      key: 'go',
      header: 'Go-live',
      mono: true,
      align: 'right'
    }, {
      key: 'lead',
      header: 'Lead',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.lead,
        size: "xs"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-secondary)'
        }
      }, r.lead))
    }, {
      key: 'health',
      header: 'Health',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.health)
    }],
    rows: ENGAGEMENTS
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 16px/1.3 var(--font-sans)',
      letterSpacing: '-0.01em'
    }
  }, "Your modules"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14
    }
  }, MODULES.map(m => /*#__PURE__*/React.createElement(ModuleCard, {
    key: m.name,
    m: m,
    onOpen: () => onOpenModule(m.name)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    header: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-sans)'
      }
    }, "Activity")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, ACTIVITY.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 0',
      borderBottom: i < ACTIVITY.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: a.tone,
      display: 'flex',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.45 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: '500 13px/1.45 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, a.who), " ", a.what), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px/1.2 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, a.when)))))), /*#__PURE__*/React.createElement("div", {
    className: "rite-dark",
    style: {
      background: 'var(--rite-deep-forest)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/deco-arc-dotted.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -46,
      bottom: -54,
      width: 190,
      opacity: .85,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "mint"
  }, "Managed services"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 26px/1.15 var(--font-sans)',
      letterSpacing: '-0.02em',
      color: '#FFFFFF'
    }
  }, "85 tickets resolved", /*#__PURE__*/React.createElement("br", null), "in the last 6 weeks"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 92,
    tone: "mint",
    label: "First-response SLA",
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 78,
    tone: "mint",
    label: "Resolution SLA",
    showValue: true
  })))))));
}
Object.assign(window, {
  Overview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ritesuite/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ritesuite/ProjectDetail.jsx
try { (() => {
const {
  Card,
  Tabs,
  Badge,
  Button,
  IconButton,
  DataTable,
  Avatar,
  ProgressBar,
  StatTile,
  Banner,
  Icon,
  Eyebrow,
  Switch,
  Tooltip
} = window.RiteDS;
const MILESTONES = [{
  id: 1,
  name: 'Design confirmed',
  date: '14-MAR-2026',
  state: 'done'
}, {
  id: 2,
  name: 'CRP 1',
  date: '02-MAY-2026',
  state: 'done'
}, {
  id: 3,
  name: 'CRP 2',
  date: '19-JUN-2026',
  state: 'done'
}, {
  id: 4,
  name: 'Mock 4 reconciliation',
  date: '21-AUG-2026',
  state: 'current'
}, {
  id: 5,
  name: 'UAT sign-off',
  date: '16-SEP-2026',
  state: 'todo'
}, {
  id: 6,
  name: 'Cutover rehearsal',
  date: '28-SEP-2026',
  state: 'todo'
}, {
  id: 7,
  name: 'Go-live',
  date: '12-OCT-2026',
  state: 'todo'
}];
const TEAM = [{
  id: 1,
  name: 'Rob Brown',
  role: 'Delivery lead',
  alloc: '100%',
  loc: 'Houston'
}, {
  id: 2,
  name: 'K. Mannuru',
  role: 'HCM functional',
  alloc: '80%',
  loc: 'Hyderabad'
}, {
  id: 3,
  name: 'S. Kanala',
  role: 'Data conversion',
  alloc: '100%',
  loc: 'Hyderabad'
}, {
  id: 4,
  name: 'M. Gandham',
  role: 'Integrations',
  alloc: '60%',
  loc: 'Hyderabad'
}, {
  id: 5,
  name: 'R. Chigurupati',
  role: 'Payroll SME',
  alloc: '40%',
  loc: 'Houston'
}];
const RISKS = [{
  id: 1,
  ref: 'R-08',
  title: 'Legacy salary basis values not in the target lookup',
  sev: 'High',
  tone: 'danger',
  owner: 'S. Kanala',
  due: '26-AUG'
}, {
  id: 2,
  ref: 'R-11',
  title: 'Payroll parallel window overlaps client month-end',
  sev: 'Medium',
  tone: 'warning',
  owner: 'Rob Brown',
  due: '05-SEP'
}, {
  id: 3,
  ref: 'R-14',
  title: 'Third-party benefits feed still in test',
  sev: 'Low',
  tone: 'neutral',
  owner: 'M. Gandham',
  due: '20-SEP'
}];
function Milestone({
  m,
  last
}) {
  const color = m.state === 'done' ? 'var(--interactive-brand)' : m.state === 'current' ? 'var(--rite-signal-mint)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: m.state === 'todo' ? 'transparent' : color,
      border: '2px solid ' + color,
      color: m.state === 'current' ? 'var(--rite-deep-forest)' : '#FFFFFF'
    }
  }, m.state === 'done' && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), m.state === 'current' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--rite-deep-forest)'
    }
  })), !last && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 2,
      background: m.state === 'done' ? 'var(--interactive-brand)' : 'var(--border-subtle)',
      minHeight: 26
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: last ? 0 : 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: (m.state === 'current' ? '600' : '400') + ' 14px/1.3 var(--font-sans)',
      color: m.state === 'todo' ? 'var(--text-tertiary)' : 'var(--text-primary)'
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.2 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, m.date)));
}
function ProjectDetail() {
  const [tab, setTab] = React.useState('plan');
  const [weekly, setWeekly] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 'var(--content-max)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Engagement \xB7 ENG-1042"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '700 26px/1.15 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, "Cianbro \xB7 HCM + Payroll"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "On track"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "ConvertRite"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "WageRite"), /*#__PURE__*/React.createElement(Badge, null, "EPC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Send the weekly status pack"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "send",
    label: "Send status",
    variant: "outline"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "calendar"
  }, "Schedule review"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "file-text"
  }, "Status report"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 20,
      marginTop: 22,
      paddingTop: 18,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, [['Phase', 'Mock 4'], ['Go-live', '12-OCT-2026'], ['Budget used', '68%'], ['Open risks', '3'], ['Team', '11 people']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/1.2 var(--font-mono)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'plan',
      label: 'Plan'
    }, {
      id: 'team',
      label: 'Team',
      count: TEAM.length
    }, {
      id: 'risks',
      label: 'Risks',
      count: RISKS.length
    }, {
      id: 'health',
      label: 'Health'
    }],
    active: tab,
    onSelect: setTab
  }), tab === 'plan' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 22,
    header: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-sans)'
      }
    }, "Milestones")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, MILESTONES.map((m, i) => /*#__PURE__*/React.createElement(Milestone, {
    key: m.id,
    m: m,
    last: i === MILESTONES.length - 1
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "115,196",
    label: "Records converted",
    icon: "database"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "4",
    label: "Mock loads complete",
    delta: "of 4",
    deltaTone: "neutral",
    icon: "layers"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 22,
    header: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-sans)'
      }
    }, "Workstreams")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 92,
    label: "Data conversion",
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 74,
    label: "Payroll parallel",
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 61,
    label: "Integrations",
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 38,
    label: "Change & training",
    showValue: true
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: weekly,
    onChange: setWeekly,
    label: "Send the client a weekly status digest"
  })))), tab === 'team' && /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'name',
      header: 'Person',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 9
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.name,
        size: "sm"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 14px/1.2 var(--font-sans)'
        }
      }, r.name))
    }, {
      key: 'role',
      header: 'Role',
      muted: true
    }, {
      key: 'alloc',
      header: 'Allocation',
      align: 'right',
      mono: true
    }, {
      key: 'loc',
      header: 'Location',
      muted: true
    }],
    rows: TEAM
  })), tab === 'risks' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "warning",
    title: "One high-severity risk is unmitigated",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "Open R-08")
  }, "Tell clients what they need to hear \u2014 raise this at Thursday's steering call."), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'ref',
      header: 'Ref',
      mono: true,
      width: 76
    }, {
      key: 'title',
      header: 'Risk',
      wrap: true
    }, {
      key: 'owner',
      header: 'Owner',
      muted: true
    }, {
      key: 'due',
      header: 'Mitigate by',
      mono: true,
      align: 'right'
    }, {
      key: 'sev',
      header: 'Severity',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.sev)
    }],
    rows: RISKS
  }))), tab === 'health' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "98.4%",
    label: "SLA adherence",
    delta: "+1.2 pts",
    icon: "gauge"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "12",
    label: "Open tickets",
    delta: "\u22124",
    icon: "ticket"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "4.6",
    label: "Client CSAT \xB7 of 5",
    delta: "+0.2",
    icon: "heart"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "0",
    label: "Failed go-lives",
    icon: "shield-check"
  })));
}
Object.assign(window, {
  ProjectDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ritesuite/ProjectDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ritesuite/SignIn.jsx
try { (() => {
const {
  Button,
  Input,
  FieldGroup,
  Checkbox,
  Eyebrow,
  Logo,
  Icon
} = window.RiteDS;
function SignIn({
  onSignIn
}) {
  const [remember, setRemember] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      height: '100%',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--rite-deep-forest)',
      padding: '56px 56px 44px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/rite-mark.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -110,
      top: -90,
      width: 420,
      opacity: .12,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(Logo, {
    on: "dark",
    height: 30,
    base: "../../assets/logo/"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "mint"
  }, "RiteSuite"), /*#__PURE__*/React.createElement("h1", {
    className: "rite-underline",
    style: {
      font: '700 42px/1.1 var(--font-sans)',
      letterSpacing: '-0.02em',
      color: '#FFFFFF'
    }
  }, "So you can change the world."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.6 var(--font-sans)',
      color: 'var(--rite-sage)'
    }
  }, "One console for every Rite product running against your Oracle ecosystem \u2014 conversions, bids, revenue, payroll and the analytics underneath them.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 40
    }
  }, [['20', 'Years of Rite'], ['150', 'Deployments'], ['0', 'Failed go-lives']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 30px/1 var(--font-sans)',
      letterSpacing: '-0.02em',
      color: '#FFFFFF'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.3 var(--font-sans)',
      color: 'var(--rite-sage)',
      marginTop: 6
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSignIn();
    },
    style: {
      width: '100%',
      maxWidth: 360,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 24px/1.25 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "Use your Rite corporate account.")), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Work email",
    htmlFor: "email"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    defaultValue: "rob.brown@rite.digital",
    icon: "mail"
  })), /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Password",
    htmlFor: "pw"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pw",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    icon: "lock"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: remember,
    onChange: setRemember,
    label: "Keep me signed in"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: '400 13px/1 var(--font-sans)'
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true,
    size: "lg",
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "or"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    size: "lg",
    icon: "building-2",
    onClick: onSignIn
  }, "Continue with Oracle SSO"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 12px/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)',
      textAlign: 'center'
    }
  }, "Trouble signing in? Contact ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "hello@rite.digital")))));
}
Object.assign(window, {
  SignIn
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ritesuite/SignIn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/Admin.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  IconButton,
  DataTable,
  Tabs,
  Input,
  Select,
  Checkbox,
  Switch,
  Banner,
  Icon,
  Tooltip,
  Avatar,
  EmptyState,
  Modal,
  FieldGroup
} = window.RiteDS;

/* ── Users tab ──────────────────────────────────────────────────────────── */
function UsersTab({
  role,
  onToast
}) {
  const [q, setQ] = React.useState('');
  const canViewCred = window.ttShowComponent(role, 'TT_ADMIN_VIEW_CRED');
  const canResetCred = window.ttShowComponent(role, 'TT_ADMIN_RESET_CRED');
  const rows = window.TT_USERS.filter(u => !q || (u.name + ' ' + u.email + ' ' + u.role).toLowerCase().includes(q.toLowerCase()));
  const cols = [{
    key: 'name',
    header: 'User',
    render: u => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: u.name,
      size: "sm",
      tone: u.status === 'ACTIVE' ? 'brand' : 'muted'
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: '500 14px/1.2 var(--font-sans)'
      }
    }, u.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: '400 12px/1.2 var(--font-sans)',
        color: 'var(--text-tertiary)',
        marginTop: 3
      }
    }, u.email)))
  }, {
    key: 'personNumber',
    header: 'Person no.',
    mono: true,
    muted: true,
    width: 120
  }, {
    key: 'role',
    header: 'Role',
    width: 190,
    render: u => /*#__PURE__*/React.createElement(Select, {
      size: "sm",
      defaultValue: u.role,
      options: window.TT_ROLES.map(r => ({
        value: r.code,
        label: r.label
      }))
    })
  }, {
    key: 'status',
    header: 'Status',
    width: 120,
    render: u => /*#__PURE__*/React.createElement(Badge, {
      tone: u.status === 'ACTIVE' ? 'success' : 'neutral',
      dot: true
    }, u.status.toLowerCase())
  }, {
    key: 'act',
    header: '',
    align: 'right',
    width: 130,
    render: u => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 6,
        justifyContent: 'flex-end'
      }
    }, canViewCred && /*#__PURE__*/React.createElement(Tooltip, {
      label: "View credentials"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "key-round",
      label: "View credentials"
    })), canResetCred && /*#__PURE__*/React.createElement(Tooltip, {
      label: "Reset password"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "rotate-ccw",
      label: "Reset credentials",
      onClick: () => onToast({
        tone: 'info',
        title: 'Reset link sent',
        body: u.email
      })
    })), /*#__PURE__*/React.createElement(IconButton, {
      icon: "ellipsis",
      label: "More"
    }))
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "Users and roles come from Oracle Fusion"
  }, "Talent Tracker owns no user table. Roles resolve through common-service; this screen is a window onto that data, not a local registry."), !canViewCred && /*#__PURE__*/React.createElement(Banner, {
    tone: "neutral",
    title: "Credential actions are hidden for your role"
  }, /*#__PURE__*/React.createElement("span", null, "Viewing and resetting login credentials is itself governed by the permission matrix (", /*#__PURE__*/React.createElement("code", {
    style: {
      font: '400 12px var(--font-mono)'
    }
  }, "TT_ADMIN_VIEW_CRED"), ").")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search users\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: 250
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "refresh-cw"
  }, "Sync from Fusion")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: rows,
    empty: /*#__PURE__*/React.createElement(EmptyState, {
      icon: "users",
      title: "No users match that search"
    })
  })));
}

/* ── Role permissions grid ──────────────────────────────────────────────── */
function PermissionsTab({
  onToast
}) {
  const [matrix, setMatrix] = React.useState(() => JSON.parse(JSON.stringify(window.TT_MATRIX)));
  const [dirty, setDirty] = React.useState(false);
  const pages = window.TT_PAGES;
  const toggle = (roleCode, pageCode) => {
    if (roleCode === 'ADMIN') return;
    setMatrix(m => ({
      ...m,
      [roleCode]: {
        ...m[roleCode],
        [pageCode]: m[roleCode][pageCode] === 'HIDDEN' ? 'FULL' : 'HIDDEN'
      }
    }));
    setDirty(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "warning",
    title: "Saving is not wired yet"
  }, "The grid reads the RBAC matrix returned by ", /*#__PURE__*/React.createElement("code", {
    style: {
      font: '400 12px var(--font-mono)'
    }
  }, "session-context"), ". common-service has no write endpoint yet, so changes here are local to this session."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "Toggle a cell to change which screens a role sees, application-wide, without a redeploy. Admin\u2019s row is always locked on."), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      font: '400 13px/1.4 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '11px 16px',
      font: '600 11px/1.2 var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      background: 'var(--surface-sunken)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      left: 0,
      zIndex: 2
    }
  }, "Role"), pages.map(p => /*#__PURE__*/React.createElement("th", {
    key: p.pageCode,
    style: {
      textAlign: 'center',
      padding: '11px 12px',
      whiteSpace: 'nowrap',
      font: '600 11px/1.2 var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      background: 'var(--surface-sunken)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, p.pageName)))), /*#__PURE__*/React.createElement("tbody", null, window.TT_ROLES.map(r => {
    const locked = r.code === 'ADMIN';
    return /*#__PURE__*/React.createElement("tr", {
      key: r.code
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '12px 16px',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)',
        position: 'sticky',
        left: 0,
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.2 var(--font-sans)'
      }
    }, r.label), locked && /*#__PURE__*/React.createElement(Tooltip, {
      label: "Admin always has full access"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 13,
      style: {
        color: 'var(--text-tertiary)'
      }
    })))), pages.map(p => {
      const on = matrix[r.code][p.pageCode] !== 'HIDDEN';
      return /*#__PURE__*/React.createElement("td", {
        key: p.pageCode,
        style: {
          textAlign: 'center',
          padding: '12px',
          borderBottom: '1px solid var(--border-subtle)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          opacity: locked ? .65 : 1
        }
      }, /*#__PURE__*/React.createElement(Checkbox, {
        checked: on,
        disabled: locked,
        onChange: () => toggle(r.code, p.pageCode)
      }), locked && /*#__PURE__*/React.createElement("span", {
        style: {
          font: '400 9px/1 var(--font-sans)',
          color: 'var(--text-tertiary)'
        }
      }, "locked")));
    }));
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setMatrix(JSON.parse(JSON.stringify(window.TT_MATRIX)));
      setDirty(false);
    }
  }, "Reset to default"), /*#__PURE__*/React.createElement(Button, {
    icon: "check",
    disabled: !dirty,
    onClick: () => onToast({
      tone: 'info',
      title: 'Save endpoint not available',
      body: 'common-service does not expose an RBAC write endpoint yet.'
    })
  }, "Save permissions")));
}

/* ── Integrations ───────────────────────────────────────────────────────── */
const INTEGRATIONS = [{
  id: 'ms',
  name: 'Microsoft 365',
  desc: 'SSO, Outlook mail and attachments, Teams meeting links for interview rounds.',
  icon: 'building-2',
  status: 'NOT_CONFIGURED'
}, {
  id: 'google',
  name: 'Google Workspace',
  desc: 'Gmail send, Google Meet links, Calendar sync.',
  icon: 'globe',
  status: 'NOT_CONFIGURED'
}, {
  id: 'claude',
  name: 'Anthropic Claude',
  desc: 'Resume parsing, candidate match scoring, interview question generation.',
  icon: 'sparkles',
  status: 'CONNECTED'
}, {
  id: 'notify',
  name: 'Notification service',
  desc: 'Server-side email for interview invites, decisions and offer links.',
  icon: 'bell',
  status: 'CONNECTED'
}];
function IntegrationsTab({
  onToast
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "Email is sent server-side"
  }, "The UI never sends mail directly \u2014 notification-service owns delivery, so templates and audit stay in one place."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 14
    }
  }, INTEGRATIONS.map(i => {
    const on = i.status === 'CONNECTED';
    return /*#__PURE__*/React.createElement(Card, {
      key: i.id,
      padding: 20
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 38,
        height: 38,
        flex: '0 0 auto',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-subtle)',
        color: 'var(--text-brand)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i.icon,
      size: 19
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 15px/1.2 var(--font-sans)'
      }
    }, i.name), /*#__PURE__*/React.createElement(Badge, {
      tone: on ? 'success' : 'neutral',
      dot: true
    }, on ? 'Connected' : 'Not configured')), /*#__PURE__*/React.createElement("p", {
      style: {
        font: '400 13px/1.5 var(--font-sans)',
        color: 'var(--text-tertiary)'
      }
    }, i.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: on ? 'secondary' : 'primary',
      icon: on ? 'settings' : 'plug',
      onClick: () => onToast({
        tone: 'info',
        title: on ? 'Configuration is server-side' : 'Not wired yet',
        body: i.name + ' is managed through environment configuration.'
      })
    }, on ? 'Configure' : 'Connect')))));
  })));
}
function Admin({
  role,
  onToast
}) {
  const [tab, setTab] = React.useState('users');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 1480
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    active: tab,
    onSelect: setTab,
    items: [{
      id: 'users',
      label: 'Users',
      icon: 'users',
      count: window.TT_USERS.length
    }, {
      id: 'perms',
      label: 'Role Permissions',
      icon: 'shield-check'
    }, {
      id: 'integrations',
      label: 'Integrations',
      icon: 'plug'
    }]
  }), tab === 'users' && /*#__PURE__*/React.createElement(UsersTab, {
    role: role,
    onToast: onToast
  }), tab === 'perms' && /*#__PURE__*/React.createElement(PermissionsTab, {
    onToast: onToast
  }), tab === 'integrations' && /*#__PURE__*/React.createElement(IntegrationsTab, {
    onToast: onToast
  }));
}
Object.assign(window, {
  Admin,
  UsersTab,
  PermissionsTab,
  IntegrationsTab
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/Admin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/CandidateModal.jsx
try { (() => {
const {
  Modal,
  Tabs,
  Button,
  IconButton,
  Input,
  Textarea,
  Select,
  Badge,
  Banner,
  Icon,
  Tooltip,
  Card,
  Avatar,
  FieldGroup,
  ProgressBar,
  EmptyState,
  Switch
} = window.RiteDS;
function AiField({
  children
}) {
  return /*#__PURE__*/React.createElement(Tooltip, {
    label: "AI-filled from the uploaded resume \u2014 editable"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '500 10px/1 var(--font-sans)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-brand)',
      background: 'var(--surface-subtle)',
      padding: '3px 7px',
      borderRadius: 'var(--radius-pill)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 11
  }), children || 'AI'));
}
function Row({
  label,
  hint,
  ai,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, label), ai && /*#__PURE__*/React.createElement(AiField, null)), children, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, hint));
}
function ReadOnlyValue({
  children,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 40,
      display: 'flex',
      alignItems: 'center',
      padding: '9px 12px',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      font: '400 14px/1.3 var(--font-sans)',
      color: tone || 'var(--text-secondary)'
    }
  }, children);
}

/* ── Interview rounds — reschedules render as history, not a mutable row ── */
function Rounds({
  candidateId
}) {
  const rounds = window.TT_INTERVIEWS[candidateId] || [];
  if (!rounds.length) return /*#__PURE__*/React.createElement(EmptyState, {
    icon: "calendar-x",
    title: "No interviews scheduled",
    description: "Schedule the first round to start the interview history for this candidate.",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "calendar-plus"
    }, "Schedule a round")
  });
  const tone = {
    SELECTED: 'success',
    REJECTED: 'danger',
    RESCHEDULED: 'neutral',
    PENDING: 'warning'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, rounds.map(r => {
    const superseded = r.status === 'RESCHEDULED';
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 14,
        padding: 15,
        background: superseded ? 'var(--surface-sunken)' : 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        opacity: superseded ? .68 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 34,
        height: 34,
        flex: '0 0 auto',
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-subtle)',
        color: 'var(--text-brand)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: superseded ? 'calendar-x' : r.status === 'SCHEDULED' ? 'calendar-clock' : 'calendar-check',
      size: 17
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-sans)',
        textDecoration: superseded ? 'line-through' : 'none'
      }
    }, window.ttLabel('TT_INTERVIEW_ROUND_TYPE', r.roundType)), /*#__PURE__*/React.createElement(Badge, {
      tone: tone[r.result] || (r.status === 'SCHEDULED' ? 'info' : 'neutral')
    }, r.result || r.status), r.rescheduledFromRoundId && /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      icon: "rotate-ccw"
    }, "Rescheduled")), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12px/1.3 var(--font-mono)',
        color: 'var(--text-tertiary)'
      }
    }, new Date(r.scheduledStart).toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }), ' · ' + window.ttLabel('TT_INTERVIEW_MODE', r.interviewMode)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px/1.3 var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, 'Panel: ' + (r.panelistName || '—'))), !superseded && r.status === 'SCHEDULED' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      icon: "video"
    }, "Join"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "rotate-ccw",
      label: "Reschedule",
      variant: "outline"
    })));
  }));
}
function Feedback({
  candidateId
}) {
  const items = window.TT_FEEDBACK[candidateId] || [];
  if (!items.length) return /*#__PURE__*/React.createElement(EmptyState, {
    icon: "message-square-text",
    title: "No feedback yet",
    description: "Panellists submit feedback after each completed round."
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.id,
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: f.panelistName,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 14px/1.2 var(--font-sans)'
    }
  }, f.panelistName), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.2 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, f.roundType), /*#__PURE__*/React.createElement(Badge, {
    tone: f.recommendation === 'STRONG_PROCEED' ? 'success' : f.recommendation === 'PROCEED' ? 'success' : 'warning'
  }, f.recommendation.replace('_', ' ').toLowerCase())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      flexWrap: 'wrap'
    }
  }, [['Overall', f.overallRating], ['Technical', f.technicalRating], ['Communication', f.communicationRating]].map(p => /*#__PURE__*/React.createElement("span", {
    key: p[0],
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px/1.2 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, p[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: "star",
    size: 13,
    style: {
      color: n <= (p[1] || 0) ? 'var(--rite-tropical-rainforest)' : 'var(--border-strong)'
    }
  })))))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px/1.6 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, f.feedbackText))))));
}
function History({
  candidateId
}) {
  const items = window.TT_STAGE_HISTORY[candidateId] || [];
  if (!items.length) return /*#__PURE__*/React.createElement(EmptyState, {
    icon: "git-commit-horizontal",
    title: "No stage history"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((h, i) => {
    const breached = h.slaBreachedFlag === 'Y';
    const stage = window.TT_STAGES.find(s => s.stageCode === h.toStageCode) || {};
    return /*#__PURE__*/React.createElement("div", {
      key: h.id,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        marginTop: 5,
        background: breached ? 'var(--status-danger)' : 'var(--interactive-brand)'
      }
    }), i < items.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        width: 2,
        minHeight: 26,
        background: 'var(--border-subtle)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: i === items.length - 1 ? 0 : 18,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.3 var(--font-sans)'
      }
    }, stage.stageName || h.toStageCode), breached && /*#__PURE__*/React.createElement(Badge, {
      tone: "danger",
      icon: "triangle-alert"
    }, 'SLA ' + h.daysInFromStage + 'd / ' + h.slaDays + 'd')), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12px/1.3 var(--font-mono)',
        color: 'var(--text-tertiary)'
      }
    }, new Date(h.changedDate).toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }) + ' · ' + (h.changedByName || 'System')), h.notes && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px/1.5 var(--font-sans)',
        color: 'var(--text-secondary)',
        maxWidth: 520
      }
    }, h.notes)));
  }));
}
function Documents({
  candidateId
}) {
  const docs = window.TT_DOCUMENTS[candidateId] || [];
  if (!docs.length) return /*#__PURE__*/React.createElement(EmptyState, {
    icon: "file-plus",
    title: "No documents uploaded",
    description: "Documents are requested once the candidate reaches Documentation Verification."
  });
  const tone = {
    VERIFIED: 'success',
    PENDING_REVIEW: 'warning',
    REJECTED: 'danger'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, docs.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 17,
    style: {
      color: 'var(--text-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '500 13px/1.2 var(--font-sans)'
    }
  }, d.documentName), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '400 12px/1.2 var(--font-mono)',
      color: 'var(--text-tertiary)',
      marginTop: 3
    }
  }, d.fileName)), /*#__PURE__*/React.createElement(Badge, {
    tone: tone[d.status]
  }, d.status.replace('_', ' ').toLowerCase()))));
}

/* ── The modal ──────────────────────────────────────────────────────────── */
function CandidateModal({
  open,
  candidate,
  role,
  readOnly,
  onClose,
  onToast
}) {
  const [tab, setTab] = React.useState('profile');
  const [score, setScore] = React.useState('');
  const [source, setSource] = React.useState('AI');
  const [holdOpen, setHoldOpen] = React.useState(false);
  React.useEffect(() => {
    if (open && candidate) {
      setTab('profile');
      setScore(String(candidate.skillMatchScore != null ? candidate.skillMatchScore : ''));
      setSource(candidate.skillMatchSource || 'AI');
    }
  }, [open, candidate]);
  if (!candidate) return null;
  const t = candidate.talent || {};
  const showMargin = window.ttShowComponent(role, 'TT_CAND_MARGIN');
  const showCtc = window.ttShowComponent(role, 'TT_CAND_CTC');
  const stage = window.TT_STAGES.find(s => s.stageCode === candidate.currentStageCode) || {};
  const sla = window.ttSlaState(candidate);
  const onScore = e => {
    setScore(e.target.value);
    if (source !== 'MANUAL') {
      setSource('MANUAL');
      onToast({
        tone: 'info',
        title: 'Match source set to Manual',
        body: 'Editing an AI score flips skillMatchSource to MANUAL.'
      });
    }
  };
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    size: "lg",
    title: t.fullName,
    description: candidate.candNo + ' · ' + window.ttReqSkill(candidate.requirementId) + ' · req ' + window.ttReqNo(candidate.requirementId),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        marginRight: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: window.TT_STAGE_TONE[candidate.currentStageCode],
      dot: true
    }, stage.stageName), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12px/1.2 var(--font-mono)',
        color: sla.tone === 'danger' ? 'var(--status-danger)' : 'var(--text-tertiary)'
      }
    }, sla.label), candidate.holdFlag === 'Y' && /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      icon: "pause"
    }, "On hold")), !readOnly && (candidate.holdFlag === 'Y' ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      icon: "play",
      onClick: () => onToast({
        tone: 'success',
        title: 'Hold released',
        body: t.fullName + ' is back in the active pipeline.'
      })
    }, "Release hold") : /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      icon: "pause",
      onClick: () => setHoldOpen(true)
    }, "Put on hold")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: onClose
    }, "Close"), !readOnly && /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "check"
    }, "Save changes"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, candidate.holdFlag === 'Y' && /*#__PURE__*/React.createElement(Banner, {
    tone: "warning",
    title: "This candidate is on hold"
  }, candidate.holdReason), /*#__PURE__*/React.createElement(Tabs, {
    active: tab,
    onSelect: setTab,
    items: [{
      id: 'profile',
      label: 'Profile',
      icon: 'user'
    }, {
      id: 'rounds',
      label: 'Interview Rounds',
      icon: 'calendar',
      count: (window.TT_INTERVIEWS[candidate.id] || []).length || undefined
    }, {
      id: 'feedback',
      label: 'Feedback',
      icon: 'message-square-text',
      count: (window.TT_FEEDBACK[candidate.id] || []).length || undefined
    }, {
      id: 'documents',
      label: 'Documents',
      icon: 'file-text',
      count: (window.TT_DOCUMENTS[candidate.id] || []).length || undefined
    }, {
      id: 'history',
      label: 'History',
      icon: 'git-commit-horizontal'
    }]
  }), tab === 'profile' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Current role"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: t.currentRole || '',
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Current company"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: t.currentCompany || '',
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Current location"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: t.currentLocation || '',
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Work mode preference"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: t.workModePreference || '',
    disabled: readOnly,
    options: (window.TT_LOOKUPS.TT_WORK_MODE || []).map(l => ({
      value: l.lookupCode,
      label: l.meaning
    }))
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Experience",
    ai: candidate.aiFilledFlag === 'Y'
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: t.totalExperienceYrs != null ? t.totalExperienceYrs + ' yrs' : '',
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Education",
    ai: candidate.aiFilledFlag === 'Y'
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: t.education || '',
    disabled: readOnly
  })), showCtc ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Row, {
    label: "Current CTC"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: candidate.currentCtcAmount != null ? '₹ ' + candidate.currentCtcAmount.toLocaleString('en-IN') : '',
    suffix: "/ yr",
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Expected CTC"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: candidate.expectedCtcAmount != null ? '₹ ' + candidate.expectedCtcAmount.toLocaleString('en-IN') : '',
    suffix: "/ yr",
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Monthly CTC (INR) \u21C4 USD/INR",
    hint: "Server-computed and interlinked \u2014 read only"
  }, /*#__PURE__*/React.createElement(ReadOnlyValue, null, '₹ ' + (candidate.monthlyCtcInr != null ? candidate.monthlyCtcInr.toLocaleString('en-IN') : '—') + '  ⇄  ' + (candidate.usdInrRate != null ? candidate.usdInrRate.toFixed(1) : '—')))) : /*#__PURE__*/React.createElement(Row, {
    label: "Compensation",
    span: 3,
    hint: "Hidden for your role by the TT_CAND_CTC component rule"
  }, /*#__PURE__*/React.createElement(ReadOnlyValue, {
    tone: "var(--text-disabled)"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye-off",
    size: 14,
    style: {
      marginRight: 8
    }
  }), "Restricted")), /*#__PURE__*/React.createElement(Row, {
    label: "Skill match score",
    ai: source === 'AI',
    hint: source === 'MANUAL' ? 'Source: MANUAL — overridden by a recruiter' : 'Source: AI'
  }, /*#__PURE__*/React.createElement(Input, {
    value: score,
    onChange: onScore,
    suffix: "%",
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(Row, {
    label: "Margin (bill rate \u2212 expected CTC)",
    hint: showMargin ? 'Server-computed' : undefined
  }, showMargin ? /*#__PURE__*/React.createElement(ReadOnlyValue, {
    tone: candidate.marginAmount != null ? 'var(--status-success)' : 'var(--text-disabled)'
  }, candidate.marginAmount != null ? '$' + candidate.marginAmount + ' / hr' : '— not yet computed') : /*#__PURE__*/React.createElement(ReadOnlyValue, {
    tone: "var(--text-disabled)"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye-off",
    size: 14,
    style: {
      marginRight: 8
    }
  }), "Restricted")), /*#__PURE__*/React.createElement(Row, {
    label: "Source"
  }, /*#__PURE__*/React.createElement(ReadOnlyValue, null, (t.source || '—').replace('_', ' ').toLowerCase()))), tab === 'rounds' && /*#__PURE__*/React.createElement(Rounds, {
    candidateId: candidate.id
  }), tab === 'feedback' && /*#__PURE__*/React.createElement(Feedback, {
    candidateId: candidate.id
  }), tab === 'documents' && /*#__PURE__*/React.createElement(Documents, {
    candidateId: candidate.id
  }), tab === 'history' && /*#__PURE__*/React.createElement(History, {
    candidateId: candidate.id
  })), /*#__PURE__*/React.createElement(Modal, {
    open: holdOpen,
    onClose: () => setHoldOpen(false),
    size: "sm",
    title: "Put this candidate on hold",
    description: "A held candidate stays in the pipeline but cannot change stage.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setHoldOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => {
        setHoldOpen(false);
        onToast({
          tone: 'success',
          title: 'Candidate on hold',
          body: t.fullName + ' will not appear in active stage counts.'
        });
      }
    }, "Confirm hold"))
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Reason",
    required: true
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Why is this candidate being paused?"
  }))));
}
Object.assign(window, {
  CandidateModal,
  TTRounds: Rounds,
  TTFeedback: Feedback,
  TTHistory: History,
  TTDocuments: Documents
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/CandidateModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/Candidates.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  IconButton,
  DataTable,
  Input,
  Select,
  Tabs,
  Tag,
  Tooltip,
  Icon,
  EmptyState,
  Avatar,
  ProgressBar,
  Modal,
  Checkbox,
  Banner
} = window.RiteDS;
const STAGE_TONE = {
  SOURCED: 'neutral',
  SCREENING: 'info',
  L1_SCHEDULED: 'warning',
  L2_SELECT: 'warning',
  DOCUMENTATION: 'info',
  OFFER_RELEASED: 'success',
  JOINED: 'success'
};
const SLA_DAYS = {
  SOURCED: 5,
  SCREENING: 3,
  L1_SCHEDULED: 2,
  L2_SELECT: 4,
  DOCUMENTATION: 3,
  OFFER_RELEASED: 7,
  JOINED: 99
};
const TODAY = new Date('2026-08-09');
function daysIn(c) {
  return Math.max(0, Math.round((TODAY - new Date(c.stageChangedDate)) / 86400000));
}
function slaState(c) {
  const d = daysIn(c),
    limit = SLA_DAYS[c.currentStageCode] || 5;
  if (d > limit) return {
    tone: 'danger',
    label: d + 'd · SLA exceeded'
  };
  if (d >= limit - 1) return {
    tone: 'warning',
    label: d + 'd · SLA due'
  };
  return {
    tone: 'neutral',
    label: d + 'd in stage'
  };
}
function reqNo(id) {
  const r = window.TT_REQUIREMENTS.find(x => x.id === id);
  return r ? r.reqNo : '—';
}
function reqSkill(id) {
  const r = window.TT_REQUIREMENTS.find(x => x.id === id);
  return r ? window.ttSkillPath(r) : '—';
}
function money(n) {
  return '$' + n;
}

/* ── Kanban card ────────────────────────────────────────────────────────── */
function KanbanCard({
  c,
  showMargin,
  onOpen,
  onDragStart,
  dragging
}) {
  const [hover, setHover] = React.useState(false);
  const sla = slaState(c);
  const stage = c.currentStageCode;
  let meta = null;
  if (stage === 'SOURCED' || stage === 'SCREENING') {
    if (c.skillMatchScore != null) meta = /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        color: c.skillMatchScore >= 85 ? 'var(--status-success)' : 'var(--text-secondary)'
      }
    }, c.skillMatchSource === 'AI' && /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 12
    }), c.skillMatchScore + '% match');
  } else if (stage === 'L1_SCHEDULED' && c.nextInterviewLabel) {
    meta = /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-clock",
      size: 12
    }), c.nextInterviewLabel);
  } else if (stage === 'DOCUMENTATION') {
    meta = /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-clock",
      size: 12
    }), "Docs pending verification");
  } else if (stage === 'OFFER_RELEASED') {
    meta = /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 12
    }), "Portal \xB7 awaiting response");
  } else if (showMargin && c.marginAmount != null) {
    meta = /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        color: 'var(--status-success)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trending-up",
      size: 12
    }), 'Margin ' + money(c.marginAmount) + '/hr');
  } else if (c.talent.totalExperienceYrs) {
    meta = /*#__PURE__*/React.createElement("span", null, c.talent.totalExperienceYrs + ' yrs experience');
  }
  return /*#__PURE__*/React.createElement("div", {
    draggable: true,
    onDragStart: e => onDragStart(e, c),
    onClick: () => onOpen(c),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 13,
      border: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      opacity: dragging ? .4 : 1,
      cursor: 'grab',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.talent.fullName,
    size: "sm",
    tone: c.holdFlag === 'Y' ? 'muted' : 'brand'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px/1.25 var(--font-sans)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, c.talent.fullName), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 11px/1.3 var(--font-mono)',
      color: 'var(--text-tertiary)',
      marginTop: 3
    }
  }, c.candNo + ' · ' + reqSkill(c.requirementId))), c.holdFlag === 'Y' && /*#__PURE__*/React.createElement(Tooltip, {
    label: c.holdReason || 'On hold'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pause",
    size: 14,
    style: {
      color: 'var(--status-warning)'
    }
  }))), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, meta), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      paddingTop: 8,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px/1.2 var(--font-mono)',
      color: sla.tone === 'danger' ? 'var(--status-danger)' : sla.tone === 'warning' ? 'var(--status-warning)' : 'var(--text-tertiary)'
    }
  }, sla.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px/1.2 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, reqNo(c.requirementId))));
}

/* ── Bulk upload (stub — no parsing endpoint yet, §9.3) ─────────────────── */
function BulkUploadModal({
  open,
  onClose,
  onDone
}) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    if (open) setStep(0);
  }, [open]);
  React.useEffect(() => {
    if (!open || step !== 1) return undefined;
    const t = setTimeout(() => setStep(2), 1500);
    return () => clearTimeout(t);
  }, [open, step]);
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    size: "md",
    title: "Bulk upload resumes",
    description: "Drop a batch of resumes; the AI parser fills experience, education and a skill-match score.",
    footer: step === 2 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: onClose
    }, "Close"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "plus",
      onClick: onDone
    }, "Add 4 candidates")) : /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: onClose
    }, "Cancel")
  }, step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStep(1),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      padding: '40px 24px',
      width: '100%',
      background: 'var(--surface-subtle)',
      border: '1.5px dashed var(--border-strong)',
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cloud-upload",
    size: 30,
    style: {
      color: 'var(--text-brand)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, "Drop resumes here, or click to browse"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "PDF or DOCX \xB7 up to 50 files per batch")), /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "Upload is stubbed in this kit"
  }, "Object storage and the resume-parsing endpoint are not wired yet. The flow below shows the intended behaviour.")), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 62,
    label: "Parsing 4 resumes",
    showValue: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "Extracting experience, education and skills, then scoring each against the requirement.")), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Banner, {
    tone: "success",
    title: "4 resumes parsed"
  }, "1 duplicate was matched to an existing databank record and skipped."), [['Ananya Desai', 91], ['Tarun Bhatia', 84], ['Leena Fernandes', 79], ['Mohit Sharma', 68]].map(row => /*#__PURE__*/React.createElement("div", {
    key: row[0],
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: row[0],
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '500 13px/1.2 var(--font-sans)'
    }
  }, row[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '500 12px/1 var(--font-mono)',
      color: row[1] >= 85 ? 'var(--status-success)' : 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 12
  }), row[1] + '%')))));
}

/* ── Pipeline screen ────────────────────────────────────────────────────── */
function Candidates({
  role,
  requirementFilter,
  onOpenCandidate,
  onToast
}) {
  const [mode, setMode] = React.useState('kanban');
  const [q, setQ] = React.useState('');
  const [req, setReq] = React.useState(requirementFilter ? String(requirementFilter) : '');
  const [rows, setRows] = React.useState(() => window.TT_CANDIDATES.slice());
  const [drag, setDrag] = React.useState(null);
  const [over, setOver] = React.useState(null);
  const [bulk, setBulk] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  React.useEffect(() => {
    if (requirementFilter) setReq(String(requirementFilter));
  }, [requirementFilter]);
  const canEdit = window.ttCanEdit(role, 'TT_CANDIDATES');
  const showMargin = window.ttShowComponent(role, 'TT_CAND_MARGIN');
  const showCtc = window.ttShowComponent(role, 'TT_CAND_CTC');
  const filtered = rows.filter(c => {
    if (req && String(c.requirementId) !== req) return false;
    if (q && !(c.talent.fullName + ' ' + c.candNo + ' ' + reqSkill(c.requirementId)).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  /* Drag-and-drop: optimistic update, revert on a simulated 409 (§10). */
  const onDrop = stageCode => {
    setOver(null);
    if (!drag || !canEdit) {
      setDrag(null);
      return;
    }
    const card = drag;
    setDrag(null);
    if (card.currentStageCode === stageCode) return;
    const from = window.TT_STAGES.findIndex(s => s.stageCode === card.currentStageCode);
    const to = window.TT_STAGES.findIndex(s => s.stageCode === stageCode);
    const prev = rows;
    setRows(rs => rs.map(r => r.id === card.id ? {
      ...r,
      currentStageCode: stageCode,
      stageChangedDate: '2026-08-09'
    } : r));
    let conflict = null;
    if (card.holdFlag === 'Y') conflict = 'Candidate is on hold — release the hold before moving stage.';else if (to > from + 1) conflict = 'Cannot skip from ' + window.TT_STAGES[from].stageName + ' to ' + window.TT_STAGES[to].stageName + '. Move one stage at a time.';else if (stageCode === 'OFFER_RELEASED' && card.currentStageCode === 'DOCUMENTATION' && card.officialEmailVerifiedFlag !== 'Y') conflict = 'Documents are still pending review for this candidate.';
    setTimeout(() => {
      if (conflict) {
        setRows(prev);
        onToast({
          tone: 'warning',
          title: 'Stage change rejected · 409',
          body: conflict
        });
      } else onToast({
        tone: 'success',
        title: 'Moved to ' + window.TT_STAGES[to].stageName,
        body: card.talent.fullName + ' · ' + card.candNo
      });
    }, 300);
  };
  const columns = window.TT_STAGES.map(s => ({
    ...s,
    cards: filtered.filter(c => c.currentStageCode === s.stageCode)
  }));
  const tableColumns = [{
    key: 'sel',
    header: '',
    width: 40,
    render: c => /*#__PURE__*/React.createElement("span", {
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: selected.includes(c.id),
      onChange: v => setSelected(s => v ? [...s, c.id] : s.filter(x => x !== c.id))
    }))
  }, {
    key: 'name',
    header: 'Candidate',
    render: c => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: c.talent.fullName,
      size: "sm",
      tone: c.holdFlag === 'Y' ? 'muted' : 'brand'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.2 var(--font-sans)'
      }
    }, c.talent.fullName), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 11px/1.2 var(--font-mono)',
        color: 'var(--text-tertiary)'
      }
    }, c.candNo)))
  }, {
    key: 'req',
    header: 'Requirement',
    render: c => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px/1.2 var(--font-mono)',
        color: 'var(--text-secondary)'
      }
    }, reqNo(c.requirementId)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12px/1.2 var(--font-sans)',
        color: 'var(--text-tertiary)'
      }
    }, reqSkill(c.requirementId)))
  }, {
    key: 'exp',
    header: 'Exp',
    align: 'right',
    mono: true,
    width: 70,
    render: c => c.talent.totalExperienceYrs != null ? c.talent.totalExperienceYrs + ' yrs' : '—'
  }, {
    key: 'match',
    header: 'AI match',
    align: 'right',
    width: 118,
    render: c => c.skillMatchScore == null ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-disabled)'
      }
    }, "\u2014") : /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: c.skillMatchScore,
      size: "sm",
      tone: c.skillMatchScore >= 85 ? 'brand' : 'warning',
      style: {
        width: 50
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 12px/1 var(--font-mono)',
        color: 'var(--text-secondary)',
        width: 30,
        textAlign: 'right'
      }
    }, c.skillMatchScore + '%'))
  }];
  if (showCtc) tableColumns.push({
    key: 'ctc',
    header: 'Expected CTC',
    align: 'right',
    mono: true,
    render: c => c.expectedCtcAmount != null ? '₹' + (c.expectedCtcAmount / 100000).toFixed(1) + 'L' : '—'
  });
  if (showMargin) tableColumns.push({
    key: 'margin',
    header: 'Margin',
    align: 'right',
    mono: true,
    width: 92,
    render: c => c.marginAmount != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--status-success)'
      }
    }, money(c.marginAmount) + '/hr') : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-disabled)'
      }
    }, "\u2014")
  });
  tableColumns.push({
    key: 'recruiterName',
    header: 'Recruiter',
    muted: true
  }, {
    key: 'sla',
    header: 'In stage',
    align: 'right',
    width: 132,
    render: c => {
      const s = slaState(c);
      return /*#__PURE__*/React.createElement("span", {
        style: {
          font: '400 12px/1.2 var(--font-mono)',
          color: s.tone === 'danger' ? 'var(--status-danger)' : s.tone === 'warning' ? 'var(--status-warning)' : 'var(--text-tertiary)'
        }
      }, s.label);
    }
  }, {
    key: 'stage',
    header: 'Stage',
    width: 148,
    render: c => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: STAGE_TONE[c.currentStageCode],
      dot: true
    }, (window.TT_STAGES.find(s => s.stageCode === c.currentStageCode) || {}).stageName), c.holdFlag === 'Y' && /*#__PURE__*/React.createElement(Tooltip, {
      label: c.holdReason || 'On hold'
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pause",
      size: 13,
      style: {
        color: 'var(--status-warning)'
      }
    })))
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search candidates\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: 220
    }
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    placeholder: "All requirements",
    value: req,
    onChange: e => setReq(e.target.value),
    options: window.TT_REQUIREMENTS.map(r => ({
      value: String(r.id),
      label: r.reqNo + ' · ' + window.ttSkillPath(r)
    })),
    style: {
      width: 230
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), selected.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '0 4px 0 12px',
      height: 34,
      background: 'var(--surface-subtle)',
      borderRadius: 'var(--radius-pill)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-sans)',
      color: 'var(--text-brand)'
    }
  }, selected.length + ' selected'), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "user-round-check"
  }, "Assign"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "mail"
  }, "Email"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Clear selection",
    onClick: () => setSelected([])
  })), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: [{
      id: 'table',
      label: 'Table',
      icon: 'table'
    }, {
      id: 'kanban',
      label: 'Kanban',
      icon: 'columns-3'
    }],
    active: mode,
    onSelect: setMode
  }), canEdit && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "upload",
    onClick: () => setBulk(true)
  }, "Bulk upload"), canEdit && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "plus"
  }, "Add candidate")), mode === 'kanban' ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowX: 'auto',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.stageCode,
    onDragOver: e => {
      e.preventDefault();
      setOver(col.stageCode);
    },
    onDragLeave: () => setOver(o => o === col.stageCode ? null : o),
    onDrop: () => onDrop(col.stageCode),
    style: {
      width: 246,
      flex: '0 0 246px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 10,
      borderRadius: 'var(--radius-lg)',
      background: over === col.stageCode ? 'var(--surface-subtle)' : 'transparent',
      outline: over === col.stageCode ? '1.5px dashed var(--rite-tropical-rainforest)' : '1.5px dashed transparent',
      transition: 'background-color var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      padding: '2px 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1.2 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, col.stageName), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      color: 'var(--text-tertiary)',
      background: 'var(--surface-sunken)',
      padding: '4px 7px',
      borderRadius: 'var(--radius-pill)'
    }
  }, col.cards.length)), col.cards.map(c => /*#__PURE__*/React.createElement(KanbanCard, {
    key: c.id,
    c: c,
    showMargin: showMargin,
    onOpen: onOpenCandidate,
    dragging: !!drag && drag.id === c.id,
    onDragStart: (e, card) => {
      setDrag(card);
      e.dataTransfer.effectAllowed = 'move';
    }
  })), col.cards.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 10px',
      textAlign: 'center',
      font: '400 12px/1.4 var(--font-sans)',
      color: 'var(--text-disabled)',
      border: '1px dashed var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, "No candidates"))))) : /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: tableColumns,
    rows: filtered,
    onRowClick: onOpenCandidate,
    empty: /*#__PURE__*/React.createElement(EmptyState, {
      icon: "users",
      title: "No candidates match these filters",
      description: "Clear the search, or upload a batch of resumes to start sourcing."
    })
  })), /*#__PURE__*/React.createElement(BulkUploadModal, {
    open: bulk,
    onClose: () => setBulk(false),
    onDone: () => {
      setBulk(false);
      onToast({
        tone: 'success',
        title: '4 candidates added',
        body: 'They are in Sourced, with AI-filled fields marked for review.'
      });
    }
  }));
}
Object.assign(window, {
  Candidates,
  KanbanCard,
  BulkUploadModal,
  ttSlaState: slaState,
  ttReqNo: reqNo,
  ttReqSkill: reqSkill,
  ttMoney: money,
  TT_STAGE_TONE: STAGE_TONE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/Candidates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/MISReports.jsx
try { (() => {
const {
  Card,
  StatTile,
  Badge,
  Button,
  DataTable,
  Tabs,
  Select,
  Icon,
  Tooltip,
  EmptyState,
  ProgressBar
} = window.RiteDS;
function Bar({
  item,
  max,
  isLast
}) {
  const h = Math.max(6, Math.round(item.count / max * 170));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, item.count), /*#__PURE__*/React.createElement(Tooltip, {
    label: item.stageName + ' · ' + item.count + ' candidates'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: h,
      borderRadius: '6px 6px 0 0',
      background: isLast ? 'var(--rite-signal-mint)' : 'var(--rite-tropical-rainforest)',
      opacity: isLast ? 1 : 0.35 + item.count / max * 0.65
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px/1.2 var(--font-sans)',
      color: 'var(--text-tertiary)',
      textAlign: 'center'
    }
  }, item.stageName));
}
function dash(v, suffix) {
  return v == null ? '—' : v + (suffix || '');
}
function MISReports({
  role
}) {
  const [range, setRange] = React.useState('q');
  const m = window.TT_MIS;
  const showMargin = window.ttShowComponent(role, 'TT_CAND_MARGIN');
  const max = Math.max.apply(null, m.funnel.map(f => f.count));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: [{
      id: 'w',
      label: 'Week'
    }, {
      id: 'm',
      label: 'Month'
    }, {
      id: 'q',
      label: 'Quarter'
    }],
    active: range,
    onSelect: setRange
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    placeholder: "All verticals",
    options: window.TT_VERTICALS.map(v => ({
      value: String(v.id),
      label: v.name
    })),
    style: {
      width: 165
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "download"
  }, "Export")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: dash(m.avgTimeToFillDays, ' days'),
    label: "Avg time to fill",
    delta: "\u22121.8 days",
    icon: "timer"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: dash(m.slaBreachesThisWeek),
    label: "SLA breaches this week",
    delta: "+1",
    deltaTone: "danger",
    icon: "triangle-alert"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: showMargin ? '$' + dash(m.avgMargin) + '/hr' : '—',
    label: showMargin ? 'Avg margin (staffing)' : 'Avg margin · restricted',
    delta: showMargin ? '+$2' : undefined,
    icon: "trending-up"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: dash(m.l1ToOfferConversionPct, '%'),
    label: "L1 \u2192 offer conversion",
    delta: "+4 pts",
    icon: "target"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,1fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 22,
    header: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-sans)'
      }
    }, "Candidates by stage")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12,
      height: 220,
      paddingTop: 8
    }
  }, m.funnel.map((f, i) => /*#__PURE__*/React.createElement(Bar, {
    key: f.stageCode,
    item: f,
    max: max,
    isLast: i === m.funnel.length - 1
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-sans)'
      }
    }, "Aging candidates"), /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, m.agingCandidates.length + ' SLA exceeded'))
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: 'candidateName',
      header: 'Candidate'
    }, {
      key: 'stageName',
      header: 'Stage',
      muted: true
    }, {
      key: 'daysInStage',
      header: 'Days',
      align: 'right',
      width: 90,
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: r.daysInStage - r.slaDays >= 3 ? 'danger' : 'warning'
      }, r.daysInStage)
    }],
    rows: m.agingCandidates,
    empty: /*#__PURE__*/React.createElement(EmptyState, {
      compact: true,
      icon: "circle-check",
      title: "Nothing is aging",
      description: "Every candidate is inside its stage SLA."
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 16px/1.3 var(--font-sans)',
      letterSpacing: '-0.01em'
    }
  }, "Requirements by vertical & client"), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'vertical',
      header: 'Vertical'
    }, {
      key: 'client',
      header: 'Client',
      muted: true,
      render: r => r.client || /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-disabled)'
        }
      }, "\u2014")
    }, {
      key: 'openReqs',
      header: 'Open reqs',
      align: 'right',
      mono: true
    }, {
      key: 'avgBillRate',
      header: 'Avg bill rate',
      align: 'right',
      mono: true,
      render: r => r.avgBillRate != null ? '$' + r.avgBillRate + '/hr' : /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-disabled)'
        }
      }, "\u2014")
    }, {
      key: 'avgMargin',
      header: 'Avg margin',
      align: 'right',
      mono: true,
      render: r => {
        if (!showMargin) return /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--text-disabled)'
          }
        }, "Restricted");
        return r.avgMargin != null ? /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--status-success)'
          }
        }, '$' + r.avgMargin + '/hr') : /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--text-disabled)'
          }
        }, "\u2014");
      }
    }],
    rows: m.byVerticalAndClient.map((r, i) => ({
      ...r,
      id: i
    }))
  }))));
}
Object.assign(window, {
  MISReports
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/MISReports.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/OfferPortal.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Banner,
  Icon,
  Modal,
  Textarea,
  FieldGroup
} = window.RiteDS;

/* Unauthenticated candidate surface. No sidebar, no role lookup, no internal ids.
   Renders ONLY the fields the portal endpoint returns (§ Offer Portal). */
function OfferPortal({
  onExit
}) {
  const o = window.TT_OFFER;
  const [state, setState] = React.useState('OPEN');
  const [decline, setDecline] = React.useState(false);
  const [reason, setReason] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--rite-deep-forest)',
      padding: '20px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/rite-mark.png",
    alt: "",
    style: {
      position: 'absolute',
      right: -60,
      top: -80,
      width: 260,
      opacity: .12,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/rite-logo-lockup-white.png",
    alt: "Rite",
    style: {
      height: 28,
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onExit,
    style: {
      position: 'relative',
      background: 'transparent',
      border: '1px solid rgba(255,255,255,.2)',
      color: 'rgba(255,255,255,.7)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 12px',
      font: '400 12px/1 var(--font-sans)',
      cursor: 'pointer'
    }
  }, "Back to the app")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 620,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, state === 'OPEN' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-brand)'
    }
  }, "Your offer from Rite Software"), /*#__PURE__*/React.createElement("h1", {
    className: "rite-underline",
    style: {
      font: '700 34px/1.15 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, o.candidateName, ", we would like you to join us.")), state === 'ACCEPTED' && /*#__PURE__*/React.createElement(Banner, {
    tone: "success",
    title: "Offer accepted \u2014 thank you"
  }, "Our team will be in touch within one working day about onboarding and your first-week schedule."), state === 'DECLINED' && /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "Offer declined"
  }, "Thank you for letting us know. We have passed this to the recruiting team and hope to speak again."), /*#__PURE__*/React.createElement(Card, {
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.2 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, o.offerNo), /*#__PURE__*/React.createElement(Badge, {
    tone: state === 'ACCEPTED' ? 'success' : state === 'DECLINED' ? 'neutral' : 'info',
    dot: true
  }, state === 'OPEN' ? 'Awaiting your response' : state.toLowerCase())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      paddingBottom: 20,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, [['Position', o.positionTitle], ['Joining date', window.ttFmtDate(o.joiningDate)], ['Annual CTC', '₹ ' + o.offeredCtcAmount.toLocaleString('en-IN')], ['Offer valid until', '22 August 2026']].map(p => /*#__PURE__*/React.createElement("div", {
    key: p[0],
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, p[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 17px/1.3 var(--font-sans)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, p[1])))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.65 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, o.offerLetterText), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '13px 15px',
      background: 'var(--surface-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 17,
    style: {
      color: 'var(--text-brand)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '400 13px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "Offer letter \u2014 Rite Software.pdf"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "download"
  }, "Download")), state === 'OPEN' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    icon: "check",
    onClick: () => setState('ACCEPTED')
  }, "Accept offer"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => setDecline(true)
  }, "Decline")))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 12px/1.6 var(--font-sans)',
      color: 'var(--text-tertiary)',
      textAlign: 'center'
    }
  }, "This link is personal to you and expires on 22 August 2026.", /*#__PURE__*/React.createElement("br", null), "Questions? Reply to the email this link came from, or write to ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "hello@rite.digital"), "."))), /*#__PURE__*/React.createElement(Modal, {
    open: decline,
    onClose: () => setDecline(false),
    size: "sm",
    title: "Decline this offer",
    description: "Telling us why helps \u2014 it is optional.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setDecline(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      size: "sm",
      onClick: () => {
        setDecline(false);
        setState('DECLINED');
      }
    }, "Decline offer"))
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Reason",
    hint: "Optional"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    value: reason,
    onChange: e => setReason(e.target.value),
    placeholder: "e.g. Accepted another role"
  }))));
}
Object.assign(window, {
  OfferPortal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/OfferPortal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/OffersDocs.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  IconButton,
  DataTable,
  Tabs,
  Banner,
  Icon,
  Tooltip,
  Modal,
  Input,
  Textarea,
  Select,
  FieldGroup,
  Avatar,
  EmptyState,
  ProgressBar,
  Checkbox
} = window.RiteDS;
const DOC_TONE = {
  VERIFIED: 'success',
  PENDING_REVIEW: 'warning',
  REJECTED: 'danger'
};
function DocVerification({
  role,
  candidate,
  onToast
}) {
  const [docs, setDocs] = React.useState(() => (window.TT_DOCUMENTS[candidate.id] || []).map(d => ({
    ...d
  })));
  const [reject, setReject] = React.useState(null);
  const [reason, setReason] = React.useState('');
  const canEdit = window.ttCanEdit(role, 'TT_OFFERS_DOCS');
  const blocking = docs.filter(d => d.status === 'PENDING_REVIEW' || d.status === 'REJECTED');
  const verified = docs.filter(d => d.status === 'VERIFIED').length;
  const approve = id => {
    setDocs(ds => ds.map(d => d.id === id ? {
      ...d,
      status: 'VERIFIED',
      verifiedByName: 'Priya Nair',
      rejectionReason: undefined
    } : d));
    onToast({
      tone: 'success',
      title: 'Document verified'
    });
  };
  const doReject = () => {
    if (!reason.trim()) {
      onToast({
        tone: 'warning',
        title: 'Rejection reason required · 409',
        body: 'The service rejects a document review without a reason.'
      });
      return;
    }
    setDocs(ds => ds.map(d => d.id === reject.id ? {
      ...d,
      status: 'REJECTED',
      rejectionReason: reason,
      verifiedByName: 'Priya Nair'
    } : d));
    setReject(null);
    setReason('');
    onToast({
      tone: 'info',
      title: 'Document rejected',
      body: 'The candidate will be asked to resubmit.'
    });
  };
  const proceed = () => {
    if (blocking.length) {
      onToast({
        tone: 'warning',
        title: 'Cannot proceed · 409',
        body: blocking.length + ' document(s) are still pending review or rejected.'
      });
      return;
    }
    onToast({
      tone: 'success',
      title: 'Moved to offer initiation',
      body: candidate.talent.fullName + ' is ready for an offer.'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 1040
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: candidate.talent.fullName,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: '600 15px/1.2 var(--font-sans)'
      }
    }, candidate.talent.fullName), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: '400 12px/1.2 var(--font-mono)',
        color: 'var(--text-tertiary)',
        marginTop: 3
      }
    }, candidate.candNo + ' · ' + window.ttReqNo(candidate.requirementId)))), /*#__PURE__*/React.createElement(Badge, {
      tone: "info",
      dot: true
    }, "Documentation Verification"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Verification progress"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: verified,
    max: docs.length,
    showValue: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, verified + ' of ' + docs.length + ' documents verified')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Official company email"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      minHeight: 40,
      padding: '9px 12px',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15,
    style: {
      color: 'var(--text-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '400 13px/1.2 var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, candidate.officialEmail || '—'), candidate.officialEmailVerifiedFlag === 'Y' ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    icon: "check"
  }, "Verified") : /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Verify"))))), blocking.length > 0 && /*#__PURE__*/React.createElement(Banner, {
    tone: "warning",
    title: blocking.length + ' document(s) block offer initiation'
  }, "Proceeding while anything is pending or rejected returns a 409 from the service. Review or reject-and-request each item first."), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    header: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-sans)'
      }
    }, "Uploaded documents")
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'documentName',
      header: 'Document type',
      render: d => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 9
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "file-text",
        size: 16,
        style: {
          color: 'var(--text-tertiary)'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: '500 14px/1.2 var(--font-sans)'
        }
      }, d.documentName))
    }, {
      key: 'fileName',
      header: 'File',
      mono: true,
      muted: true
    }, {
      key: 'status',
      header: 'Status',
      width: 190,
      render: d => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: DOC_TONE[d.status],
        dot: true
      }, d.status.replace('_', ' ').toLowerCase()), d.rejectionReason && /*#__PURE__*/React.createElement(Tooltip, {
        label: d.rejectionReason
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "circle-help",
        size: 13,
        style: {
          color: 'var(--text-tertiary)'
        }
      })))
    }, {
      key: 'verifiedByName',
      header: 'Verified by',
      muted: true,
      render: d => d.verifiedByName || /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-disabled)'
        }
      }, "\u2014")
    }, {
      key: 'act',
      header: '',
      align: 'right',
      width: 130,
      render: d => canEdit && d.status !== 'VERIFIED' ? /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          gap: 6,
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "ghost",
        icon: "check",
        onClick: () => approve(d.id)
      }, "Verify"), /*#__PURE__*/React.createElement(IconButton, {
        icon: "x",
        label: "Reject",
        onClick: () => {
          setReject(d);
          setReason(d.rejectionReason || '');
        }
      })) : /*#__PURE__*/React.createElement(IconButton, {
        icon: "eye",
        label: "Preview"
      })
    }],
    rows: docs
  })), canEdit && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "rotate-ccw",
    onClick: () => onToast({
      tone: 'info',
      title: 'Re-submission requested',
      body: 'The candidate has been emailed the list of documents to resend.'
    })
  }, "Request re-submission"), /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    onClick: proceed
  }, "Proceed to offer initiation")), /*#__PURE__*/React.createElement(Modal, {
    open: !!reject,
    onClose: () => setReject(null),
    size: "sm",
    title: "Reject this document",
    description: "The reason is shown to the candidate in the re-submission request.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setReject(null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      size: "sm",
      onClick: doReject
    }, "Reject document"))
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Rejection reason",
    required: true,
    hint: "Required \u2014 the service returns 409 without it"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    value: reason,
    onChange: e => setReason(e.target.value),
    placeholder: "e.g. Unreadable \u2014 please rescan at higher resolution"
  }))));
}

/* ── Offer initiation & approvals ───────────────────────────────────────── */
function OfferPanel({
  onToast,
  onOpenPortal
}) {
  const o = window.TT_OFFER;
  const [released, setReleased] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const pending = o.approvals.filter(a => a.status !== 'APPROVED');
  const token = 'OxUV0_SK7hQ2mNz9';
  const release = () => {
    if (pending.length) {
      onToast({
        tone: 'warning',
        title: 'Cannot release · 409',
        body: pending.length + ' approval(s) are still outstanding.'
      });
      return;
    }
    setReleased(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 330px',
      gap: 20,
      alignItems: 'start',
      maxWidth: 1040
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 22,
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-mono)'
      }
    }, o.offerNo), /*#__PURE__*/React.createElement(Badge, {
      tone: released ? 'success' : 'warning',
      dot: true
    }, released ? 'Released' : 'Awaiting approvals'))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, [['Candidate', o.candidateName], ['Position', o.positionTitle], ['Joining date', window.ttFmtDate(o.joiningDate)], ['Offered CTC', '₹ ' + o.offeredCtcAmount.toLocaleString('en-IN') + ' / yr'], ['Currency', o.offeredCtcCurrency], ['Link expires', '22-Aug-2026']].map(p => /*#__PURE__*/React.createElement("div", {
    key: p[0],
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, p[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, p[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      paddingTop: 16,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Offer letter"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.6 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, o.offerLetterText)), released && /*#__PURE__*/React.createElement(Banner, {
    tone: "success",
    title: "Offer released \u2014 copy the portal link now",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      icon: copied ? 'check' : 'copy',
      onClick: () => setCopied(true)
    }, copied ? 'Copied' : 'Copy link')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.5 var(--font-mono)',
      wordBreak: 'break-all'
    }
  }, '/talenttracker/offers/portal/' + token), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6
    }
  }, "This is the only response that ever contains the token \u2014 it cannot be read back later.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10
    }
  }, released ? /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "external-link",
    onClick: onOpenPortal
  }, "Preview candidate portal") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "rotate-ccw"
  }, "Reset to draft"), /*#__PURE__*/React.createElement(Button, {
    icon: "send",
    onClick: release
  }, "Release offer"))))), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    header: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '600 14px/1.2 var(--font-sans)'
      }
    }, "Approvals")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, o.approvals.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '13px 0',
      borderBottom: i < o.approvals.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.approverName,
    size: "sm",
    tone: a.status === 'APPROVED' ? 'brand' : 'muted'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '500 13px/1.2 var(--font-sans)'
    }
  }, a.approverName), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '400 11px/1.3 var(--font-sans)',
      color: 'var(--text-tertiary)',
      marginTop: 3
    }
  }, a.approverRole)), /*#__PURE__*/React.createElement(Badge, {
    tone: a.status === 'APPROVED' ? 'success' : 'warning',
    dot: true
  }, a.status.toLowerCase()))))));
}
function OffersDocs({
  role,
  onToast,
  onOpenPortal
}) {
  const [tab, setTab] = React.useState('docs');
  const candidate = window.TT_CANDIDATES.find(c => c.id === 398);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    active: tab,
    onSelect: setTab,
    items: [{
      id: 'docs',
      label: 'Documentation Verification',
      icon: 'file-check',
      count: 1
    }, {
      id: 'offers',
      label: 'Offer Initiation',
      icon: 'file-signature',
      count: 1
    }]
  }), tab === 'docs' ? /*#__PURE__*/React.createElement(DocVerification, {
    role: role,
    candidate: candidate,
    onToast: onToast
  }) : /*#__PURE__*/React.createElement(OfferPanel, {
    onToast: onToast,
    onOpenPortal: onOpenPortal
  }));
}
Object.assign(window, {
  OffersDocs,
  DocVerification,
  OfferPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/OffersDocs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/RequirementModal.jsx
try { (() => {
const {
  Modal,
  Tabs,
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  FieldGroup,
  Badge,
  Banner,
  Icon,
  Tooltip,
  Card
} = window.RiteDS;
const EMPTY = {
  requirementType: 'STAFFING',
  verticalId: '',
  clientId: '',
  skillId: '',
  subSkillId: '',
  positionTitle: '',
  noOfPositions: 1,
  priority: '',
  engagementType: '',
  experienceText: '',
  jobDescription: '',
  billRateAmount: '',
  billRateUnit: 'HOUR',
  contractPosition: false,
  tenureMonths: '',
  stopGap: false,
  stopGapNotes: '',
  clientHiringManagerContactId: '',
  needByDate: '',
  ownerName: '',
  managerName: '',
  workLocation: '',
  workMode: '',
  probabilityPct: 50
};
function opts(type) {
  return (window.TT_LOOKUPS[type] || []).slice().sort((a, b) => Number(a.attribute1) - Number(b.attribute1)).map(l => ({
    value: l.lookupCode,
    label: l.meaning
  }));
}

/* Maps the "Y"/"N" response shape onto the boolean request shape — §3.4 of the spec. */
function fromDto(r) {
  if (!r) return {
    ...EMPTY
  };
  return {
    ...EMPTY,
    ...r,
    verticalId: r.verticalId ? String(r.verticalId) : '',
    clientId: r.clientId ? String(r.clientId) : '',
    skillId: r.skillId ? String(r.skillId) : '',
    subSkillId: r.subSkillId ? String(r.subSkillId) : '',
    clientHiringManagerContactId: r.clientHiringManagerContactId ? String(r.clientHiringManagerContactId) : '',
    contractPosition: r.isContractPosition === 'Y',
    stopGap: r.stopGapFlag === 'Y',
    billRateAmount: r.billRateAmount != null ? String(r.billRateAmount) : '',
    tenureMonths: r.tenureMonths != null ? String(r.tenureMonths) : ''
  };
}
function F({
  l,
  error,
  hint,
  required,
  children,
  span
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: span ? 'span ' + span : undefined
    }
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    label: l,
    error: error,
    hint: hint,
    required: required
  }, children));
}
const TABS = [{
  id: 'core',
  label: 'Core Info',
  icon: 'info'
}, {
  id: 'jd',
  label: 'Job Description & Hiring',
  icon: 'file-text'
}, {
  id: 'schedule',
  label: 'Schedule & Management',
  icon: 'calendar'
}];
function RequirementModal({
  open,
  requirement,
  readOnly,
  onClose,
  onSaved
}) {
  const [tab, setTab] = React.useState('core');
  const [form, setForm] = React.useState(() => fromDto(requirement));
  const [touched, setTouched] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setForm(fromDto(requirement));
      setTab('core');
      setTouched(false);
    }
  }, [open, requirement]);
  const set = k => v => setForm(f => ({
    ...f,
    [k]: v
  }));
  const setEv = k => e => set(k)(e.target.value);
  const isStaffing = form.requirementType === 'STAFFING';
  const skill = window.TT_SKILLS.find(s => String(s.id) === form.skillId);
  const subSkills = skill ? (skill.children || []).map(c => ({
    value: String(c.id),
    label: c.name
  })) : [];
  const clients = window.TT_CLIENTS.filter(c => !form.verticalId || String(c.verticalId) === form.verticalId).map(c => ({
    value: String(c.id),
    label: c.name
  }));
  const contacts = window.TT_CONTACTS.filter(c => String(c.clientId) === form.clientId).map(c => ({
    value: String(c.id),
    label: c.name + ' (' + c.title + ')'
  }));

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
    core: ['skillId', 'priority', 'requirementType', 'clientId', 'positionTitle'].filter(k => errors[k]).length,
    jd: ['tenureMonths'].filter(k => errors[k]).length,
    schedule: ['needByDate'].filter(k => errors[k]).length
  };
  const save = () => {
    setTouched(true);
    const next = {
      ...form
    };
    const errs = {};
    if (!next.skillId) errs.skillId = 1;
    if (!next.priority) errs.priority = 1;
    if (isStaffing && !next.clientId) errs.clientId = 1;
    if (!next.positionTitle) errs.positionTitle = 1;
    if (!next.needByDate) errs.needByDate = 1;
    if (next.contractPosition && !next.tenureMonths) errs.tenureMonths = 1;
    if (Object.keys(errs).length) {
      setTab(errs.skillId || errs.priority || errs.clientId || errs.positionTitle ? 'core' : errs.tenureMonths ? 'jd' : 'schedule');
      return;
    }
    onSaved(next);
  };
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    size: "lg",
    title: requirement ? 'Requirement ' + requirement.reqNo : 'New requirement',
    description: isStaffing ? 'Staffing requirement — raised against a client account.' : 'Internal requirement — raised against a Rite vertical.',
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, errorCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginRight: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        font: '400 13px/1.2 var(--font-sans)',
        color: 'var(--status-danger)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "triangle-alert",
      size: 15
    }), errorCount, " field", errorCount > 1 ? 's' : '', " need attention"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: onClose
    }, "Cancel"), !readOnly && /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "check",
      onClick: save
    }, "Save requirement"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: TABS.map(t => ({
      ...t,
      count: tabErrors[t.id] || undefined
    })),
    active: tab,
    onSelect: setTab
  }), readOnly && /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "Read-only"
  }, "Your role can view this requirement but not change it."), tab === 'core' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(F, {
    l: "Type",
    required: true,
    error: errors.requirementType
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.requirementType,
    onChange: setEv('requirementType'),
    options: opts('TT_REQUIREMENT_TYPE'),
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Skill",
    required: true,
    error: errors.skillId
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.skillId,
    onChange: e => setForm(f => ({
      ...f,
      skillId: e.target.value,
      subSkillId: ''
    })),
    placeholder: "Select a skill",
    options: window.TT_SKILLS.map(s => ({
      value: String(s.id),
      label: s.name
    })),
    invalid: !!errors.skillId,
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Sub-skill",
    hint: skill ? undefined : 'Pick a skill first'
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.subSkillId,
    onChange: setEv('subSkillId'),
    placeholder: skill ? 'Select a sub-skill' : '—',
    options: subSkills,
    disabled: readOnly || !skill
  })), /*#__PURE__*/React.createElement(F, {
    l: "Vertical",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.verticalId,
    onChange: e => setForm(f => ({
      ...f,
      verticalId: e.target.value,
      clientId: '',
      clientHiringManagerContactId: ''
    })),
    placeholder: "Select a vertical",
    options: window.TT_VERTICALS.map(v => ({
      value: String(v.id),
      label: v.name
    })),
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: isStaffing ? 'Client' : 'Client (optional for Internal)',
    required: isStaffing,
    error: errors.clientId,
    hint: !isStaffing ? 'Internal requirements sit against Rite Software' : undefined
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.clientId,
    onChange: e => setForm(f => ({
      ...f,
      clientId: e.target.value,
      clientHiringManagerContactId: ''
    })),
    placeholder: "Select a client",
    options: clients,
    invalid: !!errors.clientId,
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Priority",
    required: true,
    error: errors.priority
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.priority,
    onChange: setEv('priority'),
    placeholder: "Select a priority",
    options: opts('TT_REQUIREMENT_PRIORITY'),
    invalid: !!errors.priority,
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Position title",
    required: true,
    error: errors.positionTitle,
    span: 2
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.positionTitle,
    onChange: setEv('positionTitle'),
    placeholder: "e.g. Oracle HCM \u2014 EBS Integration Specialist",
    invalid: !!errors.positionTitle,
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Number of positions",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    type: "number",
    min: "1",
    value: form.noOfPositions,
    onChange: setEv('noOfPositions'),
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Engagement type"
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.engagementType,
    onChange: setEv('engagementType'),
    placeholder: "Select",
    options: opts('TT_ENGAGEMENT_TYPE'),
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Experience required",
    hint: "Free text, e.g. \u201C6+ years\u201D"
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.experienceText,
    onChange: setEv('experienceText'),
    placeholder: "6+ years",
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Work mode"
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.workMode,
    onChange: setEv('workMode'),
    placeholder: "Select",
    options: opts('TT_WORK_MODE'),
    disabled: readOnly
  }))), tab === 'jd' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Job description",
    hint: "Shown to candidates and used by the AI matcher to score resumes."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 6,
    value: form.jobDescription,
    onChange: setEv('jobDescription'),
    disabled: readOnly,
    placeholder: "Describe the role, the modules involved, and what \u201Cgood\u201D looks like in the first 90 days."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(F, {
    l: "Bill rate"
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.billRateAmount,
    onChange: setEv('billRateAmount'),
    placeholder: "68",
    suffix: "USD",
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Rate unit"
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.billRateUnit,
    onChange: setEv('billRateUnit'),
    options: opts('TT_RATE_UNIT'),
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Probability of closure",
    hint: form.probabilityPct + '%'
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: form.probabilityPct,
    onChange: setEv('probabilityPct'),
    disabled: readOnly,
    style: {
      width: '100%',
      accentColor: 'var(--rite-tropical-rainforest)',
      marginTop: 12
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "subtle",
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: form.contractPosition,
    onChange: set('contractPosition'),
    label: "This is a contract position",
    disabled: readOnly
  }), form.contractPosition && /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Tenure of the project",
    required: true,
    error: errors.tenureMonths,
    hint: "Contract positions only"
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.tenureMonths,
    onChange: setEv('tenureMonths'),
    placeholder: "6",
    suffix: "months",
    invalid: !!errors.tenureMonths,
    disabled: readOnly,
    style: {
      maxWidth: 240
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "subtle",
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1.3 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "Stop-gap arrangement"), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Temporary cover raised while a permanent hire is approved"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-help",
    size: 14,
    style: {
      color: 'var(--text-tertiary)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: !form.stopGap,
    onChange: () => set('stopGap')(false),
    label: "No",
    disabled: readOnly
  }), /*#__PURE__*/React.createElement(Radio, {
    checked: form.stopGap,
    onChange: () => set('stopGap')(true),
    label: "Yes \u2014 temporary cover",
    disabled: readOnly
  })), form.stopGap && /*#__PURE__*/React.createElement(FieldGroup, {
    label: "Stop-gap notes"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 2,
    value: form.stopGapNotes,
    onChange: setEv('stopGapNotes'),
    disabled: readOnly,
    placeholder: "What is being covered, and until when?"
  }))))), tab === 'schedule' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(F, {
    l: "Client hiring manager",
    hint: form.clientId ? undefined : 'Select a client first'
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.clientHiringManagerContactId,
    onChange: setEv('clientHiringManagerContactId'),
    placeholder: form.clientId ? 'Select a contact' : '—',
    options: contacts,
    disabled: readOnly || !form.clientId
  })), /*#__PURE__*/React.createElement(F, {
    l: "Need by date",
    required: true,
    error: errors.needByDate
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    value: form.needByDate,
    onChange: setEv('needByDate'),
    invalid: !!errors.needByDate,
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Work location"
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.workLocation,
    onChange: setEv('workLocation'),
    placeholder: "Hyderabad, IN",
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Owner"
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.ownerName,
    onChange: setEv('ownerName'),
    placeholder: "Select an owner",
    options: window.TT_USERS.filter(u => u.status === 'ACTIVE').map(u => ({
      value: u.name,
      label: u.name + ' · ' + u.role.replace('_', ' ').toLowerCase()
    })),
    disabled: readOnly
  })), /*#__PURE__*/React.createElement(F, {
    l: "Reporting manager"
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.managerName,
    onChange: setEv('managerName'),
    placeholder: "Select a manager",
    options: window.TT_USERS.filter(u => ['MANAGER', 'DELIVERY_HEAD'].includes(u.role)).map(u => ({
      value: u.name,
      label: u.name
    })),
    disabled: readOnly
  }))), /*#__PURE__*/React.createElement(Banner, {
    tone: "info",
    title: "Client records are read-only"
  }, "The reference API exposes clients and contacts but has no write endpoint yet, so a new client cannot be created from this form."))));
}
Object.assign(window, {
  RequirementModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/RequirementModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/Requirements.jsx
try { (() => {
const {
  Card,
  StatTile,
  Badge,
  Button,
  IconButton,
  DataTable,
  Input,
  Select,
  Tag,
  Tooltip,
  Icon,
  EmptyState,
  Banner,
  ProgressBar
} = window.RiteDS;
const PRIORITY_TONE = {
  CRITICAL: 'danger',
  HIGH: 'warning',
  MEDIUM: 'info',
  LOW: 'neutral'
};
const STATUS_TONE = {
  OPEN: 'info',
  SOURCING: 'warning',
  PARTIAL: 'neutral',
  CLOSED: 'success'
};
function label(type, code) {
  const row = (window.TT_LOOKUPS[type] || []).find(l => l.lookupCode === code);
  return row ? row.meaning : code || '—';
}
function skillPath(r) {
  const s = window.TT_SKILLS.find(x => x.id === r.skillId);
  if (!s) return '—';
  const sub = (s.children || []).find(c => c.id === r.subSkillId);
  return sub ? s.name + ' › ' + sub.name : s.name;
}
function clientName(id) {
  const c = window.TT_CLIENTS.find(x => x.id === id);
  return c ? c.name : '—';
}
function verticalName(id) {
  const v = window.TT_VERTICALS.find(x => x.id === id);
  return v ? v.name : '—';
}
function fmtDate(iso) {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-');
  return d + '-' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Number(m) - 1] + '-' + y;
}
function daysUntil(iso) {
  if (!iso) return null;
  return Math.round((new Date(iso) - new Date('2026-08-09')) / 86400000);
}
const SAVED_VIEWS = [{
  id: 'all',
  label: 'All open'
}, {
  id: 'critical',
  label: 'Critical only'
}, {
  id: 'mine',
  label: 'Owned by me'
}, {
  id: 'stopgap',
  label: 'Stop-gap'
}, {
  id: 'overdue',
  label: 'Past need-by'
}];
function Requirements({
  role,
  onOpenRequirement,
  onNewRequirement,
  onOpenCandidates
}) {
  const [view, setView] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [vertical, setVertical] = React.useState('');
  const [client, setClient] = React.useState('');
  const [dense, setDense] = React.useState(false);
  const [sortKey, setSortKey] = React.useState('needByDate');
  const [sortDir, setSortDir] = React.useState('asc');
  const canEdit = window.ttCanEdit(role, 'TT_REQUIREMENTS');
  const showBillRate = window.ttShowComponent(role, 'TT_REQ_BILL_RATE');
  const me = (window.TT_ROLES.find(r => r.code === role) || {}).user;
  const rows = React.useMemo(() => {
    let list = window.TT_REQUIREMENTS.slice();
    if (view === 'critical') list = list.filter(r => r.priority === 'CRITICAL');
    if (view === 'mine') list = list.filter(r => r.ownerName === me);
    if (view === 'stopgap') list = list.filter(r => r.stopGapFlag === 'Y');
    if (view === 'overdue') list = list.filter(r => r.status !== 'CLOSED' && daysUntil(r.needByDate) < 0);
    if (vertical) list = list.filter(r => String(r.verticalId) === vertical);
    if (client) list = list.filter(r => String(r.clientId) === client);
    if (q) {
      const t = q.toLowerCase();
      list = list.filter(r => (r.reqNo + ' ' + r.positionTitle + ' ' + skillPath(r) + ' ' + clientName(r.clientId) + ' ' + (r.ownerName || '')).toLowerCase().includes(t));
    }
    const dir = sortDir === 'asc' ? 1 : -1;
    return list.sort((a, b) => String(a[sortKey] || '').localeCompare(String(b[sortKey] || '')) * dir);
  }, [view, q, vertical, client, sortKey, sortDir, me]);
  const onSort = key => {
    if (key === sortKey) setSortDir(sortDir === 'asc' ? 'desc' : 'asc');else {
      setSortKey(key);
      setSortDir('asc');
    }
  };
  const columns = [{
    key: 'reqNo',
    header: 'Req ID',
    mono: true,
    width: 108,
    sortable: true,
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 13px/1.2 var(--font-mono)',
        color: 'var(--text-brand)'
      }
    }, r.reqNo)
  }, {
    key: 'skill',
    header: 'Skill / Sub-skill',
    sortable: true,
    render: r => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 14px/1.2 var(--font-sans)'
      }
    }, skillPath(r)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12px/1.2 var(--font-sans)',
        color: 'var(--text-tertiary)',
        maxWidth: 260,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, r.positionTitle))
  }, {
    key: 'requirementType',
    header: 'Type',
    muted: true,
    render: r => label('TT_REQUIREMENT_TYPE', r.requirementType)
  }, {
    key: 'client',
    header: 'Client / Vertical',
    render: r => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 14px/1.2 var(--font-sans)'
      }
    }, clientName(r.clientId)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12px/1.2 var(--font-sans)',
        color: 'var(--text-tertiary)'
      }
    }, verticalName(r.verticalId)))
  }, {
    key: 'positions',
    header: 'Filled',
    align: 'center',
    width: 96,
    render: r => /*#__PURE__*/React.createElement(Tooltip, {
      label: r.positionsFilled + ' of ' + r.noOfPositions + ' positions filled'
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        width: 60
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 12px/1 var(--font-mono)',
        color: 'var(--text-secondary)'
      }
    }, r.positionsFilled, "/", r.noOfPositions), /*#__PURE__*/React.createElement(ProgressBar, {
      value: r.positionsFilled,
      max: r.noOfPositions,
      size: "sm",
      style: {
        width: 52
      }
    })))
  }, {
    key: 'priority',
    header: 'Priority',
    width: 104,
    sortable: true,
    render: r => /*#__PURE__*/React.createElement(Badge, {
      tone: PRIORITY_TONE[r.priority],
      dot: true
    }, label('TT_REQUIREMENT_PRIORITY', r.priority))
  }, {
    key: 'status',
    header: 'Status',
    width: 104,
    render: r => /*#__PURE__*/React.createElement(Badge, {
      tone: STATUS_TONE[r.status]
    }, label('TT_REQUIREMENT_STATUS', r.status))
  }];
  if (showBillRate) {
    columns.push({
      key: 'billRateAmount',
      header: 'Bill rate',
      align: 'right',
      mono: true,
      width: 100,
      render: r => r.billRateAmount ? '$' + r.billRateAmount + label('TT_RATE_UNIT', r.billRateUnit) : /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-disabled)'
        }
      }, "\u2014")
    });
  }
  columns.push({
    key: 'ownerName',
    header: 'Owner',
    muted: true,
    sortable: true
  }, {
    key: 'needByDate',
    header: 'Need by',
    align: 'right',
    mono: true,
    sortable: true,
    render: r => {
      const d = daysUntil(r.needByDate);
      const late = r.status !== 'CLOSED' && d < 0;
      return /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          justifyContent: 'flex-end'
        }
      }, late && /*#__PURE__*/React.createElement(Tooltip, {
        label: Math.abs(d) + ' days past need-by'
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "triangle-alert",
        size: 13,
        style: {
          color: 'var(--status-danger)'
        }
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          color: late ? 'var(--status-danger)' : 'var(--text-primary)'
        }
      }, fmtDate(r.needByDate)));
    }
  }, {
    key: 'flags',
    header: '',
    width: 84,
    align: 'right',
    render: r => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 4,
        justifyContent: 'flex-end'
      }
    }, r.stopGapFlag === 'Y' && /*#__PURE__*/React.createElement(Tooltip, {
      label: "Stop-gap arrangement"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "life-buoy",
      size: 15,
      style: {
        color: 'var(--status-warning)'
      }
    })), r.isContractPosition === 'Y' && /*#__PURE__*/React.createElement(Tooltip, {
      label: 'Contract · ' + r.tenureMonths + ' months'
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-clock",
      size: 15,
      style: {
        color: 'var(--text-tertiary)'
      }
    })), /*#__PURE__*/React.createElement(Tooltip, {
      label: "View candidates"
    }, /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        e.stopPropagation();
        onOpenCandidates(r.id);
      },
      style: {
        display: 'inline-flex',
        cursor: 'pointer',
        color: 'var(--text-tertiary)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 15
    }))))
  });
  const s = window.TT_SUMMARY;
  const clientOptions = window.TT_CLIENTS.filter(c => !vertical || String(c.verticalId) === vertical).map(c => ({
    value: String(c.id),
    label: c.name
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 1480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: s.openRequirements,
    label: "Open requirements",
    icon: "clipboard-list"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: s.staffingOpen,
    label: "Staffing (client)",
    icon: "building-2"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: s.internalOpen,
    label: "Internal",
    icon: "house"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: s.criticalPriority,
    label: "Critical priority",
    deltaTone: "danger",
    icon: "flame"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: s.stopGapArrangements,
    label: "Stop-gap arrangements",
    icon: "life-buoy"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, SAVED_VIEWS.map(v => /*#__PURE__*/React.createElement(Tag, {
    key: v.id,
    selected: view === v.id,
    onClick: () => setView(v.id)
  }, v.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search by skill, client, owner\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      width: 250
    }
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    placeholder: "All verticals",
    value: vertical,
    onChange: e => {
      setVertical(e.target.value);
      setClient('');
    },
    options: window.TT_VERTICALS.map(v => ({
      value: String(v.id),
      label: v.name
    })),
    style: {
      width: 165
    }
  }), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    placeholder: "All clients",
    value: client,
    onChange: e => setClient(e.target.value),
    options: clientOptions,
    style: {
      width: 185
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: dense ? 'Comfortable rows' : 'Compact rows'
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: dense ? 'rows-3' : 'rows-2',
    label: "Row density",
    onClick: () => setDense(!dense),
    variant: "outline"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Export the filtered list to CSV"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    label: "Export",
    variant: "outline"
  })), canEdit && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "plus",
    onClick: onNewRequirement
  }, "New requirement")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    rows: rows,
    dense: dense,
    onRowClick: onOpenRequirement,
    sortKey: sortKey,
    sortDir: sortDir,
    onSort: onSort,
    empty: /*#__PURE__*/React.createElement(EmptyState, {
      icon: "clipboard-list",
      title: "No requirements match these filters",
      description: "Clear the search or pick a different saved view.",
      action: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "secondary",
        onClick: () => {
          setQ('');
          setVertical('');
          setClient('');
          setView('all');
        }
      }, "Reset filters")
    })
  }), rows.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.2 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "Showing ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, rows.length), " of ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, s.openRequirements), " \xB7 page 1 of 3"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "chevron-left",
    disabled: true
  }, "Previous"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    iconAfter: "chevron-right"
  }, "Next")))));
}
Object.assign(window, {
  Requirements,
  ttLabel: label,
  ttSkillPath: skillPath,
  ttClientName: clientName,
  ttVerticalName: verticalName,
  ttFmtDate: fmtDate,
  TT_PRIORITY_TONE: PRIORITY_TONE,
  TT_STATUS_TONE: STATUS_TONE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/Requirements.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/Shell.jsx
try { (() => {
const {
  SideNav,
  TopBar,
  TopBarSearch,
  IconButton,
  Avatar,
  Badge,
  Button,
  Icon,
  Select,
  Tooltip,
  Card,
  EmptyState
} = window.RiteDS;

/* ── Brand lockup: Rite mark + product name ─────────────────────────────── */
function ProductLogo({
  collapsed
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/rite-mark.png",
    alt: "Rite",
    style: {
      height: 26,
      width: 'auto',
      flex: '0 0 auto'
    }
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 15px/1.1 var(--font-sans)',
      letterSpacing: '-0.01em',
      color: '#FFFFFF'
    }
  }, "Talent Tracker"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 9px/1.2 var(--font-sans)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--rite-sage)',
      marginTop: 3
    }
  }, "Rite Software")));
}

/* ── Role switcher (dev stub for MSAL, per §4 of the spec) ──────────────── */
function RoleSwitcher({
  role,
  onChange,
  compact
}) {
  const [open, setOpen] = React.useState(false);
  const current = window.TT_ROLES.find(r => r.code === role) || window.TT_ROLES[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: 34,
      padding: '0 8px 0 6px',
      flex: '0 0 auto',
      background: open ? 'var(--interactive-neutral-hover)' : 'transparent',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: current.user,
    size: "sm"
  }), !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1.2 var(--font-sans)',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap'
    }
  }, current.user), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px/1.2 var(--font-sans)',
      color: 'var(--text-tertiary)',
      whiteSpace: 'nowrap'
    }
  }, current.label)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    style: {
      color: 'var(--text-tertiary)'
    }
  })), open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 42,
      zIndex: 50,
      width: 250,
      padding: 6,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      padding: '8px 10px 6px'
    }
  }, "Sign in as \xB7 SSO stub"), window.TT_ROLES.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.code,
    type: "button",
    onClick: () => {
      onChange(r.code);
      setOpen(false);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '8px 10px',
      background: r.code === role ? 'var(--surface-subtle)' : 'transparent',
      border: 0,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.user,
    size: "xs",
    tone: r.code === role ? 'brand' : 'muted'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '500 13px/1.2 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, r.user), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '400 11px/1.3 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, r.label)), r.code === role && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    style: {
      color: 'var(--text-brand)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      margin: '6px 0 0',
      padding: '10px 10px 4px',
      font: '400 11px/1.45 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "Microsoft 365 SSO is not wired yet. Switching role re-resolves navigation and field visibility exactly as ", /*#__PURE__*/React.createElement("code", {
    style: {
      font: '400 11px var(--font-mono)'
    }
  }, "session-context"), " will."))));
}

/* ── Command palette (⌘K) ───────────────────────────────────────────────── */
function CommandPalette({
  open,
  onClose,
  role,
  onNavigate
}) {
  const [q, setQ] = React.useState('');
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    if (!open) setQ('');
  }, [open]);
  if (!open) return null;
  const pages = window.ttVisiblePages(role).map(p => ({
    kind: 'Page',
    label: p.pageName,
    icon: p.icon,
    go: p.route
  }));
  const reqs = window.TT_REQUIREMENTS.map(r => ({
    kind: 'Requirement',
    label: r.reqNo + ' · ' + r.positionTitle,
    icon: 'clipboard-list',
    go: 'requirements'
  }));
  const cands = window.TT_CANDIDATES.map(c => ({
    kind: 'Candidate',
    label: c.talent.fullName + ' · ' + c.candNo,
    icon: 'user',
    go: 'candidates'
  }));
  const all = [...pages, ...(window.ttCanSee(role, 'TT_REQUIREMENTS') ? reqs : []), ...(window.ttCanSee(role, 'TT_CANDIDATES') ? cands : [])];
  const hits = q ? all.filter(i => i.label.toLowerCase().includes(q.toLowerCase())).slice(0, 8) : pages;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 300,
      background: 'var(--surface-overlay)',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '14vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(560px, 92vw)',
      height: 'fit-content',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 16px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17,
    style: {
      color: 'var(--text-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Jump to a page, requirement or candidate\u2026",
    onKeyDown: e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Enter' && hits[0]) {
        onNavigate(hits[0].go);
        onClose();
      }
    },
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: '400 15px/1.2 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("kbd", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      color: 'var(--text-tertiary)',
      border: '1px solid var(--border-default)',
      borderRadius: 4,
      padding: '3px 6px'
    }
  }, "esc")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 340,
      overflowY: 'auto',
      padding: 6
    }
  }, hits.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 12px',
      textAlign: 'center',
      font: '400 13px/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "Nothing matches \u201C", q, "\u201D."), hits.map((h, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: () => {
      onNavigate(h.go);
      onClose();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      width: '100%',
      padding: '9px 10px',
      background: 'transparent',
      border: 0,
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      textAlign: 'left'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--surface-subtle)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: h.icon,
    size: 16,
    style: {
      color: 'var(--text-brand)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, h.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 10px/1 var(--font-sans)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, h.kind))))));
}

/* ── Audit trail drawer ─────────────────────────────────────────────────── */
const AUDIT = [{
  who: 'Priya Nair',
  what: 'moved Meera Joshi to L2 Select',
  when: '10 minutes ago',
  icon: 'arrow-right-left',
  tone: 'var(--text-brand)'
}, {
  who: 'System',
  what: 'flagged CAND00398 — Documentation SLA exceeded by 3 days',
  when: '1 hour ago',
  icon: 'triangle-alert',
  tone: 'var(--status-warning)'
}, {
  who: 'Anil Raj',
  what: 'created requirement RM00231',
  when: '2 hours ago',
  icon: 'plus',
  tone: 'var(--text-tertiary)'
}, {
  who: 'Priya Nair',
  what: 'rejected farhan_payslip.pdf — unreadable',
  when: 'Yesterday',
  icon: 'x',
  tone: 'var(--status-danger)'
}, {
  who: 'GKM',
  what: 'approved offer OFR00119 for Neha Kapoor',
  when: 'Yesterday',
  icon: 'circle-check',
  tone: 'var(--status-success)'
}, {
  who: 'AI Parser',
  what: 'auto-filled 6 fields on CAND00405 from resume',
  when: '2 days ago',
  icon: 'sparkles',
  tone: 'var(--text-brand)'
}];
function AuditDrawer({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 250,
      background: 'var(--surface-overlay)',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(400px, 92vw)',
      height: '100%',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column',
      animation: 'rite-fade var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 10px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-brand)'
    }
  }, "Activity log"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 16px/1.3 var(--font-sans)',
      marginTop: 5
    }
  }, "Recent activity")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 20px'
    }
  }, AUDIT.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      padding: '15px 0',
      borderBottom: i < AUDIT.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: a.tone,
      display: 'flex',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.45 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: '500 13px/1.45 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, a.who), " ", a.what), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px/1.2 var(--font-mono)',
      color: 'var(--text-tertiary)'
    }
  }, a.when)))))));
}

/* Collapses header controls before they can crush the page title. */
function useNarrow(px) {
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const check = () => setNarrow(window.innerWidth < px);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [px]);
  return narrow;
}

/* ── The shell ──────────────────────────────────────────────────────────── */
function Shell({
  role,
  onRoleChange,
  route,
  onNavigate,
  title,
  eyebrow,
  actions,
  children
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [palette, setPalette] = React.useState(false);
  const [audit, setAudit] = React.useState(false);
  const narrow = useNarrow(1240);
  const veryNarrow = useNarrow(980);
  React.useEffect(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPalette(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const pages = window.ttVisiblePages(role);
  const sections = [{
    label: 'Talent pipeline',
    items: pages.filter(p => p.pageCode !== 'TT_ADMIN').map(p => ({
      id: p.route,
      label: p.pageName,
      icon: p.icon
    }))
  }];
  if (pages.some(p => p.pageCode === 'TT_ADMIN')) {
    sections.push({
      label: 'Configuration',
      items: [{
        id: 'admin',
        label: 'Admin',
        icon: 'shield-check'
      }]
    });
  }
  const readOnly = !window.ttCanEdit(role, (window.TT_PAGES.find(p => p.route === route) || {}).pageCode);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--surface-page)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SideNav, {
    sections: sections,
    active: route,
    onSelect: onNavigate,
    collapsed: collapsed,
    header: /*#__PURE__*/React.createElement(ProductLogo, {
      collapsed: collapsed
    }),
    footer: /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setCollapsed(!collapsed),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '6px 4px',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        color: 'var(--rite-sage)',
        justifyContent: collapsed ? 'center' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: collapsed ? 'panel-left-open' : 'panel-left-close',
      size: 17
    }), !collapsed && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12px/1.2 var(--font-sans)'
      }
    }, "Collapse"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    eyebrow: eyebrow,
    title: title,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, narrow ? /*#__PURE__*/React.createElement(Tooltip, {
      label: "Search \u2014 \u2318K"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "Search",
      variant: "outline",
      onClick: () => setPalette(true)
    })) : /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setPalette(true),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flex: '0 1 auto',
        minWidth: 0,
        height: 34,
        padding: '0 10px',
        background: 'var(--surface-sunken)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        color: 'var(--text-tertiary)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 15
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px/1 var(--font-sans)',
        width: 120,
        textAlign: 'left',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, "Search\u2026"), /*#__PURE__*/React.createElement("kbd", {
      style: {
        font: '500 10px/1 var(--font-mono)',
        border: '1px solid var(--border-default)',
        borderRadius: 4,
        padding: '3px 5px',
        flex: '0 0 auto'
      }
    }, "\u2318K")), readOnly && !veryNarrow && /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      icon: "eye"
    }, "Read only"), /*#__PURE__*/React.createElement(Tooltip, {
      label: "Activity log"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "history",
      label: "Activity log",
      onClick: () => setAudit(true)
    })), !veryNarrow && /*#__PURE__*/React.createElement(Tooltip, {
      label: "3 SLA breaches this week"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Notifications"
    })), actions, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 24,
        background: 'var(--border-subtle)',
        margin: '0 2px',
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement(RoleSwitcher, {
      role: role,
      onChange: onRoleChange,
      compact: veryNarrow
    }))
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 24
    }
  }, children)), /*#__PURE__*/React.createElement(CommandPalette, {
    open: palette,
    onClose: () => setPalette(false),
    role: role,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(AuditDrawer, {
    open: audit,
    onClose: () => setAudit(false)
  }));
}

/* ── Shared page helpers ────────────────────────────────────────────────── */
function PageHead({
  title,
  sub,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 17px/1.25 var(--font-sans)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13px/1.45 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, children));
}
function NotPermitted({
  page
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "lock",
    title: 'You do not have access to ' + page,
    description: "Navigation is driven by the RBAC matrix returned by session-context. Ask an administrator to grant this page to your role."
  }));
}
Object.assign(window, {
  Shell,
  PageHead,
  ProductLogo,
  RoleSwitcher,
  CommandPalette,
  AuditDrawer,
  NotPermitted
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/data.js
try { (() => {
/* Mock data for the Talent Tracker UI kit.
   Shapes mirror the real API contract in TALENT_TRACKER_UI_REQUIREMENTS.md exactly:
   camelCase, "Y"/"N" boolean strings on responses, omitted (not null) optional fields,
   zero-based paging envelopes. Swap this file for the axios layer to go live. */

const LOOKUPS = {
  TT_REQUIREMENT_PRIORITY: [{
    lookupCode: 'CRITICAL',
    meaning: 'Critical',
    attribute1: '1'
  }, {
    lookupCode: 'HIGH',
    meaning: 'High',
    attribute1: '2'
  }, {
    lookupCode: 'MEDIUM',
    meaning: 'Medium',
    attribute1: '3'
  }, {
    lookupCode: 'LOW',
    meaning: 'Low',
    attribute1: '4'
  }],
  TT_REQUIREMENT_TYPE: [{
    lookupCode: 'STAFFING',
    meaning: 'Staffing',
    attribute1: '1'
  }, {
    lookupCode: 'INTERNAL',
    meaning: 'Internal',
    attribute1: '2'
  }],
  TT_REQUIREMENT_STATUS: [{
    lookupCode: 'OPEN',
    meaning: 'Open',
    attribute1: '1'
  }, {
    lookupCode: 'SOURCING',
    meaning: 'Sourcing',
    attribute1: '2'
  }, {
    lookupCode: 'PARTIAL',
    meaning: 'Partial',
    attribute1: '3'
  }, {
    lookupCode: 'CLOSED',
    meaning: 'Closed',
    attribute1: '4'
  }],
  TT_ENGAGEMENT_TYPE: [{
    lookupCode: 'NEW_PROJECT',
    meaning: 'New Project',
    attribute1: '1'
  }, {
    lookupCode: 'REPLACEMENT',
    meaning: 'Replacement',
    attribute1: '2'
  }, {
    lookupCode: 'EXPANSION',
    meaning: 'Expansion',
    attribute1: '3'
  }],
  TT_WORK_MODE: [{
    lookupCode: 'ONSITE',
    meaning: 'Onsite',
    attribute1: '1'
  }, {
    lookupCode: 'HYBRID',
    meaning: 'Hybrid',
    attribute1: '2'
  }, {
    lookupCode: 'REMOTE',
    meaning: 'Remote',
    attribute1: '3'
  }],
  TT_RATE_UNIT: [{
    lookupCode: 'HOUR',
    meaning: '/ hr',
    attribute1: '1'
  }, {
    lookupCode: 'DAY',
    meaning: '/ day',
    attribute1: '2'
  }, {
    lookupCode: 'MONTH',
    meaning: '/ month',
    attribute1: '3'
  }],
  TT_INTERVIEW_ROUND_TYPE: [{
    lookupCode: 'SCREENING',
    meaning: 'Screening',
    attribute1: '1'
  }, {
    lookupCode: 'L1',
    meaning: 'L1 Technical',
    attribute1: '2'
  }, {
    lookupCode: 'L2',
    meaning: 'L2 Technical',
    attribute1: '3'
  }, {
    lookupCode: 'CLIENT',
    meaning: 'Client Round',
    attribute1: '4'
  }],
  TT_INTERVIEW_MODE: [{
    lookupCode: 'TEAMS',
    meaning: 'Microsoft Teams',
    attribute1: '1'
  }, {
    lookupCode: 'MEET',
    meaning: 'Google Meet',
    attribute1: '2'
  }, {
    lookupCode: 'IN_PERSON',
    meaning: 'In person',
    attribute1: '3'
  }],
  TT_DROP_REASON: [{
    lookupCode: 'CANDIDATE_WITHDREW',
    meaning: 'Candidate withdrew',
    attribute1: '1'
  }, {
    lookupCode: 'REJECTED_TECH',
    meaning: 'Rejected — technical',
    attribute1: '2'
  }, {
    lookupCode: 'CTC_MISMATCH',
    meaning: 'CTC mismatch',
    attribute1: '3'
  }, {
    lookupCode: 'POSITION_CLOSED',
    meaning: 'Position closed',
    attribute1: '4'
  }]
};
const VERTICALS = [{
  id: 1,
  name: 'Staffing'
}, {
  id: 2,
  name: 'Managed Services'
}, {
  id: 3,
  name: 'Rite Internal'
}];
const CLIENTS = [{
  id: 1,
  verticalId: 1,
  name: 'Acme Financial Corp'
}, {
  id: 2,
  verticalId: 1,
  name: 'Nova Retail Group'
}, {
  id: 3,
  verticalId: 2,
  name: 'Meridian Logistics'
}, {
  id: 4,
  verticalId: 1,
  name: 'Cianbro'
}, {
  id: 5,
  verticalId: 3,
  name: 'Rite Software'
}];
const CONTACTS = [{
  id: 11,
  clientId: 1,
  name: 'Rebecca Shaw',
  title: 'VP Engineering'
}, {
  id: 12,
  clientId: 2,
  name: 'Daniel Cruz',
  title: 'Head of Digital'
}, {
  id: 13,
  clientId: 3,
  name: 'Anita Bose',
  title: 'Programme Director'
}, {
  id: 14,
  clientId: 4,
  name: 'Mark Ellery',
  title: 'CIO'
}];
const SKILLS = [{
  id: 1,
  name: 'HCM',
  children: [{
    id: 11,
    name: 'EBS'
  }, {
    id: 12,
    name: 'Fusion'
  }, {
    id: 13,
    name: 'Payroll'
  }]
}, {
  id: 2,
  name: 'FIN',
  children: [{
    id: 21,
    name: 'GL'
  }, {
    id: 22,
    name: 'AP / AR'
  }]
}, {
  id: 3,
  name: 'SCM',
  children: [{
    id: 31,
    name: 'Inventory'
  }, {
    id: 32,
    name: 'Procurement'
  }]
}, {
  id: 4,
  name: 'Tech',
  children: [{
    id: 41,
    name: 'React'
  }, {
    id: 42,
    name: 'Java'
  }, {
    id: 43,
    name: 'OIC'
  }]
}, {
  id: 5,
  name: 'PPM',
  children: [{
    id: 51,
    name: 'Projects'
  }]
}];
const STAGES = [{
  stageCode: 'SOURCED',
  stageName: 'Sourced',
  stageSeq: 1,
  stageGroup: 'SOURCING'
}, {
  stageCode: 'SCREENING',
  stageName: 'Screening',
  stageSeq: 2,
  stageGroup: 'SCREENING'
}, {
  stageCode: 'L1_SCHEDULED',
  stageName: 'L1 Scheduled',
  stageSeq: 3,
  stageGroup: 'INTERVIEW'
}, {
  stageCode: 'L2_SELECT',
  stageName: 'L2 Select',
  stageSeq: 4,
  stageGroup: 'INTERVIEW'
}, {
  stageCode: 'DOCUMENTATION',
  stageName: 'Documentation',
  stageSeq: 5,
  stageGroup: 'OFFER'
}, {
  stageCode: 'OFFER_RELEASED',
  stageName: 'Offer Released',
  stageSeq: 6,
  stageGroup: 'OFFER'
}, {
  stageCode: 'JOINED',
  stageName: 'Joined',
  stageSeq: 7,
  stageGroup: 'CLOSED'
}];
const SUMMARY = {
  openRequirements: 47,
  staffingOpen: 18,
  internalOpen: 29,
  criticalPriority: 6,
  stopGapArrangements: 5
};
const REQUIREMENTS = [{
  id: 231,
  reqNo: 'RM00231',
  requirementType: 'STAFFING',
  verticalId: 1,
  clientId: 1,
  skillId: 1,
  subSkillId: 11,
  positionTitle: 'Oracle HCM — EBS Integration Specialist',
  noOfPositions: 2,
  positionsFilled: 0,
  priority: 'CRITICAL',
  status: 'SOURCING',
  engagementType: 'NEW_PROJECT',
  experienceMinYrs: 6,
  experienceMaxYrs: 10,
  experienceText: '6+ years',
  jobDescription: 'Oracle HCM Cloud — EBS integration specialist, payroll & absence management modules. Must have led at least two full-cycle payroll conversions and be comfortable owning the interface design end to end.',
  billRateAmount: 68,
  billRateCurrency: 'USD',
  billRateUnit: 'HOUR',
  isContractPosition: 'Y',
  tenureMonths: 6,
  stopGapFlag: 'Y',
  stopGapNotes: 'Temporary cover while the permanent hire is approved.',
  clientHiringManagerContactId: 11,
  clientHiringManagerName: 'Rebecca Shaw',
  ownerPersonNumber: '100231',
  ownerName: 'AnilRaj',
  managerPersonNumber: '100002',
  managerName: 'GKM',
  probabilityPct: 80,
  needByDate: '2026-07-12',
  loggedDate: '2026-06-02',
  workLocation: 'Hyderabad, IN',
  workMode: 'HYBRID'
}, {
  id: 229,
  reqNo: 'RM00229',
  requirementType: 'INTERNAL',
  verticalId: 3,
  clientId: 5,
  skillId: 2,
  subSkillId: 21,
  positionTitle: 'Oracle Financials Consultant',
  noOfPositions: 1,
  positionsFilled: 0,
  priority: 'HIGH',
  status: 'OPEN',
  engagementType: 'EXPANSION',
  experienceText: '4–8 years',
  jobDescription: 'Internal bench build for GL and reconciliation work across the Energy portfolio.',
  isContractPosition: 'N',
  stopGapFlag: 'N',
  ownerPersonNumber: '100002',
  ownerName: 'GKM',
  managerPersonNumber: '100002',
  managerName: 'GKM',
  probabilityPct: 60,
  needByDate: '2026-07-18',
  loggedDate: '2026-06-10',
  workLocation: 'Hyderabad, IN',
  workMode: 'ONSITE'
}, {
  id: 227,
  reqNo: 'RM00227',
  requirementType: 'STAFFING',
  verticalId: 1,
  clientId: 2,
  skillId: 4,
  subSkillId: 41,
  positionTitle: 'Senior React Engineer',
  noOfPositions: 3,
  positionsFilled: 1,
  priority: 'MEDIUM',
  status: 'SOURCING',
  engagementType: 'NEW_PROJECT',
  experienceText: '5+ years',
  jobDescription: 'Front-end lead for the Nova customer portal rebuild.',
  billRateAmount: 58,
  billRateCurrency: 'USD',
  billRateUnit: 'HOUR',
  isContractPosition: 'N',
  stopGapFlag: 'N',
  clientHiringManagerContactId: 12,
  clientHiringManagerName: 'Daniel Cruz',
  ownerPersonNumber: '100227',
  ownerName: 'Srinivas R',
  managerPersonNumber: '100002',
  managerName: 'GKM',
  probabilityPct: 70,
  needByDate: '2026-07-22',
  loggedDate: '2026-06-14',
  workLocation: 'Remote',
  workMode: 'REMOTE'
}, {
  id: 224,
  reqNo: 'RM00224',
  requirementType: 'STAFFING',
  verticalId: 2,
  clientId: 3,
  skillId: 3,
  subSkillId: 32,
  positionTitle: 'SCM Procurement Lead',
  noOfPositions: 1,
  positionsFilled: 0,
  priority: 'HIGH',
  status: 'PARTIAL',
  engagementType: 'REPLACEMENT',
  experienceText: '8+ years',
  jobDescription: 'Replacement for the outgoing procurement workstream lead on the Meridian AMS account.',
  billRateAmount: 52,
  billRateCurrency: 'USD',
  billRateUnit: 'HOUR',
  isContractPosition: 'Y',
  tenureMonths: 12,
  stopGapFlag: 'Y',
  clientHiringManagerContactId: 13,
  clientHiringManagerName: 'Anita Bose',
  ownerPersonNumber: '100224',
  ownerName: 'Seshendra',
  managerPersonNumber: '100002',
  managerName: 'GKM',
  probabilityPct: 55,
  needByDate: '2026-07-09',
  loggedDate: '2026-05-28',
  workLocation: 'Chicago, US',
  workMode: 'ONSITE'
}, {
  id: 220,
  reqNo: 'RM00220',
  requirementType: 'INTERNAL',
  verticalId: 3,
  clientId: 5,
  skillId: 5,
  subSkillId: 51,
  positionTitle: 'PPM Functional Analyst',
  noOfPositions: 1,
  positionsFilled: 0,
  priority: 'LOW',
  status: 'OPEN',
  engagementType: 'EXPANSION',
  experienceText: '3+ years',
  jobDescription: 'Support the internal projects practice with Oracle PPM configuration.',
  isContractPosition: 'N',
  stopGapFlag: 'N',
  ownerPersonNumber: '100231',
  ownerName: 'AnilRaj',
  managerPersonNumber: '100002',
  managerName: 'GKM',
  probabilityPct: 40,
  needByDate: '2026-07-30',
  loggedDate: '2026-06-20',
  workLocation: 'Hyderabad, IN',
  workMode: 'HYBRID'
}, {
  id: 218,
  reqNo: 'RM00218',
  requirementType: 'STAFFING',
  verticalId: 1,
  clientId: 4,
  skillId: 1,
  subSkillId: 13,
  positionTitle: 'Payroll Parallel Lead',
  noOfPositions: 1,
  positionsFilled: 1,
  priority: 'MEDIUM',
  status: 'CLOSED',
  engagementType: 'NEW_PROJECT',
  experienceText: '7+ years',
  jobDescription: 'Own the payroll parallel cycles through Cianbro go-live.',
  billRateAmount: 71,
  billRateCurrency: 'USD',
  billRateUnit: 'HOUR',
  isContractPosition: 'N',
  stopGapFlag: 'N',
  clientHiringManagerContactId: 14,
  clientHiringManagerName: 'Mark Ellery',
  ownerPersonNumber: '100227',
  ownerName: 'Srinivas R',
  managerPersonNumber: '100002',
  managerName: 'GKM',
  probabilityPct: 100,
  needByDate: '2026-06-28',
  loggedDate: '2026-05-02',
  closedDate: '2026-06-24',
  workLocation: 'Maine, US',
  workMode: 'ONSITE'
}];

/* Candidates. Note: dropReason / holdReason are OMITTED unless set — mirroring the service. */
const CANDIDATES = [{
  id: 412,
  candNo: 'CAND00412',
  requirementId: 231,
  talentId: 88,
  currentStageCode: 'L2_SELECT',
  stageChangedDate: '2026-08-04',
  recruiterPersonNumber: '100456',
  recruiterName: 'Priya Nair',
  skillMatchScore: 94,
  skillMatchSource: 'AI',
  aiFilledFlag: 'Y',
  currentCtcAmount: 2400000,
  expectedCtcAmount: 2900000,
  monthlyCtcInr: 241667,
  usdInrRate: 90.0,
  marginAmount: 18,
  marginCurrency: 'USD',
  marginUnit: 'HOUR',
  holdFlag: 'N',
  sourcedDate: '2026-07-02',
  timeToFillDays: 33,
  talent: {
    id: 88,
    fullName: 'Meera Joshi',
    email: 'meera.joshi@example.com',
    phone: '+91 98450 11234',
    currentRole: 'Sr HCM Consultant',
    currentCompany: 'Zenith Consulting',
    totalExperienceYrs: 8.0,
    education: 'M.Tech, IIT Kharagpur',
    candidateType: 'EXPERIENCED',
    source: 'BULK_UPLOAD',
    currentLocation: 'Hyderabad, IN',
    workModePreference: 'HYBRID'
  }
}, {
  id: 405,
  candNo: 'CAND00405',
  requirementId: 231,
  talentId: 81,
  currentStageCode: 'SOURCED',
  stageChangedDate: '2026-08-07',
  recruiterName: 'Priya Nair',
  skillMatchScore: 92,
  skillMatchSource: 'AI',
  aiFilledFlag: 'Y',
  currentCtcAmount: 1800000,
  expectedCtcAmount: 2200000,
  monthlyCtcInr: 183333,
  usdInrRate: 90.0,
  holdFlag: 'N',
  sourcedDate: '2026-08-07',
  talent: {
    id: 81,
    fullName: 'Rahul Mehta',
    email: 'rahul.mehta@example.com',
    currentRole: 'HCM Techno-functional',
    currentCompany: 'Larsen Digital',
    totalExperienceYrs: 6.5,
    education: 'B.E., NIT Warangal',
    candidateType: 'EXPERIENCED',
    source: 'BULK_UPLOAD',
    currentLocation: 'Pune, IN',
    workModePreference: 'REMOTE'
  }
}, {
  id: 407,
  candNo: 'CAND00407',
  requirementId: 227,
  talentId: 83,
  currentStageCode: 'SOURCED',
  stageChangedDate: '2026-08-06',
  recruiterName: 'Priya Nair',
  skillMatchScore: 78,
  skillMatchSource: 'AI',
  aiFilledFlag: 'Y',
  currentCtcAmount: 1600000,
  expectedCtcAmount: 2100000,
  monthlyCtcInr: 175000,
  usdInrRate: 90.0,
  holdFlag: 'N',
  sourcedDate: '2026-08-06',
  talent: {
    id: 83,
    fullName: 'Divya Rao',
    email: 'divya.rao@example.com',
    currentRole: 'Frontend Engineer',
    currentCompany: 'Nimbus Labs',
    totalExperienceYrs: 5.0,
    education: 'B.Tech, VIT',
    candidateType: 'EXPERIENCED',
    source: 'REFERRAL',
    currentLocation: 'Bengaluru, IN',
    workModePreference: 'REMOTE'
  }
}, {
  id: 401,
  candNo: 'CAND00401',
  requirementId: 229,
  talentId: 79,
  currentStageCode: 'SCREENING',
  stageChangedDate: '2026-08-05',
  recruiterName: 'Priya Nair',
  skillMatchScore: 81,
  skillMatchSource: 'MANUAL',
  aiFilledFlag: 'N',
  currentCtcAmount: 1400000,
  expectedCtcAmount: 1750000,
  monthlyCtcInr: 145833,
  usdInrRate: 90.0,
  holdFlag: 'N',
  sourcedDate: '2026-07-28',
  talent: {
    id: 79,
    fullName: 'Kiran Patel',
    email: 'kiran.patel@example.com',
    currentRole: 'Financials Consultant',
    currentCompany: 'Deloitte India',
    totalExperienceYrs: 5.0,
    education: 'MBA Finance, SIBM',
    candidateType: 'EXPERIENCED',
    source: 'JOB_BOARD',
    currentLocation: 'Ahmedabad, IN',
    workModePreference: 'HYBRID'
  }
}, {
  id: 409,
  candNo: 'CAND00409',
  requirementId: 224,
  talentId: 85,
  currentStageCode: 'L1_SCHEDULED',
  stageChangedDate: '2026-08-08',
  recruiterName: 'Priya Nair',
  skillMatchScore: 88,
  skillMatchSource: 'AI',
  aiFilledFlag: 'Y',
  currentCtcAmount: 2100000,
  expectedCtcAmount: 2600000,
  monthlyCtcInr: 216667,
  usdInrRate: 90.0,
  holdFlag: 'N',
  sourcedDate: '2026-07-30',
  nextInterviewLabel: 'Today 3:00 PM',
  talent: {
    id: 85,
    fullName: 'Sana Iqbal',
    email: 'sana.iqbal@example.com',
    currentRole: 'SCM Lead',
    currentCompany: 'Mahindra Logistics',
    totalExperienceYrs: 9.0,
    education: 'B.E. Industrial, COEP',
    candidateType: 'EXPERIENCED',
    source: 'REFERRAL',
    currentLocation: 'Mumbai, IN',
    workModePreference: 'ONSITE'
  }
}, {
  id: 410,
  candNo: 'CAND00410',
  requirementId: 220,
  talentId: 86,
  currentStageCode: 'L1_SCHEDULED',
  stageChangedDate: '2026-08-08',
  recruiterName: 'Priya Nair',
  skillMatchScore: 73,
  skillMatchSource: 'AI',
  aiFilledFlag: 'Y',
  currentCtcAmount: 1200000,
  expectedCtcAmount: 1500000,
  monthlyCtcInr: 125000,
  usdInrRate: 90.0,
  holdFlag: 'Y',
  holdReason: 'Client paused the requisition until the Q3 budget clears.',
  sourcedDate: '2026-08-01',
  nextInterviewLabel: 'Tomorrow 11:00 AM',
  talent: {
    id: 86,
    fullName: 'Arjun Nair',
    email: 'arjun.nair@example.com',
    currentRole: 'PPM Analyst',
    currentCompany: 'Infosys',
    totalExperienceYrs: 4.0,
    education: 'B.Tech, CUSAT',
    candidateType: 'EXPERIENCED',
    source: 'JOB_BOARD',
    currentLocation: 'Kochi, IN',
    workModePreference: 'HYBRID'
  }
}, {
  id: 398,
  candNo: 'CAND00398',
  requirementId: 227,
  talentId: 74,
  currentStageCode: 'DOCUMENTATION',
  stageChangedDate: '2026-08-02',
  recruiterName: 'Priya Nair',
  skillMatchScore: 90,
  skillMatchSource: 'AI',
  aiFilledFlag: 'Y',
  currentCtcAmount: 1900000,
  expectedCtcAmount: 2400000,
  monthlyCtcInr: 200000,
  usdInrRate: 90.0,
  marginAmount: 14,
  marginCurrency: 'USD',
  marginUnit: 'HOUR',
  holdFlag: 'N',
  officialEmail: 'farhan.ali@newcompany.com',
  officialEmailVerifiedFlag: 'Y',
  sourcedDate: '2026-07-05',
  talent: {
    id: 74,
    fullName: 'Farhan Ali',
    email: 'farhan.ali@example.com',
    currentRole: 'React Tech Lead',
    currentCompany: 'Publicis Sapient',
    totalExperienceYrs: 7.5,
    education: 'B.Tech, Jamia Millia',
    candidateType: 'EXPERIENCED',
    source: 'BULK_UPLOAD',
    currentLocation: 'Delhi, IN',
    workModePreference: 'HYBRID'
  }
}, {
  id: 392,
  candNo: 'CAND00392',
  requirementId: 229,
  talentId: 71,
  currentStageCode: 'OFFER_RELEASED',
  stageChangedDate: '2026-08-01',
  recruiterName: 'Priya Nair',
  skillMatchScore: 86,
  skillMatchSource: 'AI',
  aiFilledFlag: 'Y',
  currentCtcAmount: 1500000,
  expectedCtcAmount: 1900000,
  monthlyCtcInr: 158333,
  usdInrRate: 90.0,
  holdFlag: 'N',
  sourcedDate: '2026-06-24',
  talent: {
    id: 71,
    fullName: 'Neha Kapoor',
    email: 'neha.kapoor@example.com',
    currentRole: 'GL Consultant',
    currentCompany: 'EY India',
    totalExperienceYrs: 6.0,
    education: 'CA, ICAI',
    candidateType: 'EXPERIENCED',
    source: 'REFERRAL',
    currentLocation: 'Gurugram, IN',
    workModePreference: 'HYBRID'
  }
}, {
  id: 380,
  candNo: 'CAND00380',
  requirementId: 218,
  talentId: 66,
  currentStageCode: 'JOINED',
  stageChangedDate: '2026-06-24',
  recruiterName: 'Priya Nair',
  skillMatchScore: 95,
  skillMatchSource: 'AI',
  aiFilledFlag: 'Y',
  currentCtcAmount: 2600000,
  expectedCtcAmount: 3100000,
  monthlyCtcInr: 258333,
  usdInrRate: 90.0,
  marginAmount: 22,
  marginCurrency: 'USD',
  marginUnit: 'HOUR',
  holdFlag: 'N',
  sourcedDate: '2026-05-06',
  joinedDate: '2026-06-24',
  timeToFillDays: 49,
  talent: {
    id: 66,
    fullName: 'Vikram Sethi',
    email: 'vikram.sethi@example.com',
    currentRole: 'Payroll Architect',
    currentCompany: 'Accenture',
    totalExperienceYrs: 11.0,
    education: 'M.Sc, Delhi University',
    candidateType: 'EXPERIENCED',
    source: 'REFERRAL',
    currentLocation: 'Portland, US',
    workModePreference: 'ONSITE'
  }
}];
const STAGE_HISTORY = {
  412: [{
    id: 1,
    candidateId: 412,
    toStageCode: 'SOURCED',
    changedByName: 'Priya Nair',
    changedDate: '2026-07-02T09:14:00',
    slaBreachedFlag: 'N'
  }, {
    id: 2,
    candidateId: 412,
    fromStageCode: 'SOURCED',
    toStageCode: 'SCREENING',
    changedByName: 'Priya Nair',
    changedDate: '2026-07-09T11:02:00',
    daysInFromStage: 7,
    slaDays: 5,
    slaBreachedFlag: 'Y',
    notes: 'Delayed — candidate was on notice-period discussions.'
  }, {
    id: 3,
    candidateId: 412,
    fromStageCode: 'SCREENING',
    toStageCode: 'L1_SCHEDULED',
    changedByName: 'Priya Nair',
    changedDate: '2026-07-18T15:40:00',
    daysInFromStage: 9,
    slaDays: 10,
    slaBreachedFlag: 'N'
  }, {
    id: 4,
    candidateId: 412,
    fromStageCode: 'L1_SCHEDULED',
    toStageCode: 'L2_SELECT',
    changedByName: 'Anil Raj',
    changedDate: '2026-08-04T10:20:00',
    daysInFromStage: 17,
    slaDays: 14,
    slaBreachedFlag: 'Y'
  }]
};
const INTERVIEWS = {
  412: [{
    id: 91,
    roundType: 'L1',
    roundSeq: 1,
    status: 'RESCHEDULED',
    scheduledStart: '2026-07-21T14:00:00',
    scheduledEnd: '2026-07-21T15:00:00',
    interviewMode: 'TEAMS',
    panelistName: 'K. Mannuru',
    result: 'RESCHEDULED'
  }, {
    id: 92,
    roundType: 'L1',
    roundSeq: 1,
    status: 'COMPLETED',
    rescheduledFromRoundId: 91,
    scheduledStart: '2026-07-24T14:00:00',
    scheduledEnd: '2026-07-24T15:00:00',
    interviewMode: 'TEAMS',
    panelistName: 'K. Mannuru',
    result: 'SELECTED'
  }, {
    id: 93,
    roundType: 'L2',
    roundSeq: 2,
    status: 'COMPLETED',
    scheduledStart: '2026-08-03T11:30:00',
    scheduledEnd: '2026-08-03T12:30:00',
    interviewMode: 'TEAMS',
    panelistName: 'S. Kanala',
    result: 'SELECTED'
  }, {
    id: 94,
    roundType: 'CLIENT',
    roundSeq: 3,
    status: 'SCHEDULED',
    scheduledStart: '2026-08-12T16:00:00',
    scheduledEnd: '2026-08-12T17:00:00',
    interviewMode: 'TEAMS',
    panelistName: 'Rebecca Shaw',
    meetingLink: 'https://teams.microsoft.com/l/meetup-join/…'
  }]
};
const FEEDBACK = {
  412: [{
    id: 51,
    roundId: 92,
    roundType: 'L1',
    panelistName: 'K. Mannuru',
    overallRating: 4,
    technicalRating: 4,
    communicationRating: 5,
    recommendation: 'PROCEED',
    feedbackText: 'Strong on payroll and absence. Walked through a full EBS→Fusion interface design without prompting. Would place on a client-facing workstream.'
  }, {
    id: 52,
    roundId: 93,
    roundType: 'L2',
    panelistName: 'S. Kanala',
    overallRating: 5,
    technicalRating: 5,
    communicationRating: 4,
    recommendation: 'STRONG_PROCEED',
    feedbackText: 'Best conversion candidate we have seen this quarter. Handled the reconciliation edge cases cleanly.'
  }]
};
const DOCUMENTS = {
  398: [{
    id: 301,
    documentType: 'GOVERNMENT_ID',
    documentName: 'Government ID',
    fileName: 'farhan_id.pdf',
    status: 'VERIFIED',
    verifiedByName: 'Priya Nair'
  }, {
    id: 302,
    documentType: 'EDUCATION',
    documentName: 'Education Certificate',
    fileName: 'farhan_mtech.pdf',
    status: 'VERIFIED',
    verifiedByName: 'Priya Nair'
  }, {
    id: 303,
    documentType: 'EXPERIENCE',
    documentName: 'Experience Letter',
    fileName: 'farhan_exp_letter.pdf',
    status: 'PENDING_REVIEW'
  }, {
    id: 304,
    documentType: 'PAYSLIP',
    documentName: 'Latest Payslip',
    fileName: 'farhan_payslip.pdf',
    status: 'REJECTED',
    rejectionReason: 'Unreadable — please rescan at higher resolution',
    verifiedByName: 'Priya Nair'
  }]
};
const MIS = {
  avgTimeToFillDays: 14.2,
  slaBreachesThisWeek: 3,
  avgMargin: 21,
  l1ToOfferConversionPct: 68,
  funnel: [{
    stageCode: 'SOURCED',
    stageName: 'Sourced',
    count: 142
  }, {
    stageCode: 'SCREENING',
    stageName: 'Screening',
    count: 96
  }, {
    stageCode: 'L1_SCHEDULED',
    stageName: 'L1',
    count: 61
  }, {
    stageCode: 'L2_SELECT',
    stageName: 'L2',
    count: 38
  }, {
    stageCode: 'DOCUMENTATION',
    stageName: 'Doc',
    count: 19
  }, {
    stageCode: 'OFFER_RELEASED',
    stageName: 'Offer',
    count: 12
  }, {
    stageCode: 'JOINED',
    stageName: 'Joined',
    count: 9
  }],
  agingCandidates: [{
    candidateId: 398,
    candidateName: 'Farhan Ali',
    stageName: 'Documentation',
    daysInStage: 6,
    slaDays: 3
  }, {
    candidateId: 401,
    candidateName: 'Kiran Patel',
    stageName: 'Screening',
    daysInStage: 3,
    slaDays: 2
  }, {
    candidateId: 410,
    candidateName: 'Arjun Nair',
    stageName: 'L1 Scheduled',
    daysInStage: 2,
    slaDays: 2
  }],
  byVerticalAndClient: [{
    vertical: 'Staffing',
    client: 'Acme Financial Corp',
    openReqs: 7,
    avgBillRate: 64,
    avgMargin: 19
  }, {
    vertical: 'Staffing',
    client: 'Nova Retail Group',
    openReqs: 4,
    avgBillRate: 58,
    avgMargin: 15
  }, {
    vertical: 'Managed Services',
    client: 'Meridian Logistics',
    openReqs: 3,
    avgBillRate: 52,
    avgMargin: 12
  }, {
    vertical: 'Rite Internal',
    openReqs: 29
  }]
};
const USERS = [{
  id: 1,
  personNumber: '100002',
  name: 'GKM',
  email: 'gkm@rite.digital',
  role: 'DELIVERY_HEAD',
  status: 'ACTIVE'
}, {
  id: 2,
  personNumber: '100231',
  name: 'Anil Raj',
  email: 'anil.raj@rite.digital',
  role: 'TRACK_LEAD',
  status: 'ACTIVE'
}, {
  id: 3,
  personNumber: '100456',
  name: 'Priya Nair',
  email: 'priya.nair@rite.digital',
  role: 'RECRUITER',
  status: 'ACTIVE'
}, {
  id: 4,
  personNumber: '100227',
  name: 'Srinivas R',
  email: 'srinivas.r@rite.digital',
  role: 'MANAGER',
  status: 'ACTIVE'
}, {
  id: 5,
  personNumber: '100310',
  name: 'K. Mannuru',
  email: 'k.mannuru@rite.digital',
  role: 'INTERVIEWER',
  status: 'ACTIVE'
}, {
  id: 6,
  personNumber: '100001',
  name: 'System Admin',
  email: 'admin@rite.digital',
  role: 'ADMIN',
  status: 'ACTIVE'
}, {
  id: 7,
  personNumber: '100511',
  name: 'Seshendra',
  email: 'seshendra@rite.digital',
  role: 'TRACK_LEAD',
  status: 'INACTIVE'
}];
const OFFER = {
  offerNo: 'OFR00119',
  candidateName: 'Neha Kapoor',
  positionTitle: 'Oracle Financials Consultant',
  offeredCtcAmount: 1900000,
  offeredCtcCurrency: 'INR',
  offeredCtcUnit: 'YEAR',
  joiningDate: '2026-09-15',
  status: 'RELEASED',
  expiresAt: '2026-08-22T21:23:26',
  offerLetterText: 'We are delighted to offer you the position of Oracle Financials Consultant at Rite Software. Your appointment is subject to the standard background verification and the documents already submitted.',
  approvals: [{
    id: 1,
    approverName: 'GKM',
    approverRole: 'Delivery Head',
    status: 'APPROVED'
  }, {
    id: 2,
    approverName: 'Srinivas R',
    approverRole: 'Manager',
    status: 'APPROVED'
  }, {
    id: 3,
    approverName: 'Finance Desk',
    approverRole: 'Finance',
    status: 'PENDING'
  }]
};
Object.assign(window, {
  TT_LOOKUPS: LOOKUPS,
  TT_VERTICALS: VERTICALS,
  TT_CLIENTS: CLIENTS,
  TT_CONTACTS: CONTACTS,
  TT_SKILLS: SKILLS,
  TT_STAGES: STAGES,
  TT_SUMMARY: SUMMARY,
  TT_REQUIREMENTS: REQUIREMENTS,
  TT_CANDIDATES: CANDIDATES,
  TT_STAGE_HISTORY: STAGE_HISTORY,
  TT_INTERVIEWS: INTERVIEWS,
  TT_FEEDBACK: FEEDBACK,
  TT_DOCUMENTS: DOCUMENTS,
  TT_MIS: MIS,
  TT_USERS: USERS,
  TT_OFFER: OFFER
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/data.js", error: String((e && e.message) || e) }); }

// ui_kits/talent-tracker/rbac.js
try { (() => {
/* RBAC — mirrors the seeded matrix in TALENT_TRACKER_UI_REQUIREMENTS.md §5.
   In production this comes from POST /common/rbac/v1/authz/session-context; here it is
   computed locally so the role switcher works without a backend. */

const PAGES = [{
  pageCode: 'TT_REQUIREMENTS',
  pageName: 'Requirements',
  route: 'requirements',
  icon: 'clipboard-list'
}, {
  pageCode: 'TT_CANDIDATES',
  pageName: 'Candidates',
  route: 'candidates',
  icon: 'users'
}, {
  pageCode: 'TT_TRACK_LEADS',
  pageName: 'Track Leads',
  route: 'track-leads',
  icon: 'git-branch'
}, {
  pageCode: 'TT_RECRUITER',
  pageName: 'Recruiter',
  route: 'recruiter',
  icon: 'user-search'
}, {
  pageCode: 'TT_MIS_REPORTS',
  pageName: 'MIS Reports',
  route: 'mis-reports',
  icon: 'chart-column'
}, {
  pageCode: 'TT_OFFERS_DOCS',
  pageName: 'Offers & Docs',
  route: 'offers-docs',
  icon: 'file-check'
}, {
  pageCode: 'TT_ADMIN',
  pageName: 'Admin',
  route: 'admin',
  icon: 'shield-check'
}];
const ROLES = [{
  code: 'ADMIN',
  label: 'Admin',
  user: 'System Admin',
  personNumber: '100001'
}, {
  code: 'DELIVERY_HEAD',
  label: 'Delivery Head',
  user: 'GKM',
  personNumber: '100002'
}, {
  code: 'MANAGER',
  label: 'Manager',
  user: 'Srinivas R',
  personNumber: '100227'
}, {
  code: 'TRACK_LEAD',
  label: 'Track Lead',
  user: 'Anil Raj',
  personNumber: '100231'
}, {
  code: 'RECRUITER',
  label: 'Recruiter',
  user: 'Priya Nair',
  personNumber: '100456'
}, {
  code: 'INTERVIEWER',
  label: 'Interviewer',
  user: 'K. Mannuru',
  personNumber: '100310'
}];

/* FULL | READ_ONLY | HIDDEN, per the seeded default matrix. */
const MATRIX = {
  ADMIN: {
    TT_REQUIREMENTS: 'FULL',
    TT_CANDIDATES: 'FULL',
    TT_TRACK_LEADS: 'FULL',
    TT_RECRUITER: 'FULL',
    TT_MIS_REPORTS: 'FULL',
    TT_OFFERS_DOCS: 'FULL',
    TT_ADMIN: 'FULL'
  },
  DELIVERY_HEAD: {
    TT_REQUIREMENTS: 'FULL',
    TT_CANDIDATES: 'FULL',
    TT_TRACK_LEADS: 'FULL',
    TT_RECRUITER: 'FULL',
    TT_MIS_REPORTS: 'FULL',
    TT_OFFERS_DOCS: 'FULL',
    TT_ADMIN: 'HIDDEN'
  },
  MANAGER: {
    TT_REQUIREMENTS: 'FULL',
    TT_CANDIDATES: 'FULL',
    TT_TRACK_LEADS: 'FULL',
    TT_RECRUITER: 'HIDDEN',
    TT_MIS_REPORTS: 'FULL',
    TT_OFFERS_DOCS: 'FULL',
    TT_ADMIN: 'HIDDEN'
  },
  TRACK_LEAD: {
    TT_REQUIREMENTS: 'FULL',
    TT_CANDIDATES: 'FULL',
    TT_TRACK_LEADS: 'FULL',
    TT_RECRUITER: 'HIDDEN',
    TT_MIS_REPORTS: 'FULL',
    TT_OFFERS_DOCS: 'HIDDEN',
    TT_ADMIN: 'HIDDEN'
  },
  RECRUITER: {
    TT_REQUIREMENTS: 'FULL',
    TT_CANDIDATES: 'FULL',
    TT_TRACK_LEADS: 'HIDDEN',
    TT_RECRUITER: 'FULL',
    TT_MIS_REPORTS: 'FULL',
    TT_OFFERS_DOCS: 'FULL',
    TT_ADMIN: 'HIDDEN'
  },
  INTERVIEWER: {
    TT_REQUIREMENTS: 'HIDDEN',
    TT_CANDIDATES: 'READ_ONLY',
    TT_TRACK_LEADS: 'READ_ONLY',
    TT_RECRUITER: 'HIDDEN',
    TT_MIS_REPORTS: 'READ_ONLY',
    TT_OFFERS_DOCS: 'HIDDEN',
    TT_ADMIN: 'HIDDEN'
  }
};

/* Component-level overrides for commercially sensitive fields. */
const COMPONENT_HIDDEN = {
  TT_CAND_MARGIN: ['INTERVIEWER', 'RECRUITER', 'TRACK_LEAD'],
  TT_CAND_CTC: ['INTERVIEWER'],
  TT_REQ_BILL_RATE: ['INTERVIEWER'],
  TT_ADMIN_VIEW_CRED: ['DELIVERY_HEAD', 'MANAGER', 'TRACK_LEAD', 'RECRUITER', 'INTERVIEWER'],
  TT_ADMIN_RESET_CRED: ['DELIVERY_HEAD', 'MANAGER', 'TRACK_LEAD', 'RECRUITER', 'INTERVIEWER']
};
function accessLevel(role, pageCode) {
  return (MATRIX[role] || {})[pageCode] || 'HIDDEN';
}
function canSee(role, pageCode) {
  return accessLevel(role, pageCode) !== 'HIDDEN';
}
function canEdit(role, pageCode) {
  return accessLevel(role, pageCode) === 'FULL';
}
function showComponent(role, componentCode) {
  return !(COMPONENT_HIDDEN[componentCode] || []).includes(role);
}
function visiblePages(role) {
  return PAGES.filter(p => canSee(role, p.pageCode));
}
Object.assign(window, {
  TT_PAGES: PAGES,
  TT_ROLES: ROLES,
  TT_MATRIX: MATRIX,
  TT_COMPONENT_HIDDEN: COMPONENT_HIDDEN,
  ttAccessLevel: accessLevel,
  ttCanSee: canSee,
  ttCanEdit: canEdit,
  ttShowComponent: showComponent,
  ttVisiblePages: visiblePages
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/talent-tracker/rbac.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FieldGroup = __ds_scope.FieldGroup;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

__ds_ns.TopBarSearch = __ds_scope.TopBarSearch;

})();
