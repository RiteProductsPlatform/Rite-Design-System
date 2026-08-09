import React from 'react';

export function Eyebrow({ children, tone = 'brand', style, ...rest }) {
  const color = tone === 'mint' ? 'var(--rite-signal-mint)'
    : tone === 'muted' ? 'var(--text-tertiary)'
    : tone === 'inverse' ? 'rgba(255,255,255,.72)'
    : 'var(--text-brand)';
  return (
    <div {...rest} style={{
      font: 'var(--weight-semibold) var(--text-xs)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
      color, ...style,
    }}>{children}</div>
  );
}
