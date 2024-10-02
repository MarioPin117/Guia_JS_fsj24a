function obtenerEdades(id) {
    const inputs = document.querySelectorAll(`#${id} input`);
    let edades = [];
    inputs.forEach(input => {
        edades.push(parseInt(input.value, 10));
    });
    return edades;
}

function calcularPromedio(edades) {
    const suma = edades.reduce((acc, edad) => acc + edad, 0);
    return suma / edades.length;
}

function calcularPromedios() {
    const edadesManana = obtenerEdades('manana');
    const edadesTarde = obtenerEdades('tarde');
    const edadesNoche = obtenerEdades('noche');

    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);

    let mensaje = `Promedio de edades - Mañana: ${promedioManana.toFixed(2)}, Tarde: ${promedioTarde.toFixed(2)}, Noche: ${promedioNoche.toFixed(2)}. `;

    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
        mensaje += "El turno con el promedio de edades mayor es el turno Mañana.";
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
        mensaje += "El turno con el promedio de edades mayor es el turno Tarde.";
    } else {
        mensaje += "El turno con el promedio de edades mayor es el turno Noche.";
    }

    document.getElementById('resultado').innerText = mensaje;
}
