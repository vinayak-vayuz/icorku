const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.createElement('div');

overlay.classList.add('overlay');
document.body.appendChild(overlay);

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    overlay.style.display = mobileMenu.classList.contains('open') ? 'block' : 'none';
});

overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    overlay.style.display = 'none';
});
