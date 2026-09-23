/* Tiger Team — shared site content config (localStorage overrides) */
(function () {
  "use strict";

  var STORE_KEY = "tiger_site_config_v1";

  var DEFAULTS = {
    telegramUrl: "https://t.me/Tiger_TE",
    navTelegramLabel: "Telegram",
    versionBadge: "v1.0",
    versionFooter: "Steam Achievement \u00B7 v1.0",

    heroTag: "Professional Steam Tool",
    heroT1: "UNLOCK EVERY",
    heroTAccent: "ACHIEVEMENT",
    heroT2: "ALL GAMES",
    heroDesc: "Steam Achievement is the professional tool that unlocks all your game achievements automatically \u2014 running 24/7 in the background while you rest.",
    heroBtn: "Download Now \u2014 Free",

    stat1V: "24/7",
    stat1L: "Auto Unlocking",
    stat2V: "100%",
    stat2L: "Safe & Fast",
    stat3V: "0",
    stat3L: "Downloads In-Game",

    cardName: "Steam Achievement",
    file1Name: "Steam.Achievement.tiger.zip",
    file1Meta: "743 KB \u00B7 Windows",
    file2Name: "Installer (EXE)",
    file2Meta: "1 MB \u00B7 Windows",
    hc1: "Auto achievement unlocker",
    hc1V: "24/7",
    hc2: "All supported games",
    hc2V: "100%",
    hc3: "Works in the background",
    hc3V: "Always",

    featEyebrow: "Features",
    featTitle1: "Why Steam",
    featTitle2: "Achievement?",
    f1T: "24/7 Auto Unlock",
    f1D: "Runs continuously in the background and unlocks achievements without any manual effort.",
    f2T: "All Game Achievements",
    f2D: "Works with all your games and unlocks their full achievement lists automatically.",
    f3T: "Safe & Clean",
    f3D: "Lightweight, reviewed by the Tiger Team, and designed to stay out of your way while gaming.",
    f4T: "Lightning Fast",
    f4D: "Small installer, instant setup. Start unlocking achievements in under a minute.",

    howEyebrow: "How It Works",
    howTitle1: "3 Simple",
    howTitle2: "Steps",
    s1T: "Download",
    s1D: "Grab the free ZIP or installer from the download section below.",
    s2T: "Run It",
    s2D: "Extract and launch the tool once. It detects your installed games automatically.",
    s3T: "Watch Them Unlock",
    s3D: "Steam Achievement unlocks your achievements 24/7. Completed \u2014 just like that.",

    dlEyebrow: "Download",
    dlTitle1: "Get Steam",
    dlTitle2: "Achievement",
    dlSub: "Free forever. Compatible with Windows 7 / 8 / 10 / 11.",
    dl1T: "Portable ZIP",
    dl1M: "743 KB \u00B7 No install needed",
    dl1B: "Download ZIP",
    dl2T: "Installer EXE",
    dl2M: "1 MB \u00B7 Auto setup wizard",
    dl2B: "Download EXE",

    faqEyebrow: "FAQ",
    faqTitle1: "Frequently Asked",
    faqTitle2: "Questions",
    q1: "Is Steam Achievement free?",
    a1: "Yes. The tool is 100% free forever, including updates.",
    q2: "Which achievements can be unlocked?",
    a2: "The tool unlocks the full achievement list of all your supported games automatically.",
    q3: "Why does my antivirus flag it as unknown?",
    a3: "Unpopular small tools often trigger generic warnings. The package is verified by the Tiger Team. Add an exception if needed.",
    q4: "Which Windows versions are supported?",
    a4: "Windows 7, 8, 10 and 11, 64-bit.",
    q5: "Does the tool require Steam to be opened?",
    a5: "Yes, keep Steam running in the background while the tool works.",

    footerDesc: "Professional Steam tool by Tiger Team. Unlock all your game achievements automatically.",
    rightsText: "All rights reserved to"
  };

  /* field schema for admin form: key, label, group, type */
  var FIELDS = [
    ["General", "telegramUrl", "Telegram link (URL)", "url"],
    ["General", "navTelegramLabel", "Navbar Telegram label", "text"],
    ["General", "versionBadge", "Version badge (hero card)", "text"],
    ["General", "versionFooter", "Version text (footer)", "text"],
    ["Hero", "heroTag", "Top badge", "text"],
    ["Hero", "heroT1", "Title line 1", "text"],
    ["Hero", "heroTAccent", "Title line 2 (yellow)", "text"],
    ["Hero", "heroT2", "Title line 3", "text"],
    ["Hero", "heroDesc", "Description", "textarea"],
    ["Hero", "heroBtn", "Button text", "text"],
    ["Hero stats", "stat1V", "Stat 1 value", "text"],
    ["Hero stats", "stat1L", "Stat 1 label", "text"],
    ["Hero stats", "stat2V", "Stat 2 value", "text"],
    ["Hero stats", "stat2L", "Stat 2 label", "text"],
    ["Hero stats", "stat3V", "Stat 3 value", "text"],
    ["Hero stats", "stat3L", "Stat 3 label", "text"],
    ["Hero card", "cardName", "Card title", "text"],
    ["Hero card", "file1Name", "File 1 name", "text"],
    ["Hero card", "file1Meta", "File 1 info", "text"],
    ["Hero card", "file2Name", "File 2 name", "text"],
    ["Hero card", "file2Meta", "File 2 info", "text"],
    ["Hero card", "hc1", "Row 1 text", "text"],
    ["Hero card", "hc1V", "Row 1 value", "text"],
    ["Hero card", "hc2", "Row 2 text", "text"],
    ["Hero card", "hc2V", "Row 2 value", "text"],
    ["Hero card", "hc3", "Row 3 text", "text"],
    ["Hero card", "hc3V", "Row 3 value", "text"],
    ["Features", "featEyebrow", "Eyebrow", "text"],
    ["Features", "featTitle1", "Title part 1", "text"],
    ["Features", "featTitle2", "Title part 2 (yellow)", "text"],
    ["Features", "f1T", "Card 1 title", "text"],
    ["Features", "f1D", "Card 1 text", "textarea"],
    ["Features", "f2T", "Card 2 title", "text"],
    ["Features", "f2D", "Card 2 text", "textarea"],
    ["Features", "f3T", "Card 3 title", "text"],
    ["Features", "f3D", "Card 3 text", "textarea"],
    ["Features", "f4T", "Card 4 title", "text"],
    ["Features", "f4D", "Card 4 text", "textarea"],
    ["How it works", "howEyebrow", "Eyebrow", "text"],
    ["How it works", "howTitle1", "Title part 1", "text"],
    ["How it works", "howTitle2", "Title part 2 (yellow)", "text"],
    ["How it works", "s1T", "Step 1 title", "text"],
    ["How it works", "s1D", "Step 1 text", "textarea"],
    ["How it works", "s2T", "Step 2 title", "text"],
    ["How it works", "s2D", "Step 2 text", "textarea"],
    ["How it works", "s3T", "Step 3 title", "text"],
    ["How it works", "s3D", "Step 3 text", "textarea"],
    ["Download", "dlEyebrow", "Eyebrow", "text"],
    ["Download", "dlTitle1", "Title part 1", "text"],
    ["Download", "dlTitle2", "Title part 2 (yellow)", "text"],
    ["Download", "dlSub", "Subtitle", "text"],
    ["Download", "dl1T", "Card 1 title", "text"],
    ["Download", "dl1M", "Card 1 info", "text"],
    ["Download", "dl1B", "Card 1 button", "text"],
    ["Download", "dl2T", "Card 2 title", "text"],
    ["Download", "dl2M", "Card 2 info", "text"],
    ["Download", "dl2B", "Card 2 button", "text"],
    ["FAQ", "faqEyebrow", "Eyebrow", "text"],
    ["FAQ", "faqTitle1", "Title part 1", "text"],
    ["FAQ", "faqTitle2", "Title part 2 (yellow)", "text"],
    ["FAQ", "q1", "Question 1", "text"],
    ["FAQ", "a1", "Answer 1", "textarea"],
    ["FAQ", "q2", "Question 2", "text"],
    ["FAQ", "a2", "Answer 2", "textarea"],
    ["FAQ", "q3", "Question 3", "text"],
    ["FAQ", "a3", "Answer 3", "textarea"],
    ["FAQ", "q4", "Question 4", "text"],
    ["FAQ", "a4", "Answer 4", "textarea"],
    ["FAQ", "q5", "Question 5", "text"],
    ["FAQ", "a5", "Answer 5", "textarea"],
    ["Footer", "footerDesc", "Description", "textarea"],
    ["Footer", "rightsText", "Rights text (before Tiger team)", "text"]
  ];

  function loadOverrides() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return {};
      var obj = JSON.parse(raw);
      return obj && typeof obj === "object" ? obj : {};
    } catch (e) { return {}; }
  }

  function mergeInto(base, extra) {
    if (!extra || typeof extra !== "object") return base;
    Object.keys(DEFAULTS).forEach(function (k) {
      if (extra[k] !== undefined && extra[k] !== "") base[k] = extra[k];
    });
    return base;
  }

  function getConfig() {
    return mergeInto(Object.assign({}, DEFAULTS), loadOverrides());
  }

  /* Global content published via admin panel (content.json in the repo).
     Priority: DEFAULTS < content.json (everyone) < localStorage (this browser preview). */
  var remoteCache = null;

  function applyLive() {
    applyConfig(mergeInto(mergeInto(Object.assign({}, DEFAULTS), remoteCache), loadOverrides()));
  }

  function fetchRemote() {
    try {
      fetch("content.json", { cache: "no-store" })
        .then(function (r) { return r && r.ok ? r.json() : null; })
        .then(function (json) {
          if (json && typeof json === "object") {
            remoteCache = json;
            applyLive();
          }
        })
        .catch(function () {});
    } catch (e) {}
  }

  function saveConfig(obj) {
    localStorage.setItem(STORE_KEY, JSON.stringify(obj));
  }

  function resetConfig() {
    localStorage.removeItem(STORE_KEY);
  }

  function setText(id, val) {
    var el = document.getElementById(id);
    if (el && val !== undefined) el.textContent = val;
  }

  function applyConfig(cfg) {
    cfg = cfg || getConfig();
    Object.keys(DEFAULTS).forEach(function (key) {
      if (key === "telegramUrl") return;
      if (key === "heroBtn") return;
      var el = document.getElementById("cfg-" + key);
      if (el) el.textContent = cfg[key];
    });
    /* telegram links (href) */
    var navT = document.getElementById("cfg-navTelegram");
    if (navT && cfg.telegramUrl) navT.href = cfg.telegramUrl;
    var footT = document.getElementById("cfg-footerTelegram");
    if (footT && cfg.telegramUrl) footT.href = cfg.telegramUrl;
    /* hero button keeps download icon */
    var btn = document.getElementById("cfg-heroBtn");
    if (btn && cfg.heroBtn !== undefined) btn.innerHTML = "&#10515;&nbsp; " + cfg.heroBtn;
    if (cfg.pageTitle) document.title = cfg.pageTitle;
  }

  window.TIGER_DEFAULTS = DEFAULTS;
  window.TIGER_FIELDS = FIELDS;
  window.TigerConfig = {
    get: getConfig,
    all: function () { return mergeInto(mergeInto(Object.assign({}, DEFAULTS), remoteCache), loadOverrides()); },
    live: function () { return remoteCache ? mergeInto(Object.assign({}, DEFAULTS), remoteCache) : null; },
    save: saveConfig,
    reset: resetConfig,
    apply: applyConfig,
    refresh: fetchRemote,
    key: STORE_KEY
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { applyLive(); fetchRemote(); });
  } else {
    applyLive(); fetchRemote();
  }
})();
