/* @ds-bundle: {"format":3,"namespace":"PauseForAMinuteDesignSystem_16ad29","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BrushDivider","sourcePath":"components/core/BrushDivider.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"PauseMark","sourcePath":"components/core/PauseMark.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"d5cd482e71f0","components/core/Badge.jsx":"d1f232af41ed","components/core/BrushDivider.jsx":"cadbbb7b98d8","components/core/Button.jsx":"f199500b620d","components/core/Card.jsx":"661bb3efb573","components/core/IconButton.jsx":"00b74c4b007d","components/core/Input.jsx":"f3f9fc750a84","components/core/Kicker.jsx":"8c2da5c36ec9","components/core/PauseMark.jsx":"b3d832754704","components/core/Tag.jsx":"b53fa8c023bf","ui_kits/templates/Covers.jsx":"c119e2ca884c","ui_kits/templates/Shared.jsx":"f160d5359ea1","ui_kits/templates/Social.jsx":"f9ed6438a5a4","ui_kits/templates/Wide.jsx":"d38369665eca"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PauseForAMinuteDesignSystem_16ad29 = window.PauseForAMinuteDesignSystem_16ad29 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * Avatar — circular host/guest portrait with an optional warm ring.
 * Falls back to initials on a muted plum field.
 */
function Avatar({
  src,
  name = '',
  size = 56,
  ring = true
}) {
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--plum-700)',
      color: 'var(--ivory-50)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.36,
      overflow: 'hidden',
      flex: '0 0 auto',
      border: ring ? '2px solid var(--accent-soft)' : 'none',
      boxShadow: ring ? '0 0 0 4px rgba(126,68,180,0.12)' : 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '·');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — compact status / metadata marker.
 * Episode numbers, "New", season tags, "Live".
 */
function Badge({
  children,
  tone = 'purple',
  solid = false
}) {
  const tones = {
    purple: {
      fg: 'var(--accent-soft)',
      bd: 'var(--accent-deep)',
      solidBg: 'var(--accent)',
      solidFg: 'var(--text-on-accent)'
    },
    amber: {
      fg: 'var(--accent-warm)',
      bd: 'rgba(207,138,62,0.5)',
      solidBg: 'var(--accent-warm)',
      solidFg: 'var(--ink-900)'
    },
    neutral: {
      fg: 'var(--text-muted)',
      bd: 'var(--line-strong)',
      solidBg: 'var(--surface-raised)',
      solidFg: 'var(--text-strong)'
    }
  };
  const t = tones[tone] || tones.purple;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-meta)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '4px 11px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? t.solidBg : 'transparent',
      color: solid ? t.solidFg : t.fg,
      border: solid ? '1.5px solid transparent' : `1.5px solid ${t.bd}`,
      lineHeight: 1.2,
      whiteSpace: 'nowrap'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BrushDivider.jsx
