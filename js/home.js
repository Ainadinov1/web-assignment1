/**
 * ================================================================================
 * QAZAQPEEK CYBER CLUB ASTANA — HOME PAGE CONTROLLER (JQUERY REWRITE)
 * File: js/home.js
 * Author: Dias Tursynbay
 *
 * jQuery Version: 3.7.1 (minified CDN loaded via code.jquery.com)
 * Why $(function () { ... }) is needed:
 *   $(function () { ... }) is jQuery's standard shorthand for $(document).ready().
 *   It guarantees that the browser has fully parsed the HTML Document Object Model
 *   before any selectors, traversal, or event handlers run, preventing null-reference
 *   exceptions without waiting for heavy external assets (images, fonts) to finish.
 *
 * Assignment 4 Highlights:
 *   - Rewritten Feature 1: Show-and-hide of Review Submission Block (.slideToggle(300, cb))
 *   - Rewritten Feature 2: Dynamic List / Cards Built in Code from Array (.append(), $.each())
 *   - Delegated Event Handler: Persistent ancestor listening to dynamically added cards
 *   - Selectors, Traversal & Chaining (.find(), .closest(), .siblings(), :first, :visible)
 *   - Effects with duration and callback (.slideToggle, .slideUp, .fadeIn, .fadeOut)
 * ================================================================================
 */

'use strict';

/**
 * 1. REAL PROJECT DATA ARRAYS
 * Array of 7 authentic 2GIS review objects with at least 6 meaningful properties each.
 */
const REVIEWS_DATA = [
  {
    id: 1,
    author: 'Постоянный клиент',
    role: 'Regular Player',
    rating: 5,
    category: 'hardware',
    categoryLabel: 'Bonus & PCs',
    text: 'Отличное место, цены очень хорошие плюс бонусная система просто топ. По характеристикам компов очень отличное место. Поэтому заранее бронируйте и кайфуйте по атмосфере. Сотрудники решают технические проблемы за 5 минут!',
    date: '2026-10-18',
    verifiedUrl: 'https://2gis.kz/reviews/70000001101281437/review/266228732'
  },
  {
    id: 2,
    author: 'Гость QazaqPeek',
    role: 'Verified Guest',
    rating: 5,
    category: 'service',
    categoryLabel: 'Staff & Service',
    text: 'Компьютерный клуб отличный — уютная атмосфера, хорошее оборудование и стабильный интернет. Хочу особенно отметить администратора Алину: всегда внимательна, дружелюбна и быстро помогает решить любые вопросы.',
    date: '2026-10-15',
    verifiedUrl: 'https://2gis.kz/reviews/70000001101281437/review/204828601'
  },
  {
    id: 3,
    author: 'Игрок LAN-арены',
    role: 'LAN Arena Gamer',
    rating: 5,
    category: 'support',
    categoryLabel: 'Fast Tech Support',
    text: 'Отличный клуб, всего несколько дней уже тут. Очень клиентоориентированные сотрудники, решают технические а также системные проблемы за короткое время. Находят компромисс, остался очень довольным!',
    date: '2026-10-12',
    verifiedUrl: 'https://2gis.kz/reviews/70000001101281437/review/266230830'
  },
  {
    id: 4,
    author: 'Ернар Б.',
    role: 'VIP 2 Bootcamp Captain',
    rating: 5,
    category: 'hardware',
    categoryLabel: 'Hardware & 360Hz',
    text: 'Второй VIP буткемп с Alienware 360Hz — это просто космос для CS2 праков. Пинг до Франкфурта и Стокгольма идеальный, кресла удобные, кондиционер справляется на ура. Лучший буткемп в Астане.',
    date: '2026-10-08',
    verifiedUrl: 'https://2gis.kz/astana/firm/70000001101281437/tab/reviews'
  },
  {
    id: 5,
    author: 'Алихан М.',
    role: 'Night Package Regular',
    rating: 5,
    category: 'service',
    categoryLabel: 'Night Atmosphere',
    text: 'Брали ночной пакет с пятницы на субботу. Администраторы вежливые, кастомные напитки приносят прямо к месту. Девайсы чистые, мышки не залипают, ковры огромные. Обязательно вернемся!',
    date: '2026-10-03',
    verifiedUrl: 'https://2gis.kz/astana/firm/70000001101281437/tab/reviews'
  },
  {
    id: 6,
    author: 'Мирас Д.',
    role: 'Tournament Participant',
    rating: 5,
    category: 'support',
    categoryLabel: 'Tournament Organization',
    text: 'Участвовали в Astana Open Cup 5v5. Организация турнира на высоте, задержек по сетке почти не было, админы оперативно настроили драйвера на наши наушники и мышки. Респект!',
    date: '2026-09-28',
    verifiedUrl: 'https://2gis.kz/astana/firm/70000001101281437/tab/reviews'
  },
  {
    id: 7,
    author: 'Данияр С.',
    role: 'Dota 2 Midlaner',
    rating: 4,
    category: 'service',
    categoryLabel: 'Snack Bar & Speed',
    text: 'Кухня и снек-бар очень быстрые: сэндвичи горячие, энергетики всегда холодные. В часы пик бывает шумно в стандартной зоне, но в наушниках изоляция отличная. Ставлю 4.8!',
    date: '2026-09-21',
    verifiedUrl: 'https://2gis.kz/astana/firm/70000001101281437/tab/reviews'
  }
];

