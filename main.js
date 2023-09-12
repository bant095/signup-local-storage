//DOM
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Preventing the form from actually submitting

    // To Get values from my form fields
    const firstName = document.getElementById("first_name").value;
    const middleName = document.getElementById("middle_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const phoneNumber = document.getElementById("phone_number").value;

    // Using an bject to store the form data
    const formData = {
      firstName,
      middleName,
      lastName,
      email,
      password,
      confirmPassword,
      phoneNumber,
    };

    // I Store the form data in the localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Displaying a success message for my form
    alert("SUCCESS");
  });
});
