/* Social templates — quote card, guest announcement, pause prompt, new episode (all 1080×1080). */

function QuoteCard() {
  return (
    <div style={{ width: 1080, height: 1080, background: 'var(--ink-800)', position: 'relative', padding: 96, display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'var(--font-body)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(244,238,226,0.035) 1.5px, transparent 1.5px)', backgroundSize: '7px 7px' }} />
      <div style={{ position: 'relative' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 200, lineHeight: 0.6, color: 'var(--accent)', display: 'block', height: 110 }}>&ldquo;</span>
        <blockquote style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 64, lineHeight: 1.28, color: 'var(--text-strong)', margin: '0 0 48px' }}>
          Some of the best things I&rsquo;ve made came right after I stopped trying so hard.
        </blockquote>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <span style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 8, height: 34, borderRadius: 4, background: 'var(--accent)' }} />
            <span style={{ width: 8, height: 34, borderRadius: 4, background: 'var(--accent)' }} />
          </span>
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, color: 'var(--text-body)' }}>Maya Okonkwo &middot; <span style={{ color: 'var(--text-muted)' }}>Episode 47</span></span>
        </div>
      </div>
      <img src="../../assets/logos/pause-logo-ivory.svg" style={{ position: 'absolute', bottom: 64, right: 96, width: 150, opacity: 0.9 }} />
    </div>
  );
}

function GuestAnnouncement() {
  return (
    <div style={{ width: 1080, height: 1080, background: 'var(--ink-900)', position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-body)' }}>
      <Photo label="Guest Portrait" treatment="plum" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,18,20,0.96) 18%, rgba(20,18,20,0.2) 55%, rgba(20,18,20,0.55) 100%)' }} />
      <div style={{ position: 'absolute', top: 56, left: 56, right: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="../../assets/logos/pause-mark.svg" style={{ width: 84, color: 'var(--ivory-50)' }} />
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-warm)' }}>This Week</span>
      </div>
      <div style={{ position: 'absolute', left: 64, right: 64, bottom: 72 }}>
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-soft)' }}>Guest</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 96, lineHeight: 0.98, color: 'var(--ivory-50)', margin: '14px 0 18px' }}>Maya Okonkwo</h1>
        <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 36, color: 'var(--text-body)', margin: 0 }}>Composer, bandleader &amp; reluctant optimist</p>
      </div>
    </div>
  );
}

function PausePrompt() {
  return (
    <div style={{ width: 1080, height: 1080, background: 'var(--plum-950)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 110, fontFamily: 'var(--font-body)', overflow: 'hidden' }}>
      <ClockArc width={260} color="var(--accent-soft)" />
      <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent-warm)', margin: '40px 0 30px' }}>Pause Prompt</span>
      <h1 style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 70, lineHeight: 1.22, color: 'var(--text-strong)', margin: 0 }}>What are you still doing only because you started it?</h1>
      <img src="../../assets/logos/pause-logo-ivory.svg" style={{ width: 130, marginTop: 64, opacity: 0.85 }} />
    </div>
  );
}

function NewEpisodeLive() {
  return (
    <div style={{ width: 1080, height: 1080, background: 'var(--ink-800)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, fontFamily: 'var(--font-body)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(244,238,226,0.035) 1.5px, transparent 1.5px)', backgroundSize: '7px 7px' }} />
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="../../assets/logos/pause-logo-ivory.svg" style={{ width: 200 }} />
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-900)', background: 'var(--accent-warm)', borderRadius: 999, padding: '12px 26px' }}>New Episode</span>
      </div>
      <div style={{ position: 'relative' }}>
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-soft)' }}>Episode 47 &middot; Out Now</span>
        <h1 style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 92, lineHeight: 1.06, color: 'var(--text-strong)', margin: '24px 0 0' }}>The Discipline<br/>Behind the Drift</h1>
      </div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 28 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 96, height: 96, borderRadius: '50%', background: 'var(--accent)', color: 'var(--ivory-50)', fontSize: 40, paddingLeft: 8 }}>&#9654;</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 28, color: 'var(--text-muted)' }}>Listen wherever you find your podcasts</span>
      </div>
    </div>
  );
}

Object.assign(window, { QuoteCard, GuestAnnouncement, PausePrompt, NewEpisodeLive });
