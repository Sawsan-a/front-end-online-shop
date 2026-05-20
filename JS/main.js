const menuBtn = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-menu");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");

function closeMenuBox() {
  sideMenu?.classList.remove("active");
  overlay?.classList.remove("active");
}

menuBtn?.addEventListener("click", () => {
  sideMenu?.classList.add("active");
  overlay?.classList.add("active");
});

closeMenu?.addEventListener("click", closeMenuBox);
overlay?.addEventListener("click", closeMenuBox);