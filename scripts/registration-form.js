const registrationFormInputs = registrationForm.querySelectorAll('input');

registrationForm.addEventListener(
  'submit',
  e => {
    e.preventDefault();
    const password = registrationForm['password'];
    const confirmPassword = registrationForm['confirm-password'];

    if (password.value !== confirmPassword.value) {
      confirmPassword.parentNode.classList.add('field-invalid');
    }
  },
  false
);

registrationFormInputs.forEach(input => {
  const setFieldValid = () => {
    input.parentNode.classList.remove('field-invalid');
  };
  input.addEventListener('focus', setFieldValid, false);
  input.addEventListener('input', setFieldValid, false);

  input.addEventListener(
    'invalid',
    e => {
      e.preventDefault();
      input.parentNode.classList.add('field-invalid');
    },
    false
  );
});
