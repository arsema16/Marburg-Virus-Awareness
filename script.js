// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("primary-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });
}

// Smooth scrolling for same-page anchors (if any)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    const targetId = href.startsWith("#") ? href.slice(1) : null;
    const target = targetId ? document.getElementById(targetId) : null;
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `#${targetId}`);
    }
  });
});

// Registration form validation
const regForm = document.getElementById("registration-form");
if (regForm) {
  const nid = document.getElementById("nid");
  const fullname = document.getElementById("fullname");
  const country = document.getElementById("country");
  const lang = document.getElementById("preferred-language");
  const patient = document.getElementById("patient");
  const statusEl = document.getElementById("registration-status");

  const nidErr = document.getElementById("nid-error");
  const fullnameErr = document.getElementById("fullname-error");
  const countryErr = document.getElementById("country-error");
  const langErr = document.getElementById("preferred-language-error");
  const patientErr = document.getElementById("patient-error");

  regForm.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    // National ID (simple length check)
    const nidVal = nid.value.trim();
    if (!nidVal || nidVal.length < 6) {
      nidErr.textContent = "Please enter a valid National ID number (min 6 characters).";
      valid = false;
    } else nidErr.textContent = "";

    // Full name
    if (!fullname.value.trim()) {
      fullnameErr.textContent = "Please enter your full name.";
      valid = false;
    } else fullnameErr.textContent = "";

    // Country
    if (!country.value.trim()) {
      countryErr.textContent = "Please enter your country.";
      valid = false;
    } else countryErr.textContent = "";

    // Language
    if (!lang.value.trim()) {
      langErr.textContent = "Please select your preferred language.";
      valid = false;
    } else langErr.textContent = "";

    // Patient
    if (!patient.value.trim()) {
      patientErr.textContent = "Please select whether you are a patient.";
      valid = false;
    } else patientErr.textContent = "";

    if (!valid) {
      statusEl.textContent = "Please fix the errors above.";
      return;
    }

    // Simulate submission
    statusEl.textContent = "Thanks! You have been registered for updates.";
    regForm.reset();
  });
}


// script.js (append)
document.addEventListener('DOMContentLoaded', function () {
  // Set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Keyboard support for team cards
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        card.classList.toggle('focused');
      }
    });
  });
});
