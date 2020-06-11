class ModalWindow {
  constructor() {
    this.openModalButtons = document.querySelectorAll("[data-modal-target]");
    this.closeModalButtons = document.querySelectorAll("[data-close-button]");
    this.overlay = document.getElementById("overlay");
    this.dispNone = document.querySelectorAll(".dispNone");
  }

  openModal() {
    this.openModalButtons.forEach(button => {
      button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        this.openModalHelp(modal);
        this.removeSections();
      });
    });
  }

  closeModal() {
    this.closeModalButtons.forEach(button => {
      button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        this.closeModalHelp(modal);
        this.addSections();
      });
    });
  }

  openModalHelp(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  closeModalHelp(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  removeSections() {
    this.dispNone.forEach(function(elememt) {
      elememt.classList.add("dispNoneCls");
    });

    //  [].forEach.call(document.querySelectorAll(".dispNone"), function(el) {
    //    el.style.visibility = 'hidden';
    //  });
  }

  addSections() {
    this.dispNone.forEach(function(elememt) {
      elememt.classList.remove("dispNoneCls");
    });
    // [].forEach.call(document.querySelectorAll(".dispNone"), function(el) {
    //   el.style.visibility = 'visible';
    // });
  }
}

const modalWindow = new ModalWindow();

modalWindow.openModal();
modalWindow.closeModal();
