/*function greetUser() {
  const name = document.getElementById("nameInput").value;
  document.getElementById(
    "greeting"
  ).textContent = `Hello, ${name}! My name is Tom Riddle`;
}*/

document.getElementById("greetButton").addEventListener("click", function () {
  greetUser();
});

function greetUser() {
  var name = document.getElementById("nameInput").value;
  var greetingSpan = document.getElementById("greeting");
  var greetingText = "Hello " + name + "! My name is Tom Riddle.";

  greetingSpan.textContent = "";

  for (let i = 0; i < greetingText.length; i++) {
    // Use setTimeout to delay displaying each character
    setTimeout(function () {
      greetingSpan.textContent += greetingText[i];
    }, i * 200);
  }
}
