(function () {
  function patchCodeCopyRegions() {
    const selectors = [
      ".md-code__nav",
      "nav.md-code__nav",
      "[role='navigation'].md-code__nav",
      "[data-md-component='codecopy']",
      "nav[aria-label][class*='code']",
      "[role='navigation'][class*='code']"
    ];

    const nodes = document.querySelectorAll(selectors.join(","));

    nodes.forEach((node) => {
      const tag = node.tagName.toLowerCase();

      // Ha natív <nav>, cseréljük <div>-re, hogy a landmark megszűnjön,
      // de a belső gomb(ok), események és osztályok megmaradjanak.
      if (tag === "nav") {
        const replacement = document.createElement("div");

        // osztályok megtartása
        replacement.className = node.className;

        // attribútumok átvétele, kivéve a landmarkhoz kötődőket
        for (const attr of Array.from(node.attributes)) {
          const name = attr.name.toLowerCase();
          if (
            name === "role" ||
            name === "aria-label" ||
            name === "aria-labelledby"
          ) {
            continue;
          }
          replacement.setAttribute(attr.name, attr.value);
        }

        // gyerekek átemelése
        while (node.firstChild) {
          replacement.appendChild(node.firstChild);
        }

        // Belső gombok aria-label megőrzése / pótlása
      Array.from(replacement.querySelectorAll('button')).forEach(function(btn) {
        if (!btn.getAttribute('aria-label')) {
          var label = (btn.getAttribute('title') || btn.textContent || '').trim();
          if (label) { btn.setAttribute('aria-label', label); }
        }
      });

      node.replaceWith(replacement);
        return;
      }

      // Ha nem <nav>, csak a landmark attribútumokat szedjük le
      node.removeAttribute("role");
      node.removeAttribute("aria-label");
      node.removeAttribute("aria-labelledby");

      // Belső gombok aria-label megőrzése / pótlása
      Array.from(node.querySelectorAll('button')).forEach(function(btn) {
        if (!btn.getAttribute('aria-label')) {
          var label = (btn.getAttribute('title') || btn.textContent || '').trim();
          if (label) { btn.setAttribute('aria-label', label); }
        }
      });
    });
  }

  function boot() {
    patchCodeCopyRegions();
  }

  document.addEventListener("DOMContentLoaded", boot);

  // Material instant loading kompatibilitás
  if (window.document$) {
    window.document$.subscribe(function () {
      boot();
    });
  }
})();