const dialog = document.querySelector(".dialog");
const open = document.querySelectorAll(".open-modal");
const close = document.querySelector("#dclose");

const projects = {
  other: {
    title: "Soon",
  },

  cars: {
    title: "Сервис аренды премиальных авто",
    desc: "Верстка по макету из Figma",
    link: "https://snkio.github.io/car-rental",
  },

  survival: {
    title: "Текстовая RPG игра",
    desc: "Простенькая RPG игра суть которого была в практике DOM",
    link: "https://snkio.github.io/survival-game",
  },
};

open.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    const id = event.currentTarget.dataset.id;
    const data = projects[id];
    const title = document.querySelector("#dtitle");
    const desc = document.querySelector("#ddesc");
    const link = document.querySelector("#dlink");

    if (data.desc) {
      desc.innerHTML = data.desc;
      desc.style.display = "block";
    } else {
      desc.style.display = "none";
    }

    if (data.link) {
      link.href = data.link;
      link.style.display = "block";
    } else {
      link.style.display = "none";
    }

    title.innerHTML = data.title;
    desc.innerHTML = data.desc;
    link.href = data.link;

    dialog.showModal();
  });
});

close.addEventListener("click", () => {
  dialog.close();
});
