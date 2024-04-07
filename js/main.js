/*function greetUser() {
  const name = document.getElementById("nameInput").value;
  document.getElementById(
    "greeting"
  ).textContent = `Hello, ${name}! My name is Tom Riddle`;
}*/

function greetUser() {
  const name = document.getElementById("nameInput").value;
  const greeting = Hello, ${name}! My name is Tom Riddle; // The full greeting message

  document.getElementById("greeting").textContent = ""; // Clear the previous content

  let index = 0;
  function displayLetter() {
    if (index < greeting.length) {
      const letter = greeting[index];
      document.getElementById("greeting").textContent += letter; // Append the letter
      index++;
      setTimeout(displayLetter, 100); // Delay next letter display
    }
  }

  displayLetter(); // Start displaying letters
}
