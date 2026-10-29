/**
 * ================================================================================
 * QAZAQPEEK CYBER CLUB ASTANA — OLD PLAIN JAVASCRIPT VERSION (FOR DEFENSE COMPARISON)
 * File: old-js-version.js
 * Authors: Dias Tursynbay & Adilet Ainadinov
 *
 * NOTICE:
 * This file is intentionally NOT linked to any HTML page.
 * It preserves the exact plain-JavaScript (vanilla DOM) implementations of the
 * three rewritten features from the previous assignments for side-by-side comparison
 * with their jQuery 3.7.1 rewrites during the final project defense.
 *
 * TABLE OF REWRITTEN FEATURES:
 * 1. Feature 1: Show-and-Hide of a Block (Review Submission Form Card Toggle)
 * 2. Feature 2: Dynamic List / Cards Built in Code from Array (2GIS Reviews Engine)
 * 3. Feature 3: Form Validation (Main Station Reservation Form on booking.html)
 * ================================================================================
 */

'use strict';

/* ==============================================================================
 * FEATURE 1: SHOW-AND-HIDE OF A BLOCK (PLAIN JAVASCRIPT VERSION)
 * Original location: js/home.js (lines 518-530 & 494-501)
 * Plain JS methods used:
 *   - document.getElementById / element references
 *   - element.classList.contains('d-none')
 *   - element.classList.remove('d-none')
 *   - element.classList.add('d-none')
 *   - element.textContent = ...
 *   - element.addEventListener('click', ...)
 * ============================================================================== */

function initVanillaShowHideBlock() {
  const submitFormCard = document.getElementById('new-review-card');
  const addReviewToggleBtn = document.getElementById('add-review-toggle-btn');
  const cancelBtn = document.getElementById('cancel-review-btn');
  const authorInput = document.getElementById('review-author-input');

  if (!submitFormCard || !addReviewToggleBtn) return;

  // Toggle form card visibility on button click
  addReviewToggleBtn.addEventListener('click', () => {
    const isHidden = submitFormCard.classList.contains('d-none');
    if (isHidden) {
      submitFormCard.classList.remove('d-none');
      addReviewToggleBtn.textContent = '✕ Close Form';
      if (authorInput) authorInput.focus();
    } else {
      submitFormCard.classList.add('d-none');
      addReviewToggleBtn.textContent = '+ Write a Review';
    }
  });

  // Cancel button hides the form
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      submitFormCard.classList.add('d-none');
      addReviewToggleBtn.textContent = '+ Write a Review';
    });
  }
}


/* ==============================================================================
 * FEATURE 2: LIST / CARDS BUILT IN CODE FROM AN ARRAY (PLAIN JAVASCRIPT VERSION)
 * Original location: js/home.js (lines 113-185 & 216-258)
 * Plain JS methods used:
 *   - document.createElement('div')
 *   - element.className = ...
 *   - element.dataset.category = ...
 *   - element.textContent = ...
 *   - element.appendChild(...)
 *   - element.innerHTML = ''
 *   - array.forEach(...)
 * ============================================================================== */

