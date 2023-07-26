const sections = document.querySelectorAll(".section");
const tabs = document.querySelectorAll(".main-menu__item");
const mainSection = document.querySelector(".main-section");

function selectTab(num) {
    mainSection.classList.remove("active-section");
    for(let i=1;i<tabs.length;i++){
        tabs[i].classList.remove("item__active");
        sections[i].classList.remove("active-section");
    }
    tabs[num].classList.add("item__active");
    sections[num].classList.add("active-section");
};
tabs.forEach((item,indexTab) => {
    item.addEventListener('click', () => {
        selectTab(indexTab);
    })
});

tabs[0].classList.remove("item__active");



// tab.addEventListener("click",() => {
//     tab.classList.add("item__active");
// });