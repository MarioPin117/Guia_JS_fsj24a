const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let valores = [];
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let acumuladoPares = 0;
let contador = 0;

function procesarValores() {
    rl.question(`Introduce el valor ${contador + 1}: `, (valor) => {
        valor = parseInt(valor, 10);
        valores.push(valor);

        if (valor < 0) {
            negativos++;
        } else if (valor > 0) {
            positivos++;
        }

        if (valor % 15 === 0) {
            multiplosDe15++;
        }

        if (valor % 2 === 0) {
            acumuladoPares += valor;
        }

        contador++;
        if (contador < 10) {
            procesarValores();
        } else {
            console.log(`Cantidad de valores negativos: ${negativos}`);
            console.log(`Cantidad de valores positivos: ${positivos}`);
            console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
            console.log(`Valor acumulado de los números pares: ${acumuladoPares}`);
            rl.close();
        }
    });
}

// Iniciar el proceso
procesarValores();
