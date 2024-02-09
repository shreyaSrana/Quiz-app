function login() {
    var rollNo = document.getElementById('loginRollNo').value;
    var password = document.getElementById('loginPassword').value;
  
    // Dummy check for credentials (replace with actual authentication)
    if (checkCredentials(rollNo, password)) {
      // Store session using local storage
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('rollNo', rollNo);
      
      // Redirect to dashboard page
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid credentials');
      return false;
    }
  }
  
  function signup() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var rollNo = document.getElementById('rollNo').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Basic validations
    if (name == '' || age == '' || gender == '' || rollNo == '' || password == '' || confirmPassword == '') {
      alert('Please fill in all fields');
      return false;
    }
  
    if (password != confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
  
    // Check if Roll No already exists (dummy check)
    if (checkDuplicateRollNo(rollNo)) {
      alert('User with the same Roll No already exists');
      return false;
    }
  
    // Submit data to endpoint (dummy action)
    submitData(name, age, gender, rollNo, password);
  
    // Prevent form from actually submitting (for demonstration)
    return false;
  }
  
  function checkCredentials(rollNo, password) {
    // Dummy function to check credentials
    // Replace this with actual authentication logic (e.g., AJAX call to backend)
    // For simplicity, hardcoded credentials are used here
    var validCredentials = {
      '123': 'password1',
      '456': 'password2',
      '789': 'password3'
    };
  
    return validCredentials[rollNo] === password;
  }
  
  function checkDuplicateRollNo(rollNo) {
    // Dummy function to check if Roll No already exists
    // This could be replaced with an actual AJAX call to a backend endpoint
    // to check for duplicate Roll No in a database
    // For simplicity, I'm just checking against a hardcoded array here
    var existingRollNos = ['123', '456', '789']; // Example existing Roll Nos
    return existingRollNos.includes(rollNo);
  }
  
  function submitData(name, age, gender, rollNo, password) {
    // Dummy function to submit data
    // This could be replaced with an actual AJAX call to a backend endpoint
    // to store the user data in a database
    console.log('Submitting data:', name, age, gender, rollNo, password);
    alert('Signup successful!');
  }
  