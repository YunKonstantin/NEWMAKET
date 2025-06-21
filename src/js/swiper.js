import Swiper from "swiper/bundle";
const sliderInstanses = new Map();
export function InitSwiper2(selector) {
  const screenWidth = window.innerWidth;
  const sliderElement = document.querySelector(selector);
  if (!sliderElement) return;
  if (screenWidth < 768) {
    const pagination = sliderElement.querySelector(".swiper-pagination");
    const swiper = new Swiper(selector, {
      // Initialize Swiper
      slidesPerView: "auto", // Display 1.5 slides per view
      spaceBetween: 16, // Space between slides
      // centeredSlides: true, // Center the active slide
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
      pagination: { el: pagination, clickable: true },
      breakpoints: { 768: { enabled: false } },
    });
    sliderInstanses.set(selector, swiper);
    return swiper;
  }
}
