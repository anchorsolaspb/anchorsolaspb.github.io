// Reads events.json and turns each entry into the shape the Events and Home pages use.
// Events move from "Upcoming" to "Past" automatically once their last day has passed.
(function () {
  var MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var WD = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  function parse(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s || '');
    return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
  }
  function range(a, b) {
    if (a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth())
      return a.getDate() + '–' + b.getDate() + ' ' + MON[a.getMonth()] + ' ' + a.getFullYear();
    return a.getDate() + ' ' + MON[a.getMonth()] + ' ' + a.getFullYear() + ' – ' +
      b.getDate() + ' ' + MON[b.getMonth()] + ' ' + b.getFullYear();
  }
  function convert(list) {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var out = [];
    (Array.isArray(list) ? list : []).forEach(function (e, i) {
      var start = parse(e.date);
      if (!start || !e.title) return;
      var end = parse(e.end_date);
      if (end && end < start) end = null;
      out.push({
        id: i + 1,
        d: String(start.getDate()).padStart(2, '0'),
        m: MON[start.getMonth()].toUpperCase(),
        day: end ? range(start, end) : WD[start.getDay()],
        t: e.title,
        p: e.venue || 'Venue TBC',
        time: e.time || 'TBC',
        type: e.type === 'Competition' ? 'Competition' : 'Performance',
        st: [['success', 'accent', 'neutral'].indexOf(e.colour) >= 0 ? e.colour : 'neutral', e.status || 'Event'],
        past: (end || start) < today,
        _start: start
      });
    });
    // Upcoming soonest first, then past events most recent first
    out.sort(function (a, b) {
      if (a.past !== b.past) return a.past ? 1 : -1;
      return a.past ? b._start - a._start : a._start - b._start;
    });
    return out;
  }
  window.loadEvents = function () {
    return fetch('events.json', { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (list) { window.EVENTS = convert(list); })
      .catch(function (err) { console.warn('Could not load events.json', err); window.EVENTS = []; });
  };
})();
