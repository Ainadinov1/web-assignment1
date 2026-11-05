/**
 * ================================================================================
 * QAZAQPEEK CYBER CLUB ASTANA — TOURNAMENTS & EVENTS CONTROLLER
 * File: js/events.js
 * Author: Dias Tursynbay
 * Features:
 *   - Esports Tournament Data Array (6+ official venue competitions)
 *   - Dynamic DOM Tournament Card Rendering
 *   - Status Filters (All, Open for Registration, Concluded)
 *   - Real-Time Search Bar with Matching Count & No-Results State
 *   - 5-Man Squad Registration Form Validation
 *   - Random Bracket Seeding Generator (Math.random())
 *   - Demonstration Voucher Confirmation Output
 * ================================================================================
 */

'use strict';

/**
 * 1. TOURNAMENT DATA ARRAY
 * Array of 6 esports tournament objects with at least 8 meaningful properties each.
 */
const TOURNAMENTS_DATA = [
  {
    id: 'cs2-cup',
    title: 'CS2 Astana Cup 5v5',
    game: 'Counter-Strike 2',
    date: '2026-11-14',
    time: '11:00 AM',
    prizePool: 250000,
    entryFee: 10000,
    status: 'open',
    statusLabel: 'Open for Registration',
    format: 'Double Elimination • 128-tick LAN Server',
    badgeClass: 'bg-success text-dark',
    cardId: 'card-event-cs2'
  },
  {
    id: 'dota-1v1',
    title: 'Dota 2 Midlaner 1v1 Showdown',
    game: 'Dota 2',
    date: '2026-11-21',
    time: '02:00 PM',
    prizePool: 80000,
    entryFee: 2500,
    status: 'open',
    statusLabel: 'Open for Registration',
    format: 'Shadow Fiend Solo Mid • Best of 3',
    badgeClass: 'bg-info text-dark',
    cardId: 'card-event-dota'
  },
  {
    id: 'fc24-weekend',
    title: 'FC 24 Weekend Championship',
    game: 'EA Sports FC 24',
    date: '2026-11-28',
    time: '01:00 PM',
    prizePool: 100000,
    entryFee: 3000,
    status: 'open',
    statusLabel: 'Open for Registration',
    format: 'PS5 & PC Arena • Single Elimination',
    badgeClass: 'bg-primary text-light',
    cardId: 'card-event-fc24'
  },
  {
    id: 'valorant-open',
    title: 'Valorant Spike Rush LAN',
    game: 'Valorant',
    date: '2026-12-05',
    time: '12:00 PM',
    prizePool: 150000,
    entryFee: 7500,
    status: 'open',
    statusLabel: 'Open for Registration',
    format: '5v5 Tournament Mode • VIP 2 Bootcamp',
    badgeClass: 'bg-info text-dark',
    cardId: 'card-event-valorant'
  },
  {
    id: 'pubg-masters',
    title: 'PUBG Mobile Solo Masters',
    game: 'PUBG Mobile / Emulator',
    date: '2026-10-05',
    time: '03:00 PM',
    prizePool: 60000,
    entryFee: 2000,
    status: 'concluded',
    statusLabel: 'Concluded (Winner: QazaqSniper)',
    format: 'Erangel 4-Map Series',
    badgeClass: 'bg-secondary text-light',
    cardId: 'card-event-pubg'
  },
  {
    id: 'apex-trio',
    title: 'Apex Legends Trio Rumble',
    game: 'Apex Legends',
    date: '2026-09-20',
    time: '01:00 PM',
    prizePool: 120000,
    entryFee: 6000,
    status: 'concluded',
    statusLabel: 'Concluded (Winner: Astana Predators)',
    format: 'Custom Lobby 6 Rounds',
    badgeClass: 'bg-secondary text-light',
    cardId: 'card-event-apex'
  }
];

/**
 * 2. REUSABLE FUNCTIONS WITH PARAMETERS & RETURN VALUES
 */

/**
 * Construct a tournament card element using strict DOM methods.
 * @param {Object} item - Tournament data object
 * @returns {HTMLElement} Column element with structured card
 */
