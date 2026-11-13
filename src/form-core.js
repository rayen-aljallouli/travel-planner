const COMMON = {
  en: {
    langLegend: 'Language', curLegend: 'Currency',
    adults: 'Adults', kids: 'Children', less: 'One less', more: 'One more',
    ageN: 'Age of child {n}', agePick: 'Age', under1: 'Under 1', agesHint: 'Age on the day of travel. Many airlines and hotels charge by age.',
    eAges: 'Pick an age for every child.',
    noBudget: 'No fixed budget, find me the best value',
    summary: 'Your brief', blRoute: 'Route', blDates: 'Dates', blWho: 'Travellers', blBudget: 'Budget',
    phFrom: 'From', phDates: 'Pick your dates', bestValue: 'Best value',
    night: 'night', nights: 'nights', adult: 'adult', adultsN: 'adults', child: 'child', children: 'children',
    ready: 'Your prompt is ready', outLabel: 'Generated prompt',
    copy: 'Copy prompt', copied: 'Copied', copyFail: 'Copying was blocked. The text is selected: press Ctrl+C or Cmd+C.',
    chars: 'characters',
    eFrom: 'Add the city or airport you leave from.', eStart: 'Pick your departure date.',
    eForm: 'Some details are missing. Check the marked fields.',
    support: 'Support this project on Ko-fi',
    foot: 'Claude only researches. You book and pay yourself. Independent project, not affiliated with Anthropic.',
  },
  ar: {
    langLegend: 'اللغة', curLegend: 'العملة',
    adults: 'البالغون', kids: 'الأطفال', less: 'إنقاص واحد', more: 'إضافة واحد',
    ageN: 'عمر الطفل {n}', agePick: 'العمر', under1: 'أقل من سنة', agesHint: 'العمر يوم السفر. كثير من شركات الطيران والفنادق تحدد السعر حسب العمر.',
    eAges: 'اختر عمر كل طفل.',
    noBudget: 'لا توجد ميزانية محددة، ابحث لي عن أفضل قيمة',
    summary: 'ملخص رحلتك', blRoute: 'المسار', blDates: 'التواريخ', blWho: 'المسافرون', blBudget: 'الميزانية',
    phFrom: 'من', phDates: 'اختر التواريخ', bestValue: 'أفضل قيمة',
    night: 'ليلة', nights: 'ليالٍ', adult: 'بالغ', adultsN: 'بالغين', child: 'طفل', children: 'أطفال',
    ready: 'الـ prompt جاهز', outLabel: 'الـ prompt',
    copy: 'انسخ الـ prompt', copied: 'تم النسخ', copyFail: 'تعذّر النسخ تلقائيًا. النص محدد: اضغط Ctrl+C أو Cmd+C.',
    chars: 'حرفًا',
    eFrom: 'أضف المدينة أو المطار الذي تسافر منه.', eStart: 'اختر تاريخ الذهاب.',
    eForm: 'بعض المعلومات ناقصة. راجع الحقول المحددة.',
    support: 'ادعم هذا المشروع على Ko-fi',
    foot: 'Claude يبحث فقط. الحجز والدفع عليك. مشروع مستقل، لا علاقة له بـ Anthropic.',
  },
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const form = $('#brief'), out = $('#out');
let lang = 'en', created = false;
const t = (k) => I18N[lang][k] ?? COMMON[lang][k];
const saved = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const save = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
const plural = (n, one, many) => n + ' ' + t(n === 1 ? one : many);
const shortDate = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString(lang === 'ar' ? 'ar-TN-u-nu-latn' : 'en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' }).replace(' ', ' ');
const isolate = (s) => '⁨' + s + '⁩';

function syncAges() {
  const box = $('#ages'), n = Math.min(12, Math.max(0, Math.round(+form.kids.value) || 0));
  while (box.children.length > n) box.lastElementChild.remove();
  while (box.children.length < n) {
    const i = box.children.length + 1, f = document.createElement('div'), sel = document.createElement('select');
    f.className = 'f';
    f.append(Object.assign(document.createElement('label'), { htmlFor: 'age' + i }), sel);
    Object.assign(sel, { id: 'age' + i, name: 'age' });
    sel.setAttribute('aria-describedby', 'ages-err');
    sel.append(new Option('', ''), ...Array.from({ length: 18 }, (_, a) => new Option(String(a), String(a))));
    box.append(f);
  }
  [...box.children].forEach((f, i) => {
    f.querySelector('label').textContent = t('ageN').replace('{n}', i + 1);
    const o = f.querySelector('select').options;
    o[0].text = t('agePick');
    o[1].text = t('under1');
  });
  $('#ages-row').hidden = !n;
}

