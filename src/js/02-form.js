const form = document.querySelector(".feedback-form");
const FORM_DATA = "feedback-form-data";

function saveForm(e) {
  e.preventDefault();
  const formInputs = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  const formList = JSON.stringify(formInputs);
  localStorage.setItem(FORM_DATA, formList);
}

form.addEventListener("submit", saveForm);
