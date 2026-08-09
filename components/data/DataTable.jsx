import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function DataTable({ columns = [], rows = [], onRowClick, dense = false, sortKey, sortDir = 'asc', onSort, empty, style, ...rest }) {
  const [hoverRow, setHoverRow] = React.useState(null);
  const padY = dense ? 9 : 13;
  if (!rows.length && empty) return <div style={style}>{empty}</div>;
  return (
    <div {...rest} style={{ width: '100%', overflowX: 'auto', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', font: '400 14px/1.4 var(--font-sans)' }}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} onClick={() => c.sortable && onSort && onSort(c.key)}
                style={{
                  textAlign: c.align || 'left', padding: `10px 16px`, whiteSpace: 'nowrap',
                  font: '600 11px/1.2 var(--font-sans)', letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--text-tertiary)', background: 'var(--surface-sunken)',
                  borderBottom: '1px solid var(--border-subtle)', width: c.width,
                  cursor: c.sortable ? 'pointer' : 'default', userSelect: 'none',
                }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  {c.header}
                  {c.sortable && sortKey === c.key && <Icon name={sortDir === 'asc' ? 'arrow-up' : 'arrow-down'} size={12} />}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id != null ? r.id : i}
              onMouseEnter={() => setHoverRow(i)} onMouseLeave={() => setHoverRow(null)}
              onClick={() => onRowClick && onRowClick(r)}
              style={{
                background: hoverRow === i ? 'var(--surface-subtle)' : 'transparent',
                cursor: onRowClick ? 'pointer' : 'default',
                transition: 'background-color var(--duration-fast) var(--ease-standard)',
              }}>
              {columns.map((c) => (
                <td key={c.key} style={{
                  textAlign: c.align || 'left', padding: `${padY}px 16px`,
                  borderBottom: '1px solid var(--border-subtle)',
                  color: c.muted ? 'var(--text-tertiary)' : 'var(--text-primary)',
                  fontFamily: c.mono ? 'var(--font-mono)' : 'var(--font-sans)',
                  fontSize: c.mono ? 13 : 14,
                  whiteSpace: c.wrap ? 'normal' : 'nowrap',
                }}>{c.render ? c.render(r) : r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
