# QazaqPeek Cyber Club — Assignment 2 (CSS Styling & Layouts)

## Project Overview
This is the second assignment for Introduction to Web Technologies course. We added CSS styles to our website for **QazaqPeek Cyber Club** located at Kenesary Street 69 in Astana. 

We styled all 6 pages of our website using pure CSS without any CSS frameworks like Bootstrap or Tailwind.

## Authors & Work Division
* **Dias Tursynbay**:
  - `index.html` (Home page)
  - `services.html` (Zones & Tariffs page)
  - `events.html` (Tournaments & Events page)
  - `css/dias.css` (Personal stylesheet with Flexbox, CSS Grid, positioning, float and clear)

* **Adilet Ainadinov**:
  - `booking.html` (Book a Station page)
  - `login.html` (Login & Register page)
  - `colophon.html` (Technical Colophon page)
  - `css/adilet.css` (Personal stylesheet with Flexbox form controls, CSS Grid specs, positioning, and centering)

* **Both Students Together**:
  - `css/base.css` (Shared colors, font stacks, header navigation flex row, footer styling)
  - Hand-drawn layout sketches in `sketches/` folder
  - Screenshots in `screenshots/` folder

## Stylesheet Architecture
Our project uses three external CSS files inside the `css` folder:
1. `css/base.css`: Holds shared color palette (5 colors max), font families, box-sizing, navigation flexbox bar, main container, and footer.
2. `css/dias.css`: Custom styles written by Dias for Home, Services, and Events pages. Includes specificity experiment, float clear, and events CSS Grid.
3. `css/adilet.css`: Custom styles written by Adilet for Booking, Login, and Colophon pages. Includes form Flexbox layout, CSS Grid colophon specs, and grid centering.

Every HTML file links `base.css` first and the personal stylesheet second to show CSS cascade.

## Key Required Features Included
* **Selectors**: Type selector, class selector, ID selector, descendant (`nav ul`), child (`body > header`), adjacent sibling (`h2 + p`), grouping with commas (`h1, h2, h3`), attribute selector (`input[type="text"]`, `a[target="_blank"]`), universal selector (`*`), pseudo-classes (`:hover`, `:focus`, `:nth-child`), and pseudo-elements (`::before`, `::after`).
* **Flexbox**: Navigation bar is a flex row using `justify-content`, `align-items`, and `gap`. Additional flexbox containers with `flex-wrap` and `flex-direction` are used on both students' pages.
* **CSS Grid**: Created 2D grid layouts using `grid-template-columns`, `repeat()`, `fr` units, `gap`, `minmax()`, and item column spanning (`grid-column: span 2`).
* **Positioning & Float**: Used `static`, `relative`, `absolute` (badges), and `fixed` (back-to-top button). Floated image inside paragraph text and cleared it with `clear: left`.
* **Centering**: Used three different centering methods: `margin: auto` for main container, Flexbox centering for hero banner, and CSS Grid centering for modal box.
* **Cascade Demonstrations**: Included exactly one internal style block in `colophon.html`, exactly one inline style attribute in `services.html`, and one `!important` rule in `base.css`.
* **Specificity Experiment**: Left two conflicting rules in `dias.css` with specificity comments `(0,0,1,0)` vs `(0,1,1,0)` and explanation.

## File Organization
* `index.html`: Home page
* `services.html`: Zones and price matrix
* `events.html`: Upcoming tournament schedule
* `booking.html`: Station reservation form
* `login.html`: Member login and registration
* `colophon.html`: Technical retrospective
* `css/base.css`: Shared stylesheet
* `css/dias.css`: Dias's stylesheet
* `css/adilet.css`: Adilet's stylesheet
* `checklist.txt`: Tag and CSS property line inventory
* `ai_log.md`: AI interaction log
* `sketches/`: Hand-drawn layout sketches
* `screenshots/`: Before and after styling screenshots
* `images/`: Local photos from Kenesary 69