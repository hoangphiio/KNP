export default function swiperModule() {
  const swiperCard = new Swiper(".customer-inner-card .swiper", {
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
}
