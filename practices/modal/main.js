const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector(".close");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", function () {
  modal.style = "display: block";
});

closeModal.addEventListener("click", function (event) {
  console.log(event);
  modal.style = "display: none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style = "display: none";
  }
});
