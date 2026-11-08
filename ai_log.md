# AI Interaction Log — Web Assignments 2 & 3

In accordance with course AI policy, this log records questions asked to AI during the development of Assignment 2 (CSS Fundamentals) and Assignment 3 (Bootstrap 5 Responsive Layouts).

## Session 1 — September 18, 2026
* **Prompt:** How do CSS Grid `minmax()` and `repeat(auto-fit, ...)` work together for responsive cards without media queries?
* **Response Summary:** `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` dynamically fits as many columns of at least 200px width as can fit in the container, stretching remaining space evenly using `1fr`.

## Session 2 — September 19, 2026
* **Prompt:** What is the difference between `position: relative` and `position: absolute` when making a badge on a card?
* **Response Summary:** Setting `position: relative` on the parent card establishes it as the containing block for absolute positioning. The child badge with `position: absolute` is then positioned relative to the top-right corner of the parent card rather than the page body.

## Session 3 — September 20, 2026
* **Prompt:** How to calculate CSS selector specificity for `(0, 1, 1, 0)` versus `(0, 0, 1, 0)`?
* **Response Summary:** Specificity is measured as (inline, IDs, classes/attributes/pseudo-classes, type/elements). `(0, 1, 1, 0)` has one ID and one class selector, which beats `(0, 0, 1, 0)` which only has one class selector regardless of rule order in the stylesheet.

## Session 4 — September 27, 2026 (Assignment 3)
* **Prompt:** How do Bootstrap 5 container and container-fluid differ, and when should each be chosen?
* **Response Summary:** `.container` has a max-width responsive cap at each breakpoint, centering content on large screens. `.container-fluid` takes 100% width across all viewports, ideal for wide data tables or pricing matrices.

## Session 5 — September 27, 2026 (Assignment 3)
* **Prompt:** How to structure Bootstrap 5 responsive grid column classes like `col-12 col-md-6 col-lg-4`?
* **Response Summary:** Mobile screens (<768px) stack 1 item per row (`col-12`), tablets (>=768px) display 2 items per row (`col-md-6`), and desktop screens (>=992px) display 3 items per row (`col-lg-4`).

## Session 6 — September 27, 2026 (Assignment 3)
* **Prompt:** How to customize Bootstrap Accordion components using dark utility background classes?
* **Response Summary:** Add `bg-dark`, `text-light`, and `bg-custom-card` classes to `.accordion-item` and `.accordion-button` to blend the official Bootstrap accordion markup seamlessly into dark gaming lounge color themes.

## Session 7 — September 30, 2026 (Assignment 3 Sync)
* **Prompt:** How to sync and harmonize navigation bars across all 7 Bootstrap pages after pulling new branch commits?
* **Response Summary:** Standardize navigation markup to use `<nav class="navbar navbar-expand-lg navbar-dark ...">` with `navbar-toggler` on all 7 pages (`index.html`, `services.html`, `events.html`, `booking.html`, `login.html`, `pc-specs.html`, `rules.html`), ensuring active state highlights and zero horizontal scrollbar on mobile.

## Session 8 — October 3, 2026 (Midterm Project — JavaScript Freeze & DOM Hooks)
* **Prompt:** What does an HTML/CSS freeze mean for preparing JavaScript DOM hooks, and how should ID naming and empty result containers be structured?
* **Response Summary:** An HTML/CSS freeze means all static elements, interactive hooks, and presentation state classes that JavaScript will later interact with must exist in advance in markup and stylesheets. This requires assigning lowercase, hyphenated English IDs to all forms, inputs, buttons, and dynamic blocks, adding empty result/alert containers with IDs for future data injection, and defining state classes (`.hidden`, `.active`, `.selected`, `.error`, `.success`) in CSS so JavaScript only needs to toggle classes on and off.

