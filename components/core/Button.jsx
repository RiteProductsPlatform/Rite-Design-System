import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 32, padding: '0 12px', font: '500 13px/1 var(--font-sans)', gap: 6, icon: 16 },
  md: { height: 40, padding: '0 16px', font: '500 14px/1 var(--font-sans)', gap: 8, icon: 18 },
  lg: { height: 48, padding: '0 24px', font: '600 15px/1 var(--font-sans)', gap: 10, icon: 20 },
};

const VARIANTS = {
  primary: {
    background: 'var(--interactive-brand)', color: 'var(--text-on-brand)', border: '1px solid transparent',
    hover: 'var(--interactive-brand-hover)', active: 'var(--interactive-brand-active)',
  },
  accent: {
    background: 'var(--surface-accent)', color: 'var(--text-on-accent)', border: '1px solid transparent',
    hover: '#2FD886', active: '#1FC073',
  },
  secondary: {
    background: 'var(--surface-card)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)',
    hover: 'var(--interactive-neutral-hover)', active: 'var(--interactive-neutral-active)',
  },
  ghost: {
    background: 'transparent', color: 'var(--text-brand)', border: '1px solid transparent',
    hover: 'var(--interactive-neutral-hover)', active: 'var(--interactive-neutral-active)',
  },
  danger: {
    background: 'var(--status-danger)', color: '#FFFFFF', border: '1px solid transparent',
    hover: '#DB4318', active: '#B93711',
  },
};

export function Button({
  variant = 'primary', size = 'md', icon, iconAfter, fullWidth = false,
  disabled = false, loading = false, children, style, ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [state, setState] = React.useState('rest');
  const off = disabled || loading;
  const bg = off ? 'var(--interactive-disabled-bg)'
    : state === 'active' ? v.active : state === 'hover' ? v.hover : v.background;

  return (
    <button
      type="button"
      disabled={off}
      onMouseEnter={() => !off && setState('hover')}
      onMouseLeave={() => setState('rest')}
      onMouseDown={() => !off && setState('active')}
      onMouseUp={() => !off && setState('hover')}
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding, font: s.font,
        letterSpacing: '0.01em', whiteSpace: 'nowrap', flex: '0 0 auto',
        width: fullWidth ? '100%' : undefined,
        background: bg,
        color: off ? 'var(--interactive-disabled-text)' : v.color,
        border: off ? '1px solid transparent' : v.border,
        borderRadius: 'var(--radius-md)',
        cursor: off ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-control)',
        ...style,
      }}
    >
      {loading ? <Icon name="loader-circle" size={s.icon} style={{ animation: 'rite-spin 900ms linear infinite' }} />
        : icon ? <Icon name={icon} size={s.icon} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={s.icon} /> : null}
    </button>
  );
}