function createVanillaReviewCard(review) {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-6 col-lg-4 review-item-col';
  col.dataset.category = review.category;

  const card = document.createElement('div');
  card.className = 'card bg-custom-card text-light h-100 shadow-sm border-secondary d-flex flex-column justify-content-between p-3';

  // Card Body Top
  const bodyTop = document.createElement('div');

  const headerRow = document.createElement('div');
  headerRow.className = 'd-flex justify-content-between align-items-center mb-2';

  // Stars representation
  const starsSpan = document.createElement('span');
  starsSpan.className = 'text-warning fw-bold';
  const starCount = Math.min(Math.max(review.rating, 1), 5);
  starsSpan.textContent = `${'★'.repeat(starCount)}${'☆'.repeat(5 - starCount)} ${starCount}.0`;

  // Category badge
  const badge = document.createElement('span');
  badge.className = 'badge bg-info text-dark';
  badge.textContent = review.categoryLabel || 'Community Review';

  headerRow.appendChild(starsSpan);
  headerRow.appendChild(badge);

  // Quote text
  const blockquote = document.createElement('blockquote');
  blockquote.className = 'blockquote small text-light mb-3';

  const quoteText = document.createElement('p');
  quoteText.className = 'fst-italic mb-0';
  quoteText.textContent = `“${review.text}”`;

  blockquote.appendChild(quoteText);
  bodyTop.appendChild(headerRow);
  bodyTop.appendChild(blockquote);

  // Card Footer Bottom
  const footerRow = document.createElement('div');
  footerRow.className = 'pt-2 border-top border-secondary d-flex justify-content-between align-items-center';

  const authorBlock = document.createElement('div');
  const authorName = document.createElement('span');
  authorName.className = 'small fw-bold text-light d-block';
  authorName.textContent = review.author;

  const authorDate = document.createElement('span');
  authorDate.className = 'text-muted';
  authorDate.style.fontSize = '0.75rem';
  authorDate.textContent = `${review.role} • ${review.date}`;

  authorBlock.appendChild(authorName);
  authorBlock.appendChild(authorDate);

  const linkBtn = document.createElement('a');
  linkBtn.href = review.verifiedUrl || 'https://2gis.kz/astana';
  linkBtn.target = '_blank';
  linkBtn.rel = 'noopener noreferrer';
  linkBtn.className = 'btn btn-outline-info btn-sm';
  linkBtn.textContent = '2GIS Review →';

  footerRow.appendChild(authorBlock);
  footerRow.appendChild(linkBtn);

  card.appendChild(bodyTop);
  card.appendChild(footerRow);
  col.appendChild(card);

  return col;
}

function renderVanillaReviewsList(reviews, container) {
  if (!container) return 0;
  container.innerHTML = '';

  if (!reviews || reviews.length === 0) {
    const emptyCol = document.createElement('div');
    emptyCol.className = 'col-12 text-center py-5';

    const emptyBox = document.createElement('div');
    emptyBox.className = 'p-4 bg-dark bg-opacity-50 rounded border border-secondary';

    const emptyTitle = document.createElement('h3');
    emptyTitle.className = 'h5 text-warning mb-2';
    emptyTitle.textContent = 'No matching reviews found';

    const emptyText = document.createElement('p');
    emptyText.className = 'text-muted small mb-3';
    emptyText.textContent = 'Try adjusting your search terms or selecting another category filter.';

    const resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'btn btn-outline-info btn-sm';
    resetBtn.textContent = 'Reset All Filters';
    resetBtn.addEventListener('click', () => {
      const searchInput = document.getElementById('reviews-search-input');
      if (searchInput) searchInput.value = '';
      const filterAllBtn = document.getElementById('review-filter-all');
      if (filterAllBtn) filterAllBtn.click();
    });

    emptyBox.appendChild(emptyTitle);
    emptyBox.appendChild(emptyText);
    emptyBox.appendChild(resetBtn);
    emptyCol.appendChild(emptyBox);
    container.appendChild(emptyCol);

    return 0;
  }

  reviews.forEach(review => {
    const cardEl = createVanillaReviewCard(review);
    container.appendChild(cardEl);
  });

  return reviews.length;
}


/* ==============================================================================
 * FEATURE 3: MAIN FORM VALIDATION (PLAIN JAVASCRIPT VERSION)
 * Original location: js/booking.js (lines 318-450)
 * Plain JS methods used:
 *   - bookingForm.addEventListener('submit', (event) => { event.preventDefault(); ... })
 *   - input.value.trim()
 *   - regex.test(...)
 *   - input.classList.add('is-invalid') / remove('is-invalid')
 *   - document.createElement('ul') / document.createElement('li')
 *   - errorAlert.appendChild(errorList)
 *   - confirmationAlert.innerHTML = `...`
 *   - confirmationAlert.classList.remove('d-none')
 *   - bookingForm.addEventListener('reset', ...)
 * ============================================================================== */

