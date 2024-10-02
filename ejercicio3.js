function calcularAumento(nombre, salario, categoria) {
    let aumentoPorcentaje;
  
    switch (categoria.toUpperCase()) {
      case 'A':
        aumentoPorcentaje = 0.15;
        break;
      case 'B':
        aumentoPorcentaje = 0.30;
        break;
      case 'C':
        aumentoPorcentaje = 0.10;
        break;
      case 'D':
        aumentoPorcentaje = 0.20;
        break;
      default:
        console.log("Categoría no válida.");
        return;
    }
  
    const aumento = salario * aumentoPorcentaje;
    const salarioFinal = salario + aumento;
  
    console.log(`Empleado: ${nombre}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Salario Base: $${salario.toFixed(2)}`);
    console.log(`Aumento: $${aumento.toFixed(2)}`);
    console.log(`Salario Final: $${salarioFinal.toFixed(2)}`);
  }
  
  // Ejemplo de uso:
  calcularAumento("Mario Pinto", 1000, 'B');
  