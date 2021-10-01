// const closeBtn = document.querySelector('.composition__close');
const popup = document.querySelector('.popup');
const privacyBtn = document.querySelector('#privacyPolicy');

privacyBtn.addEventListener('click', function hidden(e) {
  e.preventDefault();
  popup.classList.toggle('no-visible');
});
