# Trip Planner and Umrah Planner for Claude

**Let Claude plan your trip. You fill in a short form, Claude does the research and hands you a complete travel dashboard.**

Planning a trip usually means hours of searching, 50 open Chrome tabs and a headache: flights on one site, hotels on another, visa rules somewhere else, and nothing in one place. These two free tools hand that work to Claude.

| Tool | What Claude plans for you |
| --- | --- |
| **[Trip planner](https://rayen-aljallouli.github.io/travel-planner/trip.html)** | Flights, places to stay, experiences, getting around, food, a day-by-day plan, costs and entry rules for any destination. |
| **[Umrah planner](https://rayen-aljallouli.github.io/travel-planner/umrah.html)** | Your nights in Madinah and Makkah, flights, hotels near the Haram, the train between the cities, visa and Nusuk, agency packages compared with booking it yourself, and an Umrah checklist with sources. |

Both come in English and Arabic, with prices in EUR or TND.

## How it works

1. **Fill in the form.** Where you fly from, your dates, who travels (with children's ages), your budget and what matters to you.
2. **Copy the prompt.** The form turns your answers into a long, ready-made instruction for Claude, a "master prompt", with search links already filled in with your dates and travellers.
3. **Paste it into Claude.** Claude researches and builds an interactive dashboard with tabs: overview, flights, hotels, day plan, costs and tips. Every offer has a button that opens the booking site.

Where you paste it decides how good the prices are:

- **Cowork in the Claude desktop app** (paid plan): Claude opens the booking sites in a browser, reads the real prices and notes where and when it read them. It is told to check each offer on its own page before recommending it.
- **A normal chat on claude.ai**: Claude can only search the web, so it gives price ranges marked as estimates, and nothing is marked as the top pick until you check it yourself.

Claude only researches. It never books, pays or logs in anywhere. You book and pay yourself.

## Support

If the tools saved you time, you can buy me a coffee:

[![Support me on Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/rayen_aljallouli)

## For developers

### Files

| Path | What it is |
| --- | --- |
| `trip.html` | The built trip planner page. |
| `umrah.html` | The built Umrah planner page. |
| `index.html` | Forwards the bare site address to `trip.html`. |
| `src/form.html`, `src/umrah-form.html` | The two forms: markup and texts in both languages. |
| `src/form.css`, `src/form-core.js` | Styles and form logic shared by both pages. |
| `src/umrah-prompt.md` | The Umrah master prompt template. |
| `src/umrah-dashboard-body.html` | The Umrah dashboard body; head, styles and tab script come from `src/dashboard.html`. |
| `src/prompt.md` | The master prompt template. `[[visa]]`, `[[novisa]]`, `[[english]]`, `[[arabic]]`, `[[kids]]` mark the parts that depend on the form. |
| `src/dashboard.html` | The dashboard template that ships inside the prompt. |
| `src/prompt.js` | Fills the template with the form data. |
| `build.py` | Joins `src/` into `trip.html` and `umrah.html`. |
| `test.js` | Checks the prompt builder. |

### Change something

```bash
python3 build.py   # rebuild both pages after editing src/
node test.js       # check the prompt builders
```

## License

[MIT](LICENSE). Independent project, not affiliated with Anthropic.
