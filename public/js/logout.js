// Send a POST request to the API endpoint
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // If successful, redirect the browser to the '/' homepage
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

try {
  document.querySelector('#logout').addEventListener('click', logout);
} catch (error) {
  console.log(error);
}
