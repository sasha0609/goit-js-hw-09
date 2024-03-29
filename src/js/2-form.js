const form = document.querySelector('.feedback-form');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
let infoFromInput = {};

function setFormValues(obj) {
  email.value = obj.email;
  message.value = obj.message;
}

const storedState = localStorage.getItem('feedback-form-state');
if (storedState) {
  setFormValues(JSON.parse(storedState));
}

function handleInput() {
  infoFromInput = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(infoFromInput));
}

email.addEventListener('input', handleInput);
message.addEventListener('input', handleInput);

function handleSubmit(event) {
  event.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Elements can not be empty');
    return;
  }
  console.log(infoFromInput);
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
form.addEventListener('submit', handleSubmit);
