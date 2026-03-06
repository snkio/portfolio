const theme = document.querySelector("#theme");
const htmlType = document.documentElement;
const defTheme = window.matchMedia("(prefers-color-scheme: dark)");
const saved = localStorage.getItem("theme");

const initialTheme = saved || (defTheme.matches ? "dark" : "light");

htmlType.dataset.theme = initialTheme;

const getIconTheme = initialTheme === "dark" ? "☀️" : "🌙";
theme.textContent = getIconTheme;

theme.addEventListener("click", () => {
  let logo = document.querySelector("#logo");
  let tg = document.querySelector("#tg");

  let currentTheme = htmlType.dataset.theme;
  let newTheme = currentTheme === "dark" ? "light" : "dark";
  let newIcon = newTheme === "dark" ? "☀️" : "🌙";
  theme.textContent = newIcon;

  htmlType.dataset.theme = newTheme;

  localStorage.setItem("theme", newTheme);

  console.log(newIcon);
  console.log(newTheme);
});
