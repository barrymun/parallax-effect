import "assets/css/main.css";
import "assets/scss/main.scss";

import { scrollOffset } from "utils/consts";

const handleScroll = () => {
  const destination = document.querySelector(".destination") as HTMLDivElement;
  destination.style.scale = `${1 + window.scrollY / scrollOffset}`;

  const foliageOne = document.querySelector(".foliage-1") as HTMLDivElement;
  foliageOne.style.left = `${-250 - window.scrollY / 10}px`;

  const foliageTwo = document.querySelector(".foliage-2") as HTMLDivElement;
  foliageTwo.style.top = `${-250 - window.scrollY / 10}px`;
  foliageTwo.style.transform = `rotate(${170 - window.scrollY / 100}deg)`;

  const foliageThree = document.querySelector(".foliage-3") as HTMLDivElement;
  foliageThree.style.top = `${-250 - window.scrollY / 10}px`;
  foliageThree.style.transform = `rotate(${210 + window.scrollY / 100}deg)`;

  const foliageFour = document.querySelector(".foliage-4") as HTMLDivElement;
  foliageFour.style.right = `${-250 - window.scrollY / 10}px`;
};

window.addEventListener("unload", () => {
  window.removeEventListener("scroll", handleScroll);
});

(async () => {
  window.addEventListener("scroll", handleScroll);
})();
