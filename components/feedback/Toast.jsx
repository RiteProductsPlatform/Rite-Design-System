import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  success: ['var(--rite-signal-mint)', 'circle-check'],
  info: ['var(--rite-sage)', 'info'],
  warning: ['var(--status-warning)', 'triangle-alert'],
  danger: ['var(--status-danger)', 'octagon-alert'],
};

export function Toast({ tone = 'success', title, children, action, onDismiss, style, ...rest }) {
  const [accent, icon] = TONES[tone] || TONES.success;
  return (
    <div role="status" {...rest} style={{
      display: 'flex', alignItems: 'flex-start', gap: 12, minWidth: 300, maxWidth: 420, padding: '14px 16px',
      background: 'var(--rite-deep-forest)', color: '#FFFFFF', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,.10)', ...style,
    }}>
      <span style={{ color: accent, display: 'flex', marginTop: 1 }}><Icon name={icon} size={18} /></span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
        {title && <strong style={{ font: '600 14px/1.35 var(--font-sans)' }}>{title}</strong>}
        {children && <span style={{ font: '400 13px/1.5 var(--font-sans)', color: 'var(--text-on-inverse-muted)' }}>{children}</span>}
      </div>
      {action}
      {onDismiss && (
        <button type="button" aria-label="Dismiss" onClick={onDismiss}
          style={{ background: 'none', border: 0, color: 'rgba(255,255,255,.6)', cursor: 'pointer', padding: 0, display: 'flex' }}>
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}
