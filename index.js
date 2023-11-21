document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const userTableBody = document.querySelector('#userTable tbody');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const dobInput = document.getElementById('dob');
    const dobError = document.getElementById('dobError');

    // Load data from web storage
    const savedUserData = JSON.parse(localStorage.getItem('userData')) || [];

    // Initial population of the table only if there is existing user data
    if (savedUserData.length > 0) {
      populateTable(savedUserData);
    }

    // Save data to local storage when the page is closed
    window.addEventListener('unload', function () {
      localStorage.removeItem('userData');
    });

    registrationForm.addEventListener('submit', function (event) {
      // ... (unchanged form submission code) ...
      event.preventDefault();

      // Get form inputs
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const dob = document.getElementById('dob').value;
      const acceptTerms = document.getElementById('acceptTerms').checked;
      

      // Perform date of birth validation
      const dobDate = new Date(dob);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - dobDate.getFullYear();

      if (age < 18 || age > 55) {
        alert('Please enter a valid date of birth between 18 and 55 years.');
        return;
      }
     


      // Update the table
      const userData = { name, email, password, dob, acceptTerms };
      savedUserData.push(userData);
      populateTable(savedUserData);

      // Save data to web storage
      localStorage.setItem('userData', JSON.stringify(savedUserData));

      // Clear the form
      registrationForm.reset();
    });

    function populateTable(userDataArray) {
      userTableBody.innerHTML = ''; // Clear existing table rows

      userDataArray.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>${user.dob}</td>
          <td>${user.acceptTerms ? 'Yes' : 'No'}</td>
        `;
        userTableBody.appendChild(row);
      });
    }
  });
  /*
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const userTableBody = document.querySelector('#userTable tbody');

    // Load data from web storage
    const savedUserData = JSON.parse(localStorage.getItem('userData')) || [];
    populateTable(savedUserData);

    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form inputs
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const dob = document.getElementById('dob').value;
      const acceptTerms = document.getElementById('acceptTerms').checked;
      

      // Perform date of birth validation
      const dobDate = new Date(dob);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - dobDate.getFullYear();

      if (age < 18 || age > 55) {
        alert('Please enter a valid date of birth between 18 and 55 years.');
        return;
      }
     


      // Update the table
      const userData = { name, email, password, dob, acceptTerms };
      savedUserData.push(userData);
      populateTable(savedUserData);

      // Save data to web storage
      localStorage.setItem('userData', JSON.stringify(savedUserData));

      // Clear the form
      registrationForm.reset();
    });

    function populateTable(userDataArray) {
      userTableBody.innerHTML = ''; // Clear existing table rows

      userDataArray.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>${user.dob}</td>
          <td>${user.acceptTerms ? 'Yes' : 'No'}</td>
        `;
        userTableBody.appendChild(row);
      });
    }
  });*/