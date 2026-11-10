const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = contactForm.querySelector('.form-note');
    note.textContent = 'Дякуємо! Це демонстраційна форма — повідомлення не надсилається на сервер.';
    contactForm.reset();
  });
}
