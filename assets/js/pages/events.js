(() => {
  const {
    Tabs,
    Tag,
    Badge,
    Button,
    Icon,
    Dialog
  } = window.AnchorSolasDesignSystem_897ee1;
  function EventsScreen({
    go,
    toast
  }) {
    const [tab, setTab] = React.useState('Past Events');
    const [sel, setSel] = React.useState(null);
    const list = (window.EVENTS || []).filter(e => e.past && tab === 'Past Competitions' === (e.type === 'Competition'));
    return React.createElement(React.Fragment, null, React.createElement(Section, {
      style: {
        paddingBottom: 40
      }
    }, React.createElement(Eyebrow, null, "Season 2026"), React.createElement("h1", {
      style: {
        margin: '20px 0 0',
        font: '300 clamp(52px,8vw,72px)/1.02 var(--font-serif)',
        letterSpacing: '-.02em',
        color: 'var(--navy-800)'
      }
    }, "Events")), React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--gutter)'
      }
    }, React.createElement(Tabs, {
      tabs: ['Past Events', 'Past Competitions'],
      value: tab,
      onChange: setTab
    }), list.length ? React.createElement("div", {
      className: "aspb-events-list",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
        gap: 0,
        borderTop: '2px solid var(--navy-800)',
        marginBottom: 96,
        marginTop: 32
      }
    }, list.map((e, i) => React.createElement("div", {
      key: e.id,
      className: "aspb-ev-card",
      onClick: () => setSel(e),
      style: {
        cursor: 'pointer',
        padding: '32px 32px 32px ' + (i % 2 ? '32px' : '0'),
        borderBottom: '1px solid var(--border-hairline)',
        borderLeft: i % 2 ? '1px solid var(--border-hairline)' : 'none',
        display: 'grid',
        gridTemplateColumns: 'clamp(64px,12vw,88px) minmax(0,1fr)',
        gap: 20
      }
    }, React.createElement("div", null, React.createElement("div", {
      style: {
        font: '300 56px/1 var(--font-serif)',
        color: 'var(--navy-800)'
      }
    }, e.d), React.createElement("div", {
      style: {
        font: '600 11px/1 var(--font-sans)',
        letterSpacing: '.2em',
        color: 'var(--text-muted)',
        marginTop: 8
      }
    }, e.m)), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: 'flex-start'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, React.createElement(Badge, {
      tone: e.st[0],
      dot: e.st[0] === 'success'
    }, e.st[1]), e.day.includes('–') && React.createElement("span", {
      style: {
        font: '600 11px/1 var(--font-sans)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, e.day)), React.createElement("div", {
      style: {
        font: '400 clamp(24px,3vw,28px)/1.15 var(--font-serif)',
        color: 'var(--navy-800)'
      }
    }, e.t), React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: 10,
        columnGap: 18,
        font: '400 14px/1.3 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: "clock",
      size: 15
    }), e.time), React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: "map-pin",
      size: 15
    }), e.p)), e.images.length > 0 && React.createElement("div", {
      className: "aspb-ev-media",
      style: {
        width: '100%',
        maxWidth: 560,
        marginTop: 8,
        overflow: 'hidden',
        background: 'var(--navy-900)'
      }
    }, React.createElement("img", {
      src: e.images[0],
      alt: e.t,
      loading: "lazy",
      style: {
        display: 'block',
        width: '100%',
        height: 'clamp(150px,20vw,220px)',
        objectFit: 'cover'
      }
    })), (e.desc || e.images.length > 0) && React.createElement("span", {
      className: "aspb-link",
      style: {
        font: '600 11px/1 var(--font-sans)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--navy-800)',
        marginTop: 4
      }
    }, "View details", e.images.length > 1 ? ' · ' + e.images.length + ' photos' : ''))))) : React.createElement("div", {
      style: {
        padding: '64px 0 120px',
        font: '400 20px/1.5 var(--font-serif)',
        fontStyle: 'italic',
        color: 'var(--text-muted)'
      }
    }, "Nothing here yet.")), React.createElement(Dialog, {
      open: !!sel,
      onClose: () => setSel(null),
      eyebrow: sel && (sel.day.includes('–') ? sel.day : sel.day + ' ' + sel.d + ' ' + sel.m),
      title: sel && sel.t,
      width: 760,
      actions: React.createElement(Button, {
        variant: "secondary",
        onClick: () => setSel(null)
      }, "Close")
    }, sel && React.createElement("div", {
      className: "aspb-dialog-body",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxHeight: 'calc(100vh - 260px)',
        overflowY: 'auto'
      }
    }, React.createElement("span", {
      style: {
        font: '400 14px/1.4 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, sel.time, " · ", sel.p), sel.desc && React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, sel.desc.split(/\n\s*\n/).map((para, i) => React.createElement("p", {
      key: i,
      style: {
        margin: 0,
        font: '400 17px/1.65 var(--font-serif)',
        color: 'var(--text-body)',
        whiteSpace: 'pre-line'
      }
    }, para))), sel.images.length > 0 && React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: sel.images.length === 1 ? '1fr' : 'repeat(auto-fill,minmax(min(100%,200px),1fr))',
        gap: 8
      }
    }, sel.images.map((src, i) => React.createElement("a", {
      key: i,
      href: src,
      target: "_blank",
      rel: "noopener",
      style: {
        display: 'block',
        background: 'var(--navy-50)'
      }
    }, React.createElement("img", {
      src: src,
      alt: sel.t + ' photo ' + (i + 1),
      loading: "lazy",
      style: {
        display: 'block',
        width: '100%',
        aspectRatio: sel.images.length === 1 ? 'auto' : '4 / 3',
        objectFit: 'cover'
      }
    })))))));
  }
  window.EventsScreen = EventsScreen;
})();