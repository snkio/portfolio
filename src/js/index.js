import "../scss/style.scss";
import "./burger.js";

const getHTML = document.documentElement;
const switcher = document.querySelector("#toggletheme");

const infoDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
let savedTheme = localStorage.getItem("theme");

if (!savedTheme) {
  savedTheme = infoDarkMode.matches ? "dark" : "light";
}

if (savedTheme === "light") {
  switcher.textContent = "🌙";
  getHTML.setAttribute("data-theme", "light");
} else {
  switcher.textContent = "☀️";
  getHTML.setAttribute("data-theme", "dark");
}

function changeTheme() {
  const getImage = switcher.textContent === "☀️" ? "🌙" : "☀️";
  const themeNew = getImage === "🌙" ? "light" : "dark";

  switcher.textContent = getImage;

  getHTML.setAttribute("data-theme", themeNew);
  console.log("Theme changed:", themeNew);

  localStorage.setItem("theme", themeNew);
}

switcher.addEventListener("click", changeTheme);
