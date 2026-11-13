---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["src/dashboard.html","src/form.html"]
---

# Trip-brief form and travel dashboard

Scope: `index.html` (the form, built from `src/form.html`) and `src/dashboard.html` (the dashboard template shipped inside the prompt).
Mode: Operate (form); the dashboard is Read with Operate tabs.

Audience and job: a reel viewer fills a trip brief once, copies the generated prompt, pastes it into Claude.
Task: required fields are destination, departure, start and end date. Everything else has a default.
States: empty, partly filled, invalid (end before start, missing required), prompt ready, copied, copy failed.
Constraints: English and Modern Standard Arabic (RTL), EUR or TND, phone and desktop, single static file.
World: inherited from Rayen's carousel system (pinned by him), no new identity.
Structure chosen directly, no concept roll: the request fixed fields, flow and world.

Unresolved: page name is a working title; every Arabic string needs Rayen's review.

## Direction contract

THESIS: A checkout-shaped brief: form on one side, a summary rail on the other that lights up as the trip takes shape and ends in one button. It refuses the centred wizard card with a progress bar.

OWN-WORLD: Night navy ground with a blue glow in one top corner; one calm yellow that means "set" or "act"; flag blue for secondary meaning; Tajawal for words, JetBrains Mono only for trip data and the prompt text. Chips are dim until chosen, then lit yellow, the same dim-versus-lit logic as the carousel's wall slide.

STORY: The visitor sees what to fill in, watches the brief line light up, creates the prompt, copies it, and reads three steps telling them where to paste.

FIRST VIEWPORT: Top bar with page title left, language and currency switches right. Below, two columns on desktop: the form (trip section first: where to, from, dates) and a sticky rail holding the lit brief line and the create button. On a phone the rail follows the form. On desktop viewports shorter than about 900px the create button arrives once the form is scrolled; the rail is sticky from then on.

FORM: Standard form controls and a summary rail, the first structure on the list; signature move is the brief line whose segments switch from dim to lit yellow as fields are filled. seed: none (roll skipped: the user pinned the world, and the request fixed fields and flow)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
