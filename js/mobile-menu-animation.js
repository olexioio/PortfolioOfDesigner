const mobileMenu = document.getElementById("mobile-menu-module");
const mobileMenuButton = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("close-mobile-menu");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("mobile-menu-module-active");
});
mobileMenuClose.addEventListener("click", () => {
    setTimeout(()=>{mobileMenu.classList.remove("mobile-menu-module-active");},2.6);
});

// MOBILE TAB
const portfolioMobile = document.querySelector(".portfolio-mobile");
const careerMobile = document.querySelector(".career-mobile");
const requestMobile = document.querySelector(".request-mobile");
const mobileSections = document.querySelectorAll(".mobile-section");
// ITEMS
const mobileItem = document.querySelectorAll(".mobile-menu__item");
// main screen
const offer = document.querySelector(".offer-mob");
const offerBtn = document.querySelector(".btn-wrapper-mobile");
// 
const mainScreenLink = document.querySelector(".telenkov-mob");

mobileItem.forEach((item,indexTab) => {
    item.addEventListener("click", () => {
        closeAllMobileSection();
        selectMobileTab(indexTab);
        setTimeout(()=>{mobileMenu.classList.remove("mobile-menu-module-active");},2.6);
    })
});
function closeAllMobileSection() {
    offer.classList.remove("active-mobile-section");
    offerBtn.classList.remove("active-mobile-section");
    for(let i=0;i<mobileItem.length;i++){
        mobileItem[i].classList.remove("mobile-item__active");
        mobileSections[i].classList.remove("active-mobile-section");
    }
};
function selectMobileTab(num) {
    mobileItem[num].classList.add("mobile-item__active");
    mobileSections[num].classList.add("active-mobile-section");
};
mainScreenLink.addEventListener("click", () => {
    closeAllMobileSection();
    offer.classList.add("active-mobile-section");
    offerBtn.classList.add("active-mobile-section");
});