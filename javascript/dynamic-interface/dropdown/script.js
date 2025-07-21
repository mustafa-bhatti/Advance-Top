const mail = document.getElementById('mail');

mail.addEventListener('input', (event) => {
  if (mail.validity.typeMismatch) {
    mail.setCustomValidity('GIVEEE MEEE ANNN EMAILLLLL!!');
  } else {
    mail.setCustomValidity('');
  }
});
