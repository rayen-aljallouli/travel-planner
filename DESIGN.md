---
name: Trip Planner for Claude
description: A night-navy trip brief and travel dashboard where one calm yellow marks what is set, picked, or the next action.
colors:
  crane: "#E9C46A"
  on-crane: "#1A1405"
  flag: "#8DB4FF"
  sea: "#050B1C"
  panel: "#0B1730"
  field: "#0C1A38"
  selected-fill: "#1F3672"
  line: "#1E2E57"
  line-hi: "#566BA3"
  rail-top: "#0F2150"
  press-fill: "#13244D"
  crane-hi: "#F0CF7E"
  glow: "rgba(45,107,255,.3)"
  ink: "#F3F6FC"
  body: "#DCE4F2"
  steel: "#8FA3C7"
  dim: "#7C90B9"
  err: "#FF9B8A"
typography:
  display:
    fontFamily: "Tajawal, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(2.75rem, 10vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Tajawal, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(2.1rem, 6vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Tajawal, Segoe UI, Tahoma, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 800
    lineHeight: 1.15
  subtitle:
    fontFamily: "Tajawal, Segoe UI, Tahoma, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 800
    lineHeight: 1.15
  body:
    fontFamily: "Tajawal, Segoe UI, Tahoma, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "Tajawal, Segoe UI, Tahoma, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.6
  note:
    fontFamily: "Tajawal, Segoe UI, Tahoma, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.6
  section-title:
    fontFamily: "Tajawal, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.15
  total:
    fontFamily: "Tajawal, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(1.6rem, 5vw, 2.6rem)"
    fontWeight: 800
  data:
    fontFamily: "JetBrains Mono, Tajawal, ui-monospace, monospace"
    fontSize: "0.98rem"
    fontWeight: 500
    lineHeight: 1.45
  data-strong:
    fontFamily: "JetBrains Mono, Tajawal, ui-monospace, monospace"
    fontSize: "1.3rem"
    fontWeight: 700
  data-small:
    fontFamily: "JetBrains Mono, Tajawal, ui-monospace, monospace"
    fontSize: "0.85rem"
    fontWeight: 700
rounded:
  check: "6px"
  badge: "8px"
  button: "12px"
  field: "14px"
  card: "18px"
  rail: "22px"
  pill: "99px"
spacing:
  label-gap: "0.45rem"
  chip-gap: "0.55rem"
  row: "1.1rem"
  card: "1.35rem"
  rail: "1.5rem"
  section: "3.25rem"
  column: "4rem"
components:
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  stepper:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.field}"
    height: "3.25rem"
  chip:
    backgroundColor: "{colors.field}"
    textColor: "{colors.steel}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  chip-selected:
    backgroundColor: "{colors.crane}"
    textColor: "{colors.on-crane}"
  segmented:
    backgroundColor: "{colors.field}"
    textColor: "{colors.steel}"
    typography: "{typography.label}"
    rounded: "13px"
    padding: "3px"
  segmented-selected:
    backgroundColor: "{colors.selected-fill}"
    textColor: "{colors.ink}"
    rounded: "9px"
    padding: "0.4rem 0.9rem"
  button-primary:
    backgroundColor: "{colors.crane}"
    textColor: "{colors.on-crane}"
    rounded: "{rounded.field}"
    height: "3.5rem"
    width: "100%"
  button-primary-hover:
    backgroundColor: "#F0CF7E"
    textColor: "{colors.on-crane}"
  button-primary-done:
    backgroundColor: "{colors.flag}"
    textColor: "{colors.on-crane}"
  button-link:
    backgroundColor: "{colors.crane}"
    textColor: "{colors.on-crane}"
    rounded: "{rounded.button}"
    padding: "0.6em 1.15em"
  button-link-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.crane}"
    rounded: "{rounded.button}"
    padding: "0.6em 1.15em"
  rail:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.body}"
    rounded: "{rounded.rail}"
    padding: "1.5rem"
    width: "25rem"
  card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.body}"
    rounded: "{rounded.card}"
    padding: "1.35rem"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    rounded: "{rounded.pill}"
    padding: "0.15em 0.7em"
  tag-pick:
    backgroundColor: "{colors.crane}"
    textColor: "{colors.on-crane}"
  tag-live:
    backgroundColor: "transparent"
    textColor: "{colors.flag}"
  score-badge:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.data-small}"
    rounded: "{rounded.badge}"
    padding: "0.2em 0.55em"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    padding: "1rem 0.9rem 0.8rem"
  tab-selected:
    backgroundColor: "transparent"
    textColor: "{colors.crane}"
