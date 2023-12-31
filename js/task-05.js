const elements = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

elements.input.addEventListener("input", getName);

function getName(evt) {
  elements.output.textContent = evt.currentTarget.value.trim();
  if (evt.currentTarget.value.trim() === "") {
    elements.output.textContent = "Anonymous";
  }
}
