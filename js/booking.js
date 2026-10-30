/**
 * ================================================================================
 * QAZAQPEEK CYBER CLUB ASTANA — STATION RESERVATION CONTROLLER (JQUERY REWRITE)
 * File: js/booking.js
 * Author: Adilet Ainadinov
 *
 * jQuery Version: 3.7.1 (minified CDN loaded via code.jquery.com)
 * Why $(function () { ... }) is needed:
 *   $(function () { ... }) is jQuery's standard shorthand for $(document).ready().
 *   It guarantees that the browser has fully parsed the HTML Document Object Model
 *   before any selectors, traversal, or event handlers run, preventing null-reference
 *   exceptions without waiting for heavy external assets (images, fonts) to finish.
 *
 * Assignment 4 Highlights:
 *   - Rewritten Feature 3: Complete Main Form Validation in jQuery (.on('submit'), inline errors)
 *   - Dynamic Station Seating Engine built from array via jQuery (.append(), $.each())
 *   - Delegated Event Handler: Parent container catches clicks on dynamically generated station buttons
 *   - Traversal & Selectors: .closest(), .find(), .parent(), .siblings(), :not(), :checked
 *   - Differences Explained: .text() vs .html(), .attr() vs .prop() on checkboxes
 *   - Client vs Server Validation Comment
 * ================================================================================
 */

'use strict';

/**
 * 1. VENUE PRICING MATRIX & RIG SPECIFICATIONS DATA ARRAYS
 */
const BOOKING_PRICING = {
  hourly: { standard: 800, vip1: 1200, vip2: 1500, label: 'Hourly Rate' },
  pkg_2plus1: { standard: 1600, vip1: 2400, vip2: 3000, label: 'Package "2+1" (3 Hours)' },
  pkg_3plus2: { standard: 2400, vip1: 3600, vip2: 4500, label: 'Package "3+2" (5 Hours)' },
  morning: { standard: 1500, vip1: 1500, vip2: 2000, label: 'Morning Package (08:00 - 12:00)' },
  day: { standard: 2000, vip1: 2500, vip2: 3500, label: 'Day Package (12:00 - 18:00)' },
  night: { standard: 3000, vip1: 4000, vip2: 5000, label: 'Night Package (22:00 - 08:00)' }
};

/**
 * Station map configuration: 20 real rigs across Standard, VIP 1, and VIP 2 zones
 */
