// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Auto-update footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Portfolio filter buttons
  var filters = document.querySelectorAll('.filter');
  var tiles = document.querySelectorAll('.tile[data-category]');
  if (filters.length && tiles.length) {
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filters.forEach(function (b) { b.classList.remove('is-active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        var cat = btn.getAttribute('data-filter');
        tiles.forEach(function (tile) {
          var show = cat === 'all' || tile.getAttribute('data-category') === cat;
          tile.hidden = !show;
        });
      });
    });
  }
});
