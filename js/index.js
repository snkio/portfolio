const test = document.querySelector(".main__others");
const modal = document.querySelector(".main__modal");
const close = document.querySelector("#close");

const soon = document.querySelectorAll(".projects__info-text");

test.addEventListener("click", () => {
  modal.showModal();
});

soon.forEach((item) => {
  item.addEventListener("click", () => {
    modal.showModal();
  });
});

close.addEventListener("click", () => {
  modal.close();
});
