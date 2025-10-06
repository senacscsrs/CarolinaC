// 23. Contador de 0 a 5
let contador = 0;
while (contador <= 5) {
  console.log(contador);
  contador++;
}

// 24. Caixa eletrônico retirando 10 até zerar
let saldo = 100;
while (saldo > 0) {
  console.log("Saldo atual:", saldo);
  saldo -= 10; // retira 10 a cada loop
}
console.log("Saldo zerado!");

// 25. Números ímpares de 1 a 20
let numero = 1;
while (numero <= 20) {
  if (numero % 2 !== 0) {
    console.log(numero);
  }
  numero++;
}

// 26. Tentativa de senha até acertar
let senhaCorreta = "abcd";
let tentativa = ""; // aqui simulamos a entrada do usuário
// Exemplo com prompt (em navegador):
// while (tentativa !== senhaCorreta) {
//   tentativa = prompt("Digite a senha:");
// }
// console.log("Senha correta! Acesso permitido.");

// Exemplo sem prompt (simulação automática):
let tentativas = ["1234", "qwer", "abcd"]; // lista de tentativas
let i = 0;
while (tentativa !== senhaCorreta) {
  tentativa = tentativas[i];
  console.log("Tentativa:", tentativa);
  i++;
}
console.log("Senha correta! Acesso permitido.");
