import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { toPng } from 'html-to-image';
import { useForm } from 'react-hook-form';
import {
  Download,
  FileImage,
  ImagePlus,
  Palette,
  RefreshCcw,
  SlidersHorizontal,
  Type,
} from 'lucide-react';
import './styles.css';

const LOGO = '/brand/assets/logos/';

const palette = {
  ink900: '#141414',
  ink800: '#1c1c1c',
  ink700: '#262226',
  plum950: '#18121f',
  plum900: '#211829',
  plum700: '#4a2c63',
  plum500: '#7e44b4',
  plum300: '#b59cd0',
  ivory50: '#f4eee2',
  textBody: '#ddd3c4',
  textMuted: '#9a9088',
  amber500: '#cf8a3e',
};

const defaults = {
  podcastCover: {
    host: 'With Brandon Commodore',
    tagline: 'where introspection meets ambition',
    bg: palette.ink800,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
  },
  episodeCover: {
    episode: 'EP 47',
    season: 'Season 3',
    title: 'The Discipline Behind the Drift',
    guest: 'with Maya Okonkwo',
    description: 'On craft, doubt, and the quiet work of showing up before the world is watching.',
    bg: palette.plum950,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
  },
  guestAnnouncement: {
    kicker: 'This Week',
    label: 'Guest',
    guest: 'Maya Okonkwo',
    description: 'Composer, bandleader & reluctant optimist',
    bg: palette.ink900,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
  },
  quoteCard: {
    quote: 'Some of the best things I have made came right after I stopped trying so hard.',
    author: 'Maya Okonkwo',
    meta: 'Episode 47',
    bg: palette.ink800,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
  },
  pausePrompt: {
    kicker: 'Pause Prompt',
    prompt: 'What are you still doing only because you started it?',
    bg: palette.plum950,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
  },
  newEpisode: {
    badge: 'New Episode',
    meta: 'Episode 47 · Out Now',
    title: 'The Discipline\nBehind the Drift',
    cta: 'Listen wherever you find your podcasts',
    bg: palette.ink800,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
  },
  audiogram: {
    meta: 'Episode 47 · Clip',
    quote: 'You do not find the time. You defend it.',
    guest: 'Maya Okonkwo',
    bg: palette.ink800,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
  },
  youtube: {
    meta: 'Episode 47',
    title: 'The Discipline\nBehind the Drift',
    guest: 'with Maya Okonkwo',
    bg: palette.ink900,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
  },
  story: {
    kicker: 'New Guest',
    guest: 'Maya Okonkwo',
    cta: 'Swipe Up to Listen',
    bg: palette.plum950,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
  },
};

const templates = [
  { id: 'podcastCover', name: 'Main Cover', ratio: '1:1', size: [1080, 1080], component: PodcastCover, fields: ['host', 'tagline'] },
  { id: 'episodeCover', name: 'Episode Cover', ratio: '1:1', size: [1080, 1080], component: EpisodeCover, fields: ['episode', 'season', 'title', 'guest', 'description'], image: true },
  { id: 'guestAnnouncement', name: 'Guest', ratio: '1:1', size: [1080, 1080], component: GuestAnnouncement, fields: ['kicker', 'label', 'guest', 'description'], image: true },
  { id: 'quoteCard', name: 'Quote', ratio: '1:1', size: [1080, 1080], component: QuoteCard, fields: ['quote', 'author', 'meta'] },
  { id: 'pausePrompt', name: 'Prompt', ratio: '1:1', size: [1080, 1080], component: PausePrompt, fields: ['kicker', 'prompt'] },
  { id: 'newEpisode', name: 'Live Post', ratio: '1:1', size: [1080, 1080], component: NewEpisodeLive, fields: ['badge', 'meta', 'title', 'cta'] },
  { id: 'audiogram', name: 'Audiogram', ratio: '1:1', size: [1080, 1080], component: Audiogram, fields: ['meta', 'quote', 'guest'] },
  { id: 'youtube', name: 'YouTube', ratio: '16:9', size: [1280, 720], component: YouTubeThumbnail, fields: ['meta', 'title', 'guest'], image: true },
  { id: 'story', name: 'Story', ratio: '9:16', size: [1080, 1920], component: InstagramStory, fields: ['kicker', 'guest', 'cta'], image: true },
];

