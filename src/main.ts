import "assets/css/main.css";
import "assets/scss/main.scss";

const handleScroll = () => {
  const node = document.querySelector(".destination") as HTMLDivElement | null;
  if (!node) {
    return;
  }
  node.style.scale = `${0.5 + window.scrollY / 4000}`;
};

window.addEventListener("unload", () => {
  window.removeEventListener("scroll", handleScroll);
});

(async () => {
  window.addEventListener("scroll", handleScroll);
})();
