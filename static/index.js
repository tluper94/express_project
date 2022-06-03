const signupForm = document.getElementById('signup');
const loginForm = document.getElementById('login');

const nameInput = document.getElementById('signup_name');
const emailInput = document.getElementById('signup_email');
const passwordInput = document.getElementById('signup_password');

const loginEmailInput = document.getElementById('login_email');
const loginPasswordInput = document.getElementById('login_password');

signupForm.addEventListener('submit', onSignupSubmit);
loginForm.addEventListener('submit', onLoginSubmit);

async function onLoginSubmit(e) {
  e.preventDefault();

  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  const loginData = {
    email,
    password,
  };

  const res = await fetch('/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  const data = await res.json();

  console.log(data);
}

async function onSignupSubmit(e) {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!name.length > 0 || !email.length > 0 || password.length < 7) {
    return;
  }

  const signupData = {
    name: name,
    email: email,
    password: password,
  };

  const res = await fetch('/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupData),
  });

  const data = await res.json();

  console.log(data);
}
