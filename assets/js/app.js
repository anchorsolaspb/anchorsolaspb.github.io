const {
  Toast
} = window.AnchorSolasDesignSystem_897ee1;
const PAGES = ['home', 'about', 'events', 'book'];
const TITLES = {
  home: 'Anchor Solas Pipe Band',
  about: 'About | Anchor Solas Pipe Band',
  events: 'Events | Anchor Solas Pipe Band',
  book: 'Book Us | Anchor Solas Pipe Band'
};
// Each page has its own address: /, /about/, /events/, /book/ (separate HTML files so search engines can list them)
const pathOf = p => p === 'home' ? '/' : '/' + p + '/';
const fromPath = () => {
  const seg = location.pathname.replace(/^\/+|\/+$/g, '').split('/')[0].toLowerCase();
  return PAGES.includes(seg) ? seg : 'home';
};
// Older links used #about, #events, #book. Send them to the new address without adding a history step
const fromLegacyHash = () => {
  const h = (location.hash || '').replace(/^#\/?/, '').toLowerCase();
  return PAGES.includes(h) ? h : null;
};
const legacy = fromLegacyHash();
if (legacy) history.replaceState(null, '', pathOf(legacy) + location.search);
const currentPage = () => fromLegacyHash() || fromPath();
const NEXT = {
  home: ['about', 'About'],
  about: ['events', 'Events'],
  events: ['book', 'Book Us'],
  book: ['home', 'Home']
};
function NextPage({
  page,
  go
}) {
  const [atEnd, setAtEnd] = React.useState(false);
  React.useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setAtEnd(max <= 4 || window.scrollY >= max - 24);
    };
    const req = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', req, {
      passive: true
    });
    window.addEventListener('resize', req);
    const ro = new ResizeObserver(req);
    ro.observe(document.body);
    update();
    return () => {
      window.removeEventListener('scroll', req);
      window.removeEventListener('resize', req);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [page]);
  const [to, label] = NEXT[page] || NEXT.home;
  return React.createElement("button", {
    type: "button",
    className: 'aspb-next' + (atEnd ? ' is-on' : ''),
    tabIndex: atEnd ? 0 : -1,
    "aria-hidden": !atEnd,
    onClick: () => go(to)
  }, to === 'home' ? 'Back to' : 'Next', " ", React.createElement("span", null, label, " →"));
}
// Crossfade the whole screen between pages where the browser supports it, so navy and paper pages blend instead of snapping
const withTransition = update => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduce) {
    update();
    return;
  }
  document.startViewTransition(() => ReactDOM.flushSync(update));
};
function App() {
  const [page, setPage] = React.useState(currentPage);
  const [t, setT] = React.useState(null);
  React.useEffect(() => {
    const sync = () => {
      const lp = fromLegacyHash();
      if (lp) history.replaceState(null, '', pathOf(lp) + location.search);
      withTransition(() => {
        setPage(currentPage());
        window.scrollTo(0, 0);
      });
    };
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);
  React.useEffect(() => {
    document.title = TITLES[page] || TITLES.home;
  }, [page]);
  const go = p => {
    if (!PAGES.includes(p)) p = 'home';
    if (p !== page) history.pushState(null, '', pathOf(p));
    withTransition(() => {
      setPage(p);
      window.scrollTo(0, 0);
    });
  };
  const toast = m => {
    setT(m);
    setTimeout(() => setT(null), 2600);
  };
  const S = {
    home: HomeScreen,
    events: EventsScreen,
    about: AboutScreen,
    book: BookScreen
  }[page] || HomeScreen;
  return React.createElement(React.Fragment, null, React.createElement(Header, {
    page: page,
    go: go,
    inverse: page === 'home' || page === 'book'
  }), React.createElement("main", {
    key: page,
    className: "aspb-page"
  }, React.createElement(S, {
    go: go,
    toast: toast
  })), React.createElement(Footer, {
    go: go
  }), React.createElement(NextPage, {
    page: page,
    go: go
  }), t && React.createElement("div", {
    style: {
      position: 'fixed',
      left: 24,
      bottom: 24,
      zIndex: 200
    }
  }, React.createElement(Toast, {
    tone: "success",
    title: t,
    onClose: () => setT(null)
  })));
}
window.loadSiteData().then(() => ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null)));