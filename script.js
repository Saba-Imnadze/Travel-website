const header = document.querySelector("header");

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

menu.onclick = function () {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
window.onscroll = function () {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};
