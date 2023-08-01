//front end logic for updating tasks

const addTaskButton = document.querySelector('#add-task-button');
const updateTaskForm = document.querySelector('.update-task-form');


function openTaskForm() {
  updateTaskForm.classList.remove('hide');
}


const taskUpdateHandler = async (event) => {
  event.preventDefault();
  //get elements from the page
  const id = document.querySelector('#task-id').value;
  const taskName = document.querySelector('#task-name').value.trim();
  const userName = document.querySelector('#user-name').value;
  const content = document.querySelector('#task-content').value;

  if (taskName && content) {
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: taskName,
        user_id: userName,
        description: content
      }),
      headers: { 'Content-Type': 'application/json' },
    });
      //reload page after updating the task, or send alert if it didn't work
    if (response.ok) {
      updateTaskForm.classList.add('hide');
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

try {
  addTaskButton.addEventListener('click', openTaskForm);
  updateTaskForm.addEventListener('click', taskUpdateHandler);
} catch (error) {
  console.log(error);
}