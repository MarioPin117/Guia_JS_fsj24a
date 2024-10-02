const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce una temperatura en Celsius: ', (celsius) => {
    celsius = parseFloat(celsius);
    const fahrenheit = (celsius * 9/5) + 32;

    console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);

    if (fahrenheit >= 14 && fahrenheit < 32) {
        console.log('Temperatura baja');
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        console.log('Temperatura adecuada');
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        console.log('Temperatura alta');
    } else {
        console.log('Temperatura desconocida');
    }

    rl.close();
});
