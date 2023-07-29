const textInput = document.querySelector("#validation-input[data-length='6']");

textInput.addEventListener("blur", checkPassword);

function checkPassword(evt) {
  if (evt.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}
console.log(textInput);
