import React from 'react';
import { Icon } from '../core/Icon.jsx';

function Item({ item, active, collapsed, onSelect }) {
  const [hover, setHover] = React.useState(false);
  const on = active === item.id;
  return (
    <button type="button" onClick={() => onSelect && onSelect(item.id)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      title={collapsed ? item.label : undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, width: '100%',
        padding: collapsed ? '10px 0' : '10px 12px', justifyContent: collapsed ? 'center' : 'flex-start',
        background: on ? 'rgba(61,237,151,.12)' : hover ? 'rgba(255,255,255,.08)' : 'transparent',
        color: on ? 'var(--rite-signal-mint)' : 'rgba(255,255,255,.78)',
        border: 0, borderRadius: 'var(--radius-md)', cursor: 'pointer', textAlign: 'left',
        font: (on ? '500' : '400') + ' 14px/1.2 var(--font-sans)',
        transition: 'var(--transition-control)',
      }}>
      <Icon name={item.icon} size={18} />
      {!collapsed && <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>}
      {!collapsed && item.count != null && (
        <span style={{ font: '500 11px/1 var(--font-mono)', color: on ? 'var(--rite-signal-mint)' : 'var(--text-on-inverse-muted)' }}>{item.count}</span>
      )}
    </button>
  );
}

export function SideNav({ sections = [], active, onSelect, collapsed = false, header, footer, style, ...rest }) {
  return (
    <nav {...rest} style={{
      display: 'flex', flexDirection: 'column',
      width: collapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width)',
      flex: '0 0 auto', height: '100%', background: 'var(--rite-deep-forest)',
      borderRight: '1px solid rgba(255,255,255,.08)',
      transition: 'width var(--duration-base) var(--ease-standard)', ...style,
    }}>
      {header && <div style={{ padding: collapsed ? '18px 8px' : '18px 16px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>{header}</div>}
      <div style={{ flex: 1, overflowY: 'auto', padding: collapsed ? '12px 8px' : '12px' }}>
        {sections.map((sec, i) => (
          <div key={sec.label || i} style={{ marginBottom: 18 }}>
            {sec.label && !collapsed && (
              <div style={{ font: '600 10px/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'rgba(255,255,255,.38)', padding: '6px 12px 8px' }}>{sec.label}</div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {sec.items.map((it) => <Item key={it.id} item={it} active={active} collapsed={collapsed} onSelect={onSelect} />)}
            </div>
          </div>
        ))}
      </div>
      {footer && <div style={{ padding: collapsed ? '12px 8px' : '12px 16px', borderTop: '1px solid rgba(255,255,255,.08)' }}>{footer}</div>}
    </nav>
  );
}
