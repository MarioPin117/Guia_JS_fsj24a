function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    const notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    console.log(`Alumno: ${nombre}`);
    console.log(`Carnet: ${carnet}`);
    console.log(`Nota Final: ${notaFinal.toFixed(2)}`);
  }
  
  // Ejemplo de uso:
  calcularNotaFinal("Mario Pinto", "PA22066", 8.3, 9.1, 10, 8.55);
  