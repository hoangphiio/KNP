export default function swiperModule() {
  const swiperCard = new Swiper(".customer-card .swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    observer: true,
    observeParents: true,
    loopedSlides: 4,
    speed: 1800,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1160: {
        slidesPerView: 3,
      },
    },
  });
  const swiperTablist = new Swiper(".tablist-inner-panel-swipper .swiper", {
    loop: true,
    observer: true,
    observeParents: true,
    loopedSlides: 4,
    spaceBetween: 20,
    speed: 1800,
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: ".tablist-swiper-next",
      prevEl: ".tablist-swiper-prev",
    },
  });
  $(document).ready(function () {
    var swiperBanner = new Swiper(".bn-content .swiper", {
      loop: true,
      effect: "fade",
      spaceBetween: 30,
      speed: 2000,
      fadeEffect: {
        crossFade: true,
      }, 
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".banner-pagination",
        clickable: true,
        type: "bullets",
      },
    });
  });
}
