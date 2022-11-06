const js_active = document.querySelector('#js_active');
const js_menu = document.querySelector('.header__section-box');

js_active.addEventListener('click', function(e) {
  e.preventDefault();
  js_active.classList.toggle('active');
  js_menu.classList.toggle('active');
});