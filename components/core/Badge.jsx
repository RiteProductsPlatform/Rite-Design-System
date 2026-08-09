import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  neutral: ['var(--status-neutral-bg)', 'var(--status-neutral-text)'],
  success: ['var(--status-success-bg)', 'var(--status-success-text)'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning-text)'],
  danger: ['var(--status-danger-bg)', 'var(--status-danger-text)'],
  info: ['var(--status-info-bg)', 'var(--status-info-text)'],
  brand: ['var(--surface-brand)', 'var(--text-on-brand)'],
  mint: ['var(--surface-accent)', 'var(--text-on-accent)'],
};

export function Badge({ tone = 'neutral', dot = false, icon, children, style, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      height: 22, padding: dot ? '0 10px 0 8px' : '0 10px',
      background: bg, color: fg, borderRadius: 'var(--radius-pill)',
      font: '500 12px/1 var(--font-sans)', letterSpacing: '0.01em', whiteSpace: 'nowrap', ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', opacity: .85 }} />}
      {icon && <Icon name={icon} size={13} />}
      {children}
    </span>
  );
}