function App() {
  const [page, setPage] = useState(() => location.hash === '#styleguide' ? 'styleguide' : 'builder');

  useEffect(() => {
    const onHash = () => setPage(location.hash === '#styleguide' ? 'styleguide' : 'builder');
    addEventListener('hashchange', onHash);
    return () => removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="min-h-screen bg-ivory-50 text-ink-900">
      <header className="border-b border-ink-800/10 bg-ivory-50/95">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <img src={`${LOGO}pause-mark-purple.svg`} className="h-9 w-9" alt="" />
            <span className="font-display text-xl font-bold">Pause Asset Builder</span>
          </a>
          <nav className="flex rounded-full border border-ink-800/10 bg-white p-1 text-sm font-semibold shadow-warm">
            <a className={`nav-pill ${page === 'builder' ? 'active' : ''}`} href="#">Builder</a>
            <a className={`nav-pill ${page === 'styleguide' ? 'active' : ''}`} href="#styleguide">Styleguide</a>
          </nav>
        </div>
      </header>
      {page === 'builder' ? <Builder /> : <Styleguide />}
    </div>
  );
}

function Builder() {
  const [activeId, setActiveId] = useState('episodeCover');
  const [values, setValues] = useState(() => {
    const saved = sessionStorage.getItem('pause-builder-state');
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
  });
  const active = templates.find((template) => template.id === activeId);
  const activeValues = values[activeId];
  const previewRef = useRef(null);

  useEffect(() => {
    sessionStorage.setItem('pause-builder-state', JSON.stringify(values));
  }, [values]);

  const updateTemplate = (next) => {
    setValues((current) => ({ ...current, [activeId]: { ...current[activeId], ...next } }));
  };

  const resetActive = () => {
    updateTemplate({ ...defaults[activeId] });
  };

  const exportImage = async () => {
    if (!previewRef.current) return;
    await document.fonts.ready;
    const dataUrl = await toPng(previewRef.current, {
      cacheBust: true,
      pixelRatio: 1,
      backgroundColor: activeValues.bg,
      canvasWidth: active.size[0],
      canvasHeight: active.size[1],
      style: { transform: 'none' },
    });
    const link = document.createElement('a');
    link.download = `pause-${active.id}-${active.size[0]}x${active.size[1]}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <main className="mx-auto grid max-w-[1500px] gap-6 px-5 py-6 lg:grid-cols-[300px_minmax(0,1fr)_360px] lg:px-8">
      <aside className="rounded-lg border border-ink-800/10 bg-white p-3 shadow-warm">
        <div className="mb-3 flex items-center gap-2 px-2 pt-1 text-xs font-bold uppercase tracking-[0.18em] text-ink-800/60">
          <FileImage size={15} /> Templates
        </div>
        <div className="grid gap-2">
          {templates.map((template) => (
            <button
              key={template.id}
              className={`template-tab ${activeId === template.id ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveId(template.id)}
            >
              <span>{template.name}</span>
              <small>{template.ratio}</small>
            </button>
          ))}
        </div>
      </aside>

      <section className="min-w-0 rounded-lg border border-ink-800/10 bg-ink-900 p-4 shadow-matte lg:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-plum-300">{active.ratio} template</p>
            <h1 className="font-display text-3xl font-bold text-ivory-50">{active.name}</h1>
          </div>
          <button className="command-button" type="button" onClick={exportImage}>
            <Download size={18} /> Download PNG
          </button>
        </div>
        <PreviewCanvas template={active} data={activeValues} refNode={previewRef} />
      </section>

      <EditorPanel
        template={active}
        data={activeValues}
        updateTemplate={updateTemplate}
        resetActive={resetActive}
      />
    </main>
  );
}

