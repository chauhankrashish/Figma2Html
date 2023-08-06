const createButton = document.getElementById('additionalDetails');
    const signupButton = document.getElementById('signupButton');
    const loginButton = document.getElementById('loginButton');
    const signupDetails = document.getElementById('signupDetails');
    const loginDetails = document.getElementById('loginDetails');
    const additionalDetails = document.getElementById('additionalDetails');

    createButton.addEventListener('click', function () {
      signupDetails.style.display = 'block';
      loginDetails.style.display = 'none';
      additionalDetails.style.display = 'none';
    });

    signupButton.addEventListener('click', function () {
      signupDetails.style.display = 'block';
      loginDetails.style.display = 'none';
      additionalDetails.style.display = 'none';
      signupButton.style.backgroundColor = '#ffffff';
      loginButton.style.backgroundColor = '#EDEDED';
    });

    loginButton.addEventListener('click', function () {
      signupDetails.style.display = 'none';
      loginDetails.style.display = 'block';
      additionalDetails.style.display = 'none';
      loginButton.style.backgroundColor = '#ffffff';
      signupButton.style.backgroundColor = '#EDEDED';
    });



    // ************** validation **************

    function validateForm() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
      
        // Validate email address
        if (!email.includes("@") || !email.includes(".")) {
          alert("Please enter a valid email address.");
          return false;
        }
      
        // Validate password
        if (password.length < 6) {
          alert("Please enter a password with at least 6 characters.");
          return false;
        }
      
        return true;
      }
      
      // Attach the validation function to the submit event of the form
      document.getElementById("loginForm").addEventListener("submit", validateForm);
      