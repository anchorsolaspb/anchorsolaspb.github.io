(() => {
  const {
    Input,
    Select,
    Radio,
    Button,
    Icon,
    RangeSlider
  } = window.AnchorSolasDesignSystem_897ee1;
  const TO = 'admin@anchorsolaspb.com';
  const KEY = ((window.ASPB_FORM || {}).accessKey || '').trim();
  const HAS_KEY = /^[0-9a-f-]{30,}$/i.test(KEY);
  const budgetText = b => 'S$' + b[0].toLocaleString() + ' to S$' + b[1].toLocaleString() + (b[1] >= 5000 ? '+' : '');
  const subjectOf = f => 'Booking enquiry: ' + (f.type || 'Performance') + (f.date ? ' on ' + f.date : '') + ' (' + f.name.trim() + ')';
  function buildMail(f) {
    const lines = ['Name: ' + f.name, 'Email: ' + f.email, 'Event type: ' + (f.type || 'Not specified'), 'Date: ' + (f.date || 'Not specified'), 'Performance: ' + f.perf, 'Budget: ' + budgetText(f.budget), 'Remarks: ' + (f.remarks || 'None')];
    return 'mailto:' + TO + '?subject=' + encodeURIComponent(subjectOf(f)) + '&body=' + encodeURIComponent(lines.join('\n'));
  }
  async function sendEnquiry(f, bot) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: KEY,
        subject: subjectOf(f),
        from_name: 'ASPB website',
        botcheck: bot,
        name: f.name.trim(),
        email: f.email.trim(),
        'Event type': f.type || 'Not specified',
        'Date': f.date || 'Not specified',
        'Performance': f.perf,
        'Budget': budgetText(f.budget),
        'Remarks': f.remarks.trim() || 'None'
      })
    });
    let data = {};
    try {
      data = await res.json();
    } catch (e) {}
    if (!res.ok || !data.success) throw new Error(data.body && data.body.message || data.message || 'Status ' + res.status);
  }
  function BookScreen({
    toast
  }) {
    const [status, setStatus] = React.useState('idle');
    const [err, setErr] = React.useState({});
    const [f, setF] = React.useState({
      name: '',
      email: '',
      type: '',
      date: '',
      perf: 'Solo Bagpiper Performance',
      budget: [500, 1500],
      remarks: ''
    });
    const [bot, setBot] = React.useState(false);
    const up = k => v => setF(s => ({
      ...s,
      [k]: v
    }));
    const ev = k => e => up(k)(e.target.value);
    const submit = async () => {
      const e = {};
      if (!f.name.trim()) e.name = 'Please enter your name';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Please enter a valid email';
      setErr(e);
      if (Object.keys(e).length) return;
      if (!HAS_KEY) {
        window.location.href = buildMail(f);
        setStatus('mailto');
        return;
      }
      setStatus('sending');
      try {
        await sendEnquiry(f, bot);
        setStatus('sent');
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } catch (x) {
        console.warn('Enquiry failed', x);
        setStatus('error');
      }
    };
    const reset = () => {
      setF(s => ({
        ...s,
        remarks: ''
      }));
      setStatus('idle');
    };
    const done = status === 'sent' || status === 'mailto';
    return React.createElement("section", {
      style: {
        background: 'var(--navy-800)'
      }
    }, React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'var(--sec-y) var(--gutter)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
        gap: 'clamp(40px,6vw,64px)'
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
    }), React.createElement("span", {
      className: "aspb-link"
    }, TO)))), React.createElement("div", {
      style: {
        background: 'var(--surface-card)',
        padding: 'clamp(24px,4vw,40px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 22
      }
    }, done ? React.createElement("div", {
      role: "status",
      style: {
        padding: '48px 0',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16
      }
    }, status === 'sent' ? React.createElement(React.Fragment, null, React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'var(--green-100)',
        color: 'var(--green-600)',
        display: 'grid',
        placeItems: 'center'
      }
    }, React.createElement(Icon, {
      name: "check",
      size: 28
    })), React.createElement("div", {
      style: {
        font: '300 40px/1.1 var(--font-serif)',
        color: 'var(--navy-800)'
      }
    }, "Enquiry sent."), React.createElement("p", {
      style: {
        margin: 0,
        font: '400 16px/1.6 var(--font-sans)',
        color: 'var(--text-muted)',
        maxWidth: 380
      }
    }, "Thanks, ", f.name.trim(), ". The band will reply to ", React.createElement("b", {
      style: {
        color: 'var(--navy-800)',
        fontWeight: 600
      }
    }, f.email.trim()), ".")) : React.createElement(React.Fragment, null, React.createElement("div", {
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
      href: buildMail(f),
      className: "aspb-link",
      style: {
        textDecoration: 'none',
        font: '600 12px/1 var(--font-sans)',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--navy-800)'
      }
    }, "Email app didn't open? Click here")), React.createElement(Button, {
      variant: "secondary",
      onClick: reset
    }, "Send another enquiry")) : React.createElement(React.Fragment, null, React.createElement("div", {
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
    }), React.createElement("input", {
      type: "checkbox",
      name: "botcheck",
      tabIndex: -1,
      autoComplete: "off",
      "aria-hidden": "true",
      checked: bot,
      onChange: e => setBot(e.target.checked),
      style: {
        position: 'absolute',
        left: -9999,
        width: 1,
        height: 1,
        opacity: 0
      }
    }), status === 'error' && React.createElement("div", {
      role: "alert",
      style: {
        background: 'var(--red-100)',
        color: 'var(--red-600)',
        padding: '14px 16px',
        font: '400 14px/1.5 var(--font-sans)'
      }
    }, "The enquiry didn't go through. Check your connection and try again, or ", React.createElement("a", {
      href: buildMail(f),
      style: {
        color: 'inherit',
        fontWeight: 600
      }
    }, "send it by email instead"), "."), React.createElement(Button, {
      size: "lg",
      variant: "primary",
      iconRight: status === 'sending' ? undefined : 'send',
      disabled: status === 'sending',
      onClick: submit
    }, status === 'sending' ? 'Sending…' : 'Send enquiry'), React.createElement("p", {
      style: {
        margin: 0,
        font: '400 13px/1.5 var(--font-sans)',
        color: 'var(--text-muted)'
      }
    }, HAS_KEY ? 'Your enquiry goes straight to ' + TO + '.' : 'Sending opens your email app with the details filled in, addressed to ' + TO + '.')))));
  }
  window.BookScreen = BookScreen;
})();