const buttons = {
  buttonRemove: document.querySelector(
    '#counter button[data-action="decrement"]'
  ),
  buttonAdd: document.querySelector('#counter button[data-action="increment"]'),
};

const elementValue = document.querySelector("#value");

buttons.buttonRemove.addEventListener("click", decrement);
buttons.buttonAdd.addEventListener("click", increment);

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  elementValue.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  elementValue.textContent = counterValue;
}
