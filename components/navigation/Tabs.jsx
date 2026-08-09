import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Tabs({ items = [], active, onSelect, variant = 'underline', style, ...rest }) {
  const pill = variant === 'pill';
  return (
    <div role="tablist" {...rest} style={{
      display: 'flex', alignItems: 'center', gap: pill ? 4 : 24,
      padding: pill ? 4 : 0, background: pill ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: pill ? 'var(--radius-md)' : 0,
      borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
      width: pill ? 'fit-content' : '100%', ...style,
    }}>
      {items.map((t) => {
        const on = t.id === active;
        return (
          <button key={t.id} role="tab" aria-selected={on} type="button" onClick={() => onSelect && onSelect(t.id)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: pill ? '6px 14px' : '0 0 12px',
              background: pill && on ? 'var(--surface-card)' : 'transparent',
              boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
              color: on ? (pill ? 'var(--text-primary)' : 'var(--text-brand)') : 'var(--text-tertiary)',
              border: 0, borderBottom: pill ? 'none' : '2px solid ' + (on ? 'var(--interactive-brand)' : 'transparent'),
              borderRadius: pill ? 'var(--radius-sm)' : 0, marginBottom: pill ? 0 : -1,
              font: (on ? '600' : '500') + ' 14px/1.2 var(--font-sans)', cursor: 'pointer',
              transition: 'var(--transition-control)',
            }}>
            {t.icon && <Icon name={t.icon} size={16} />}
            {t.label}
            {t.count != null && (
              <span style={{ font: '500 11px/1 var(--font-mono)', color: on ? 'var(--text-brand)' : 'var(--text-tertiary)', background: 'var(--surface-subtle)', padding: '3px 6px', borderRadius: 'var(--radius-pill)' }}>{t.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
