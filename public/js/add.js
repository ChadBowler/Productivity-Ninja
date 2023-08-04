//front end logic for adding data
//adding a new project
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
      alert(response.statusText);
    }
  }
};
//adding new tasks to a project
const taskFormHandler = async (e) => {
  e.preventDefault();
  const taskName = document.querySelector('#new-task-name').value.trim();
  const description = document
    .querySelector('#new-task-description')
    .value.trim();
  const projectId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const projId = projectId.substring(-1, 1);
  const userId = document.querySelector('#new-task-employee').value;
  if (taskName && description && userId) {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({
        name: taskName,
        description: description,
        status: false,
        user_id: userId,
        project_id: projId,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
      // document.location = response.redirectUrl;
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

// handler to mark the project as complete ✅✅
const markAsCompleteBtn = document.querySelector('.mark-as-complete');
if (markAsCompleteBtn) {
  markAsCompleteBtn.addEventListener('click', async function () {
    // get project id from current url
    const projectId = Number(window.location.href.slice(-1));
    // api call to set status to -- true
    const response = await fetch('/api/projects/markAsComplete', {
      method: 'PATCH',
      body: JSON.stringify({
        projectId,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await response.json();
    console.log(res);
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  });
}
