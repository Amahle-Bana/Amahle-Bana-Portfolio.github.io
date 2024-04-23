// INTIALIZING LOCAL STORAGE
let darkMode = localStorage.getItem('darkMode');

// UNIVERSAL SELECTOR
let universalStyling = document.getElementsByTagName('*');

// HEADER STYLING SELECTION
let nav_logo = document.querySelector('.nav_logo');
let navContainer = document.querySelector('.nav_items');
let navItems = document.querySelectorAll('.nav_link');
let dark_theme1 = document.querySelector('.dark-mode-toggle');
let dark_theme2 = document.querySelector('.dark-mode-toggle2');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// INTRO HEADING STYLING
let introHeading = document.querySelector('.intro_heading:not(headingText)');
let textHeading = document.querySelector('.headingText');

// 1ST SECTION STYLING
let section1left = document.querySelector('.section1_left');
let section1leftHeading = document.querySelector('.section1_heading');
let section1leftParagraph = document.querySelectorAll('.section1_paragraph');

let section1center = document.querySelector('.section1_center');
let linkedinPic = document.querySelector('.section1_icon1');
let githubPic = document.querySelector('.section1_icon2');


let section1right = document.querySelector('.section1_right');
let section1rightHeadings = document.querySelectorAll('.section1_right_h4');
let section1rightAddress = document.querySelectorAll('.section1_right_li');
let section1rightServices = document.querySelectorAll('.section1_right_p');

// 2ND SECTION STYLING
let section2_header = document.querySelector('.section2_heading');
let section2_Subheading = document.querySelector('.section2_subheading');

//3RD SECTION STYLING

// 4TH SECTION STYLING
let section4_header = document.querySelectorAll('.section4_header');
let section4_header2 = document.querySelector('.section4_header2');
let section4_paragraph = document.querySelectorAll('.section4_paragraph');

// 7TH SECTION STYLING
let section7_legend1 = document.querySelector('.section7_legend1');
let section7_legend2 = document.querySelector('.section7_legend2');
let section7_legend3 = document.querySelector('.section7_legend3');
let section7_alert = document.querySelector('.section7_alert');
let section7_alertnote = document.querySelector('.section7_alertnote');

// 8TH SECTION STYLING
let section8_icon1 = document.querySelector('.section8_icon1');
let section8_icon2 = document.querySelector('.section8_icon2');
let section8_icons = document.querySelector('.section8_icons');
let section8_iconlink = document.querySelectorAll('.section8_iconlink');
let section8_copyright = document.querySelector('.section8_paragraph');
let waves = document.querySelector('.wave');



// check if dark mode is enabled
// if it's enabled. turn it off
// if it's disabled, turn if off