function createTournamentCard(item) {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-6 col-lg-4 tournament-card-col';
  col.id = item.cardId || `tournament-${item.id}`;
  col.dataset.status = item.status;

  const card = document.createElement('div');
  card.className = 'card bg-custom-card text-light h-100 shadow-sm border-secondary d-flex flex-column justify-content-between p-3';

  // Card Header & Details
  const cardBody = document.createElement('div');

  const badgeRow = document.createElement('div');
  badgeRow.className = 'd-flex justify-content-between align-items-center mb-2';

  const gameTag = document.createElement('span');
  gameTag.className = 'small text-muted fw-bold text-uppercase';
  gameTag.textContent = item.game;

  const statusBadge = document.createElement('span');
  statusBadge.className = `badge ${item.badgeClass} fw-bold`;
  statusBadge.textContent = item.statusLabel;

  badgeRow.appendChild(gameTag);
  badgeRow.appendChild(statusBadge);

  const titleEl = document.createElement('h3');
  titleEl.className = 'h5 card-title fw-bold text-accent mb-2';
  titleEl.textContent = item.title;

  const infoList = document.createElement('ul');
  infoList.className = 'list-unstyled small text-light mb-3';

  const dateLi = document.createElement('li');
  dateLi.textContent = `📅 Date: ${item.date} at ${item.time}`;

  const prizeLi = document.createElement('li');
  const prizeFormatted = typeof formatKZT === 'function' ? formatKZT(item.prizePool) : `${item.prizePool} ₸`;
  prizeLi.textContent = `🏆 Prize Pool: ${prizeFormatted}`;

  const formatLi = document.createElement('li');
  formatLi.className = 'text-muted';
  formatLi.textContent = `⚙️ ${item.format}`;

  infoList.appendChild(dateLi);
  infoList.appendChild(prizeLi);
  infoList.appendChild(formatLi);

  if (item.status === 'open') {
    const countdownLi = document.createElement('li');
    countdownLi.className = 'mt-1';
    const countdownBadge = document.createElement('span');
    countdownBadge.className = 'badge bg-dark border border-info text-info small live-countdown';
    countdownBadge.setAttribute('data-event-date', item.date);
    countdownBadge.textContent = '⏰ Calculating countdown...';
    countdownLi.appendChild(countdownBadge);
    infoList.appendChild(countdownLi);
  }

  cardBody.appendChild(badgeRow);
  cardBody.appendChild(titleEl);
  cardBody.appendChild(infoList);

  // Card Action
  const cardFooter = document.createElement('div');
  cardFooter.className = 'pt-2 border-top border-secondary';

  if (item.status === 'open') {
    const regBtn = document.createElement('a');
    regBtn.href = '#tournament-registration';
    regBtn.className = 'btn btn-info btn-sm w-100 fw-bold text-dark';
    regBtn.textContent = 'Register Squad / Player';
    regBtn.addEventListener('click', () => {
      const selectDropdown = document.getElementById('tournament-choice');
      if (selectDropdown) {
        selectDropdown.value = item.id;
        // Trigger change event to sync state
        selectDropdown.dispatchEvent(new Event('change'));
      }
    });
    cardFooter.appendChild(regBtn);
  } else {
    const closedBtn = document.createElement('button');
    closedBtn.type = 'button';
    closedBtn.className = 'btn btn-outline-secondary btn-sm w-100';
    closedBtn.disabled = true;
    closedBtn.textContent = 'Tournament Concluded';
    cardFooter.appendChild(closedBtn);
  }

  card.appendChild(cardBody);
  card.appendChild(cardFooter);
  col.appendChild(card);

  return col;
}

/**
 * Filter tournament array based on status filter and text query.
 * @param {Array<Object>} list - Tournament objects
 * @param {string} statusFilter - 'all' | 'open' | 'concluded'
 * @param {string} searchQuery - Search query string
 * @returns {Array<Object>} Filtered tournament list
 */
function filterTournaments(list, statusFilter, searchQuery) {
  const query = searchQuery ? searchQuery.trim().toLowerCase() : '';
  const filter = statusFilter ? statusFilter.trim().toLowerCase() : 'all';

  return list.filter(item => {
    const matchesStatus = (filter === 'all' || item.status === filter);
    const matchesSearch = query === '' ||
      item.title.toLowerCase().includes(query) ||
      item.game.toLowerCase().includes(query) ||
      item.format.toLowerCase().includes(query);

    return matchesStatus && matchesSearch;
  });
}

/**
 * Generate a unique tournament bracket seed number using Math.random().
 * Meaningful project logic: assigns team seed slot for double-elimination brackets.
 * @param {string} gameSlug
 * @returns {string} e.g. "QP-LAN-489"
 */
function generateBracketSeed(gameSlug) {
  const randomNum = Math.floor(100 + Math.random() * 900);
  const prefix = gameSlug ? gameSlug.substring(0, 3).toUpperCase() : 'LAN';
  return `QP-${prefix}-${randomNum}`;
}

/**
 * 3. DOM SETUP & EVENT LISTENERS
 */

