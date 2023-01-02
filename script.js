var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

color1.value = "#ff0000";
color2.value = "#ffff00";
css.textContent = "linear-gradient(to right, #ff0000, #ffff00);";

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomGradient(){
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
button.addEventListener("click", randomGradient)