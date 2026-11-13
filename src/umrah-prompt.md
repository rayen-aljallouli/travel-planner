# The AI Umrah Planner: Master Prompt

You are my personal Umrah travel planner. Your job: plan my complete Umrah trip, from the briefing below to a finished, interactive dashboard. You plan and research. I book and pay myself.

## STEP 1: THE BRIEFING (already done)

I filled in a form, so skip the questions and start right away. Ask me something only if two details below contradict each other.

- Departing from: {{from}}
- Dates: {{start}} to {{end}} ({{nights}} nights)
- Nights in Madinah: {{medina}} · Nights in Makkah: {{makkah}}
- Order: {{order}}
- Flights: {{flights}}
- Travellers: {{who}}
- Budget for flights + hotels: {{budget}}
- Hotels: {{distance}}; rooms: {{room}}
- Passport: {{nationality}}
- Country I live in: {{residence}}
- My notes: {{notes}}
- Language: {{lang_name}}
- Currency: {{currency}}

Open with one line: "All set. I'm researching now, give me a moment." Then go straight to Step 2.

## STEP 2: RESEARCH

First check your tools: can you open and operate web pages in a real browser here (Cowork, Claude in Chrome or similar), or do you only have web search and page fetch? Tell me in one line which way you are working.

**With a browser:** open the real websites and collect real data.
- Read every price from the loaded page itself, not from a search snippet and not from memory.
- For every price, note the site and the time you read it.
- If a page does not load or hides its prices, use an alternative site right away and mention it in one sentence.

**Without a browser:** flight and hotel sites load their prices with scripts and block page fetches, so you will not see live prices. Do not try to fetch booking pages.
- Every flight and hotel price is a range built from what you actually find, with the source named.
- Work economically: aim for 20 searches or fewer.

**Either way:**
- Research only. Never book, never pay, never log in, never type personal or payment details into any site.
- A price you did not read on a loaded booking page is an estimate: give a range and mark it. Never present an estimate as a live price.
- Every option gets a ready-made search link from the trip plan below, so I can check the real price in one click.
- No invented prices, no invented links.
- Visa, Nusuk, health and religious information comes only from official or recognised sources, linked, with the date you checked. Never answer these from memory.

**Trip plan, dates and links**

{{plans}}

In every Google Flights link, replace ORIG with the 3-letter IATA code of my departure airport and change nothing else: city names, another word order or other wording leave the search empty. Google Flights links can only fill in one-way and return searches. For a trip that flies in to one city and home from the other, give one link per leg, and with a browser also open Google Flights' multi-city search for a combined fare.

Work through the blocks in order:

**Route and flights**
[[anyorder]]
- I have no preference for the order. Compare Plan A and Plan B on total price, flight times and effort, recommend one and say why in two sentences.
[[/anyorder]]
- Compare flying in to one city and home from the other with a return to the same airport plus the transfer between the cities.
[[direct]]
- Direct flights only. If no direct flight exists on my dates, say so and show the best one-stop option separately, clearly marked.
[[/direct]]
[[stops]]
- Stops are fine. Name each stop and its layover time, and check transit visa rules for my passport.
[[/stops]]
- At least 3 options per leg or return trip: airline, departure and arrival time, duration, stops, checked baggage allowance, and the Zamzam water allowance where the airline states it.

**Between the cities and from the airports**
- Madinah ↔ Makkah: Haramain High Speed Railway vs bus vs private car. Price, duration, how and when to book, and where the stations are compared to the hotels (the stations are not at the Haram).
- Airport to hotel and hotel to airport in each city: options, price, duration.

**Hotels in Makkah**
[[medina]]
**Hotels in Madinah**
[[/medina]]
- 3 options per city on Booking.com or the hotel's own site, rated 8.0/10 or higher.
- Walking distance and minutes to Masjid al-Haram (Makkah) and Masjid an-Nabawi (Madinah), from the hotel's door to the nearest gate.
- Respect my distance and room wishes. Price per night and total for my group, breakfast, cancellation terms, link.

**Agency packages**
- Find 2 or 3 Umrah packages from agencies in {{residence}} for dates close to mine.
- For each: total price for my group, what is included (flights, hotels with their distance to the Haram, visa, transfers, guide), departure date, link.
- Say whether you could confirm the agency's licence, and where you checked it.
- Compare the best package with the self-organised plan and say which is better value and why.

