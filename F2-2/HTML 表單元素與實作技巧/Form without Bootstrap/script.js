const form = document.querySelector("form");
const submitButton = document.querySelector("#submit-btn");

submitButton.addEventListener("click", function onSubmitButtonClicked(event) {
  form.classList.add("was-validated");
});

form.addEventListener("submit", function onFormSubmit(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
});