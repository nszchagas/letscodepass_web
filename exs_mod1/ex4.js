var numeros = [];

for (let cont = 0; cont < 100; cont++) {
  numeros.push(cont + 1);
}

soma = numeros.reduce((prev, curr) => prev + curr, 0);

console.log(soma);
