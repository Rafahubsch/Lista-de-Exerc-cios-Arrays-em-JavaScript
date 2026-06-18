//🟠 Nível 3 — Percorrendo arrays com for
// 11. Mostrando todos os alunos
let alunos = ["Fernanda", "Gabriel", "Helena", "Igor", "Julia"];
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
//12. Lista numerada
let filmes = ["Culpa das Estrelas", "Interstellar", "Marvel", "Uma segunda chance", "Avatar"];
for (let i = 0; i < filmes.length; i++) {
    console.log((i + 1) + " - " + filmes[i]);
}
 //13.Produtos da cantina
let cantina = ["Pastel", "Suco", "Coxinha", "Bolo", "Café"];
for (let i = 0; i < cantina.length; i++) {
    console.log("Produto " + (i + 1) + ": " + cantina[i]);
}
//14. Notas dos alunos
let notas = [8.5, 7.0, 6.2, 9.5, 5.0];
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}
//15. Verificando presença
let presentes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];
for (let i = 0; i < presentes.length; i++) {
    console.log(presentes[i] + " está presente.");
}

