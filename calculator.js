let calculation = localStorage.getItem('storedCalculation') || ""

displayCalculation();

function updateCalculation (update) {
  calculation = calculation + update;
  localStorage.setItem('storedCalculation', calculation);
  displayCalculation();
}

function putValueInCalculation (event) {
  if(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '/', '*'].includes(event.key)) {
    calculation = calculation + event.key;
    localStorage.setItem('storedCalculation', calculation);
    displayCalculation();
  }
  else if (event.key === 'Enter' || event.key === '=') {
    equalButton();
  }
  else if (event.key === 'Backspace') {
    deleteButton();
  }
}

function displayCalculation () {
  document.querySelector('.typedCalculation')
    .value = calculation;
}

function equalButton () {
  document.querySelector('.typedCalculation')
    .value = (eval(calculation));
  calculation = '';
  localStorage.setItem('storedCalculation', ''); 
}

function clearButton () {
  calculation = '';
  localStorage.setItem('storedCalculation', '');
  displayCalculation();
}

function deleteButton () {
  calculation = calculation.slice(0, -1) || '';
  localStorage.setItem('storedCalculation', calculation);
  displayCalculation();
}