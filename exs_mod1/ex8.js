function soma(...valores) {
  let soma = 0;
  for (valor of valores) {
    soma += valor;
  }
  return soma;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(...valores) {
  let produto = 1;
  for (valor of valores) {
    produto *= valor;
  }
  return produto;
}

function divide(a, b) {
  return a / b;
}
