document.getElementById("signup").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // ✅ Correct regex patterns
  const namePattern = /^[a-zA-Z0-9]{3,16}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*@)[A-Za-z\d@]{7,16}$/;
  const phonePattern = /^\+?[0-9\-\s]{10,15}$/;
  const bioPattern = /^[a-z_]{0,50}$/;

  // field references
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const phone = document.getElementById("phone");
  const bio = document.getElementById("bio");

  // reset errors
  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

  // validations
  if (!namePattern.test(first.value)) {
    valid = false;
    document.getElementById("err-first").textContent = "Invalid first name.";
  }
  if (!namePattern.test(last.value)) {
    valid = false;
    document.getElementById("err-last").textContent = "Invalid last name.";
  }
  if (!emailPattern.test(email.value)) {
    valid = false;
    document.getElementById("err-email").textContent = "Invalid email.";
  }
  if (!passwordPattern.test(password.value)) {
    valid = false;
    document.getElementById("err-password").textContent =
      "Password must have 7–16 chars, 1 uppercase, 1 number, and '@'.";
  }
  if (!phonePattern.test(phone.value)) {
    valid = false;
    document.getElementById("err-phone").textContent =
      "Enter valid phone with country code.";
  }
  if (!bioPattern.test(bio.value)) {
    valid = false;
    document.getElementById("err-bio").textContent =
      "Only lowercase letters and underscores allowed (max 50).";
  }

  // final message
  const msg = document.getElementById("form-message");
  msg.style.color = valid ? "green" : "red";
  msg.textContent = valid
    ? "Form submitted successfully!"
    : "Please correct the errors.";
});

// 👁️ Password toggle
const toggleBtn = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

toggleBtn.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  toggleBtn.textContent = isPassword ? "hide" : "show";
});
