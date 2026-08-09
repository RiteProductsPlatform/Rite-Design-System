import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function EmptyState({ icon = 'inbox', title, description, action, illustration, compact = false, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10,
      padding: compact ? '32px 24px' : '56px 32px', ...style,
    }}>
      {illustration
        ? <img src={illustration} alt="" style={{ width: compact ? 120 : 176, height: 'auto', marginBottom: 6 }} />
        : <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52,
            borderRadius: '50%', background: 'var(--surface-subtle)', color: 'var(--text-brand)', marginBottom: 4,
          }}><Icon name={icon} size={24} /></span>}
      {title && <h3 style={{ font: '600 16px/1.3 var(--font-sans)', color: 'var(--text-primary)' }}>{title}</h3>}
      {description && <p style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--text-tertiary)', maxWidth: 380 }}>{description}</p>}
      {action && <div style={{ marginTop: 6 }}>{action}</div>}
    </div>
  );
}
