let nome = prompt("Nome do aluno:");
let idade = prompt("Idade:");
let cidade = prompt("Cidade:");
let nota = Number(prompt("Nota do aluno (0 a 10):"));

const bonus = 1;
let nota_final = nota + bonus;

let situacao = nota_final >= 7 ? "Aprovado" : "Reprovado";

let relatorio = `O aluno ${nome} de ${idade} anos, que mora em ${cidade}, ficou com a nota ${nota_final}.`;

console.log(relatorio);
alert(`O aluno foi ${situacao}!`);
