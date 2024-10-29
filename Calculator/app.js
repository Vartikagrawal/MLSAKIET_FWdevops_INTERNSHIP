let displayValue = '0';
let pendingValue;
let operator;

function addToDisplay(value) {
  if (displayValue === '0') {
    displayValue = '';
  }
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  let result = eval(displayValue);
  displayValue = result.toString();
  updateDisplay();
}
