const bgInput = document.querySelector(".bg");
bgInput.oninput = () => {
    document.body.style.backgroundColor = bgInput.value
}

const fontInput = document.querySelector(".font-color");
fontInput.oninput = () => {
    document.body.style.color = fontInput.value
}

const buttonColorInput = document.querySelector(".button-color");
const buttons = document.querySelectorAll(".button");

buttonColorInput.addEventListener("input", () => {
  const newColor = buttonColorInput.value;
  buttons.forEach(button => {
    button.style.color = newColor;
    button.style.borderColor = newColor;
  });
});

const circleInput = document.querySelector(".circle-color");
const circle = document.querySelector(".image-div")
circleInput.oninput = () => {
    circle.style.backgroundColor = circleInput.value
}

var changeFontStyle = function (font) { 
    document.querySelector( 
        "h1").style.fontFamily 
                = font.value; 
} 