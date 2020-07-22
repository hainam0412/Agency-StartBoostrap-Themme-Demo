let portImages = document.querySelectorAll(".portfolio__container-item-img");
const modal = document.querySelector(".portfolio__container-modal");
const modalContent = document.querySelectorAll(".portfolio__modal-content");
const body = document.querySelector("body");
const closeButtons = document.querySelectorAll(".portfolio__modal-close");

let c = -1;

for (let i = 0; i < portImages.length; i++) {
  let img = portImages[i];

  img.addEventListener("click", openModal);
}

function openModal(e) {
  modal.style.display = "block";
  let img = e.target;
  body.classList.add("hide-scroll");
  modalContent[img.getAttribute("data-modal")].style.display = "block";
}

closeButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
    modal.style.display = "none";
    body.classList.remove("hide-scroll");
  });
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";

    let modalContent = modal.querySelectorAll(".portfolio__modal-content");

    modalContent.forEach((item) => {
      item.style.display = "none";
    });

    body.classList.remove("hide-scroll");
  }
});

const burgerButton = document.querySelector("#burger-button");

const navLinks = document.querySelector(".nav__links");

burgerButton.addEventListener("click", showNavLinks);

function showNavLinks() {
  if (!navLinks.classList.contains("nav__links-show")) {
    navLinks.classList.add("nav__links-show");
    burgerButton.classList.add("nav__burger-button-clicked");
  } else {
    navLinks.classList.remove("nav__links-show");
    burgerButton.classList.remove("nav__burger-button-clicked");
  }
}

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");

  nav.classList.add("nav-onScroll");

  if (pageYOffset == 0) {
    nav.classList.remove("nav-onScroll");
  }
});
