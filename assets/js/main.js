/* Portfolio interactions: theme, nav, scroll-spy, reveal, filters, terminal, copy email. */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme ---------- */
  var themeBtn = document.getElementById("theme-toggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (themeBtn) themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#0a0e14" : "#f7f9fc");
    if (persist) {
      try { localStorage.setItem("theme", theme); } catch (e) { /* storage blocked */ }
    }
  }
  applyTheme(root.getAttribute("data-theme") || "dark", false);
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
    });
  }

  /* ---------- Header state + back to top ---------- */
  var header = document.querySelector(".site-header");
  var toTop = document.getElementById("to-top");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (toTop) toTop.classList.toggle("show", y > 900);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menu-toggle");
  var navLinks = document.getElementById("nav-links");
  function closeMenu() {
    if (!navLinks || !menuBtn) return;
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
    document.addEventListener("click", function (e) {
      if (navLinks.classList.contains("open") && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
    });
  }

  /* ---------- Scroll spy ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove("active"); });
        var link = byId[entry.target.id];
        if (link) link.classList.add("active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Project filters ---------- */
  var filterBtns = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  var projects = Array.prototype.slice.call(document.querySelectorAll(".project"));
  var moreCard = document.querySelector(".project-cta");
  filterBtns.forEach(function (btn) {
    var f = btn.getAttribute("data-filter");
    var count = btn.querySelector(".count");
    if (count) {
      count.textContent = f === "all" ? projects.length : projects.filter(function (p) { return p.getAttribute("data-cat") === f; }).length;
    }
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      projects.forEach(function (p) {
        var show = f === "all" || p.getAttribute("data-cat") === f;
        p.hidden = !show;
        if (show) p.classList.add("in");
      });
      if (moreCard) {
        moreCard.hidden = f !== "all";
        if (!moreCard.hidden) moreCard.classList.add("in");
      }
    });
  });

  /* ---------- Copy email ---------- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var label = btn.querySelector(".copy-label");
      function done() {
        if (!label) return;
        var old = label.textContent;
        label.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(function () { label.textContent = old; btn.classList.remove("copied"); }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else {
        fallback();
      }
      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) { /* ignore */ }
        document.body.removeChild(ta);
        done();
      }
    });
  });

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Terminal typing animation ---------- */
  var term = document.getElementById("terminal");
  if (term && !reduceMotion) {
    var lines = Array.prototype.slice.call(term.children);
    var cmds = lines.map(function (l) { return l.querySelector(".t-cmd"); });
    var texts = cmds.map(function (c) { return c ? c.textContent : null; });
    lines.forEach(function (l, i) {
      l.classList.add("t-hidden");
      if (cmds[i]) cmds[i].textContent = "";
    });
    var caret = document.createElement("span");
    caret.className = "caret";
    caret.setAttribute("aria-hidden", "true");
    var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

    (async function run() {
      await sleep(450);
      for (var i = 0; i < lines.length; i++) {
        lines[i].classList.remove("t-hidden");
        if (cmds[i]) {
          cmds[i].after(caret);
          var t = texts[i];
          for (var c = 0; c < t.length; c++) {
            cmds[i].textContent += t.charAt(c);
            await sleep(34 + Math.random() * 52);
          }
          await sleep(340);
          if (caret.parentNode) caret.parentNode.removeChild(caret);
        } else {
          await sleep(85);
        }
      }
    })();
  }
})();
