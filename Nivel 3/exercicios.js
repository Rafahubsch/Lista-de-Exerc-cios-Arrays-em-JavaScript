//🟠 Nível 3 — Percorrendo arrays com for
// 11. Mostrando todos os alunos
let alunosEx11 = ["Fernanda", "Gabriel", "Helena", "Igor", "Julia"];
for (let i = 0; i < alunosEx11.length; i++) {
    console.log(alunosEx11[i]);
}
//12. Lista numerada
let filmes = ["Culpa das Estrelas", "Interstellar", "Marvel", "Uma segunda chance", "Avatar"];
for (let i = 0; i < filmes.length; i++) {
    console.log((i + 1) + " - " + filmes[i]);
}
 // Exercício 13 — Produtos da cantina
let cantinaEx13 = ["Pastel", "Suco", "Coxinha", "Bolo", "Café"];
for (let i = 0; i < cantinaEx13.length; i++) {
    console.log("Produto " + (i + 1) + ": " + cantinaEx13[i]);
}