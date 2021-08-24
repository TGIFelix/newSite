const btn = document.querySelector(".nav__button");
const menu = document.querySelector(".nav__menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("translate-x-full");
});

menu.addEventListener("click", () => {
  menu.classList.toggle("translate-x-full");
});