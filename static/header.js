/********  HEADER DYNAMICS ********/

/* GETTING ELEMENT ID */
header = document.getElementById("header");
/* INITIALIZING 'lastScrollTop' VARIABLE */
let lastScrollY = window.scrollY;
/* SCROLL LISTENER EVENT */
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        header.style.top = "-100px";
    } else {
        header.style.top= "0px";
    }
    lastScrollY = window.scrollY
});