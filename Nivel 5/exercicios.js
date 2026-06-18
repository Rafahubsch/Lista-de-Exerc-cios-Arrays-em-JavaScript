//21. Aprovados e reprovados
// Exercício 21 — Aprovados e reprovados
let notas= [8, 5, 6, 7, 4, 9];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        console.log("Nota " + notas[i] + ": Aprovado");
    } else {
        console.log("Nota " + notas[i] + ": Reprovado");
    }
}

//22. Procurando um produto
let produtos = ["Pastel", "Suco", "Coxinha", "Chocolate"];
let produtoBuscado = "Coxinha";
let encontrado = false;
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] === produtoBuscado) {
        encontrado = true;
    }
}
if (encontrado) {
    console.log("Produto encontrado!");
} else {
    console.log("Produto não encontrado.");
}

// 23. Verificando nota baixa
let notas1 = [7.5, 8.0, 5.5, 9, 6.5];
let temNotaBaixa = false;

for (let i = 0; i < notas1.length; i++) {
    if (notas1[i] < 6) {
        temNotaBaixa = true;
    }
}

if (temNotaBaixa) {
    console.log("Existe nota abaixo da média.");
} else {
    console.log("Todas as notas estão boas.");
}

// 24. Contando notas acima da média
let notas3 = [6.5, 7.0, 8.5, 5.0, 9.0, 7.5];
let notasBoas = 0;

for (let i = 0; i < notas3.length; i++) {
    if (notas3[i] >= 7) {
        notasBoas++;
    }
}
console.log("Quantidade de notas boas: " + notasBoas);

// 25. Lista de tarefas
let tarefas = ["Estudar JS", "Lavar a louça", "Ir à academia", "Ler um livro", "Fazer o jantar"];

console.log("--- Lista Inicial de Tarefas ---");
for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i]);
}

tarefas.push("Trabalhar no projeto");

console.log("--- Lista Atualizada ---");
for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i]);
}