// skillui landing — shared behaviour (language-agnostic).
// Hint strings are read from data-* attributes so EN/DE share this file.
(function () {
  var vp = document.getElementById('viewport');
  var runBtn = document.getElementById('runBtn');
  var resetBtn = document.getElementById('resetBtn');
  var hint = document.getElementById('hintText');

  if (vp && runBtn && resetBtn && hint) {
    runBtn.addEventListener('click', function () {
      vp.classList.add('clean');
      hint.textContent = hint.getAttribute('data-clean') || hint.textContent;
    });
    resetBtn.addEventListener('click', function () {
      vp.classList.remove('clean');
      hint.textContent = hint.getAttribute('data-default') || hint.textContent;
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }
})();
