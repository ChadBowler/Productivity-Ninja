const openEditForm = (e) => {
  e.preventDefault();
  let editForm = document.getElementById('edit-task-form');
  editForm.classList.remove('hidden');
};
const openTaskForm = (e) => {
  e.preventDefault();

  let newForm = document.getElementById('new-task-form');
  newForm.classList.remove('hidden');
};
const addEmployee = (e) => {
  e.preventDefault();

  let employeeSelectForm = document.getElementById('employee-select-form');
  employeeSelectForm.classList.remove('hidden');
};
const addEmployeeToProject = async () => {
  const projectId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const userName = document.querySelector('#employee-select').value;

  if (userName) {
    const response = await fetch('/api/users/add-to-project', {
      method: 'PUT',
      body: JSON.stringify({
        project_id: projectId,
        username: userName,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    //reload page after updating the task, or send alert if it didn't work
    if (response.ok) {
      document.location.reload();
    } else {
      console.log(response);
      alert(response.statusText);
    }
  }
};
const selectEmployee = (e) => {
  e.preventDefault();
  let employeeSelectForm = document.getElementById('employee-select-form');
  employeeSelectForm.classList.add('hidden');
  addEmployeeToProject();
};
const closeBox = (e) => {
  e.preventDefault();
  let editForm = document.getElementById('edit-task-form');
  editForm.classList.add('hidden');

  let newForm = document.getElementById('new-task-form');
  newForm.classList.add('hidden');
};

let openEditButtons = document.querySelectorAll('.open-edit');
openEditButtons.forEach(function(button) {
  button.addEventListener('click', openEditForm);
});
let closeBoxButton = document.querySelectorAll('.btn-close');
closeBoxButton.forEach(function(button) {
  button.addEventListener('click', closeBox);
});
let employeeSelect = document.getElementById('employee-select');
employeeSelect.addEventListener('change', selectEmployee);

document
  .querySelector('.new-task')
  .addEventListener('click', openTaskForm);
document
  .querySelector('.new-employee')
  .addEventListener('click', addEmployee);