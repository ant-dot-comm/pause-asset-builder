/* Shared building blocks for Pause for a Minute templates.
   Photo placeholder uses a warm duotone plum treatment matching the
   photography direction (no generated imagery). */

function Photo({ label = 'Portrait', radius = 0, treatment = 'plum', style = {} }) {
  const treatments = {
    plum: 'linear-gradient(135deg, #2a1d38 0%, #4a2c63 60%, #1c1c1c 100%)',
    warm: 'linear-gradient(135deg, #2a2018 0%, #4a3826 55%, #1c1c1c 100%)',
    mono: 'linear-gradient(135deg, #2a2a2a 0%, #161616 100%)',
  };
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: treatments[treatment] || treatments.plum,
      borderRadius: radius,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    }}>
      {/* subtle grain via repeating dots */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(244,238,226,0.06) 1px, transparent 1px)',
        backgroundSize: '4px 4px', opacity: 0.5, mixBlendMode: 'overlay',
      }} />
      <span style={{
        fontFamily: 'var(--font-meta)', fontSize: '11px', letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'rgba(244,238,226,0.4)',
      }}>{label}</span>
    </div>
  );
}

function ClockArc({ width = 120, color = 'var(--accent-soft)' }) {
  const cx = 100, cy = 80, r = 72, n = 9;
  const ticks = [];
  for (let i = 0; i < n; i++) {
    const a = Math.PI + (i / (n - 1)) * Math.PI;
    ticks.push(<line key={i}
      x1={cx + Math.cos(a) * (r - 2)} y1={cy + Math.sin(a) * (r - 2)}
      x2={cx + Math.cos(a) * (r - 12)} y2={cy + Math.sin(a) * (r - 12)}
      stroke={color} strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />);
  }
  return (
    <svg width={width} height={width * 0.45} viewBox="0 0 200 90">
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
      {ticks}
    </svg>
  );
}

Object.assign(window, { Photo, ClockArc });
