//Atividade 05 Dada uma lista de strings, use a função map para criar uma nova lista onde cada string é convertida para maiúsculas.

const strings = ["helicop", "ingreis", "frauta", "coisado", "arretado" ];
const uppercasedStrings = strings.map(str => str.toUpperCase());

console.log(uppercasedStrings);

