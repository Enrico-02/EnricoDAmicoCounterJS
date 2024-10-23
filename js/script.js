
const counterDisplay = document.getElementById('counter-display');
const buttons = document.getElementById('buttons');


let counter = 0;


function updateDisplay() {
  counterDisplay.textContent = counter;
}


buttons.addEventListener('click', function(event) {
  const clickedButton = event.target.id;

  if (clickedButton === 'increase') {
    counter++;
  } else if (clickedButton === 'decrease') {
    counter--;
  } else if (clickedButton === 'reset') {
    counter = 0;
  }

  updateDisplay();
});
