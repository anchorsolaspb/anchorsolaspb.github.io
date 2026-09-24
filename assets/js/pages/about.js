(() => {
  const {
    Button,
    Logo
  } = window.AnchorSolasDesignSystem_897ee1;
  const H2 = ({
    children,
    inverse,
    small
  }) => React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      font: small ? '300 32px/1.25 var(--font-serif)' : '300 clamp(32px,3.6vw,48px)/1.1 var(--font-serif)',
      letterSpacing: '-.01em',
      color: inverse ? 'var(--paper)' : 'var(--navy-800)'
    }
  }, children);
  const Body = ({
    children,
    inverse,
    style
  }) => React.createElement("p", {
    style: {
      margin: 0,
      font: '400 19px/1.7 var(--font-serif)',
      color: inverse ? 'var(--navy-100)' : 'var(--text-body)',
      textWrap: 'pretty',
      ...style
    }
  }, children);
  function AboutScreen({
    go
  }) {
    return React.createElement(React.Fragment, null, React.createElement(Section, {
      style: {
        paddingBottom: 48
      }
    }, React.createElement(Eyebrow, null, "Who we are"), React.createElement("h1", {
      style: {
        margin: '20px 0 0',
        font: '300 clamp(52px,6vw,80px)/1.02 var(--font-serif)',
        letterSpacing: '-.02em',
        color: 'var(--navy-800)'
      }
    }, "About ", React.createElement("em", null, "Anchor Solas."))), React.createElement("div", {
      className: "aspb-stack",
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--gutter) var(--sec-y)',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 64,
        alignItems: 'start'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        borderTop: '2px solid var(--navy-800)',
        paddingTop: 32
      }
    }, React.createElement(Eyebrow, null, "About Us"), React.createElement(Body, {
      style: {
        fontSize: 'clamp(20px,2.4vw,24px)',
        lineHeight: 1.5,
        color: 'var(--navy-800)'
      }
    }, "Founded in 2026, Anchor Solas Pipe Band is the official alumni pipe band of the 64th Boys' Brigade Singapore."), React.createElement(Body, null, "The band was established as a sustainability initiative to safeguard and advance the piping and drumming tradition of the 64th Boys' Brigade. By uniting passionate alumni, Anchor Solas Pipe Band provides a long-term platform for past and present members to continue playing, performing, and giving back to the community.")), React.createElement("div", {
      style: {
        border: '2px solid var(--navy-800)',
        padding: 14
      }
    }, React.createElement(Photo, {
      h: 380,
      src: P + 'festival-trophies.png',
      pos: "50% 75%",
      label: "Band on stage at the 19th Pipes and Drums Festival"
    }), React.createElement("div", {
      style: {
        font: '400 12px/1.4 var(--font-sans)',
        color: 'var(--text-muted)',
        paddingTop: 12
      }
    }, "19th Pipes and Drums Festival"))), React.createElement("section", {
      style: {
        background: 'var(--navy-800)'
      }
    }, React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--sec-y) var(--gutter)'
      }
    }, React.createElement("div", {
      className: "aspb-identity",
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: 48,
        alignItems: 'end',
        marginBottom: 56
      }
    }, React.createElement("div", null, React.createElement(Eyebrow, {
      inverse: true
    }, "Identity"), React.createElement(H2, {
      inverse: true
    }, "Our name reflects the foundation of our music and the vision driving our band.")), React.createElement("div", {
      style: {
        width: 160,
        height: 160,
        borderRadius: '50%',
        overflow: 'hidden',
        background: 'var(--white)'
      }
    }, React.createElement("img", {
      src: res(ASSETS + 'logo-badge-hires.png'),
      alt: "Anchor Solas Pipe Band badge",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'scale(1.52)',
        display: 'block'
      }
    }))), React.createElement("div", {
      className: "aspb-words",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderTop: '1px solid var(--border-on-inverse)'
      }
    }, [['Anchor', 'Anchor symbolizes our steadfast roots of a foundation built on stability, discipline, and the strong heritage of the Boys\' Brigade.'], ['Solas', 'Solas is a Gaelic for light, representing a beacon or lighthouse, offering clear direction, guidance, and inspiration through our music.']].map(([w, t], i) => React.createElement("div", {
      key: w,
      style: {
        padding: i ? '40px 0 0 40px' : '40px 40px 0 0',
        borderLeft: i ? '1px solid var(--border-on-inverse)' : 'none'
      }
    }, React.createElement("div", {
      style: {
        font: '300 clamp(48px,7vw,64px)/1 var(--font-serif)',
        fontStyle: i ? 'italic' : 'normal',
        color: i ? 'var(--beacon-300)' : 'var(--paper)',
        marginBottom: 20
      }
    }, w), React.createElement(Body, {
      inverse: true
    }, t)))))), React.createElement(Section, null, React.createElement("div", {
      className: "aspb-stack",
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 64,
        alignItems: 'start'
      }
    }, React.createElement("div", null, React.createElement(Eyebrow, null, "What we do · Our Objectives"), React.createElement(H2, {
      small: true
    }, "Anchor Solas Pipe Band is dedicated to continuous growth, high-level performance, and the long-term advancement of piping and drumming in Singapore."), React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, React.createElement(Photo, {
      h: 300,
      src: P + 'pipes-on-drum.jpg',
      pos: "50% 45%",
      label: "Pipes resting on the bass drum"
    }))), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, [['Standards & teaching', 'We actively elevate individual and ensemble playing standards while training our members in pedagogy, developing the next generation of pipe band instructors.'], ['Performance & competition', 'We aim to deliver solid, high-calibre performances and actively participate in higher-grade pipe band competitions.']].map(([h, t], i) => React.createElement("div", {
      key: h,
      style: {
        borderTop: '2px solid var(--navy-800)',
        padding: '28px 0 40px'
      }
    }, React.createElement("div", {
      style: {
        font: '600 12px/1 var(--font-sans)',
        letterSpacing: '.24em',
        color: 'var(--text-accent)',
        marginBottom: 16
      }
    }, "0", i + 1, " · ", h.toUpperCase()), React.createElement(Body, null, t)))))), React.createElement("section", {
      style: {
        background: 'var(--surface-sunken)'
      }
    }, React.createElement("div", {
      style: {
        maxWidth: 'var(--container-narrow)',
        margin: '0 auto',
        padding: 'calc(var(--sec-y) + 16px) var(--gutter)',
        textAlign: 'center'
      }
    }, React.createElement(Eyebrow, null, "What we do · Our Vision"), React.createElement(Body, {
      style: {
        fontSize: 22,
        lineHeight: 1.6,
        margin: '28px 0 0'
      }
    }, "By bridging past generations with current learners, we ensure that the legacy of the 64th Boys' Brigade Pipe Band remains strong, self-sustaining, and bright for years to come."), React.createElement(Body, {
      style: {
        margin: '40px 0 0',
        color: 'var(--text-muted)'
      }
    }, "Whether performing on stage or on the competition square, we remain"), React.createElement("div", {
      style: {
        display: 'inline-block',
        border: '2px solid var(--navy-800)',
        padding: 'clamp(20px,4vw,28px) clamp(20px,5vw,40px)',
        marginTop: 24
      }
    }, React.createElement("div", {
      style: {
        font: '300 clamp(36px,4.6vw,60px)/1.05 var(--font-serif)',
        letterSpacing: '-.02em',
        color: 'var(--navy-800)'
      }
    }, "Anchored in sound,", React.createElement("br", null), React.createElement("em", null, "bright in spirit!"))), React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 48
      }
    }, React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('events')
    }, "See events"), React.createElement(Button, {
      iconRight: "arrow-right",
      onClick: () => go('book')
    }, "Book Us")))));
  }
  window.AboutScreen = AboutScreen;
})();