const enableDarkMode = () => {
    /* UNIVERSAL DARK MODE */
    for (let i = 0; i < universalStyling.length; i++) {
        universalStyling[i].style.backgroundColor = "rgb(21, 43, 21)";}
    for (let i = 0; i < universalStyling.length; i++) {
        universalStyling[i].style.color = "rgb(93, 223, 42)";}
    
    // HEADING DARK MODE
    /* nav logo */
    nav_logo.style.color = "rgb(93, 223, 42)";
    /* nav links */
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.color = "rgb(93, 223, 42)";}
    /* dark mode icon */
    dark_theme1.setAttribute("src", "assets/icons/green_sun.png");
    dark_theme1.style.backgroundColor = "rgb(21, 43, 21)";
    dark_theme2.setAttribute("src", "assets/icons/green_fullsun.png");
    /* nav container */
    navContainer.style.backgroundColor = "rgb(21, 43, 21)";
    navContainer.style.boxShadow = "0px 10px 10px rgb(93, 223, 42)";

    // INTRO HEADING DARK MODE
    introHeading.style.color = "rgb(93, 223, 42)";
    introHeading.style.backgroundColor = 'rgb(21, 43, 21)';
    textHeading.style.backgroundColor = 'rgb(21, 43, 21)';

    // 1ST SECTION DARK MODE
    section1left.style.backgroundColor = 'rgb(21, 43, 21)';
    section1leftHeading.style.color = 'rgb(93, 223, 42)';
    for (let i = 0; i < section1leftParagraph.length; i++) {
        section1leftParagraph[i].style.color = "rgb(93, 223, 42)";}

    
    section1center.style.backgroundColor = 'rgb(21, 43, 21)';
    linkedinPic.setAttribute("src", "assets/icons/green_linkedin.png");
    linkedinPic.style.backgroundColor = "rgb(21, 43, 21)";
    githubPic.setAttribute("src", "assets/icons/green_github.png");
    githubPic.style.backgroundColor = "rgb(21, 43, 21)";



    section1right.style.backgroundColor = 'rgb(21, 43, 21)';
    for (let i = 0; i < section1rightHeadings.length; i++) {
        section1rightHeadings[i].style.color = "rgb(93, 223, 42)";}
    for (let i = 0; i < section1rightHeadings.length; i++) {
        section1rightHeadings[i].style.backgroundColor = "rgb(21, 43, 21)";}

    for (let i = 0; i < section1rightAddress.length; i++) {
        section1rightAddress[i].style.color = "rgb(93, 223, 42)";}
    for (let i = 0; i < section1rightAddress.length; i++) {
        section1rightAddress[i].style.backgroundColor = 'rgb(21, 43, 21)';}

    for (let i = 0; i < section1rightServices.length; i++) {
            section1rightServices[i].style.color = "rgb(93, 223, 42)";}
    for (let i = 0; i < section1rightServices.length; i++) {
            section1rightServices[i].style.backgroundColor = "rgb(21, 43, 21)";}
    
    // 2ND SECTION DARK MODE
    section2_header.style.backgroundColor = 'rgb(21, 43, 21)';
    section2_header.style.color = "rgb(93, 223, 42)";
    section2_Subheading.style.backgroundColor = 'rgb(21, 43, 21)';
    section2_Subheading.style.color = "rgb(93, 223, 42)";

    // 3RD SECTION DARK MODE

    // 4TH SECTION DARK MODE
    for (let i = 0; i < section4_header.length; i++) {
        section4_header[i].style.backgroundColor = "transparent";}

    section4_header2.style.backgroundColor = "transparent";

    
    for (let i = 0; i < section4_paragraph.length; i++) {
        section4_paragraph[i].style.backgroundColor = "transparent";}
    
    // 7TH SECTION DARK MODE
    section7_legend1.style.color = 'rgb(93, 223, 42)';
    section7_legend2.style.color = 'rgb(93, 223, 42)';
    section7_legend3.style.color = 'rgb(93, 223, 42)';
    section7_alert.style.backgroundColor = 'rgb(93, 223, 42)';
    section7_alertnote.style.color = 'rgb(21, 43, 21)';
    section7_alertnote.style.backgroundColor = 'transparent';


    // 8TH SECTION DARK MODE
    section8_icon1.setAttribute("src", "assets/icons/green_linkedin.png");
    section8_icon2.setAttribute("src", "assets/icons/green_github.png");
    waves.setAttribute("src", "assets/icons/green_wave.svg");
    // UPDATE DARK MODE TO LOCAL STORAGE
    localStorage.setItem('darkMode', 'enabled');
}






