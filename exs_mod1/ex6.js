var numeros = [];

for (let cont = 1; cont <= 100; cont++) {
  numeros.push(cont);
}

primos = numeros.filter((number) => isPrimo(number));
console.log(primos);

function isPrimo(number) {
  if (number > 1) {
    for (let cont = 2; cont <= Math.ceil(Math.sqrt(number)); cont++) {
      if (number % cont == 0) return false;
    }
    return true;
  } else {
    return false;
  }
}
