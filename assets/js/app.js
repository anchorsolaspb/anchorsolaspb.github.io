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
const fromHash = () => {
  const h = (location.hash || '').replace(/^#\/?/, '').toLowerCase();
  return PAGES.includes(h) ? h : 'home';
};
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
function App() {
  const [page, setPage] = React.useState(fromHash);
  const [t, setT] = React.useState(null);
  React.useEffect(() => {
    const sync = () => {
      setPage(fromHash());
      window.scrollTo(0, 0);
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
    const url = p === 'home' ? location.pathname + location.search : '#' + p;
    if (p !== page) history.pushState(null, '', url);
    setPage(p);
    window.scrollTo(0, 0);
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
  }), React.createElement("main", null, React.createElement(S, {
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
window.loadEvents().then(() => ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null)));