## Session 9 — October 4, 2026 (Midterm Project — User Journeys & Flow Completeness)
* **Prompt:** How can a multi-page static website ensure end-to-end logical completeness for a single visitor without a database server?
* **Response Summary:** Logical completeness requires that every interaction pathway has a definite beginning, working steps, and an on-screen conclusion: every call-to-action button navigates to an actual form or section, forms explicitly explain the submission outcome and feature dedicated visible confirmation blocks, tables and price cards provide calculation hooks and booking links, and no dead links or placeholder elements exist.

## Session 10 — October 20, 2026 (Interactive Theater-Style Seating Booking)
* **Prompt:** How to convert a standard cyber club reservation form into an interactive theater/cinema-style seat selection system that clearly indicates available vs occupied stations and assists users in understanding the booking process?
* **Response Summary:** Structure the booking interface like a modern cinema seating map with a front stage/screen indicator, distinct rows of stations across hardware zones (Standard Arena, VIP 1 Lounge, VIP 2 Bootcamp), visual color coding for seat statuses (Available in green/cyan, Occupied in red, Selected in glowing cyan), a clear status legend, real-time hardware specs inspection on hover, live cart synchronization and price calculation, quick-pick squad shortcuts (adjacent duo and 5-man team), and an instant confirmation ticket voucher with printable layout.

## Session 11 — October 24, 2026 (Assignment 4 — Variables, Arrays & Modular Data Engine)
* **Prompt:** How should we structure real venue data arrays (reviews, tournaments, tariffs, stations) in JavaScript using `const`, objects with 4+ properties, and traversals without modifying the frozen HTML?
* **Response Summary:** Define centralized, immutable arrays of objects (e.g. `REVIEWS_DATA`, `TOURNAMENTS_DATA`, `TARIFF_PACKAGES`, `CLUB_STATIONS`) at the top of each page-specific module. Use array methods like `.filter()`, `.find()`, and loops for search, filtering, and cost calculations. Keep functions pure with parameters and return values, and load scripts with `defer` to ensure execution after DOM parsing.

## Session 12 — October 24, 2026 (Assignment 5 — Dynamic DOM Creation & HTML Freeze Compliance)
* **Prompt:** How can we dynamically create and render complex interactive UI components (such as a 20-station cyber club seating map and tournament cards) entirely through DOM methods while adhering strictly to the midterm HTML/CSS freeze?
* **Response Summary:** Use `document.createElement()`, assign prepared Bootstrap classes and midterm state classes (`.selected`, `.active`, `.hidden`, `.error`, `.success`), attach event listeners via `addEventListener()`, and insert new elements into existing frozen containers (`#booking-form`, `#events-card-container`, `#reviews-section`) using `appendChild()` or `insertBefore()`. This satisfies the dynamic DOM requirements of Assignment 5 while maintaining zero unauthorized markup modifications.

## Session 13 — October 24, 2026 (Assignment 5 — Form Validation & Regex Password Checklist)
* **Prompt:** How should client-side form validation be structured to display field-level error messages, focus the first invalid field, and display a live regular expression password checklist without saving passwords?
* **Response Summary:** Listen to `input` events on the password and confirmation inputs to dynamically evaluate length (`/.{8,}/`), uppercase (`/[A-Z]/`), lowercase (`/[a-z]/`), digit (`/[0-9]/`), special character, and equality, updating checklist icon states and colors in real time. On form submission, run field-level checks, focus `firstInvalidField`, prevent default browser submission, and display a demonstration summary voucher with a `Math.random()` reference number while never persisting password values.


## Session 14 — October 29, 2026 (Assignment 4 — Connecting jQuery & DOM Ready)
* **Prompt:** What version of jQuery should be used, how should it be linked across multi-page projects, and why is `$(document).ready()` or its shorthand `$(function () { ... })` strictly required before executing DOM code?
* **Response Summary:** Use the production-ready minified jQuery 3.7.1 CDN from `https://code.jquery.com/jquery-3.7.1.min.js`. Link it in the `<head>` or at the end of `<body>` immediately preceding custom application scripts so that the global `window.$` and `window.jQuery` objects are fully initialized before dependent scripts execute. Wrapping application code in `$(function () { ... })` ensures that the browser has fully parsed the HTML Document Object Model (DOM) tree into memory before querying elements, eliminating null-reference errors. Unlike `window.onload`, `$(document).ready()` fires as soon as the DOM is constructed without waiting for large images, stylesheets, or frames to finish downloading.

