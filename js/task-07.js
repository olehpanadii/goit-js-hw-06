const items = {
  fontSizeControl: document.querySelector("#font-size-control"),
  textElement: document.querySelector("#text"),
};
items.textElement.style.fontSize = `${items.fontSizeControl.value}px`;
items.fontSizeControl.addEventListener("input", changeTextEnt);

function changeTextEnt(evt) {
  items.textElement.style.fontSize = `${evt.currentTarget.value}px`;
}
