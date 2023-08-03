const openEdit = (e) => {
  e.preventDefault();
  let editForm = document.getElementById('edit-task-form');
  editForm.classList.remove('hidden');
};
const openNew = (e) => {
  e.preventDefault();

  let newForm = document.getElementById('new-task-form');
  newForm.classList.remove('hidden');
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
  button.addEventListener('click', openEdit);
});
let closeBoxButton = document.querySelectorAll('.btn-close');
closeBoxButton.forEach(function(button) {
  button.addEventListener('click', closeBox);
});

document
  .querySelector('.new-task')
  .addEventListener('click', openNew);