/**
 * Filter reviews array based on category and search query.
 * @param {Array<Object>} reviews - Source array
 * @param {string} category - Category slug ('all', 'hardware', 'service', 'support')
 * @param {string} searchQuery - Search input keyword
 * @returns {Array<Object>} Filtered array
 */
function filterReviews(reviews, category, searchQuery) {
  const query = $.trim(searchQuery).toLowerCase();

  return reviews.filter(review => {
    const matchesCategory = category === 'all' || review.category === category;
    const matchesSearch = !query ||
      review.text.toLowerCase().includes(query) ||
      review.author.toLowerCase().includes(query) ||
      (review.categoryLabel && review.categoryLabel.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });
}

/**
 * Select a random review using Math.random() to feature in a spotlight banner.
 * Meaningful usage: Highlights player experience of the day.
 * @param {Array<Object>} reviews - Source array
 * @returns {Object|null} Random review object
 */
function pickRandomFeaturedReview(reviews) {
  if (!reviews || reviews.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * reviews.length);
  return reviews[randomIndex];
}


/**
 * ==============================================================================
 * REWRITTEN FEATURE 2: DYNAMIC LIST / CARDS BUILT IN CODE FROM AN ARRAY
 * Comparison with plain-JavaScript version in old-js-version.js:
 * Plain JS lines replaced:
 *   - document.createElement('div') -> $('<div class="..."></div>')
 *   - element.className, element.dataset, element.appendChild -> jQuery chaining (.attr(), .append())
 *   - container.innerHTML = '' -> $container.empty()
 *   - array.forEach() -> $.each() and direct array iteration with jQuery builders
 * Assessment: The jQuery version is substantially shorter (saving ~35 lines of boilerplate DOM construction),
 * far more readable due to template-like HTML string fragments, and encapsulates element creation and appending cleanly.
 * ==============================================================================
 */

/**
 * Construct a single review card column using pure jQuery DOM methods.
 * Demonstrates: .attr(), .text(), .append(), .addClass(), and safe content injection.
 * @param {Object} review - Single review data object
 * @returns {jQuery} jQuery object representing the card column
 */
function createReviewCard(review) {
  const starCount = Math.min(Math.max(review.rating, 1), 5);
  const starsText = `${'★'.repeat(starCount)}${'☆'.repeat(5 - starCount)} ${starCount}.0`;

  // jQuery element creation with attributes and classes
  const $col = $('<div class="col-12 col-md-6 col-lg-4 review-item-col"></div>')
    .attr('data-category', review.category);

  const $card = $('<div class="card bg-custom-card text-light h-100 shadow-sm border-secondary d-flex flex-column justify-content-between p-3"></div>');

  // Top Body
  const $bodyTop = $('<div></div>');
  const $headerRow = $('<div class="d-flex justify-content-between align-items-center mb-2"></div>');

  // Difference note: .text() is used here instead of .html() to prevent XSS and safely render plain text
  const $starsSpan = $('<span class="text-warning fw-bold"></span>').text(starsText);
  const $badge = $('<span class="badge bg-info text-dark"></span>').text(review.categoryLabel || 'Community Review');

  $headerRow.append($starsSpan, $badge);

  const $blockquote = $('<blockquote class="blockquote small text-light mb-3"></blockquote>');
  const $quoteText = $('<p class="fst-italic mb-0"></p>').text(`“${review.text}”`);
  $blockquote.append($quoteText);

  $bodyTop.append($headerRow, $blockquote);

  // Footer Bottom with Upvote / Helpful Button (Target for Delegated Event Handling)
  const $footerRow = $('<div class="pt-2 border-top border-secondary d-flex justify-content-between align-items-center"></div>');

  const $authorBlock = $('<div></div>');
  const $authorName = $('<span class="small fw-bold text-light d-block review-author-name"></span>').text(review.author);
  const $authorDate = $('<span class="text-muted" style="font-size: 0.75rem;"></span>').text(`${review.role} • ${review.date}`);
  $authorBlock.append($authorName, $authorDate);

  const $btnGroup = $('<div class="d-flex gap-2 align-items-center"></div>');

  // Delegated target element created dynamically in code
  const $helpfulBtn = $('<button type="button" class="btn btn-outline-info btn-sm review-helpful-btn" title="Mark this review as helpful"></button>')
    .attr('data-votes', '0')
    .html('👍 <span class="vote-count">0</span>');

  const $linkBtn = $('<a class="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">2GIS &rarr;</a>')
    .attr('href', review.verifiedUrl || 'https://2gis.kz/astana');

  $btnGroup.append($helpfulBtn, $linkBtn);
  $footerRow.append($authorBlock, $btnGroup);

  $card.append($bodyTop, $footerRow);
  $col.append($card);

  return $col;
}

/**
 * Render the full reviews list into target container using jQuery .empty() and .append().
 * Handles no-results empty state dynamically.
 * @param {Array<Object>} reviews - Reviews to display
 * @param {jQuery} $container - Target jQuery row element
 * @returns {number} The count of rendered reviews
 */
function renderReviewsList(reviews, $container) {
  if (!$container || $container.length === 0) return 0;

  // Clear previous markup completely using jQuery .empty()
  $container.empty();

  if (!reviews || reviews.length === 0) {
    const $emptyState = $(`
      <div class="col-12 text-center py-5">
        <div class="p-4 bg-dark bg-opacity-50 rounded border border-secondary">
          <h3 class="h5 text-warning mb-2">No matching reviews found</h3>
          <p class="text-muted small mb-3">Try adjusting your search terms or selecting another category filter.</p>
          <button type="button" id="reviews-reset-btn" class="btn btn-outline-info btn-sm">Reset All Filters</button>
        </div>
      </div>
    `);

    $emptyState.find('#reviews-reset-btn').on('click', function () {
      $('#reviews-search-input').val('');
      $('#review-filter-all').trigger('click');
    });

    $container.append($emptyState);
    return 0;
  }

  // Iterate over review array using $.each() and append each card
  $.each(reviews, function (index, review) {
    const $cardCol = createReviewCard(review);
    $container.append($cardCol);
  });

  return reviews.length;
}


/**
 * 3. JQUERY DOM SETUP & EVENT LISTENERS
 * Wrapped in $(function () { ... }) (jQuery 3.7.1 DOM Ready)
 */
$(function () {
  const $reviewsSection = $('#reviews-section');
  if ($reviewsSection.length === 0) return;

  const $reviewsRow = $reviewsSection.find('.row.g-4');
  if ($reviewsRow.length === 0) return;

  // Working copy of reviews data
  const activeReviews = [...REVIEWS_DATA];
  let currentCategory = 'all';
  let currentSort = 'rating';

  // 1. DYNAMIC CONTROLS BAR: Search input, Category filter buttons, Sort buttons, and + Write Review toggle
  const $controlsContainer = $('<div id="reviews-controls-bar" class="bg-custom-card p-3 rounded-3 border border-secondary mb-4 shadow-sm"></div>');
  const $topControlsRow = $('<div class="row g-3 align-items-center"></div>');

  // Search Column
  const $searchCol = $('<div class="col-12 col-md-5"></div>');
  const $searchInput = $('<input type="search" id="reviews-search-input" class="form-control bg-dark text-light border-secondary" placeholder="Search reviews by keyword or author..." aria-label="Search reviews">');
  $searchCol.append($searchInput);

  // Filter Buttons Column
  const $filterCol = $('<div class="col-12 col-md-7 d-flex flex-wrap gap-2 justify-content-md-end"></div>');

  const categories = [
    { id: 'all', label: 'All Reviews' },
    { id: 'hardware', label: 'Hardware & PCs' },
    { id: 'service', label: 'Staff & Atmosphere' },
    { id: 'support', label: 'Tech Support' }
  ];

  $.each(categories, function (index, cat) {
    const isAll = cat.id === 'all';
    const $btn = $('<button type="button" class="btn btn-sm review-filter-btn"></button>')
      .attr('id', `review-filter-${cat.id}`)
      .attr('data-category', cat.id)
      .text(cat.label)
      .addClass(isAll ? 'btn-info text-dark fw-bold active' : 'btn-outline-secondary');

    // Filter button click handler with method chaining & $(this)
    $btn.on('click', function () {
      currentCategory = cat.id;

      /**
       * METHOD CHAIN DEMONSTRATION (Chain of 4 links):
       * Link 1: $(this).addClass('btn-info text-dark fw-bold active') -> applies active styling to clicked button
       * Link 2: .removeClass('btn-outline-secondary') -> removes default inactive border style from clicked button
       * Link 3: .siblings('.review-filter-btn') -> traverses DOM to select all sibling filter buttons in the container
       * Link 4: .removeClass('btn-info text-dark fw-bold active').addClass('btn-outline-secondary') -> resets siblings to inactive state
       */
      $(this).addClass('btn-info text-dark fw-bold active')
        .removeClass('btn-outline-secondary')
        .siblings('.review-filter-btn')
        .removeClass('btn-info text-dark fw-bold active')
        .addClass('btn-outline-secondary');

      applyFilters();
    });

    $filterCol.append($btn);
  });

  // Action Button: Add Review Toggle Button
  const $addReviewToggleBtn = $('<button type="button" id="add-review-toggle-btn" class="btn btn-sm btn-outline-info ms-auto ms-md-0 fw-bold">+ Write a Review</button>');
  $filterCol.append($addReviewToggleBtn);

  $topControlsRow.append($searchCol, $filterCol);
  $controlsContainer.append($topControlsRow);

  // Dynamic Sort Bar
  const $sortBar = $('<div class="d-flex flex-wrap align-items-center gap-2 mt-3 pt-2 border-top border-secondary small"></div>');
  $sortBar.append('<span class="text-muted fw-semibold">Sort Reviews:</span>');
  const sortOptions = [
    { key: 'rating', label: '★ Highest Rating' },
    { key: 'date', label: '📅 Newest First' },
    { key: 'helpful', label: '👍 Most Helpful' }
  ];
  $.each(sortOptions, function (i, opt) {
    const isDefault = opt.key === 'rating';
    const $sortBtn = $('<button type="button" class="btn btn-sm review-sort-btn"></button>')
      .attr('data-sort-key', opt.key)
      .text(opt.label)
      .addClass(isDefault ? 'btn-info text-dark fw-bold active' : 'btn-outline-secondary');

    $sortBtn.on('click', function () {
      currentSort = opt.key;
      $(this).addClass('btn-info text-dark fw-bold active')
        .removeClass('btn-outline-secondary')
        .siblings('.review-sort-btn')
        .removeClass('btn-info text-dark fw-bold active')
        .addClass('btn-outline-secondary');
      applyFilters();
    });

    $sortBar.append($sortBtn);
  });
  $controlsContainer.append($sortBar);

  // Status Counter Row
  const $statusRow = $('<div class="d-flex justify-content-between align-items-center mt-2 pt-2 border-top border-secondary small text-muted"></div>');
  const $countIndicator = $('<span id="reviews-count-indicator"></span>');
  const $spotLightBadge = $('<span class="text-accent d-none d-sm-inline"></span>');

  const featured = pickRandomFeaturedReview(activeReviews);
  if (featured) {
    $spotLightBadge.text(`★ Daily Highlight: “${featured.author}” on ${featured.categoryLabel}`);
  }

  $statusRow.append($countIndicator, $spotLightBadge);
  $controlsContainer.append($statusRow);

  // Dynamic Rating Summary Breakdown Bar
  function renderRatingSummary() {
    $('#reviews-rating-summary').remove();
    const totalReviews = activeReviews.length;
    const avgScore = (activeReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);
    const fiveStarCount = activeReviews.filter(r => r.rating === 5).length;
    const fiveStarPct = Math.round((fiveStarCount / totalReviews) * 100);

    const $summaryBox = $(`
      <div id="reviews-rating-summary" class="p-3 bg-dark bg-opacity-75 rounded-3 border border-secondary mb-3 shadow-sm">
        <div class="row g-2 align-items-center">
          <div class="col-12 col-md-4 text-center text-md-start">
            <span class="h3 fw-bold text-accent mb-0">${avgScore} ★</span>
            <span class="small text-muted d-block">Overall 2GIS Player Satisfaction</span>
          </div>
          <div class="col-12 col-md-8">
            <div class="d-flex justify-content-between small text-light mb-1">
              <span>5-Star Verified Reviews</span>
              <span><strong>${fiveStarPct}%</strong> (${fiveStarCount} of ${totalReviews})</span>
            </div>
            <div class="progress" style="height: 8px;">
              <div class="progress-bar bg-info" role="progressbar" style="width: ${fiveStarPct}%;" aria-valuenow="${fiveStarPct}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    `);
    $reviewsRow.before($summaryBox);
  }

  // Insert controls bar dynamically before the reviews row
  $reviewsRow.before($controlsContainer);
  renderRatingSummary();


  // 2. DYNAMIC REVIEW SUBMISSION FORM CARD
  const $submitFormCard = $(`
    <div id="new-review-card" class="p-3 bg-dark rounded border border-info mb-4" style="display: none;">
      <h3 class="h6 fw-bold text-accent mb-3">Share Your QazaqPeek Experience (Demonstration Form)</h3>
      <form id="submit-review-form" novalidate>
        <div class="row g-2 mb-2">
          <div class="col-12 col-md-5">
            <label for="review-author-input" class="form-label text-light small fw-semibold">Your Name / Gamer Tag:</label>
            <input type="text" class="form-control form-control-sm bg-dark text-light border-secondary" id="review-author-input" placeholder="e.g. Dias / ShadowAce" required>
          </div>
          <div class="col-12 col-md-4">
            <label for="review-category-select" class="form-label text-light small fw-semibold">Review Category:</label>
            <select class="form-select form-select-sm bg-dark text-light border-secondary" id="review-category-select">
              <option value="hardware">Hardware &amp; PCs</option>
              <option value="service">Staff &amp; Service</option>
              <option value="support">Fast Tech Support</option>
            </select>
          </div>
          <div class="col-12 col-md-3">
            <label for="review-rating-select" class="form-label text-light small fw-semibold">Rating:</label>
            <select class="form-select form-select-sm bg-dark text-light border-secondary" id="review-rating-select">
              <option value="5">★★★★★ (5.0)</option>
              <option value="4">★★★★☆ (4.0)</option>
              <option value="3">★★★☆☆ (3.0)</option>
              <option value="2">★★☆☆☆ (2.0)</option>
              <option value="1">★☆☆☆☆ (1.0)</option>
            </select>
          </div>
        </div>
        <div class="mb-2">
          <label for="review-text-input" class="form-label text-light small fw-semibold">Feedback Comment:</label>
          <textarea class="form-control form-control-sm bg-dark text-light border-secondary" id="review-text-input" rows="2" maxlength="250" placeholder="Share details about rig performance, staff response, or club atmosphere..." required></textarea>
          <div id="review-char-count" class="text-end text-muted small mt-1">0 / 250 characters (minimum 10 required)</div>
        </div>
        <div class="d-flex justify-content-end gap-2 pt-2 border-top border-secondary">
          <button type="button" id="cancel-review-btn" class="btn btn-secondary btn-sm">Cancel</button>
          <button type="submit" id="submit-review-btn" class="btn btn-info btn-sm fw-bold text-dark">Submit Review &rarr;</button>
        </div>
      </form>
    </div>
  `);

  $controlsContainer.after($submitFormCard);


  /**
   * ==============================================================================
   * REWRITTEN FEATURE 1: SHOW-AND-HIDE OF A BLOCK
   * Comparison with plain-JavaScript version in old-js-version.js:
   * Plain JS lines replaced:
   *   - element.classList.contains('d-none'), remove('d-none'), add('d-none') -> $card.slideToggle(300, callback)
   *   - element.textContent = ... -> $btn.text(...)
   *   - addEventListener('click', ...) -> .on('click', ...)
   * Assessment: The jQuery version is both shorter and much clearer: instead of manual CSS class toggling
   * and abrupt visibility changes, jQuery provides animated sliding with an integrated completion callback,
   * handling intermediate states and accessibility focus in a single concise call.
   * ==============================================================================
   */
  $addReviewToggleBtn.on('click', function () {
    const $btn = $(this);

    // jQuery Effect: .slideToggle() with duration (300ms) and completion callback
    $submitFormCard.slideToggle(300, function () {
      // $(this) inside callback refers to the animated element ($submitFormCard)
      const isVisible = $(this).is(':visible');
      $btn.text(isVisible ? '✕ Close Form' : '+ Write a Review');
      if (isVisible) {
        $('#review-author-input').focus();
      }
    });
  });

  // Cancel button uses .slideUp(300) effect with callback
  $('#cancel-review-btn').on('click', function () {
    $submitFormCard.slideUp(300, function () {
      $addReviewToggleBtn.text('+ Write a Review');
    });
  });


  /**
   * ==============================================================================
   * DELEGATED EVENT HANDLER DEMONSTRATION
   * Pattern: $("#parent").on("click", ".child", handler)
   *
   * Why binding directly to .review-helpful-btn would NOT work:
   * The review cards are constructed dynamically in code from the REVIEWS_DATA array.
   * If we wrote $('.review-helpful-btn').on('click', ...), jQuery would query the DOM
   * at that exact moment and bind listeners only to elements already present.
   * Elements appended later by renderReviewsList() or user submission did not exist
   * when the script executed and would have zero event listeners attached.
   *
   * By delegating the event to $reviewsRow (which permanently exists in the HTML):
   * the browser's native DOM event bubbling propagates the 'click' event upward to
   * $reviewsRow. jQuery inspects event.target against the selector '.review-helpful-btn'
   * and fires the handler for current AND future dynamically created buttons.
   * ==============================================================================
   */
  $reviewsRow.on('click', '.review-helpful-btn', function (event) {
    // Explanation: prevent default link/button jump behavior
    event.preventDefault();

    const $btn = $(this);
    const $countSpan = $btn.find('.vote-count');
    let currentVotes = parseInt($btn.attr('data-votes'), 10) || 0;
    currentVotes += 1;

    // Update attributes, classes and text
    $btn.attr('data-votes', currentVotes)
      .addClass('btn-info text-dark fw-bold')
      .removeClass('btn-outline-info');

    $countSpan.text(currentVotes);

    // Traversal: reach parent card and find author name
    const authorName = $btn.closest('.card').find('.review-author-name').text();
    if (typeof displayGlobalToast === 'function') {
      displayGlobalToast('Review Upvoted', `Marked ${authorName}'s review as helpful!`, 'success');
    }
  });


  // Real-time character counter on review textarea using jQuery .on('input')
  const $reviewText = $('#review-text-input');
  const $charCounter = $('#review-char-count');

  $reviewText.on('input', function () {
    const len = $(this).val().length;
    $charCounter.text(`${len} / 250 characters (minimum 10 required)`);
    if (len >= 10) {
      $charCounter.removeClass('text-danger').addClass('text-muted');
    } else {
      $charCounter.removeClass('text-muted').addClass('text-danger');
    }
  });


  // Live search input using jQuery .on('input')
  $searchInput.on('input', function () {
    applyFilters();
  });


  // Centralized filter, sort & render pipeline
  function applyFilters() {
    const query = $searchInput.val();
    let filtered = filterReviews(activeReviews, currentCategory, query);

    // Apply active sort criterion
    if (currentSort === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'date') {
      filtered = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (currentSort === 'helpful') {
      filtered = [...filtered].sort((a, b) => (parseInt(b.votes || 0, 10)) - (parseInt(a.votes || 0, 10)));
    }

    const count = renderReviewsList(filtered, $reviewsRow);

    // Update counter display with .text()
    $countIndicator.text(`Showing ${count} of ${activeReviews.length} community reviews`);

    // Use jQuery filter selector :first on rendered review items
    const $firstCard = $reviewsRow.find('.review-item-col:first');
    if ($firstCard.length > 0) {
      // Subtle visual highlight on top matching review
      $firstCard.find('.card').addClass('border-info');
    }
  }


  // Submit new review handler
  $('#submit-review-form').on('submit', function (event) {
    /**
     * Explanation of event.preventDefault():
     * Without event.preventDefault(), the browser performs standard form submission,
     * triggering a page reload (HTTP GET/POST), which would wipe out runtime JavaScript state,
     * destroy newly generated reviews, and cancel our dynamic UI updates.
     */
    event.preventDefault();

    const $authorInput = $('#review-author-input');
    const $categorySelect = $('#review-category-select');
    const $ratingSelect = $('#review-rating-select');
    const $textInput = $('#review-text-input');

    const authorVal = $.trim($authorInput.val());
    const categoryVal = $categorySelect.val();
    const ratingVal = parseInt($ratingSelect.val(), 10) || 5;
    const textVal = $.trim($textInput.val());

    let hasError = false;

    if (!authorVal || authorVal.length < 2) {
      $authorInput.addClass('is-invalid error');
      hasError = true;
    } else {
      $authorInput.removeClass('is-invalid error');
    }

    if (!textVal || textVal.length < 10) {
      $textInput.addClass('is-invalid error');
      hasError = true;
    } else {
      $textInput.removeClass('is-invalid error');
    }

    if (hasError) return;

    // Create new review object
    const newReview = {
      id: Date.now(),
      author: authorVal,
      role: 'Community Gamer',
      rating: ratingVal,
      category: categoryVal,
      categoryLabel: $categorySelect.find('option:selected').text(),
      text: textVal,
      date: new Date().toISOString().split('T')[0],
      verifiedUrl: 'https://2gis.kz/astana'
    };

    // Prepend to active reviews array
    activeReviews.unshift(newReview);

    // Re-render reviews with animation
    applyFilters();

    // Reset and hide form with jQuery .slideUp() and callback
    $('#submit-review-form')[0].reset();
    $charCounter.text('0 / 250 characters (minimum 10 required)');
    $submitFormCard.slideUp(300, function () {
      $addReviewToggleBtn.text('+ Write a Review');
    });

    if (typeof displayGlobalToast === 'function') {
      displayGlobalToast(
        'Review Submitted!',
        `Thank you, ${authorVal}! Your demonstration review has been added to the top of the feed.`,
        'success'
      );
    }
  });


  // Footer Newsletter Form Submission Handler
  $('#newsletter-form').on('submit', function (event) {
    event.preventDefault();
    const $emailInput = $(this).find('input[type="email"]');
    const emailVal = $.trim($emailInput.val());
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let $status = $('#newsletter-status');

    if ($status.length === 0) {
      $status = $('<div id="newsletter-status" class="small mt-2"></div>').insertAfter($(this));
    }

    if (!emailVal || !emailRegex.test(emailVal)) {
      $emailInput.addClass('is-invalid error');
      $status.removeClass('text-success').addClass('text-danger').text('Please enter a valid email address (e.g., gamer@example.kz).').hide().fadeIn(250);
      return;
    }

    $emailInput.removeClass('is-invalid error').val('');
    $status.removeClass('text-danger').addClass('text-success').text('Subscribed! Check your inbox for upcoming LAN announcements.').hide().fadeIn(300);

    setTimeout(function () {
      $status.fadeOut(300);
    }, 4000);
  });

  // 4. INTERACTIVE FACILITY GALLERY MODAL PREVIEW
  $('#gallery-section').on('click', '.facility-img-thumb, figure, .card-img-top', function (e) {
    e.preventDefault();
    const $img = $(this).is('img') ? $(this) : $(this).find('img');
    if ($img.length === 0) return;

    const imgSrc = $img.attr('src');
    const imgAlt = $img.attr('alt') || 'QazaqPeek Facility Area';
    const caption = $img.closest('figure, .card').find('figcaption, h3, .card-title').text() || imgAlt;

    let $galleryModal = $('#qp-gallery-modal');
    if ($galleryModal.length === 0) {
      $galleryModal = $(`
        <div class="modal fade" id="qp-gallery-modal" tabindex="-1" aria-labelledby="qpGalleryModalHeading" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content bg-custom-card text-light border-secondary">
              <div class="modal-header bg-dark border-secondary">
                <h5 class="modal-title text-accent fw-bold" id="qpGalleryModalHeading">Venue Arena Preview</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center p-3">
                <img id="qp-modal-preview-img" src="" alt="" class="img-fluid rounded border border-secondary mb-3 shadow" style="max-height: 480px; width: 100%; object-fit: cover;">
                <h4 id="qp-modal-preview-title" class="h6 text-light mb-1"></h4>
                <p class="small text-muted mb-0">High-refresh rate arena stations with 240Hz–360Hz monitors and zero LAN jitter at Kenesary 69.</p>
              </div>
              <div class="modal-footer border-secondary justify-content-between">
                <a href="booking.html" class="btn btn-info btn-sm fw-bold text-dark">Book a Station in this Zone &rarr;</a>
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `).appendTo('body');
    }

    $galleryModal.find('#qp-modal-preview-img').attr('src', imgSrc).attr('alt', imgAlt);
    $galleryModal.find('#qp-modal-preview-title').text(caption);

    // Show modal via Bootstrap Modal API or trigger
    if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
      const bsModal = bootstrap.Modal.getOrCreateInstance($galleryModal[0]);
      bsModal.show();
    }
  });

  // Initial render
  applyFilters();
});
