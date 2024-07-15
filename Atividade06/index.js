//Atividade 06 Dada uma lista de strings, use a função filter para criar uma nova lista contendo apenas as palavras que têm mais de 5 caracteres.

const palavras = ["pêra", "banana", "abacaxi", "laranja", "uva", "melancia", "tangerina", "manga"];

const palavrasLongas = palavras.filter(palavra => palavra.length > 5);

console.log(palavrasLongas);