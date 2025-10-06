// 18. Números de 1 a 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 19. Contagem regressiva de 10 a 0 e "Fogo!"
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("Fogo!");

// 20. Tabuada de um número
let numero = 7; // altere para qualquer número
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// 21. Números pares de 0 a 20
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 22. Soma de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log("Soma de 1 a 100 é:", soma);
