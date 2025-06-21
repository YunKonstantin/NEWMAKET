import "swiper/css";
import "swiper/css/pagination";
import "../assets/scss/style.scss";
import { createHeader } from "./header.js";
import { createBurgerWrapper } from "./burgerWrapper.js";
import { createPages } from "./pagesInfo.js";
import { InitSwiper2 } from "./swiper.js";

const header = createHeader();
const burger = createBurgerWrapper();
const pages = createPages();
const root = document.getElementById("root");
const slides = document.querySelector(".slider");
const slidesContainer = document.querySelector(".slider-wrapper");

root.appendChild(header);
root.appendChild(burger);
root.appendChild(pages);
//root.appendChild();
//меняю html слайдов! меняю инициализацию СЛАЙДЕРА и init slider!!! ДАЛЬШЕ ПО ОШИБКАМИ И СТИЛЯМ!!!
