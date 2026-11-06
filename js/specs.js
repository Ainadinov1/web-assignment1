/**
 * ================================================================================
 * QAZAQPEEK CYBER CLUB ASTANA — PC SPECS & HOUSE RULES CONTROLLER
 * File: js/specs.js
 * Author: Adilet Ainadinov
 * Features:
 *   - Esports Polling Rate & Motherboard Port Optimizer (pc-specs.html)
 *   - Peripheral Driver & DPI Pre-Configuration Request Validation (pc-specs.html)
 *   - Random Hardware Ticket Reference Generator via Math.random()
 *   - Real-Time FAQ Keyword Search & Filter Engine (rules.html)
 *   - Delegated Event Listener for FAQ "Helpful 👍" Voting (rules.html)
 *   - Administrator Inquiry Form Validation with Character Counter (rules.html)
 * ================================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // 1. ESPORTS POLLING RATE & MOTHERBOARD PORT OPTIMIZER (pc-specs.html)
  const driverSection = document.getElementById('driver-request-section');
  if (driverSection) {
    const optimizerCard = document.createElement('div');
    optimizerCard.id = 'polling-optimizer-box';
    optimizerCard.className = 'p-3 bg-dark bg-opacity-75 rounded border border-info mb-4 shadow-sm';
    optimizerCard.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h4 class="h6 text-accent fw-bold mb-0">⚡ Esports Hardware Optimizer: Polling Rate &amp; Port Configuration</h4>
        <span class="badge bg-info text-dark">Sub-1ms Latency</span>
      </div>
      <p class="small text-muted mb-3">Calculate hardware response time and determine the optimal motherboard USB port for your high-performance gaming gear.</p>
      <div class="row g-2 align-items-center mb-2">
        <div class="col-12 col-md-5">
          <label for="polling-rate-select" class="form-label small text-light fw-semibold mb-1">Mouse / Keyboard Polling Rate:</label>
          <select id="polling-rate-select" class="form-select form-select-sm bg-dark text-light border-secondary">
            <option value="1000" selected>1,000 Hz (1.000 ms • Standard Esports)</option>
            <option value="2000">2,000 Hz (0.500 ms • High Precision)</option>
            <option value="4000">4,000 Hz (0.250 ms • Pro Wireless)</option>
            <option value="8000">8,000 Hz (0.125 ms • Ultra Low Latency)</option>
          </select>
        </div>
        <div class="col-12 col-md-7">
          <div id="polling-calc-results" class="p-2 bg-dark rounded border border-secondary small">
            <div class="d-flex justify-content-between">
              <span>Input Latency: <strong id="polling-latency-val" class="text-accent">1.000 ms</strong></span>
              <span>Delay Reduction: <strong id="polling-reduction-val" class="text-success">Base Standard</strong></span>
            </div>
            <div class="text-muted mt-1" id="polling-port-advice">
              🔌 Recommended Port: Any USB 3.0/3.2 Port (Standard Arena, VIP 1, VIP 2).
            </div>
          </div>
        </div>
      </div>
    `;

    const formEl = document.getElementById('driver-request-form');
    if (formEl) {
      formEl.parentNode.insertBefore(optimizerCard, formEl);
    }

    const pollingSelect = document.getElementById('polling-rate-select');
    const latencyVal = document.getElementById('polling-latency-val');
    const reductionVal = document.getElementById('polling-reduction-val');
    const portAdvice = document.getElementById('polling-port-advice');

    if (pollingSelect && latencyVal && reductionVal && portAdvice) {
      pollingSelect.addEventListener('change', () => {
        const rate = parseInt(pollingSelect.value, 10);
        const latency = (1000 / rate).toFixed(3);
        const reduction = rate === 1000 ? 'Base Standard' : `${(((1 - (1000 / rate)) * 100)).toFixed(1)}% faster!`;
        let advice = '';

        if (rate === 1000) {
          advice = '🔌 Recommended Port: Any USB 3.0/3.2 Port (Standard Arena, VIP 1, VIP 2).';
        } else if (rate === 2000) {
          advice = '⚡ Recommended Port: Motherboard Rear USB 3.2 Gen 1 (Avoid front panel hubs).';
        } else if (rate === 4000) {
          advice = '🚀 Recommended Port: Direct CPU-connected Red USB 3.2 Gen 2 Port (VIP 1 or VIP 2).';
        } else if (rate === 8000) {
          advice = '🏆 Recommended Port: Direct Rear USB 3.2 Gen 2 (VIP 2 Alienware 360Hz Bootcamp recommended for 0.125ms!).';
        }

        latencyVal.textContent = `${latency} ms`;
        reductionVal.textContent = reduction;
        portAdvice.textContent = advice;
      });
    }
  }

  // 2. DRIVER PRE-LOAD FORM (pc-specs.html)
  const driverForm = document.getElementById('driver-request-form');
  const driverSoftware = document.getElementById('driver-software');
  const targetZone = document.getElementById('target-zone');
  const gamerPhone = document.getElementById('gamer-phone');
  const dpiNotes = document.getElementById('dpi-notes');
  const driverFeedback = document.getElementById('driver-feedback');

  if (driverForm && driverSoftware && targetZone && gamerPhone && driverFeedback) {
    driverForm.noValidate = true;

    driverForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const phoneVal = gamerPhone.value.trim();
      const phoneRegex = /^\+?[0-9\s\-()]{10,18}$/;
      let firstInvalid = null;

      if (!driverSoftware.value) {
        driverSoftware.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = driverSoftware;
      } else {
        driverSoftware.classList.remove('is-invalid');
      }

      if (!targetZone.value) {
        targetZone.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = targetZone;
      } else {
        targetZone.classList.remove('is-invalid');
      }

      if (!phoneRegex.test(phoneVal)) {
        gamerPhone.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = gamerPhone;
      } else {
        gamerPhone.classList.remove('is-invalid');
      }

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      const ticketRef = `QP-CFG-${Math.floor(100 + Math.random() * 900)}`;
      const selectedDriver = driverSoftware.options[driverSoftware.selectedIndex].text;
      const selectedZone = targetZone.options[targetZone.selectedIndex].text;

      driverFeedback.className = 'alert alert-success mt-4';
      driverFeedback.innerHTML = `
        <h4 class="alert-heading h5 fw-bold">⚙️ Pre-Load Configuration Request Recorded!</h4>
        <p class="mb-1">Our technical administrators will pre-install <strong>${selectedDriver}</strong> on an available station in <strong>${selectedZone}</strong>.</p>
        <hr class="border-secondary">
        <div class="d-flex flex-wrap justify-content-between small">
          <span>Ticket: <strong>${ticketRef}</strong></span>
          <span>Contact: <strong>${phoneVal}</strong></span>
          <span>Status: <strong>Queued for Bench Setup</strong></span>
        </div>
        <p class="small text-muted mt-2 mb-0">* Demonstration Request: No network configuration commands were sent.</p>
      `;
      driverFeedback.classList.remove('d-none');
      driverFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      driverForm.reset();
    });
  }

  // 2. LIVE FAQ SEARCH & ACCORDION FILTER (rules.html)
  const faqAccordion = document.getElementById('faqAccordion');
  if (faqAccordion) {
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'mb-4';

    const searchInput = document.createElement('input');
    searchInput.type = 'search';
    searchInput.id = 'faq-search-input';
    searchInput.className = 'form-control bg-dark text-light border-secondary';
    searchInput.placeholder = 'Search house rules & FAQ (e.g. food, peripherals, age, night package)...';

    const countStatus = document.createElement('div');
    countStatus.className = 'text-muted small mt-2';
    countStatus.id = 'faq-search-status';

    searchWrapper.appendChild(searchInput);
    searchWrapper.appendChild(countStatus);
    faqAccordion.parentNode.insertBefore(searchWrapper, faqAccordion);

    const accordionItems = faqAccordion.querySelectorAll('.accordion-item');

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      let matchCount = 0;

      accordionItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        const collapseEl = item.querySelector('.accordion-collapse');
        const buttonEl = item.querySelector('.accordion-button');

        if (query === '' || text.includes(query)) {
          item.classList.remove('d-none');
          matchCount++;
          if (query !== '' && collapseEl) {
            collapseEl.classList.add('show');
            if (buttonEl) buttonEl.classList.remove('collapsed');
          }
        } else {
          item.classList.add('d-none');
          if (collapseEl) {
            collapseEl.classList.remove('show');
            if (buttonEl) buttonEl.classList.add('collapsed');
          }
        }
      });

      if (query === '') {
        countStatus.textContent = '';
      } else {
        countStatus.textContent = `Found ${matchCount} matching rules in FAQ.`;
      }
    });

    // Delegated Helpful Voting System
    const accordionBodies = faqAccordion.querySelectorAll('.accordion-body');
    accordionBodies.forEach((body, idx) => {
      const voteBar = document.createElement('div');
      voteBar.className = 'mt-3 pt-2 border-top border-secondary d-flex flex-wrap justify-content-between align-items-center gap-2';
      voteBar.innerHTML = `
        <span class="text-muted small">Was this house rule explanation helpful?</span>
        <button type="button" class="btn btn-outline-info btn-sm faq-helpful-btn" data-faq-index="${idx}">
          👍 Helpful (<span class="vote-num">${12 + idx * 5}</span>)
        </button>
      `;
      body.appendChild(voteBar);
    });

    // Delegated event listener bound to the persistent parent faqAccordion
    faqAccordion.addEventListener('click', (event) => {
      const btn = event.target.closest('.faq-helpful-btn');
      if (!btn) return;
      event.preventDefault();

      if (btn.classList.contains('voted')) return;

      const numEl = btn.querySelector('.vote-num');
      if (numEl) {
        const currentCount = parseInt(numEl.textContent, 10) || 0;
        numEl.textContent = (currentCount + 1).toString();
      }

      btn.classList.add('voted', 'btn-success', 'text-dark');
      btn.classList.remove('btn-outline-info');
      btn.disabled = true;

      const feedback = document.createElement('span');
      feedback.className = 'badge bg-success text-dark ms-2';
      feedback.textContent = 'Thanks for your feedback!';
      btn.parentNode.appendChild(feedback);
    });
  }

  // 3. ASK AN ADMINISTRATOR INQUIRY FORM (rules.html)
  const inquiryForm = document.getElementById('inquiry-form');
  const inquiryName = document.getElementById('inquiry-name');
  const inquiryContact = document.getElementById('inquiry-contact');
  const inquiryTopic = document.getElementById('inquiry-topic');
  const inquiryMessage = document.getElementById('inquiry-message');
  const inquiryFeedback = document.getElementById('inquiry-feedback');

  if (inquiryForm && inquiryName && inquiryContact && inquiryMessage && inquiryFeedback) {
    inquiryForm.noValidate = true;

    // Add Character Counter to Inquiry Message
    const charCountEl = document.createElement('div');
    charCountEl.className = 'text-end text-muted small mt-1';
    charCountEl.textContent = '0 / 300 characters (minimum 10 required)';
    inquiryMessage.parentNode.appendChild(charCountEl);

    inquiryMessage.addEventListener('input', () => {
      const len = inquiryMessage.value.length;
      charCountEl.textContent = `${len} / 300 characters (minimum 10 required)`;
      if (len >= 10) {
        charCountEl.className = 'text-end text-muted small mt-1';
      } else {
        charCountEl.className = 'text-end text-danger small mt-1';
      }
    });

    inquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameVal = inquiryName.value.trim();
      const contactVal = inquiryContact.value.trim();
      const messageVal = inquiryMessage.value.trim();
      let firstInvalid = null;

      if (nameVal.length < 2) {
        inquiryName.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = inquiryName;
      } else {
        inquiryName.classList.remove('is-invalid');
      }

      if (contactVal.length < 5) {
        inquiryContact.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = inquiryContact;
      } else {
        inquiryContact.classList.remove('is-invalid');
      }

      if (messageVal.length < 10) {
        inquiryMessage.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = inquiryMessage;
      } else {
        inquiryMessage.classList.remove('is-invalid');
      }

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      const inquiryRef = `QP-INQ-${Math.floor(1000 + Math.random() * 9000)}`;

      inquiryFeedback.className = 'alert alert-success mt-4';
      inquiryFeedback.innerHTML = `
        <h4 class="alert-heading h5 fw-bold">Inquiry Sent to Club Administrators!</h4>
        <p class="mb-1">Thank you, <strong>${nameVal}</strong>. Your question regarding <strong>${inquiryTopic ? inquiryTopic.options[inquiryTopic.selectedIndex].text : 'General Club Inquiries'}</strong> has been routed to the reception desk.</p>
        <hr class="border-secondary">
        <div class="d-flex flex-wrap justify-content-between small">
          <span>Inquiry Ticket: <strong>${inquiryRef}</strong></span>
          <span>Contact: <strong>${contactVal}</strong></span>
          <span>Avg Response: <strong>Within 15 minutes</strong></span>
        </div>
        <p class="small text-muted mt-2 mb-0">* Demonstration Submission: No actual inquiry dispatched to server.</p>
      `;
      inquiryFeedback.classList.remove('d-none');
      inquiryFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      inquiryForm.reset();
      charCountEl.textContent = '0 / 300 characters (minimum 10 required)';
    });
  }
});
