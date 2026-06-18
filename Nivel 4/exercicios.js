// 16. Soma dos números
let numeros = [10, 20, 30, 40, 50];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("A soma é: " + soma);
//17. Média de notas
let notas = [7.0, 8.5, 6.0, 9.5];
let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}
let media = somaNotas / notas.length;
console.log("A média é: " + media);
//18. Maior número
// Exercício 18 — Maior número
let numeros = [15, 42, 7, 89, 23, 54];
let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log("O maior número é: " + maior);
//19. Menor número
let numeros2 = [15, 42, 7, 89, 23, 54];
let menor = numeros2[0];
for (let i = 1; i < numeros2.length; i++) {
    if (numeros2[i] < menor) {
        menor = numeros2[i];
    }
}
console.log("O menor número é: " + menor);
//20. Quantidade de números pares
let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8];
let contadorPares = 0;
for (let i = 0; i < numeros3.length; i++) {
    if (numeros3[i] % 2 === 0) {
        contadorPares++;
    }
}
console.log("Quantidade de números pares: " + contadorPares);