const CLUB_STATIONS = [
  // Standard Arena (A1 - A10)
  { id: 'A1', zone: 'standard', name: 'PC A1', specs: 'i5-14400F • RTX 4060 • 280Hz ASUS', status: 'available' },
  { id: 'A2', zone: 'standard', name: 'PC A2', specs: 'i5-14400F • RTX 4060 • 280Hz ASUS', status: 'available' },
  { id: 'A3', zone: 'standard', name: 'PC A3', specs: 'i5-14400F • RTX 4060 • 280Hz ASUS', status: 'occupied' },
  { id: 'A4', zone: 'standard', name: 'PC A4', specs: 'i5-14400F • RTX 4060 • 280Hz ASUS', status: 'available' },
  { id: 'A5', zone: 'standard', name: 'PC A5', specs: 'i5-14400F • RTX 4060 • 280Hz ASUS', status: 'available' },
  { id: 'A6', zone: 'standard', name: 'PC A6', specs: 'i5-14400F • RTX 5060 • 280Hz ASUS', status: 'available' },
  { id: 'A7', zone: 'standard', name: 'PC A7', specs: 'i5-14400F • RTX 5060 • 280Hz ASUS', status: 'occupied' },
  { id: 'A8', zone: 'standard', name: 'PC A8', specs: 'i5-14400F • RTX 5060 • 280Hz ASUS', status: 'available' },
  { id: 'A9', zone: 'standard', name: 'PC A9', specs: 'i5-14400F • RTX 5060 • 280Hz ASUS', status: 'available' },
  { id: 'A10', zone: 'standard', name: 'PC A10', specs: 'i5-14400F • RTX 5060 • 280Hz ASUS', status: 'available' },
  // VIP 1 Lounge (B1 - B6)
  { id: 'B1', zone: 'vip1', name: 'VIP B1', specs: 'i5-14600KF • RTX 5060 • 310Hz ASUS', status: 'available' },
  { id: 'B2', zone: 'vip1', name: 'VIP B2', specs: 'i5-14600KF • RTX 5060 • 310Hz ASUS', status: 'available' },
  { id: 'B3', zone: 'vip1', name: 'VIP B3', specs: 'i5-14600KF • RTX 5060 • 310Hz ASUS', status: 'available' },
  { id: 'B4', zone: 'vip1', name: 'VIP B4', specs: 'i5-14600KF • RTX 5060 • 310Hz ASUS', status: 'occupied' },
  { id: 'B5', zone: 'vip1', name: 'VIP B5', specs: 'i5-14600KF • RTX 5060 • 310Hz ASUS', status: 'available' },
  { id: 'B6', zone: 'vip1', name: 'VIP B6', specs: 'i5-14600KF • RTX 5060 • 310Hz ASUS', status: 'available' },
  // VIP 2 Bootcamp (C1 - C4)
  { id: 'C1', zone: 'vip2', name: 'Bootcamp C1', specs: 'Ryzen 7 7800X3D • RTX 5060 Ti • 360Hz Alienware', status: 'available' },
  { id: 'C2', zone: 'vip2', name: 'Bootcamp C2', specs: 'Ryzen 7 7800X3D • RTX 5060 Ti • 360Hz Alienware', status: 'available' },
  { id: 'C3', zone: 'vip2', name: 'Bootcamp C3', specs: 'Ryzen 7 7800X3D • RTX 5060 Ti • 360Hz Alienware', status: 'available' },
  { id: 'C4', zone: 'vip2', name: 'Bootcamp C4', specs: 'Ryzen 7 7800X3D • RTX 5060 Ti • 360Hz Alienware', status: 'available' }
];

/**
 * 2. REUSABLE UTILITY FUNCTIONS
 */

/**
 * Calculate total booking cost based on selected zone tier, package, and seat count.
 * @param {'standard'|'vip1'|'vip2'} zone - Selected zone
 * @param {string} packageKey - Key matching BOOKING_PRICING
 * @param {number} seatCount - Number of stations reserved
 * @returns {number} Total estimated cost in KZT
 */
function calculateBookingPrice(zone, packageKey, seatCount) {
  const packageRates = BOOKING_PRICING[packageKey] || BOOKING_PRICING.hourly;
  const ratePerSeat = packageRates[zone] || 800;
  const validSeats = Math.max(1, seatCount);
  return ratePerSeat * validSeats;
}

/**
 * Generate a random demonstration voucher confirmation code.
 * Meaningful usage: creates realistic venue reservation voucher ID.
 * @returns {string} e.g. "QP-2026-AST-7842"
 */
function generateVoucherCode() {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `QP-2026-AST-${randomSuffix}`;
}


/**
 * 3. JQUERY DOM SETUP & MAIN FORM CONTROLLER
 * Wrapped in $(function () { ... }) (jQuery 3.7.1 DOM Ready)
 */
