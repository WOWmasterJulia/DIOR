const swiper = new Swiper(".top__slider", {
  // Optional parameters
  //   direction: "vertical",
  //   loop: true,

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});



const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
});
