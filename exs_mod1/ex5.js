var numeros = [];

for (let cont = 0; cont < 1000; cont++) {
  numeros.push(cont + 1);
}

var pares = numeros.filter((n) => n % 2 == 0);

console.log(pares);
