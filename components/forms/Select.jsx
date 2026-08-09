import React from 'react';
import { Icon } from '../core/Icon.jsx';

function selectShell({ invalid, focused, disabled, size }) {
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

export function Select({ options = [], placeholder, invalid = false, disabled = false, size = 'md', style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <select disabled={disabled} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} {...rest}
        style={{ ...selectShell({ invalid, focused, disabled, size }), appearance: 'none', paddingRight: 34, cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <span style={{ position: 'absolute', right: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)', pointerEvents: 'none', display: 'flex' }}>
        <Icon name="chevron-down" size={16} />
      </span>
    </div>
  );
}