function PreviewCanvas({ template, data, refNode }) {
  const [w, h] = template.size;
  const shellRef = useRef(null);
  const [scale, setScale] = useState(1);
  const scaleStyle = useMemo(() => {
    const maxWidth = template.ratio === '9:16' ? 420 : 760;
    return { width: Math.min(maxWidth, w), aspectRatio: `${w} / ${h}` };
  }, [template, w, h]);
  const Comp = template.component;

  useEffect(() => {
    if (!shellRef.current) return undefined;
    const resize = () => {
      const rect = shellRef.current.getBoundingClientRect();
      setScale(Math.min(rect.width / w, rect.height / h));
    };
    const observer = new ResizeObserver(resize);
    observer.observe(shellRef.current);
    resize();
    return () => observer.disconnect();
  }, [w, h]);

  return (
    <div className="flex min-h-[56vh] items-center justify-center rounded-md border border-ivory-50/10 bg-black/30 p-4">
      <div ref={shellRef} className="preview-shell" style={scaleStyle}>
        <div
          className="preview-scale"
          style={{
            width: w,
            height: h,
            transform: `scale(${scale})`,
          }}
        >
          <div ref={refNode}>
            <Comp data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

function EditorPanel({ template, data, updateTemplate, resetActive }) {
  const { register, reset } = useForm({ values: data });

  useEffect(() => reset(data), [data, reset]);

  const setField = (field, value) => updateTemplate({ [field]: value });
  const uploadImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => updateTemplate({ image: reader.result });
    reader.readAsDataURL(file);
  };

  return (
    <aside className="rounded-lg border border-ink-800/10 bg-white p-4 shadow-warm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ink-800/60">
            <SlidersHorizontal size={15} /> Editor
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold">{template.name}</h2>
        </div>
        <button className="icon-action" type="button" onClick={resetActive} title="Reset template">
          <RefreshCcw size={18} />
        </button>
      </div>

      <div className="space-y-5">
        <section>
          <h3 className="editor-heading"><Type size={15} /> Copy</h3>
          <div className="space-y-3">
            {template.fields.map((field) => (
              <label key={field} className="field-label">
                <span>{labelize(field)}</span>
                {['title', 'quote', 'description', 'prompt', 'cta'].includes(field) ? (
                  <textarea
                    {...register(field)}
                    rows={field === 'quote' || field === 'prompt' ? 4 : 3}
                    onChange={(event) => setField(field, event.target.value)}
                  />
                ) : (
                  <input {...register(field)} onChange={(event) => setField(field, event.target.value)} />
                )}
              </label>
            ))}
          </div>
        </section>

        {template.image && (
          <section>
            <h3 className="editor-heading"><ImagePlus size={15} /> Image</h3>
            <label className="upload-box">
              <input accept="image/*" type="file" onChange={uploadImage} />
              <ImagePlus size={20} />
              <span>{data.image ? 'Replace image' : 'Upload portrait or artwork'}</span>
            </label>
            {data.image && (
              <button className="clear-button" type="button" onClick={() => updateTemplate({ image: '' })}>
                Clear image
              </button>
            )}
            <label className="field-label mt-3">
              <span>Image fit</span>
              <select value={data.imageFit} onChange={(event) => setField('imageFit', event.target.value)}>
                <option value="cover">Cover crop</option>
                <option value="contain">Contain full image</option>
              </select>
            </label>
          </section>
        )}

        <section>
          <h3 className="editor-heading"><Palette size={15} /> Colors</h3>
          <div className="grid grid-cols-2 gap-3">
            {['bg', 'accent', 'accentSoft', 'accentWarm', 'textStrong', 'textBody'].map((field) => (
              <label key={field} className="color-label">
                <span>{labelize(field)}</span>
                <input type="color" value={data[field]} onChange={(event) => setField(field, event.target.value)} />
              </label>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}

function Template({ data, width, height, children, className = '' }) {
  return (
    <div
      className={className}
      style={{
        '--tpl-bg': data.bg,
        '--tpl-accent': data.accent,
        '--tpl-accent-soft': data.accentSoft,
        '--tpl-accent-warm': data.accentWarm,
        '--tpl-text': data.textStrong,
        '--tpl-body': data.textBody,
        '--tpl-muted': data.textMuted,
        width,
        height,
        background: data.bg,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)',
      }}
    >
      {children}
    </div>
  );
}

function Grain({ opacity = 0.04, size = 7 }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `radial-gradient(rgba(244,238,226,${opacity}) 1.5px, transparent 1.5px)`,
        backgroundSize: `${size}px ${size}px`,
        pointerEvents: 'none',
      }}
    />
  );
}

function Photo({ data, label = 'Guest Portrait' }) {
  return (
    <div className="photo-slot">
      {data.image ? (
        <img src={data.image} style={{ objectFit: data.imageFit || 'cover' }} alt="" />
      ) : (
        <>
          <div className="photo-grain" />
          <span>{label}</span>
        </>
      )}
    </div>
  );
}

function Logo({ variant = 'pause-logo-ivory.svg', style, alt = '' }) {
  return <img src={`${LOGO}${variant}`} style={style} alt={alt} />;
}

function KickerDash({ children, data }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14, fontFamily: 'var(--font-meta)', fontSize: 20, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: data.accentWarm }}>
      <span style={{ width: 32, height: 2, background: 'currentColor' }} />{children}
    </span>
  );
}

