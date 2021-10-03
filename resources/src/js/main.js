// logic close popup in footer
const popup = document.querySelector('.popup');
const privacyBtn = document.querySelector('#privacyPolicy');

privacyBtn.addEventListener('click', function hidden(e) {
  e.preventDefault();
  popup.classList.toggle('no-visible');
});

// logic switch btn - on/off
const btnOn = document.querySelector('#btnOn');
const btnOff = document.querySelector('#btnOff');

   
  btnOn.addEventListener('click', function hidden(e) {
    e.preventDefault();
    btnOn.classList.add('elements__button--active');
    btnOff.classList.remove('elements__button--active');
});

  btnOff.addEventListener('click', function hidden(e) {
    e.preventDefault();
    btnOn.classList.remove('elements__button--active');
    btnOff.classList.add('elements__button--active');
  });


// scrol for button click-to-top

const smoothLinks = document.querySelectorAll('a[href^="#header"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};