function whoLine(d) {
  const ages = d.ages.filter(Boolean).map((a) => (a === '0' ? '<1' : a));
  return plural(d.adults, 'adult', 'adultsN') + (d.ages.length ? ' · ' + plural(d.ages.length, 'child', 'children') + (ages.length ? ' (' + ages.join(', ') + ')' : '') : '');
}

function showProblems(list) {
  for (const id of ERR_IDS) {
    const hit = list.find((x) => x[0] === id), msg = $('#' + id + '-err');
    $('#' + id).setAttribute('aria-invalid', !!hit);
    msg.hidden = !hit;
    msg.textContent = hit ? t(hit[1]) : '';
  }
  const ages = list.some((x) => x[1] === 'eAges');
  $$('#ages select').forEach((s) => s.setAttribute('aria-invalid', ages && !s.value));
  $('#ages-err').hidden = !ages;
  $('#ages-err').textContent = ages ? t('eAges') : '';
  $('#form-err').hidden = !list.length;
  $('#form-err').textContent = list.length ? t('eForm') : '';
}

function setLine(id, text, set) {
  const row = $('#' + id);
  row.querySelector('dd').textContent = text;
  row.classList.toggle('set', set);
}

function refresh() {
  const d = read();
  brief(d);
  setLine('bl-who', whoLine(d), true);
  setLine('bl-budget', d.budget ? d.budget.toLocaleString('en-US') + ' ' + d.currency : t('bestValue'), !!d.budget || form.nobudget.checked);
  $('#cur').textContent = d.currency;
  form.budget.disabled = form.nobudget.checked;
  if (created) problems(d).length ? setCreated(false) : render(d);
}

function render(d) {
  out.value = build(d);
  $('#meta').textContent = out.value.length.toLocaleString('en-US') + ' ' + t('chars');
  $('#steps').replaceChildren(...t('steps').map((s) => Object.assign(document.createElement('li'), { textContent: s })));
}

function setCreated(on) {
  created = on;
  on ? $('.rail').prepend($('#result')) : $('.rail').append($('#result'));
  $('#result').hidden = !on;
  $('#create').hidden = on;
  $('#copy-err').hidden = true;
}

function applyLang() {
  document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-t]').forEach((el) => { el.textContent = t(el.dataset.t); });
  $$('[data-ph]').forEach((el) => { el.placeholder = t(el.dataset.ph); });
  $$('[data-al]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.al)); });
  if (!$('#form-err').hidden) showProblems(problems(read()));
  refresh();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = read(), list = problems(d);
  showProblems(list);
  if (list.length) return $('#' + list[0][0]).focus();
  render(d);
  setCreated(true);
  $('#result').focus({ preventScroll: true });
  $('.rail').scrollTop = 0;
  $('#copy').scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth' });
});

document.addEventListener('input', (e) => {
  if (e.target.name === 'lang') { lang = e.target.value; save('tp-lang', lang); return applyLang(); }
  if (e.target.name === 'currency') save('tp-cur', e.target.value);
  if (!$('#form-err').hidden) showProblems(problems(read()));
  refresh();
});
$$('[data-step]').forEach((b) => b.addEventListener('click', () => {
  const el = $('#' + b.dataset.for);
  el.value = Math.min(+el.max, Math.max(+el.min, (+el.value || 0) + +b.dataset.step));
  refresh();
}));

$('#copy').addEventListener('click', async () => {
  const label = $('#copy-label'), fail = $('#copy-err');
  let ok = false;
  try { await navigator.clipboard.writeText(out.value); ok = true; } catch {
    out.focus(); out.select();
    try { ok = document.execCommand('copy'); } catch {}
  }
  fail.hidden = ok;
  fail.textContent = ok ? '' : t('copyFail');
  if (!ok) return;
  label.textContent = t('copied');
  $('#copy').classList.add('done');
  setTimeout(() => { label.textContent = t('copy'); $('#copy').classList.remove('done'); }, 2200);
});

const today = new Date();
form.start.min = new Date(today - today.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
const savedLang = saved('tp-lang') || (navigator.language || '').slice(0, 2);
if (savedLang === 'ar') { lang = 'ar'; $('input[name=lang][value=ar]').checked = true; }
if (saved('tp-cur') === 'TND') $('input[name=currency][value=TND]').checked = true;
applyLang();
