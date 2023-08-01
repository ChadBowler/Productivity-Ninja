//front end logic for updating tasks

const addTaskButton = document.querySelector('#add-task-button');
const editTaskForm = document.querySelector('.edit-task-form');
const completeTaskButton = document.querySelector('.complete-task');


function openTaskForm() {
  editTaskForm.classList.remove('hide');
}


const taskUpdateHandler = async (e) => {
  e.preventDefault();
  //get elements from the page
  const id = e.target.data-taskId;
  const newTaskName = document.querySelector('#new-task-name').value.trim();
  const newUserName = document.querySelector('#new-user-name').value;
  const newContent = document.querySelector('#new-task-content').value;

  if (newTaskName && newContent) {
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: newTaskName,
        user_id: newUserName,
        description: newContent
      }),
      headers: { 'Content-Type': 'application/json' },
    });
      //reload page after updating the task, or send alert if it didn't work
    if (response.ok) {
      editTaskForm.classList.add('hide');
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

const handleCompleteTask = async (e) => {
  e.preventDefault();
  const id = e.target.data-taskId;

  const response = await fetch(`/api/tasks/complete/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      status: true
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

try {
  addTaskButton.addEventListener('click', openTaskForm);
  editTaskForm.addEventListener('click', taskUpdateHandler);
  completeTaskButton.addEventListener('click', handleCompleteTask);
} catch (error) {
  console.log(error);
}