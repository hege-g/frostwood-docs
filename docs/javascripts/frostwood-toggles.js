(function () {
  "use strict";

  const STORAGE_KEY = "frostwood-wcag-mode";
  const ANNOUNCER_ID = "fw-announcer";

  function visuallyHide(element) {
    element.style.position = "absolute";
    element.style.width = "1px";
    element.style.height = "1px";
    element.style.padding = "0";
    element.style.margin = "-1px";
    element.style.overflow = "hidden";
    element.style.clip = "rect(0 0 0 0)";
    element.style.clipPath = "inset(50%)";
    element.style.whiteSpace = "nowrap";
    element.style.border = "0";
  }

  function announceToScreenReader(message) {
    if (!message || !document.body) return;

    let announcer = document.getElementById(ANNOUNCER_ID);

    if (!announcer) {
      announcer = document.createElement("div");
      announcer.id = ANNOUNCER_ID;
      announcer.setAttribute("aria-live", "polite");
      announcer.setAttribute("aria-atomic", "true");
      visuallyHide(announcer);
      document.body.appendChild(announcer);
    }

    announcer.textContent = "";

    window.setTimeout(function () {
      announcer.textContent = message;
    }, 100);
  }

  function applyWcagMode(enabled) {
    if (!document.body) return;
    document.body.classList.toggle("wcag-mode", enabled);
  }

  function restoreWcagEarly() {
    if (localStorage.getItem(STORAGE_KEY) === "true" && document.body) {
      document.body.classList.add("wcag-mode");
    }
  }

  restoreWcagEarly();

  function syncPaletteForScreenReader() {
    const inputs = document.querySelectorAll('input[name="__palette"]');
    if (!inputs.length) return;

    inputs.forEach(function (input) {
      const isSelected = input.checked === true;
      input.setAttribute("aria-checked", isSelected ? "true" : "false");

      const label = document.querySelector("label[for='" + input.id + "']");
      if (!label) return;

      const rawLabel =
        input.getAttribute("aria-label") ||
        label.getAttribute("title") ||
        "Témaváltó";

      const cleanLabel = rawLabel.replace(/^Aktuális téma:\s*/i, "").trim();

      if (isSelected) {
        label.setAttribute("aria-label", "Aktuális téma: " + cleanLabel);
        label.setAttribute("title", "Aktuális téma: " + cleanLabel);
      } else {
        label.setAttribute("aria-label", cleanLabel);
        label.setAttribute("title", cleanLabel);
      }
    });
  }

  function watchPaletteInputs() {
    if (window.__fwPaletteWatchBound) return;

    document.querySelectorAll('input[name="__palette"]').forEach(function (input) {
      input.addEventListener("change", function () {
        window.setTimeout(function () {
          syncPaletteForScreenReader();

          const checked = document.querySelector('input[name="__palette"]:checked');
          if (!checked) return;

          const rawLabel = checked.getAttribute("aria-label") || "Téma módosítva";
          const cleanLabel = rawLabel.replace(/^Aktuális téma:\s*/i, "").trim();

          announceToScreenReader("Aktuális téma: " + cleanLabel);
        }, 120);
      });
    });

    window.__fwPaletteWatchBound = true;
  }

  function updateButtonState(button, enabled) {
    if (!button) return;

    button.setAttribute("aria-pressed", String(enabled));
    button.classList.toggle("is-active", enabled);

    const label = enabled ? "WCAG mód kikapcsolása" : "WCAG mód bekapcsolása";
    button.title = label;
    button.setAttribute("aria-label", label);
  }

  function findThemeToggleContainer() {
    return (
      document.querySelector('[data-md-component="palette"]') ||
      document.querySelector(".md-header__option") ||
      null
    );
  }

  function ensureButton() {
    const header = document.querySelector(".md-header__inner");
    if (!header) return;

    let button = document.querySelector(".fw-wcag-toggle");
    const isActive = localStorage.getItem(STORAGE_KEY) === "true";

    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.className = "md-header__button md-icon fw-wcag-toggle";
      button.textContent = "WCAG";

      button.addEventListener("click", function () {
        const next = localStorage.getItem(STORAGE_KEY) !== "true";

        localStorage.setItem(STORAGE_KEY, next ? "true" : "false");
        applyWcagMode(next);
        updateButtonState(button, next);

        announceToScreenReader("WCAG mód " + (next ? "bekapcsolva" : "kikapcsolva"));
      });

      const themeToggle = findThemeToggleContainer();

      if (themeToggle && themeToggle.parentNode) {
        themeToggle.parentNode.insertBefore(button, themeToggle.nextSibling);
      } else {
        header.appendChild(button);
      }
    }

    updateButtonState(button, isActive);
  }

  function initSkipLinkFocusFix() {
    const skipLink = document.querySelector("a.md-skip");
    if (!skipLink) return;

    const correctLabel = "Ugrás a fő tartalomhoz";

    skipLink.textContent = correctLabel;
    skipLink.setAttribute("aria-label", correctLabel);
    skipLink.setAttribute("title", correctLabel);

    skipLink.removeEventListener("click", handleSkipLinkClick);
    skipLink.addEventListener("click", handleSkipLinkClick);
  }

  function handleSkipLinkClick() {
    window.setTimeout(function () {
      focusMainTarget();
    }, 80);
  }

  function initLogoAccessibilityFix() {
    const logoLink = document.querySelector(".md-header__button.md-logo");
    if (!logoLink) return;

    const targetLabel = "Kezdőlapra ugrás";

    logoLink.setAttribute("aria-label", targetLabel);
    logoLink.setAttribute("title", targetLabel);
  }

  function initHeaderAccessibilityFix() {
    const selectors = [
      ".md-header__title",
      ".md-header__topic",
      "[data-md-component='header-title']",
      "[data-md-component='header-topic']"
    ];

    selectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.setAttribute("aria-hidden", "true");
        element.setAttribute("role", "presentation");
      });
    });
  }

  function initAdmonitionCloseButtons() {
    const detailsList = document.querySelectorAll(".md-typeset details");

    detailsList.forEach(function (details) {
      const summary = details.querySelector(":scope > summary");
      if (!summary) return;
      if (details.querySelector(":scope > .fw-admonition-close-wrap")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "fw-admonition-close-wrap";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "fw-admonition-close";
      button.textContent = "Bezárás";
      button.setAttribute("aria-label", "Admonition bezárása");

      button.addEventListener("click", function () {
        details.open = false;

        try {
          summary.focus({ preventScroll: true });
        } catch (e) {
          summary.focus();
        }

        announceToScreenReader("Szakasz bezárva");
      });

      wrapper.appendChild(button);
      details.appendChild(wrapper);
    });
  }

  function initSearchControls() {
    const searchRoots = document.querySelectorAll(".md-search, [data-md-component='search']");

    searchRoots.forEach(function (root) {
      const share = root.querySelector("[data-md-component='search-share']");
      if (share) {
        share.setAttribute("aria-label", "Keresési link másolása");
        share.setAttribute("title", "Keresési link másolása");
      }

      const reset = root.querySelector("button[type='reset']");
      if (reset) {
        reset.setAttribute("aria-label", "Keresés törlése");
        reset.setAttribute("title", "Keresés törlése");
      }
    });
  }

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function getMainFocusTarget() {
    return (
      document.querySelector(".md-content h1") ||
      document.querySelector("main h1") ||
      document.querySelector(".md-content__inner") ||
      document.querySelector("main")
    );
  }

  function focusMainTarget() {
    const target = getMainFocusTarget();
    if (!target) return;

    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
      target.classList.add("fw-programmatic-focus-target");
    }

    try {
      target.focus({ preventScroll: true });
    } catch (e) {
      target.focus();
    }
  }

  function initNavigationTopFix() {
    const topLinks = document.querySelectorAll(".md-top, [data-md-component='top']");
    const label = "Ugrás az oldal tetejére";

    topLinks.forEach(function (topLink) {
      topLink.setAttribute("aria-label", label);
      topLink.setAttribute("title", label);

      topLink.childNodes.forEach(function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = " " + label;
        }
      });

      topLink.removeEventListener("click", handleTopNavigationClick);
      topLink.addEventListener("click", handleTopNavigationClick);
    });
  }

  function handleTopNavigationClick() {
    window.setTimeout(function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });

      window.setTimeout(focusMainTarget, 120);
    }, 40);
  }

  function initFrostwoodKeyboardNavigation() {
    document.removeEventListener("keydown", handleFrostwoodKeyboardNavigation);
    document.addEventListener("keydown", handleFrostwoodKeyboardNavigation);
  }

  function isEditableTarget(target) {
    if (!target) return false;

    const tag = target.tagName ? target.tagName.toLowerCase() : "";

    return (
      tag === "input" ||
      tag === "textarea" ||
      tag === "select" ||
      target.isContentEditable
    );
  }

  function handleFrostwoodKeyboardNavigation(event) {
    if (isEditableTarget(event.target)) return;
    if (!event.altKey || !event.shiftKey || event.ctrlKey || event.metaKey) return;

    if (event.code === "Home" || event.key === "Home") {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });

      window.setTimeout(focusMainTarget, 120);
      announceToScreenReader("Ugrás az oldal tetejére");
      return;
    }

