let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
let firstContainer = document.querySelector('.first-container');

mobileNavToggle.addEventListener('click', () => {
    firstContainer.classList.toggle('active');
});