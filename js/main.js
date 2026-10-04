(function () {
  "use strict";

  /* ---------- customer reviews — Swiper ---------- */
  var reviewSwiper = new Swiper(".review-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 4200,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: { el: ".review-swiper .swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".review-swiper .swiper-button-next",
      prevEl: ".review-swiper .swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 24 },
      1200: { slidesPerView: 3, spaceBetween: 28 },
    },
  });
})();
