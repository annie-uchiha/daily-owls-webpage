function greetUser() {
  const name = document.getElementById("nameInput").value;
  document.getElementById(
    "greeting"
  ).textContent = `Hello, ${name}! My name is Tom Riddle`;
}
