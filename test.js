const assert = require('node:assert');
const fs = require('node:fs');
const { buildPrompt, buildUmrahPrompt } = require('./src/prompt.js');

const tpl = fs.readFileSync('src/prompt.md', 'utf8');
const dash = fs.readFileSync('src/dashboard.html', 'utf8');
const base = {
  dest: 'Istanbul', from: 'Tunis (TUN)', start: '2027-03-12', end: '2027-03-19', flex: true,
  adults: 2, ages: ['0', '8', '14'], budget: 1800, currency: 'TND', vibes: ['Food'], extras: [], stay: 'hotel',
  notes: 'cost $& and $1 stay literal', nationality: 'Tunisian', lang: 'ar',
};
const withoutTemplate = (p) => p.slice(0, p.indexOf('## DASHBOARD TEMPLATE'));

const live = buildPrompt(tpl, dash, base);
assert(live.includes('(7 nights)'), '12 to 19 March is 7 nights');
assert(live.includes('Fri, 12 Mar 2027'), '12 March 2027 is a Friday');
assert(live.includes('2 adults, 3 children aged under 1, 8 and 14'));
assert(live.includes('q=Flights%20to%20DEST%20from%20ORIG%20on%202027-03-12%20through%202027-03-19%20for%203%20adults%2C%201%20child%20and%201%20infant'), 'teen flies as adult, under 2 as infant');
assert(live.includes('&curr=TND&'));
assert(live.includes('group_adults=2&group_children=3&age=0&age=8&age=14&no_rooms=1&selected_currency=TND'));
assert(live.includes('adults=3&children=1&infants=1&currency=TND'), 'Airbnb: 13+ adult, 2-12 child');
assert(live.includes('**Children**'));
assert(live.includes('STEP 2B: AVAILABILITY CHECK') && live.includes('No confirmation on the detail page means no recommendation.'));
assert(live.includes('has no top pick and no winners at all'));
assert(live.includes('1800 TND in total'));
assert(live.includes('cost $& and $1 stay literal'));
assert(live.includes('**With a browser:**') && live.includes('**Without a browser:**') && live.includes('trip-dashboard.html'));
assert(live.includes('I hold a Tunisian passport') && !live.includes('do not research visas'));
assert(live.includes('dir="rtl"') && !live.includes('messages to me in English'));
assert(live.includes('<section id="p7"'), 'dashboard template is embedded');
assert(!/\[\[|\{\{|undefined/.test(withoutTemplate(live)), 'no leftover markers');

const est = buildPrompt(tpl, dash, { ...base, lang: 'en', nationality: '  ', budget: 0, ages: [], adults: 1, currency: 'EUR' });
assert(est.includes('do not research visas') && !est.includes('I hold a'));
assert(est.includes('messages to me in English') && !est.includes('نظرة عامة'));
assert(est.includes('Travellers: 1 adult\n'));
assert(est.includes('no fixed budget'));
assert(est.includes('for%201%20adult') && est.includes('group_children=0&no_rooms') && !est.includes('**Children**'));
assert(!est.includes('Skyscanner,'));
assert(!/\[\[|\{\{|undefined/.test(withoutTemplate(est)), 'no leftover markers');

const utpl = fs.readFileSync('src/umrah-prompt.md', 'utf8');
const ub = {
  from: 'Tunis (TUN)', start: '2027-02-10', medina: 4, makkah: 5, order: 'medina', stops: 'direct',
  adults: 2, ages: ['1'], budget: 0, currency: 'EUR', distance: 'walk', room: 'triple', notes: '',
  nationality: 'Tunisian', residence: 'Germany', lang: 'en',
};
const u1 = buildUmrahPrompt(utpl, 'DASH', ub);
assert(u1.includes('(9 nights)') && u1.includes('Fri, 19 Feb 2027'), '10 Feb + 9 nights = Fri 19 Feb');
assert(u1.includes('Fly in to MED on Wed, 10 Feb 2027'));
assert(u1.includes(encodeURIComponent('One way flights to MED from ORIG on 2027-02-10 for 2 adults and 1 infant')));
assert(u1.includes('ss=Madinah&checkin=2027-02-10&checkout=2027-02-14&group_adults=2&group_children=1&age=1'));
assert(u1.includes('ss=Makkah&checkin=2027-02-14&checkout=2027-02-19'));
assert(u1.includes(encodeURIComponent('One way flights to ORIG from JED on 2027-02-19')));
assert(u1.includes('Direct flights only.') && !u1.includes('Stops are fine.') && !u1.includes('Compare Plan A'));
assert(u1.includes('Germany') && u1.includes('Hotels in Madinah') && u1.includes('triple rooms'));
assert(!/\[\[|\{\{|undefined/.test(u1), 'no leftover markers');

const u2 = buildUmrahPrompt(utpl, 'DASH', { ...ub, order: 'any', stops: 'stops', lang: 'ar' });
assert(u2.includes('Plan A: Madinah first') && u2.includes('Plan B: Makkah first') && u2.includes('Compare Plan A'));
assert(u2.includes('Fly in to JED') && u2.includes('Stops are fine.') && u2.includes('دليل العمرة') && u2.includes('Modern Standard Arabic'));

const u3 = buildUmrahPrompt(utpl, 'DASH', { ...ub, medina: 0, order: 'medina' });
assert(u3.includes('Makkah only') && !u3.includes('Hotels in Madinah') && !u3.includes('MED'));
assert(!/\[\[|\{\{|undefined/.test(u3), 'no leftover markers');

console.log('ok', live.length, est.length, u1.length);
