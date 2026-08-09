import React from 'react';

export function Radio({ checked = false, disabled = false, label, description, onChange, style, ...rest }) {
  return (
    <label {...rest} style={{ display: 'inline-flex', alignItems: description ? 'flex-start' : 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <span
        role="radio" aria-checked={checked} tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && onChange && onChange(true)}
        onKeyDown={(e) => { if (!disabled && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); onChange && onChange(true); } }}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, flex: '0 0 auto',
          marginTop: description ? 2 : 0, background: 'var(--surface-card)',
          border: '1px solid ' + (disabled ? 'var(--border-default)' : checked ? 'var(--interactive-brand)' : 'var(--border-strong)'),
          borderRadius: '50%', transition: 'var(--transition-control)',
        }}>
        {checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: disabled ? 'var(--interactive-disabled-text)' : 'var(--interactive-brand)' }} />}
      </span>
      {(label || description) && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {label && <span style={{ font: '400 14px/1.3 var(--font-sans)', color: disabled ? 'var(--interactive-disabled-text)' : 'var(--text-primary)' }}>{label}</span>}
          {description && <span style={{ font: '400 12px/1.4 var(--font-sans)', color: 'var(--text-tertiary)' }}>{description}</span>}
        </span>
      )}
    </label>
  );
}
