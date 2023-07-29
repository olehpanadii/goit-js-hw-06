const items = {
  fontSizeControl: document.querySelector("#font-size-control"),
  textElement: document.querySelector("#text"),
};

items.fontSizeControl.addEventListener("input", changeTextEnt);

function changeTextEnt() {
  const fontSizeValue = items.fontSizeControl.value;

  updateTextSize(fontSizeValue);
}
function updateTextSize(fontSize) {
  items.textElement.style.fontSize = `${fontSize}px`;
}
