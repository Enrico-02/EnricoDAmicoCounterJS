const counterWrapper = document.getElementById('counter-wrapper');

function creaElemento(tagName, id = '', textContent = '') {
    const elemento = document.createElement(tagName);
    if (id) elemento.id = id;
    if (textContent) elemento.textContent = textContent;
    return elemento;
}


const counterDisplay = creaElemento('h1', 'counter-display', '0');
counterWrapper.appendChild(counterDisplay);


const buttonsContainer = creaElemento('div', 'buttons');
counterWrapper.appendChild(buttonsContainer);


const decreaseButton = creaElemento('button', 'decrease', '-');
const resetButton = creaElemento('button', 'reset', 'Reset');
const increaseButton = creaElemento('button', 'increase', '+');

buttonsContainer.appendChild(decreaseButton);
buttonsContainer.appendChild(resetButton);
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


