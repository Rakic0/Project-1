const openMenu = document.querySelector(".menu");
const bodyEl = document.querySelector("body");

const openMenuFunc = function () {
  document.querySelector(".menu-open").classList.toggle("open");
};

openMenu.addEventListener("click", openMenuFunc);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    document.querySelector(".menu-open").classList.remove("open");
  }
});
