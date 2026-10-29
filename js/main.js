/**
 * ================================================================================
 * QAZAQPEEK CYBER CLUB ASTANA — SHARED SITE-WIDE SCRIPTS (JQUERY REWRITE)
 * File: js/main.js
 * Authors: Dias Tursynbay & Adilet Ainadinov
 * Purpose: Global navigation highlighting, 24/7 Astana venue status,
 *          floating back-to-top behavior, and shared toast notifications.
 *
 * jQuery Version: 3.7.1 (minified CDN loaded via code.jquery.com)
 * Why $(function () { ... }) is needed:
 *   $(function () { ... }) is jQuery's standard shorthand for $(document).ready().
 *   It guarantees that the browser has fully parsed the HTML Document Object Model
 *   before any selectors, traversal, or event handlers run, preventing null-reference
 *   exceptions without waiting for heavy external assets (images, fonts) to finish.
 * ================================================================================
 */

'use strict';

/**
 * 1. REUSABLE UTILITY FUNCTIONS
 */

/**
 * Format an integer or float amount into Kazakhstani Tenge display string.
 * @param {number} amount - Monetary amount in KZT
 * @returns {string} Formatted currency string, e.g. "2,400 ₸"
 */
function formatKZT(amount) {
  if (typeof amount !== 'number' || isNaN(amount) || amount < 0) {
    return '0 ₸';
  }
  return amount.toLocaleString('ru-KZ') + ' ₸';
}

/**
 * Sanitize and trim a user-provided string to prevent whitespace issues.
 * @param {string} input - Raw text input
 * @returns {string} Trimmed text string
 */
function sanitizeString(input) {
  if (typeof input !== 'string') {
    return '';
  }
  return $.trim(input);
}

/**
 * Compute the current time in Astana (UTC+5) and operating status.
 * QazaqPeek Cyber Club operates 24/7.
 * @returns {{ timeString: string, isOpen: boolean, statusText: string }}
 */
function getAstanaClubStatus() {
  const now = new Date();
  // Format current time in Asia/Almaty (Astana timezone UTC+5)
  const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Almaty',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const timeString = timeFormatter.format(now);
  const isOpen = true;
  const statusText = `Open 24/7 • Astana Venue Time: ${timeString}`;

  return { timeString, isOpen, statusText };
}

/**
 * Render a non-intrusive accessible feedback toast notification using jQuery DOM & effects.
 * @param {string} title - Heading of the notice
 * @param {string} message - Feedback message
 * @param {'success'|'info'|'warning'|'error'} [type='info'] - State variant
 */
function displayGlobalToast(title, message, type = 'info') {
  const cleanTitle = sanitizeString(title);
  const cleanMessage = sanitizeString(message);
  const alertVariant = type === 'error' ? 'danger' : type;

  let $toastContainer = $('#qp-global-toast-container');
  if ($toastContainer.length === 0) {
    $toastContainer = $('<div id="qp-global-toast-container" class="position-fixed bottom-0 end-0 p-3" style="z-index: 1080;"></div>')
      .appendTo('body');
  }

  // Create toast element using jQuery DOM creation
  const $toastCard = $(`
    <div class="alert alert-${alertVariant} alert-dismissible fade show shadow-lg mb-2" role="alert">
      <strong class="d-block mb-1"></strong>
      <span class="toast-message-body"></span>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
  `).hide();

  // Safely populate text content using .text()
  $toastCard.find('strong').text(cleanTitle);
  $toastCard.find('.toast-message-body').text(cleanMessage);

  // Close handler with jQuery effect and callback
  $toastCard.find('.btn-close').on('click', function () {
    $toastCard.fadeOut(200, function () {
      $(this).remove();
    });
  });

  // Append and smoothly reveal
  $toastCard.appendTo($toastContainer).fadeIn(300);

  // Auto-remove after 4.5 seconds with fadeOut effect and removal callback
  setTimeout(function () {
    if ($toastCard.parent().length) {
      $toastCard.fadeOut(250, function () {
        $(this).remove();
      });
    }
  }, 4500);
}

/**
 * 2. JQUERY INITIALIZATION ROUTINES
 */

/**
 * Synchronize the active state on top navigation links based on current pathname.
 * Uses jQuery traversal (.each()), attribute inspection (.attr()), and class switching (.addClass(), .removeClass()).
 */
function syncActiveNavigation() {
  const $navLinks = $('.navbar-nav .nav-link');
  if ($navLinks.length === 0) return;

  const currentPath = window.location.pathname.toLowerCase();
  const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  $navLinks.each(function () {
    const $link = $(this);
    const href = $link.attr('href');
    if (!href) return;
    const linkFile = href.substring(href.lastIndexOf('/') + 1);

    if (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html')) {
      $link.addClass('active').attr('aria-current', 'page');
    } else {
      $link.removeClass('active').removeAttr('aria-current');
    }
  });
}

/**
 * Display club operating hours status badge in the navbar brand area.
 * Uses jQuery DOM injection (.insertAfter()) and .text().
 */
function renderAstanaStatusBadge() {
  const statusInfo = getAstanaClubStatus();
  const $brandEl = $('.navbar .navbar-brand');

  if ($brandEl.length && $('#club-live-status').length === 0) {
    $('<span id="club-live-status" class="badge bg-success bg-opacity-25 text-success border border-success ms-2 small d-none d-lg-inline-block"></span>')
      .text(`● ${statusInfo.statusText}`)
      .insertAfter($brandEl);
  }
}

/**
 * Initialize smooth scroll behavior on back-to-top floating button.
 * Uses jQuery event listeners (.on('scroll'), .on('click')),
 * effects (.fadeIn(200), .fadeOut(200), .animate()), and $(this).
 */
function setupBackToTop() {
  const $backToTopBtn = $('.back-to-top-btn');
  if ($backToTopBtn.length === 0) return;

  // Window scroll event listener
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $backToTopBtn.removeClass('hidden d-none').fadeIn(200);
    } else {
      $backToTopBtn.fadeOut(200, function () {
        $(this).addClass('hidden');
      });
    }
  });

  // Smooth scroll to top via jQuery .animate()
  $backToTopBtn.on('click', function (event) {
    // Explanation: prevent default jump-to-hash navigation to allow smooth animated scrolling
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 400);
  });
}

/**
 * Global Document Ready Entry Point
 * jQuery Version: 3.7.1
 * Why needed: Guarantees DOM readiness before executing selectors and attaching event listeners.
 */
$(function () {
  syncActiveNavigation();
  renderAstanaStatusBadge();
  setupBackToTop();
});
