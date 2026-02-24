const modalother = document.querySelector("#modalother");
const close = document.querySelector("#close");

const others = document.querySelector("#others");
const projectInfo = document.querySelectorAll(".projects__info-text");

others.addEventListener("click", () => {
  modalother.showModal();
});

close.addEventListener("click", () => {
  modalother.close();
});

projectInfo.forEach((elem) => {
  elem.addEventListener("click", () => {
    modalother.showModal();
  });
});

modalother.addEventListener("click", (event) => {
  if (event.target === modalother) {
    modalother.close();
  }
});
