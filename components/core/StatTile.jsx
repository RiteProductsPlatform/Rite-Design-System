import React from 'react';
import { Icon } from './Icon.jsx';

export function StatTile({ value, label, delta, deltaTone = 'success', icon, tone = 'default', style, ...rest }) {
  const dark = tone === 'dark';
  const deltaColor = deltaTone === 'danger' ? 'var(--status-danger)'
    : deltaTone === 'neutral' ? 'var(--text-tertiary)'
    : dark ? 'var(--rite-signal-mint)' : 'var(--status-success)';
  return (
    <div {...rest} style={{
      display: 'flex', flexDirection: 'column', gap: 6, padding: 20,
      background: dark ? 'transparent' : 'var(--surface-card)',
      border: '1px solid ' + (dark ? 'rgba(255,255,255,.10)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-lg)', ...style,
    }}>
      {icon && <span style={{ color: dark ? 'var(--rite-signal-mint)' : 'var(--text-brand)', marginBottom: 2 }}><Icon name={icon} size={20} /></span>}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{ font: '700 32px/1 var(--font-sans)', letterSpacing: '-0.02em', color: dark ? '#FFFFFF' : 'var(--text-primary)' }}>{value}</span>
        {delta && <span style={{ font: '500 13px/1 var(--font-mono)', color: deltaColor }}>{delta}</span>}
      </div>
      <span style={{ font: '400 13px/1.3 var(--font-sans)', color: dark ? 'var(--text-on-inverse-muted)' : 'var(--text-tertiary)' }}>{label}</span>
    </div>
  );
}
