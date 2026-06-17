/* Square (1:1) cover templates — 1080×1080 design, rendered at any size via scale. */

function PodcastCover() {
  return (
    <div style={{
      width: 1080, height: 1080, background: 'var(--ink-800)', position: 'relative',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-body)', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(244,238,226,0.04) 1.5px, transparent 1.5px)', backgroundSize: '7px 7px' }} />
      <img src="../../assets/logos/pause-logo-darkbg.svg" style={{ width: 620, position: 'relative' }} />
      <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 22, position: 'relative' }}>
        <span style={{ width: 70, height: 2, background: 'var(--accent-soft)', opacity: 0.6 }} />
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, letterSpacing: '0.34em', textTransform: 'uppercase', color: 'var(--text-body)' }}>With Brandon Commodore</span>
        <span style={{ width: 70, height: 2, background: 'var(--accent-soft)', opacity: 0.6 }} />
      </div>
      <p style={{ marginTop: 30, fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 30, color: 'var(--text-muted)', position: 'relative' }}>where introspection meets ambition</p>
    </div>
  );
}

function EpisodeCover() {
  return (
    <div style={{
      width: 1080, height: 1080, background: 'var(--plum-950)', position: 'relative',
      display: 'flex', overflow: 'hidden', fontFamily: 'var(--font-body)',
    }}>
      <div style={{ width: '46%', position: 'relative' }}>
        <Photo label="Guest Portrait" treatment="plum" />
      </div>
      <div style={{ flex: 1, padding: '72px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <img src="../../assets/logos/pause-mark-purple.svg" style={{ width: 92 }} />
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-soft)', border: '2px solid var(--accent-deep)', borderRadius: 999, padding: '8px 20px' }}>EP 47</span>
        </div>
        <div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14, fontFamily: 'var(--font-meta)', fontSize: 20, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-warm)' }}>
            <span style={{ width: 32, height: 2, background: 'currentColor' }} />Season 3
          </span>
          <h1 style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 78, lineHeight: 1.08, color: 'var(--text-strong)', margin: '22px 0 28px' }}>The Discipline Behind the Drift</h1>
          <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 36, color: 'var(--accent-soft)', margin: 0 }}>with Maya Okonkwo</p>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 26, lineHeight: 1.5, color: 'var(--text-muted)', margin: 0, maxWidth: '90%' }}>On craft, doubt, and the quiet work of showing up before the world is watching.</p>
      </div>
    </div>
  );
}

Object.assign(window, { PodcastCover, EpisodeCover });
