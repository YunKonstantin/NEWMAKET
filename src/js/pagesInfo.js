import highilight from "../assets/image/highilight.svg";
import Buttons from "../assets/image/Buttons.svg";
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
import PictureCopy from "../assets/image/Picture Copy.svg";
import { InitSwiper2 } from "./swiper.js";

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
              <div class="slide swiper-slide">
                <img src="${Samsung}" alt="Samsung" />
                <img src="${go}" alt="go" />
              </div>
              <div class="slide swiper-slide">
                <img src="${Apple}" alt="Apple" />
                <img src="${go}" alt="go" />
              </div>
              <div class="slide swiper-slide">
                <img src="${Viev}" alt="Viev" /><img
                  src="${go}"
                  alt="go"
                />
              </div>
              <div class="slide swiper-slide">
                <img src="${Bosh}" alt="Bosh" />
                <img src="${go}" alt="go" />
              </div>
              <div class="slide swiper-slide">
                <img src="${HP}" alt="HP" />
                <img src="${go}" alt="go" />
              </div>
              <div class="slide swiper-slide">
                <img src="${Acer}" alt="Acer" />
                <img src="${go}" alt="go" />
              </div>
              <div class="slide swiper-slide">
                <img src="${Sony}" alt="Sony" />
                <img src="${go}" alt="go" />
              </div>

              <div class="slide extra swiper-slide">
                <img src="${Lenovo}" alt="Lenovo" /><img
                  src="${go}"
                  alt="go"
                />
              </div>
              <div class="slide extra swiper-slide">
                <img src="${Samsung}" alt="Samsung" />
                <img src="${go}" alt="go" />
              </div>
              <div class="slide extra swiper-slide">
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
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="slider-wrapper">
            <h2 class="slider_text">РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ</h2>
            <div class="slider more_services_swiper-wrapper">
              <div class="slides more_services-all">
                <div class="slide more_services">
                  <h2 class="slide_text">Ремонт ноутбуков</h2>
                  <img src="${go}" alt="go" />
                </div>
                <div class="slide more_services">
                  <h2 class="slide_text">Ремонт планшетов</h2>
                  <img src="${go}" alt="go" />
                </div>
                <div class="slide more_services">
                  <h2 class="slide_text">Ремонт ПК</h2>
                  <img src="${go}" alt="go" />
                </div>
                <div class="slide more_services">
                  <h2 class="slide_text">Ремонт мониторов</h2>
                  <img src="${go}" alt="go" />
                </div>
              </div>
              <div class="show-more">
                <img class="show-more-img" src="${expand}" alt="expand" />
                <button class="show-more-btn">Показать все</button>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
            <h2 class="slider_text">ЦЕНЫ НА УСЛУГИ</h2>
    <div class="slides_price-head">
      <span class="slide_price_text">Ремонтные услуги</span>
      <span class="slide_price_text">Цена</span>
      <span class="slide_price_text">Срок</span>
    </div>
    <div class="slider-wrapper">
      <div class="slider wrapper-price">
        <div class="slides wrapper-price-slides">
          <div class="slide slides_price">
            <span class="slide_price_text">Ремонтные Услуги</span>
            <span class="price_text"
              >Тестирование с выдачей технического заключения</span
            >
            <span class="slide_price_text">Цена</span>
            <span class="price_text">Бесплатно</span>
            <span class="slide_price_text">Срок</span>
            <span class="price_text">30-120 мин</span>
            <button class="buy">
              <p class="button_text">Заказать</p>
              <img src="${Buttons}" class="button_img" />
            </button>
          </div>

          <div class="slide slides_price">
            <span class="slide_price_text">Ремонтные Услуги</span>
            <span class="price_text">Замена дисплея</span>
            <span class="slide_price_text">Цена</span>
            <span class="price_text">1000 ₽</span>
            <span class="slide_price_text">Срок</span>
            <span class="price_text">30-120 мин</span>
            <button class="buy">
              <p class="button_text">Заказать</p>
              <img src="${Buttons}" class="button_img" />
            </button>
          </div>
          <div class="slide slides_price">
            <span class="slide_price_text">Ремонтные Услуги</span>
            <span class="price_text">Замена полифонического динамика</span>
            <span class="slide_price_text">Цена</span>
            <span class="price_text">1000 ₽</span>
            <span class="slide_price_text">Срок</span>
            <span class="price_text">30-120 мин</span>
            <button class="buy">
              <p class="button_text">Заказать</p>
              <img src="${Buttons}" class="button_img" />
            </button>
          </div>
          <div class="slide slides_price">
            <span class="slide_price_text">Ремонтные Услуги</span>
            <span class="price_text"
              >Тестирование с выдачей технического заключения</span
            >
            <span class="slide_price_text">Цена</span>
            <span class="price_text">1000 ₽</span>
            <span class="slide_price_text">Срок</span>
            <span class="price_text">30-120 мин</span>
            <button class="buy">
              <p class="button_text">Заказать</p>
              <img src="${Buttons}" class="button_img" />
            </button>
          </div>
          <div class="slide slides_price">
            <span class="slide_price_text">Ремонтные Услуги</span>
            <span class="price_text">Замена программного обеспечения</span>
            <span class="slide_price_text">Цена</span>
            <span class="price_text">1000 ₽</span>
            <span class="slide_price_text">Срок</span>
            <span class="price_text">30-120 мин</span>
            <button class="buy">
              <p class="button_text">Заказать</p>
              <img src="${Buttons}" class="button_img" />
            </button>
          </div>
        </div>
      </div>
    </div>`;

  const observer = new MutationObserver((mutations, obs) => {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    if (sliderWrapper && sliderWrapper.querySelector("selector")) {
      // ← Проверяем оба элемента
      InitSwiper2(".slider");
      obs.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  return pages;
}
