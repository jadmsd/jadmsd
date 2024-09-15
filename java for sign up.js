// Select the form elements
const signUpForm = document.querySelector('.login-form');
const nameInput = document.querySelector('input[type="text"][placeholder="name"]');
const emailInput = document.querySelector('input[type="email"]');
const usernameInput = document.querySelector('input[type="text"][placeholder="Username"]');
const passwordInput = document.querySelector('input[type="password"][placeholder="Password"]');
const confirmPasswordInput = document.querySelector('input[type="password"][placeholder="Confirm  Password"]');
const signUpButton = document.querySelector('button[type="submit"]');
const goBackButton = document.querySelector('.custom-button-2');

// Add event listeners
signUpButton.addEventListener('click', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Call the sign up API here
  // For demonstration purposes, I'll just log the registration data to the console
  console.log(`Sign up attempt: ${name} - ${email} - ${username} - ${password} - ${confirmPassword}`);
});

goBackButton.addEventListener('click', () => {
  // Redirect to login page
  location.href = 'login.html';
});