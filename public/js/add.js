//front end logic for adding data
const projectFormHandler = async (e) => {
  e.preventDefault();

  const name = document.querySelector('#project-name').value.trim();

  if (title) {

    const response = await fetch('/api/projects/', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Something went wrong!');
    }
  }
};

const taskFormHandler = async (e) => {
  e.preventDefault();

  const taskName = document.querySelector('#task-name').value.trim();
  const content = document.querySelector('#task-content').value.trim();
  const projectId = document.querySelector('#project-id').value;
  const userId = document.querySelector('#user-select').value;

  if (taskName && content && userId) {

    const response = await fetch(`/api/tasks/${projectId}`, {
      method: 'POST',
      body: JSON.stringify({
        name: taskName,
        description: content,
        status: false,
        user_id: userId,
        project_id: projectId
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Something went wrong!');
    }
  }
};
//event listeners set in try blocks to prevent errors when one of the forms is not on the page
try {
  document
    .querySelector('.add-task-form')
    .addEventListener('submit', taskFormHandler);
} catch (error) {
  console.log(error);
}

try {
  document
    .querySelector('.add-project-form')
    .addEventListener('submit', projectFormHandler);
} catch (error) {
  console.log(error);
}