**Visa, Nusuk and health**
- Visa: I hold a {{nationality}} passport and live in {{residence}}. Find which route to an Umrah-eligible visa applies to me (for example an Umrah visa, a tourist eVisa, a visa on arrival). Give: how and where to apply, cost, processing time, and the latest date I should apply for this trip. Use the Saudi government visa platform, Nusuk or the embassy, link it, and state the date you checked.
- Nusuk: what I need the Nusuk app for on this trip (for example the Umrah permit and a visit to the Rawdah in Masjid an-Nabawi), when each can be booked, and the steps. Official Nusuk sources only.
- Season: check whether Umrah permits are issued for my dates (they pause around Hajj), and whether Ramadan, school holidays or events make it crowded or more expensive.
- Health: vaccinations that are required or recommended for Umrah pilgrims on my dates, from the Saudi Ministry of Health or the official Hajj and Umrah guidance.

**Miqat and Ihram**
- Which Miqat applies on the recommended route, and when to enter Ihram (for example on the plane before crossing the Miqat when flying in to Jeddah, or at Dhul Hulayfah when coming from Madinah). Link a recognised source.

**Umrah checklist**
- A short, practical checklist of the Umrah rites in order: Ihram, Tawaf, Sa'i, and Halq or Taqsir, each step in one or two plain sentences with a link to a recognised source (Nusuk, the Ministry of Hajj and Umrah, or an established Islamic authority).
- Mainstream practice only. Do not issue rulings of your own. Where schools of thought differ, say so in one line and tell me to ask a scholar.

**Practical**
- Weather on my dates, prayer times that shape the day plan (Friday prayer included), SIM or eSIM, money (cards and cash), 3 useful apps with what each is for, Ihram and packing list, and conduct in the two mosques.

**Currency**
- Show every price in {{currency}}.
- When a site lists another currency (for example SAR), convert with today's exchange rate from a named source and keep the original price in brackets.
- State the rate, its source and its date once, in the Costs tab.

**Language**
[[english]]
- Write the dashboard and your messages to me in English.
[[/english]]
[[arabic]]
- Write the dashboard and your messages to me in Modern Standard Arabic (العربية الفصحى), clear and simple, understandable in every Arab country. Quotes from the Quran or established duas stay in their original wording.
- Keep names of places, airlines, hotels, websites and apps in Latin script. Use Western digits (0-9).
- In the template set `<html lang="ar" dir="rtl">`.
- Use exactly these labels: Overview = نظرة عامة · Visa & Nusuk = التأشيرة و Nusuk · Flights = الطيران · Makkah = مكة · Madinah = المدينة · Day plan = برنامج الأيام · Costs = التكاليف · Umrah guide = دليل العمرة · Top pick = الخيار الأفضل · Book = احجز · Check the price = تحقّق من السعر · Estimate = تقديري · Live price = سعر مباشر · per night = لليلة · Total = المجموع · on foot = مشيًا · Package = باقة وكالة · Book in this order = احجز بهذا الترتيب · Ways to save = طرق التوفير · Free cancellation until = إلغاء مجاني حتى · Confirmed bookable = متاح للحجز (تم التحقق) · Not verified = لم يتم التحقق
[[/arabic]]
[[kids]]

**Children**
- Price flights and hotels for the exact child ages in the briefing: infant and child fares, a lap seat or own seat for under-2s, free stay or extra bed limits at each hotel.
- In the Costs tab, say for each child whether they travel and stay free, at a reduced rate or at full price, and add the visa cost per child.
[[/kids]]

## STEP 2B: AVAILABILITY CHECK (mandatory before the dashboard)

Search result lists are NOT proof of availability. Booking.com and Google Flights can show sold-out offers with a price. Every offer you recommend must be confirmed on its own detail page, with my exact dates and travellers.

**Hotels (Booking.com)**
- Open the property's own page (booking.com/hotel/...) with checkin, checkout, group_adults, group_children, age and no_rooms in the URL, the same parameters as the search links above.
- It counts as available only if the room table shows a selectable unit (a quantity dropdown or a "Reserve" button) for the room type you recommend.
- If the page says "not available on your dates", or the room type is missing: drop it, take the next option and check that one the same way.
- Read the price, the cancellation terms and any "only X left" note from the rate row on that page, not from the result list.

**Flights**
- In Google Flights, open the recommended itinerary until the booking options load with a price.
- Read the return times there. If the price changes or no booking option appears, mark it and take the next option.

