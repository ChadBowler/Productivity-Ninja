const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
      //send the user to the homepage upon successful login, otherwise use alert for failed login
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
      //send the user to the homepage upon successful login, otherwise send an alert
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};
//event listeners set in try blocks to prevent errors if one of them isn't on the current page
try {
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
} catch (error) {
  console.log(error);
}

try {
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
} catch (error) {
  console.log(error);
}


