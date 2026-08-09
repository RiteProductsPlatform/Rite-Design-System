import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  info: ['var(--status-info-bg)', 'var(--status-info)', 'var(--status-info-text)', 'info'],
  success: ['var(--status-success-bg)', 'var(--status-success)', 'var(--status-success-text)', 'circle-check'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning)', 'var(--status-warning-text)', 'triangle-alert'],
  danger: ['var(--status-danger-bg)', 'var(--status-danger)', 'var(--status-danger-text)', 'octagon-alert'],
};

export function Banner({ tone = 'info', title, children, action, onDismiss, style, ...rest }) {
  const [bg, accent, fg, defIcon] = TONES[tone] || TONES.info;
  return (
    <div role="status" {...rest} style={{
      display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px',
      background: bg, border: '1px solid ' + accent + '33', borderRadius: 'var(--radius-md)', color: fg, ...style,
    }}>
      <span style={{ color: accent, display: 'flex', marginTop: 1 }}><Icon name={defIcon} size={18} /></span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
        {title && <strong style={{ font: '600 14px/1.35 var(--font-sans)' }}>{title}</strong>}
        {children && <span style={{ font: '400 13px/1.5 var(--font-sans)', opacity: .92 }}>{children}</span>}
      </div>
      {action && <div style={{ flex: '0 0 auto' }}>{action}</div>}
      {onDismiss && (
        <button type="button" aria-label="Dismiss" onClick={onDismiss}
          style={{ background: 'none', border: 0, color: 'inherit', opacity: .6, cursor: 'pointer', padding: 0, display: 'flex' }}>
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}
