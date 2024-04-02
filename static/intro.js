/********* INTRO HEADING **********/

/* INITIALIZING 'headingText' VARIABLE*/
const headingText = document.querySelector("#headingText");

const headingTextLoad = () => {
    setTimeout(() => {
        headingText.textContent = "Engineer";
    }, 0);
    setTimeout(() => {
        headingText.textContent = "Developer";
    }, 2000);
};
headingTextLoad();
setInterval(headingTextLoad, 4000);