function initVanillaBookingValidation() {
  const bookingForm = document.getElementById('booking-form');
  if (!bookingForm) return;

  const clientNameInput = document.getElementById('client-name');
  const clientPhoneInput = document.getElementById('client-phone');
  const clientEmailInput = document.getElementById('client-email');
  const bookingDateInput = document.getElementById('booking-date');
  const bookingTimeInput = document.getElementById('booking-time');
  const policyAgreeCheckbox = document.getElementById('policy-agree');
  const errorAlert = document.getElementById('booking-error');
  const confirmationAlert = document.getElementById('booking-confirmation');

  bookingForm.noValidate = true;

  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Clear previous feedback
    if (errorAlert) {
      errorAlert.classList.add('d-none');
      errorAlert.innerHTML = '';
    }
    if (confirmationAlert) {
      confirmationAlert.classList.add('d-none');
      confirmationAlert.innerHTML = '';
    }

    const errors = [];
    let firstInvalidField = null;

    // Field 1: Gamer Tag / Client Name
    const cleanName = clientNameInput ? clientNameInput.value.trim() : '';
    if (!cleanName || cleanName.length < 2) {
      errors.push('Please enter your Gamer Tag or Full Name (at least 2 characters).');
      if (clientNameInput) {
        clientNameInput.classList.add('is-invalid');
        if (!firstInvalidField) firstInvalidField = clientNameInput;
      }
    } else if (clientNameInput) {
      clientNameInput.classList.remove('is-invalid');
    }

    // Field 2: Phone number (+7 format validation)
    const cleanPhone = clientPhoneInput ? clientPhoneInput.value.trim() : '';
    const phoneRegex = /^\+?[0-9\s\-()]{10,18}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errors.push('Please provide a valid contact telephone number (e.g. +7 706 605 5465).');
      if (clientPhoneInput) {
        clientPhoneInput.classList.add('is-invalid');
        if (!firstInvalidField) firstInvalidField = clientPhoneInput;
      }
    } else if (clientPhoneInput) {
      clientPhoneInput.classList.remove('is-invalid');
    }

    // Field 3: Email address
    const cleanEmail = clientEmailInput ? clientEmailInput.value.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      errors.push('Please enter a valid email address (e.g. gamer@example.kz).');
      if (clientEmailInput) {
        clientEmailInput.classList.add('is-invalid');
        if (!firstInvalidField) firstInvalidField = clientEmailInput;
      }
    } else if (clientEmailInput) {
      clientEmailInput.classList.remove('is-invalid');
    }

    // Field 4: Booking Date (no past dates)
    const dateVal = bookingDateInput ? bookingDateInput.value : '';
    const todayStr = new Date().toISOString().split('T')[0];
    if (!dateVal || dateVal < todayStr) {
      errors.push('Reservation date cannot be in the past.');
      if (bookingDateInput) {
        bookingDateInput.classList.add('is-invalid');
        if (!firstInvalidField) firstInvalidField = bookingDateInput;
      }
    } else if (bookingDateInput) {
      bookingDateInput.classList.remove('is-invalid');
    }

    // Field 5: Arrival Time
    const timeVal = bookingTimeInput ? bookingTimeInput.value : '';
    if (!timeVal) {
      errors.push('Please select your expected arrival time.');
      if (bookingTimeInput) {
        bookingTimeInput.classList.add('is-invalid');
        if (!firstInvalidField) firstInvalidField = bookingTimeInput;
      }
    } else if (bookingTimeInput) {
      bookingTimeInput.classList.remove('is-invalid');
    }

    // Field 6: House Rules Agreement Checkbox
    if (policyAgreeCheckbox && !policyAgreeCheckbox.checked) {
      errors.push('You must acknowledge the club reservation terms and 15-minute station hold policy.');
      policyAgreeCheckbox.classList.add('is-invalid');
      if (!firstInvalidField) firstInvalidField = policyAgreeCheckbox;
    } else if (policyAgreeCheckbox) {
      policyAgreeCheckbox.classList.remove('is-invalid');
    }

    // Output all errors into a single error container
    if (errors.length > 0) {
      if (errorAlert) {
        const errorList = document.createElement('ul');
        errorList.className = 'mb-0 ps-3';
        errors.forEach(err => {
          const li = document.createElement('li');
          li.textContent = err;
          errorList.appendChild(li);
        });
        errorAlert.appendChild(errorList);
        errorAlert.classList.remove('d-none');
      }
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      return;
    }

    // Success State
    if (confirmationAlert) {
      confirmationAlert.className = 'alert alert-success mt-4';
      confirmationAlert.innerHTML = `
        <h4 class="alert-heading h5 fw-bold">Reservation Voucher Confirmed!</h4>
        <p class="mb-1">Guest <strong>${cleanName}</strong>, your station is reserved.</p>
      `;
      confirmationAlert.classList.remove('d-none');
    }
  });
}
