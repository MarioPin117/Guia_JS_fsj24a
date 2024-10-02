const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMayor(num1, num2) {
  if (num1 > num2) {
    return `El número mayor es: ${num1}`;
  } else if (num2 > num1) {
    return `El número mayor es: ${num2}`;
  } else {
    return "Ambos números son iguales.";
  }
}

// Solicitar los números al usuario
rl.question('Ingresa el primer número: ', (primerNumero) => {
  rl.question('Ingresa el segundo número: ', (segundoNumero) => {
    const num1 = parseInt(primerNumero);
    const num2 = parseInt(segundoNumero);

    console.log(calcularMayor(num1, num2));
    rl.close();
  });
});
