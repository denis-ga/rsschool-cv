const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    console.log('Burger menu clicked!');
    navLinks.classList.toggle('show');
});