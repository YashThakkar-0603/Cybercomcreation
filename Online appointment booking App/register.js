document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Generate random ID
  var id = Math.floor(Math.random() * 1000000); // Generate random number as ID
  
  // Get form data
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var loginType = document.getElementById('loginType').value;
  var username = document.getElementById('username').value;

  // Simple form validation
  if (!email || !password || !confirmPassword || !loginType || !username) {
    alert('Please fill in all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Retrieve users array from local storage
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the username or email already exists
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username || users[i].email === email) {
      alert('Username or email already exists');
      return;
    }
  }

  // Create user object
  var user = {
    id: id,
    email: email,
    password: password,
    loginType: loginType,
    username: username
  };

  // Push new user to the array
  users.push(user);

  // Store updated user data array in local storage
  localStorage.setItem('users', JSON.stringify(users));

  // Show registration successful message
  alert('Registration successful');

  // Redirect to login page after 1 second
  setTimeout(function() {
    window.location.href = 'login.html';
  }, 1000);
});
