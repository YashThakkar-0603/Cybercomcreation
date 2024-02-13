// Function to fetch and display doctors on patient dashboard
function displayDoctors() {
    // Retrieve users from local storage
    var users = [];
    for (var i = 0; i < localStorage.length; i++) {
      var user = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (user && user.loginType === 'doctor') {
        users.push(user);
      }
    }
  
    // Display doctors in a table on the patient dashboard
    var tableBody = document.getElementById('doctorTableBody');
    tableBody.innerHTML = '';
  
    users.forEach(function(doctor) {
      var row = document.createElement('tr');
      var usernameCell = document.createElement('td');
      usernameCell.textContent = doctor.username;
      row.appendChild(usernameCell);
      // Add other cells as needed
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to display doctors when the page loads
  window.onload = function() {
    displayDoctors();
  };
  