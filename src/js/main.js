import "swiper/css";
import "swiper/css/pagination";
import "../assets/scss/style.scss";
import { createHeader } from "./header.js";
import { createBurgerWrapper } from "./burgerWrapper.js";
import { createPages } from "./pagesInfo.js";
import { InitSwiper2 } from "./swiper.js";
import { initShowMore } from "./buttons.js";
import { initBurgerMenu } from "./burgerButtonOpenClose";

const header = createHeader();
const burger = createBurgerWrapper();
const pages = createPages();
const root = document.getElementById("root");
const slides = document.querySelector(".slider");
const slidesContainer = document.querySelector(".slider-wrapper");

root.appendChild(header);
root.appendChild(burger);
root.appendChild(pages);

initShowMore();
initBurgerMenu();
