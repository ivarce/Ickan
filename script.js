function checkPassword(correctPassword, redirectPage) {
  const password = document.getElementById("password").value;

  if (password === correctPassword) {
      window.location.href = redirectPage; // Redirect to the specified page
      return false; // Prevent form submission
  } else {
      alert("Fel!! Testa igen!");
      return false; // Prevent form submission
  }
}