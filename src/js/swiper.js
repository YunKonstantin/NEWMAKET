import Swiper from "swiper/bundle";
const sliderInstanses = new Map();
export function InitSwiper2(selector) {
  const screenWidth = window.innerWidth;
  const sliderElement = document.querySelector(selector);
  if (!sliderElement) return;
  if (screenWidth < 768) {
    const pagination = sliderElement.querySelector(".swiper-pagination");
    const swiper = new Swiper(sliderElement, {
      slidesPerView: "auto",
      spaceBetween: 16,

      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
      pagination: { el: pagination, clickable: true },
      breakpoints: { 768: { enabled: false } },
    });
    sliderInstanses.set(selector, swiper);
    return swiper;
  }
}
