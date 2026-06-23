import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import imageCompression from 'browser-image-compression';
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
const DECORATION = '/brand/assets/decorations/';
const IMAGE_ASSET = '/brand/assets/images/';
const TEXTURE = '/brand/assets/textures/';
const IMAGE_COMPRESSION_OPTIONS = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1600,
  useWebWorker: true,
};
const MAIN_COVER_HOST = 'Hosted by Brandon Commodore';
const MAIN_COVER_TAGLINE = 'different paths. familiar truths.';
const MAIN_COVER_SECONDARY_IMAGE = `${IMAGE_ASSET}main-cover-bdon.png`;
const DECORATION_SIZES = {
  'bars-divider': [248, 22],
  'brush-rule': [248, 18],
  'sound-bars': [172, 58],
  'tick-strip': [180, 22],
};

const palette = {
  ink900: '#141414',
  ink800: '#1c1c1c',
  ink700: '#262226',
  plum950: '#18121f',
  plum900: '#211829',
  plum700: '#4a2c63',
  plum500: '#7e44b4',
  plum300: '#b59cd0',
  plum200: '#cdbede',
  ivory50: '#f4eee2',
  ivory100: '#ece4d4',
  tan300: '#d8c3a5',
  tan500: '#b79a73',
  textBody: '#ddd3c4',
  textMuted: '#9a9088',
  textFaint: '#6a635d',
  amber500: '#cf8a3e',
  amber600: '#b3742f',
};

const PALETTE_OPTIONS = [
  ['Ink 900', palette.ink900],
  ['Ink 800', palette.ink800],
  ['Ink 700', palette.ink700],
  ['Plum 950', palette.plum950],
  ['Plum 900', palette.plum900],
  ['Plum 700', palette.plum700],
  ['Pause Purple', palette.plum500],
  ['Muted Lavender', palette.plum300],
  ['Lavender Mist', palette.plum200],
  ['Ivory', palette.ivory50],
  ['Warm Paper', palette.ivory100],
  ['Warm Tan', palette.tan300],
  ['Clay', palette.tan500],
  ['Amber', palette.amber500],
  ['Deep Amber', palette.amber600],
  ['Text Body', palette.textBody],
  ['Text Muted', palette.textMuted],
  ['Text Faint', palette.textFaint],
];

const defaults = {
  podcastCover: {
    host: MAIN_COVER_HOST,
    tagline: MAIN_COVER_TAGLINE,
    bg: palette.ink800,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    logoPrimary: palette.ivory50,
    logoSecondary: palette.plum500,
    logoColor: palette.ivory50,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
    secondaryImage: MAIN_COVER_SECONDARY_IMAGE,
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
    logoPrimary: palette.ivory50,
    logoSecondary: palette.plum500,
    logoColor: palette.ivory50,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
    orientation: 'portrait',
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
    pillBg: palette.ink900,
    pillText: palette.amber500,
    logoPrimary: palette.ivory50,
    logoSecondary: palette.plum500,
    logoColor: palette.ivory50,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
    orientation: 'portrait',
  },
  quoteCard: {
    quote: 'Some of the best things I have made came right after I stopped trying so hard.',
    author: 'Maya Okonkwo',
    meta: 'Episode 47',
    bg: palette.ink800,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    logoPrimary: palette.ivory50,
    logoSecondary: palette.plum500,
    logoColor: palette.ivory50,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
  },
  pausePrompt: {
    kicker: 'Inner Question',
    prompt: 'What are you still doing only because you started it?',
    bg: palette.plum950,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    logoPrimary: palette.ivory50,
    logoSecondary: palette.plum500,
    logoColor: palette.ivory50,
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
    logoPrimary: palette.ivory50,
    logoSecondary: palette.plum500,
    logoColor: palette.ivory50,
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
    logoPrimary: palette.ivory50,
    logoSecondary: palette.plum500,
    logoColor: palette.ivory50,
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
    logoPrimary: palette.ivory50,
    logoSecondary: palette.plum500,
    logoColor: palette.ivory50,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
    orientation: 'portrait',
  },
  story: {
    kicker: 'New Guest',
    guest: 'Maya Okonkwo',
    description: 'Composer, bandleader & reluctant optimist',
    cta: 'Swipe Up to Listen',
    bg: palette.plum950,
    accent: palette.plum500,
    accentSoft: palette.plum300,
    accentWarm: palette.amber500,
    logoColor: palette.ivory50,
    textStrong: palette.ivory50,
    textBody: palette.textBody,
    textMuted: palette.textMuted,
    image: '',
    imageFit: 'cover',
    orientation: 'portrait',
  },
};

const templates = [
  { id: 'podcastCover', name: 'Main Cover', ratio: '1:1', size: [1080, 1080], component: PodcastCover, fields: ['host', 'tagline'], secondaryPng: true, colorFields: ['bg', 'accent', 'accentSoft', 'logoPrimary', 'logoSecondary', 'textBody', 'textMuted'] },
  { id: 'episodeCover', name: 'Episode Cover', ratio: '1:1', size: [1080, 1080], component: EpisodeCover, fields: ['episode', 'season', 'title', 'guest', 'description'], image: true, orientation: true, colorFields: ['bg', 'accent', 'accentSoft', 'accentWarm', 'logoPrimary', 'logoSecondary', 'textStrong', 'textMuted'] },
  { id: 'guestAnnouncement', name: 'Guest Announcement', ratio: '1:1', size: [1080, 1080], component: GuestAnnouncement, fields: ['kicker', 'label', 'guest', 'description'], image: true, orientation: true, colorFields: ['bg', 'accentSoft', 'accentWarm', 'pillBg', 'pillText', 'logoPrimary', 'logoSecondary', 'textStrong', 'textBody'] },
  { id: 'quoteCard', name: 'Quote', ratio: '1:1', size: [1080, 1080], component: QuoteCard, fields: ['quote', 'author', 'meta'], colorFields: ['bg', 'accent', 'logoColor', 'textStrong', 'textBody', 'textMuted'] },
  { id: 'pausePrompt', name: 'Prompt', ratio: '1:1', size: [1080, 1080], component: PausePrompt, fields: ['kicker', 'prompt'], colorFields: ['bg', 'accent', 'accentWarm', 'logoPrimary', 'logoSecondary', 'textStrong'] },
  { id: 'newEpisode', name: 'Live Post', ratio: '1:1', size: [1080, 1080], component: NewEpisodeLive, fields: ['badge', 'meta', 'title', 'cta'], colorFields: ['bg', 'accent', 'accentSoft', 'accentWarm', 'logoPrimary', 'logoSecondary', 'textStrong', 'textMuted'] },
  { id: 'audiogram', name: 'Audiogram', ratio: '1:1', size: [1080, 1080], component: Audiogram, fields: ['meta', 'quote', 'guest'], colorFields: ['bg', 'accent', 'accentSoft', 'accentWarm', 'logoPrimary', 'logoSecondary', 'textStrong', 'textMuted'] },
  { id: 'youtube', name: 'YouTube Thumbnail', ratio: '16:9', size: [1280, 720], component: YouTubeThumbnail, fields: ['meta', 'title', 'guest'], image: true, orientation: true, colorFields: { portrait: ['bg', 'accent', 'accentSoft', 'logoPrimary', 'logoSecondary', 'textStrong'], landscape: ['bg', 'accent', 'accentSoft', 'accentWarm', 'logoPrimary', 'logoSecondary', 'textStrong'] } },
  { id: 'story', name: 'Instagram Story', ratio: '9:16', size: [1080, 1920], component: InstagramStory, fields: ['kicker', 'guest', 'description', 'cta'], image: true, orientation: true, colorFields: { portrait: ['bg', 'accentWarm', 'logoPrimary', 'logoSecondary', 'textStrong'], landscape: ['bg', 'accent', 'accentWarm', 'logoPrimary', 'logoSecondary', 'textStrong', 'textBody'] } },
];

