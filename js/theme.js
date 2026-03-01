const themeInfo = document.querySelector("#theme");
const logo = document.querySelector("#logo");
const savedTheme = localStorage.getItem("theme");

const telegram = document.querySelector("#tg");
const github = document.querySelector("#github");

themeInfo.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  const currentIcon = currentTheme === "dark" ? "🌙" : "🔅";
  document.documentElement.setAttribute("data-theme", newTheme);

  if (newTheme === "dark") {
    logo.style.filter = "invert(1)";
    telegram.style.filter = "invert(1)";
    github.style.filter = "invert(1)";
  } else if (newTheme === "light") {
    logo.style.filter = "none";
    telegram.style.filter = "none";
    github.style.filter = "none";
    github.style.display = "block";
  }

  themeInfo.textContent = currentIcon;
  localStorage.setItem("theme", newTheme);
});

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

if (savedTheme === "dark") {
  logo.style.filter = "invert(1)";
  telegram.style.filter = "invert(1)";
  github.style.filter = "invert(1)";
  themeInfo.textContent = "🔅";
} else {
  logo.style.filter = "none";
  telegram.style.filter = "none";
  github.style.filter = "none";
  themeInfo.textContent = "🌙";
}
