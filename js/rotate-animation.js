const btn = document.querySelector(".btn-wrapper");

btn.addEventListener("mouseenter",rotateEnter);
btn.addEventListener("mouseleave",rotateLeave);

function rotateEnter () {
    btn.classList.add("btn-wrapper-active");
    btn.classList.remove("btn-wrapper");
}
function rotateLeave () {
    btn.classList.add("btn-wrapper");
    btn.classList.remove("btn-wrapper-active");
}