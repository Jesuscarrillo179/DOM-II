//declarations

const disappearButton = document.querySelector("#disappearButton");
const headImg = document.querySelector(".intro img");
const textColor = document.querySelector("h1");
const headerText = document.querySelectorAll("h2");
const infoText = document.querySelectorAll("p");
const navItems = document.querySelectorAll("#nav-link");
const tourImages = document.querySelectorAll(".img-content img");
const largeimg = document.querySelector(".content-destination img");


//event listeners

disappearButton.addEventListener("dblclick", goodbye);
document.addEventListener("mousemove", dcrsize);
document.addEventListener("keypress", incrsize);
textColor.addEventListener("mouseover", cblue);
largeimg.addEventListener("scroll", () => {largeimg.style.width = "100%"});

//functions

function goodbye(){
    disappearButton.style.display = "none";
    disappearButton.stopPropagation();
};

function dcrsize(){
    var imgSize = headImg.width;
    headImg.style.width = (imgSize - 1) + "px";
};

function cblue(){
    textColor.style.color = "cyan";
};

function incrsize(){
    var imgSize = headImg.width;
    headImg.style.width = (imgSize + 25) + "px";
};

for (let i = 0; i < headerText.length; i++){
    headerText[i].addEventListener("mouseenter", () => {headerText[i].style.color = "cyan";})
    ;};

for (let i = 0; i < infoText.length; i++){
    infoText[i].addEventListener("mouseleave", () => {infoText[i].style.color = "orange";})
    ;};

for (let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener("click", () => {navItems[i].preventDefault();})
   ;};

for (let i = 0; i < tourImages.length; i++){
    tourImages[i].addEventListener("mousedown", () => {tourImages[i].style.display = "none";})
    ;};

for (let i = 0; i < tourImages.length; i++){
    tourImages[i].addEventListener("keydown", () => {tourImages[i].style.display = "inline";})
    ;};
