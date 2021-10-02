$(document).ready(function(){



$('.slider__list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true,
  prevArrow: '<button type = "button" class = "slider__btn slider__btn--left"><div class="slider__arrow slider__arrow--left"></div></ button>',
  nextArrow: '<button type = "button" class = "slider__btn slider__btn--right"><div class="slider__arrow slider__arrow--right"></ button>'
});

$('.listing__body').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true,
  prevArrow: '<div class=" slider__arrow--left slider__arrow--listing"></div>',
  nextArrow: '<div class=" slider__arrow--right slider__arrow--listing"></div>'
});

});