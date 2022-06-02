const form = document.getElementById('signup');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();
  const signupData = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
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
