const mobileMenu = document.getElementById("mobile-menu-module");
const mobileMenuButton = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("close-mobile-menu")

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("mobile-menu-module-active");
});
mobileMenuClose.addEventListener("click", () => {
    setTimeout(()=>{mobileMenu.classList.remove("mobile-menu-module-active");},0);
});