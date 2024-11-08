
const counterWrapper = document.getElementById('counter-wrapper');


const counterDisplay = document.createElement('h1');
counterDisplay.id = 'counter-display';
counterDisplay.textContent = '0';
counterWrapper.appendChild(counterDisplay);


const buttonsContainer = document.createElement('div');
buttonsContainer.id = 'buttons';
counterWrapper.appendChild(buttonsContainer);


const decreaseButton = document.createElement('button');
decreaseButton.id = 'decrease';
decreaseButton.textContent = '-';
buttonsContainer.appendChild(decreaseButton);

const resetButton = document.createElement('button');
resetButton.id = 'reset';
resetButton.textContent = 'Reset';
buttonsContainer.appendChild(resetButton);

const increaseButton = document.createElement('button');
increaseButton.id = 'increase';
increaseButton.textContent = '+';
buttonsContainer.appendChild(increaseButton);

let counter = 0;

function updateDisplay() {
  counterDisplay.textContent = counter;
}


buttonsContainer.addEventListener('click', function(event) {
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