try { (() => {
/**
 * BrushDivider — a thin horizontal rule broken by a centered brand motif
 * (a small pause-bar pair or a dash), echoing the "— FOR A MINUTE —" rule
 * under the logo.
 */
function BrushDivider({
  motif = 'bars',
  tone = 'var(--line-strong)',
  accent = 'var(--accent)'
}) {
  const line = {
    flex: 1,
    height: '1.5px',
    background: tone,
    borderRadius: '2px'
  };
  let center;
  if (motif === 'bars') {
    center = /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '4px',
        height: '16px',
        borderRadius: '2px',
        background: accent
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '4px',
        height: '16px',
        borderRadius: '2px',
        background: accent
      }
    }));
  } else if (motif === 'dot') {
    center = /*#__PURE__*/React.createElement("span", {
      style: {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        background: accent
      }
    });
  } else {
    center = /*#__PURE__*/React.createElement("span", {
      style: {
        width: '26px',
        height: '2px',
        borderRadius: '2px',
        background: accent
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      width: '100%'
    },
    role: "separator"
  }, /*#__PURE__*/React.createElement("span", {
    style: line
  }), center, /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { BrushDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrushDivider.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action control for Pause for a Minute.
 * Rounded, warm, calm. Purple solid for primary, outline + ghost for the rest.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  as = 'button',
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '13px',
      gap: '7px',
      radius: 'var(--radius-pill)'
    },
    md: {
      padding: '12px 22px',
      fontSize: '15px',
      gap: '9px',
      radius: 'var(--radius-pill)'
    },
    lg: {
      padding: '16px 30px',
      fontSize: '17px',
      gap: '11px',
      radius: 'var(--radius-pill)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1.5px solid var(--accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--line-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent-soft)',
      border: '1.5px solid transparent'
    },
    warm: {
      background: 'var(--accent-warm)',
      color: 'var(--ink-900)',
      border: '1.5px solid var(--accent-warm)'
    }
  };
  const v = variants[variant] || variants.primary;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    fontSize: s.fontSize,
    letterSpacing: '0.01em',
    padding: s.padding,
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: full ? '100%' : 'auto',
    transition: 'background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft)',
    WebkitTapHighlightColor: 'transparent',
    ...v
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    disabled: as === 'button' ? disabled : undefined,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent)';
      if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-deep)';
      if (variant === 'ghost') e.currentTarget.style.background = 'rgba(126,68,180,0.12)';
      if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--accent-soft)';
      if (variant === 'warm') e.currentTarget.style.background = 'var(--amber-600)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — warm matte surface container. Optional accent top-edge and
 * the subtle paper feel of the brand. No glossy shadows.
 */
function Card({
  children,
  accent = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: 'var(--surface-2)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 'var(--space-6)',
      width: '44px',
      height: '4px',
      background: 'var(--accent)',
      borderRadius: '0 0 4px 4px'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — circular control for play/pause/share and other single-glyph
 * actions. Solid purple for the primary play action; soft for the rest.
 */
function IconButton({
  children,
  label,
  variant = 'soft',
  size = 48,
  onClick,
  ...rest
}) {
  const variants = {
    solid: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1.5px solid var(--accent)'
    },
    soft: {
      background: 'rgba(126,68,180,0.12)',
      color: 'var(--accent-soft)',
      border: '1.5px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--line-strong)'
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-soft), background var(--dur-fast) var(--ease-soft)',
      WebkitTapHighlightColor: 'transparent',
      ...v
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.93)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text/email field. Warm, rounded, calm focus ring.
 * Used in subscribe forms and search.
 */
function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  size = 'md',
  full = true,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 14px',
      fontSize: '14px'
    },
    md: {
      padding: '13px 18px',
      fontSize: '15px'
    },
    lg: {
      padding: '16px 20px',
      fontSize: '16px'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      width: full ? '100%' : 'auto',
      fontFamily: 'var(--font-ui)',
      color: 'var(--text-strong)',
      background: 'var(--surface-1)',
      border: '1.5px solid var(--line-strong)',
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)',
      ...s
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--accent-soft)';
      e.currentTarget.style.boxShadow = '0 0 0 4px rgba(126,68,180,0.14)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--line-strong)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
/**
 * Kicker — uppercase eyebrow label, often paired with a short tick/dash motif
 * echoing the clock arc. Sits above titles.
 */
function Kicker({
  children,
  tone = 'purple',
  dash = true
}) {
  const colors = {
    purple: 'var(--accent-soft)',
    amber: 'var(--accent-warm)',
    muted: 'var(--text-muted)',
    ivory: 'var(--text-strong)'
  };
  const c = colors[tone] || colors.purple;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-meta)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: c
    }
  }, dash && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '22px',
      height: '2px',
      background: 'currentColor',
      borderRadius: '2px',
      opacity: 0.7
    }
  }), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/PauseMark.jsx
