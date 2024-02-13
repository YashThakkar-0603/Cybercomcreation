$(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault();
  
      
      var username = $('#username').val();
      var password = $('#password').val();
      var loginType = $('#loginType').val();
  
      if (!username || !password || !loginType) {
        alert('Please fill in all fields');
        return;
      }
  
      
      var user = null;
      for (var i = 0; i < localStorage.length; i++) {
        var currentUser = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (currentUser && currentUser.username === username && currentUser.password === password && currentUser.loginType === loginType) {
          user = currentUser;
          break;
        }
      }
  
      if (!user) {
        alert('Invalid username, password, or login type');
        return;
      }
  
    
      if (loginType === 'doctor') {
        window.location.href = 'doctor_dashboard.html?username=' + encodeURIComponent(user.username);
      } else if (loginType === 'patient') {
        window.location.href = 'patient_dashboard.html?username=' + encodeURIComponent(user.username);
      }
    });
  });
  