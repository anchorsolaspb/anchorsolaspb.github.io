/* @ds-bundle: {"format":4,"namespace":"AnchorSolasDesignSystem_897ee1","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RangeSlider","sourcePath":"components/forms/RangeSlider.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Button.jsx":"ff436588ad52","components/core/Icon.jsx":"e3e39081341d","components/core/IconButton.jsx":"21c83bf91648","components/core/Logo.jsx":"b88b7275777c","components/display/Badge.jsx":"2a39071ec996","components/display/Card.jsx":"677b07021d32","components/display/Tabs.jsx":"f125947cf486","components/display/Tag.jsx":"47c315ff16d5","components/feedback/Dialog.jsx":"ab09b28a9633","components/feedback/Toast.jsx":"091c74ae4ce5","components/feedback/Tooltip.jsx":"b0188e7afe87","components/forms/Checkbox.jsx":"a3636bd26ad4","components/forms/Input.jsx":"1905232c9b95","components/forms/Radio.jsx":"e3a7eeb5c5de","components/forms/RangeSlider.jsx":"532f9a842ff7","components/forms/Select.jsx":"43c6daa7ff15","components/forms/Switch.jsx":"44324ef5e1c9","ui_kits/website/AboutScreen.jsx":"d624bbba2537","ui_kits/website/BookScreen.jsx":"8957d21f0ca6","ui_kits/website/Chrome.jsx":"9ded0f5bb550","ui_kits/website/EventsScreen.jsx":"9c05c3567cb9","ui_kits/website/HomeScreen.jsx":"8df7d8ef638f","ui_kits/website/media.js":"0135bf5327b1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AnchorSolasDesignSystem_897ee1 = window.AnchorSolasDesignSystem_897ee1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pascal = s => s.replace(/(^|-)([a-z0-9])/g, (_, a, b) => b.toUpperCase());
function Icon({
  name,
  size = 18,
  strokeWidth = 1.5,
  color = 'currentColor',
  style,
  ...rest
}) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons;
  let node = lib && (lib[pascal(name)] || lib[name]);
  if (node && node[0] === 'svg') node = node[2];
  const kids = (node || []).map(([t, a], i) => React.createElement(t, {
    key: i,
    ...a
  }));
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      flex: 'none',
      verticalAlign: 'middle',
      ...style
    }
  }, rest), kids);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    h: 'var(--control-h-sm)',
    px: '14px',
    fs: '11px'
  },
  md: {
    h: 'var(--control-h-md)',
    px: '22px',
    fs: '12px'
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: '30px',
    fs: '13px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled,
  fullWidth,
  children,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const s = sizes[size] || sizes.md;
  const V = {
    primary: {
      bg: h ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      fg: 'var(--paper)',
      bd: 'transparent'
    },
    accent: {
      bg: h ? 'var(--color-accent-hover)' : 'var(--color-accent)',
      fg: 'var(--navy-950)',
      bd: 'transparent'
    },
    secondary: {
      bg: h ? 'var(--navy-800)' : 'transparent',
      fg: h ? 'var(--paper)' : 'var(--navy-800)',
      bd: 'var(--navy-800)'
    },
    ghost: {
      bg: h ? 'var(--surface-tint)' : 'transparent',
      fg: 'var(--navy-800)',
      bd: 'transparent'
    },
    inverse: {
      bg: h ? 'var(--paper)' : 'transparent',
      fg: h ? 'var(--navy-800)' : 'var(--paper)',
      bd: 'var(--paper)'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: s.h,
      padding: `0 ${s.px}`,
      width: fullWidth ? '100%' : undefined,
      background: V.bg,
      color: V.fg,
      border: `var(--border-width-frame) solid ${V.bd}`,
      borderRadius: 'var(--radius-0)',
      font: `600 ${s.fs}/1 var(--font-sans)`,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transform: p && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),transform var(--dur-fast)',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 16
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16,
    style: {
      transform: h && !disabled ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 44,
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const V = {
    ghost: {
      bg: h ? 'var(--surface-tint)' : 'transparent',
      fg: 'var(--navy-800)',
      bd: 'transparent'
    },
    outline: {
      bg: h ? 'var(--navy-800)' : 'transparent',
      fg: h ? 'var(--paper)' : 'var(--navy-800)',
      bd: 'var(--navy-800)'
    },
    solid: {
      bg: h ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      fg: 'var(--paper)',
      bd: 'transparent'
    },
    inverse: {
      bg: h ? 'rgba(246,244,239,.12)' : 'transparent',
      fg: 'var(--paper)',
      bd: 'var(--border-on-inverse)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      display: 'inline-grid',
      placeItems: 'center',
      padding: 0,
      background: V.bg,
      color: V.fg,
      border: `1px solid ${V.bd}`,
      borderRadius: 'var(--radius-0)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'all var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const files = {
  lockup: {
    navy: 'logo-lockup-navy.png'
  },
  stacked: {
    navy: 'logo-stacked-navy.png',
    black: 'logo-stacked-black.png',
    white: 'logo-stacked-white.png'
  },
  mark: {
    navy: 'logo-mark-navy.png',
    black: 'logo-mark-black.png',
    white: 'logo-mark-white.png'
  }
};
function Logo({
  variant = 'lockup',
  color = 'navy',
  height = 48,
  basePath = 'assets/',
  style,
  ...rest
}) {
  const set = files[variant] || files.lockup;
  const f = set[color] || Object.values(set)[0];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: basePath + f,
    alt: "Anchor Solas Pipe Band",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  dot,
  children
}) {
  const T = {
    neutral: ['var(--navy-50)', 'var(--navy-800)'],
    solid: ['var(--navy-800)', 'var(--paper)'],
    accent: ['var(--beacon-500)', 'var(--navy-950)'],
    success: ['var(--status-success-bg)', 'var(--status-success)'],
    warning: ['var(--status-warning-bg)', 'var(--status-warning)'],
    danger: ['var(--status-danger-bg)', 'var(--status-danger)']
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      background: T[0],
      color: T[1],
      font: '600 10px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  variant = 'plain',
  eyebrow,
  title,
  children,
  footer,
  media,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const V = {
    plain: {
      bg: 'var(--surface-card)',
      bd: '1px solid var(--border-hairline)',
      fg: 'var(--text-body)',
      tf: 'var(--text-heading)'
    },
    framed: {
      bg: 'transparent',
      bd: '2px solid var(--navy-800)',
      fg: 'var(--text-body)',
      tf: 'var(--text-heading)'
    },
    inverse: {
      bg: 'var(--surface-inverse)',
      bd: '1px solid transparent',
      fg: 'var(--text-on-inverse-muted)',
      tf: 'var(--paper)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: V.bg,
      border: V.bd,
      color: V.fg,
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: onClick && h ? 'var(--shadow-2)' : 'none',
      transform: onClick && h ? 'translateY(-2px)' : 'none',
      transition: 'all var(--dur-slow) var(--ease-out)',
      ...style
    }
  }, media && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: variant === 'inverse' ? 'var(--beacon-300)' : 'var(--text-accent)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 26px/1.15 var(--font-serif)',
      letterSpacing: 'var(--ls-heading)',
      color: V.tf
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.6 var(--font-sans)'
    }
  }, children)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px var(--space-5)',
      borderTop: variant === 'inverse' ? '1px solid var(--border-on-inverse)' : '1px solid var(--border-hairline)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  inverse
}) {
  const [v, setV] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value || tabs[0])));
  const cur = value ?? v;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: inverse ? '1px solid var(--border-on-inverse)' : '1px solid var(--border-hairline)'
    }
  }, tabs.map(t => {
    const val = t.value || t;
    const lab = t.label || t;
    const on = cur === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setV(val);
        onChange && onChange(val);
      },
      style: {
        background: 'none',
        border: 0,
        padding: '14px 0',
        marginBottom: -1,
        cursor: 'pointer',
        borderBottom: `2px solid ${on ? inverse ? 'var(--beacon-500)' : 'var(--navy-800)' : 'transparent'}`,
        color: inverse ? on ? 'var(--paper)' : 'var(--text-on-inverse-muted)' : on ? 'var(--navy-800)' : 'var(--text-muted)',
        font: '600 12px/1 var(--font-sans)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        transition: 'color var(--dur-base)'
      }
    }, lab);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  selected,
  onClick,
  onRemove,
  children
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid',
      borderColor: selected ? 'var(--navy-800)' : h ? 'var(--navy-800)' : 'var(--border-default)',
      background: selected ? 'var(--navy-800)' : 'transparent',
      color: selected ? 'var(--paper)' : 'var(--navy-800)',
      font: '500 13px/1 var(--font-sans)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      cursor: 'pointer',
      fontSize: 15,
      lineHeight: 1,
      opacity: .7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  eyebrow,
  title,
  children,
  actions,
  width = 520
}) {
  const closeRef = React.useRef(null);
  const closeFn = React.useRef(onClose);
  closeFn.current = onClose;
  // Keyboard: focus the close button on open, Esc closes, focus returns to what opened it
  React.useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    if (closeRef.current) closeRef.current.focus();
    const onKey = e => {
      if (e.key === 'Escape') closeFn.current && closeFn.current();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      if (prev && prev.focus && document.contains(prev)) prev.focus();
    };
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(10,27,48,.55)',
      backdropFilter: 'blur(4px)',
      display: 'grid',
      placeItems: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-3)',
      borderTop: '4px solid var(--navy-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 8px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '300 32px/1.1 var(--font-serif)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--ls-heading)'
    }
  }, title)), /*#__PURE__*/React.createElement("button", {
    ref: closeRef,
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      width: 32,
      height: 32,
      flex: 'none',
      fontSize: 22,
      lineHeight: 1,
      color: 'var(--navy-800)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 32px 24px',
      font: '400 15px/1.6 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      background: 'var(--surface-page)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'neutral',
  title,
  children,
  onClose
}) {
  const accent = {
    neutral: 'var(--beacon-500)',
    success: '#7FC4A0',
    danger: '#E08A7F'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '16px 18px',
      background: 'var(--navy-900)',
      color: 'var(--paper)',
      boxShadow: 'var(--shadow-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: accent,
      marginTop: 6,
      flex: 'none',
      boxShadow: `0 0 0 4px rgba(227,164,58,.15)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.4 var(--font-sans)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-on-inverse-muted)',
      marginTop: 2
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--navy-200)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top'
}) {
  const [o, setO] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: `translateX(-50%) translateY(${o ? 0 : 4}px)`,
      opacity: o ? 1 : 0,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: '7px 10px',
      background: 'var(--navy-900)',
      color: 'var(--paper)',
      font: '500 12px/1.2 var(--font-sans)',
      transition: 'opacity var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)',
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  description
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      gap: 12,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setC(e.target.checked);
      onChange && onChange(e.target.checked);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      marginTop: 1,
      display: 'grid',
      placeItems: 'center',
      border: '1.5px solid var(--navy-800)',
      background: on ? 'var(--navy-800)' : 'var(--surface-card)',
      transition: 'background var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5l3.5 3.5L11 1",
    fill: "none",
    stroke: "var(--paper)",
    strokeWidth: "1.8"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px/1.4 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.4 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Field = ({
  label,
  hint,
  error,
  children,
  htmlFor
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }
}, label && /*#__PURE__*/React.createElement("label", {
  htmlFor: htmlFor,
  style: {
    font: '600 11px/1 var(--font-sans)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    color: 'var(--text-heading)'
  }
}, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
  style: {
    font: '400 13px/1.4 var(--font-sans)',
    color: error ? 'var(--status-danger)' : 'var(--text-muted)'
  }
}, error || hint));
function Input({
  label,
  hint,
  error,
  id,
  disabled,
  style,
  multiline,
  rows = 4,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const uid = id || React.useId();
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: uid
  }, /*#__PURE__*/React.createElement(Tag, _extends({
    id: uid,
    disabled: disabled,
    rows: multiline ? rows : undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      height: multiline ? 'auto' : 'var(--control-h-md)',
      padding: multiline ? '12px 14px' : '0 14px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid',
      borderColor: error ? 'var(--status-danger)' : f ? 'var(--navy-800)' : 'var(--border-default)',
      boxShadow: f ? 'inset 0 -2px 0 var(--beacon-500)' : 'none',
      borderRadius: 'var(--radius-1)',
      font: '400 16px/1.5 var(--font-sans)',
      outline: 'none',
      resize: 'vertical',
      transition: 'border-color var(--dur-base),box-shadow var(--dur-base)',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  label,
  direction = 'column'
}) {
  const [v, setV] = React.useState(defaultValue);
  const cur = value ?? v;
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 0,
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, label && /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      marginBottom: 12,
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 24 : 12
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    const on = cur === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      style: {
        display: 'inline-flex',
        gap: 10,
        alignItems: 'flex-start',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: val,
      checked: on,
      onChange: () => {
        setV(val);
        onChange && onChange(val);
      },
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flex: 'none',
        marginTop: 1,
        borderRadius: '50%',
        border: '1.5px solid var(--navy-800)',
        display: 'grid',
        placeItems: 'center',
        background: 'var(--surface-card)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--navy-800)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 15px/1.4 var(--font-sans)'
      }
    }, lab));
  })));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/RangeSlider.jsx
try { (() => {
function RangeSlider({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  format = v => v,
  hint
}) {
  const [inner, setInner] = React.useState(defaultValue || [min, max]);
  const v = value || inner;
  const track = React.useRef(null);
  const drag = React.useRef(null);
  const pct = x => (x - min) / (max - min) * 100;
  const set = nv => {
    setInner(nv);
    onChange && onChange(nv);
  };
  const fromEvent = e => {
    const r = track.current.getBoundingClientRect();
    const t = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    return Math.round((min + t * (max - min)) / step) * step;
  };
  const down = e => {
    const x = fromEvent(e);
    const i = Math.abs(x - v[0]) <= Math.abs(x - v[1]) ? 0 : 1;
    drag.current = i;
    move(e);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const move = e => {
    if (drag.current == null) return;
    const x = fromEvent(e);
    const nv = [...v];
    nv[drag.current] = x;
    if (nv[0] > nv[1]) nv[drag.current] = nv[1 - drag.current];
    set(nv);
  };
  const key = i => e => {
    const d = e.key === 'ArrowRight' || e.key === 'ArrowUp' ? step : e.key === 'ArrowLeft' || e.key === 'ArrowDown' ? -step : 0;
    if (!d) return;
    e.preventDefault();
    const nv = [...v];
    nv[i] = Math.min(i ? max : v[1], Math.max(i ? v[0] : min, nv[i] + d));
    set(nv);
  };
  const Thumb = ({
    i
  }) => /*#__PURE__*/React.createElement("span", {
    role: "slider",
    tabIndex: 0,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": v[i],
    "aria-label": i ? 'Maximum' : 'Minimum',
    onKeyDown: key(i),
    style: {
      position: 'absolute',
      top: '50%',
      left: pct(v[i]) + '%',
      width: 20,
      height: 20,
      marginLeft: -10,
      marginTop: -10,
      background: 'var(--surface-card)',
      border: '2px solid var(--navy-800)',
      borderRadius: '50%',
      cursor: 'grab',
      boxShadow: 'var(--shadow-1)',
      outlineOffset: 2
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 20px/1 var(--font-serif)',
      color: 'var(--navy-800)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, format(v[0]), " \u2013 ", format(v[1]), v[1] >= max ? '+' : '')), /*#__PURE__*/React.createElement("div", {
    ref: track,
    onPointerDown: down,
    onPointerMove: move,
    onPointerUp: () => drag.current = null,
    style: {
      position: 'relative',
      height: 28,
      cursor: 'pointer',
      touchAction: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      height: 2,
      marginTop: -1,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      height: 4,
      marginTop: -2,
      left: pct(v[0]) + '%',
      width: pct(v[1]) - pct(v[0]) + '%',
      background: 'var(--navy-800)'
    }
  }), /*#__PURE__*/React.createElement(Thumb, {
    i: 0
  }), /*#__PURE__*/React.createElement(Thumb, {
    i: 1
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: '400 12px/1 var(--font-sans)',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, format(min)), /*#__PURE__*/React.createElement("span", null, hint), /*#__PURE__*/React.createElement("span", null, format(max), "+")));
}
Object.assign(__ds_scope, { RangeSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RangeSlider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Field = ({
  label,
  hint,
  error,
  children,
  htmlFor
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }
}, label && /*#__PURE__*/React.createElement("label", {
  htmlFor: htmlFor,
  style: {
    font: '600 11px/1 var(--font-sans)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    color: 'var(--text-heading)'
  }
}, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
  style: {
    font: '400 13px/1.4 var(--font-sans)',
    color: error ? 'var(--status-danger)' : 'var(--text-muted)'
  }
}, error || hint));
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  placeholder,
  disabled,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: uid
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      appearance: 'none',
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 40px 0 14px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid',
      borderColor: error ? 'var(--status-danger)' : f ? 'var(--navy-800)' : 'var(--border-default)',
      boxShadow: f ? 'inset 0 -2px 0 var(--beacon-500)' : 'none',
      borderRadius: 'var(--radius-1)',
      font: '400 16px/1 var(--font-sans)',
      outline: 'none',
      cursor: 'pointer',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      marginTop: -4,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l5 5 5-5",
    fill: "none",
    stroke: "var(--navy-800)",
    strokeWidth: "1.5"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled
}) {
  const [c, setC] = React.useState(!!defaultChecked);
  const on = checked ?? c;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: () => {
      setC(!on);
      onChange && onChange(!on);
    },
    style: {
      width: 44,
      height: 24,
      padding: 2,
      border: '1.5px solid var(--navy-800)',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--navy-800)' : 'var(--surface-card)',
      cursor: 'inherit',
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2.5,
      left: on ? 22 : 3,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: on ? 'var(--beacon-500)' : 'var(--navy-800)',
      transition: 'left var(--dur-base) var(--ease-out),background var(--dur-base)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px/1.4 var(--font-sans)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RangeSlider = __ds_scope.RangeSlider;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
