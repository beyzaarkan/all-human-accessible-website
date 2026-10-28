const menuButton = document.querySelector(".menu-icon");
const mobileNav = document.querySelector("#mobile-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigatiemenu" : "Sluit navigatiemenu");

  mobileNav.hidden = isOpen;
});