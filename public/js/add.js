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

  const content = document.querySelector('#task-content').value;
  const projectId = document.querySelector('#project-id').value;

  if (content) {

    const response = await fetch(`/api/tasks/${projectId}`, {
      method: 'POST',
      body: JSON.stringify({ name: content }),
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
