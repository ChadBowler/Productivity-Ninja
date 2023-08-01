//front end logic for deleting projects
const projectDeleteHandler = async (event) => {
  event.preventDefault();
  //getting the id of the current project
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (id) {
    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/users/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};
//front end logic for deleting tasks
const taskDeleteHandler = async (event) => {
  event.preventDefault();
  //getting the id of the selected task
  const id = document.querySelector('#task-id').value;

  if (id) {
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

try {
  document
    .querySelector('.delete-task')
    .addEventListener('click', taskDeleteHandler);
} catch (error) {
  console.log(error);
}

try {
  document
    .querySelector('.delete-project')
    .addEventListener('click', projectDeleteHandler);
} catch (error) {
  console.log(error);
}
