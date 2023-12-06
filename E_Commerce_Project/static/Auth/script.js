document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.form.login');

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const email = document.querySelector('.input').value;
    const password = document.querySelector('.password').value;

    // Basic validation to ensure fields are not empty
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password.');
      return;
    }

    // Simulating form submission (Replace with your actual login logic)
    // Here, you might want to make an AJAX request or handle form submission logic
    // For example:
    // fetch('/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => {
    //   // Handle response based on successful or failed login
    // })
    // .catch(error => {
    //   // Handle any error that occurs during the request
    // });

    // Reset form fields after submission (Optional)
    document.querySelector('.input').value = '';
    document.querySelector('.password').value = '';
  }

  // Event listener for form submission
  loginForm.addEventListener('submit', handleFormSubmit);
});
