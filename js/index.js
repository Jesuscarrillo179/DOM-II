//declarations

const disappearButton = document.querySelector("#disappearButton");
const headImg = document.querySelector(".intro img");
const textColor = document.querySelector("h1");
const headerText = document.querySelectorAll("h2");
const infoText = document.querySelectorAll("p");

console.log(headerText)

//event listeners

disappearButton.addEventListener("dblclick", goodbye);
document.addEventListener("mousemove", dcrsize);
document.addEventListener("keypress", incrsize);
textColor.addEventListener("mouseover", cblue);

//functions

function goodbye(){
    disappearButton.style.display = "none";
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
    