import React from 'react';

function textareaShell({ invalid, focused, disabled, size }) {
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

export function Textarea({ invalid = false, disabled = false, rows = 4, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <textarea rows={rows} disabled={disabled} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} {...rest}
      style={{ ...textareaShell({ invalid, focused, disabled, size: 'md' }), resize: 'vertical', ...style }} />
  );
}
