// Select the form elements
const loginForm = document.querySelector('.login-form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginButton = document.querySelector('button[type="submit"]');
const forgotPasswordButton = document.querySelector('.custom-button');
const createAccountButton = document.querySelector('.custom-button-2');

// Add event listeners
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Call the login API here
  // For demonstration purposes, I'll just log the credentials to the console
  console.log(`Login attempt: ${username} - ${password}`);
});

forgotPasswordButton.addEventListener('click', () => {
  // Call the forgot password API here
  console.log('Forgot password button clicked');
});

createAccountButton.addEventListener('click', () => {
  // Redirect to sign up page
  location.href = 'sign up.html';
});