import React from 'react';

/**
 * PauseMark — the brand symbol (clock arc + ticks + pause bars) as an inline,
 * recolorable SVG. Use as an icon, a divider accent, or a quiet watermark.
 */
export function PauseMark({ size = 48, color = 'var(--text-strong)', accent = 'var(--accent)', arc = true }) {
  const ticks = [];
  const cx = 100, cy = 110, r = 72, n = 9;
  for (let i = 0; i < n; i++) {
    const a = Math.PI + (i / (n - 1)) * Math.PI;
    const x1 = cx + Math.cos(a) * (r - 2), y1 = cy + Math.sin(a) * (r - 2);
    const x2 = cx + Math.cos(a) * (r - 13), y2 = cy + Math.sin(a) * (r - 13);
    ticks.push(<line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="4" strokeLinecap="round" />);
  }
  return (
    <svg width={size} height={size * (130 / 200)} viewBox="0 0 200 130" role="img" aria-label="Pause for a Minute mark" style={{ display: 'inline-block' }}>
      {arc && <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" />}
      {arc && ticks}
      <rect x={cx - 15} y={cy - 44} width="11" height="40" rx="5.5" fill={accent} />
      <rect x={cx + 4} y={cy - 44} width="11" height="40" rx="5.5" fill={accent} />
    </svg>
  );
}
