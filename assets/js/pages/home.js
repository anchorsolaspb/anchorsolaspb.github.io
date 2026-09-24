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
  function HomeScreen({
    go
  }) {
    const next = (window.EVENTS || []).find(e => !e.past);
    const when = next && (next.day.includes('–') ? next.day : next.day + ' ' + next.d + ' ' + next.m[0] + next.m.slice(1).toLowerCase());
    return React.createElement(React.Fragment, null, React.createElement("section", {
      style: {
        background: 'var(--navy-800)',
        color: 'var(--paper)'
      }
    }, React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--sec-y) var(--gutter) calc(var(--sec-y) + 8px)',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr)',
        gap: 64
      }
    }, React.createElement("div", null, React.createElement(Eyebrow, {
      inverse: true
    }, "Alumni pipe band of the 64th Boys' Brigade Singapore"), React.createElement("h1", {
      style: {
        margin: '28px 0 0',
        font: '300 clamp(52px,6.4vw,92px)/1.0 var(--font-serif)',
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
      style: {
        border: '2px solid var(--border-on-inverse)',
        padding: 12
      }
    }, React.createElement(Photo, {
      h: "auto",
      src: P + 'band-uniform-group.jpg',
      label: "Anchor Solas pipers and drummers in uniform",
      style: {
        aspectRatio: '2353 / 1568'
      }
    })))), next && React.createElement("div", {
      style: {
        background: 'var(--beacon-500)'
      }
    }, React.createElement("div", {
      onClick: () => go('events'),
      style: {
        cursor: 'pointer',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '18px var(--gutter)',
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        flexWrap: 'wrap',
        font: '600 12px/1 var(--font-sans)',
        letterSpacing: '.2em',
        color: 'var(--navy-950)'
      }
    }, React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--navy-950)'
      }
    }), "NEXT UP", React.createElement("span", {
      style: {
        font: '400 20px/1.3 var(--font-serif)',
        letterSpacing: 0
      }
    }, next.t, ", ", when, ", ", next.p), React.createElement("span", {
      style: {
        marginLeft: 'auto'
      }
    }, "ALL EVENTS →"))), React.createElement(Section, null, React.createElement("div", {
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
      title: "Where to hear us",
      body: "Performances, brigade events and pipe band competitions across Singapore.",
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