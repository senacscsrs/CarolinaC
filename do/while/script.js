// 27. Senha até ser "1234"
let senha = "";
do {
  // Em navegador, poderia ser: senha = prompt("Digite a senha:");
  // Aqui simulamos tentativas:
  senha = "1234"; // Troque para simular tentativas diferentes
  console.log("Tentando senha:", senha);
} while (senha !== "1234");
console.log("Senha correta! Acesso permitido.");

// 28. Números de 0 a 3
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 3);

// 29. Menu com opções, sair quando for "sair"
let opcao;
do {
  // Em navegador: opcao = prompt("Escolha: 1-Opção A | 2-Opção B | sair");
  // Simulação:
  opcao = "sair"; // Troque para "1" ou "2" para testar outras tentativas
  console.log("Opção escolhida:", opcao);
} while (opcao !== "sair");
console.log("Programa finalizado.");

// 30. Números de 1 a 5
let numero = 1;
do {
  console.log(numero);
  numero++;
} while (numero <= 5);
