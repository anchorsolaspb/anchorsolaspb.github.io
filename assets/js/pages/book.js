(() => {
  const {
    Input,
    Select,
    Radio,
    Checkbox,
    Button,
    Icon,
    RangeSlider
  } = window.AnchorSolasDesignSystem_897ee1;
  const TO = 'admin@anchorsolaspb.com';
  function buildMail(f) {
    const lines = ['Name: ' + f.name, 'Email: ' + f.email, 'Event type: ' + (f.type || 'Not specified'), 'Date: ' + (f.date || 'Not specified'), 'Performance: ' + f.perf, 'Budget: S$' + f.budget[0].toLocaleString() + ' to S$' + f.budget[1].toLocaleString() + (f.budget[1] >= 5000 ? '+' : ''), 'Remarks: ' + (f.remarks || 'None'), 'Keep posted about band news: ' + (f.news ? 'Yes' : 'No')];
    const subject = 'Booking enquiry: ' + (f.type || 'Performance') + (f.date ? ' on ' + f.date : '') + ' (' + f.name + ')';
    return 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
  }
  function openMail(href) {
    const a = document.createElement('a');
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  function BookScreen({
    toast
  }) {
    const [sent, setSent] = React.useState(false);
    const [err, setErr] = React.useState({});
    const [f, setF] = React.useState({
      name: '',
      email: '',
      type: '',
      date: '',
      perf: 'Solo Bagpiper Performance',
      budget: [500, 1500],
      remarks: '',
      news: false
    });
    const [href, setHref] = React.useState('');
    const up = k => v => setF(s => ({
      ...s,
      [k]: v
    }));
    const ev = k => e => up(k)(e.target.value);
    const submit = () => {
      const e = {};
      if (!f.name.trim()) e.name = 'Please enter your name';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Please enter a valid email';
      setErr(e);
      if (Object.keys(e).length) return;
      const h = buildMail(f);
      setHref(h);
      openMail(h);
      setSent(true);
      toast && toast('Opening your email app');
    };
    return React.createElement("section", {
      style: {
        background: 'var(--navy-800)'
      }
    }, React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '96px var(--gutter)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
        gap: 64
      }
    }, React.createElement("div", {
      style: {
        color: 'var(--paper)'
      }
    }, React.createElement(Eyebrow, {
      inverse: true
    }, "Book Us"), React.createElement("h1", {
      style: {
        margin: '20px 0 24px',
        font: '300 clamp(44px,5.4vw,72px)/1.02 var(--font-serif)',
        letterSpacing: '-.02em'
      }
    }, "Pipes for ", React.createElement("em", null, "your day.")), React.createElement("p", {
      style: {
        font: '400 18px/1.6 var(--font-sans)',
        color: 'var(--navy-200)',
        maxWidth: 420
      }
    }, "A solo piper for a ceremony, or the full band for a celebration, brigade function or community event. Tell us about the occasion and we'll be in touch."), React.createElement("div", {
      style: {
        marginTop: 48,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        font: '400 15px/1 var(--font-sans)'
      }
    }, React.createElement("a", {
      href: 'mailto:' + TO,
      target: "_blank",
      rel: "noopener",
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        color: 'inherit',
        textDecoration: 'none'
      }
    }, React.createElement(Icon, {
      name: "mail",
      size: 18,
      style: {
        color: 'var(--beacon-300)'
      }
    }), TO), React.createElement("span", {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, React.createElement(Icon, {
      name: "map-pin",
      size: 18,
      style: {
        color: 'var(--beacon-300)'
      }
    }), "Singapore"))), React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 22
      }
    }, sent ? React.createElement("div", {
      style: {
        padding: '48px 0',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16
      }
    }, React.createElement("div", {
      style: {
        font: '300 40px/1.1 var(--font-serif)',
        color: 'var(--navy-800)'
      }
    }, "Almost there."), React.createElement("p", {
      style: {
        margin: 0,
        font: '400 16px/1.6 var(--font-sans)',
        color: 'var(--text-muted)',
        maxWidth: 380
      }
    }, "Your email app should have opened with the enquiry filled in. Press send there to reach the band."), React.createElement("a", {
      href: href,
      target: "_blank",
      rel: "noopener",
      style: {
        font: '600 12px/1 var(--font-sans)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--navy-800)'
      }
    }, "Email app didn't open? Click here"), React.createElement("p", {
      style: {
        margin: 0,
        font: '400 14px/1.6 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, "Or write to ", TO, " directly."), React.createElement(Button, {
      variant: "secondary",
      onClick: () => setSent(false)
    }, "Edit enquiry")) : React.createElement(React.Fragment, null, React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
        gap: 16
      }
    }, React.createElement(Input, {
      label: "Name",
      placeholder: "Your name",
      value: f.name,
      onChange: ev('name'),
      error: err.name
    }), React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@example.com",
      value: f.email,
      onChange: ev('email'),
      error: err.email
    })), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
        gap: 16
      }
    }, React.createElement(Select, {
      label: "Event type",
      placeholder: "Choose one",
      value: f.type,
      onChange: ev('type'),
      options: ['Wedding', 'Brigade / school event', 'Church event', 'Festival', 'Corporate', 'Other']
    }), React.createElement(Input, {
      label: "Date",
      type: "date",
      value: f.date,
      onChange: ev('date')
    })), React.createElement(Radio, {
      name: "size",
      label: "Performance",
      options: ['Solo Bagpiper Performance', 'Duo Performance (1 Piper + 1 Snare Drummer)', 'Piping Quartet (4 Pipers)', 'Quintet Band (3 Pipers, 1 Snare, 1 Bass)', 'Full Band (Exact breakdown to be discussed)', 'Others (Let us know in remarks)'],
      value: f.perf,
      onChange: up('perf')
    }), React.createElement(RangeSlider, {
      label: "Budget",
      min: 200,
      max: 5000,
      step: 50,
      value: f.budget,
      onChange: up('budget'),
      format: v => 'S$' + v.toLocaleString(),
      hint: "Indicative only"
    }), React.createElement(Input, {
      label: "Remarks",
      multiline: true,
      rows: 3,
      placeholder: "Venue, timings, any tunes you'd like",
      value: f.remarks,
      onChange: ev('remarks')
    }), React.createElement(Checkbox, {
      label: "Keep me posted about band news",
      checked: f.news,
      onChange: up('news')
    }), React.createElement(Button, {
      size: "lg",
      variant: "primary",
      iconRight: "send",
      onClick: submit
    }, "Send enquiry"), React.createElement("p", {
      style: {
        margin: 0,
        font: '400 13px/1.5 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, "Sending opens your email app with the details filled in, addressed to ", TO, ".")))));
  }
  window.BookScreen = BookScreen;
})();