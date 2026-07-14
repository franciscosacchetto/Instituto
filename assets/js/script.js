const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".main-nav a");
const details = document.querySelectorAll(".accordion details");
const contactForm = document.querySelector(".contact-form");

navToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Abrir menu");
  });
});

details.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    details.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.open = false;
      }
    });
  });
});

contactForm?.addEventListener("submit", () => {
  contactForm.dataset.submitted = "true";
});

const lightboxModal = document.querySelector(".lightbox-modal");
const lightboxImage = lightboxModal?.querySelector("img");
const lightboxClose = lightboxModal?.querySelector(".lightbox-close");
const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");

lightboxTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const src = trigger.getAttribute("data-lightbox-src");
    if (!src || !lightboxModal || !lightboxImage) return;
    lightboxImage.src = src;
    lightboxModal.classList.add("open");
    lightboxModal.setAttribute("aria-hidden", "false");
  });
});

const closeLightbox = () => {
  if (!lightboxModal) return;
  lightboxModal.classList.remove("open");
  lightboxModal.setAttribute("aria-hidden", "true");
  if (lightboxImage) {
    lightboxImage.src = "";
  }
};

lightboxClose?.addEventListener("click", closeLightbox);
lightboxModal?.addEventListener("click", (event) => {
  if (event.target === lightboxModal) {
    closeLightbox();
  }
});
