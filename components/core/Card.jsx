import React from 'react';

export function Card({ padding = 24, interactive = false, tone = 'default', header, footer, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'dark';
  return (
    <section
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        background: dark ? 'var(--surface-inverse-alt)' : tone === 'subtle' ? 'var(--surface-subtle)' : 'var(--surface-card)',
        border: '1px solid ' + (dark ? 'rgba(255,255,255,.10)' : hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
        borderRadius: 'var(--radius-lg)',
        boxShadow: interactive && hover ? 'var(--shadow-md)' : 'none',
        color: dark ? '#FFFFFF' : 'var(--text-primary)',
        cursor: interactive ? 'pointer' : undefined,
        transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
        overflow: 'hidden', ...style,
      }}
    >
      {header && (
        <header style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
          padding: `${Math.max(padding - 6, 12)}px ${padding}px`,
          borderBottom: '1px solid ' + (dark ? 'rgba(255,255,255,.10)' : 'var(--border-subtle)'),
        }}>{header}</header>
      )}
      <div style={{ padding }}>{children}</div>
      {footer && (
        <footer style={{
          padding: `${Math.max(padding - 8, 10)}px ${padding}px`,
          borderTop: '1px solid ' + (dark ? 'rgba(255,255,255,.10)' : 'var(--border-subtle)'),
          background: dark ? 'transparent' : 'var(--surface-sunken)',
        }}>{footer}</footer>
      )}
    </section>
  );
}
