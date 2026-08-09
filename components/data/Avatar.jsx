import React from 'react';

const SIZES = { xs: 22, sm: 28, md: 34, lg: 44 };

export function Avatar({ name = '', src, size = 'md', tone = 'brand', style, ...rest }) {
  const box = SIZES[size] || SIZES.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  const bg = tone === 'mint' ? 'var(--surface-accent)' : tone === 'muted' ? 'var(--surface-subtle)' : 'var(--surface-brand)';
  const fg = tone === 'brand' ? '#FFFFFF' : 'var(--rite-deep-forest)';
  return (
    <span title={name} {...rest} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
      width: box, height: box, borderRadius: '50%', overflow: 'hidden',
      background: src ? 'var(--surface-sunken)' : bg, color: fg,
      font: '600 ' + Math.round(box * 0.38) + 'px/1 var(--font-sans)', letterSpacing: '0.02em', ...style,
    }}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
