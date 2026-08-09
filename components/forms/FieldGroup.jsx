import React from 'react';

export function FieldGroup({ label, hint, error, required = false, htmlFor, children, style, ...rest }) {
  return (
    <div {...rest} style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={htmlFor} style={{ font: '500 13px/1.3 var(--font-sans)', color: 'var(--text-secondary)' }}>
          {label}{required && <span style={{ color: 'var(--status-danger)', marginLeft: 3 }}>*</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <span style={{ font: '400 12px/1.35 var(--font-sans)', color: error ? 'var(--status-danger)' : 'var(--text-tertiary)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
