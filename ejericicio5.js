function calcularDescuento() {
    const car = document.getElementById('car').value;
    let descuento = 0;

    if (car === 'FORD FIESTA') {
        descuento = 5;
    } else if (car === 'FORD FOCUS') {
        descuento = 10;
    } else if (car === 'FORD ESCAPE') {
        descuento = 20;
    }

    document.getElementById('resultado').innerText = `El coche seleccionado es ${car} y el descuento aplicado es del ${descuento}%.`;
}