---

# Design System: Trip Planner for Claude

## Overview

**Creative North Star: "The Lit Brief"**

This is the web rendition of Rayen's carousel world: a night-navy ground with one blue glow in a top corner, cool grey-blue text, and a single calm yellow. Everything sits dim until it means something. A chip is dim until chosen, a brief-line row is dim until its field is filled, a card is quiet until it is the recommendation. Then it lights yellow. The same yellow carries the one action on screen.

The system covers two surfaces that share one token set: the trip-brief form (a two-column checkout shape, form on one side and a sticky summary rail ending in one button on the other) and the travel dashboard (a destination hero, a sticky tab bar, then tables and cards). Both are dark only, flat, and dense enough to read as a tool: 1px lines, tonal layers, generous field height, no decoration that does not carry state.

Words are set in Tajawal in both scripts. JetBrains Mono appears only where the content is trip data or the prompt itself: route, dates, prices, counts, scores, times.

**Key Characteristics:**
- Dark only: night-navy ground, three close tonal layers (ground, panel, field) separated by 1px navy lines.
- One yellow, used for "set", "picked" and "act". One blue for focus, links, live-price tags and the copied state.
- Two fonts with a hard split: Tajawal for language, JetBrains Mono for data.
- Flat at rest. A shadow appears only when a yellow button lifts on hover.
- Built for both directions: every offset is a logical property and the directional details mirror in RTL.
- Motion is state feedback with an expo-out curve; all of it switches off under reduced motion.

## Colors

A cold, low-chroma navy scale with one warm accent and one cool accent; nothing else carries hue.

### Primary
- **Crane Yellow** (`crane`): the lit state and the action. Fills selected chips, checked checkboxes, the primary button and "Top pick" / "Must-do" tags. As a line or text colour it marks a filled brief-line row, the selected tab, the recommended card's border, the total rule, step numbers, budget bars and list markers. Also the caret and the focus ring of text fields.
- **On-Crane** (`on-crane`): near-black warm brown, the only text colour allowed on a yellow or flag-blue fill.

### Secondary
- **Flag Blue** (`flag`): secondary meaning. Focus ring on every control that is not a text field, link colour, the "Live" price tag, and the primary button's fill for 2.2 s after a successful copy.

