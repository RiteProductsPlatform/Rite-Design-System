import React from 'react';

export function Switch({ checked = false, disabled = false, label, onChange, style, ...rest }) {
  return (
    <label {...rest} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <span
        role="switch" aria-checked={checked} tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && onChange && onChange(!checked)}
        onKeyDown={(e) => { if (!disabled && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); onChange && onChange(!checked); } }}
        style={{
          position: 'relative', width: 38, height: 22, flex: '0 0 auto', borderRadius: 'var(--radius-pill)',
          background: disabled ? 'var(--interactive-disabled-bg)' : checked ? 'var(--interactive-brand)' : 'var(--border-strong)',
          transition: 'background-color var(--duration-base) var(--ease-standard)',
        }}>
        <span style={{
          position: 'absolute', top: 3, left: checked ? 19 : 3, width: 16, height: 16, borderRadius: '50%',
          background: '#FFFFFF', boxShadow: 'var(--shadow-xs)',
          transition: 'left var(--duration-base) var(--ease-standard)',
        }} />
      </span>
      {label && <span style={{ font: '400 14px/1.3 var(--font-sans)', color: disabled ? 'var(--interactive-disabled-text)' : 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
