(() => {
  const {
    Button,
    IconButton,
    Logo,
    Icon
  } = window.AnchorSolasDesignSystem_897ee1;
  const A = '../../assets/';
  const res = u => {
    const k = (u || '').split('/').pop();
    return window.__RES && window.__RES[k] || u;
  };
  function Photo({
    label,
    h = 320,
    dark,
    src,
    pos = 'center',
    style
  }) {
    if (src) return React.createElement("div", {
      style: {
        height: h,
        background: 'var(--navy-900)',
        overflow: 'hidden',
        ...style
      }
    }, React.createElement("img", {
      src: res(src),
      alt: label || '',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: pos,
        display: 'block',
        transform: 'scale(1.06)'
      }
    }));
    return React.createElement("div", {
      style: {
        height: h,
        background: dark ? 'repeating-linear-gradient(135deg,#1C2D4A 0 14px,#223557 14px 28px)' : 'repeating-linear-gradient(135deg,#EDEAE2 0 14px,#E5E1D7 14px 28px)',
        display: 'grid',
        placeItems: 'center',
        ...style
      }
    }, React.createElement("span", {
      style: {
        font: '500 11px/1 var(--font-sans)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: dark ? 'var(--navy-200)' : 'var(--stone-500)'
      }
    }, label));
  }
  function Eyebrow({
    children,
    inverse
  }) {
    return React.createElement("div", {
      style: {
        font: '600 12px/1 var(--font-sans)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: inverse ? 'var(--beacon-300)' : 'var(--text-accent)'
      }
    }, children);
  }
  function Header({
    page,
    go,
    inverse
  }) {
    const items = [['home', 'Home'], ['about', 'About'], ['events', 'Events'], ['book', 'Book Us']];
    return React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: inverse ? 'var(--navy-800)' : 'rgba(246,244,239,.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: inverse ? '1px solid var(--border-on-inverse)' : '1px solid var(--border-hairline)'
      }
    }, React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--gutter)',
        height: 76,
        display: 'flex',
        alignItems: 'center',
        gap: 32
      }
    }, React.createElement("a", {
      onClick: () => go('home'),
      style: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        textDecoration: 'none'
      }
    }, React.createElement(Logo, {
      variant: "mark",
      color: inverse ? 'white' : 'navy',
      height: 40,
      basePath: A,
      src: res(A + 'logo-mark-' + (inverse ? 'white' : 'navy') + '.png')
    }), React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, React.createElement("span", {
      style: {
        font: '600 15px/1 var(--font-sans)',
        letterSpacing: '.08em',
        color: inverse ? 'var(--paper)' : 'var(--navy-800)'
      }
    }, "ANCHOR SOLAS"), React.createElement("span", {
      style: {
        font: '500 10px/1 var(--font-sans)',
        letterSpacing: '.3em',
        color: inverse ? 'var(--navy-200)' : 'var(--text-muted)'
      }
    }, "PIPE BAND"))), React.createElement("nav", {
      style: {
        display: 'flex',
        gap: 28,
        marginLeft: 'auto'
      }
    }, items.map(([k, l]) => React.createElement("a", {
      key: k,
      onClick: () => go(k),
      style: {
        cursor: 'pointer',
        textDecoration: 'none',
        font: '600 12px/1 var(--font-sans)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        paddingBottom: 6,
        borderBottom: '2px solid ' + (page === k ? inverse ? 'var(--beacon-500)' : 'var(--navy-800)' : 'transparent'),
        color: inverse ? 'var(--paper)' : 'var(--navy-800)'
      }
    }, l)))));
  }
  function Footer({
    go
  }) {
    return React.createElement("footer", {
      style: {
        background: 'var(--navy-900)',
        color: 'var(--navy-200)'
      }
    }, React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '64px var(--gutter) 32px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 32
      }
    }, React.createElement("div", null, React.createElement(Logo, {
      variant: "stacked",
      color: "white",
      height: 120,
      basePath: A,
      src: res(A + 'logo-stacked-white.png')
    })), [['Band', ['About', 'Events', 'Book Us']], ['Contact', ['admin@anchorsolaspb.com', 'Singapore']], ['Follow', ['Instagram', 'Facebook', 'YouTube']]].map(([h, l]) => React.createElement("div", {
      key: h
    }, React.createElement("div", {
      style: {
        font: '600 11px/1 var(--font-sans)',
        letterSpacing: '.24em',
        color: 'var(--beacon-300)',
        marginBottom: 16
      }
    }, h.toUpperCase()), l.map(x => React.createElement("div", {
      key: x,
      style: {
        font: '400 14px/2 var(--font-sans)',
        color: 'var(--paper)'
      }
    }, x))))), React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '20px var(--gutter)',
        borderTop: '1px solid var(--border-on-inverse)',
        font: '400 12px/1 var(--font-sans)',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, React.createElement("span", null, "© 2026 Anchor Solas Pipe Band"), React.createElement("span", {
      style: {
        fontStyle: 'italic',
        fontFamily: 'var(--font-serif)',
        fontSize: 14
      }
    }, "Anchored in sound, bright in spirit!")));
  }
  function Section({
    children,
    bg,
    style
  }) {
    return React.createElement("section", {
      style: {
        background: bg
      }
    }, React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '96px var(--gutter)',
        ...style
      }
    }, children));
  }
  const EVENTS = [{
    id: 1,
    d: '27',
    m: 'SEP',
    day: 'Sunday',
    t: 'BB 17A Inauguration Ceremony',
    p: 'Christ Methodist Church, Singapore',
    time: 'TBC',
    type: 'Performance',
    st: ['success', 'Confirmed']
  }, {
    id: 2,
    d: '28',
    m: 'DEC',
    day: '28 Dec 2026 – 1 Jan 2027',
    t: 'BBM Pipes and Drums Festival, BB Pesta 2026',
    p: 'Penang, Malaysia',
    time: 'Exact day TBC',
    type: 'Performance',
    st: ['accent', 'Overseas']
  }, {
    id: 3,
    past: true,
    d: '19',
    m: 'SEP',
    day: 'Saturday',
    t: 'Peranakan Night for Cerebral Palsy Alliance Singapore',
    p: 'Tanglin Club, Singapore',
    time: '7.30 pm',
    type: 'Performance',
    st: ['neutral', 'Charity']
  }, {
    id: 4,
    past: true,
    d: '21',
    m: 'NOV',
    day: '21–22 Nov 2025',
    t: '19th Pipes and Drums Festival',
    p: 'Christ Church Secondary School, Singapore',
    time: 'Two days',
    type: 'Competition',
    st: ['neutral', 'Festival']
  }];
  const P = '../../assets/photos/';
  Object.assign(window, {
    res,
    Photo,
    Eyebrow,
    Header,
    Footer,
    Section,
    EVENTS,
    ASSETS: A,
    P
  });
})();