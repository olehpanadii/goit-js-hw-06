const elements = {
  button: document.querySelector(".change-color"),
  colorSpan: document.querySelector(".color"),
  body: document.querySelector("body"),
};
elements.button.addEventListener("click", onClick);

function onClick() {
  elements.body.style.backgroundColor = getRandomHexColor();
  elements.colorSpan.textContent = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
