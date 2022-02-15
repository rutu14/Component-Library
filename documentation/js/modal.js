const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");

for (const modalNumber of openModal) {
    modalNumber.addEventListener("click", function() {
        const modalOpenId = this.dataset.open; 
        document.getElementById(modalOpenId).classList.add("modal-dialog-visible");
  });
}

for (const modalNumber of closeModal) {
    modalNumber.addEventListener("click", function() {
        const modalCloseId = this.dataset.close; 
        document.getElementById(modalCloseId).classList.remove("modal-dialog-visible");
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal-backdrop.modal-dialog-visible")) {
    document.querySelector(".modal-backdrop.modal-dialog-visible").classList.remove("modal-dialog-visible");
  }
});