function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.classList.remove('active');
  });
  var target = document.getElementById(id);
  var navTarget = document.getElementById('nav-' + id);
  if (target) target.classList.add('active');
  if (navTarget) navTarget.classList.add('active');
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('[data-page]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      showPage(this.getAttribute('data-page'));
    });
  });

  var cursor = document.getElementById('cursor');
  if (cursor) {
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button').forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        cursor.style.width = '14px';
        cursor.style.height = '14px';
        cursor.style.opacity = '0.5';
      });
      el.addEventListener('mouseleave', function() {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursor.style.opacity = '1';
      });
    });
  }

});
