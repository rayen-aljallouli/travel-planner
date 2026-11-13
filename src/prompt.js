function fillTemplate(tpl, dashboard, on, vars) {
  return tpl
    .replace(/\[\[(\w+)\]\]\n?([\s\S]*?)\[\[\/\1\]\]\n?/g, (m, key, body) => (on[key] ? body : ''))
    .replace(/\{\{(\w+)\}\}/g, (m, key) => (key === 'dashboard' ? m : String(vars[key])))
    .replace('{{dashboard}}', () => dashboard.trim());
}

function travellers(d) {
  const one = (s, max) => String(s || '').replace(/\s+/g, ' ').trim().slice(0, max);
  const day = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  const count = (n, word, plural) => n + ' ' + (n === 1 ? word : plural);
  const list = (a) => (a.length > 1 ? a.slice(0, -1).join(', ') + ' and ' + a.at(-1) : a.join(''));
  const ages = (d.ages || []).map(Number);
  const by = (lo, hi) => ages.filter((a) => a >= lo && a <= hi).length;
  const pax = [count(d.adults + by(12, 17), 'adult', 'adults'), by(2, 11) && count(by(2, 11), 'child', 'children'), by(0, 1) && count(by(0, 1), 'infant', 'infants')].filter(Boolean);
  const cur = d.currency === 'TND' ? 'TND' : 'EUR';
  return {
    one, day, ages, cur,
    who: count(d.adults, 'adult', 'adults') + (ages.length ? ', ' + count(ages.length, 'child', 'children') + ' aged ' + list(ages.map((a) => (a ? String(a) : 'under 1'))) : ''),
    gf: (q) => 'https://www.google.com/travel/flights?hl=en&curr=' + cur + '&q=' + encodeURIComponent(q + ' for ' + list(pax)),
    booking: (ci, co) => 'checkin=' + ci + '&checkout=' + co + '&group_adults=' + d.adults + '&group_children=' + ages.length + ages.map((a) => '&age=' + a).join('') + '&no_rooms=1&selected_currency=' + cur,
    airbnb: (ci, co) => 'checkin=' + ci + '&checkout=' + co + '&adults=' + (d.adults + by(13, 17)) + '&children=' + by(2, 12) + '&infants=' + by(0, 1) + '&currency=' + cur,
    budget: d.budget ? d.budget + ' ' + d.currency + ' in total' : 'no fixed budget, find the best value for money in a solid mid-range',
    currency: d.currency === 'TND' ? 'Tunisian dinar (TND)' : 'euro (EUR)',
    lang_name: d.lang === 'ar' ? 'Modern Standard Arabic' : 'English',
    notes: one(d.notes, 500) || 'none',
  };
}

function buildPrompt(tpl, dashboard, d) {
  const x = travellers(d);
  const passport = x.one(d.nationality, 60);
  const on = { visa: !!passport, novisa: !passport, arabic: d.lang === 'ar', english: d.lang !== 'ar', kids: x.ages.length > 0 };
  return fillTemplate(tpl, dashboard, on, {
    dest: x.one(d.dest, 80),
    from: x.one(d.from, 80),
    start: x.day(d.start),
    end: x.day(d.end),
    nights: Math.round((Date.parse(d.end) - Date.parse(d.start)) / 864e5),
    flex: d.flex ? 'flexible by ±3 days' : 'fixed dates',
    who: x.who,
    gf_link: x.gf('Flights to DEST from ORIG on ' + d.start + ' through ' + d.end),
    booking_q: x.booking(d.start, d.end),
    airbnb_q: x.airbnb(d.start, d.end),
    budget: x.budget,
    vibes: d.vibes.length ? d.vibes.join(', ') : 'no preference',
    extras: d.extras.length ? d.extras.join(', ') : 'none',
    stay: d.stay || 'any',
    notes: x.notes,
    nationality: passport || 'not given',
    nationality_raw: passport,
    lang_name: x.lang_name,
    currency: x.currency,
  });
}

