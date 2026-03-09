import "../scss/style.scss";

const getHTML = document.documentElement;
const switcher = document.querySelector("#toggletheme");

const savedTheme = localStorage.getItem("theme");
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
