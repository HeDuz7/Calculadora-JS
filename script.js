let displayValue = '';

function appendNumber(num) {
  displayValue += num;
  document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
  displayValue += operator;
  document.getElementById('display').value = displayValue;
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch(error) {
    alert('Erro na expressão!');
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}