function PodcastCover({ data }) {
  return (
    <Template data={data} width={1080} height={1080} className="flex flex-col items-center justify-center">
      <Grain />
      <Logo variant="pause-logo-darkbg.svg" style={{ width: 620, position: 'relative' }} />
      <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 22, position: 'relative' }}>
        <span style={{ width: 70, height: 2, background: data.accentSoft, opacity: 0.6 }} />
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, letterSpacing: '0.34em', textTransform: 'uppercase', color: data.textBody }}>{data.host}</span>
        <span style={{ width: 70, height: 2, background: data.accentSoft, opacity: 0.6 }} />
      </div>
      <p style={{ marginTop: 30, fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 30, color: data.textMuted, position: 'relative' }}>{data.tagline}</p>
    </Template>
  );
}

function EpisodeCover({ data }) {
  return (
    <Template data={data} width={1080} height={1080} className="flex">
      <div style={{ width: '46%', position: 'relative' }}><Photo data={data} /></div>
      <div style={{ flex: 1, padding: '72px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Logo variant="pause-mark-purple.svg" style={{ width: 92 }} />
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: data.accentSoft, border: `2px solid ${data.accent}`, borderRadius: 999, padding: '8px 20px' }}>{data.episode}</span>
        </div>
        <div>
          <KickerDash data={data}>{data.season}</KickerDash>
          <h1 style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 78, lineHeight: 1.08, color: data.textStrong, margin: '22px 0 28px' }}>{data.title}</h1>
          <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 36, color: data.accentSoft, margin: 0 }}>{data.guest}</p>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 26, lineHeight: 1.5, color: data.textMuted, margin: 0, maxWidth: '90%' }}>{data.description}</p>
      </div>
    </Template>
  );
}

function GuestAnnouncement({ data }) {
  return (
    <Template data={data} width={1080} height={1080}>
      <Photo data={data} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,18,20,0.96) 18%, rgba(20,18,20,0.2) 55%, rgba(20,18,20,0.55) 100%)' }} />
      <div style={{ position: 'absolute', top: 56, left: 56, right: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo variant="pause-mark.svg" style={{ width: 84 }} />
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentWarm }}>{data.kicker}</span>
      </div>
      <div style={{ position: 'absolute', left: 64, right: 64, bottom: 72 }}>
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentSoft }}>{data.label}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 96, lineHeight: 0.98, color: data.textStrong, margin: '14px 0 18px' }}>{data.guest}</h1>
        <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 36, color: data.textBody, margin: 0 }}>{data.description}</p>
      </div>
    </Template>
  );
}

function QuoteCard({ data }) {
  return (
    <Template data={data} width={1080} height={1080} className="flex flex-col justify-center" style={{ padding: 96 }}>
      <div style={{ padding: 96 }}>
        <Grain opacity={0.035} />
        <div style={{ position: 'relative' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 200, lineHeight: 0.6, color: data.accent, display: 'block', height: 110 }}>"</span>
          <blockquote style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 64, lineHeight: 1.28, color: data.textStrong, margin: '0 0 48px' }}>{data.quote}</blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <span style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 8, height: 34, borderRadius: 4, background: data.accent }} />
              <span style={{ width: 8, height: 34, borderRadius: 4, background: data.accent }} />
            </span>
            <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, color: data.textBody }}>{data.author} · <span style={{ color: data.textMuted }}>{data.meta}</span></span>
          </div>
        </div>
        <Logo variant="pause-logo-ivory.svg" style={{ position: 'absolute', bottom: 64, right: 96, width: 150, opacity: 0.9 }} />
      </div>
    </Template>
  );
}

