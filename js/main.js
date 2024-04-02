

function greetUser() {
    const nameInput = document.getElementById("nameInput").value;
    const greeting = document.getElementById("greeting");
    const text = Hello, ${nameInput}, my name is Tom Riddle.; 
    let index = 0;
  
    function typeWriter() {
      if (index < text.length) {
        greeting.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); 
      }
    }
  
    typeWriter();
  }
  
  