if (event.code === "PageUp" || event.key === "PageUp") {
  const next = document.querySelector(".md-footer__link--next");

  if (next && next.href) {
    event.preventDefault();
    window.location.href = next.href;
  }

  return;
}

if (event.code === "PageDown" || event.key === "PageDown") {
  const prev = document.querySelector(".md-footer__link--prev");

  if (prev && prev.href) {
    event.preventDefault();
    window.location.href = prev.href;
      }
    }
  }

  function initTooltipAccessibility() {
    document.querySelectorAll(".md-typeset [title]").forEach(function (element) {
      const title = (element.getAttribute("title") || "").trim();
      if (!title) return;

      element.classList.add("fw-tooltip-ready");

      if (!element.hasAttribute("aria-label") && !element.hasAttribute("aria-describedby")) {
        const text = (element.textContent || "").replace(/\s+/g, " ").trim();

        if (!text || text === title) {
          element.setAttribute("aria-label", title);
        }
      }

      const tag = element.tagName ? element.tagName.toLowerCase() : "";

      const focusable =
        tag === "a" ||
        tag === "button" ||
        tag === "input" ||
        tag === "textarea" ||
        tag === "select";

      if (!focusable && !element.hasAttribute("tabindex")) {
        element.setAttribute("tabindex", "0");
      }
    });
  }

  function boot() {
    applyWcagMode(localStorage.getItem(STORAGE_KEY) === "true");

    ensureButton();

    initSkipLinkFocusFix();
    initLogoAccessibilityFix();
    initHeaderAccessibilityFix();
    initAdmonitionCloseButtons();
    initSearchControls();
    initNavigationTopFix();
    initFrostwoodKeyboardNavigation();
    initTooltipAccessibility();
    watchPaletteInputs();

    window.setTimeout(syncPaletteForScreenReader, 150);
  }

  document.addEventListener("DOMContentLoaded", boot);

  if (window.document$) {
    window.document$.subscribe(function () {
      boot();
    });
  }
})();