import highilight from "../assets/image/highilight.svg";
import repair from "../assets/image/repair.svg";
import checkstatus from "../assets/image/checkstatus.svg";
import expand from "../assets/image/expand.svg";
import Lenovo from "../assets/image/Lenovo.svg";
import go from "../assets/image/go.svg";
import Samsung from "../assets/image/Samsung.svg";
import Apple from "../assets/image/Apple.svg";
import Viev from "../assets/image/Viev.svg";
import Bosh from "../assets/image/Bosh.svg";
import HP from "../assets/image/HP.svg";
import Acer from "../assets/image/Acer.svg";
import Sony from "../assets/image/Sony.svg";
import PictureCopy from '../assets/image/Picture Copy.svg';
import { InitSwiper2 } from './swiper.js';

export function createPages() {
  const pages = document.createElement("main");
  pages.className = "main";
  pages.innerHTML = ` <div class="main__services">
        <div class="main__title">
          <img class="main__title-divider" src="${highilight}" />
          <h1 class="main__title-name">Услуги и сервисы</h1>
        </div>
        <div class="main__services-buttons">
          <button class="button_item">
            <p class="button_item-text">Оставить заявку</p>
            <img src="${repair}" />
          </button>
          <button class="button_item">
            <p class="button_item-text">Статус ремонта</p>
            <img src="${checkstatus}" />
          </button>
        </div>
      </div>
      <div class="main__menu">
        <nav class="main__menu-items">
          <ul class="main__menu-list">
            <li class="main__menu-item main__menu-item--active">
              Ремонтируемые бренды
            </li>
            <li class="main__menu-item">Ремонтируемые устройства</li>
            <li class="main__menu-item">Цены на услуги</li>
            <li class="main__menu-item">Адреса сервисных центров</li>
            <li class="main__menu-item">Специальные цены</li>
            <li class="main__menu-item">Отзывы</li>
          </ul>
        </nav>
      </div>
      <div class="main__information">
        <div class="main__information-left">
          <div class="information__text">
            <p class="information__text-first">
              Мы являемся авторизованным сервисным центром по ремонту техники
              Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с
              официальной гарантией производителя.
            </p>
            <p class="information__text-second">
              Мы успешно работаем с 1992 года и заслужили репутацию надежного
              партнера, что подтверждает большое количество постоянных клиентов.
              Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою
              очередь, советуют нас родным и близким.
            </p>
          </div>
          <div class="main__information-more">
            <img class="information-more__img" src="${expand}" />
            <p class="information-more__txt">Читать далее</p>
          </div>
        </div>
        <div class="main__information-right">
          <img class="photo-office" src="${PictureCopy}" alt="" />
        </div>
      </div>
      <div class="slider-wrapper">
        <h2 class="slider_text">РЕМОНТ ТЕХНИКИ РАЗЛИЧНЫХ БРЕНДОВ</h2>
        <div class="slider">
          <div class="slides swiper-wrapper">
            <div class="slide swiper-slide">
              <img src="${Lenovo}" alt="Lenovo" /><img
                src="${go}"
                alt="go"
              />
            </div>
            <div class="slide swiper-wrapper">
              <img src="${Samsung}" alt="Samsung" />
              <img src="${go}" alt="go" />
            </div>
            <div class="slide swiper-wrapper">
              <img src="${Apple}" alt="Apple" />
              <img src="${go}" alt="go" />
            </div>
            <div class="slide swiper-wrapper">
              <img src="${Viev}" alt="Viev" /><img
                src="${go}"
                alt="go"
              />
            </div>
            <div class="slide swiper-wrapper">
              <img src="${Bosh}" alt="Bosh" />
              <img src="${go}" alt="go" />
            </div>
            <div class="slide swiper-wrapper">
              <img src="${HP}" alt="HP" />
              <img src="${go}" alt="go" />
            </div>
            <div class="slide swiper-wrapper">
              <img src="${Acer}" alt="Acer" />
              <img src="${go}" alt="go" />
            </div>
            <div class="slide swiper-wrapper">
              <img src="${Sony}" alt="Sony" />
              <img src="${go}" alt="go" />
            </div>

            <div class="slide extra swiper-wrapper">
              <img src="${Lenovo}" alt="Lenovo" /><img
                src="${go}"
                alt="go"
              />
            </div>
            <div class="slide extra swiper-wrapper">
              <img src="${Samsung}" alt="Samsung" />
              <img src="${go}" alt="go" />
            </div>
            <div class="slide extra swiper-wrapper">
              <img src="${Apple}" alt="Apple" />
              <img src="${go}" alt="go" />
            </div>
          </div>
          <div class="show-more">
            <img
              class="show-more-img"
              src="${expand}"
              alt="expand"
            />
            <button class="show-more-btn">Показать все</button>
          </div>
          <div class="swiper__pagination"></div>
        </div>
      </div>`;
       
        const observer = new MutationObserver((mutations, obs) => {
    if (document.querySelector('.slider-wrapper')) {
      InitSwiper2('.slider-wrapper');
      obs.disconnect(); // Останавливаем наблюдение после инициализации
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  return pages;


}
  