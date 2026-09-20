# AI Interaction Log — Web Assignment 2

In accordance with course AI policy, this log records questions asked to AI during the development of Assignment 2 (CSS Fundamentals & Layouts).

## Session 1 — September 18, 2026
* **Prompt:** How do CSS Grid `minmax()` and `repeat(auto-fit, ...)` work together for responsive cards without media queries?
* **Response Summary:** `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` dynamically fits as many columns of at least 200px width as can fit in the container, stretching remaining space evenly using `1fr`.

## Session 2 — September 19, 2026
* **Prompt:** What is the difference between `position: relative` and `position: absolute` when making a badge on a card?
* **Response Summary:** Setting `position: relative` on the parent card establishes it as the containing block for absolute positioning. The child badge with `position: absolute` is then positioned relative to the top-right corner of the parent card rather than the page body.

## Session 3 — September 20, 2026
* **Prompt:** How to calculate CSS selector specificity for `(0, 1, 1, 0)` versus `(0, 0, 1, 0)`?
* **Response Summary:** Specificity is measured as (inline, IDs, classes/attributes/pseudo-classes, type/elements). `(0, 1, 1, 0)` has one ID and one class selector, which beats `(0, 0, 1, 0)` which only has one class selector regardless of rule order in the stylesheet.
