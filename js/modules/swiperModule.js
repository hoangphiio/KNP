export default function swiperModule() {
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
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".banner-pagination",
        clickable: true,
        type: "bullets",
      },
    });
  });
}
