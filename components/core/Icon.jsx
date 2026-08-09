import React from 'react';

const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
const cache = (typeof window !== 'undefined' && (window.__riteIconCache = window.__riteIconCache || {})) || {};

/**
 * Lucide glyph inlined as SVG so its strokes inherit currentColor.
 * See readme.md > Iconography — Lucide is a flagged substitution for the
 * Microsoft 365 outline set used in the Rite brand deck.
 */
export function Icon({ name, size = 20, style, ...rest }) {
  const [svg, setSvg] = React.useState(() => cache[name] || null);
  React.useEffect(() => {
    let live = true;
    if (cache[name]) { setSvg(cache[name]); return undefined; }
    fetch(CDN + name + '.svg')
      .then((r) => (r.ok ? r.text() : ''))
      .then((t) => {
        if (!t) return;
        const clean = t.replace(/width="24"/, 'width="100%"').replace(/height="24"/, 'height="100%"');
        cache[name] = clean;
        if (live) setSvg(clean);
      })
      .catch(() => {});
    return () => { live = false; };
  }, [name]);

  return (
    <span
      aria-hidden="true"
      {...rest}
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, flex: '0 0 auto', lineHeight: 0, color: 'inherit',
        ...style,
      }}
    />
  );
}
