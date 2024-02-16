const passwordInput = document.querySelector("#passwordInput");
const passwordIcon = document.querySelector("#passwordIcon");

const togglePassword = (e) => { // Define a function to toggle the visibility of a password input
  const { length: passwordLength } = passwordInput.value; // Extract the length property of the password input value and assign it to passwordLength

  e.stopPropagation(); // Stop the event from propagating further
  if (passwordIcon.innerText === "visibility") { // Toggle the visibility icon and the type of the password input based on its current state
    passwordIcon.innerText = "visibility_off";
    passwordInput.type = "text";
  } else {
    passwordIcon.innerText = "visibility";
    passwordInput.type = "password";
  }

  if (passwordLength) { // If the password has a length, focus on the password input
    passwordInput.focus();
  }
};