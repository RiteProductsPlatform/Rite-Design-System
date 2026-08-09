import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Breadcrumbs({ items = [], onNavigate, style, ...rest }) {
  return (
    <nav aria-label="Breadcrumb" {...rest} style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={it.id || it.label}>
            <button type="button" disabled={last} onClick={() => !last && onNavigate && onNavigate(it.id)}
              style={{
                background: 'none', border: 0, padding: 0, cursor: last ? 'default' : 'pointer',
                font: (last ? '500' : '400') + ' 12px/1.2 var(--font-sans)',
                color: last ? 'var(--text-secondary)' : 'var(--text-tertiary)',
              }}>{it.label}</button>
            {!last && <span style={{ color: 'var(--border-strong)', display: 'flex' }}><Icon name="chevron-right" size={13} /></span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
