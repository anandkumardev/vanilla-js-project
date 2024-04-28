const button = document.querySelector('button');
const mobileNav = document.querySelector('.mobile-nav');
const barIcon = document.getElementById('bar-icon');
const closeIcon = document.getElementById('close-icon');

function showMenu() {
    barIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
};

button.addEventListener('click', () => showMenu());