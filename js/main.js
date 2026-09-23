/* Steam Achievement — interactions */

(function () {
  "use strict";

  /* ---------- Navbar scroll state ---------- */
  var navbar = document.getElementById("navbar");
  function onScroll() {
    if (window.scrollY > 20) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  /* ---------- Animated counters ---------- */
  var counters = [
    { el: "statGames", target: 2.4, decimals: 1, suffix: "M" },
    { el: "statAch", target: 180, decimals: 0, suffix: "M" },
    { el: "statUsers", target: 850, decimals: 0, suffix: "K" },
    { el: "statPct", target: 94, decimals: 0, suffix: "%" }
  ];

  function animateCounter(cfg) {
    var el = document.getElementById(cfg.el);
    if (!el) return;
    var start = null;
    var dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent =
        (cfg.target * eased).toFixed(cfg.decimals) + cfg.suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Unlock showcase list ---------- */
  var unlocks = [
    { game: "Shadow Legacy", ach: "The Untouchable", rare: true, rate: "0.8% rare", icon: "\u2605" },
    { game: "Echoes of Void", ach: "Warden of the Deep", rare: true, rate: "1.2% rare", icon: "\u2694" },
    { game: "Neon Drift", ach: "Landing at 400km/h", rare: false, rate: "7.4%", icon: "\u26A1" },
    { game: "Kingdom Forge", ach: "Empire Builder", rare: false, rate: "12.1%", icon: "\u265B" },
    { game: "Shadow Legacy", ach: "Ghost Protocol", rare: true, rate: "2.0% rare", icon: "\u2726" },
    { game: "Echoes of Void", ach: "Ritual Master", rare: false, rate: "9.8%", icon: "\u2764" }
  ];

  var unlockList = document.getElementById("unlockList");
  if (unlockList) {
    unlockList.innerHTML = unlocks
      .map(function (u) {
        return (
          '<div class="unlock reveal">' +
          '<div class="unlock-icon">' + u.icon + "</div>" +
          '<div class="unlock-info">' +
          "<strong>" + u.ach + "</strong>" +
          "<span>" + u.game + "</span>" +
          "</div>" +
          '<div class="unlock-rate' + (u.rare ? " rare" : "") + '">' + u.rate + "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  /* ---------- FAQ accordion ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      faqItems.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal, .sec-head, .card, .game, .price-card, .hero-card");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Start hero counters when hero card is visible ---------- */
  var heroCard = document.getElementById("heroCard");
  var counted = false;
  var ioCount = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      counters.forEach(animateCounter);
    }
  }, { threshold: 0.3 });
  if (heroCard) ioCount.observe(heroCard);

  /* ---------- Reveal animation classes for dynamic unlock items ---------- */
  setTimeout(function () {
    document.querySelectorAll(".unlock.reveal").forEach(function (el) { el.classList.add("visible"); });
  }, 150);
})();