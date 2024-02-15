document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },

    effect: 'slide',

    speed: 1000,
  });
});
