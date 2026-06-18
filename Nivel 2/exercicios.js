//🟡 Nível 2 — Manipulação de arrays
// Exercício 6 — Adicionando no final
let jogos = ["Roblox", "Mario", "The Sims"];
jogos.push("Clash of Clans");
console.log(jogos);
//7. Adicionando no início
let disciplinas = ["História", "Ingles", "Geografia"];
disciplinas.unshift("Geografia");
console.log(disciplinas);
//8. Removendo o último item
let cantina = ["Salgado", "Suco", "Doce", "Pipoca"];
cantina.pop();
console.log(cantina);
//9. Removendo o primeiro item
let alunos= ["Heloisa", "Rafaela", "Marina","Sophia"];
alunos.shift();
console.log(alunos);
//10. Lista atualizada
// Exercício 10 — Lista atualizada
let produtos = ["Pastel", "Suco", "Coxinha", "Chocolate"];
produtos.push("Pão de Queijo");
produtos.shift();
produtos[1] = "Esfiha"; 
console.log(produtos);
console.log("Quantidade de produtos: " + produtos.length);





