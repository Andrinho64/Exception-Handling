function isNumeric(value) {
  return !Number.isNaN(Number(value));
}

function validateInput(value1, value2) {
  if (!value1 || !value2) {
    throw new Error('Preencha os campos para realizar a soma');
  }

  if (!isNumeric(value1) || !isNumeric(value2)) {
    throw new Error('Informe dois números para realizar a soma');
  }
}

function calculateSum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;

    validateInput(value1, value2);

    const result = Number(value1) + Number(value2);

    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';

    return result;
  } catch (error) {
    document.getElementById('result').innerHTML = error.message;
    throw error;
  }
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  try {
    const result = calculateSum();
    if (!Number.isNaN(result)) {
      displayResult(result);
    }
  } catch (error) {
    // Captura o erro lançado pela função calculateSum durante os testes
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