### Neutral
- **Night Sea** (`sea`): the ground. Never flat on the page body: it carries a vertical gradient (#081636 at the top through `sea` to #02050D) and one radial blue glow (rgba(45,107,255,.3)) in a top corner. Used flat for the sticky tab bar.
- **Panel Navy** (`panel`): raised containers: the rail, cards, table wrappers. The rail adds a short lighter wash at its top (#0F2150 fading into `panel` by 55%).
- **Field Navy** (`field`): the fill of every control: inputs, stepper, chips, segmented track, score badge, bar tracks.
- **Selected Fill** (`selected-fill`): the quiet, non-yellow selection: the active segment of a segmented switch and a pressed stepper button. Unnamed in the source; it is a literal there.
- **Line** (`line`): every resting border and divider, 1px.
- **Line High** (`line-hi`): the resting border of every form control, the unchecked checkbox and radio ring, the score badge border, the scrollbar thumb.
- **Ink** (`ink`): headings, labels, typed values, prices.
- **Body** (`body`): running text.
- **Steel** (`steel`): supporting text: lede, hints, unselected chip and tab labels, table headers, notes, placeholders' louder sibling.
- **Dim** (`dim`): placeholders and unfilled brief-line values. The quietest text; it still clears 4.5:1 on `field` and `panel`.
- **Error Coral** (`err`): error messages and the border of an invalid field. Form only.

### Named Rules
**The Lit Rule.** Yellow is a state, not a decoration. It means set, picked, or act. An element that is none of those stays navy and steel.

**The Dark Text On Light Fill Rule.** Any yellow or flag-blue fill takes `on-crane` text. Ink and body never sit on a filled accent.

**The One Glow Rule.** One radial blue glow per page, in the top corner at the inline end, fixed to the viewport. No second glow, no glow under components.

## Typography

**Display Font:** Tajawal (with Segoe UI, Tahoma, sans-serif)
**Body Font:** Tajawal (same stack)
**Label/Mono Font:** JetBrains Mono (with Tajawal, ui-monospace, monospace)

**Character:** Tajawal carries Latin and Arabic with one voice, set heavy: body at 500, labels at 700, headings at 800. JetBrains Mono is the instrument face for anything the trip produced. Tajawal sits second in the mono stack so Arabic words inside a data line stay in the brand face.

### Hierarchy
- **Display** (800, clamp(2.75rem, 10vw, 5.75rem), 1.15, -0.02em): the dashboard's destination name only.
- **Headline** (800, clamp(2.1rem, 6vw, 3.4rem), 1.15, -0.02em): the form's page title.
- **Title** (800, 1.45rem in the form; clamp(1.5rem, 4vw, 2rem) in the dashboard; 1.15): section headings. The rail's result heading steps down to 1.3rem.
- **Subtitle** (800, 1.2rem, 1.15): card names, day names, the hidden-gem heading.
- **Body** (500, 1.0625rem, 1.6): running text. Paragraphs cap at 70ch, the lede at 46ch.
- **Label** (700, 1.0625rem): field labels, legends, chip and segment text, tab labels (1rem), table headers (0.9rem in steel).
- **Note** (500, 0.9 to 0.95rem, steel): hints, notes, footer.
- **Data** (mono 500, 0.98rem, 1.45): brief-line values. Mono 500 at 0.8 to 0.875rem for the prompt preview, the meta line and hero fact pills.
- **Data Strong** (mono 700, 1.3rem): prices. The cost total runs at clamp(1.6rem, 5vw, 2.6rem), weight 800.
- **Data Small** (mono 700, 0.85 to 0.95rem): score badge, currency suffix, step numbers, the footer handle.

### Named Rules
**The Mono Is Data Rule.** JetBrains Mono is reserved for trip data and the prompt text: numbers, dates, times, prices, routes, scores, counts, the handle. Labels, headings, buttons and prose never use it.

**The Tabular Numbers Rule.** Numbers that can be compared (prices, durations, counts) use tabular figures and do not wrap.

**The Heavy Floor Rule.** No text below weight 500. The hierarchy is 500 / 700 / 800.

## Layout

The form page is a 74rem container with fluid side padding (clamp(1rem, 4vw, 2.5rem)). Its top bar puts the title and lede at the start and the language and currency switches at the end, wrapping on narrow screens. From 62rem the form becomes two columns: a fluid form column and a fixed 25rem rail, 4rem apart, with the rail sticky 1.5rem from the top and scrolling internally if taller than the viewport. Below 62rem the rail follows the form in a single column. Field pairs sit side by side from 34rem and stack below it.

The dashboard is a 68rem container: hero, a full-width sticky tab bar, then one panel at a time. Card grids are auto-fill with an 18rem minimum, so they fall to one column on a phone without a breakpoint. Tables keep a 44rem minimum width inside a horizontally scrolling wrapper. At 40rem the day rows stack and the budget bar's label column narrows.

Rhythm: 0.45rem between a label and its control, 1.1rem between rows, 3.25rem between form sections, 2.75rem above a dashboard section heading. Controls are 3.25rem tall, the primary button 3.5rem.

## Elevation & Depth

Flat. Depth is tonal: ground, then panel, then field, each one small step lighter, each bounded by a 1px line. The page's only gradients are the ground itself and the wash at the top of the rail.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 12px 24px -10px rgba(0,0,0,.7)`): under a yellow button on hover, together with a 2px rise. The dashboard's link button uses a slightly smaller copy (`0 10px 22px -8px rgba(0,0,0,.65)`).

### Named Rules
**The Flat At Rest Rule.** Nothing casts a shadow at rest. The lift shadow belongs to yellow buttons on hover and to nothing else.

## Shapes

Soft, with radius growing with the size of the thing: checkbox 6px, score badge 8px, link button 12px, fields and the full-width button 14px, cards and table wrappers 18px, the rail 22px. Chips, tags, fact pills and bar tracks are full pills. The segmented switch nests a 9px segment inside a 13px track with 3px between them.

Borders are 1px solid. Two exceptions carry meaning: a dashed border marks something unverified or off the main list (the estimate tag, the hidden-gem box), and a 3px bottom border marks the selected tab. The cost total sits on a 2px yellow rule.

Icons are inline SVG strokes: 24px viewBox, 2.4 stroke, round caps and joins, drawn at 1.1rem in the current text colour. The radio dot and the checkmark are drawn in CSS.

## Components

### Inputs / Fields
- **Style:** `field` fill, 1px `line-hi` border (3:1 against every ground), softly rounded (14px), 3.25rem tall, ink text at 1.05rem, yellow caret. The label sits above in ink 700; hints and errors sit below at 0.95rem.
- **Hover:** border steps to `steel`.
- **Focus:** 2px yellow outline at 1px offset and a yellow border.
- **Error:** coral border via `aria-invalid`, coral message below, a summary message under the submit button. Validation runs on submit and then live.
- **Disabled:** 45% opacity, not-allowed cursor.
- **Number fields:** mono, tabular, centred in a stepper, native spinners removed.
- **Select:** native, with a steel chevron SVG at the inline end.
- **Money field:** a mono currency code pinned inside the field at the inline end, following the currency switch.

### Checkbox
A 1.4rem square (6px radius) with a `line-hi` border on `field`. Checked: yellow fill and a dark checkmark that scales in over 0.25s. Its label is body weight, not label weight.

### Stepper
One bordered field split in three: minus, a centred mono number, plus. The buttons are steel icons that turn ink on a slightly lighter fill on hover and `selected-fill` when pressed. The whole stepper takes a yellow border on focus within.

### Chips
- **Style:** full pills on `field` with a `line-hi` border and steel 700 text.
- **Hover / press:** border to `steel`, text to ink; scales to 0.96 while pressed.
- **Selected:** yellow fill and border, `on-crane` text. Multi-select; they are checkboxes underneath.

### Segmented Switch
A `field` track (13px) holding two or more segments (9px). The active segment is `selected-fill` with ink text; the rest are steel, ink on hover. It is the one selection that does not turn yellow: it sets a page-wide preference (language, currency), not a part of the trip.

### Buttons
- **Primary (form):** full width, 3.5rem tall, 14px radius, yellow fill, `on-crane` text at 800 / 1.1rem, with a trailing or leading stroke icon.
- **Hover / press:** rises 2px, lightens to #F0CF7E, gains the lift shadow; scales to 0.98 when pressed.
- **Focus:** flag-blue ring at 4px offset.
- **Done:** fill switches to flag blue and the label to "Copied" for 2.2 s.
- **Link button (dashboard):** inline, 12px radius, same yellow and the same hover rise. Its ghost variant is yellow text inside a 1px yellow inset line, used for secondary "Details" links.

### Brief Line (signature)
A definition list at the top of the rail: a steel 700 term in a fixed 5.25rem column and a mono value beside it, each row on a 1px line. Unfilled, the value is a dim placeholder. When the row's fields are filled, the value turns yellow over 0.4s and a 1px yellow line draws across the row's bottom edge from the start side over 0.7s. Values join facts with a middle dot and keep number-and-unit pairs together.

### Rail
The summary container: `panel` with the top wash, a `line` border, 22px radius, 1.5rem padding. It holds the brief line and the primary button. After the prompt is created, a result block rises in at the top (0.7s, 16px, fade): a heading, a three-line faded mono preview of the prompt, a mono meta line, the copy button, and a numbered step list.

### Step List
Numbered rows on `line` top rules, the number in yellow mono 700 in a narrow first column. Shared by the form's "where to paste" steps and the dashboard's booking order.

### Dashboard Tabs
A sticky bar on flat `sea` with `line` rules above and below; it scrolls sideways on a phone with no visible scrollbar. Tabs are steel 700 text, ink on hover; the selected tab is yellow with a 3px yellow underline. Arrow keys move between tabs and reverse in RTL. Panels fade in over 0.35s.

### Hero Facts
A wrap of mono pills (0.875rem) under the destination name, `line` border and steel text; the first, the dates, is yellow with a half-strength yellow border.

### Table
Inside a `panel` wrapper with a `line` border and 18px radius. Headers are steel 0.9rem 700, rows divided by `line`, cells top-aligned and aligned to the start. The recommended row gets a 7% yellow wash. Cost tables align the last column to the end.

### Cards
- **Corner Style:** 18px.
- **Background:** `panel`, 1px `line` border, 1.35rem padding, 0.7rem between parts.
- **Hover:** border to `line-hi`. No lift.
- **Recommended:** yellow border.
- **Anatomy:** a head row (name, score badge), a tag, a mono price with a small steel unit, body text, pros and cons lists marked with mono plus and minus signs (yellow and steel), a steel note, and a link button pinned to the bottom.

### Tags
Small pills (0.8rem, 700). Default: `line` border, steel text. Pick / must-do: yellow fill, `on-crane` text. Live price: flag-blue border and text. Estimate: the default tag with a dashed border. A price carries exactly one of live or estimate.

### Score Badge
A compact mono 700 badge (8px) on `field` with a `line-hi` border and a small star drawn as an SVG mask in the text colour, before the number.

### Budget Bars and Totals
A bar row is a label, a pill track on `field` with a yellow fill that grows from zero over 0.9s, and a mono amount. The cost total is one large line, label at the start and mono amount at the end, on a 2px yellow rule.

### Hidden Gem
One dashed yellow box (18px) with a 6% yellow wash, for the single off-list tip.

### Motion
One easing for anything that moves: `cubic-bezier(.16,1,.3,1)`. Colour and border changes take 0.2 to 0.25s; the brief-line draw, the result rise and the bar growth take 0.7 to 0.9s. Only transform, opacity, colour and the bar's width animate. Under `prefers-reduced-motion` every animation and transition is removed.

### RTL
The Arabic version sets `dir="rtl"` on the root and everything follows from logical properties. What mirrors explicitly: the corner glow moves to the other top corner, the select chevron moves to the other side, the brief-line underline draws from the right, the create button's arrow flips, and the route arrow in the brief line points left. What stays left-to-right: the generated prompt (English), clock times, and the Instagram handle. Place names in the route are bidi-isolated. Numerals stay Latin in both languages.

## Do's and Don'ts

### Do:
- **Do** keep an element dim (field fill, line border, steel text) until it is set, picked or the action; then light it with `crane`.
- **Do** put `on-crane` text on every yellow or flag-blue fill.
- **Do** set every number, date, time, price and route in JetBrains Mono with tabular figures; set every word of interface in Tajawal.
- **Do** build depth from the three navy layers and 1px `line` borders.
- **Do** use logical properties (inline start and end) for every offset, padding and alignment, and mirror any directional icon or draw-in under RTL.
- **Do** give every control a visible focus ring: yellow on text fields, flag blue on everything else.
- **Do** mark a price as either live (flag-blue tag with source and time) or estimate (dashed tag with source).
- **Do** remove all animation and transition under `prefers-reduced-motion`.

### Don't:
- **Don't** introduce a second warm accent or a third hue; the palette is navy, one yellow, one blue, and coral for errors only.
- **Don't** use yellow as a fill on something that is not selected, recommended or the primary action.
- **Don't** mark more than one option per list as the pick; the yellow border, wash and tag belong to a single recommendation.
- **Don't** set labels, headings, buttons or prose in JetBrains Mono.
- **Don't** set text lighter than weight 500.
- **Don't** add a shadow to a resting surface; the only shadow is the hover lift under a yellow button.
- **Don't** add a light theme; the system is dark only (`color-scheme: dark`).
- **Don't** use physical left and right for layout; the two existing exceptions are deliberate (the English prompt preview and LTR-wrapped times).
