import "../assets/scss/_swiper.scss";
import "../assets/scss/style.scss";
import "../assets/scss/_burger.scss"
import "../assets/scss/_fonts.scss"
import "../assets/scss/_reset.scss"
import { createHeader } from "./header.js";
import { createBurgerWrapper } from "./burgerWrapper.js";
import { createPages } from "./pagesInfo.js";
import { InitSwiper2 } from "./swiper.js";
import { initShowMore } from "./buttons.js";
import { initBurgerMenu } from "./burgerButtonOpenClose.js";
import { createFooter } from "./footer.js";

const header = createHeader();
const burger = createBurgerWrapper();
const pages = createPages();
const root = document.getElementById("root");
const slides = document.querySelector(".slider");
const slidesContainer = document.querySelector(".slider-wrapper");
const footer = createFooter();

root.appendChild(header);
root.appendChild(burger);
root.appendChild(pages);
root.appendChild(footer);

initShowMore();
initBurgerMenu();
