const departments = {
  Sales: ['Sales Manager', 'Account Manager'],
  Marketing: ['Creative Manager', 'Marketing Coordinator', 'Content Writer'],
  Technology: [
    'Project Manager',
    'Software Developer',
    'PHP programmer',
    'Front End',
    'Quality Assurance'
  ]
};

const departmentSelect = specializationSelectionForm['department'];
const vacancySelect = specializationSelectionForm['vacancy'];

Object.keys(departments).map(department => {
  const option = document.createElement('option');
  option.innerHTML = department;
  option.setAttribute('value', department);

  departmentSelect.appendChild(option);
});

departmentSelect.addEventListener('change', e => {
  departments[e.target.value].map(vacancy => {
    const option = document.createElement('option');
    option.innerHTML = vacancy;
    option.setAttribute('value', vacancy);

    vacancySelect.appendChild(option);
  });
  vacancySelect.disabled = false;
});
