const registrationForm = document.forms['registration-form'];
const specializationSelectionForm =
  document.forms['specialization-selection-form'];
const infoCheckContainer = document.getElementById('info-check-container');
const thankYouContainer = document.getElementById('thank-you-container');
const reconectBtn = document.getElementById('reconect');
registrationForm.classList.add('visible');
localStorage.clear();

registrationForm.addEventListener(
  'submit',
  e => {
    e.preventDefault();
    registrationForm.classList.remove('visible');
    specializationSelectionForm.classList.add('visible');
  },
  false
);

specializationSelectionForm.addEventListener(
  'submit',
  e => {
    e.preventDefault();
    specializationSelectionForm.classList.remove('visible');
    infoCheckContainer.classList.add('visible');
  },
  false
);

function reconect() {
  infoCheckContainer.addEventListener(
    'click',
    e => {
      registrationForm.classList.add('visible');
      infoCheckContainer.classList.remove('visible');
      thankYouContainer.classList.remove('visible');
    },
    false
  );
}

function showData() {
  document.getElementById('name').innerHTML = document.getElementById(
    'first_name'
  ).value;
  document.getElementById('login').innerHTML = document.getElementById(
    'login_value'
  ).value;
  document.getElementById('email').innerHTML = document.getElementById(
    'email_value'
  ).value;

  document.getElementById('company_name').innerHTML = document.getElementById(
    'company_value'
  ).value;

  document.getElementById('department').innerHTML = departmentSelect.value;
  document.getElementById('vacancy').innerHTML = vacancySelect.value;
}

function saveDataInLocalStorage() {
  let firstNameStorage = document.getElementById('first_name').value;
  let loginStorage = document.getElementById('login_value').value;
  let emailStorage = document.getElementById('email_value').value;
  let companyStorage = document.getElementById('company_value').value;
  let departmentStorage = departmentSelect.value;
  let vacancyStorage = vacancySelect.value;

  infoCheckContainer.addEventListener(
    'click',
    e => {
      registrationForm.classList.remove('visible');
      infoCheckContainer.classList.remove('visible');
      thankYouContainer.classList.add('visible');

      localStorage.setItem('firstNameStorage', firstNameStorage);
      localStorage.setItem('loginStorage', loginStorage);
      localStorage.setItem('emailStorage', emailStorage);
      localStorage.setItem('companyStorage', companyStorage);
      localStorage.setItem('departmentStorage', departmentStorage);
      localStorage.setItem('vacancyStorage', vacancyStorage);

      registrationForm.reset();
      thankYouContainer.classList.add('visible');
    },
    false
  );
}
