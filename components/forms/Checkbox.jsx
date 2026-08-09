import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ checked = false, indeterminate = false, disabled = false, label, onChange, style, ...rest }) {
  const on = checked || indeterminate;
  return (
    <label {...rest} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <span
        role="checkbox" aria-checked={indeterminate ? 'mixed' : checked} tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && onChange && onChange(!checked)}
        onKeyDown={(e) => { if (!disabled && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); onChange && onChange(!checked); } }}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, flex: '0 0 auto',
          background: disabled ? 'var(--interactive-disabled-bg)' : on ? 'var(--interactive-brand)' : 'var(--surface-card)',
          border: '1px solid ' + (disabled ? 'var(--border-default)' : on ? 'var(--interactive-brand)' : 'var(--border-strong)'),
          borderRadius: 'var(--radius-xs)', color: '#FFFFFF', transition: 'var(--transition-control)',
        }}>
        {indeterminate ? <Icon name="minus" size={13} /> : checked ? <Icon name="check" size={13} /> : null}
      </span>
      {label && <span style={{ font: '400 14px/1.3 var(--font-sans)', color: disabled ? 'var(--interactive-disabled-text)' : 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
