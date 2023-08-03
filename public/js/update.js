//front end logic for editing tasks
const editTaskForm = document.querySelector('.edit-task-button');

const taskUpdateHandler = async (e) => {
  e.preventDefault();
  //get elements from the page
  const id = editId;
  const editTaskName = document.querySelector('#edit-task-name').value.trim();
  const editUserName = document.querySelector('#edit-task-employee').value;
  const editDescription = document.querySelector('#edit-task-description').value;

  if (editTaskName && editDescription) {
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: editTaskName,
        user_id: editUserName,
        description: editDescription
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    //reload page and hide the form after editing the task, or send alert if it didn't work
    if (response.ok) {
      editTaskForm.classList.add('hidden');
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

try {
  editTaskForm.addEventListener('click', taskUpdateHandler);
} catch (error) {
  console.log(error);
}