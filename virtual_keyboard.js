let buttons = document.querySelectorAll(".btn");
let textarea = document.getElementById("output");
let backspace = document.getElementById("backspace");
let spacebar = document.getElementById("spacebar");
let shift = document.getElementById("shift");
let chars = [];
let shiftState = false;

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    let letter = btn.innerHTML;
    let value = shiftState ? letter.toUpperCase() : letter.toLowerCase();
    textarea.value += value;
    chars = textarea.value.split('');
  });
});

backspace.addEventListener("click", function() {
  chars.pop();
  textarea.value = chars.join('');
});

spacebar.addEventListener("click", function() {
  chars.push(' ');
  textarea.value = chars.join('');
});

shift.addEventListener("click", function() {
  shiftState = !shiftState; // Toggle shift state

  buttons.forEach(btn => { 
    let letter = btn.innerHTML;
    btn.innerHTML = shiftState ? letter.toUpperCase() : letter.toLowerCase();
  });
});
