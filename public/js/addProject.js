const projectFormHandler = async (e) => {
  e.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const status = false;

  if (name) {
    const response = await fetch('/api/projects', {
      method: 'POST',
      body: JSON.stringify({ name, status }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

try {
  document
    .querySelector('.add-project-form')
    .addEventListener('submit', projectFormHandler);
} catch (error) {
  console.log(error);
}
