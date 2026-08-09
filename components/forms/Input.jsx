import React from 'react';
import { Icon } from '../core/Icon.jsx';

function inputShell({ invalid, focused, disabled, size }) {
  return {
    width: '100%',
    minHeight: size === 'sm' ? 32 : 40,
    padding: size === 'sm' ? '6px 10px' : '9px 12px',
    font: '400 14px/1.4 var(--font-sans)',
    color: disabled ? 'var(--interactive-disabled-text)' : 'var(--text-primary)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
    border: '1px solid ' + (invalid ? 'var(--status-danger)' : focused ? 'var(--border-brand)' : 'var(--border-default)'),
    borderRadius: 'var(--radius-md)',
    boxShadow: focused ? (invalid ? 'var(--ring-danger)' : 'var(--ring-focus)') : 'none',
    outline: 'none',
    transition: 'var(--transition-control)',
  };
}

export function Input({ icon, suffix, invalid = false, disabled = false, size = 'md', style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const shell = inputShell({ invalid, focused, disabled, size });
  if (!icon && !suffix) {
    return <input disabled={disabled} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} {...rest} style={{ ...shell, ...style }} />;
  }
  return (
    <div style={{ ...shell, display: 'flex', alignItems: 'center', gap: 8, padding: size === 'sm' ? '0 10px' : '0 12px', ...style }}>
      {icon && <span style={{ color: 'var(--text-tertiary)', display: 'flex' }}><Icon name={icon} size={16} /></span>}
      <input disabled={disabled} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} {...rest}
        style={{ flex: 1, minWidth: 0, border: 0, outline: 'none', background: 'transparent', font: 'inherit', color: 'inherit', height: size === 'sm' ? 30 : 38 }} />
      {suffix && <span style={{ font: '500 12px/1 var(--font-mono)', color: 'var(--text-tertiary)' }}>{suffix}</span>}
    </div>
  );
}
