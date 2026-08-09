import React from 'react';

export function Tooltip({ label, placement = 'top', children, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' },
    left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' },
    right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' },
  }[placement];
  return (
    <span {...rest} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}
      style={{ position: 'relative', display: 'inline-flex', ...style }}>
      {children}
      {open && (
        <span role="tooltip" style={{
          position: 'absolute', ...pos, zIndex: 60, pointerEvents: 'none', whiteSpace: 'nowrap',
          padding: '6px 10px', background: 'var(--rite-deep-forest)', color: '#FFFFFF',
          font: '400 12px/1.35 var(--font-sans)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-md)',
        }}>{label}</span>
      )}
    </span>
  );
}
