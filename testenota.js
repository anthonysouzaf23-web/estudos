let min = 1;
let max = 10;
let numero = Math.floor(Math.random() * (max - min + 1)) + min;
let nota = numero;
console.log("Nota: " + nota);

if (nota >= 7) {
    console.log("Aprovado")
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}