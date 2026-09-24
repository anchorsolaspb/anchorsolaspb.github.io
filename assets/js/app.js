const {
  Toast
} = window.AnchorSolasDesignSystem_897ee1;
function App() {
  const [page, setPage] = React.useState(['home', 'about', 'events', 'book'].includes(localStorage.getItem('aspb-page')) ? localStorage.getItem('aspb-page') : 'home');
  const [t, setT] = React.useState(null);
  const go = p => {
    setPage(p);
    localStorage.setItem('aspb-page', p);
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
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));