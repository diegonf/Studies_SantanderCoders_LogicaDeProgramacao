const calcSalario = (entrada) => {
  // const entrada = 2001;

  const salarioAtual = parseInt(entrada);
  if (isNaN(salarioAtual) || salarioAtual <= 0) {
    alert('input invalido');
    return;
  }

  let taxa = 1;

  if (salarioAtual <= 1500) {
    taxa = 1.20;
  } else if (salarioAtual <= 1700) {
    taxa = 1.15;
  } else if (salarioAtual <= 2000) {
    taxa = 1.10;
  } else {
    taxa = 1.05;
  }

  const salarioAjustado = salarioAtual * taxa;
  const aumentoSalario = salarioAjustado - salarioAtual;

  alert(`Salario antes do reajuste: R$ ${salarioAtual.toFixed(2)}
  O percentual aplicafo foi: : ${((taxa - 1) * 100).toFixed(2)}%
  O valor do aumento foi: R$ ${(aumentoSalario).toFixed(2)}
  O novo salário é: R$ ${salarioAjustado.toFixed(2)}`)
}

document.getElementById('formulario').addEventListener('submit', (event) => {
  event.preventDefault();
  const salario = document.getElementById('salario').value;
  calcSalario(salario);
})