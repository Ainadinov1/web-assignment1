/**
 * ================================================================================
 * QAZAQPEEK CYBER CLUB ASTANA — MEMBER SECURITY PORTAL
 * File: js/login.js
 * Author: Adilet Ainadinov
 * Features:
 *   - Front-end validation for Member Login & Registration
 *   - Accessible Show / Hide Password toggle buttons dynamically injected via DOM
 *   - Live Regex Password Strength Checklist (8+ chars, upper, lower, digit, special)
 *   - Live Password Confirmation Match Verification
 *   - Strict Data Security: Zero persistence in storage/arrays/URL/console
 *   - Explicit Demonstration Disclaimers (No backend database)
 * ================================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const loginPhone = document.getElementById('loginPhone');
  const loginPassword = document.getElementById('loginPassword');
  const loginFeedback = document.getElementById('login-feedback');

  const registerForm = document.getElementById('register-form');
  const regNickname = document.getElementById('regNickname');
  const regPhone = document.getElementById('regPhone');
  const regPass = document.getElementById('regPass');
  const regFeedback = document.getElementById('register-feedback');

  // Phone input validation regex (+7 format)
  const phonePattern = /^\+?[0-9\s\-()]{10,18}$/;

  /**
   * Helper: Add accessible Show/Hide password toggle button next to an input
   * @param {HTMLInputElement} passwordInput
   */
  function addPasswordVisibilityToggle(passwordInput) {
    if (!passwordInput || !passwordInput.parentElement) return;

    // Wrap in input-group if not already wrapped
    const wrapper = passwordInput.parentElement;
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'btn btn-outline-secondary btn-sm mt-1';
    toggleBtn.setAttribute('aria-label', 'Toggle password visibility');
    toggleBtn.textContent = '👁 Show Password';

    toggleBtn.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '🙈 Hide Password';
      } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁 Show Password';
      }
    });

    wrapper.appendChild(toggleBtn);
  }

  // 1. DYNAMIC DOM INJECTION: PASSWORD CONFIRMATION & REGEX CHECKLIST
  let regPassConfirm = null;
  let checklistItems = {};

  if (registerForm && regPass) {
    // Inject Show/Hide on registration password
    addPasswordVisibilityToggle(regPass);

    // Create Password Confirmation Field
    const confirmGroup = document.createElement('div');
    confirmGroup.className = 'mb-3';

    const confirmLabel = document.createElement('label');
    confirmLabel.className = 'form-label text-light small fw-semibold';
    confirmLabel.htmlFor = 'regPassConfirm';
    confirmLabel.textContent = 'Confirm Password:';

    regPassConfirm = document.createElement('input');
    regPassConfirm.type = 'password';
    regPassConfirm.id = 'regPassConfirm';
    regPassConfirm.className = 'form-control bg-dark text-light border-secondary';
    regPassConfirm.placeholder = 'Re-enter your password';
    regPassConfirm.required = true;

    confirmGroup.appendChild(confirmLabel);
    confirmGroup.appendChild(regPassConfirm);

    // Add toggle for confirm field too
    addPasswordVisibilityToggle(regPassConfirm);

    // Insert confirm field directly after regPass parent or container
    const passParent = regPass.closest('.mb-3') || regPass.parentElement;
    passParent.parentNode.insertBefore(confirmGroup, passParent.nextSibling);

    // Create Live Regex Strength Checklist Box
    const checklistBox = document.createElement('div');
    checklistBox.id = 'password-live-checklist';
    checklistBox.className = 'p-3 bg-dark bg-opacity-75 rounded border border-secondary mb-3 small';

    const checklistTitle = document.createElement('strong');
    checklistTitle.className = 'd-block text-accent mb-2';
    checklistTitle.textContent = 'Password Security Requirements:';
    checklistBox.appendChild(checklistTitle);

    const checklistUl = document.createElement('ul');
    checklistUl.className = 'list-unstyled mb-0';

    const rules = [
      { key: 'length', text: 'At least 8 characters long', regex: /.{8,}/ },
      { key: 'upper', text: 'At least one uppercase letter (A-Z)', regex: /[A-Z]/ },
      { key: 'lower', text: 'At least one lowercase letter (a-z)', regex: /[a-z]/ },
      { key: 'digit', text: 'At least one numeric digit (0-9)', regex: /[0-9]/ },
      { key: 'special', text: 'At least one special character (!@#$%^&*)', regex: /[!@#$%^&*(),.?":{}|<>_\-]/ },
      { key: 'match', text: 'Passwords must match exactly', custom: true }
    ];

    rules.forEach(rule => {
      const li = document.createElement('li');
      li.className = 'text-muted mb-1 d-flex align-items-center';

      const iconSpan = document.createElement('span');
      iconSpan.className = 'me-2';
      iconSpan.textContent = '○';

      const textSpan = document.createElement('span');
      textSpan.textContent = rule.text;

      li.appendChild(iconSpan);
      li.appendChild(textSpan);
      checklistUl.appendChild(li);

      checklistItems[rule.key] = { li, iconSpan, textSpan, regex: rule.regex };
    });

    checklistBox.appendChild(checklistUl);
    confirmGroup.parentNode.insertBefore(checklistBox, confirmGroup.nextSibling);

    /**
     * Real-time password criteria evaluation
     */
    function evaluatePasswordSecurity() {
      const val = regPass.value;
      const confirmVal = regPassConfirm ? regPassConfirm.value : '';

      // Rule: Length
      toggleRuleState('length', val.length >= 8);
      // Rule: Uppercase
      toggleRuleState('upper', /[A-Z]/.test(val));
      // Rule: Lowercase
      toggleRuleState('lower', /[a-z]/.test(val));
      // Rule: Digit
      toggleRuleState('digit', /[0-9]/.test(val));
      // Rule: Special
      toggleRuleState('special', /[!@#$%^&*(),.?":{}|<>_\-]/.test(val));
      // Rule: Match
      const matches = val.length > 0 && val === confirmVal;
      toggleRuleState('match', matches);
    }

    function toggleRuleState(key, isPassing) {
      const item = checklistItems[key];
      if (!item) return;

      if (isPassing) {
        item.li.className = 'text-success mb-1 d-flex align-items-center fw-semibold';
        item.iconSpan.textContent = '✓';
      } else {
        item.li.className = 'text-muted mb-1 d-flex align-items-center';
        item.iconSpan.textContent = '○';
      }
    }

    regPass.addEventListener('input', evaluatePasswordSecurity);
    if (regPassConfirm) {
      regPassConfirm.addEventListener('input', evaluatePasswordSecurity);
    }
  }

  // Inject Show/Hide on Login password
  if (loginPassword) {
    addPasswordVisibilityToggle(loginPassword);
  }

  // 2. MEMBER LOGIN VALIDATION
  if (loginForm && loginPhone && loginPassword) {
    loginForm.noValidate = true;

    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (loginFeedback) {
        loginFeedback.classList.add('d-none');
        loginFeedback.innerHTML = '';
      }

      const phoneVal = loginPhone.value.trim();
      const passVal = loginPassword.value;

      let firstInvalid = null;

      if (!phonePattern.test(phoneVal)) {
        loginPhone.classList.add('is-invalid');
        firstInvalid = loginPhone;
      } else {
        loginPhone.classList.remove('is-invalid');
      }

      if (passVal.length < 6) {
        loginPassword.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = loginPassword;
      } else {
        loginPassword.classList.remove('is-invalid');
      }

      if (firstInvalid) {
        firstInvalid.focus();
        if (loginFeedback) {
          loginFeedback.className = 'alert alert-danger mt-3 mb-0';
          loginFeedback.textContent = 'Please provide a valid Kazakh phone number and password.';
          loginFeedback.classList.remove('d-none');
        }
        return;
      }

      // Demonstration feedback (Strict security: password is never persisted or printed)
      if (loginFeedback) {
        loginFeedback.className = 'alert alert-info mt-3 mb-0';
        loginFeedback.innerHTML = `
          <strong>Demonstration Login Mode:</strong> Front-end format validation passed for phone <code>${phoneVal}</code>.<br>
          <small class="text-muted">No external server or database is connected. No user credentials have been stored.</small>
        `;
        loginFeedback.classList.remove('d-none');
      }

      loginForm.reset();
    });
  }

  // 3. MEMBER REGISTRATION VALIDATION
  if (registerForm && regNickname && regPhone && regPass) {
    registerForm.noValidate = true;

    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (regFeedback) {
        regFeedback.classList.add('d-none');
        regFeedback.innerHTML = '';
      }

      const nickVal = regNickname.value.trim();
      const phoneVal = regPhone.value.trim();
      const passVal = regPass.value;
      const confirmVal = regPassConfirm ? regPassConfirm.value : '';

      const errors = [];
      let firstInvalid = null;

      // Field 1: Nickname (trimmed, min 3 chars)
      if (nickVal.length < 3) {
        errors.push('Gamer Tag / Nickname must be at least 3 characters.');
        regNickname.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = regNickname;
      } else {
        regNickname.classList.remove('is-invalid');
      }

      // Field 2: Phone number (+7 format)
      if (!phonePattern.test(phoneVal)) {
        errors.push('Phone number must be valid (+7 7XX XXX XX XX).');
        regPhone.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = regPhone;
      } else {
        regPhone.classList.remove('is-invalid');
      }

      // Field 3: Regex criteria checks
      const hasLength = passVal.length >= 8;
      const hasUpper = /[A-Z]/.test(passVal);
      const hasLower = /[a-z]/.test(passVal);
      const hasDigit = /[0-9]/.test(passVal);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-]/.test(passVal);

      if (!hasLength || !hasUpper || !hasLower || !hasDigit || !hasSpecial) {
        errors.push('Password does not satisfy all required security criteria.');
        regPass.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = regPass;
      } else {
        regPass.classList.remove('is-invalid');
      }

      // Field 4: Confirmation match check
      if (passVal !== confirmVal) {
        errors.push('Passwords do not match.');
        if (regPassConfirm) {
          regPassConfirm.classList.add('is-invalid');
          if (!firstInvalid) firstInvalid = regPassConfirm;
        }
      } else if (regPassConfirm) {
        regPassConfirm.classList.remove('is-invalid');
      }

      if (errors.length > 0) {
        if (regFeedback) {
          regFeedback.className = 'alert alert-danger mt-3 mb-0';
          const errorList = document.createElement('ul');
          errorList.className = 'mb-0 ps-3';
          errors.forEach(err => {
            const li = document.createElement('li');
            li.textContent = err;
            errorList.appendChild(li);
          });
          regFeedback.appendChild(errorList);
          regFeedback.classList.remove('d-none');
        }
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Success Demonstration Feedback
      if (regFeedback) {
        const depositSelect = document.getElementById('reg-first-deposit');
        const dep = depositSelect ? (parseInt(depositSelect.value, 10) || 0) : 0;
        let bonus = 0;
        let tier = 'Bronze Player';
        if (dep === 1000) { bonus = 200; tier = 'Bronze Plus'; }
        else if (dep === 3000) { bonus = 750; tier = 'Silver Member'; }
        else if (dep === 5000) { bonus = 1500; tier = 'Gold VIP Member'; }
        const totalStarting = 500 + dep + bonus;
        const formattedTotal = typeof formatKZT === 'function' ? formatKZT(totalStarting) : `${totalStarting} ₸`;
        const memberId = `QP-MEM-${Math.floor(1000 + Math.random() * 9000)}`;

        regFeedback.className = 'alert alert-success mt-3 mb-0';
        regFeedback.innerHTML = `
          <h4 class="alert-heading h5 fw-bold mb-1">🎉 Member Account Validated!</h4>
          <p class="mb-2">Welcome to QazaqPeek Astana, <strong>${nickVal}</strong>! Your player credentials format has passed verification.</p>
          <hr class="border-secondary">
          <div class="d-flex flex-wrap justify-content-between small mb-2">
            <span>Member ID: <strong>${memberId}</strong></span>
            <span>Phone: <strong>${phoneVal}</strong></span>
            <span>Status Tier: <strong>${tier}</strong></span>
            <span>Initial Balance: <strong>${formattedTotal}</strong></span>
          </div>
          <p class="small text-muted mb-0">* Demonstration Notice: In accordance with course guidelines, zero credentials were stored on a remote server.</p>
        `;
        regFeedback.classList.remove('d-none');
      }

      registerForm.reset();
      // Reset checklist styles
      if (typeof evaluatePasswordSecurity === 'function') {
        evaluatePasswordSecurity();
      }
    });
  }

  // 4. INTERACTIVE SMS PIN RECOVERY SIMULATOR
  const pinRecoveryContainer = document.getElementById('pin-recovery-help');
  if (pinRecoveryContainer) {
    const recoveryBox = document.createElement('div');
    recoveryBox.className = 'mt-3 pt-3 border-top border-secondary';
    recoveryBox.innerHTML = `
      <h4 class="h6 text-accent fw-bold mb-2">🔑 Self-Service PIN Reset Simulator</h4>
      <p class="small text-muted mb-2">Enter your registered mobile phone to receive an instant verification code.</p>
      <div class="row g-2 align-items-center mb-2">
        <div class="col-8">
          <input type="tel" id="recovery-phone-input" class="form-control form-control-sm bg-dark text-light border-secondary" placeholder="+7 706 605 5465">
        </div>
        <div class="col-4">
          <button type="button" id="btn-request-sms" class="btn btn-outline-info btn-sm w-100 fw-semibold">Send SMS</button>
        </div>
      </div>
      <div id="recovery-sms-notification" class="alert alert-info py-2 px-3 small d-none mb-2"></div>
      <div id="recovery-step-two" class="d-none">
        <div class="row g-2 mb-2">
          <div class="col-6">
            <input type="text" id="recovery-code-input" class="form-control form-control-sm bg-dark text-light border-secondary" placeholder="4-digit SMS Code" maxlength="4">
          </div>
          <div class="col-6">
            <input type="password" id="recovery-new-pin" class="form-control form-control-sm bg-dark text-light border-secondary" placeholder="New 6-digit PIN" maxlength="6">
          </div>
        </div>
        <button type="button" id="btn-submit-pin-reset" class="btn btn-success btn-sm w-100 fw-bold text-dark">Confirm &amp; Set New PIN</button>
      </div>
      <div id="recovery-status-feedback" class="small mt-2"></div>
    `;

    const recoveryCardBody = pinRecoveryContainer.querySelector('.bg-dark');
    if (recoveryCardBody) {
      recoveryCardBody.appendChild(recoveryBox);
    }

    let activeSmsCode = null;
    let targetPhone = '';

    const btnRequestSms = document.getElementById('btn-request-sms');
    const recoveryPhoneInput = document.getElementById('recovery-phone-input');
    const smsNotification = document.getElementById('recovery-sms-notification');
    const stepTwo = document.getElementById('recovery-step-two');
    const recoveryCodeInput = document.getElementById('recovery-code-input');
    const recoveryNewPin = document.getElementById('recovery-new-pin');
    const btnSubmitReset = document.getElementById('btn-submit-pin-reset');
    const recoveryFeedback = document.getElementById('recovery-status-feedback');

    if (btnRequestSms && recoveryPhoneInput) {
      btnRequestSms.addEventListener('click', () => {
        const phone = recoveryPhoneInput.value.trim();
        if (!phonePattern.test(phone)) {
          recoveryPhoneInput.classList.add('is-invalid');
          if (recoveryFeedback) {
            recoveryFeedback.className = 'small mt-2 text-danger';
            recoveryFeedback.textContent = 'Please enter a valid Kazakh phone number (e.g. +7 706 605 5465).';
          }
          return;
        }

        recoveryPhoneInput.classList.remove('is-invalid');
        targetPhone = phone;
        activeSmsCode = Math.floor(1000 + Math.random() * 9000).toString();

        if (smsNotification) {
          smsNotification.innerHTML = `
            <strong>📱 [QazaqPeek SMS Gateway]:</strong> Verification code for <code>${targetPhone}</code>: <strong class="text-accent fs-6">${activeSmsCode}</strong>.
          `;
          smsNotification.classList.remove('d-none');
        }
        if (stepTwo) stepTwo.classList.remove('d-none');
        if (recoveryFeedback) {
          recoveryFeedback.className = 'small mt-2 text-info';
          recoveryFeedback.textContent = 'SMS code generated! Enter the 4-digit code and your new PIN below.';
        }
      });
    }

    if (btnSubmitReset && recoveryCodeInput && recoveryNewPin) {
      btnSubmitReset.addEventListener('click', () => {
        const enteredCode = recoveryCodeInput.value.trim();
        const newPin = recoveryNewPin.value.trim();

        if (enteredCode !== activeSmsCode) {
          recoveryCodeInput.classList.add('is-invalid');
          if (recoveryFeedback) {
            recoveryFeedback.className = 'small mt-2 text-danger';
            recoveryFeedback.textContent = 'Invalid verification code. Please check the SMS code above.';
          }
          return;
        }
        recoveryCodeInput.classList.remove('is-invalid');

        if (newPin.length < 4) {
          recoveryNewPin.classList.add('is-invalid');
          if (recoveryFeedback) {
            recoveryFeedback.className = 'small mt-2 text-danger';
            recoveryFeedback.textContent = 'New PIN must be at least 4 digits.';
          }
          return;
        }
        recoveryNewPin.classList.remove('is-invalid');

        if (recoveryFeedback) {
          recoveryFeedback.className = 'alert alert-success mt-2 py-2 px-3 small';
          recoveryFeedback.innerHTML = `
            <strong>✓ PIN Reset Confirmed!</strong><br>
            Your account PIN has been updated for phone <code>${targetPhone}</code>. You may now log in above.
          `;
        }
        if (stepTwo) stepTwo.classList.add('d-none');
        if (smsNotification) smsNotification.classList.add('d-none');
        recoveryPhoneInput.value = '';
        recoveryCodeInput.value = '';
        recoveryNewPin.value = '';
        activeSmsCode = null;
      });
    }
  }

  // 5. REGISTRATION WELCOME BONUS & STATUS TIER CALCULATOR
  if (registerForm) {
    const bonusPreviewCard = document.createElement('div');
    bonusPreviewCard.className = 'p-3 bg-dark bg-opacity-75 rounded border border-secondary mb-3 small';
    bonusPreviewCard.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-2">
        <strong class="text-accent">🎁 Welcome Bonus &amp; Deposit Calculator</strong>
        <span class="badge bg-success text-dark">500 ₸ Free Balance</span>
      </div>
      <p class="text-muted mb-2">Every new account receives an instant 500 ₸ signup balance. Plan your optional first top-up to unlock status perks:</p>
      <div class="mb-2">
        <label for="reg-first-deposit" class="form-label text-light small mb-1">Optional First Kaspi Top-up:</label>
        <select id="reg-first-deposit" class="form-select form-select-sm bg-dark text-light border-secondary">
          <option value="0">No initial top-up (500 ₸ Welcome Bonus only)</option>
          <option value="1000">1,000 ₸ (+200 ₸ bonus = 1,700 ₸ balance)</option>
          <option value="3000">3,000 ₸ (+750 ₸ bonus = 4,250 ₸ balance • Silver)</option>
          <option value="5000">5,000 ₸ (+1,500 ₸ bonus = 7,000 ₸ balance • Gold VIP)</option>
        </select>
      </div>
      <div id="reg-calculated-tier" class="p-2 bg-dark rounded border border-secondary d-flex justify-content-between align-items-center">
        <span>Starting Club Balance: <strong id="reg-balance-val" class="text-accent">500 ₸</strong></span>
        <span id="reg-tier-badge" class="badge bg-secondary text-light">Bronze Player</span>
      </div>
    `;

    const regSubmitBtn = document.getElementById('register-submit-btn');
    if (regSubmitBtn && regSubmitBtn.parentElement) {
      regSubmitBtn.parentElement.parentNode.insertBefore(bonusPreviewCard, regSubmitBtn.parentElement);
    }

    const depositSelect = document.getElementById('reg-first-deposit');
    const balanceVal = document.getElementById('reg-balance-val');
    const tierBadge = document.getElementById('reg-tier-badge');

    if (depositSelect && balanceVal && tierBadge) {
      depositSelect.addEventListener('change', () => {
        const dep = parseInt(depositSelect.value, 10) || 0;
        let bonus = 0;
        let tier = 'Bronze Player';
        let badgeCls = 'bg-secondary text-light';

        if (dep === 1000) {
          bonus = 200;
          tier = 'Bronze Plus';
          badgeCls = 'bg-info text-dark';
        } else if (dep === 3000) {
          bonus = 750;
          tier = 'Silver Member';
          badgeCls = 'bg-primary text-light';
        } else if (dep === 5000) {
          bonus = 1500;
          tier = 'Gold VIP Member';
          badgeCls = 'bg-warning text-dark fw-bold';
        }

        const total = 500 + dep + bonus;
        balanceVal.textContent = typeof formatKZT === 'function' ? formatKZT(total) : `${total} ₸`;
        tierBadge.className = `badge ${badgeCls}`;
        tierBadge.textContent = tier;
      });
    }
  }
});
