const burger = document.querySelector("#burgerBtn");
const list = document.querySelector(".header__list");
const links = document.querySelectorAll(".header__link");

burger.addEventListener("click", () => {
  list.classList.toggle("active");
});

links.forEach((e) => {
  e.addEventListener("click", (e) => {
    burger.classList.remove("active");
  });
});
