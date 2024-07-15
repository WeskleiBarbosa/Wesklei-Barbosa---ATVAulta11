//Atividade 03 Faça um Programa que calcule a soma de todos os números do seguinte array [1, 2, 3, 4, 5, 6].

const numeros = [1, 2, 3, 4, 5, 6];
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);

console.log("Este é o resultado:", soma);