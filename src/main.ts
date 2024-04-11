import "assets/css/main.css";
import "assets/scss/main.scss";

import { scrollOffset } from "utils/consts";

const handleScroll = () => {
  const destination = document.querySelector(".destination") as HTMLDivElement;
  destination.style.scale = `${1 + window.scrollY / scrollOffset}`;

  const f1 = document.querySelector(".foliage-1") as HTMLDivElement;
  f1.style.left = `${-250 - window.scrollY / 10}px`;

  const f2 = document.querySelector(".foliage-2") as HTMLDivElement;
  f2.style.top = `${-250 - window.scrollY / 10}px`;
  f2.style.transform = `rotate(${170 - window.scrollY / 100}deg)`;

  const f3 = document.querySelector(".foliage-3") as HTMLDivElement;
  f3.style.top = `${-250 - window.scrollY / 10}px`;
  f3.style.transform = `rotate(${210 + window.scrollY / 100}deg)`;

  const f4 = document.querySelector(".foliage-4") as HTMLDivElement;
  f4.style.right = `${-250 - window.scrollY / 10}px`;
};

window.addEventListener("unload", () => {
  window.removeEventListener("scroll", handleScroll);
});

(async () => {
  window.addEventListener("scroll", handleScroll);
})();