## Session 15 — October 30, 2026 (Assignment 4 — Event Delegation vs Direct Event Binding)
* **Prompt:** Why does direct event binding like `$('.station-btn').on('click', ...)` fail for elements generated dynamically in JavaScript, and how does delegated event handling solve this problem?
* **Response Summary:** Direct event binding evaluates the selector expression once at the exact moment the script executes, attaching listeners exclusively to matching nodes currently present in the DOM. Elements constructed and appended later (such as station seats rendered from `CLUB_STATIONS` or review cards from `REVIEWS_DATA`) did not exist during initialization and therefore receive no event handlers. Delegated event handling syntax — `$('#persistent-container').on('click', '.dynamic-child', handler)` — attaches a single persistent listener to an existing ancestor. Due to native DOM event bubbling, user actions on dynamic child elements bubble up the DOM tree to the container, where jQuery matches `event.target` against the delegated child selector and invokes the handler.

## Session 16 — October 30, 2026 (Assignment 4 — DOM Manipulation: `.text()` vs `.html()` and `.attr()` vs `.prop()`)
* **Prompt:** What are the critical differences between `.text()` and `.html()`, and why must `.prop('checked')` be used instead of `.attr('checked')` for interactive form checkboxes?
* **Response Summary:** `.text()` retrieves or sets the raw text content of selected elements, automatically HTML-encoding special characters (like `<`, `>`, `&`) to defend against Cross-Site Scripting (XSS). In contrast, `.html()` retrieves or injects markup, parsing HTML tags into DOM elements; it should only be used when structured formatting (such as `<strong>` tags, badges, or icons) is intended. For HTML form inputs, `.attr('checked')` reads or sets the initial static attribute defined in the HTML markup (the default value upon page load), whereas `.prop('checked')` reads or mutates the live boolean property of the underlying DOM node (reflecting whether the user currently has the checkbox checked). Consequently, all interactive checkbox validation and toggling must use `.prop()`.

## Session 17 — October 31, 2026 (Assignment 4 — Method Chaining & jQuery Effects Architecture)
* **Prompt:** How does jQuery method chaining operate internally, and what is the proper way to combine traversal, animation effects (`.slideToggle()`, `.fadeIn()`, `.slideUp()`), and callbacks?
* **Response Summary:** jQuery methods that manipulate or inspect collections return the jQuery wrapper object (`this`), enabling consecutive method calls without re-querying the DOM (e.g. `$(this).addClass('active').removeClass('inactive').siblings().removeClass('active')`). When using animation effects, passing a duration in milliseconds (e.g. `.slideToggle(300)` or `.fadeIn(400)`) triggers asynchronous CSS/JavaScript opacity and height interpolations. To execute subsequent actions only after the visual transition completes (such as changing button text, focusing an input, or smooth-scrolling to a voucher), a completion callback function must be passed as the second argument: `$el.fadeIn(400, function() { /* callback code */ })`.

## Session 18 — October 31, 2026 (Assignment 4 — Form Validation Architecture & Server Security Principle)
* **Prompt:** How should jQuery form validation be designed to display field-level error messages and instant error clearing, and why can a browser check never replace server-side validation?
* **Response Summary:** High-quality client validation binds to `submit` on the form, calls `event.preventDefault()` to suppress default page reload, trims values with `$.trim()`, and evaluates individual inputs against constraints (length, telephone regex, email regex, date checks, checkbox `.prop('checked')`). For each invalid field, an error class (`.is-invalid`, `.error`) is added, and an individual error message element is injected or displayed directly adjacent to that field using `.after()` or `.siblings()`. Binding to `.on('input change')` enables real-time error clearance as soon as the visitor fixes the offending input. Client-side validation exists strictly for user experience (instant feedback); it never replaces server-side validation because browsers are untrusted environments where any user can bypass checks by disabling JavaScript, editing HTML attributes via DevTools, or transmitting raw HTTP POST requests via curl or Postman. Only server validation guarantees data integrity and security.

