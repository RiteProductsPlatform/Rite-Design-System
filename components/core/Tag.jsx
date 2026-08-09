import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ children, onRemove, selected = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, height: 28, padding: onRemove ? '0 6px 0 12px' : '0 12px',
        background: selected ? 'var(--surface-subtle)' : hover ? 'var(--interactive-neutral-hover)' : 'var(--surface-card)',
        color: selected ? 'var(--text-brand)' : 'var(--text-secondary)',
        border: '1px solid ' + (selected ? 'var(--border-brand)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-pill)', font: '500 13px/1 var(--font-sans)',
        cursor: 'pointer', transition: 'var(--transition-control)', ...style,
      }}
    >
      {children}
      {onRemove && (
        <span role="button" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(); }}
          style={{ display: 'inline-flex', width: 18, height: 18, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', opacity: .7 }}>
          <Icon name="x" size={13} />
        </span>
      )}
    </span>
  );
}