function PausePrompt({ data }) {
  return (
    <Template data={data} width={1080} height={1080} className="flex flex-col items-center justify-center text-center">
      <img src={`${LOGO}clock-arc.svg`} style={{ width: 260, opacity: 0.9 }} alt="" />
      <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: data.accentWarm, margin: '40px 0 30px' }}>{data.kicker}</span>
      <h1 style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 70, lineHeight: 1.22, color: data.textStrong, margin: 0, maxWidth: 860 }}>{data.prompt}</h1>
      <Logo variant="pause-logo-ivory.svg" style={{ width: 130, marginTop: 64, opacity: 0.85 }} />
    </Template>
  );
}

function NewEpisodeLive({ data }) {
  return (
    <Template data={data} width={1080} height={1080} className="flex flex-col justify-between">
      <div style={{ padding: 80, position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Grain opacity={0.035} />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo variant="pause-logo-ivory.svg" style={{ width: 200 }} />
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: palette.ink900, background: data.accentWarm, borderRadius: 999, padding: '12px 26px' }}>{data.badge}</span>
        </div>
        <div style={{ position: 'relative' }}>
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentSoft }}>{data.meta}</span>
          <h1 style={{ whiteSpace: 'pre-line', fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 92, lineHeight: 1.06, color: data.textStrong, margin: '24px 0 0' }}>{data.title}</h1>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 28 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 96, height: 96, borderRadius: '50%', background: data.accent, color: data.textStrong, fontSize: 40, paddingLeft: 8 }}>▶</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 28, color: data.textMuted }}>{data.cta}</span>
        </div>
      </div>
    </Template>
  );
}

function Audiogram({ data }) {
  const bars = [22, 40, 64, 88, 56, 30, 70, 96, 48, 26, 60, 84, 40, 72, 30, 52, 88, 36];
  return (
    <Template data={data} width={1080} height={1080}>
      <div style={{ padding: 80, position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo variant="pause-mark.svg" style={{ width: 80 }} />
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: data.accentSoft }}>{data.meta}</span>
        </div>
        <blockquote style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 56, lineHeight: 1.3, color: data.textStrong, margin: 0 }}>"{data.quote}"</blockquote>
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 9, height: 120, marginBottom: 28 }}>
            {bars.map((height, index) => <span key={index} style={{ flex: 1, height: `${height}%`, background: index % 3 === 0 ? data.accent : data.accentSoft, borderRadius: 6 }} />)}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, color: data.textMuted }}>{data.guest}</span>
            <Logo variant="pause-logo-ivory.svg" style={{ width: 130, opacity: 0.85 }} />
          </div>
        </div>
      </div>
    </Template>
  );
}