const disableDarkMode = () => {
    /* UNIVERSAL LIGHT MODE */
    for (let i = 0; i < universalStyling.length; i++) {
        universalStyling[i].style.backgroundColor = "white";}
    for (let i = 0; i < universalStyling.length; i++) {
        universalStyling[i].style.color = "grey";}

    // HEADER LIGHT MODE
    nav_logo.style.color = "rgb(93, 223, 42)";
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.color = "rgb(93, 223, 42)";}
    
    dark_theme1.setAttribute("src", "assets/icons/moon1.png");
    dark_theme1.style.backgroundColor = "white";
    dark_theme2.setAttribute("src", "assets/icons/moon2.png");

    navContainer.style.backgroundColor = "white";
    navContainer.style.boxShadow = "0px 10px 10px rgb(231, 231, 231)";

    // INTRO HEADING LIGHT MODE

    introHeading.style.color = "rgb(165, 165, 165)";
    section1leftHeading.style.color = 'rgb(165, 165, 165)';
    for (let i = 0; i < section1leftParagraph.length; i++) {
        section1leftParagraph[i].style.color = "rgb(93, 223, 42)";}

    introHeading.style.backgroundColor = 'white';
    textHeading.style.backgroundColor = 'white';
    textHeading.style.color = 'rgb(93, 223, 42)';
    
    // 1ST SECTION LIGHT MODE
    section1left.style.backgroundColor = 'white';
    section1leftHeading.style.color = 'rgb(165, 165, 165)';
    for (let i = 0; i < section1leftParagraph.length; i++) {
        section1leftParagraph[i].style.color = "black";}


    section1center.style.backgroundColor = 'white';
    linkedinPic.setAttribute("src", "assets/icons/linkedin.gif");
    linkedinPic.style.backgroundColor = "white";
    githubPic.setAttribute("src", "assets/icons/github.gif");
    githubPic.style.backgroundColor = "white";


    section1right.style.backgroundColor = 'white';
    for (let i = 0; i < section1rightHeadings.length; i++) {
        section1rightHeadings[i].style.color = "rgb(165, 165, 165)";}
    for (let i = 0; i < section1rightHeadings.length; i++) {
        section1rightHeadings[i].style.backgroundColor = "white";}

    for (let i = 0; i < section1rightAddress.length; i++) {
        section1rightAddress[i].style.color = "black";}
    for (let i = 0; i < section1rightAddress.length; i++) {
        section1rightAddress[i].style.backgroundColor = 'white';}

    for (let i = 0; i < section1rightServices.length; i++) {
            section1rightServices[i].style.color = "black";}
    for (let i = 0; i < section1rightServices.length; i++) {
        section1rightServices[i].style.backgroundColor = "white";}

    
    // 2ND SECTION LIGHT MODE
    section2_header.style.backgroundColor = 'white';
    section2_header.style.color = 'rgb(165, 165, 165)';
    section2_Subheading.style.backgroundColor = 'white';
    section2_Subheading.style.color = 'rgb(165, 165, 165)';

    // 3RD SECTION LIGHT MODE

    // 4TH SECTION LIGHT MODE
    for (let i = 0; i < section4_header.length; i++) {
        section4_header[i].style.backgroundColor = "transparent";}
    
    section4_header2.style.backgroundColor = "transparent";
    
    for (let i = 0; i < section4_paragraph.length; i++) {
        section4_paragraph[i].style.backgroundColor = "transparent";}
    
    // 7TH SECTION LIGHT MODE
    section7_legend1.style.color = 'rgb(93, 223, 42)';
    section7_legend2.style.color = 'rgb(93, 223, 42)';
    section7_legend3.style.color = 'rgb(93, 223, 42)';
    section7_alert.style.backgroundColor = 'rgb(93, 223, 42)';
    section7_alertnote.style.color = 'white';
    section7_alertnote.style.backgroundColor = 'transparent';
    
    // 8TH SECTION LIGHT MODE
    section8_icon1.setAttribute("src", "assets/icons/grey_linkedin_icon.png");
    section8_icon1.style.backgroundColor = "grey"
    section8_icon2.setAttribute("src", "assets/icons/grey_github_icon.png");
    section8_icon2.style.backgroundColor = "grey";
    section8_icons.style.backgroundColor = "grey";
    section8_copyright.style.backgroundColor = "grey";
    section8_copyright.style.color = "black";
    waves.setAttribute("src","assets/icons/grey_wave.svg");

    // UPDATE LIGHT MODE TO LOCAL STORAGE
    localStorage.setItem('darkMode', null);
}   


if (darkMode === 'enabled') {
    enableDarkMode();
}


darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log("working");
    } else {
        disableDarkMode();
        console.log("not working");
    }
})