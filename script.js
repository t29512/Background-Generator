
var css = document.getElementsByTagName("h3")[0];
var color1 = document.getElementsByTagName("input")[0];
var color2 = document.getElementsByTagName("input")[1];
var body = document.getElementsByTagName("body")[0];
var button = document.querySelector("button");

/* Change Text Color Back to Black */

function defaultTextColor() {
    body.style.color =  "rgba(0, 0, 0,.5)";
}

function setGradient() {
    defaultTextColor();
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

/* Random Color Button */

button.addEventListener("click", function(){
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    defaultTextColor();
    color1.value = "#" + randomColor1;
    color2.value = "#" + randomColor2;
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
    if (color1.value === "#000000" || color2.value === "#000000") {
        body.style.color =  "rgba(255, 255, 255,.5)";
    }
})