import React from 'react';

export function ProgressBar({ value = 0, max = 100, tone = 'brand', label, showValue = false, size = 'md', style, ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const fill = tone === 'mint' ? 'var(--rite-signal-mint)'
    : tone === 'warning' ? 'var(--status-warning)'
    : tone === 'danger' ? 'var(--status-danger)' : 'var(--interactive-brand)';
  return (
    <div {...rest} style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', ...style }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          {label && <span style={{ font: '400 13px/1.3 var(--font-sans)', color: 'var(--text-secondary)' }}>{label}</span>}
          {showValue && <span style={{ font: '500 13px/1.3 var(--font-mono)', color: 'var(--text-primary)' }}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div style={{ height: size === 'sm' ? 4 : 8, width: '100%', background: 'var(--chart-track)', borderRadius: 'var(--radius-pill)', boxShadow: 'inset 0 1px 2px rgba(6,33,26,.06)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: pct + '%', background: fill, borderRadius: 'var(--radius-pill)', transition: 'width var(--duration-slow) var(--ease-standard)' }} />
      </div>
    </div>
  );
}
