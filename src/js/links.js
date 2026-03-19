const links = document.querySelectorAll(".header__link");

links.forEach((e) => {
  e.addEventListener("click", () => {
    const activeLink = document.querySelector(".header__link.act");

    if (activeLink) {
      activeLink.classList.remove("act");
    }

    e.classList.add("act");
  });
});