$(function () {
  const $bookingForm = $('#booking-form');
  if ($bookingForm.length === 0) return;

  // Selected station IDs tracked in a Set
  const selectedSeats = new Set();

  // Cached jQuery element references
  const $timeSlotSelect = $('#time-slot');
  const $partySizeInput = $('#party-size');
  const $clientNameInput = $('#client-name');
  const $clientPhoneInput = $('#client-phone');
  const $clientEmailInput = $('#client-email');
  const $bookingDateInput = $('#booking-date');
  const $bookingTimeInput = $('#booking-time');
  const $policyAgreeCheckbox = $('#policy-agree');
  const $totalDisplay = $('#booking-total-display');
  const $confirmationAlert = $('#booking-confirmation');
  const $errorAlert = $('#booking-error');

  // Set min date to today using jQuery .val() and .attr()
  const todayStr = new Date().toISOString().split('T')[0];
  $bookingDateInput.attr('min', todayStr);
  if (!$bookingDateInput.val()) {
    $bookingDateInput.val(todayStr);
  }

  // Pre-fill query parameters if routed from services.html
  const urlParams = new URLSearchParams(window.location.search);
  const paramZone = urlParams.get('zone');
  if (paramZone === 'vip1') {
    $('#zone-vip').prop('checked', true);
  } else if (paramZone === 'vip2') {
    $('#zone-bootcamp').prop('checked', true);
  }

  /**
   * Determine currently active zone from radio buttons using :checked filter selector.
   * Demonstrates: selector by attribute and filter :checked
   * @returns {'standard'|'vip1'|'vip2'}
   */
  function getSelectedZone() {
    const checkedVal = $('input[name="zone_tier"]:checked').val();
    return checkedVal || 'standard';
  }

  /**
   * Recalculate and update the live total price display using jQuery .text().
   * Demonstrates: .text() vs .html() (safely inserting formatted currency text).
   */
  function refreshTotalDisplay() {
    const zone = getSelectedZone();
    const pkg = $timeSlotSelect.length ? $timeSlotSelect.val() : 'hourly';
    const count = selectedSeats.size > 0 ? selectedSeats.size : (parseInt($partySizeInput.val(), 10) || 1);
    const total = calculateBookingPrice(zone, pkg, count);
    const formatted = typeof formatKZT === 'function' ? formatKZT(total) : `${total} ₸`;

    if ($totalDisplay.length) {
      $totalDisplay.text(formatted);
    }
  }


  // 4. DYNAMIC DOM GENERATION: INTERACTIVE FLOOR MAP SEATING GRID
  // Constructed entirely in code from CLUB_STATIONS array and appended to the form.
  const $seatingCard = $(`
    <div id="dynamic-seating-container" class="p-3 bg-dark bg-opacity-75 rounded border border-info mb-4 shadow-sm">
      <div class="d-flex flex-wrap justify-content-between align-items-center pb-2 mb-3 border-bottom border-secondary">
        <div>
          <h3 class="h6 fw-bold text-accent mb-0">Interactive Floor Map: Select Your Stations</h3>
          <span id="station-hover-preview" class="small text-muted">Hover over any station for hardware specs</span>
        </div>
        <div class="small d-flex gap-3 align-items-center mt-2 mt-sm-0">
          <span><span class="badge bg-outline-info border border-info text-info me-1">□</span> Available</span>
          <span><span class="badge bg-info text-dark me-1">■</span> Selected</span>
          <span><span class="badge bg-secondary text-muted me-1">✕</span> Occupied</span>
        </div>
      </div>
      <div class="station-grid-wrapper d-flex flex-column gap-3"></div>
      <div id="selected-chips-row" class="mt-3 pt-2 border-top border-secondary small text-light d-flex flex-wrap align-items-center gap-2">
        <span class="text-muted">Selected Stations:</span>
        <span id="seats-chips-display" class="text-info fw-semibold">None (click available stations above)</span>
      </div>
    </div>
  `);

  const $gridWrapper = $seatingCard.find('.station-grid-wrapper');

  const zoneSections = [
    { zoneKey: 'standard', title: 'Standard Arena (A1 - A10)', badge: '800 ₸/hr • 280Hz' },
    { zoneKey: 'vip1', title: 'VIP 1 Lounge (B1 - B6)', badge: '1,200 ₸/hr • 310Hz' },
    { zoneKey: 'vip2', title: 'VIP 2 Bootcamp (C1 - C4)', badge: '1,500 ₸/hr • 360Hz' }
  ];

  $.each(zoneSections, function (idx, section) {
    const $rowBox = $('<div class="p-2 bg-dark rounded border border-secondary station-zone-box"></div>');
    const $rowHeader = $(`
      <div class="d-flex justify-content-between align-items-center mb-2 px-1">
        <span class="fw-bold small text-light">${section.title}</span>
        <span class="badge bg-secondary text-light small">${section.badge}</span>
      </div>
    `);
    const $buttonsContainer = $('<div class="d-flex flex-wrap gap-2"></div>');

    const zoneStations = CLUB_STATIONS.filter(s => s.zone === section.zoneKey);

    $.each(zoneStations, function (sIdx, station) {
      const isOccupied = station.status === 'occupied';

      // Build button with jQuery attributes and data attributes
      const $seatBtn = $('<button type="button" class="btn btn-sm text-center station-btn"></button>')
        .css('min-width', '54px')
        .attr('data-seat-id', station.id)
        .attr('data-zone', station.zone)
        .text(station.id);

      if (isOccupied) {
        $seatBtn.addClass('btn-outline-secondary text-muted occupied')
          .prop('disabled', true)
          .attr('title', `${station.name} - Occupied by active session`);
      } else {
        $seatBtn.addClass('btn-outline-info')
          .attr('title', `${station.name} (${station.specs})`);
      }

      $buttonsContainer.append($seatBtn);
    });

    $rowBox.append($rowHeader, $buttonsContainer);
    $gridWrapper.append($rowBox);
  });

  // Inject seating map into the DOM right after the form legend
  const $legendEl = $bookingForm.find('legend:first');
  if ($legendEl.length) {
    $legendEl.after($seatingCard);
  } else {
    $bookingForm.prepend($seatingCard);
  }

  // Update selected stations chip display
  const $chipsDisplay = $('#seats-chips-display');
  function updateChips() {
    if (selectedSeats.size === 0) {
      $chipsDisplay.text('None (click available stations above)');
    } else {
      $chipsDisplay.text(Array.from(selectedSeats).join(', '));
    }
  }


  /**
   * ==============================================================================
   * DELEGATED EVENT HANDLER DEMONSTRATION
   * Pattern: $("#dynamic-seating-container").on("click", ".station-btn:not(.occupied)", handler)
   *
   * Why binding directly to .station-btn would NOT work:
   * The station buttons are dynamically generated at runtime from the CLUB_STATIONS array
   * and appended to the seating container. If we attached a direct listener like
   * $('.station-btn').on('click', ...), jQuery would bind handlers only to elements
   * existing in the DOM at the exact moment of execution.
   * By delegating the event to #dynamic-seating-container (the persistent ancestor),
   * DOM event bubbling allows the container to catch clicks from newly added buttons,
   * match them against the selector '.station-btn:not(.occupied)', and run the handler.
   * ==============================================================================
   */
  $seatingCard.on('click', '.station-btn:not(.occupied)', function (event) {
    event.preventDefault();

    // Use of $(this) inside handler
    const $btn = $(this);
    const seatId = $btn.attr('data-seat-id');
    const stationZone = $btn.attr('data-zone');

    // Traversal demonstration: reaching closest parent card and finding specs
    const $zoneBox = $btn.closest('.station-zone-box');
    const zoneTitle = $zoneBox.find('.fw-bold').text();

    if (selectedSeats.has(seatId)) {
      selectedSeats.delete(seatId);
      $btn.removeClass('btn-info text-dark fw-bold selected')
        .addClass('btn-outline-info');
    } else {
      if (selectedSeats.size >= 5) {
        if (typeof displayGlobalToast === 'function') {
          displayGlobalToast('Seat Limit Reached', 'You can select up to 5 gaming stations per reservation voucher.', 'warning');
        }
        return;
      }
      selectedSeats.add(seatId);
      $btn.removeClass('btn-outline-info')
        .addClass('btn-info text-dark fw-bold selected');

      // Auto-synchronize the corresponding zone radio button using .prop('checked', true)
      if (stationZone === 'standard') $('#zone-standard').prop('checked', true);
      if (stationZone === 'vip1') $('#zone-vip').prop('checked', true);
      if (stationZone === 'vip2') $('#zone-bootcamp').prop('checked', true);
    }

    // Sync party size input
    if ($partySizeInput.length) {
      $partySizeInput.val(selectedSeats.size > 0 ? selectedSeats.size : 1);
    }

    updateChips();
    refreshTotalDisplay();
  });

  // Event Type 4: 'mouseenter' event on station buttons for live hardware preview
  $seatingCard.on('mouseenter', '.station-btn', function () {
    const previewText = $(this).attr('title') || 'Gaming Station';
    $('#station-hover-preview').text(`● ${previewText}`);
  });

  $seatingCard.on('mouseleave', '.station-btn', function () {
    $('#station-hover-preview').text('Hover over any station for hardware specs');
  });

  // Listeners for radio buttons, package select, and party size
  // Demonstrates: 'change' and 'input' event types with .on()
  $('input[name="zone_tier"]').on('change', refreshTotalDisplay);
  $timeSlotSelect.on('change', refreshTotalDisplay);
  $partySizeInput.on('input', refreshTotalDisplay);


  /**
   * ==============================================================================
   * REWRITTEN FEATURE 3: MAIN FORM VALIDATION (JQUERY REWRITE)
   * Comparison with plain-JavaScript version in old-js-version.js:
   * Plain JS lines replaced:
   *   - addEventListener('submit', ...) -> .on('submit', ...)
   *   - document.getElementById, element.classList.add('is-invalid') -> $('.form-control').addClass('is-invalid error')
   *   - Manual aggregated <ul> creation in one alert -> field-level error messages injected directly next to each input
   *   - element.value.trim() -> $.trim($field.val()) / $field.val().trim()
   *   - element.checked -> $checkbox.prop('checked')
   *   - confirmationAlert.classList.remove('d-none') -> $confirmationAlert.removeClass('d-none hidden').hide().fadeIn(400)
   * Assessment: The jQuery version provides a vastly superior user experience by placing real-time inline errors
   * next to each field, clearing errors instantly upon correction via event delegation (.on('input change')),
   * and smoothly animating the voucher feedback, while taking fewer lines of cleaner, chainable code.
   *
   * WHY A BROWSER CHECK NEVER REPLACES A SERVER CHECK:
   * Client-side validation runs in the user's browser, which is an untrusted environment.
   * Any visitor can trivially bypass client-side checks by disabling JavaScript in settings,
   * modifying HTML attributes (e.g. removing 'required') using browser DevTools, or sending
   * direct HTTP requests using command-line tools like curl or Postman.
   * Therefore, client-side validation is strictly for user experience (instant feedback).
   * Server-side validation is mandatory and irreplaceable because only the server can guarantee
   * data integrity, prevent malicious payloads (SQL Injection, Cross-Site Scripting), and verify
   * business rules securely on trusted infrastructure.
   *
   * DIFFERENCE BETWEEN .text() AND .html():
   * .text() sets or gets the text content of selected elements, automatically encoding special
   * HTML characters (e.g. '<' becomes '&lt;'). It is safe against XSS vulnerabilities.
   * .html() parses the string as HTML markup and injects DOM nodes. It is used when styled
   * elements (like <strong> tags, icons, badges) need to be rendered.
   *
   * DIFFERENCE BETWEEN .attr() AND .prop() ON A CHECKBOX:
   * .attr('checked') inspects the initial HTML attribute defined in the markup (the default state).
   * .prop('checked') inspects the live, current boolean property of the DOM object (true if checked, false if not).
   * For user interactions on checkboxes, .prop('checked') must always be used.
   * ==============================================================================
   */

  // Keep browser required attributes in HTML as first line of defence,
  // but suppress browser default bubbles so our jQuery inline errors take precedence
  $bookingForm.attr('novalidate', 'novalidate');

  /**
   * Helper: Display inline error message next to an invalid field
   * Traverses to parent container and injects or reveals .field-error-feedback
   * @param {jQuery} $field - Target input element
   * @param {string} message - Error description
   */
  function markFieldError($field, message) {
    // Add error classes from existing stylesheets (.is-invalid from Bootstrap, .error from base.css)
    $field.addClass('is-invalid error').removeClass('is-valid success');

    let $feedback = $field.siblings('.field-error-feedback');
    if ($feedback.length === 0) {
      $feedback = $('<div class="field-error-feedback invalid-feedback text-danger small mt-1 d-block"></div>');
      $field.after($feedback);
    }
    // Safe text injection via .text()
    $feedback.text(message).show();
  }

  /**
   * Helper: Clear inline error and mark field valid
   * @param {jQuery} $field - Target input element
   */
  function markFieldSuccess($field) {
    $field.removeClass('is-invalid error').addClass('is-valid success');
    $field.siblings('.field-error-feedback').text('').hide();
  }

  /**
   * Validate a single form field and update its inline state
   * @param {jQuery} $field
   * @returns {boolean} True if valid
   */
  function validateSingleField($field) {
    const id = $field.attr('id');

    if (id === 'client-name') {
      const val = $.trim($field.val());
      if (!val || val.length < 2) {
        markFieldError($field, 'Please enter your Gamer Tag or Full Name (at least 2 characters).');
        return false;
      }
      markFieldSuccess($field);
      return true;
    }

    if (id === 'client-phone') {
      const val = $.trim($field.val());
      const phoneRegex = /^\+?[0-9\s\-()]{10,18}$/;
      if (!val || !phoneRegex.test(val)) {
        markFieldError($field, 'Please provide a valid contact telephone number (e.g. +7 706 605 5465).');
        return false;
      }
      markFieldSuccess($field);
      return true;
    }

    if (id === 'client-email') {
      const val = $.trim($field.val());
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val || !emailRegex.test(val)) {
        markFieldError($field, 'Please enter a valid email address (e.g. gamer@example.kz).');
        return false;
      }
      markFieldSuccess($field);
      return true;
    }

    if (id === 'booking-date') {
      const val = $field.val();
      if (!val || val < todayStr) {
        markFieldError($field, 'Reservation date cannot be in the past.');
        return false;
      }
      markFieldSuccess($field);
      return true;
    }

    if (id === 'booking-time') {
      const val = $field.val();
      if (!val) {
        markFieldError($field, 'Please select your expected arrival time.');
        return false;
      }
      markFieldSuccess($field);
      return true;
    }

    if (id === 'policy-agree') {
      // Check current boolean property with .prop('checked')
      const isChecked = $field.prop('checked');
      if (!isChecked) {
        markFieldError($field, 'You must acknowledge the club conduct and 15-minute station hold policy.');
        return false;
      }
      markFieldSuccess($field);
      return true;
    }

    return true;
  }

  // Clear errors as soon as the visitor fixes the field using jQuery .on('input change')
  $bookingForm.on('input change', 'input, select, textarea', function () {
    const $field = $(this);
    if ($field.hasClass('is-invalid') || $field.hasClass('error')) {
      validateSingleField($field);
    }
  });


  // Main Form Submission Handler
  $bookingForm.on('submit', function (event) {
    /**
     * Explanation of event.preventDefault():
     * Without event.preventDefault(), the browser performs standard form submission,
     * sending an HTTP request and reloading the page. This would immediately wipe out
     * all selected stations, clear input values, and destroy our inline validation messages.
     */
    event.preventDefault();

    // Hide any previous top-level alerts
    $errorAlert.slideUp(200);
    $confirmationAlert.addClass('d-none');

    // Validate all individual fields
    const fieldsToValidate = [
      $clientNameInput,
      $clientPhoneInput,
      $clientEmailInput,
      $bookingDateInput,
      $bookingTimeInput,
      $policyAgreeCheckbox
    ];

    let isFormValid = true;
    let $firstInvalid = null;

    $.each(fieldsToValidate, function (i, $f) {
      if ($f.length && !validateSingleField($f)) {
        isFormValid = false;
        if (!$firstInvalid) {
          $firstInvalid = $f;
        }
      }
    });

    if (!isFormValid) {
      // Focus the first invalid field for accessibility
      if ($firstInvalid) {
        $firstInvalid.focus();
      }
      return;
    }

    // Success State: Generate Voucher Summary Details
    const zone = getSelectedZone();
    const pkg = $timeSlotSelect.val() || 'hourly';
    const seatList = selectedSeats.size > 0 ? Array.from(selectedSeats).join(', ') : 'Station Auto-Assigned';
    const totalCost = calculateBookingPrice(zone, pkg, selectedSeats.size > 0 ? selectedSeats.size : 1);
    const voucherRef = generateVoucherCode();
    const cleanName = $.trim($clientNameInput.val());
    const dateVal = $bookingDateInput.val();
    const timeVal = $bookingTimeInput.val();
    const formattedTotal = typeof formatKZT === 'function' ? formatKZT(totalCost) : `${totalCost} ₸`;

    const voucherHtml = `
      <h4 class="alert-heading h5 fw-bold">Reservation Voucher Confirmed!</h4>
      <p class="mb-1">Guest <strong>${cleanName}</strong>, your station(s) [<strong>${seatList}</strong>] at <strong>QazaqPeek Astana (Kenesary 69)</strong> are held for 15 minutes past arrival.</p>
      <hr class="border-secondary">
      <div class="d-flex flex-wrap justify-content-between small">
        <span>Voucher Code: <strong id="booking-reference-code">${voucherRef}</strong></span>
        <span>Date &amp; Time: <strong id="booking-confirmed-time">${dateVal} at ${timeVal}</strong></span>
        <span>Estimated Total: <strong>${formattedTotal}</strong></span>
        <span>Hold Period: <strong>15 Mins Past Arrival</strong></span>
      </div>
      <p class="small text-muted mt-2 mb-0">
        * Demonstration Confirmation: No payment was charged and no server record was saved. Settle upon check-in via Kaspi QR or Cash.
      </p>
    `;

    /**
     * METHOD CHAIN DEMONSTRATION (Chain of 4 links):
     * Link 1: $confirmationAlert.removeClass('d-none hidden') -> removes hiding CSS classes
     * Link 2: .hide() -> sets inline display:none instantly without transition
     * Link 3: .html(voucherHtml) -> injects rich HTML markup containing voucher details
     * Link 4: .fadeIn(400, callback) -> smoothly animates opacity from 0 to 1 over 400ms and executes callback
     */
    $confirmationAlert.removeClass('d-none hidden')
      .hide()
      .html(voucherHtml)
      .fadeIn(400, function () {
        // Smooth scroll to the voucher container
        $('html, body').animate({
          scrollTop: $confirmationAlert.offset().top - 80
        }, 300);
      });

    // Reset station selections and classes
    selectedSeats.clear();
    $seatingCard.find('.station-btn.selected')
      .removeClass('btn-info text-dark fw-bold selected')
      .addClass('btn-outline-info');
    updateChips();

    // Reset form fields
    $bookingForm[0].reset();
    $bookingForm.find('.is-valid, .success').removeClass('is-valid success');
    $bookingForm.find('.field-error-feedback').text('').hide();

    // Set today date back after reset
    $bookingDateInput.val(todayStr);
    refreshTotalDisplay();

    if (typeof displayGlobalToast === 'function') {
      displayGlobalToast(
        'Voucher Generated',
        `Reservation voucher ${voucherRef} confirmed for ${cleanName}!`,
        'success'
      );
    }
  });

  // Handle Form Reset
  $bookingForm.on('reset', function () {
    selectedSeats.clear();
    $seatingCard.find('.station-btn.selected')
      .removeClass('btn-info text-dark fw-bold selected')
      .addClass('btn-outline-info');
    updateChips();
    $bookingForm.find('.is-invalid, .is-valid, .error, .success').removeClass('is-invalid is-valid error success');
    $bookingForm.find('.field-error-feedback').text('').hide();
    $errorAlert.slideUp(200);
    $confirmationAlert.addClass('d-none');
    setTimeout(refreshTotalDisplay, 10);
  });

  // Initial calculation
  refreshTotalDisplay();
});
