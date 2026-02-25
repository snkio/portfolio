const burger = document.querySelector("#burgerBtn");
const list = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  list.classList.toggle("active");
});

// list.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     burger.classList.remove("active");
//   });
// });
