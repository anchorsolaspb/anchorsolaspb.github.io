(() => {
  const {
    Button,
    Badge,
    Icon,
    Logo
  } = window.AnchorSolasDesignSystem_897ee1;
  function Route({
    n,
    title,
    body,
    cta,
    to,
    go,
    src,
    label,
    dark
  }) {
    const [h, setH] = React.useState(false);
    return React.createElement("div", {
      onClick: () => go(to),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        background: dark ? 'var(--navy-800)' : 'var(--surface-card)',
        border: dark ? '2px solid var(--navy-800)' : '2px solid var(--navy-800)',
        transform: h ? 'translateY(-4px)' : 'none',
        boxShadow: h ? 'var(--shadow-2)' : 'none',
        transition: 'all var(--dur-slow) var(--ease-out)'
      }
    }, src && React.createElement(Photo, {
      h: 220,
      src: src,
      label: label,
      dark: dark
    }), React.createElement("div", {
      style: {
        padding: '28px 28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        flex: 1
      }
    }, React.createElement("div", {
      style: {
        font: '600 11px/1 var(--font-sans)',
        letterSpacing: '.24em',
        color: dark ? 'var(--beacon-300)' : 'var(--text-accent)'
      }
    }, n), React.createElement("div", {
      style: {
        font: '300 clamp(32px,4vw,40px)/1.05 var(--font-serif)',
        color: dark ? 'var(--paper)' : 'var(--navy-800)'
      }
    }, title), React.createElement("p", {
      style: {
        margin: 0,
        font: '400 15px/1.6 var(--font-sans)',
        color: dark ? 'var(--navy-200)' : 'var(--text-muted)',
        flex: 1
      }
    }, body), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        paddingTop: 16,
        borderTop: dark ? '1px solid var(--border-on-inverse)' : '1px solid var(--border-hairline)',
        font: '600 12px/1 var(--font-sans)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: dark ? 'var(--paper)' : 'var(--navy-800)'
      }
    }, cta, React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      style: {
        marginLeft: 'auto',
        transform: h ? 'translateX(4px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }))));
  }
  function HeroCarousel() {
    const slides = window.HERO && window.HERO.length ? window.HERO : [{
      image: res(P + 'band-uniform-group.jpg'),
      alt: 'Anchor Solas pipers and drummers in uniform'
    }];
    const n = slides.length;
    const [i, setI] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touch = React.useRef(null);
    React.useEffect(() => {
      if (n < 2 || paused || reduce) return;
      const t = setInterval(() => setI(x => (x + 1) % n), 5000);
      return () => clearInterval(t);
    }, [n, paused, reduce]);
    const go = d => setI(x => (x + d + n) % n);
    return React.createElement("div", {
      className: "aspb-hero-car",
      "aria-roledescription": "carousel",
      "aria-label": "Band photos",
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      onFocus: () => setPaused(true),
      onBlur: () => setPaused(false),
      onTouchStart: e => {
        touch.current = e.touches[0].clientX;
      },
      onTouchEnd: e => {
        if (touch.current == null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        touch.current = null;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      },
      style: {
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '3 / 2',
        background: 'var(--navy-900)'
      }
    }, React.createElement("div", {
      className: "aspb-hero-track",
      style: {
        display: 'flex',
        height: '100%',
        transform: 'translateX(' + -i * 100 + '%)'
      }
    }, slides.map((s, k) => React.createElement("img", {
      key: k,
      src: s.image,
      alt: s.alt,
      "aria-hidden": k !== i,
      loading: k === 0 ? 'eager' : 'lazy',
      style: {
        flex: '0 0 100%',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }))), n > 1 && React.createElement("div", {
      className: "aspb-hero-dots",
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 12,
        display: 'flex',
        justifyContent: 'center',
        gap: 8
      }
    }, slides.map((s, k) => React.createElement("button", {
      key: k,
      type: "button",
      "aria-label": 'Show photo ' + (k + 1) + ' of ' + n,
      "aria-current": k === i ? 'true' : undefined,
      onClick: () => setI(k),
      className: 'aspb-dot' + (k === i ? ' is-on' : '')
    }))));
  }
  function HomeScreen({
    go
  }) {
    return React.createElement(React.Fragment, null, React.createElement("section", {
      style: {
        background: 'var(--navy-800)',
        color: 'var(--paper)'
      }
    }, React.createElement("div", {
      className: "aspb-stack",
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--sec-y) var(--gutter) calc(var(--sec-y) + 8px)',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,1fr)',
        gap: 'clamp(40px,5vw,72px)',
        alignItems: 'center'
      }
    }, React.createElement("div", null, React.createElement(Eyebrow, {
      inverse: true
    }, "Alumni pipe band of the 64th Boys' Brigade Singapore"), React.createElement("h1", {
      style: {
        margin: '28px 0 0',
        font: '300 clamp(48px,5.4vw,80px)/1.0 var(--font-serif)',
        letterSpacing: '-.02em'
      }
    }, "Anchored in sound,", React.createElement("br", null), React.createElement("em", null, "bright in spirit!")), React.createElement("p", {
      style: {
        margin: '28px 0 40px',
        maxWidth: 500,
        font: '400 18px/1.6 var(--font-sans)',
        color: 'var(--navy-200)'
      }
    }, "Founded in 2026, Anchor Solas Pipe Band is the official alumni pipe band of the 64th Boys' Brigade Singapore."), React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, React.createElement(Button, {
      size: "lg",
      variant: "accent",
      iconRight: "arrow-right",
      onClick: () => go('book')
    }, "Book Us"), React.createElement(Button, {
      size: "lg",
      variant: "inverse",
      onClick: () => go('about')
    }, "Who we are"))), React.createElement("div", {
      className: "aspb-frame aspb-frame--light",
      style: {
        padding: 12,
        width: '100%',
        maxWidth: 560,
        justifySelf: 'end'
      }
    }, React.createElement(HeroCarousel, null)))), React.createElement(Section, null, React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
        gap: 24,
        marginBottom: 40,
        flexWrap: 'wrap'
      }
    }, React.createElement("div", null, React.createElement(Eyebrow, null, "Find your way"), React.createElement("h2", {
      style: {
        margin: '16px 0 0',
        font: '300 clamp(34px,5vw,48px)/1.1 var(--font-serif)',
        color: 'var(--navy-800)'
      }
    }, "Where would you like to go?"))), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,210px),1fr))',
        gap: 24
      }
    }, React.createElement(Route, {
      n: "01 · ABOUT",
      title: "Who we are",
      body: "Our story, our name, and the heritage of the 64th Boys' Brigade that we carry forward.",
      cta: "Read about us",
      to: "about",
      go: go
    }), React.createElement(Route, {
      n: "02 · EVENTS",
      title: "Where we've played",
      body: "Performances, brigade events and pipe band competitions we've been part of.",
      cta: "See events",
      to: "events",
      go: go
    }), React.createElement(Route, {
      n: "03 · BOOK US",
      title: "Pipes for your occasion",
      body: "Invite a piper or the full band to your ceremony, celebration or community event.",
      cta: "Make an enquiry",
      to: "book",
      go: go,
      dark: true
    }))));
  }
  window.HomeScreen = HomeScreen;
})();