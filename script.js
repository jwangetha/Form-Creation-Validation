// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Form and feedback div selection
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Submit handler
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent actual form submission

    // Input retrieval and trimming
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation variables
    let isValid = true;
    const messages = [];

    // Username validation: at least 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email validation: must include '@' and '.'
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Email must include an "@" and a ".".');
    } else {
      // Minor extra check: ensure there's at least one dot after the @
      const atIndex = email.indexOf('@');
      const lastDotIndex = email.lastIndexOf('.');
      if (lastDotIndex < atIndex + 2 || atIndex === 0 || lastDotIndex === email.length - 1) {
        isValid = false;
        messages.push('Please enter a valid email address (e.g. user@example.com).');
      }
    }

    // Password validation: at least 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Show feedbackDiv
    feedbackDiv.style.display = 'block';

    if (isValid) {
      // Success
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';       // success text color
      feedbackDiv.style.backgroundColor = '#dff0d8'; // optional: pleasant green background
      // Optionally reset the form
      form.reset();
    } else {
      // Errors
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';      // error text color
      feedbackDiv.style.backgroundColor = '#ffbaba'; // keep/restore error background
    }
  });
});
