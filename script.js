/* Syed Abdul Aleem Ahmad Shah — Portfolio interactions
   Theme toggle · mobile menu · scroll progress · reveal on scroll · WhatsApp form */
(function () {
  "use strict";

  /* Theme (saved preference, defaults to dark) */
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");
  try {
    var saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (e) { /* storage unavailable */ }
  function syncIcon() { if (toggle) toggle.textContent = root.dataset.theme === "dark" ? "☀" : "☾"; }
  syncIcon();
  if (toggle) toggle.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncIcon();
  });

  /* Mobile menu */
  var menuBtn = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.textContent = open ? "✕" : "☰";
    });
    navLinks.addEventListener("click", function (ev) {
      if (ev.target.tagName === "A") {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      }
    });
  }

  /* Scroll progress bar */
  var bar = document.getElementById("scrollProgress");
  function onScroll() {
    if (!bar) return;
    var h = document.documentElement;
    var max = h.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Reveal on scroll */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  /* Contact form -> WhatsApp with prefilled message */
  var form = document.getElementById("contactForm");
  if (form) form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var name = (form.elements.name.value || "").trim();
    var subject = (form.elements.subject.value || "").trim();
    var message = (form.elements.message.value || "").trim();
    var text = "Assalam-o-Alaikum Aleem, I want to discuss a project.\n"
      + (name ? "Name: " + name + "\n" : "")
      + (subject ? "Project: " + subject + "\n" : "")
      + message;
    window.open("https://wa.me/923295566111?text=" + encodeURIComponent(text), "_blank", "noopener");
  });
})();
