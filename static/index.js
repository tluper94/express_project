const form = document.getElementById('signup');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
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
