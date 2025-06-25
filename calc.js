let display = document.getElementById('display');


function appendCharacter(char) {
  display.value += char;
}


function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    // Only allow numbers and operators
    if (/^[\d+\-*/.() ]+$/.test(display.value)) {
      display.value = Function('"use strict";return (' + display.value + ')')();
    } else {
      display.value = 'Error';
    }
  } catch (error) {
    display.value = 'Error';
  }
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}


document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendCharacter(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteChar();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});