## Session 19 — November 5, 2026 (Endterm Project — Dynamic Promo Engine & Percentage Calculation)
* **Prompt:** How to design a client-side promotional code discount calculator in jQuery that adjusts session price in real time, displays live percentage savings badges, and carries discount metadata into the demonstration voucher?
* **Response Summary:** Store authorized promo codes and discount ratios in an object dictionary (`CLUB_PROMO_CODES = { 'ASTANA2026': { discount: 15 }, ... }`). On code application, trim and normalize to uppercase, look up the discount percentage, compute `savings = Math.round(baseCost * (discount / 100))`, and update the live DOM display using jQuery `.html()` to present the discounted rate alongside the strikethrough original total. When submitting the main form, pass the active promo metadata to the voucher generator so the confirmed voucher displays the applied promo code, discount percentage, and total savings.

## Session 20 — November 6, 2026 (Endterm Project — Floor Map Zone Traversal & Modal Confirm Execution)
* **Prompt:** How should jQuery traversal (`.closest()`, `.siblings()`, `.find()`) and animation effects be combined to filter dynamic floor map sections, and how can a Bootstrap modal confirmation button be wired to trigger the underlying form validation and voucher generation?
* **Response Summary:** Bind a delegated click listener on the parent container (`$seatingCard.on('click', '.seating-filter-btn', handler)`). Chain button state styling with `$(this).addClass('active').removeClass('inactive').siblings().removeClass('active').addClass('inactive')`. Filter the `.station-zone-box` containers by comparing `data-zone-key` and toggle visibility using `.slideDown(200)` and `.slideUp(200)`. To connect the modal without dead buttons, listen for `show.bs.modal` to dynamically populate `.modal-body` with live input values, and bind a click listener to the modal's confirmation button that executes `$bookingForm.trigger('submit')`, seamlessly transferring the user's confirmation action into form validation and voucher rendering.

## Session 21 — November 7, 2026 (Endterm Project — Plain JS Event Delegation & Self-Service PIN Reset)
* **Prompt:** In Plain JavaScript without jQuery, how does event delegation on a parent container inspect dynamic child elements using `event.target.closest()`, and how can an interactive SMS PIN reset simulator be built entirely in the DOM?
* **Response Summary:** Attach a single event listener to the parent element (`faqAccordion.addEventListener('click', (event) => { ... })`). Inside the handler, call `event.target.closest('.faq-helpful-btn')` to detect whether a click or tap originated from a helpful vote button, even if the user clicked an inner `<span>` or icon. For the PIN recovery flow, construct input groups dynamically via `document.createElement()`, validate the phone format with regex, generate a 4-digit token via `Math.random()`, display a demonstration SMS notification on-screen, and validate the code and new PIN upon submission, updating UI state classes (`.is-invalid`, `.is-valid`) without page reload.

## Session 22 — November 8, 2026 (Endterm Project — Tournament Prize Pool Distribution & Live Date Countdown Arithmetic)
* **Prompt:** How to calculate tournament prize pool allocations per squad player in real time upon dropdown selection, and how to implement a live countdown timer in Plain JavaScript comparing the target tournament date to `new Date()`?
* **Response Summary:** Listen for `change` events on `#tournament-choice` to retrieve the selected tournament object from `TOURNAMENTS_DATA`. Calculate the 1st place share (`prizePool * 0.60`), 2nd place (`prizePool * 0.30`), and 3rd place (`prizePool * 0.10`), and divide the 1st place award by 5 to display the exact per-player cash reward. For the live countdown timer, calculate the millisecond difference `diff = targetTimestamp - Date.now()`, compute remaining days (`Math.floor(diff / (1000 * 60 * 60 * 24))`), hours, minutes, and seconds, and update the badge text every second or minute, transitioning to an active status when the target date arrives.
