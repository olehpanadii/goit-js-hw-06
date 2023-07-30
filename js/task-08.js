const form = document.querySelector(".login-form");

form.addEventListener("submit", handlarSubmit);

function handlarSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert(`Всі поля повинні бути заповненими`);
  } else {
    console.log({ Email: email.value, Password: password.value });
    form.reset();
  }
}
