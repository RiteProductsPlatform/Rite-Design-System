import React from 'react';
import { Icon } from '../core/Icon.jsx';

const WIDTHS = { sm: 400, md: 540, lg: 720 };

export function Modal({ open = false, title, description, size = 'md', onClose, footer, children, style, ...rest }) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24, background: 'var(--surface-overlay)', animation: 'rite-fade var(--duration-base) var(--ease-out)',
    }}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} {...rest} style={{
        width: '100%', maxWidth: WIDTHS[size] || WIDTHS.md, maxHeight: '86vh', display: 'flex', flexDirection: 'column',
        background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden', ...style,
      }}>
        <header style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 24px 16px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {title && <h2 style={{ font: '600 18px/1.3 var(--font-sans)', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{title}</h2>}
            {description && <p style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--text-tertiary)' }}>{description}</p>}
          </div>
          {onClose && (
            <button type="button" aria-label="Close" onClick={onClose}
              style={{ background: 'none', border: 0, padding: 4, margin: -4, cursor: 'pointer', color: 'var(--text-tertiary)', display: 'flex' }}>
              <Icon name="x" size={18} />
            </button>
          )}
        </header>
        <div style={{ padding: '0 24px 20px', overflowY: 'auto', flex: 1 }}>{children}</div>
        {footer && (
          <footer style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '14px 24px', background: 'var(--surface-sunken)', borderTop: '1px solid var(--border-subtle)' }}>{footer}</footer>
        )}
      </div>
    </div>
  );
}
