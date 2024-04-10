import "assets/css/main.css";
import "assets/scss/main.scss";

const handleScroll = () => {
  const node = document.querySelector(".destination") as HTMLDivElement;
  node.style.scale = `${0.5 + window.scrollY / 1000}`;
};

window.addEventListener("unload", () => {
  console.log("UNLOAD");
  window.removeEventListener("scroll", handleScroll);
});

(async () => {
  console.log("HERE");
  window.addEventListener("scroll", handleScroll);
})();
