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

  const formData = new FormData();
  formData.append('json', JSON.stringify(signupData));
  const res = await fetch('/signup', {
    method: 'POST',
    body: formData,
  });

  console.log();
}
