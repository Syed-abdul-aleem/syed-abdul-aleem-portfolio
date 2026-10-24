/* Syed Abdul Aleem Ahmad Shah — Portfolio interactions
   Sticky header state · mobile menu · scroll progress ·
   reveal on scroll (staggered) · back-to-top · WhatsApp form */
(function () {
  "use strict";

  /* Footer year */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* Sticky header shadow */
  var header = document.getElementById("siteHeader");
  var bar = document.getElementById("scrollProgress");
  var toTop = document.getElementById("toTopFloat");
  function onScroll() {
    var y = window.scrollY || 0;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    }
    if (toTop) toTop.classList.toggle("show", y > 700);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* Mobile menu */
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.addEventListener("click", function (ev) {
      if (ev.target.tagName === "A") {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Reveal on scroll — with a gentle stagger for grouped items */
  var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      var batch = entries.filter(function (e) { return e.isIntersecting; });
      batch.forEach(function (en, i) {
        en.target.style.transitionDelay = Math.min(i * 90, 360) + "ms";
        en.target.classList.add("in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  /* Contact form -> WhatsApp with a prefilled, human message */
  var form = document.getElementById("contactForm");
  if (form) form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var name = (form.elements.name.value || "").trim();
    var subject = (form.elements.subject.value || "").trim();
    var message = (form.elements.message.value || "").trim();
    if (!subject || !message) {
      (subject ? form.elements.message : form.elements.subject).focus();
      return;
    }
    var text = "Assalam-o-Alaikum Aleem, I found your portfolio and I'd like to discuss a project.\n"
      + (name ? "Name: " + name + "\n" : "")
      + "What I need: " + subject + "\n"
      + message;
    window.open("https://wa.me/923295566111?text=" + encodeURIComponent(text), "_blank", "noopener");
  });
})();
