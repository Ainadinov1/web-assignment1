# QazaqPeek Cyber Club Astana — Endterm Project (Final Submission)

## 1. Project Overview & Venue Information
* **Course:** Introduction to Web Technologies
* **Assignment:** Midterm Project (Complete Logic, Unified Site & Markup Freeze for JavaScript)
* **Organization:** QazaqPeek Cyber Club (Esports Lounge & Gaming Arena)
* **Physical Address:** Kenesary Street 69, 2nd Floor, Astana, Kazakhstan
* **Operating Hours:** 24/7, Open Every Day
* **Contact Phone:** +7 (706) 605 5465 | **Email:** info@qazaqpeek.kz
* **Interactive Map:** [2GIS Map — Kenesary Street 69](https://2gis.kz/astana)
* **Framework:** Bootstrap 5.3.3 CDN + Minimal Custom CSS Correction Layer

This project delivers a complete, cohesive, and production-ready web platform for QazaqPeek Cyber Club. Every user pathway has a concrete start, working interactive steps, and an on-screen conclusion. In strict adherence to the midterm specification, no custom JavaScript logic is executed; instead, all elements, lowercase hyphenated DOM IDs, empty dynamic containers, and CSS state classes have been prepared and frozen for the upcoming JavaScript assignments.

---

## 2. Team Work Division (2 Students)
* **Dias Tursynbay**:
  - `index.html` (Club Home & Overview — 2GIS Reviews engine, Hero CTA, Gallery highlights, Newsletter)
  - `services.html` (Zones & Tariffs — Tariff catalog, Rate matrix, Interactive Session Cost Estimator)
  - `events.html` (Tournaments & Schedule — LAN schedule, Category filters, 5-Man Squad Registration)
  - `css/dias.css` (Dias's minimal correction layer)

* **Adilet Ainadinov**:
  - `booking.html` (Station Reservation — Dynamic Station Seating Engine, Live Price Calculator, Voucher Generation)
  - `login.html` (Member Security Portal — Dual authentication, Regex Password Checklist, Show/Hide Password)
  - `pc-specs.html` (Hardware Specs & Care — Rig specs, Maintenance schedule, Driver pre-load request form)
  - `rules.html` (House Rules & FAQ — Conduct cards, FAQ accordion filter, Inquiry form)
  - `css/adilet.css` (Adilet's minimal correction layer)

The project work, page authoring, and architectural responsibilities are divided equally between two team members:

### Dias Tursynbay
* **`index.html` (Club Home & Overview):** Authored the main landing page, hero banner with direct call-to-action buttons, quick in-page anchor jump navigation, real quotation figure with cite, verified 2GIS player reviews section (4.8★ rating with authentic client links), club photo gallery with semantic figure/figcaption tags, operating hours aside, and newsletter subscription form with status feedback.
* **`services.html` (Zones & Tariffs):** Authored the tariff catalog with uniform cards for Standard, VIP 1, and VIP 2, official venue price & spec posters gallery, complete rate matrix table with semantic caption/scope covering hourly, 2+1, 3+2, morning, day, and night packages, interactive session cost estimator form with DOM calculation hooks, and billing/payment FAQ accordion.
* **`events.html` (Tournaments & Schedule):** Authored the esports LAN competition calendar, tournament status badges, filter buttons with JavaScript hooks, direct tournament entry & team sign-up form with on-screen confirmation, and tournament server connection guide with semantic `code`, `pre`, `kbd`, and `samp` tags.
* **`css/dias.css`:** Authored Dias's custom stylesheet layer (hero banner gradient, image scale transitions, card highlight classes).

### Adilet Ainadinov
* **`booking.html` (Station Reservation):** Authored the comprehensive seat booking page with uniform cards for Standard, VIP 1, and VIP 2, guidelines with nested lists, simplified 3-step reservation form with full HTML5 input types, real tariff packages (Hourly, 2+1, 3+2, Morning, Day, Night), estimated base rate indicator, modal reservation preview dialog, and on-screen booking voucher confirmation container.
* **`login.html` (Member Portal & Registration):** Authored the dual authentication page with separate Member Login and New Account Registration forms, collapsible PIN recovery assistance helper, membership perks grid (welcome bonus, Kaspi QR top-up, priority seating), and status feedback containers.
* **`pc-specs.html` (Hardware Specs & Care):** Authored the technical hardware breakdown with uniform cards for Standard (i5-14400F, RTX 4060/5060, 280Hz ASUS), VIP 1 (i5-14600KF, RTX 5060, 310Hz ASUS), and VIP 2 (Ryzen 7 7800X3D, RTX 5060 Ti, 360Hz Alienware), hardware sanitization and maintenance table with caption/scope, and custom peripheral driver pre-configuration request form with confirmation alert.
* **`rules.html` (House Rules & Conduct):** Authored the venue conduct cards, accordion FAQ for club house rules, esports terminology definition list (`dl`, `dt`, `dd`), and "Ask an Administrator" question submission form with status container.
* **`css/adilet.css`:** Authored Adilet's custom stylesheet layer (form containers, required field indicator pseudo-elements, input focus styling).

### Joint Collaboration (Dias Tursynbay & Adilet Ainadinov)
* **`css/base.css`:** Collaboratively designed the 5-color dark esports brand palette, high-contrast text overrides, Bootstrap dark component corrections, and JavaScript freeze state classes (`.hidden`, `.active`, `.selected`, `.error`, `.success`).
* **Design Harmonization:** Standardized identical navbar structure with mobile hamburger toggler, uniform title format (`QazaqPeek Cyber Club - [Page Name]`), matching footer with contact info across all 7 pages, and zero horizontal scrollbar on mobile viewports.
* **Quality Pass & Testing:** Cross-reviewed each other's pages, validated all links, tested form inputs, and verified 100% W3C compliance.

---

## 3. Site Pages & Technical Summary

| File | Page Title | Author | Key Components & Logic | W3C Status |
| :--- | :--- | :--- | :--- | :--- |
| **`index.html`** | Home | Dias Tursynbay | Hero banner, CTA buttons, verified 2GIS reviews (4.8★), gallery cards with captions, quotes, newsletter form | 0 Errors |
| **`services.html`** | Zones & Tariffs | Dias Tursynbay | Uniform Standard/VIP1/VIP2 cards, official poster gallery, complete rate matrix, cost estimator, billing FAQ | 0 Errors |
| **`events.html`** | Tournaments & Events | Dias Tursynbay | LAN schedule, event filters, team sign-up form, server terminal guide | 0 Errors |
| **`booking.html`** | Book a Station | Adilet Ainadinov | Uniform zone cards, 3-step booking form, real tariff packages, live voucher preview modal | 0 Errors |
| **`login.html`** | Login & Register | Adilet Ainadinov | Member login, new player registration, PIN recovery collapse, perks cards | 0 Errors |
| **`pc-specs.html`** | PC Specs & Hardware | Adilet Ainadinov | Uniform rig cards (Standard/VIP1/VIP2), maintenance schedule table, driver pre-load request form | 0 Errors |
| **`rules.html`** | Rules & FAQ | Adilet Ainadinov | Conduct cards, club rules accordion, esports definition list, inquiry form | 0 Errors |

---

## 4. Three Complete User Journeys

In accordance with the midterm requirements, every visitor path starts, proceeds through logical steps, and reaches a concrete, on-screen conclusion without dead links or missing steps:

### Journey 1: Checking Tariffs, Estimating Costs, and Reserving a Gaming Station
* **Visitor Goal:** A gamer wants to view PC zone rates, calculate the price for a 3-hour evening session, and reserve a Standard Zone station.
* **Start:** Visitor lands on `index.html` and clicks the hero CTA button **"View Zones & Tariffs"**.
* **Steps:**
  1. Visitor arrives at `services.html`, reviews the uniform tariff cards (Standard: 800 KZT/hr; VIP 1: 1,200 KZT/hr; VIP 2: 1,500 KZT/hr) and the detailed rate matrix table.
  2. Scrolls down to the **Tariff & Session Cost Estimator**, selects "Standard Zone" (800 KZT/hr) and enters "3" hours.
  3. Reviews the estimated total display box (`#calc-total-display`: 2,400 KZT) and clicks **"Proceed to Reservation"**.
  4. Visitor arrives at `booking.html`, reviews the uniform Standard, VIP 1, and VIP 2 cards, and uses the 3-step reservation form to specify Gamer Tag ("Dias / ShadowAce"), phone number, email, reservation date, arrival time (18:00), chooses Standard Arena with Package "2+1" (or Hourly), and checks the house rules agreement box.
  5. Visitor clicks **"Confirm & Reserve Station"** (or opens **"Preview Voucher"** modal to double-check).
* **End:** The booking form's dedicated confirmation container (`#booking-confirmation`) displays the official confirmation voucher, reservation reference code (`QP-2026-AST`), and instructions that the station is held for 15 minutes at Kenesary 69.

### Journey 2: Registering a 5-Man Squad for the CS2 LAN Tournament
* **Visitor Goal:** A team captain wants to explore upcoming esports events, check tournament regulations, and register their team for the CS2 LAN tournament.
* **Start:** Visitor clicks **"Events"** in the top navigation bar from any page.
* **Steps:**
  1. Visitor arrives on `events.html` and browses the Astana Community Schedule.
  2. Locates the **"CS2 Astana Cup 5v5"** card (Date: October 12, 2026; Prize Pool: 250,000 KZT).
  3. Clicks **"Register Squad"**, which smoothly jumps down to the `#tournament-registration` section.
  4. Selects "CS2 Astana Cup 5v5" from the tournament dropdown, enters Team Name ("Astana Titans"), captain phone, Discord handle, and player lineup details.
  5. Reviews the match server practice connect command (`connect 192.168.1.100:27015`) and checks the 128-tick regulation agreement box.
* **End:** Captain clicks **"Submit Tournament Registration"**. The visible confirmation alert (`#tournament-feedback`) displays immediate feedback confirming that the team registration has been recorded for bracket seeding and directs the captain to reception check-in.

### Journey 3: Creating a Member Account and Verifying Club House Rules
* **Visitor Goal:** A newcomer wants to register a player account to receive the 500 KZT bonus balance and check rules regarding bringing personal peripherals and outside beverages.
* **Start:** Visitor clicks **"Login / Register"** in the navigation bar.
* **Steps:**
  1. Visitor lands on `login.html`, scrolls to **"Register New Player Account"**, and enters their desired Gamer Nickname, mobile phone number, and a 6-digit PIN.
  2. Submits the form; the green feedback container (`#register-feedback`) notifies the player that their account was created with a 500 KZT welcome bonus balance.
  3. Reads the membership benefits section highlighting automatic Kaspi QR top-ups and LAN seating priority.
  4. To check venue conduct rules, visitor clicks **"Rules & FAQ"** in the navigation.
  5. On `rules.html`, reads Card #1 (Hardware Care) and Card #2 (Outside Food & Drinks), and clicks the FAQ accordion item **"Can I bring my own gaming mouse, headset, or keyboard?"** to read the peripheral policy.
* **End:** The visitor learns that personal gear is welcome, notes the definition of "Tick Rate" and "DyAc+" in the esports glossary, and uses the "Ask an Administrator" form (`#inquiry-form`) to ask a specific question to the front desk.

---

## 5. JavaScript Readiness & Markup Freeze

As required by the midterm freeze policy, all necessary HTML element hooks, English lowercase hyphenated IDs, empty dynamic containers, and CSS state classes have been authored in advance. No JavaScript scripts or logic are executed yet (except Bootstrap's bundled component library).

### Lowercase Hyphenated IDs Inventory
* **Forms:** `#booking-form`, `#login-form`, `#register-form`, `#tournament-reg-form`, `#calculator-form`, `#driver-request-form`, `#inquiry-form`, `#newsletter-form`
* **Inputs & Controls:** `#client-name`, `#client-email`, `#client-phone`, `#booking-date`, `#booking-time`, `#party-size`, `#time-slot`, `#zone-standard`, `#zone-vip`, `#zone-bootcamp`, `#special-notes`, `#policy-agree`, `#loginPhone`, `#loginPassword`, `#regNickname`, `#regPhone`, `#regPass`, `#tournament-choice`, `#team-tag`, `#captain-contact`, `#discord-tag`, `#roster-notes`, `#reg-agree`, `#calc-zone`, `#calc-hours`, `#driver-software`, `#target-zone`, `#gamer-phone`, `#dpi-notes`, `#inquiry-name`, `#inquiry-contact`, `#inquiry-topic`, `#inquiry-message`, `#newsletter-email`
* **Action Buttons:** `#hero-book-btn`, `#hero-tariffs-btn`, `#booking-submit-btn`, `#booking-reset-btn`, `#login-submit-btn`, `#register-submit-btn`, `#btn-reg-cs2`, `#btn-reg-dota`, `#btn-submit-tournament`, `#btn-reset-tournament`, `#filter-all`, `#filter-open`, `#filter-completed`, `#btn-proceed-booking`, `#btn-reset-calc`, `#btn-submit-driver`, `#btn-reset-driver`, `#btn-submit-inquiry`, `#btn-reset-inquiry`, `#newsletter-submit-btn`
* **Dynamic Content & Result Containers:**
  * `#booking-confirmation`: Station booking voucher output block
  * `#booking-error`: Station booking validation alert block
  * `#booking-total-display`: Live reservation total price container
  * `#tournament-feedback`: Tournament registration confirmation container
  * `#tournament-error-box`: Tournament registration validation error container
  * `#calculator-result`: Tariff calculation summary box
  * `#calc-total-display`: Estimated session cost display
  * `#login-feedback`: Member authentication status container
  * `#register-feedback`: New account creation success container
  * `#driver-feedback`: Peripheral driver pre-load schedule confirmation
  * `#inquiry-feedback`: Administrator question dispatch confirmation
  * `#newsletter-feedback`: Tournament newsletter subscription confirmation

### CSS State Classes (`css/base.css`)
```css
.hidden, .is-hidden { display: none !important; }
.active, .is-active { color: var(--qp-accent) !important; border-color: var(--qp-accent) !important; }
.selected, .is-selected { background-color: rgba(56, 189, 248, 0.15) !important; border-color: var(--qp-accent) !important; }
.error, .is-error { border-color: #ef4444 !important; color: #fca5a5 !important; }
.success, .is-success { border-color: #22c55e !important; color: #86efac !important; }
```

---

## 6. Quality Pass & Cross-Review Log

Two days prior to submission, each team member performed an end-to-end audit of the other member's pages:

| Review Date | Reviewer | Target Pages | Defects Found | Resolution & Fix Applied |
| :--- | :--- | :--- | :--- | :--- |
| **Oct 3, 2026** | Dias Tursynbay | `booking.html`, `login.html`, `rules.html` | Missing `<h1>` headings on `booking.html` and `rules.html`; unclosed `<article>` tag on `booking.html`; `href="#"` and `action="#"` on `login.html`. | Added unique `<h1>` tags to both pages; closed the unclosed `<article>` tag; replaced dead `#` links with working collapsible recovery helper `#pin-recovery-help` and valid form action targets. |
| **Oct 3, 2026** | Adilet Ainadinov | `services.html`, `events.html`, `index.html` | Tariff prices on `booking.html` (600/1500 ₸) did not match `services.html` (700/1200 KZT); tournament cards on `events.html` redirected to generic booking form without a tournament registration mechanism. | Synchronized all rates across all 7 pages to official club prices; authored dedicated Tournament Registration section with squad roster form and server terminal guide on `events.html`. |
| **Oct 4, 2026** | Both Students | All 7 Pages & Stylesheets | Duplicate FAQ questions between `services.html` and `rules.html`; missing state classes for JavaScript freeze; tables missing `<caption>`. | Refactored `services.html` FAQ to focus exclusively on billing, Kaspi payments, and hourly rates; added definition list to `rules.html`; added descriptive `<caption>` tags to all tables; declared state classes in `css/base.css`. |
| **Oct 7, 2026** | Both Students | All 7 Pages & Images | Mismatched hardware specs and tariffs vs authentic venue reception posters; booking form was cluttered; missing verified 2GIS player reviews. | Replaced all fictional specs with official club hardware (Intel 14th Gen, Ryzen 7 7800X3D, RTX 50-series, ASUS TUF 280Hz/310Hz, Alienware 360Hz, AULA F75, VGN, MCHOSE mice); standardized uniform cards for Standard, VIP 1, and VIP 2; integrated real 2GIS verified reviews with direct URLs; redesigned booking flow into an intuitive 3-step visual interface. |

---

## 7. Progressive Fulfillment of Course Assignments

The project demonstrates complete, cumulative fulfillment of every assignment in ascending order:

1. **Assignment 1 (HTML Basics & Semantics):**
   * Complete semantic skeleton: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`.
   * Exactly one `<h1>` per page without skipped heading levels (`h1` &rarr; `h2` &rarr; `h3` &rarr; `h4`).
   * Semantic tables with `<caption>`, `<thead>`, `<tbody>`, and `<th scope="...">`.
   * Real lists: Nested unordered lists (`<ul>/<li>/<ul>`), ordered list with attributes (`<ol type="1" start="1">`), and definition list (`<dl>`, `<dt>`, `<dd>`).
   * Rich semantic text tags: `<strong>`, `<em>`, `<b>`, `<i>`, `<mark>`, `<small>`, `<sub>`, `<sup>`, `<abbr title="...">`, `<blockquote>`, `<q>`, `<cite>`, `<code>`, `<pre>`, `<kbd>`, `<samp>`, `<hr>`, `<br>`.
   * Real HTML entities: `&copy;`, `&bull;`, `&deg;`, `&rdquo;`, `&ldquo;`, `&times;`, `&rarr;`.
   * Comprehensive forms with `fieldset`, `legend`, `label for`, and input types: `text`, `email`, `tel`, `number`, `date`, `time`, `radio`, `checkbox`, `select/option`, `textarea`, `submit`, `reset`.

2. **Assignment 2 (CSS Fundamentals & Layouts):**
   * 5-color palette documented in `css/base.css` (`#0f172a`, `#1e293b`, `#162032`, `#334155`, `#38bdf8`).
   * Box model with `box-sizing: border-box`.
   * Flexbox and CSS Grid layout structures.
   * Positioning (`relative`, `absolute`, `fixed` back-to-top button).
   * Pseudo-classes (`:hover`, `:focus`) and pseudo-elements (`::before`, `::after`, `*::after`).
   * Selectors & specificity demonstrations preserved in `checklist.txt`.

3. **Assignment 3 (Bootstrap 5.3.3 Responsive Framework):**
   * Bootstrap 5.3.3 CDN stylesheet linked in `<head>` and JS bundle before `</body>`.
   * Container justification: `.container` for standard readability, `.container-fluid` on `services.html` for wide pricing matrices.
   * 12-column responsive grid (`col-12 col-md-6 col-lg-4`) adapting seamlessly across mobile (375px), tablet (768px), and desktop.
   * Nested grid demonstration (`.row` inside `.col-lg-8` and `.col-lg-4`).
   * Components: Cards, Badges, Accordion, Modal, Alert.
   * Minimal CSS correction layer maintaining brand colors without overriding Bootstrap grid.

4. **Midterm Project (Coherence, Finished Logic, JavaScript Freeze):**
   * Zero dead links, zero `href="#"`, zero broken images, zero console errors.
   * All visitor flows reach a finished, on-screen conclusion.
   * Three detailed, fully functional user journeys.
   * Complete DOM ID hooks, empty containers, and state classes for upcoming JavaScript assignments.
   * W3C validation clean across all 7 pages.
   * Frozen structure tagged as `midterm`.

---

## 8. Git Freeze Tag

To freeze the HTML and CSS architecture for the remainder of the semester:
```bash
git add .
git commit -m "feat: complete Midterm Project with finished logic, unified design, and JavaScript freeze"
git tag midterm
```

---

## 9. File Organization
* `index.html`: Home page
* `services.html`: Zones and price matrix (with Accordion component & nested grid)
* `events.html`: Upcoming tournament schedule
* `booking.html`: Station reservation form (with Modal component)
* `login.html`: Member login and registration
* `pc-specs.html`: Gaming PC hardware & peripheral specifications
* `rules.html`: House Rules & FAQ (with Accordion component & nested grid)
* `css/base.css`: Shared Bootstrap correction layer
* `css/dias.css`: Dias's correction layer
* `css/adilet.css`: Adilet's correction layer
* `css_changes.txt`: Inventory of removed CSS rules and replacement Bootstrap classes
* `ai_log.md`: AI interaction log
* `screenshots/`: Responsive screenshots at mobile (375px), tablet (768px), and desktop widths
* `images/`: Local photos from Kenesary 69

---

## 10. Assignment 4–5 Functionality Plan (JavaScript & DOM)

In strict accordance with the Assignment 4–5 specification, HTML and CSS markup remain frozen from the `midterm` tag (`af0f2d5`). Only script links with `defer` are introduced. All new dynamic elements are injected through JavaScript DOM methods, and states are managed via `classList` using midterm state classes (`.active`, `.selected`, `.hidden`, `.error`, `.success`).

### Individual & Team Substantial Features Matrix

| Page | Visitor Goal | Planned Function | Expected Result | Responsible Student |
| :--- | :--- | :--- | :--- | :--- |
| **All Pages** | Check if club is open and navigate smoothly with accessible feedback | `initSiteWideFeatures()` in `js/main.js` | Highlights active navbar link; live Astana UTC+5 24/7 club open status; smooth back-to-top button; accessible toast messages. | **Dias & Adilet (Team)** |
| **`index.html`** | Read authentic player experiences, filter by category/rating, search reviews, and submit personal review | `renderReviews()`, `filterReviews()`, `handleReviewSubmit()` in `js/home.js` | Displays 2GIS reviews from an array of 6+ objects; dynamic category filtering & live search; dynamic submission form with character counter and safe `textContent` injection. | **Dias Tursynbay** |
| **`events.html`** | Browse upcoming LAN competitions, filter by registration status, and register a 5-man squad | `renderEvents()`, `filterEvents()`, `handleTournamentSignup()` in `js/events.js` | Renders tournament cards from an array of 6+ events; filter by All/Open/Concluded with count and empty state; form validation (team tag, captain phone, Discord handle, 5-player check); demo seed code generated via `Math.random()`. | **Dias Tursynbay** |
| **`services.html`** | Calculate total gaming costs for selected zones/hours and discover package savings (2+1, 3+2, Night) | `calculateSessionCost()`, `renderPackageRecommendation()` in `js/services.js` | Real-time calculation on input/change events; displays total price in KZT; dynamically recommends best-fit discounted packages; deep-links selections to reservation. | **Dias Tursynbay** |
| **`booking.html`** | Select stations on an interactive seating map, choose package, and receive instant booking voucher | `renderSeatMap()`, `calculateBookingTotal()`, `validateBookingForm()` in `js/booking.js` | Dynamic DOM generation of PC stations across Standard, VIP 1, and VIP 2 zones; live pay-at-desk total; 4-field validation (name, phone, email, date/time, seat-to-party cross check); instant demo voucher with `Math.random()` reference number. | **Adilet Ainadinov** |
| **`login.html`** | Create a member account with a secure password and test credentials with immediate feedback | `initPasswordValidator()`, `validateAuthForm()` in `js/login.js` | DOM-generated live regex password strength checklist (8+ chars, uppercase, lowercase, number, special char); confirm password matching; accessible Show/Hide password toggle; demo disclaimer. | **Adilet Ainadinov** |
| **`pc-specs.html`** | Request driver and DPI pre-configuration for tournament peripherals before visiting | `handleDriverRequest()`, `renderDriverSummary()` in `js/specs.js` | Form validation for peripheral software, zone selection, phone, and DPI notes; on-screen confirmation banner with timestamp and demo reference code. | **Adilet Ainadinov** |
| **`rules.html`** | Search club house rules and submit an inquiry to club management | `filterFAQ()`, `handleInquirySubmit()` in `js/specs.js` | Live keyword filter across accordion FAQ items; question inquiry form validation with character counter and demonstration response alert. | **Adilet Ainadinov** |

### Milestone Stages & Git Tags
* **Assignment 4 (`tag: assignment-4`):** Variables (`const`/`let`), operators, `Math.random()`, conditions, logical operators, arrays ($\ge 6$ objects with $\ge 4$ properties), loops/traversals, and $\ge 4$ reusable functions with parameters and return values.
* **Assignment 5 (`tag: assignment-5`):** DOM creation/removal, attributes/classes, events (`submit`, `click`, `input`/`change`), and complete 4-field form validation flows with field-level errors and demonstration summaries.


---

## 11. Assignment 4: jQuery Architecture & Defense Preparation Guide

### 11.1 Connecting jQuery
* **jQuery CDN:** Minified version 3.7.1 is linked from the official CDN (`https://code.jquery.com/jquery-3.7.1.min.js`) in all 7 HTML pages immediately preceding custom application scripts.
* **Execution Guard:** All jQuery code is enclosed within `$(function () { ... })`, jQuery's modern shorthand for `$(document).ready()`.
* **Why `$(function () { ... })` is needed:** It ensures the browser has fully parsed the HTML Document Object Model (DOM) tree into memory before querying elements or attaching listeners. This prevents `null` / `undefined` reference exceptions without needing to wait for heavy external resources (such as high-res images or fonts) to complete downloading.
* **Separation of Concerns:** Zero inline JavaScript, zero `onclick` attributes in the markup, and all code is maintained in separate `.js` modules.

---

### 11.2 The Three Rewritten Features (Side-by-Side Comparison)
The original vanilla JavaScript implementations are preserved verbatim in [`old-js-version.js`](file:///Users/adiletainadinov/.gemini/antigravity/scratch/web-assignment1/old-js-version.js) (unlinked to any page) for direct defense comparison.

| Feature | Plain JavaScript (in `old-js-version.js`) | jQuery 3.7.1 (in `home.js` / `booking.js`) | Comparison & Assessment |
| :--- | :--- | :--- | :--- |
| **1. Show-and-Hide of a Block** | `submitFormCard.classList.contains('d-none')`<br>`submitFormCard.classList.remove('d-none')`<br>`submitFormCard.classList.add('d-none')`<br>`addReviewToggleBtn.textContent = ...`<br>`addReviewToggleBtn.addEventListener('click', ...)` | `$('#new-review-card').slideToggle(300, function() {`<br>&nbsp;&nbsp;`const isVisible = $(this).is(':visible');`<br>&nbsp;&nbsp;`$btn.text(isVisible ? '✕ Close Form' : '+ Write a Review');`<br>`});` | **Substantially shorter and clearer.** Replaces manual boolean toggling and abrupt CSS display switches with an animated sliding transition, duration, and completion callback. |
| **2. Dynamic List / Cards Built in Code** | `document.createElement('div')`<br>`card.className = ...`<br>`card.dataset.category = ...`<br>`card.appendChild(...)`<br>`container.innerHTML = ''`<br>`reviews.forEach(...)` | `$.each(reviews, function(i, review) {`<br>&nbsp;&nbsp;`const $card = $('<div class="..."></div>');`<br>&nbsp;&nbsp;`$card.attr('data-category', review.category);`<br>&nbsp;&nbsp;`$container.append($card);`<br>`});` | **Substantially shorter and much cleaner.** Eliminates ~35 lines of repetitive DOM object instantiation by using concise jQuery HTML string builders and `.append()`. |
| **3. Main Form Validation** | `bookingForm.addEventListener('submit', ...)`<br>`input.value.trim()`<br>`regex.test(...)`<br>`input.classList.add('is-invalid')`<br>Manual aggregated `<ul>` in one top-level alert box | `$('#booking-form').on('submit', ...)`<br>`$.trim($field.val())`<br>`regex.test(...)`<br>`$field.addClass('is-invalid error')`<br>Inline field-level error messages directly adjacent to each field, cleared on `.on('input change')` | **Vastly superior UX and cleaner architecture.** Field-level errors appear immediately under the invalid input, clear automatically as the user types, and animate the voucher confirmation via `.fadeIn(400)`. |

---

### 11.3 Selectors, Traversal & Method Chaining

#### Selectors Used Across the Project
* **By ID:** `$('#booking-form')`, `$('#reviews-search-input')`, `$('#client-name')`, `$('#reviews-section')`
* **By Class:** `$('.station-btn')`, `$('.review-filter-btn')`, `$('.navbar-nav .nav-link')`, `$('.station-zone-box')`
* **By Element:** `$('form')`, `$('button')`, `$('input')`, `$('textarea')`, `$('legend:first')`
* **By Attribute:** `$('input[name="zone_tier"]')`, `$('input[type="email"]')`, `$('button[data-category="all"]')`
* **Filter Selectors:**
  * `:checked`: `$('input[name="zone_tier"]:checked')` (retrieves active radio button selection)
  * `:not()`: `$('.station-btn:not(.occupied)')` (targets only clickable, non-occupied PC rigs)
  * `:first`: `$reviewsRow.find('.review-item-col:first')` (highlights the top review in results)
  * `:visible`: `$('#new-review-card').is(':visible')` (checks visibility state in callbacks)

#### Traversal Methods
* `.find()`: `$btn.find('.vote-count')`, `$card.find('.review-author-name')` (searches descendants)
* `.closest()`: `$btn.closest('.card')`, `$btn.closest('.station-zone-box')` (travels up ancestors to find container)
* `.parent()`: `$toastCard.parent().length` (checks immediate parent container)
* `.siblings()`: `$(this).siblings('.review-filter-btn')`, `$field.siblings('.field-error-feedback')` (accesses neighboring elements)
* `.each()`: `$.each(categories, ...)` and `$navLinks.each(...)` (iterates over collections)
* `$(this)`: Employed inside filter click handlers, station seat clicks, scroll listeners, input validation, and effect callbacks.

#### Method Chaining Demonstrations
* **Chain 1 (`js/home.js` — Filter Buttons):**
  ```javascript
  $(this).addClass('btn-info text-dark fw-bold active')
         .removeClass('btn-outline-secondary')
         .siblings('.review-filter-btn')
         .removeClass('btn-info text-dark fw-bold active')
         .addClass('btn-outline-secondary');
  ```
  * *Link 1:* `.addClass(...)` — applies the active esports accent style to the clicked button.
  * *Link 2:* `.removeClass(...)` — removes the inactive outline class from the clicked button.
  * *Link 3:* `.siblings(...)` — traverses the DOM to select all sibling filter buttons in the same container.
  * *Link 4:* `.removeClass(...).addClass(...)` — resets all sibling buttons back to inactive outline styling.

* **Chain 2 (`js/booking.js` — Voucher Reveal):**
  ```javascript
  $confirmationAlert.removeClass('d-none hidden')
                    .hide()
                    .html(voucherHtml)
                    .fadeIn(400, function () { ... });
  ```
  * *Link 1:* `.removeClass('d-none hidden')` — clears Bootstrap and custom CSS hiding rules.
  * *Link 2:* `.hide()` — sets inline `display: none` instantly without animation.
  * *Link 3:* `.html(voucherHtml)` — injects the rich voucher markup into the container.
  * *Link 4:* `.fadeIn(400, cb)` — smoothly animates opacity from 0 to 1 over 400ms and executes smooth-scroll callback.

---

### 11.4 Modifying the DOM: Methods & Differences

#### 1. Difference between `.text()` and `.html()`
* **`.text()`:** Retrieves or sets the text content of elements. Automatically HTML-encodes special characters (`<`, `>`, `&`), rendering them safely without interpreting them as HTML tags. **Use Case:** Preventing Cross-Site Scripting (XSS) when rendering user-submitted names, review comments, and price numbers.
* **`.html()`:** Retrieves or injects HTML markup. The browser parses the string and constructs new DOM nodes. **Use Case:** Rendering rich voucher structures containing `<strong>`, `<hr>`, and `<span>` elements.

#### 2. Difference between `.attr()` and `.prop()` on a Checkbox
* **`.attr('checked')`:** Reads or modifies the initial HTML attribute string in the markup (`<input checked>`). It reflects the default value defined in HTML, not user changes.
* **`.prop('checked')`:** Reads or modifies the live boolean property (`true` or `false`) on the underlying DOM element object. It reflects the user's active interaction in real time. For form validation and conditional logic, `.prop('checked')` must always be used.

#### 3. Appearance Changes via Existing Classes
* Handled exclusively via `.addClass()`, `.removeClass()`, and `.toggleClass()` utilizing pre-existing CSS rules:
  * `.hidden` / `.is-hidden` (`display: none !important;`)
  * `.active` / `.is-active` (`color: var(--qp-accent); border-color: var(--qp-accent);`)
  * `.selected` / `.is-selected` (`background-color: rgba(56, 189, 248, 0.15);`)
  * `.error` / `.is-error` / `.is-invalid` (red border & feedback)
  * `.success` / `.is-success` / `.is-valid` (green border & feedback)

---

### 11.5 Events & Delegation

#### Event Types Handled via `.on()`
1. `'click'`: Filter buttons, station seat selection, review upvoting, write review toggle, cancel buttons, back-to-top button.
2. `'submit'`: Main booking reservation form, review submission form, footer newsletter form.
3. `'input'`: Search keyword filtering, review textarea character counter, party size sync, real-time error clearance.
4. `'change'`: Tariff zone radio buttons, duration package select, date/time pickers.
5. `'mouseenter'` / `'mouseleave'`: Station seating hover specs preview tooltip.
6. `'scroll'`: Window scroll tracking for floating back-to-top button.

#### Delegated Event Handling Architecture
* **Implementation:**
  * `$('#reviews-section .row.g-4').on('click', '.review-helpful-btn', handler);`
  * `$('#dynamic-seating-container').on('click', '.station-btn:not(.occupied)', handler);`
* **Why direct binding (`$('.station-btn').on(...)`) does not work for dynamic items:**
  Direct binding evaluates the selector expression once at the exact instant the script executes, attaching listeners exclusively to matching nodes currently present in the DOM. Any elements created dynamically in code at runtime (e.g., station seat buttons rendered from `CLUB_STATIONS` or review cards from `REVIEWS_DATA`) did not exist when direct binding occurred and would have zero listeners.
  Delegated handling binds the listener to a permanent ancestor already present in the HTML. Due to native DOM event bubbling, user clicks on dynamic children bubble up the DOM tree to the ancestor. jQuery inspects `event.target`, matches it against the delegated selector (`.station-btn`), and executes the handler.

#### Why `event.preventDefault()` is Essential
* By default, submitting an HTML form sends an HTTP GET/POST request and causes the browser to reload the page or navigate away.
* Calling `event.preventDefault()` suppresses this native reload, allowing client-side JavaScript to validate form inputs, calculate totals, update state, and render confirmation vouchers on-screen without losing form data or resetting the application state.

---

### 11.6 Effects with Purpose, Duration & Callbacks
* **`.slideToggle(300, callback)`:** Toggles the review submission form card when clicking "+ Write a Review". Shifts button text to "✕ Close Form" and sets focus on completion.
* **`.slideUp(300, callback)`:** Collapses the review form on "Cancel" or clears validation error alerts.
* **`.fadeIn(400, callback)`:** Smoothly reveals the booking confirmation voucher card, triggering a callback that smooth-scrolls the visitor directly to their voucher code.
* **`.fadeOut(250, callback)`:** Smoothly hides toast notifications and back-to-top buttons, removing dismissed elements from the DOM in the callback.
* **`.animate({ scrollTop: 0 }, 400)`:** Provides smooth hardware-accelerated scrolling when clicking the back-to-top button.

---

### 11.7 Form Validation in jQuery
* **Target Form:** `#booking-form` on [`booking.html`](file:///Users/adiletainadinov/.gemini/antigravity/scratch/web-assignment1/booking.html).
* **Field-Level Inline Validation:** Each invalid field receives `.addClass('is-invalid error')` and displays a dedicated error message directly below the field using `.after()` or `.siblings()` (no single global error summary).
* **Live Error Clearing:** Bound to `.on('input change')`, clearing the error class and hiding the message immediately as soon as the user corrects their input.
* **Checks Enforced:**
  1. Gamer Tag / Name: Trimmed via `$.trim()`, minimum 2 characters.
  2. Telephone Number: Trimmed, validated against `^\+?[0-9\s\-()]{10,18}$`.
  3. Email Address: Trimmed, validated against `^[^\s@]+@[^\s@]+\.[^\s@]+$`.
  4. Reservation Date: Required, rejected if prior to current calendar date (`todayStr`).
  5. Arrival Time: Required.
  6. Club Policy Agreement: Evaluated via `.prop('checked')`.
* **Success State & Reset:** On valid submission, generates a demonstration voucher with `generateVoucherCode()`, displays estimated total, reveals confirmation via `.fadeIn(400)`, and resets all form inputs and selected station chips.
* **Why a Browser Check Never Replaces a Server Check:**
  Browser validation provides immediate, friendly UX feedback for visitors. However, client-side code runs in an untrusted environment: any user can bypass browser checks by disabling JavaScript, using browser DevTools to remove `required` attributes, or sending raw HTTP POST requests via curl or Postman. Server-side validation is strictly mandatory to enforce business logic, verify authorization, prevent malicious payloads (SQL Injection, XSS), and ensure database integrity on trusted infrastructure.

---

### 11.8 Defense Quick Reference & Oral Questions Cheat Sheet

1. **What is the difference between `.text()` and `.html()`?**
   * `.text()` escapes HTML special characters (safe against XSS, for plain text); `.html()` interprets and parses HTML markup into DOM nodes.
2. **What is the difference between `.attr()` and `.prop()` on a checkbox?**
   * `.attr('checked')` inspects the initial HTML attribute written in markup; `.prop('checked')` returns the live boolean state (`true`/`false`) of the user's current selection.
3. **Why did we use event delegation for the station seats and reviews?**
   * Because those cards and buttons are created dynamically from JavaScript data arrays. Direct binding (`$('.station-btn').on()`) would find 0 elements at startup. Delegation to the persistent parent catches bubbling events from elements created at any time.
4. **What is the plain-JavaScript equivalent of `$('#el').addClass('active')`?**
   * `document.getElementById('el').classList.add('active');`
5. **What is the plain-JavaScript equivalent of `$('#el').slideToggle()`?**
   * Vanilla JS has no native slide animation: you would have to write CSS keyframe transitions or a `requestAnimationFrame` loop that interpolates `height`, `padding-top`, `padding-bottom`, and `overflow: hidden`.
6. **What happens if you omit `event.preventDefault()` in a form submit handler?**
   * The browser performs native HTTP GET/POST submission, triggering a complete page refresh that wipes out the JavaScript application state, input values, and selected stations.

---

## 12. Endterm Project: Complete Interactive Site & Technology Separation (Final Milestone)

### 12.1 Overview & Strict Compliance with Endterm Rules
The **Endterm Project** brings the entire QazaqPeek Cyber Club web platform to life. In strict compliance with course rules:
* **No New Topic:** Continued development of the same 7-page QazaqPeek Cyber Club Astana platform (`web-assignment1`).
* **HTML/CSS Freeze Maintained:** Zero hand-written markup and zero hand-written CSS rules were added. All new dynamic controls, calculators, badges, progress bars, and modal bodies are constructed and manipulated dynamically in JavaScript and jQuery using pre-existing Bootstrap 5 and venue CSS classes.
* **Finished Logic & Zero Dead Elements:** Every button executes a real action, every form validates and confirms, and every user pathway finishes completely on-screen.
* **Strict Technology Separation:** Plain JavaScript and jQuery features are cleanly segregated in independent files. Dias and Adilet each authored both Plain JavaScript and jQuery features and are prepared for oral defense on both technologies.

---

### 12.2 Technology Division & Authorship Matrix

| Page | Feature Description | Script File | Technology | Written By |
| :--- | :--- | :--- | :--- | :--- |
| **`booking.html`** | Interactive Seating Engine, Zone Filter Bar, Real-time Pricing, Promo Discount Code Engine, Modal Voucher Preview & Confirmation Flow | `js/booking.js` | **jQuery 3.7.1** | **Adilet Ainadinov** |
| **`login.html`** | Password Regex Strength Checklist, Show/Hide Password Toggle, Self-Service SMS PIN Reset Simulator, Welcome Bonus & Deposit Tier Calculator | `js/login.js` | **Plain JavaScript** | **Adilet Ainadinov** |
| **`pc-specs.html`** | Hardware Rig Specs, Esports Polling Rate & Motherboard Port Optimizer, Driver Pre-load Request Form Validation with Reference Generator | `js/specs.js` | **Plain JavaScript** | **Adilet Ainadinov** |
| **`rules.html`** | FAQ Real-time Search Filter, Delegated "Helpful 👍" Voting System, Administrator Inquiry Form with Live Character Counter | `js/specs.js` | **Plain JavaScript** | **Adilet Ainadinov** |
| **`index.html`** | 2GIS Reviews Feed, Category Filter, Review Sorting (Rating/Date/Helpful), Live 5★ Rating Distribution Progress Bar, Dynamic Facility Photo Gallery Lightbox | `js/home.js` | **jQuery 3.7.1** | **Dias Tursynbay** |
| **`events.html`** | LAN Tournament Catalog, Status Filter, Live Matchday Countdowns, 5-Man Squad Registration Validation, Real-time Prize Pool Split Calculator | `js/events.js` | **Plain JavaScript** | **Dias Tursynbay** |
| **`services.html`** | Tariff Catalog, Session Cost Estimator, Smart Package Deal Optimizer, 5-Man Squad Bootcamp Multiplier, Deep-linking to Reservation | `js/services.js` | **Plain JavaScript** | **Dias Tursynbay** |
| **All Pages** | Active Navigation Highlighting, 24/7 Astana UTC+5 Live Status Badge, Animated Back-to-Top Button, Global Accessible Toast Notifications | `js/main.js` | **jQuery 3.7.1** | **Dias & Adilet (Team)** |

---

### 12.3 What Was Added to Each Feature Since Previous Defense (New Work Breakdown)

In accordance with the Endterm specification requirement (*"Work that was already defended in a previous assignment counts only if you have extended it with new functionality — say in the README what you added to each feature since it was last defended"*):

#### 1. Station Reservation Engine (`js/booking.js` — jQuery, Adilet Ainadinov)
* **What was previously defended (Assignment 4):** Basic 3-step form validation, static seating grid generation from array, selecting seats, total price display, fade-in voucher alert.
* **NEW FUNCTIONALITY ADDED FOR ENDTERM:**
  1. **Dynamic Promo Code & Discount Engine:** Added `CLUB_PROMO_CODES` dictionary (`ASTANA2026` for -15%, `AITU10` for -10%, `NIGHTGRIND` for -20%). Dynamically injected promo input box, validation, live calculation of discounted price with strikethrough original price, and promo badge recorded on the generated voucher.
  2. **Seating Map Zone Filter Bar:** Added dynamic filter buttons (*All Stations*, *Standard Arena*, *VIP 1 Lounge*, *VIP 2 Bootcamp*) with jQuery method chaining and animated `.slideDown()` / `.slideUp()` transitions.
  3. **Interactive Modal Voucher Preview & Confirmation Execution:** The previously static Bootstrap modal `#modal-confirm` is now dynamically populated with live reservation data (Gamer Tag, phone, selected seat chips, date, time, total) upon opening. Clicking *«Confirm Booking»* inside the modal now triggers the form submission `$bookingForm.trigger('submit')`, eliminating the dead button and finalizing the booking.
  4. **Deep-link Party Size Sync:** Automatically populates `#party-size` from URL search parameters (`?party=...`) routed from `services.html`.

#### 2. Member Security Portal (`js/login.js` — Plain JS, Adilet Ainadinov)
* **What was previously defended (Assignment 5):** Front-end validation for login and register, show/hide password toggle, live password regex checklist (8+ chars, upper, lower, digit, special).
* **NEW FUNCTIONALITY ADDED FOR ENDTERM:**
  1. **Self-Service SMS PIN Reset Simulator:** Replaced static text in `#pin-recovery-help` with a complete interactive multi-step PIN reset interface created entirely in DOM code. Validates phone number, generates a random 4-digit code (`Math.random()`), simulates an on-screen SMS dispatch notification, and validates SMS code and new PIN before confirming the update.
  2. **Welcome Bonus & Deposit Tier Calculator:** Added an interactive deposit reward calculator for new players previewing their starting gaming balance (500 ₸ welcome bonus + first top-up matching bonus) and status badge (*Bronze*, *Silver*, *Gold VIP*).
  3. **Enhanced Member Card Confirmation:** On valid registration, renders a rich demonstration club card with unique Member ID, contact phone, and assigned tier badge.

#### 3. Rig Specs & House Rules Controller (`js/specs.js` — Plain JS, Adilet Ainadinov)
* **What was previously defended (Assignment 5):** Driver request form validation with ticket generation, live text search on FAQ accordion, admin inquiry form with character counter.
* **NEW FUNCTIONALITY ADDED FOR ENDTERM:**
  1. **Esports Polling Rate & Motherboard Port Optimizer (`pc-specs.html`):** Dynamically injected an interactive hardware calculation card allowing players to select their mouse polling rate (1,000Hz, 2,000Hz, 4,000Hz, 8,000Hz). Calculates physical input latency (1.000ms down to 0.125ms), percentage delay reduction, and displays optimal motherboard rear port configuration.
  2. **Delegated FAQ "Helpful 👍" Voting System (`rules.html`):** Injected voting controls into all accordion items. Attached a single **delegated event listener** to `#faqAccordion` using `event.target.closest('.faq-helpful-btn')`, incrementing vote counts in memory without page reload and providing instant feedback.

#### 4. 2GIS Reviews Engine (`js/home.js` — jQuery, Dias Tursynbay)
* **What was previously defended (Assignment 4):** SlideToggle review form, dynamic review cards rendering, category filtering, search input, helpful upvote button.
* **NEW FUNCTIONALITY ADDED FOR ENDTERM:**
  1. **Dynamic Review Sorting Controls:** Added sorting buttons (*★ Highest Rating*, *📅 Newest First*, *👍 Most Helpful*) with method chaining and `.hide().fadeIn(300)` animation.
  2. **Live 5★ Rating Distribution Progress Bar:** Dynamically calculates the average player rating from `REVIEWS_DATA` via `.reduce()` and computes percentage of 5-star reviews, rendering an on-screen Bootstrap progress bar.
  3. **Interactive Facility Photo Gallery Lightbox:** Attached a delegated jQuery listener to gallery items that dynamically opens an interactive modal lightbox with high-res photo preview and direct booking CTA link.

#### 5. Tournaments & LAN Calendar (`js/events.js` — Plain JS, Dias Tursynbay)
* **What was previously defended (Assignment 5):** Tournament card rendering, status filter, 5-man squad form validation, bracket seed generator.
* **NEW FUNCTIONALITY ADDED FOR ENDTERM:**
  1. **Live Tournament Countdown Timers:** Calculates real-time difference between current date and tournament matchdays, displaying live countdown badges (*⏰ Starts in: Xd Yh Zm*) that update automatically.
  2. **Squad Prize Pool Distribution & Payout Calculator:** Selecting a tournament dynamically computes the 1st place share (60%), 2nd place (30%), 3rd place (10%), and the exact cash payout per player for 5-man rosters.

#### 6. Services & Session Cost Estimator (`js/services.js` — Plain JS, Dias Tursynbay)
* **What was previously defended (Assignment 5):** Zone & hour calculation, smart package deal recommendation, deep-link to booking.
* **NEW FUNCTIONALITY ADDED FOR ENDTERM:**
  1. **Squad / Team Size Multiplier:** Added team size selector (1 Solo, 2 Duo, 5-Man Squad) that recalculates session totals across multiple stations and highlights the 5-Man Squad Bootcamp All-Day Pass for massive group savings.

---

### 12.4 The Technical Floor Checklist
* [x] **Browser Console:** 0 errors and 0 uncaught exceptions on all 7 pages.
* [x] **Dead Links / Dead Buttons:** 0 dead buttons, 0 dead `#` links. All actions finish logically.
* [x] **Responsive Layout:** 100% responsive across phone, tablet, and desktop viewports with zero horizontal overflow.
* [x] **W3C Standards:** Clean semantic HTML5 structure, Bootstrap 5.3.3 utilities, and valid CSS cascade.
* [x] **Separation of Technologies:** Pure Plain JavaScript and jQuery 3.7.1 maintained in separate files; no inline `onclick` attributes.

---

### 12.5 Defense Guide: Questions & Live Coding Tasks

#### Key Oral Questions & Answers
1. **Why does direct event binding fail on dynamic elements, and how does delegation solve it?**
   * *Answer:* Direct binding (`$('.btn').on('click')` or `document.querySelectorAll('.btn')`) inspects the DOM once when executed, attaching listeners only to elements already present. Elements rendered later from arrays did not exist and receive no handlers. Event delegation binds the listener to a permanent ancestor element (e.g. `#faqAccordion` or `#dynamic-seating-container`). When a dynamic child is clicked, native DOM event bubbling propagates the event up to the ancestor, which checks `event.target` and executes the handler.
2. **What is the difference between `.prop('checked')` and `.attr('checked')`?**
   * *Answer:* `.attr('checked')` inspects the initial HTML attribute string in markup (the default load state); `.prop('checked')` returns the live boolean property (`true`/`false`) on the DOM node reflecting real-time user interaction.
3. **What is the difference between `.text()` and `.html()`?**
   * *Answer:* `.text()` safely HTML-escapes special characters (`<`, `>`, `&`), preventing XSS attacks when displaying user inputs. `.html()` parses markup and injects DOM nodes, used only for rich formatted content like vouchers and badges.
4. **Why is `event.preventDefault()` essential?**
   * *Answer:* Forms by default reload the page or navigate via HTTP GET/POST upon submit. Calling `event.preventDefault()` suppresses this reload, allowing JavaScript to validate fields, calculate totals, and render confirmation vouchers on-screen.

#### Expected Live Coding Tasks & Solutions
* **Task: Add a new field to form validation (e.g. Discord handle or Age verification):**
  * *Vanilla JS:* Check `field.value.trim()`, if invalid add `.classList.add('is-invalid')` and append error message; on valid add `.classList.remove('is-invalid')`.
  * *jQuery:* Check `$.trim($field.val())`, if invalid add `$field.addClass('is-invalid error')` and use `$field.siblings('.field-error-feedback').text('Error').show()`.
* **Task: Change what a loop builds (e.g. add a badge or extra spec to tournament cards):**
  * Locate `createTournamentCard(item)` in `js/events.js`, create a new `<li>` or `<span>`, set `textContent = item.newProperty`, and append it to `infoList` or `badgeRow`.
* **Task: Rewrite a short piece of jQuery in Plain JavaScript:**
  * `$el.addClass('active');` &rarr; `el.classList.add('active');`
  * `$el.find('.child');` &rarr; `el.querySelector('.child');`
  * `$el.closest('.card');` &rarr; `el.closest('.card');`
  * `$el.val();` &rarr; `el.value;`
  * `$el.on('click', fn);` &rarr; `el.addEventListener('click', fn);`
