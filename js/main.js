const sections = document.querySelectorAll(".section");
const tabs = document.querySelectorAll(".main-menu__item");
const mainSection = document.querySelector(".main-section");
const mainScreen = document.querySelector(".telenkov");

function returnMainScreen() {
    closeAllSection();
    mainSection.classList.add("active-section");
};
function closeAllSection() {
    for(let i=0;i<tabs.length;i++){
        tabs[i].classList.remove("item__active");
        sections[i].classList.remove("active-section");
    }
}
function selectTab(num) {
    mainSection.classList.remove("active-section");
    tabs[num].classList.add("item__active");
    sections[num].classList.add("active-section");
};

tabs.forEach((item,indexTab) => {
    item.addEventListener('click', () => {
        closeAllSection();
        selectTab(indexTab);
    })
});
mainScreen.addEventListener("click", () => {
    returnMainScreen();
});