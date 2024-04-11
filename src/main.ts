import "assets/css/main.css";
import "assets/scss/main.scss";

const handleScroll = () => {
  const node = document.querySelector(".destination") as HTMLDivElement | null;
  if (!node) {
    return;
  }
  node.style.scale = `${0.75 + window.scrollY / 8000}`;
};

const generateFoliage = () => {
  const node = document.querySelector(".forest") as HTMLDivElement | null;
  if (!node) {
    return;
  }
  const count = 10;
  for (let i = 0; i < count; i++) {
    const leaf = document.createElement("div");
    leaf.className = `foliage`;
    leaf.style.top = `calc(50% - ${250 + i * 100}px)`;
    // leaf.style.left += 0;
    leaf.style.transform = `rotate(${90 + i * 10}deg)`;
    node.appendChild(leaf);
  }
};

window.addEventListener("unload", () => {
  window.removeEventListener("scroll", handleScroll);
});

(async () => {
  window.addEventListener("scroll", handleScroll);
  generateFoliage();
})();