function App() {
  const [page, setPage] = useState(() => location.hash === '#styleguide' ? 'styleguide' : 'builder');

  useEffect(() => {
    const onHash = () => setPage(location.hash === '#styleguide' ? 'styleguide' : 'builder');
    addEventListener('hashchange', onHash);
    return () => removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="app-shell min-h-screen text-ivory-50">
      <header className="app-header border-b">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <img src={`${LOGO}pause-mark-purple.svg`} className="h-9 w-9" alt="" />
            <span className="font-display text-xl font-bold">Pause Asset Builder</span>
          </a>
          <nav className="app-nav flex rounded-full border p-1 text-sm font-semibold shadow-warm">
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
  const [values, setValues] = useState(getInitialValues);
  const [imageLoading, setImageLoading] = useState({});
  const active = templates.find((template) => template.id === activeId);
  const activeValues = { ...values[activeId], imageLoading: Boolean(imageLoading[activeId]) };
  const activeDescriptor = getTemplateDescriptor(active, activeValues);
  const previewRef = useRef(null);

  useEffect(() => {
    try {
      sessionStorage.setItem('pause-builder-state', JSON.stringify(values));
    } catch (error) {
      console.warn('Builder state could not be saved in this browser session.', error);
    }
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
      <aside className="app-panel rounded-lg border p-3 shadow-warm">
        <div className="mb-3 flex items-center gap-2 px-2 pt-1 text-xs font-bold uppercase tracking-[0.18em] text-plum-300">
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
              <small>{getTemplateDescriptor(template, values[template.id])}</small>
            </button>
          ))}
        </div>
      </aside>

      <section className="min-w-0 rounded-lg border border-ink-800/10 bg-ink-900 p-4 shadow-matte lg:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-plum-300">{activeDescriptor} template</p>
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
        setImageLoading={(loading) => setImageLoading((current) => ({ ...current, [activeId]: loading }))}
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

function EditorPanel({ template, data, updateTemplate, resetActive, setImageLoading }) {
  const { register, reset } = useForm({ values: data });
  const [openColorField, setOpenColorField] = useState(null);

  useEffect(() => reset(data), [data, reset]);

  const setField = (field, value) => updateTemplate({ [field]: value });
  const uploadImage = async (event, { field = 'image', pngOnly = false, compress = true } = {}) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (pngOnly && file.type !== 'image/png') {
      alert('Please upload a PNG so the cutout/transparency stays intact.');
      event.target.value = '';
      return;
    }

    setImageLoading(true);
    try {
      const imageFile = compress ? await imageCompression(file, IMAGE_COMPRESSION_OPTIONS) : file;
      const image = await readFileAsDataUrl(imageFile);
      updateTemplate({ [field]: image });
    } catch (error) {
      console.error('Image compression failed', error);
      alert('That image could not be prepared. Try a smaller photo or a different file.');
    } finally {
      setImageLoading(false);
      event.target.value = '';
    }
  };

  return (
    <aside className="app-panel rounded-lg border p-4 shadow-warm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-plum-300">
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
            {template.orientation && (
              <div className="mb-3">
                <span className="orientation-label">Image template orientation</span>
                <div className="orientation-switch" role="group" aria-label="Image template orientation">
                  <button
                    className={data.orientation !== 'landscape' ? 'active' : ''}
                    type="button"
                    onClick={() => setField('orientation', 'portrait')}
                  >
                    Vertical image
                  </button>
                  <button
                    className={data.orientation === 'landscape' ? 'active' : ''}
                    type="button"
                    onClick={() => setField('orientation', 'landscape')}
                  >
                    Horizontal image
                  </button>
                </div>
              </div>
            )}
            <label className="upload-box">
              <input accept="image/*" disabled={data.imageLoading} type="file" onChange={uploadImage} />
              {data.imageLoading ? <BrushClockLoader compact /> : <ImagePlus size={20} />}
              <span>{data.imageLoading ? 'Preparing image...' : data.image ? 'Replace image' : `Upload ${data.orientation === 'landscape' ? 'horizontal' : 'vertical'} image`}</span>
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

        {template.secondaryPng && (
          <section>
            <h3 className="editor-heading"><ImagePlus size={15} /> Main Cover Cutout</h3>
            <label className="upload-box">
              <input
                accept="image/png"
                disabled={data.imageLoading}
                type="file"
                onChange={(event) => uploadImage(event, { field: 'secondaryImage', pngOnly: true, compress: false })}
              />
              {data.imageLoading ? <BrushClockLoader compact /> : <ImagePlus size={20} />}
              <span>{data.imageLoading ? 'Preparing PNG...' : 'Replace secondary PNG cutout'}</span>
            </label>
            {data.secondaryImage && (
              <button className="clear-button" type="button" onClick={() => updateTemplate({ secondaryImage: '' })}>
                Clear secondary image
              </button>
            )}
            <p className="mt-2 text-xs leading-5 text-ink-800/55">
              PNG only, so knocked-out backgrounds and transparency stay clean.
            </p>
          </section>
        )}

        <section>
          <h3 className="editor-heading"><Palette size={15} /> Colors</h3>
          <div className="grid grid-cols-2 gap-3">
            {getColorFields(template, data).map((field) => (
              <PaletteDropdown
                key={field}
                field={field}
                isOpen={openColorField === field}
                onChange={(value) => {
                  setField(field, value);
                  setOpenColorField(null);
                }}
                onToggle={() => setOpenColorField((current) => (current === field ? null : field))}
                value={data[field]}
              />
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}

function PaletteDropdown({ field, value, isOpen, onToggle, onChange }) {
  const selected = getPaletteOption(value);
  return (
    <div className="color-label palette-dropdown">
      <span>{labelize(field)}</span>
      <button className="palette-trigger" type="button" onClick={onToggle}>
        <i style={{ background: selected[1] }} />
        <span>{selected[0]}</span>
      </button>
      {isOpen && (
        <div className="palette-menu">
          {PALETTE_OPTIONS.map(([name, color]) => (
            <button
              key={`${field}-${color}`}
              className={`palette-option ${color === value ? 'active' : ''}`}
              type="button"
              onClick={() => onChange(color)}
              title={name}
            >
              <i style={{ background: color }} />
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Template({ data, width, height, children, className = '', style = {} }) {
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
        ...style,
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

function TextureLayer({ type = 'grain-dots.svg', opacity = 0.12, size = 80, blend = 'normal', style = {} }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("${TEXTURE}${type}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: `${size}px ${size}px`,
        mixBlendMode: blend,
        opacity,
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}

function Texture({ kind = 'grain', opacity = 1, scale = 1, blend, style = {} }) {
  const files = { grain: 'grain-dots.svg', ticks: 'tick-field.svg', arcs: 'arc-scallops.svg', bars: 'pause-bar-weave.svg' };
  const base = { grain: 80, ticks: 80, arcs: 90, bars: 84 };
  return <TextureLayer type={files[kind]} opacity={opacity} size={base[kind] * scale} blend={blend} style={style} />;
}

function Decoration({ name, style = {} }) {
  return <img src={`${DECORATION}${name}`} style={{ display: 'block', ...style }} alt="" />;
}

function Deco({ name, height, color, opacity = 1, rotate = 0, style = {} }) {
  const size = DECORATION_SIZES[name];
  if (!size) return null;
  const [width, sourceHeight] = size;
  return (
    <span
      aria-hidden="true"
      style={{
        background: color,
        display: 'block',
        flex: 'none',
        height,
        maskImage: `url("${DECORATION}${name}.svg")`,
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
        opacity,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        WebkitMaskImage: `url("${DECORATION}${name}.svg")`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        width: height * (width / sourceHeight),
        ...style,
      }}
    />
  );
}

function MaskedAsset({ src, width, height, color = palette.ivory50, style = {} }) {
  return (
    <span
      aria-hidden="true"
      style={{
        background: color,
        display: 'block',
        flex: 'none',
        height,
        maskImage: `url("${src}")`,
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
        WebkitMaskImage: `url("${src}")`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        width,
        ...style,
      }}
    />
  );
}

function Mark({ width = 92, color = palette.ivory50, style = {} }) {
  return <MaskedAsset src={`${LOGO}pause-mark.svg`} width={width} height={width * 0.54} color={color} style={style} />;
}

function PauseBars({ height = 30, color = palette.plum500, style = {} }) {
  return (
    <svg viewBox="0 0 40 48" height={height} width={height * 40 / 48} role="img" aria-label="Pause bars" style={{ display: 'block', flex: 'none', ...style }}>
      <rect x="6" y="4" width="11" height="40" rx="5.5" fill={color} />
      <rect x="23" y="4" width="11" height="40" rx="5.5" fill={color} />
    </svg>
  );
}

function Photo({ data, label = 'Guest Photo', treatment = 'plum', radius = 0, style = {} }) {
  const treatments = {
    plum: 'linear-gradient(135deg, #2a1d38 0%, #4a2c63 60%, #1c1c1c 100%)',
    warm: 'linear-gradient(135deg, #2a2018 0%, #4a3826 55%, #1c1c1c 100%)',
    mono: 'linear-gradient(135deg, #2a2a2a 0%, #161616 100%)',
  };

  return (
    <div className="photo-slot" style={{ background: treatments[treatment] || treatments.plum, borderRadius: radius, ...style }}>
      {data.imageLoading ? (
        <div className="photo-loading">
          <BrushClockLoader />
          <span>Preparing Image</span>
        </div>
      ) : data.image ? (
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

function BrushClockLoader({ compact = false }) {
  const ticks = Array.from({ length: compact ? 8 : 12 });
  return (
    <span className={`brush-clock-loader ${compact ? 'compact' : ''}`} aria-hidden="true">
      <span className="brush-clock-loader__ring" />
      <span className="brush-clock-loader__ticks">
        {ticks.map((_, index) => (
          <i key={index} style={{ transform: `rotate(${index * (360 / ticks.length)}deg)` }} />
        ))}
      </span>
      <span className="brush-clock-loader__bars" />
    </span>
  );
}

function Logo({ variant = 'pause-logo-ivory.svg', color, style = {}, alt = '' }) {
  if (color) {
    return <MaskedAsset src={`${LOGO}${variant}`} width={style.width || 160} height={style.height || (style.width || 160) * 0.84} color={color} style={style} />;
  }
  return <img src={`${LOGO}${variant}`} style={style} alt={alt} />;
}

function TwoColorLogo({ primary = palette.ivory50, secondary = palette.plum500, style = {} }) {
  const width = style.width || 620;
  const height = style.height || width * 0.84;
  return (
    <span style={{ display: 'block', height, position: 'relative', width, ...style }}>
      <MaskedAsset src={`${LOGO}pause-logo-primary-mask.svg`} width="100%" height="100%" color={primary} style={{ position: 'absolute', inset: 0 }} />
      <MaskedAsset src={`${LOGO}pause-logo-secondary-mask.svg`} width="100%" height="100%" color={secondary} style={{ position: 'absolute', inset: 0 }} />
    </span>
  );
}

function LogoAvatar({ data, style = {} }) {
  return (
    <div
      style={{
        alignItems: 'center',
        backdropFilter: 'blur(12px)',
        background: `linear-gradient(145deg, ${data.bg}f2, rgba(20,18,20,0.86))`,
        border: `2px solid ${data.accentSoft}55`,
        borderRadius: 34,
        boxShadow: '0 22px 54px rgba(0,0,0,0.42), 0 0 0 8px rgba(244,238,226,0.035)',
        display: 'flex',
        height: 178,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 178,
        WebkitBackdropFilter: 'blur(12px)',
        ...style,
      }}
    >
      <TwoColorLogo primary={data.logoPrimary} secondary={data.logoSecondary} style={{ width: 118 }} />
    </div>
  );
}

function KickerPill({ children, data, style = {} }) {
  return (
    <span
      style={{
        backdropFilter: 'blur(14px)',
        background: data.pillBg || 'rgba(20,18,20,0.9)',
        border: `2px solid ${data.pillText || data.accent}`,
        borderRadius: 999,
        boxShadow: '0 18px 42px rgba(0,0,0,0.46), 0 0 24px rgba(126,68,180,0.2)',
        color: data.pillText || data.accentWarm,
        display: 'inline-flex',
        fontFamily: 'var(--font-meta)',
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: '0.18em',
        padding: '9px 20px',
        textTransform: 'uppercase',
        WebkitBackdropFilter: 'blur(14px)',
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function KickerDash({ children, data }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14, fontFamily: 'var(--font-meta)', fontSize: 20, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: data.accentWarm }}>
      <Deco name="brush-rule" height={10} color="currentColor" />{children}
    </span>
  );
}

function EpisodePill({ children, data, style = {} }) {
  return (
    <span
      style={{
        backdropFilter: 'blur(14px)',
        background: 'rgba(20,18,20,0.9)',
        border: `2px solid ${data.accent}`,
        borderRadius: 999,
        boxShadow: '0 18px 42px rgba(0,0,0,0.46), 0 0 24px rgba(126,68,180,0.2)',
        color: data.accentSoft,
        fontFamily: 'var(--font-meta)',
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: '0.16em',
        padding: '8px 20px',
        textTransform: 'uppercase',
        WebkitBackdropFilter: 'blur(14px)',
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function PodcastCover({ data }) {
  return (
    <Template data={data} width={1080} height={1080}>
      <Texture kind="grain" opacity={0.8} />
      <Texture
        kind="arcs"
        opacity={0.5}
        scale={1.4}
        style={{
          maskImage: 'radial-gradient(circle at center, transparent 38%, #000 78%)',
          WebkitMaskImage: 'radial-gradient(circle at center, transparent 38%, #000 78%)',
        }}
      />
      {data.secondaryImage && (
        <div style={{ position: 'absolute', right: 0, bottom: 0, width: 410, height: 410, opacity: 0.94 }}>
          <div style={{ position: 'absolute', inset: '20% -8% 0 8%', background: `radial-gradient(ellipse at center, rgba(126,68,180,0.22), transparent 68%)`, filter: 'blur(16px)' }} />
          <img src={data.secondaryImage} style={{ position: 'absolute', right: 0, bottom: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom right', filter: 'saturate(0.92) contrast(1.04)' }} alt="" />
        </div>
      )}
      <TwoColorLogo primary={data.logoPrimary} secondary={data.logoSecondary} style={{ width: 740, maxWidth: '76%', position: 'absolute', left: '50%', top: 82, transform: 'translateX(-50%)', zIndex: 2 }} />
      <div style={{ position: 'absolute', left: 88, bottom: 150, zIndex: 3 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, position: 'relative' }}>
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, letterSpacing: '0.28em', textTransform: 'uppercase', color: data.textBody, whiteSpace: 'nowrap' }}>{data.host}</span>
        </div>
        <Deco name="brush-rule" height={14} color={data.accent} opacity={0.9} style={{ marginTop: 18 }} />
        <p style={{ marginTop: 20, fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 35, lineHeight: 1.05, color: data.textMuted, position: 'relative', whiteSpace: 'nowrap' }}>{data.tagline}</p>
      </div>
    </Template>
  );
}

function EpisodeCover({ data }) {
  if (data.orientation === 'landscape') {
    return (
      <Template data={data} width={1080} height={1080} className="flex flex-col" style={{ background: data.bg }}>
        <div style={{ height: 486, position: 'relative' }}>
          <Photo data={data} label="Guest Photo - Landscape" treatment="plum" />
          <Texture kind="ticks" opacity={0.5} blend="overlay" />
          <EpisodePill data={data} style={{ position: 'absolute', top: 44, right: 44 }}>{formatEpisodeBadge(data)}</EpisodePill>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 60%, ${data.bg} 100%)` }} />
          <LogoAvatar data={data} style={{ bottom: -88, left: 64, position: 'absolute', zIndex: 2 }} />
        </div>
        <div style={{ flex: 1, padding: '78px 64px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
          <Texture kind="arcs" opacity={0.4} />
          <div style={{ position: 'relative' }}>
            <div style={{ height: 18, marginBottom: 18 }} />
            <h1 style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 74, lineHeight: 1.08, color: data.textStrong, margin: '0 0 22px' }}>{data.title}</h1>
            <Deco name="brush-rule" height={16} color={data.accent} style={{ marginBottom: 22 }} />
            <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 34, color: data.accentSoft, margin: 0 }}>{data.guest}</p>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 25, lineHeight: 1.5, color: data.textMuted, margin: 0, maxWidth: '94%', position: 'relative' }}>{data.description}</p>
        </div>
      </Template>
    );
  }

  return (
    <Template data={data} width={1080} height={1080} className="flex">
      <div style={{ width: '46%', position: 'relative' }}>
        <Photo data={data} label="Guest Photo - Vertical" treatment="plum" />
        <Texture kind="ticks" opacity={0.5} blend="overlay" />
      </div>
      <div style={{ flex: 1, padding: '72px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
        <Texture kind="arcs" opacity={0.45} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <TwoColorLogo primary={data.logoPrimary} secondary={data.logoSecondary} style={{ width: 160, opacity: 0.9 }} />
          <EpisodePill data={data}>{formatEpisodeBadge(data)}</EpisodePill>
        </div>
        <div>
          <h1 style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 78, lineHeight: 1.08, color: data.textStrong, margin: '0 0 22px' }}>{data.title}</h1>
          <Deco name="brush-rule" height={16} color={data.accent} style={{ marginBottom: 24 }} />
          <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 36, color: data.accentSoft, margin: 0 }}>{data.guest}</p>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 26, lineHeight: 1.5, color: data.textMuted, margin: 0, maxWidth: '90%', position: 'relative' }}>{data.description}</p>
      </div>
    </Template>
  );
}

function GuestAnnouncement({ data }) {
  if (data.orientation === 'landscape') {
    return (
      <Template data={data} width={1080} height={1080} className="flex flex-col" style={{ background: data.bg }}>
        <div style={{ height: 632, position: 'relative' }}>
          <Photo data={data} label="Guest Photo - Landscape" treatment="plum" />
          <Texture kind="ticks" opacity={0.4} blend="overlay" />
          <KickerPill data={data} style={{ position: 'absolute', top: 56, right: 56 }}>{data.kicker}</KickerPill>
          <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: -1, background: `linear-gradient(to bottom, transparent 64%, ${data.bg} 100%)` }} />
          <LogoAvatar data={data} style={{ bottom: -88, left: 64, position: 'absolute', zIndex: 2 }} />
        </div>
        <div style={{ flex: 1, padding: '78px 64px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          <Texture kind="grain" opacity={0.7} />
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentSoft }}>{data.label}</span>
              <Deco name="tick-strip" height={18} color={data.accentWarm} opacity={0.8} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 92, lineHeight: 0.98, color: data.textStrong, margin: '0 0 18px' }}>{data.guest}</h1>
            <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 34, color: data.textBody, margin: 0 }}>{data.description}</p>
          </div>
        </div>
      </Template>
    );
  }

  return (
    <Template data={data} width={1080} height={1080}>
      <Photo data={data} label="Guest Photo - Vertical" treatment="plum" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,18,20,0.96) 18%, rgba(20,18,20,0.2) 55%, rgba(20,18,20,0.55) 100%)' }} />
      <KickerPill data={data} style={{ position: 'absolute', top: 56, right: 56 }}>{data.kicker}</KickerPill>
      <div style={{ position: 'absolute', left: 64, right: 64, bottom: 72 }}>
        <LogoAvatar data={data} style={{ marginBottom: 30 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentSoft }}>{data.label}</span>
          <Deco name="tick-strip" height={18} color={data.accentWarm} opacity={0.8} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 96, lineHeight: 0.98, color: data.textStrong, margin: '14px 0 18px' }}>{data.guest}</h1>
        <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 36, color: data.textBody, margin: 0 }}>{data.description}</p>
      </div>
    </Template>
  );
}

function QuoteCard({ data }) {
  return (
    <Template data={data} width={1080} height={1080} className="flex flex-col justify-center" style={{ padding: 96 }}>
      <Texture kind="grain" opacity={0.85} />
      <Deco name="sound-bars" height={120} color={data.accent} opacity={0.25} style={{ position: 'absolute', bottom: 76, left: 96 }} />
      <div style={{ position: 'relative' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 200, lineHeight: 0.6, color: data.accent, display: 'block', height: 110 }}>&ldquo;</span>
        <blockquote style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 64, lineHeight: 1.28, color: data.textStrong, margin: '0 0 32px' }}>{data.quote}</blockquote>
        <Deco name="brush-rule" height={18} color={data.accent} style={{ marginBottom: 40 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <span style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 8, height: 34, borderRadius: 4, background: data.accent }} />
            <span style={{ width: 8, height: 34, borderRadius: 4, background: data.accent }} />
          </span>
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, color: data.textBody }}>{data.author} · <span style={{ color: data.textMuted }}>{data.meta}</span></span>
        </div>
      </div>
      <TwoColorLogo primary={data.logoColor} secondary={data.accent} style={{ position: 'absolute', top: 64, right: 96, width: 180, opacity: 0.9 }} />
    </Template>
  );
}

function PausePrompt({ data }) {
  return (
    <Template data={data} width={1080} height={1080} className="flex flex-col items-center justify-center text-center" style={{ padding: 110 }}>
      <Texture kind="arcs" opacity={0.6} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TwoColorLogo primary={data.logoPrimary} secondary={data.logoSecondary} style={{ width: 240, opacity: 0.92 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, margin: '40px 0 30px' }}>
          <Deco name="tick-strip" height={16} color={data.accentWarm} opacity={0.7} />
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: data.accentWarm }}>{data.kicker}</span>
          <Deco name="tick-strip" height={16} color={data.accentWarm} opacity={0.7} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 70, lineHeight: 1.22, color: data.textStrong, margin: 0, maxWidth: 860 }}>{data.prompt}</h1>
        <Deco name="bars-divider" height={26} color={data.logoSecondary} opacity={0.7} style={{ marginTop: 64 }} />
      </div>
    </Template>
  );
}

function NewEpisodeLive({ data }) {
  return (
    <Template data={data} width={1080} height={1080} className="flex flex-col justify-between" style={{ padding: 80 }}>
      <Texture kind="ticks" opacity={0.6} />
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <TwoColorLogo primary={data.logoPrimary} secondary={data.logoSecondary} style={{ width: 200 }} />
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: palette.ink900, background: data.accentWarm, borderRadius: 999, padding: '12px 26px' }}>{data.badge}</span>
      </div>
      <div style={{ position: 'relative' }}>
        <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentSoft }}>{data.meta}</span>
        <h1 style={{ whiteSpace: 'pre-line', fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 92, lineHeight: 1.06, color: data.textStrong, margin: '24px 0 22px' }}>{data.title}</h1>
        <Deco name="brush-rule" height={18} color={data.accent} />
      </div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 28 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 96, height: 96, borderRadius: '50%', background: data.accent, color: data.textStrong, fontSize: 40, paddingLeft: 8 }}>▶</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 28, color: data.textMuted }}>{data.cta}</span>
        <Deco name="sound-bars" height={56} color={data.accentSoft} opacity={0.7} style={{ marginLeft: 'auto' }} />
      </div>
    </Template>
  );
}

function Audiogram({ data }) {
  const bars = [22, 40, 64, 88, 56, 30, 70, 96, 48, 26, 60, 84, 40, 72, 30, 52, 88, 36];
  return (
    <Template data={data} width={1080} height={1080} className="flex flex-col justify-between" style={{ padding: 80 }}>
      <Texture kind="grain" opacity={0.8} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <TwoColorLogo primary={data.logoPrimary} secondary={data.logoSecondary} style={{ width: 150, opacity: 0.9 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Deco name="tick-strip" height={16} color={data.accentWarm} opacity={0.7} />
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: data.accentSoft }}>{data.meta}</span>
        </div>
      </div>
      <blockquote style={{ fontFamily: 'var(--font-editorial)', fontWeight: 500, fontSize: 56, lineHeight: 1.3, color: data.textStrong, margin: 0, position: 'relative' }}>&ldquo;{data.quote}&rdquo;</blockquote>
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 9, height: 120, marginBottom: 28 }}>
          {bars.map((height, index) => <span key={index} style={{ flex: 1, height: `${height}%`, background: index % 3 === 0 ? data.accent : data.accentSoft, borderRadius: 6 }} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 24, color: data.textMuted }}>{data.guest}</span>
        </div>
      </div>
    </Template>
  );
}

function YouTubeThumbnail({ data }) {
  if (data.orientation === 'landscape') {
    return (
      <Template data={data} width={1280} height={720} style={{ background: data.bg }}>
        <Photo data={data} label="Guest Photo - Landscape" treatment="plum" />
        <Texture kind="ticks" opacity={0.35} blend="overlay" />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${data.bg} 30%, rgba(18,16,20,0.45) 62%, transparent 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '66%' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentSoft }}>
            <PauseBars height={30} color={data.accent} /> {data.meta}
          </span>
          <h1 style={{ whiteSpace: 'pre-line', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 86, lineHeight: 0.98, color: data.textStrong, margin: '24px 0 26px' }}>{data.title}</h1>
          <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 36, color: data.accentSoft, margin: 0 }}>{data.guest}</p>
          <TwoColorLogo primary={data.logoPrimary} secondary={data.logoSecondary} style={{ width: 150, marginTop: 44, opacity: 0.85 }} />
        </div>
      </Template>
    );
  }

  return (
    <Template data={data} width={1280} height={720} className="flex">
      <div style={{ flex: 1, padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
        <Texture kind="grain" opacity={0.7} />
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-meta)', fontSize: 22, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentSoft }}>
          <PauseBars height={30} color={data.accent} /> {data.meta}
        </span>
        <h1 style={{ whiteSpace: 'pre-line', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 88, lineHeight: 0.98, color: data.textStrong, margin: '24px 0 26px' }}>{data.title}</h1>
        <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 38, color: data.accentSoft, margin: 0 }}>{data.guest}</p>
        <TwoColorLogo primary={data.logoPrimary} secondary={data.logoSecondary} style={{ width: 150, marginTop: 48, opacity: 0.85, position: 'relative' }} />
      </div>
      <div style={{ width: 460, position: 'relative' }}>
        <Photo data={data} label="Guest Photo - Vertical" treatment="plum" />
        <Texture kind="ticks" opacity={0.4} blend="overlay" />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${data.bg} 0%, transparent 28%)` }} />
      </div>
    </Template>
  );
}

function InstagramStory({ data }) {
  if (data.orientation === 'landscape') {
    return (
      <Template data={data} width={1080} height={1920} className="flex flex-col" style={{ background: data.bg }}>
        <Texture kind="arcs" opacity={0.5} />
        <div style={{ padding: '90px 72px 0', textAlign: 'center', position: 'relative' }}>
          <TwoColorLogo primary={data.logoPrimary} secondary={data.logoSecondary} style={{ width: 220, margin: '0 auto' }} />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
            <Deco name="tick-strip" height={20} color={data.accentWarm} opacity={0.8} />
          </div>
        </div>
        <div style={{ margin: '76px 72px 0', height: 620, borderRadius: 36, overflow: 'hidden', position: 'relative' }}>
          <Photo data={data} label="Guest Photo - Landscape" treatment="plum" />
          <Texture kind="ticks" opacity={0.35} blend="overlay" />
        </div>
        <div style={{ padding: '64px 72px 0', position: 'relative', flex: 1 }}>
          <span style={{ fontFamily: 'var(--font-meta)', fontSize: 26, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: data.accentWarm }}>{data.kicker}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 104, lineHeight: 0.96, color: data.textStrong, margin: '16px 0 24px' }}>{data.guest}</h1>
          <Deco name="brush-rule" height={18} color={data.accent} />
          <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 38, color: data.textBody, margin: '26px 0 0' }}>{data.description}</p>
        </div>
        <div style={{ padding: '0 72px 110px', textAlign: 'center', position: 'relative' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 18, fontFamily: 'var(--font-meta)', fontSize: 30, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: palette.ink900, background: data.accentWarm, borderRadius: 999, padding: '22px 48px' }}>{data.cta}</span>
        </div>
      </Template>
    );
  }

  return (
    <Template data={data} width={1080} height={1920} className="flex flex-col" style={{ background: data.bg }}>
      <Texture kind="arcs" opacity={0.5} />
      <div style={{ padding: '90px 72px 0', textAlign: 'center', position: 'relative' }}>
        <TwoColorLogo primary={data.logoPrimary} secondary={data.logoSecondary} style={{ width: 220, margin: '0 auto' }} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
          <Deco name="tick-strip" height={20} color={data.accentWarm} opacity={0.8} />
        </div>
      </div>
      <div style={{ flex: 1, margin: '70px 72px', borderRadius: 36, overflow: 'hidden', position: 'relative' }}>
        <Photo data={data} label="Guest Photo - Vertical" treatment="plum" />
        <Texture kind="ticks" opacity={0.35} blend="overlay" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(24,18,31,0.95) 12%, transparent 55%)' }} />
        <div style={{ position: 'absolute', left: 56, right: 56, bottom: 64 }}>
          <KickerPill data={data} style={{ fontSize: 24 }}>{data.kicker}</KickerPill>
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
  const colorGroups = [
    {
      title: 'Brand Core',
      note: 'The three anchors: black, purple, ivory',
      colors: [
        ['Near Black', palette.ink800, '--ink-800'],
        ['Pause Purple', palette.plum500, '--plum-500'],
        ['Ivory', palette.ivory50, '--ivory-50'],
      ],
    },
    {
      title: 'Dark Surfaces',
      note: 'Layered near-black and plum surfaces',
      colors: [
        ['Bg Deep', palette.ink900, '--bg-deep'],
        ['Bg Base', palette.ink800, '--bg-base'],
        ['Surface 1', palette.ink700, '--surface-1'],
        ['Surface 2', palette.plum900, '--surface-2'],
        ['Raised', '#2c2730', '--surface-raised'],
      ],
    },
    {
      title: 'Purple Scale',
      note: 'Grounded, muted violets, never neon',
      colors: [
        ['Purple-Black', palette.plum950, '--plum-950'],
        ['Deep Purple', palette.plum700, '--plum-700'],
        ['Pause Purple', palette.plum500, '--plum-500'],
        ['Muted Lavender', palette.plum300, '--plum-300'],
        ['Lavender Mist', palette.plum200, '--plum-200'],
      ],
    },
    {
      title: 'Warm Neutrals & Amber',
      note: 'Ivory, paper, tan, clay, and the amber accent',
      colors: [
        ['Ivory', palette.ivory50, '--ivory-50'],
        ['Warm Paper', palette.ivory100, '--ivory-100'],
        ['Warm Tan', palette.tan300, '--tan-300'],
        ['Clay', palette.tan500, '--tan-500'],
        ['Amber', palette.amber500, '--amber-500'],
      ],
    },
  ];

  const typeRows = [
    ['Display XL', 'Averia Sans Libre Bold', '88px / 1.04', 'Big PAUSE titles and hero lockup moments', 'font-display text-[88px] leading-[1.04] font-bold'],
    ['Display L', 'Averia Sans Libre Bold', '64px / 1.04', 'Social title alternatives and short poster headlines', 'font-display text-[64px] leading-[1.04] font-bold'],
    ['Editorial Quote', 'Newsreader Medium', '64px / 1.28', 'Pull quotes and reflective lines', 'font-editorial text-[64px] leading-[1.28] font-medium'],
    ['Episode Title', 'Newsreader Medium', '36px / 1.28', 'Episode names in cards and editorial sections', 'font-editorial text-4xl leading-[1.28] font-medium'],
    ['Body Large', 'Hanken Grotesk Regular', '18px / 1.62', 'Descriptions, notes, supporting content', 'font-body text-lg leading-[1.62]'],
    ['Label', 'Hanken Grotesk Semibold', '11px / 1.18 / 0.18em', 'Kickers, badges, metadata', 'font-body text-[11px] uppercase tracking-[0.18em] font-semibold'],
  ];

  const logos = [
    ['Primary', 'pause-logo-primary.svg', 'Light / ivory backgrounds', 'light'],
    ['Dark Background', 'pause-logo-darkbg.svg', 'Near-black and plum backgrounds', 'dark'],
    ['Ivory', 'pause-logo-ivory.svg', 'Mono on dark surfaces', 'dark'],
    ['Purple', 'pause-logo-purple.svg', 'Tonal single-color layouts', 'light'],
    ['Black', 'pause-logo-black.svg', 'Print and ivory surfaces', 'light'],
    ['Mono', 'pause-logo-mono.svg', 'Single-color outline variant', 'dark'],
    ['Mark', 'pause-mark.svg', 'Logo-derived handmade mark for dark branded surfaces', 'dark'],
    ['Mark Purple', 'pause-mark-purple.svg', 'Logo-derived purple mark for light surfaces', 'light'],
    ['Pause Bars', 'pause-bars.svg', 'Bullets, dividers, audio UI', 'light'],
    ['Clock Arc', 'clock-arc.svg', 'Time motif, section accent', 'light'],
  ];

  const textures = [
    ['Paper Grain', 'grain-dots.svg', '80px', 'Dot background used on main cover, quote card, and documentation examples'],
    ['Tick Field', 'tick-field.svg', '80px', 'Quiet rhythmic texture for live post, audiogram, and photo-led layouts'],
    ['Arc Scallops', 'arc-scallops.svg', '90px', 'Clock/time motif for prompt and reflection systems'],
    ['Pause-Bar Weave', 'pause-bar-weave.svg', '84px', 'Dense pause-bar field for restrained branded surfaces'],
  ];

  const decorations = [
    ['Brush Rule', 'brush-rule.svg'],
    ['Tick Strip', 'tick-strip.svg'],
    ['Sound Bars', 'sound-bars.svg'],
    ['Bars Divider', 'bars-divider.svg'],
  ];

  const templatePatterns = [
    ['Main Podcast Cover', 'grain-dots.svg, arc-scallops.svg, brush-rule.svg, pause-logo-darkbg.svg, PNG cutout image', 'Primary square brand cover with dominant logo, hosted-by line, brush divider, editorial tagline, secondary PNG cutout image, and radial-masked arc texture.'],
    ['Quote Card', 'grain-dots.svg, brush-rule.svg, sound-bars.svg, pause-logo-ivory.svg', 'Editorial quote stack with larger top-right two-color logo, purple quote mark, brush underline, author/meta row, and bottom-left audio bars.'],
    ['New Episode Is Live', 'tick-field.svg, brush-rule.svg, sound-bars.svg, pause-logo-ivory.svg', 'Launch announcement with top logo/badge, editorial title, brush underline, circular play control, CTA copy, and right-aligned sound bars.'],
    ['Pause Prompt', 'arc-scallops.svg, tick-strip.svg, bars-divider.svg, pause-logo-ivory.svg', 'Centered inward-question template with scallop texture, full two-color logo, mirrored tick strips, and bottom pause divider.'],
    ['Audiogram Cover', 'grain-dots.svg, tick-strip.svg, pause-logo-ivory.svg', 'Audio quote card with top full logo/meta row, editorial pull quote, waveform bars, and speaker name.'],
    ['Episode Cover', 'tick-field.svg, arc-scallops.svg, brush-rule.svg, pause-logo-ivory.svg', 'Supports vertical and horizontal image orientations with protected photo areas, full logo header, right-aligned season marker, and editorial episode copy.'],
    ['Guest Announcement', 'tick-field.svg, grain-dots.svg, tick-strip.svg, inline Pause mark', 'Supports vertical and horizontal guest imagery with dark overlay protection and guest metadata lockup.'],
    ['YouTube Thumbnail', 'grain-dots.svg, tick-field.svg, pause-logo-ivory.svg', '16:9 layout with separate vertical-photo and horizontal-photo variants, large display headline, and logo identity row.'],
    ['Instagram Story', 'arc-scallops.svg, tick-field.svg, tick-strip.svg, brush-rule.svg, pause-logo-ivory.svg', '9:16 story system with centered two-color logo header, photo frame, guest text, and amber CTA pill.'],
  ];

  return (
    <main className="mx-auto max-w-[1400px] px-5 py-8 lg:px-8">
      <section className="mb-8 rounded-lg bg-ink-900 px-7 py-8 text-ivory-50 shadow-matte">
        <img src={`${LOGO}pause-logo-darkbg.svg`} className="mb-8 w-72 max-w-full" alt="Pause for a Minute" />
        <p className="max-w-3xl font-editorial text-4xl leading-tight">A warm, analog, late-night studio system for podcast covers, social posts, audiograms, stories, and thumbnails.</p>
      </section>

      <div className="grid gap-6">
        <section className="style-section style-section-dark">
          <h2>Buttons</h2>
          <div className="component-row">
            <button className="sg-button sg-button-primary">Listen now</button>
            <button className="sg-button sg-button-secondary">Browse episodes</button>
            <button className="sg-button sg-button-link">Pause</button>
            <button className="sg-button sg-button-warm">Subscribe</button>
            <button className="sg-button sg-button-small">Small</button>
            <button className="sg-button sg-button-disabled" disabled>Disabled</button>
          </div>
          <h3>Badges & Tags</h3>
          <div className="component-row">
            <span className="sg-tag sg-tag-outline-purple">Episode 47</span>
            <span className="sg-tag sg-tag-warm">New</span>
            <span className="sg-tag sg-tag-outline">Season 3</span>
            <span className="sg-tag sg-tag-outline">Discipline</span>
            <span className="sg-tag sg-tag-solid">Jazz</span>
            <span className="sg-tag sg-tag-outline">Failure</span>
          </div>
          <h3>Kickers & Divider</h3>
          <div className="component-row">
            <span className="sg-kicker"><i />New episode · every Tuesday</span>
            <span className="sg-kicker sg-kicker-warm"><i />Pause prompt</span>
            <span className="sg-bars-divider"><span /><img src={`${DECORATION}bars-divider.svg`} alt="" /><span /></span>
          </div>
          <h3>Avatars, Icon Buttons & Mark</h3>
          <div className="component-row">
            <span className="sg-avatar sg-avatar-ring">BC</span>
            <span className="sg-avatar">MO</span>
            <button className="sg-icon sg-icon-primary">▶</button>
            <button className="sg-icon sg-icon-quiet">"</button>
            <button className="sg-icon sg-icon-outline">↗</button>
            <img src={`${LOGO}pause-mark.svg`} className="h-14" alt="" />
          </div>
          <h3>Input + Card</h3>
          <div className="sg-input-row"><span>your@email.com</span><b>...</b></div>
          <div className="sg-card-sample">
            <span className="sg-card-notch" />
            <p>— Episode 47 · Season 3</p>
            <strong>The Discipline Behind the Drift</strong>
            <span>with Maya Okonkwo — on craft, doubt, and showing up anyway.</span>
          </div>
        </section>

        <section className="style-section">
          <h2>Colors</h2>
          <div className="grid gap-5">
            {colorGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-3">
                  <h3 className="!mb-1 !text-base">{group.title}</h3>
                  <p className="text-sm text-ink-800/60">{group.note}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {group.colors.map(([name, color, token]) => (
                    <div key={token} className="color-card">
                      <div className="color-swatch" style={{ background: color }} />
                      <p>{name}</p>
                      <span>{color}</span>
                      <code>{token}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-on-dark">
              <p><strong>Strong — headlines & PAUSE</strong> <code>--text-strong #f4eee2</code></p>
              <p><span>Body — warm paragraph tone</span> <code>--text-body #ddd3c4</code></p>
              <p><em>Muted — captions, metadata, timestamps</em> <code>--text-muted #9a9088</code></p>
              <p><small>Faint — disabled, hairline labels</small> <code>--text-faint #6a635d</code></p>
            </div>
          </div>
        </section>

        <section className="style-section">
          <h2>Typography</h2>
          <div className="grid gap-4">
            {typeRows.map(([role, family, spec, use, classes]) => (
              <div key={role} className="type-row">
                <div>
                  <p className="guide-label">{role}</p>
                  <p className={classes}>Pause for a Minute</p>
                </div>
                <div>
                  <p><strong>{family}</strong></p>
                  <p>{spec}</p>
                  <p>{use}</p>
                </div>
              </div>
            ))}
            <div className="type-note">
              <p className="font-display text-3xl font-bold">Averia Sans Libre: display, logo-adjacent headlines, large social titles.</p>
              <p className="font-editorial text-3xl italic">Newsreader: quote cards, episode names, italic guest lines, reflective editorial voice.</p>
              <p className="font-body text-lg">Hanken Grotesk: controls, metadata, labels, helper copy, and readable UI text.</p>
            </div>
          </div>
        </section>

        <section className="style-section">
          <h2>Logo System</h2>
          <div className="logo-grid">
            {logos.map(([name, file, use, mode]) => (
              <div key={file} className={`logo-card ${mode === 'dark' ? 'logo-card-dark' : ''}`}>
                <div><img src={`${LOGO}${file}`} alt="" /></div>
                <p>{name}</p>
                <span>{file}</span>
                <small>{use}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="style-section style-section-dark">
          <h2>Texture</h2>
          <p className="mb-5 text-ivory-50/65">Foreground motifs recolor through their SVG source and are used sparingly as layout rhythm.</p>
          <div className="decoration-grid">
            {decorations.map(([name, file]) => (
              <div key={file}>
                <img src={`${DECORATION}${file}`} alt="" />
                <p>{name}</p>
                <span>{file}</span>
              </div>
            ))}
          </div>
          <div className="texture-example">
            <TextureLayer type="grain-dots.svg" opacity={0.14} size={80} />
            <img src={`${DECORATION}tick-strip.svg`} className="texture-ticks" alt="" />
            <p>Episode 47 · Season 3</p>
            <h3>Some of the best things came right after I stopped trying so hard.</h3>
            <img src={`${DECORATION}brush-rule.svg`} className="texture-brush" alt="" />
            <img src={`${DECORATION}sound-bars.svg`} className="texture-bars" alt="" />
          </div>
        </section>

        <section className="style-section style-section-dark">
          <h2>Seamless Textures</h2>
          <p className="mb-5 text-ivory-50/65">Tileable SVGs for dark canvases. Use one layer per surface at low opacity.</p>
          <div className="texture-grid">
            {textures.map(([name, file, size, use]) => (
              <div key={file}>
                <div className="texture-swatch" style={{ backgroundImage: `url("${TEXTURE}${file}")`, backgroundSize: size }} />
                <p>{name}</p>
                <span>{file} · {size}</span>
                <small>{use}</small>
              </div>
            ))}
          </div>
          <div className="dot-pattern-doc">
            <strong>Dot background pattern</strong>
            <span>`grain-dots.svg`, tiled at 80px, baked ivory at very low opacity. Used on Main Cover, Quote Card, and documentation examples; the photo placeholder still uses a smaller inline dot grain for portrait areas.</span>
          </div>
        </section>

        <section className="style-section">
          <h2>Template Pattern Map</h2>
          <p className="mb-5 text-base leading-7 text-ink-800/65">Reference for which reusable assets and motifs belong to each coded template. Keep this updated whenever a template gains a new texture, decoration, logo, or layout pattern.</p>
          <div className="grid gap-4">
            {templatePatterns.map(([name, assets, guidance]) => (
              <div key={name} className="rounded-lg border border-ink-800/10 bg-ivory-50 p-4">
                <p className="font-display text-xl font-bold text-ink-900">{name}</p>
                <p className="mt-2 font-body text-sm font-bold uppercase tracking-[0.14em] text-plum-700">Assets</p>
                <p className="mt-1 font-body text-sm leading-6 text-ink-800/70">{assets}</p>
                <p className="mt-2 font-body text-sm leading-6 text-ink-800/70">{guidance}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="style-section">
          <h2>Template Rules</h2>
          <div className="grid gap-3 text-base leading-7 text-ink-800/75">
            <p>Use one focal point, generous margins, and a single warm amber spark. Keep long copy left-aligned and ceremonial prompts centered.</p>
            <p>Uploaded portraits should feel natural, warm, honest, and slightly cinematic. The app adds dark protection overlays where type sits on photography.</p>
            <p>Export sizes: 1080 square, 1080 x 1920 story, and 1280 x 720 YouTube thumbnail. Keep type at least 64px from square edges and 120px from story bottom UI areas.</p>
            <p>Every template with a logo or mark exposes logo color controls so the identity can maintain contrast when backgrounds change. Color choices should stay inside the documented brand palette.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

function labelize(value) {
  return value.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase());
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function getPaletteOption(value) {
  return PALETTE_OPTIONS.find(([, color]) => color === value) || ['Custom', value];
}

function formatEpisodeBadge(data) {
  const seasonNumber = data.season.match(/\d+/)?.[0];
  const season = seasonNumber ? `S${seasonNumber}` : data.season;
  return `${season} - ${data.episode}`;
}

function getInitialValues() {
  try {
    const saved = sessionStorage.getItem('pause-builder-state');
    const parsed = saved ? JSON.parse(saved) : {};
    return Object.fromEntries(
      Object.entries(defaults).map(([id, templateDefaults]) => {
        const savedTemplate = { ...(parsed[id] || {}) };
        if (id === 'podcastCover') {
          if (savedTemplate.host === 'With Brandon Commodore') savedTemplate.host = MAIN_COVER_HOST;
          if (savedTemplate.host === 'Hosted by') savedTemplate.host = MAIN_COVER_HOST;
          if (savedTemplate.tagline === 'where introspection meets ambition') savedTemplate.tagline = MAIN_COVER_TAGLINE;
          if (savedTemplate.secondaryImage === undefined) savedTemplate.secondaryImage = MAIN_COVER_SECONDARY_IMAGE;
        }
        if (id === 'pausePrompt' && savedTemplate.kicker === 'Pause Prompt') {
          savedTemplate.kicker = 'Inner Question';
        }
        return [
          id,
          { ...templateDefaults, ...savedTemplate },
        ];
      }),
    );
  } catch (error) {
    console.warn('Builder state could not be loaded in this browser session.', error);
    return defaults;
  }
}

function getTemplateDescriptor(template, data = {}) {
  if (!template.orientation) return template.ratio;
  return `${template.ratio} · ${data.orientation === 'landscape' ? 'horizontal' : 'vertical'} image`;
}

function getColorFields(template, data) {
  if (Array.isArray(template.colorFields)) return template.colorFields;
  return template.colorFields[data.orientation === 'landscape' ? 'landscape' : 'portrait'];
}

createRoot(document.getElementById('root')).render(<App />);