function buildUmrahPrompt(tpl, dashboard, d) {
  const x = travellers(d);
  const plus = (iso, n) => new Date(Date.parse(iso + 'T00:00:00Z') + n * 864e5).toISOString().slice(0, 10);
  const total = d.medina + d.makkah, end = plus(d.start, total);
  const city = { medina: ['Madinah', 'MED', d.medina], makkah: ['Makkah', 'JED', d.makkah] };
  const plan = (first, label) => {
    const [a, b] = first === 'medina' ? [city.medina, city.makkah] : [city.makkah, city.medina];
    const mid = plus(d.start, a[2]);
    const stay = (c, ci, co) => '- ' + c[0] + ': ' + c[2] + ' nights, ' + x.day(ci) + ' to ' + x.day(co) + '. Booking.com: `https://www.booking.com/searchresults.html?ss=' + c[0] + '&' + x.booking(ci, co) + '`';
    return [
      '**' + label + '**',
      '- Fly in to ' + a[1] + ' on ' + x.day(d.start) + ': `' + x.gf('One way flights to ' + a[1] + ' from ORIG on ' + d.start) + '`',
      stay(a, d.start, mid),
      '- Transfer ' + a[0] + ' to ' + b[0] + ' on ' + x.day(mid) + '.',
      stay(b, mid, end),
      '- Fly home from ' + b[1] + ' on ' + x.day(end) + ': `' + x.gf('One way flights to ORIG from ' + b[1] + ' on ' + end) + '`',
      '- Same-airport alternative, return via JED: `' + x.gf('Flights to JED from ORIG on ' + d.start + ' through ' + end) + '`',
    ].join('\n');
  };
  const order = d.medina ? d.order : 'makkah';
  const plans = !d.medina
    ? ['**Makkah only**', '- ' + d.makkah + ' nights in Makkah, ' + x.day(d.start) + ' to ' + x.day(end) + '. Booking.com: `https://www.booking.com/searchresults.html?ss=Makkah&' + x.booking(d.start, end) + '`', '- Return flight via JED: `' + x.gf('Flights to JED from ORIG on ' + d.start + ' through ' + end) + '`'].join('\n')
    : order === 'any' ? plan('medina', 'Plan A: Madinah first') + '\n\n' + plan('makkah', 'Plan B: Makkah first')
    : plan(order, order === 'medina' ? 'Madinah first' : 'Makkah first');
  const on = { arabic: d.lang === 'ar', english: d.lang !== 'ar', kids: x.ages.length > 0, anyorder: order === 'any' && d.medina > 0, medina: d.medina > 0, direct: d.stops === 'direct', stops: d.stops !== 'direct' };
  return fillTemplate(tpl, dashboard, on, {
    from: x.one(d.from, 80),
    start: x.day(d.start),
    end: x.day(end),
    nights: total,
    medina: d.medina,
    makkah: d.makkah,
    order: !d.medina ? 'Makkah only' : order === 'any' ? 'no preference, recommend the better order' : order === 'medina' ? 'Madinah first, then Makkah' : 'Makkah first, then Madinah',
    flights: d.stops === 'direct' ? 'direct flights only' : 'stops are fine',
    who: x.who,
    budget: x.budget,
    distance: { walk: 'walking distance to the Haram, under 500 m', km: 'up to about 1 km on foot', shuttle: 'further out with a hotel shuttle is fine' }[d.distance],
    room: { best: 'whatever room split suits our group best', double: 'double rooms', triple: 'triple rooms', quad: 'quad rooms' }[d.room],
    nationality: x.one(d.nationality, 60),
    residence: x.one(d.residence, 60),
    notes: x.notes,
    plans,
    lang_name: x.lang_name,
    currency: x.currency,
  });
}
if (typeof module !== 'undefined') module.exports = { buildPrompt, buildUmrahPrompt };
