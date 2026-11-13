# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, one deployable `index.html`, hosted on GitHub Pages (decided by Rayen). Sources in `src/`, joined by `build.py` (Python stdlib).

## Users

Viewers of Rayen's Instagram reels (@rayen.aljallouli): mainly Tunisians, in Tunisia and abroad, plus anyone using the English option. They arrive from a reel CTA, want a trip planned by Claude, and are not expected to know prompt writing. Target setup is a paid Claude plan with the desktop app in Cowork mode; a free claude.ai chat is the fallback.

## Product Purpose

A trip-brief form that turns the traveller's answers into a ready-to-paste master prompt for Claude. Claude then researches flights, stays, experiences, transport, food, entry rules and builds an interactive HTML travel dashboard. Success: the viewer fills the form once, pastes once, and gets a usable dashboard without follow-up questions.

## Positioning

The prompt is pre-filled and works in both setups: with a browser (Cowork, Claude in Chrome) Claude reads live prices from real sites, without one it gives price ranges marked as estimates. Claude says at the start which way it works. Language (English or Modern Standard Arabic) and currency (EUR or TND) are chosen by the user.

## Operating Context

1. Viewer opens the page from the reel.
2. Fills the brief: destination, departure, dates, travellers, budget, vibe, extras, nationality.
3. Creates and copies the prompt, pastes it into a Cowork chat or a normal claude.ai chat.
4. For every new trip they come back to the form. No Cowork project setup.

## Capabilities and Constraints

- Prompt is English, a close translation of a German master prompt (three steps: briefing, research, dashboard).
- Visa: researched only when the user gives a nationality.
- The dashboard is always one self-contained HTML file or artifact, built from a fixed template shipped inside the prompt.
- Nothing is booked or paid by Claude; research only.
- Open: whether Cowork reliably reads live prices (test by Rayen pending); whether a free plan's limit covers a whole plan.

## Brand Commitments

- Rayen's blue/yellow style from his carousels: night navy, one calm-yellow accent `#E9C46A`, flag blue for secondary meaning.
- Fonts: Tajawal (Latin and Arabic), JetBrains Mono for data. Free Google fonts only, not Thmanyah.
- Arabic texts are Modern Standard Arabic, so every Arab country can use them (Rayen, 2026-11-13).

## Evidence on Hand

- Source prompt (German) and the source reel `herr_tech / Da5msfeoBwI`; its demo dashboard shows price ranges, not live prices.
- No testimonials, user numbers or test results yet. Do not invent any.

## Product Principles

1. One paste, no follow-up questions.
2. Honest prices: a live price carries its source and time, an estimate is labelled as one.
3. The form asks only what changes the plan.
4. Same look for every user: design lives in the shipped template, not in the model's taste.

## Accessibility & Inclusion

Full RTL support for the Arabic version. Usable by keyboard and on phones.
