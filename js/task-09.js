const elements = {
  button: document.querySelector(".change-color"),
  colorSpan: document.querySelector(".color"),
  body: document.querySelector("body"),
};
elements.button.addEventListener("click", onClick);

function onClick() {
  let randomColorUp = getRandomHexColor();
  elements.body.style.backgroundColor = randomColorUp;
  elements.colorSpan.textContent = randomColorUp;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
