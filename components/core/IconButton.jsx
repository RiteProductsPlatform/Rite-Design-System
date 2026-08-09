import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: 28, md: 34, lg: 40 };
const GLYPH = { sm: 15, md: 18, lg: 20 };

export function IconButton({ icon, size = 'md', variant = 'ghost', label, active = false, disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const box = SIZES[size] || SIZES.md;
  const solid = variant === 'solid';
  const bg = disabled ? 'transparent'
    : solid ? (hover ? 'var(--interactive-brand-hover)' : 'var(--interactive-brand)')
    : active ? 'var(--surface-subtle)' : hover ? 'var(--interactive-neutral-hover)' : 'transparent';
  return (
    <button
      type="button" aria-label={label} title={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: box, height: box, flex: '0 0 auto', padding: 0, background: bg,
        color: disabled ? 'var(--interactive-disabled-text)'
          : solid ? 'var(--text-on-brand)' : active ? 'var(--text-brand)' : 'var(--text-secondary)',
        border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent',
        borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--transition-control)', ...style,
      }}
    >
      <Icon name={icon} size={GLYPH[size] || 18} />
    </button>
  );
}
