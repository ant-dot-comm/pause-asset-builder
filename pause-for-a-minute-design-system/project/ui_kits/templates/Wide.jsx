/* Wide & vertical templates — YouTube thumbnail (16:9, 1280×720),
   Instagram story (9:16, 1080×1920), audiogram bar. */

function YouTubeThumbnail() {
  return (
    <div style={{ width: 1280, height: 720, background: 'var(--ink-900)', position: 'relative', display: 'flex', overflow: 'hidden', fontFamily: 'var(--font-body)' }}>
      <div style={{ flex: 1, padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-soft)' }}>
          <img src="../../assets/logos/pause-bars.svg" style={{ height: 30, color: 'var(--accent)' }} /> Episode 47
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 88, lineHeight: 0.98, color: 'var(--ivory-50)', margin: '24px 0 26px' }}>The Discipline<br/>Behind the Drift</h1>
        <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 38, color: 'var(--accent-soft)', margin: 0 }}>with Maya Okonkwo</p>
        <img src="../../assets/logos/pause-logo-ivory.svg" style={{ width: 150, marginTop: 48, opacity: 0.85 }} />
      </div>
      <div style={{ width: 460, position: 'relative' }}>
        <Photo label="Guest Portrait" treatment="plum" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--ink-900) 0%, transparent 28%)' }} />
      </div>
    </div>
  );
}

function InstagramStory() {
  return (
    <div style={{ width: 1080, height: 1920, background: 'var(--plum-950)', position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '90px 72px 0', textAlign: 'center' }}>
        <img src="../../assets/logos/pause-logo-ivory.svg" style={{ width: 220 }} />
      </div>
      <div style={{ flex: 1, margin: '70px 72px', borderRadius: 36, overflow: 'hidden', position: 'relative' }}>
        <Photo label="Guest Portrait" treatment="plum" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(24,18,31,0.95) 12%, transparent 55%)' }} />
        <div style={{ position: 'absolute', left: 56, right: 56, bottom: 64 }}>
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-warm)' }}>New Guest</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 96, lineHeight: 0.98, color: 'var(--ivory-50)', margin: '16px 0 0' }}>Maya Okonkwo</h1>
        </div>
      </div>
      <div style={{ padding: '0 72px 110px', textAlign: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 18, fontFamily: 'var(--font-meta)', fontSize: 30, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-900)', background: 'var(--accent-warm)', borderRadius: 999, padding: '22px 48px' }}>
          Swipe Up to Listen
        </span>
      </div>
    </div>
  );
}

function Audiogram() {
  const bars = [22, 40, 64, 88, 56, 30, 70, 96, 48, 26, 60, 84, 40, 72, 30, 52, 88, 36];
  return (
    <div style={{ width: 1080, height: 1080, background: 'var(--ink-800)', position: 'relative', padding: 80, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'var(--font-body)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="../../assets/logos/pause-mark.svg" style={{ width: 80, color: 'var(--ivory-50)' }} />
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent-soft)' }}>Episode 47 &middot; Clip</span>
      </div>
      <blockquote style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 56, lineHeight: 1.3, color: 'var(--text-strong)', margin: 0 }}>
        &ldquo;You don&rsquo;t find the time. You defend it.&rdquo;
      </blockquote>
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 9, height: 120, marginBottom: 28 }}>
          {bars.map((h, i) => (
            <span key={i} style={{ flex: 1, height: `${h}%`, background: i % 3 === 0 ? 'var(--accent)' : 'var(--accent-deep)', borderRadius: 6 }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, color: 'var(--text-muted)' }}>Maya Okonkwo</span>
          <img src="../../assets/logos/pause-logo-ivory.svg" style={{ width: 130, opacity: 0.85 }} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { YouTubeThumbnail, InstagramStory, Audiogram });
