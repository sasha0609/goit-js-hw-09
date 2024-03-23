const form = document.querySelector('.feedback-form');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
let infoFromInput = {};

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  infoFromInput = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  console.log(infoFromInput);
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
email.addEventListener('focus', () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(infoFromInput));
});
message.addEventListener('focus', () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(infoFromInput));
});

// localStorage.setItem('feedback-form-state', JSON.stringify(infoFromInput));
// console.log(infoFromInput);
//   if (email.focus() || message.focus()) {
//     localStorage.setItem('feedback-form-state', JSON.stringify(infoFromInput));
//   }
// function handleSubmit(event) {
//   event.preventDefault();
//   //   if (!email.value === '' || !message.value === '') {
//   infoFromInput = {
//     email: email.value.trim(),
//     message: message.value.trim(),
//   };
//   localStorage.setItem('feedback-form-state', JSON.stringify(infoFromInput));
//   console.log(infoFromInput);
//   form.reset();
//   //   localStorage.removeItem('feedback-form-state');
// }
// // }

// // localStorage.setItem('feedback-form-state', JSON.stringify(infoFromInput));
// // console.log(infoFromInput);