try { (() => {
/**
 * PauseMark — the brand symbol (clock arc + ticks + pause bars) as an inline,
 * recolorable SVG. Use as an icon, a divider accent, or a quiet watermark.
 */
function PauseMark({
  size = 48,
  color = 'var(--text-strong)',
  accent = 'var(--accent)',
  arc = true
}) {
  const ticks = [];
  const cx = 100,
    cy = 110,
    r = 72,
    n = 9;
  for (let i = 0; i < n; i++) {
    const a = Math.PI + i / (n - 1) * Math.PI;
    const x1 = cx + Math.cos(a) * (r - 2),
      y1 = cy + Math.sin(a) * (r - 2);
    const x2 = cx + Math.cos(a) * (r - 13),
      y2 = cy + Math.sin(a) * (r - 13);
    ticks.push(/*#__PURE__*/React.createElement("line", {
      key: i,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      stroke: color,
      strokeWidth: "4",
      strokeLinecap: "round"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size * (130 / 200),
    viewBox: "0 0 200 130",
    role: "img",
    "aria-label": "Pause for a Minute mark",
    style: {
      display: 'inline-block'
    }
  }, arc && /*#__PURE__*/React.createElement("path", {
    d: `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`,
    fill: "none",
    stroke: color,
    strokeWidth: "7",
    strokeLinecap: "round"
  }), arc && ticks, /*#__PURE__*/React.createElement("rect", {
    x: cx - 15,
    y: cy - 44,
    width: "11",
    height: "40",
    rx: "5.5",
    fill: accent
  }), /*#__PURE__*/React.createElement("rect", {
    x: cx + 4,
    y: cy - 44,
    width: "11",
    height: "40",
    rx: "5.5",
    fill: accent
  }));
}
Object.assign(__ds_scope, { PauseMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PauseMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — topic chip for themes (Discipline, Jazz, Failure, Craft…).
 * Quiet outline by default; fills on the `active` state.
 */
function Tag({
  children,
  active = false,
  onClick
}) {
  const interactive = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-meta)',
      fontSize: '13px',
      fontWeight: 500,
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      color: active ? 'var(--text-on-accent)' : 'var(--text-body)',
      background: active ? 'var(--accent-deep)' : 'transparent',
      border: `1.5px solid ${active ? 'var(--accent-deep)' : 'var(--line-strong)'}`,
      transition: 'background var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft)',
      whiteSpace: 'nowrap'
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.borderColor = 'var(--accent-soft)';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.borderColor = 'var(--line-strong)';
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/templates/Covers.jsx
try { (() => {
/* Square (1:1) cover templates — 1080×1080 design, rendered at any size via scale. */

function PodcastCover() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--ink-800)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(244,238,226,0.04) 1.5px, transparent 1.5px)',
      backgroundSize: '7px 7px'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-logo-darkbg.svg",
    style: {
      width: 620,
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      height: 2,
      background: 'var(--accent-soft)',
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 26,
      letterSpacing: '0.34em',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, "With Brandon Commodore"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      height: 2,
      background: 'var(--accent-soft)',
      opacity: 0.6
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 30,
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 30,
      color: 'var(--text-muted)',
      position: 'relative'
    }
  }, "where introspection meets ambition"));
}
function EpisodeCover() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--plum-950)',
      position: 'relative',
      display: 'flex',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '46%',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Guest Portrait",
    treatment: "plum"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '72px 64px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-mark-purple.svg",
    style: {
      width: 92
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent-soft)',
      border: '2px solid var(--accent-deep)',
      borderRadius: 999,
      padding: '8px 20px'
    }
  }, "EP 47")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-meta)',
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent-warm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 2,
      background: 'currentColor'
    }
  }), "Season 3"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontWeight: 500,
      fontSize: 78,
      lineHeight: 1.08,
      color: 'var(--text-strong)',
      margin: '22px 0 28px'
    }
  }, "The Discipline Behind the Drift"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 36,
      color: 'var(--accent-soft)',
      margin: 0
    }
  }, "with Maya Okonkwo")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 26,
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: '90%'
    }
  }, "On craft, doubt, and the quiet work of showing up before the world is watching.")));
}
Object.assign(window, {
  PodcastCover,
  EpisodeCover
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/Covers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/templates/Shared.jsx
try { (() => {
/* Shared building blocks for Pause for a Minute templates.
   Photo placeholder uses a warm duotone plum treatment matching the
   photography direction (no generated imagery). */

function Photo({
  label = 'Portrait',
  radius = 0,
  treatment = 'plum',
  style = {}
}) {
  const treatments = {
    plum: 'linear-gradient(135deg, #2a1d38 0%, #4a2c63 60%, #1c1c1c 100%)',
    warm: 'linear-gradient(135deg, #2a2018 0%, #4a3826 55%, #1c1c1c 100%)',
    mono: 'linear-gradient(135deg, #2a2a2a 0%, #161616 100%)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: treatments[treatment] || treatments.plum,
      borderRadius: radius,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(244,238,226,0.06) 1px, transparent 1px)',
      backgroundSize: '4px 4px',
      opacity: 0.5,
      mixBlendMode: 'overlay'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: '11px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(244,238,226,0.4)'
    }
  }, label));
}
function ClockArc({
  width = 120,
  color = 'var(--accent-soft)'
}) {
  const cx = 100,
    cy = 80,
    r = 72,
    n = 9;
  const ticks = [];
  for (let i = 0; i < n; i++) {
    const a = Math.PI + i / (n - 1) * Math.PI;
    ticks.push(/*#__PURE__*/React.createElement("line", {
      key: i,
      x1: cx + Math.cos(a) * (r - 2),
      y1: cy + Math.sin(a) * (r - 2),
      x2: cx + Math.cos(a) * (r - 12),
      y2: cy + Math.sin(a) * (r - 12),
      stroke: color,
      strokeWidth: "3.5",
      strokeLinecap: "round",
      opacity: "0.85"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: width * 0.45,
    viewBox: "0 0 200 90"
  }, /*#__PURE__*/React.createElement("path", {
    d: `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`,
    fill: "none",
    stroke: color,
    strokeWidth: "6",
    strokeLinecap: "round"
  }), ticks);
}
Object.assign(window, {
  Photo,
  ClockArc
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/templates/Social.jsx
try { (() => {
/* Social templates — quote card, guest announcement, pause prompt, new episode (all 1080×1080). */

function QuoteCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--ink-800)',
      position: 'relative',
      padding: 96,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(244,238,226,0.035) 1.5px, transparent 1.5px)',
      backgroundSize: '7px 7px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 200,
      lineHeight: 0.6,
      color: 'var(--accent)',
      display: 'block',
      height: 110
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontWeight: 500,
      fontSize: 64,
      lineHeight: 1.28,
      color: 'var(--text-strong)',
      margin: '0 0 48px'
    }
  }, "Some of the best things I\u2019ve made came right after I stopped trying so hard."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 34,
      borderRadius: 4,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 34,
      borderRadius: 4,
      background: 'var(--accent)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 26,
      color: 'var(--text-body)'
    }
  }, "Maya Okonkwo \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Episode 47")))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-logo-ivory.svg",
    style: {
      position: 'absolute',
      bottom: 64,
      right: 96,
      width: 150,
      opacity: 0.9
    }
  }));
}
function GuestAnnouncement() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--ink-900)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Guest Portrait",
    treatment: "plum"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(20,18,20,0.96) 18%, rgba(20,18,20,0.2) 55%, rgba(20,18,20,0.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 56,
      left: 56,
      right: 56,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-mark.svg",
    style: {
      width: 84,
      color: 'var(--ivory-50)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent-warm)'
    }
  }, "This Week")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 64,
      right: 64,
      bottom: 72
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent-soft)'
    }
  }, "Guest"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 96,
      lineHeight: 0.98,
      color: 'var(--ivory-50)',
      margin: '14px 0 18px'
    }
  }, "Maya Okonkwo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 36,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Composer, bandleader & reluctant optimist")));
}
function PausePrompt() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--plum-950)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 110,
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ClockArc, {
    width: 260,
    color: "var(--accent-soft)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--accent-warm)',
      margin: '40px 0 30px'
    }
  }, "Pause Prompt"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontWeight: 500,
      fontSize: 70,
      lineHeight: 1.22,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "What are you still doing only because you started it?"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-logo-ivory.svg",
    style: {
      width: 130,
      marginTop: 64,
      opacity: 0.85
    }
  }));
}
function NewEpisodeLive() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--ink-800)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 80,
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(rgba(244,238,226,0.035) 1.5px, transparent 1.5px)',
      backgroundSize: '7px 7px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-logo-ivory.svg",
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      background: 'var(--accent-warm)',
      borderRadius: 999,
      padding: '12px 26px'
    }
  }, "New Episode")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent-soft)'
    }
  }, "Episode 47 \xB7 Out Now"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontWeight: 500,
      fontSize: 92,
      lineHeight: 1.06,
      color: 'var(--text-strong)',
      margin: '24px 0 0'
    }
  }, "The Discipline", /*#__PURE__*/React.createElement("br", null), "Behind the Drift")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 96,
      height: 96,
      borderRadius: '50%',
      background: 'var(--accent)',
      color: 'var(--ivory-50)',
      fontSize: 40,
      paddingLeft: 8
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 28,
      color: 'var(--text-muted)'
    }
  }, "Listen wherever you find your podcasts")));
}
Object.assign(window, {
  QuoteCard,
  GuestAnnouncement,
  PausePrompt,
  NewEpisodeLive
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/Social.jsx", error: String((e && e.message) || e) }); }

// ui_kits/templates/Wide.jsx
try { (() => {
/* Wide & vertical templates — YouTube thumbnail (16:9, 1280×720),
   Instagram story (9:16, 1080×1920), audiogram bar. */

function YouTubeThumbnail() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: 'var(--ink-900)',
      position: 'relative',
      display: 'flex',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '64px 56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-meta)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-bars.svg",
    style: {
      height: 30,
      color: 'var(--accent)'
    }
  }), " Episode 47"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 88,
      lineHeight: 0.98,
      color: 'var(--ivory-50)',
      margin: '24px 0 26px'
    }
  }, "The Discipline", /*#__PURE__*/React.createElement("br", null), "Behind the Drift"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 38,
      color: 'var(--accent-soft)',
      margin: 0
    }
  }, "with Maya Okonkwo"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-logo-ivory.svg",
    style: {
      width: 150,
      marginTop: 48,
      opacity: 0.85
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 460,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Guest Portrait",
    treatment: "plum"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, var(--ink-900) 0%, transparent 28%)'
    }
  })));
}
function InstagramStory() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1920,
      background: 'var(--plum-950)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '90px 72px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-logo-ivory.svg",
    style: {
      width: 220
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      margin: '70px 72px',
      borderRadius: 36,
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Guest Portrait",
    treatment: "plum"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(24,18,31,0.95) 12%, transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 56,
      right: 56,
      bottom: 64
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent-warm)'
    }
  }, "New Guest"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 96,
      lineHeight: 0.98,
      color: 'var(--ivory-50)',
      margin: '16px 0 0'
    }
  }, "Maya Okonkwo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 72px 110px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 18,
      fontFamily: 'var(--font-meta)',
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      background: 'var(--accent-warm)',
      borderRadius: 999,
      padding: '22px 48px'
    }
  }, "Swipe Up to Listen")));
}
function Audiogram() {
  const bars = [22, 40, 64, 88, 56, 30, 70, 96, 48, 26, 60, 84, 40, 72, 30, 52, 88, 36];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      background: 'var(--ink-800)',
      position: 'relative',
      padding: 80,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-mark.svg",
    style: {
      width: 80,
      color: 'var(--ivory-50)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent-soft)'
    }
  }, "Episode 47 \xB7 Clip")), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontWeight: 500,
      fontSize: 56,
      lineHeight: 1.3,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "\u201CYou don\u2019t find the time. You defend it.\u201D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 9,
      height: 120,
      marginBottom: 28
    }
  }, bars.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: `${h}%`,
      background: i % 3 === 0 ? 'var(--accent)' : 'var(--accent-deep)',
      borderRadius: 6
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-meta)',
      fontSize: 24,
      color: 'var(--text-muted)'
    }
  }, "Maya Okonkwo"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/pause-logo-ivory.svg",
    style: {
      width: 130,
      opacity: 0.85
    }
  }))));
}
Object.assign(window, {
  YouTubeThumbnail,
  InstagramStory,
  Audiogram
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/templates/Wide.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BrushDivider = __ds_scope.BrushDivider;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.PauseMark = __ds_scope.PauseMark;

__ds_ns.Tag = __ds_scope.Tag;

})();
