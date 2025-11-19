// 1. Contar caracteres e mostrar palavra com slice
let frase = "O JavaScript é divertido";
console.log("Quantidade de caracteres:", frase.length);
console.log("Palavra com slice:", frase.slice(14)); // "divertido"

// 2. Nome em maiúsculo e minúsculo
let nome = "Carolina";
console.log("Maiúsculo:", nome.toUpperCase());
console.log("Minúsculo:", nome.toLowerCase());

// 3. Substituir palavra em uma string
let animal = "O gato dorme muito";
let novoAnimal = animal.replace("gato", "cachorro");
console.log(novoAnimal);

// 4. Verificar se contém a palavra
let frase2 = "Estou aprendendo JavaScript";
if (frase2.includes("JavaScript")) {
    console.log("Achei a palavra!");
} else {
    console.log("Não achei");
}

// 5. Switch com frutas
let fruta = "banana";
switch (fruta) {
    case "maçã":
        console.log("Você escolheu maçã!");
        break;
    case "banana":
        console.log("Você escolheu banana!");
        break;
    case "uva":
        console.log("Você escolheu uva!");
        break;
    default:
        console.log("Fruta não cadastrada");
}

// 6. Percorrer string com for
let palavra = "Aprender";
for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i]);
}

// 7. Simular senha com do...while
let senhaCorreta = "1234";
let tentativa;
do {
    tentativa = "1234"; // aqui simula a digitação (poderia usar prompt no navegador)
} while (tentativa !== senhaCorreta);
console.log("Senha correta!");

// 8. Controle de passagens
let saldo = 5;
while (saldo > 0) {
    console.log(`Usei 1 passagem. Restam ${saldo - 1} passagens`);
    saldo--;
}
console.log("Saldo esgotado!");

// 9. Verificar par ou ímpar
let numero = 7;
if (numero % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}

// 10. Dividir frase em palavras
let texto = "O rato roeu a roupa do rei de Roma";
let palavras = texto.split(" ");
for (let i = 0; i < palavras.length; i++) {
    console.log(palavras[i]);
}

// 11. Vetor com colegas
let colegas = ["Ana", "Bruno", "Carla", "Diego", "Fernanda"];
for (let i = 0; i < colegas.length; i++) {
    console.log(colegas[i]);
}

// 12. Soma de números em vetor
let numeros = [5, 10, 15, 20, 25];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("Soma total:", soma);

// 13. Supermercado com push()
let mercado = ["arroz", "feijão", "leite"];
mercado.push("pão", "açúcar");
console.log("Lista atualizada:", mercado);

// 14. Dias da semana
let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let hoje = new Date().getDay();
console.log("Hoje é:", dias[hoje]);

// 15. Média de notas
let notas = [7, 8, 6, 9, 10];
let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}
let media = somaNotas / notas.length;
console.log("Média das notas:", media);