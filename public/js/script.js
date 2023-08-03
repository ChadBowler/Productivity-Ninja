const openEdit = (e) => {
//   e.preventDefault();
  console.log('anything');
  console.log(e.target);
  let editForm = document.getElementById('edit-task-form');
  editForm.classList.remove('hidden');
};


let openEditButtons = document.querySelectorAll('.open-edit');
openEditButtons.forEach(function(button) {
  button.addEventListener('click', openEdit);
});

