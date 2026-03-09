const burgermenu = document.querySelector("#burger");
const navigation = document.querySelector("#nav");
const links = document.querySelectorAll(".header__link");

burgermenu.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

links.forEach((e) => {
  e.addEventListener("click", (e) => {
    navigation.classList.remove("active");
  });
});