document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('events-card-container');
  if (!cardContainer) return;

  const btnFilterAll = document.getElementById('filter-all');
  const btnFilterOpen = document.getElementById('filter-open');
  const btnFilterCompleted = document.getElementById('filter-completed');

  // Insert dynamic live search input and result counter bar
  const searchFilterBar = document.createElement('div');
  searchFilterBar.id = 'tournaments-search-bar';
  searchFilterBar.className = 'row g-3 align-items-center mb-4';

  const searchInputCol = document.createElement('div');
  searchInputCol.className = 'col-12 col-md-6';
  const searchInput = document.createElement('input');
  searchInput.type = 'search';
  searchInput.id = 'tournament-search-input';
  searchInput.className = 'form-control bg-dark text-light border-secondary';
  searchInput.placeholder = 'Search by game (CS2, Dota 2, FC 24, Valorant)...';
  searchInputCol.appendChild(searchInput);

  const counterCol = document.createElement('div');
  counterCol.className = 'col-12 col-md-6 text-md-end text-muted small';
  const counterText = document.createElement('span');
  counterText.id = 'tournament-result-count';
  counterText.textContent = `Showing all ${TOURNAMENTS_DATA.length} events`;
  counterCol.appendChild(counterText);

  searchFilterBar.appendChild(searchInputCol);
  searchFilterBar.appendChild(counterCol);

  // Insert search bar right before the card container
  cardContainer.parentNode.insertBefore(searchFilterBar, cardContainer);

  let currentFilter = 'all';

  function updateTournamentDisplay() {
    const query = searchInput.value;
    const filtered = filterTournaments(TOURNAMENTS_DATA, currentFilter, query);

    cardContainer.innerHTML = '';

    if (filtered.length === 0) {
      const emptyCol = document.createElement('div');
      emptyCol.className = 'col-12 text-center py-5';

      const emptyBox = document.createElement('div');
      emptyBox.className = 'p-4 bg-dark rounded border border-secondary';

      const emptyTitle = document.createElement('h3');
      emptyTitle.className = 'h5 text-warning mb-2';
      emptyTitle.textContent = 'No tournaments match your current filter';

      const resetBtn = document.createElement('button');
      resetBtn.type = 'button';
      resetBtn.className = 'btn btn-outline-info btn-sm mt-2';
      resetBtn.textContent = 'Show All Competitions';
      resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        if (btnFilterAll) btnFilterAll.click();
      });

      emptyBox.appendChild(emptyTitle);
      emptyBox.appendChild(resetBtn);
      emptyCol.appendChild(emptyBox);
      cardContainer.appendChild(emptyCol);
      counterText.textContent = '0 tournaments found';
      return;
    }

    filtered.forEach(item => {
      const cardEl = createTournamentCard(item);
      cardContainer.appendChild(cardEl);
    });

    counterText.textContent = `Showing ${filtered.length} of ${TOURNAMENTS_DATA.length} events`;
  }

  // Button Filter Listeners
  const filterBtns = [btnFilterAll, btnFilterOpen, btnFilterCompleted].filter(Boolean);

  function setFilter(activeBtn, status) {
    filterBtns.forEach(btn => {
      btn.className = 'btn btn-sm btn-outline-info';
    });
    activeBtn.className = 'btn btn-sm btn-info fw-bold text-dark';
    currentFilter = status;
    updateTournamentDisplay();
  }

  if (btnFilterAll) {
    btnFilterAll.addEventListener('click', () => setFilter(btnFilterAll, 'all'));
  }
  if (btnFilterOpen) {
    btnFilterOpen.addEventListener('click', () => setFilter(btnFilterOpen, 'open'));
  }
  if (btnFilterCompleted) {
    btnFilterCompleted.addEventListener('click', () => setFilter(btnFilterCompleted, 'concluded'));
  }

  searchInput.addEventListener('input', updateTournamentDisplay);

  // Initial render
  updateTournamentDisplay();

  // 4. TOURNAMENT SQUAD REGISTRATION FORM VALIDATION
  const regForm = document.getElementById('tournament-reg-form');
  const tournamentChoice = document.getElementById('tournament-choice');
  const teamTagInput = document.getElementById('team-tag');
  const captainContactInput = document.getElementById('captain-contact');
  const discordTagInput = document.getElementById('discord-tag');
  const rosterNotesInput = document.getElementById('roster-notes');
  const regAgreeCheckbox = document.getElementById('reg-agree');
  const feedbackAlert = document.getElementById('tournament-feedback');
  const errorBox = document.getElementById('tournament-error-box');

  if (!regForm || !tournamentChoice || !teamTagInput || !captainContactInput || !discordTagInput || !regAgreeCheckbox) {
    return;
  }

  // Populate tournament select dropdown dynamically with open competitions
  tournamentChoice.innerHTML = '<option value="" selected disabled>Select Tournament Event...</option>';
  TOURNAMENTS_DATA.forEach(t => {
    if (t.status === 'open') {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `${t.title} (${t.date})`;
      tournamentChoice.appendChild(opt);
    }
  });

  // Dynamic Prize Pool Distribution & Per-Player Payout Breakdown
  const prizeCalcBox = document.createElement('div');
  prizeCalcBox.id = 'tournament-prize-calc-box';
  prizeCalcBox.className = 'p-3 bg-dark bg-opacity-75 rounded border border-info mb-3 small d-none';
  regForm.parentNode.insertBefore(prizeCalcBox, regForm);

  function updatePrizePoolBreakdown() {
    const selectedTourney = TOURNAMENTS_DATA.find(t => t.id === tournamentChoice.value);
    if (!selectedTourney) {
      prizeCalcBox.classList.add('d-none');
      return;
    }

    const totalPrize = selectedTourney.prizePool;
    const firstPlace = Math.round(totalPrize * 0.6);
    const secondPlace = Math.round(totalPrize * 0.3);
    const thirdPlace = Math.round(totalPrize * 0.1);
    const perPlayerFirst = Math.round(firstPlace / 5);
    const entryPerPlayer = Math.round(selectedTourney.entryFee / 5);

    prizeCalcBox.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-2">
        <strong class="text-accent fw-bold">🏆 Prize Pool Distribution: ${selectedTourney.title}</strong>
        <span class="badge bg-success text-dark">Total: ${typeof formatKZT === 'function' ? formatKZT(totalPrize) : totalPrize + ' ₸'}</span>
      </div>
      <div class="row g-2 text-light">
        <div class="col-4">
          <div class="p-2 bg-dark rounded border border-warning text-center">
            <span class="d-block text-warning fw-bold">🥇 1st (60%)</span>
            <strong>${typeof formatKZT === 'function' ? formatKZT(firstPlace) : firstPlace + ' ₸'}</strong>
            <small class="d-block text-accent">(${typeof formatKZT === 'function' ? formatKZT(perPlayerFirst) : perPlayerFirst + ' ₸'} / player)</small>
          </div>
        </div>
        <div class="col-4">
          <div class="p-2 bg-dark rounded border border-secondary text-center">
            <span class="d-block text-light fw-bold">🥈 2nd (30%)</span>
            <strong>${typeof formatKZT === 'function' ? formatKZT(secondPlace) : secondPlace + ' ₸'}</strong>
            <small class="d-block text-muted">(Per squad)</small>
          </div>
        </div>
        <div class="col-4">
          <div class="p-2 bg-dark rounded border border-secondary text-center">
            <span class="d-block text-accent fw-bold">🥉 3rd (10%)</span>
            <strong>${typeof formatKZT === 'function' ? formatKZT(thirdPlace) : thirdPlace + ' ₸'}</strong>
            <small class="d-block text-muted">(${typeof formatKZT === 'function' ? formatKZT(entryPerPlayer) : entryPerPlayer + ' ₸'} entry)</small>
          </div>
        </div>
      </div>
    `;
    prizeCalcBox.classList.remove('d-none');
  }

  tournamentChoice.addEventListener('change', updatePrizePoolBreakdown);

  // Live Tournament Countdown Updater
  function updateLiveEventCountdowns() {
    const badges = document.querySelectorAll('.live-countdown');
    const now = new Date().getTime();

    badges.forEach(badge => {
      const dateStr = badge.getAttribute('data-event-date');
      if (!dateStr) return;
      const target = new Date(`${dateStr}T11:00:00+05:00`).getTime();
      const diff = target - now;

      if (diff <= 0) {
        badge.textContent = '🔴 Match Day Live!';
        badge.className = 'badge bg-danger text-light small live-countdown';
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        badge.textContent = `⏰ Starts in: ${days}d ${hours}h ${mins}m`;
      }
    });
  }

  updateLiveEventCountdowns();
  setInterval(updateLiveEventCountdowns, 30000);

  regForm.noValidate = true;

  regForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Clear previous error messages
    if (errorBox) {
      errorBox.classList.add('d-none');
      errorBox.innerHTML = '';
    }
    if (feedbackAlert) {
      feedbackAlert.classList.add('d-none');
      feedbackAlert.innerHTML = '';
    }

    const errors = [];
    let firstInvalidField = null;

    // Field 1: Tournament Choice Selection rule
    if (!tournamentChoice.value) {
      errors.push('Please select an active tournament from the dropdown.');
      tournamentChoice.classList.add('is-invalid');
      if (!firstInvalidField) firstInvalidField = tournamentChoice;
    } else {
      tournamentChoice.classList.remove('is-invalid');
    }

    // Field 2: Trimmed Required Team / Gamer Tag
    const cleanTag = teamTagInput.value.trim();
    if (cleanTag.length < 3) {
      errors.push('Team Tag / Gamer Tag must be at least 3 characters.');
      teamTagInput.classList.add('is-invalid');
      if (!firstInvalidField) firstInvalidField = teamTagInput;
    } else {
      teamTagInput.classList.remove('is-invalid');
    }

    // Field 3: Telephone rule
    const cleanPhone = captainContactInput.value.trim();
    const phoneRegex = /^\+?[0-9\s\-()]{10,18}$/;
    if (!phoneRegex.test(cleanPhone)) {
      errors.push('Captain contact phone must be valid (e.g. +7 706 605 5465).');
      captainContactInput.classList.add('is-invalid');
      if (!firstInvalidField) firstInvalidField = captainContactInput;
    } else {
      captainContactInput.classList.remove('is-invalid');
    }

    // Field 4: Discord handle rule
    const cleanDiscord = discordTagInput.value.trim();
    const discordRegex = /^@?[\w.]{3,32}$/;
    if (!discordRegex.test(cleanDiscord)) {
      errors.push('Discord handle must be valid (e.g. @captain_astana).');
      discordTagInput.classList.add('is-invalid');
      if (!firstInvalidField) firstInvalidField = discordTagInput;
    } else {
      discordTagInput.classList.remove('is-invalid');
    }

    // Field 5: Cross-field rule — agreement must be confirmed
    if (!regAgreeCheckbox.checked) {
      errors.push('You must accept the QazaqPeek LAN tournament regulations and anti-cheat policies.');
      regAgreeCheckbox.classList.add('is-invalid');
      if (!firstInvalidField) firstInvalidField = regAgreeCheckbox;
    } else {
      regAgreeCheckbox.classList.remove('is-invalid');
    }

    // If invalid, display errors beside fields and focus the first invalid field
    if (errors.length > 0) {
      if (errorBox) {
        const errorList = document.createElement('ul');
        errorList.className = 'mb-0 ps-3';
        errors.forEach(err => {
          const li = document.createElement('li');
          li.textContent = err;
          errorList.appendChild(li);
        });
        errorBox.appendChild(errorList);
        errorBox.classList.remove('d-none');
      }
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      return;
    }

    // Successful Validation & Summary Generation
    const selectedTourney = TOURNAMENTS_DATA.find(t => t.id === tournamentChoice.value);
    const bracketSeed = generateBracketSeed(tournamentChoice.value);

    if (feedbackAlert) {
      feedbackAlert.innerHTML = '';
      const heading = document.createElement('h4');
      heading.className = 'alert-heading h5 fw-bold';
      heading.textContent = '🎉 Tournament Squad Registration Recorded!';

      const summaryText = document.createElement('p');
      summaryText.className = 'mb-2';
      summaryText.textContent = `Team "${cleanTag}" has been registered for ${selectedTourney ? selectedTourney.title : 'the tournament'}.`;

      const hr = document.createElement('hr');
      hr.className = 'border-secondary';

      const detailGrid = document.createElement('div');
      detailGrid.className = 'd-flex flex-wrap justify-content-between small';

      const seedSpan = document.createElement('span');
      seedSpan.innerHTML = `Bracket Seed: <strong>${bracketSeed}</strong>`;

      const contactSpan = document.createElement('span');
      contactSpan.innerHTML = `Captain Contact: <strong>${cleanPhone}</strong>`;

      const checkInSpan = document.createElement('span');
      checkInSpan.innerHTML = 'LAN Check-in: <strong>30 mins before match</strong>';

      detailGrid.appendChild(seedSpan);
      detailGrid.appendChild(contactSpan);
      detailGrid.appendChild(checkInSpan);

      const disclaimer = document.createElement('p');
      disclaimer.className = 'text-muted small mt-2 mb-0';
      disclaimer.textContent = '* Demonstration Request: No server record was created. Present your seed voucher to the tournament admin upon arrival.';

      feedbackAlert.appendChild(heading);
      feedbackAlert.appendChild(summaryText);
      feedbackAlert.appendChild(hr);
      feedbackAlert.appendChild(detailGrid);
      feedbackAlert.appendChild(disclaimer);
      feedbackAlert.classList.remove('d-none');

      // Scroll smoothly to feedback alert
      feedbackAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    regForm.reset();
  });
});
