import "../scss/style.scss";
import "./burger.js";
import "./links.js";

const html = document.documentElement;
const switcher = document.querySelector("#toggletheme");

const getTheme = () => {
  const saved = localStorage.getItem("theme");

  if (saved) {
    return saved;
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      currTheme = e.matches ? "dark" : "light";
      setTheme(currTheme);
    }
  });

const setTheme = (theme) => {
  html.setAttribute("data-theme", theme);
  switcher.textContent = theme === "light" ? "🌙" : "☀️";
};

let currTheme = getTheme();
setTheme(currTheme);

switcher.addEventListener("click", () => {
  currTheme = currTheme === "light" ? "dark" : "light";
  setTheme(currTheme);
  localStorage.setItem("theme", currTheme);
  console.log("Changed to:", currTheme);
});

console.log("Script init...");
