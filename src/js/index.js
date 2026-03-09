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

switcher.addEventListener("click", () => {
  let currentTheme = switcher.textContent;

  if (currentTheme === "☀️") {
    switcher.textContent = "🌙";
    getHTML.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    switcher.textContent = "☀️";
    getHTML.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});
