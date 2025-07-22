const form = document.querySelector('#main-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const country = document.querySelector('#country');
const postal = document.querySelector('#postal');
const end = document.querySelector('#last');
const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let valid = true;

email.addEventListener('input', () => {
  email.setCustomValidity('');
  if (email.validity.valueMissing) {
    email.setCustomValidity('You need to enter an email address');
  }
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Incorrect email address. (abc@Example.com)');
  }
  email.reportValidity();
});

password.addEventListener('input', function () {
  password.setCustomValidity('');
  if (password.validity.valueMissing) {
    password.setCustomValidity('Please enter a strong password');
  }
  if (password.validity.tooShort) {
    password.setCustomValidity('Password is Too short. Minimum 8 characters');
  } else {
    if (!regex.test(password.value)) {
      password.setCustomValidity(
        'Password is Weak. Password must contain 8 characters and at least one number, one letter and one unique character'
      );
    }
  }
  password.reportValidity();
});
const postalRegex = {
  USA: /^\d{5}(?:[-\s]?\d{4})?$/,
  France: /^d{2}[ ]?d{3}$/,
  UK: /^[A-Z]{1,2}[0-9R][0-9A-Z]?\\s*[0-9][A-Z-[CIKMOV]]{2}/,
  Sweden: /^\\d{3}\\s*\\d{2}$/,
  Mexico: /^\\d{5}$/,
};
postal.addEventListener('input', () => {
  postal.setCustomValidity('');
  const selectedCountry = country.value;
  if (!postalRegex[selectedCountry].test(postal.value)) {
    postal.setCustomValidity('Wrong Postal Code');
  }

  postal.reportValidity();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    end.textContent="Yayyyyy!! You did it"
  } else {
    form.reportValidity();
  }
});
