var idade = parseInt(prompt("Digite a idade:"));
var faixaEtaria;

if (idade < 12) {
  faixaEtaria = "Criança";
} else if (idade < 18) {
  faixaEtaria = "Adolescente";
} else if (idade <= 60) {
  faixaEtaria = "Adulto";
} else {
  faixaEtaria = "Idoso";
}

console.log(faixaEtaria);