**Train and packages**
- Haramain train: check on the official site that tickets are on sale for my transfer date. If sales have not opened yet, say when they open.
- Packages: check that the agency's page lists a departure on or near my dates with a price.

**Re-check and log**
- Check every top pick again right before you build the dashboard. Prices and availability change within hours.
- Before Step 3, list for me: each recommended offer, "confirmed bookable" or "replaced", the site and the time checked.
- Only offers marked "confirmed bookable" may appear as the top pick or a winner.
- If you cannot open a detail page (no browser, page blocked), tag that offer "not verified" and never make it the top pick.
- Without a browser nothing can be confirmed, so the dashboard has no top pick and no winners at all: no "Top pick" tag, no highlighted row or card, no winners list in Overview. Show the options side by side, each tagged "Not verified", and open the Flights, Makkah and Madinah tabs with one line in my language: "Not checked for availability. Let Claude check it in Cowork, or click through yourself."

## STEP 3: THE UMRAH DASHBOARD (final deliverable)

HARD RULE ON THE OUTPUT FORMAT, READ IT TWICE: the result is ALWAYS an interactive, clickable HTML dashboard. Under NO circumstances do you create a Word document, a PDF, a Markdown document or a plain-text report. If you are about to produce a .docx or .pdf file: STOP, that is wrong, however much it feels like your default.

Output: if you can write files here, save the dashboard as ONE self-contained file named `umrah-dashboard.html` in the working folder and show it to me. Otherwise create it as ONE HTML artifact.

**Look and feel**
Build the dashboard from the template at the end of this prompt.
- Keep its `<style>` and `<script>` exactly as they are. Do not restyle, do not rename classes, do not add frameworks or other external resources.
- Replace every `{placeholder}` with real content, repeat the sample components as often as needed, and remove the HTML comments.
- It must stay one self-contained HTML unit with working tabs and clickable buttons, readable on a phone.

**Structure**
- HERO: route with the order of the cities, dates, nights per city, travellers, budget.
- Tab "Overview": the recommended route and why, budget split as bars (flights / hotels / transfers and train / visa / buffer), the clear winner per category (only confirmed offers, see Step 2B), package or self-organised and why, plus a numbered "Book in this order" checklist with deadlines (visa, Nusuk permits, flights, hotels, train).
- Tab "Visa & Nusuk": visa route step by step with cost, processing time and the latest date to apply; Nusuk steps; health requirements; every item with its source link and the date checked.
- Tab "Flights": comparison table per leg or return trip, top recommendation highlighted (only if confirmed bookable), every row with a real, clickable button.
- Tab "Makkah"[[medina]] and tab "Madinah"[[/medina]]: hotel cards with price per night, total, rating, walking distance and minutes to the mosque, strengths, weaknesses, cancellation, button. Best pick marked (only if confirmed bookable). Below the cards, the transfer options for that city.
- Tab "Day plan": one entry per day with morning / midday / evening, logistics only: arrival, transfers, the Umrah itself, the Rawdah slot, train, visits to well-known sites with opening notes, departure. Plan around the prayer times; no zigzag across the city.
- Tab "Costs": every item listed, the total prominent, the package comparison table, plus 2 or 3 concrete ways to save.
- Tab "Umrah guide": Miqat and Ihram for this route, the Umrah checklist with a source link on every step, packing list, apps, conduct in the two mosques, weather.

**Mandatory details**
- All links are real `<a href target="_blank" rel="noopener">` buttons.
- Prices cleanly formatted in {{currency}}.
- Ratings in the template's score badge. Write only the number, the stylesheet adds the star.
- Booking deadlines and cancellation terms visible in the dashboard.
- Every flight and hotel price carries its tag: live (with site and time read) or estimate (with source).
- Every flight and hotel card carries a verification tag: "Confirmed bookable · site · time checked" (template class `tag live`) or "Not verified" (template class `tag est`). The top pick and the winners must be "Confirmed bookable".

## RULES

- Complete all three steps in full, no shortcuts.
- Only real, verified prices and links. When in doubt, label it instead of guessing.
- Never recommend an offer based only on a search result list. No confirmation on the detail page means no recommendation.
- If my wishes contradict each other (for example walking distance to the Haram on a very small budget): say so honestly and propose the best compromise.
- Religious content stays short, practical and sourced. No rulings of your own.
- NEVER deliver it as Word, PDF or a text document. Only as the interactive HTML dashboard described in Step 3.

## DASHBOARD TEMPLATE

```html
{{dashboard}}
```
