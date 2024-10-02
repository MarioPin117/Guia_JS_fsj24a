function calcularDescuentoViaje(ciudadOrigen, ciudadDestino) {
    let descuento;

    if (ciudadOrigen.toLowerCase() === "palma" && ciudadDestino.toLowerCase() === "la costa del sol") {
        descuento = 0.05;
    } else if (ciudadOrigen.toLowerCase() === "palma" && ciudadDestino.toLowerCase() === "panchimalco") {
        descuento = 0.10; 
    } else if (ciudadOrigen.toLowerCase() === "palma" && ciudadDestino.toLowerCase() === "puerto el triunfo") {
        descuento = 0.15; 
    } else {
        descuento = 0; 
    }

    const mensaje = (descuento > 0) 
        ? `Descuento del ${(descuento * 100).toFixed(2)}% aplicado para el viaje de ${ciudadOrigen} a ${ciudadDestino}.`
        : "No se aplica descuento para este viaje.";

    console.log(mensaje);
}

// Ejemplo de uso:
const ciudadOrigen = "Palma"; 
const ciudadDestino = "puerto el triunfo"; 

calcularDescuentoViaje(ciudadOrigen, ciudadDestino); 