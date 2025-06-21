//ебливая логика! ЛЕРА ПРИВЕТ!!!


let slidesContainer;
let slides;
let pagination;
let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;
let visibleSlides = 1;

export function initSwiper(selector) {
  const container = document.querySelector(selector);
  if (!container) {
    console.error("Slider container not found:", selector);
    return false;
  }

  slidesContainer = container.querySelector(".slides");
  slides = container.querySelectorAll(".slide");
  pagination = container.querySelector(".swiper__pagination");

  if (!slidesContainer || !slides.length || !pagination) {
    console.error("Slider elements not found in container");
    return false;
  }

  createPagination();
  updateSlider();
  setupEventListeners();
  return true;
}


function setupEventListeners() {
  // ТАЧ МОД ОН ЖЕ ТЫКАТЬ ПАЛЬЦАМИ
  slidesContainer.addEventListener("touchstart", handleTouchStart);
  slidesContainer.addEventListener("touchmove", handleTouchMove);
  slidesContainer.addEventListener("touchend", handleTouchEnd);
  window.addEventListener("resize", handleResize);
}

function getVisibleSlidesForBullets(slides) {
  // ПРОВЕРКА СЛАЙДОВ МАССИВ
  if (!Array.isArray(slides) || slides.length === 0) {
    return [];
  }

  const visibles = [];
  const maxVisibleSlides = 8;

  for (let i = 0; i < slides.length; i++) {
    // ХЕР ЕГО ЗНАЕТ ЧТО ЭТО ГПТ СКАЗАЛ ДОБВИТЬ, ГОВОРИТ ТИПО ЧТОБЫ НЕ БЫЛО КЛАССА ЕКСТРА
    if (!slides[i].classList.contains("extra")) {
      visibles.push(slides[i]);
    }
    // ПРЕРЫВАЕМ ПОКАЗ СЛАЙДОВ
    if (visibles.length === maxVisibleSlides) {
      break;
    }
  }

  return visibles;
}

function createPagination() {
  const swiperContainer = document.querySelector(".slider-wrapper");
  if (!swiperContainer) {
    console.error("Swiper container не найден!");
    return;
  }

  let pagination = document.querySelector(".swiper__pagination");
  if (!pagination) {
    console.log("Создаем новый элемент пагинации");
    pagination = document.createElement("div");
    pagination.className = "swiper__pagination";
    swiperContainer.appendChild(pagination);
  }

  pagination.innerHTML = "";

  const visibleForBullets = getVisibleSlidesForBullets(slides);
  const bulletCount = Math.max(visibleForBullets.length - visibleSlides + 1, 1);

  // 5. Адаптация для больших экранов
  if (window.innerWidth >= 1440) {
    pagination.style.display = "none";
    return;
  }

  pagination.style.display = "flex";

  // 6. Создаем буллеты
  for (let i = 0; i < bulletCount; i++) {
    const bullet = document.createElement("span");
    bullet.classList.add("custom-bullet");

    if (i === currentIndex) {
      bullet.classList.add("custom-bullet--active");
    }

    bullet.addEventListener("click", () => {
      currentIndex = i;
      updateSlider();
     // resetAutoplay();
      // Обновляем активный буллет
      document.querySelectorAll(".custom-bullet").forEach((el, idx) => {
        el.classList.toggle("custom-bullet--active", idx === i);
      });
    });

    pagination.appendChild(bullet);
  }
}
function updateSlider() {
  if (!slidesContainer || !pagination) {
    console.error("Slider elements not initialized");
    return;
  }

  const visibleForBullets = getVisibleSlidesForBullets(Array.from(slides));
  if (!visibleForBullets.length) return;

  if (visibleSlides >= visibleForBullets.length || window.innerWidth >= 1440) {
    slidesContainer.style.transform = "none";
    pagination.style.display = "none";
    return;
  }

  const slideWidth = visibleForBullets[0].offsetWidth + 16;
  const offset = slideWidth * currentIndex;
  slidesContainer.style.transition = "transform 0.3s ease";
  slidesContainer.style.transform = `translateX(-${offset}px)`;
  pagination.style.display = "flex";

  document.querySelectorAll(".custom-bullet").forEach((b, i) => {
    b.classList.toggle("custom-bullet--active", i === currentIndex);
  });
}
// function resetAutoplay() {
//   clearInterval(autoplayInterval);
//   autoplayInterval = setInterval(() => {
//     const visibleForBullets = getVisibleSlidesForBullets();
//     if (visibleSlides >= visibleForBullets.length || window.innerWidth >= 1440)
//       return;
//     currentIndex =
//       (currentIndex + 1) % (visibleForBullets.length - visibleSlides + 1);
//     updateSlider();
//   }, 3000);
// }

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
  isDragging = true;
  slidesContainer.style.transition = "none";
}

function handleTouchMove(e) {
  if (!isDragging || window.innerWidth >= 1440) return;
  currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;
  const slideWidth = getVisibleSlidesForBullets()[0].offsetWidth + 16;
  const offset = -currentIndex * slideWidth + deltaX;
  slidesContainer.style.transform = `translateX(${offset}px)`;
}

function handleTouchEnd(e) {
  if (!isDragging || window.innerWidth >= 1440) return;
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;
  const slideWidth = getVisibleSlidesForBullets()[0].offsetWidth + 16;

  slidesContainer.style.transition = "transform 0.3s ease";

  if (deltaX > slideWidth / 3 && currentIndex > 0) {
    currentIndex--;
  } else if (
    deltaX < -slideWidth / 3 &&
    currentIndex < getVisibleSlidesForBullets().length - visibleSlides
  ) {
    currentIndex++;
  }
  updateSlider();
 // resetAutoplay();
}

function handleResize() {
  const width = window.innerWidth;
  if (width >= 1440) {
    visibleSlides = getVisibleSlidesForBullets().length;
    currentIndex = 0;
  } else if (width >= 768) {
    visibleSlides = getVisibleSlidesForBullets().length;
    currentIndex = 0;
  } else if (width >= 480) {
    visibleSlides = 2;
  } else {
    visibleSlides = 1;
  }

  if (currentIndex > getVisibleSlidesForBullets().length - visibleSlides) {
    currentIndex = getVisibleSlidesForBullets().length - visibleSlides;
  }
  createPagination();
  updateSlider();
 // resetAutoplay();
}

window.addEventListener("resize", handleResize);
handleResize();
//ВОПРОС ТАКОЙ, ЧТО ТУТ НЕ ТАК В ЛОГИКЕ
//И СЛЕДОМ ВТОРОЙ, ОКЕЙ ЛОГИКА ЕСТЬ ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРА ТОЖЕ, ЧО ОН ВЫКАБЛУЧИВАЕТСЯ, В ИННЕР HTML ДЛЯ ПАГИНАЦИИ ДОБАВИТЬ ЕГО HTML ? ТАМ ПРОСТО ОДИН БЛОК ДИВ КЛЭС И ВСЕ
