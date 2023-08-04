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
      document.location.replace('/api/users');
    } else {
      alert(response.statusText);
    }
  }
};

try {
  document
    .querySelector('.delete-project')
    .addEventListener('click', projectDeleteHandler);
} catch (error) {
  console.log(error);
}
//deleted the delete task function because we're now using method override and doing it all on the back end.
