//this variable is being used by update.js. We get it here when the user clicks on the edit button, and pass it on to know which task to edit
var editId;
//functions to open forms
const openEditForm = (e) => {
  e.preventDefault();
  //pulling the id of the task. The id reads 'edit-{{id}}' so we slice it to just get the number
  editId = e.target.id.slice(5);
  let editForm = document.getElementById('edit-task-form');
  editForm.classList.remove('hidden');
  return editId;
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
//add employee function. In the future, this could potentially be moved to a different script to make this script cleaner
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
      alert(response.statusText);
    }
  }
};
//functions to hide any elements that are popups for specific functions
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
//adding event listeners to multiple buttons at once
let openEditButtons = document.querySelectorAll('.open-edit');
openEditButtons.forEach(function(button) {
  button.addEventListener('click', openEditForm);
});
let closeBoxButton = document.querySelectorAll('.btn-close');
closeBoxButton.forEach(function(button) {
  button.addEventListener('click', closeBox);
});
//adding the employee to a project runs as soon as the select field changes
let employeeSelect = document.getElementById('employee-select');
employeeSelect.addEventListener('change', selectEmployee);

//function to disable remove option if a user has unfinished tasks
function disableRemoveUser() {
  let unfinishedTaskList = document.getElementById('unfinished-task-list').children;
  let projectEmployeeList = document.getElementById('project-employee-list');

  if (unfinishedTaskList.length !== 0) {
    for (let i = 0; i < projectEmployeeList.children.length; i++) {
      let employeeProjectName = projectEmployeeList.children[i].getAttribute('data-user');
      for (let j = 0; j < unfinishedTaskList.length; j++) {
        let employeeTaskName = unfinishedTaskList[j].getAttribute('data-employee');
        if (employeeProjectName === employeeTaskName) {
          projectEmployeeList.children[i].children[1].classList.add('hidden');
          break;
        } else {
          projectEmployeeList.children[i].children[1].classList.remove('hidden');
        }
      }
    }
  }
}

window.onload = disableRemoveUser;

document
  .querySelector('.new-task')
  .addEventListener('click', openTaskForm);
document
  .querySelector('.new-employee')
  .addEventListener('click', addEmployee);