function YouTubeThumbnail({ data }) {
  return (
    <Template data={data} width={1280} height={720} className="flex">
      <div style={{ flex: 1, padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentSoft }}>
          <Logo variant="pause-bars.svg" style={{ height: 30 }} /> {data.meta}
        </span>
        <h1 style={{ whiteSpace: 'pre-line', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 88, lineHeight: 0.98, color: data.textStrong, margin: '24px 0 26px' }}>{data.title}</h1>
        <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 38, color: data.accentSoft, margin: 0 }}>{data.guest}</p>
        <Logo variant="pause-logo-ivory.svg" style={{ width: 150, marginTop: 48, opacity: 0.85 }} />
      </div>
      <div style={{ width: 460, position: 'relative' }}>
        <Photo data={data} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${data.bg} 0%, transparent 28%)` }} />
      </div>
    </Template>
  );
}

function InstagramStory({ data }) {
  return (
    <Template data={data} width={1080} height={1920} className="flex flex-col">
      <div style={{ padding: '90px 72px 0', textAlign: 'center' }}><Logo variant="pause-logo-ivory.svg" style={{ width: 220 }} /></div>
      <div style={{ flex: 1, margin: '70px 72px', borderRadius: 36, overflow: 'hidden', position: 'relative' }}>
        <Photo data={data} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(24,18,31,0.95) 12%, transparent 55%)' }} />
        <div style={{ position: 'absolute', left: 56, right: 56, bottom: 64 }}>
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentWarm }}>{data.kicker}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 96, lineHeight: 0.98, color: data.textStrong, margin: '16px 0 0' }}>{data.guest}</h1>
        </div>
      </div>
      <div style={{ padding: '0 72px 110px', textAlign: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 18, fontFamily: 'var(--font-meta)', fontSize: 30, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: palette.ink900, background: data.accentWarm, borderRadius: 999, padding: '22px 48px' }}>{data.cta}</span>
      </div>
    </Template>
  );
}

function Styleguide() {
  const colors = [
    ['Ink Black', palette.ink900], ['Near Black', palette.ink800], ['Purple Black', palette.plum950],
    ['Deep Purple', palette.plum700], ['Pause Purple', palette.plum500], ['Muted Lavender', palette.plum300],
    ['Ivory', palette.ivory50], ['Warm Paper', '#ece4d4'], ['Amber', palette.amber500],
  ];

  return (
    <main className="mx-auto max-w-[1300px] px-5 py-8 lg:px-8">
      <section className="mb-8 rounded-lg bg-ink-900 px-7 py-8 text-ivory-50 shadow-matte">
        <img src={`${LOGO}pause-logo-darkbg.svg`} className="mb-8 w-72 max-w-full" alt="Pause for a Minute" />
        <p className="max-w-3xl font-editorial text-4xl leading-tight">A warm, analog, late-night studio system for podcast covers, social posts, audiograms, stories, and thumbnails.</p>
      </section>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="style-section">
          <h2>Colors</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {colors.map(([name, color]) => (
              <div key={name} className="rounded-md border border-ink-800/10 bg-white p-3">
                <div className="mb-3 h-20 rounded-sm" style={{ background: color }} />
                <p className="font-semibold">{name}</p>
                <p className="font-mono text-xs text-ink-800/60">{color}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="style-section">
          <h2>Typography</h2>
          <div className="space-y-5">
            <div>
              <p className="guide-label">Display</p>
              <p className="font-display text-5xl font-bold">Pause for a Minute</p>
            </div>
            <div>
              <p className="guide-label">Editorial</p>
              <p className="font-editorial text-4xl italic">where introspection meets ambition</p>
            </div>
            <div>
              <p className="guide-label">UI and Body</p>
              <p className="font-body text-lg text-ink-800/75">Labels, controls, descriptions, and quiet supporting copy use a clean humanist sans.</p>
            </div>
          </div>
        </section>
        <section className="style-section">
          <h2>Logo System</h2>
          <div className="grid gap-4">
            <div className="rounded-md bg-ink-900 p-6"><img src={`${LOGO}pause-logo-darkbg.svg`} className="w-72" alt="" /></div>
            <div className="rounded-md bg-ivory-100 p-6"><img src={`${LOGO}pause-logo-primary.svg`} className="w-72" alt="" /></div>
            <div className="flex gap-4 rounded-md bg-white p-6">
              <img src={`${LOGO}pause-mark-purple.svg`} className="h-16" alt="" />
              <img src={`${LOGO}pause-bars.svg`} className="h-16" alt="" />
              <img src={`${LOGO}clock-arc.svg`} className="h-16" alt="" />
            </div>
          </div>
        </section>
        <section className="style-section">
          <h2>Template Rules</h2>
          <div className="grid gap-3 text-base leading-7 text-ink-800/75">
            <p>Use one focal point, generous margins, and a single warm amber spark. Keep long copy left-aligned and ceremonial prompts centered.</p>
            <p>Uploaded portraits should feel natural, warm, honest, and slightly cinematic. The app adds dark protection overlays where type sits on photography.</p>
            <p>Export sizes: 1080 square, 1080 x 1920 story, and 1280 x 720 YouTube thumbnail.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

function labelize(value) {
  return value.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase());
}

createRoot(document.getElementById('root')).render(<App />);
