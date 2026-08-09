import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function TopBar({ title, eyebrow, breadcrumbs, actions, sticky = true, style, ...rest }) {
  return (
    <header {...rest} style={{
      display: 'flex', alignItems: 'center', gap: 16,
      minHeight: 'var(--topbar-height)', padding: '0 24px',
      background: 'rgba(255,255,255,.72)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
      position: sticky ? 'sticky' : 'static', top: 0, zIndex: 20, ...style,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 148, flex: '1 1 auto' }}>
        {breadcrumbs || (eyebrow && (
          <span style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{eyebrow}</span>
        ))}
        {title && <h1 style={{ font: '600 17px/1.25 var(--font-sans)', letterSpacing: '-0.01em', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h1>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '0 1 auto', minWidth: 0 }}>{actions}</div>
    </header>
  );
}

export function TopBarSearch({ placeholder = 'Search', width = 260, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '0 1 auto', width, minWidth: 44, height: 34, padding: '0 12px', background: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
      <span style={{ color: 'var(--text-tertiary)', display: 'flex' }}><Icon name="search" size={15} /></span>
      <input placeholder={placeholder} {...rest} style={{ flex: 1, minWidth: 0, border: 0, background: 'transparent', outline: 'none', font: '400 13px/1 var(--font-sans)', color: 'var(--text-primary)' }} />
    </div>
  );
}
