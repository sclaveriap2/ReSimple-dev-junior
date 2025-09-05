
// Función para calcular KPIs a partir de los datos
export const calcularKPIs = (data) => {
  // Inicializar objetos para almacenar los KPIs
  const trabajadoresPorEmpresa = {};
  const trabajadoresPorArea = {};
  const gastosPorEmpresa = {};
  const gastosPorArea = {};

  // Recorrer cada fila de datos
  data.forEach(row => {
    // Contar trabajadores por empresa
    trabajadoresPorEmpresa[row.empresa] = (trabajadoresPorEmpresa[row.empresa] || 0) + 1;
    // Sumar sueldos por empresa
    gastosPorEmpresa[row.empresa] = (gastosPorEmpresa[row.empresa] || 0) + (row.sueldo || 0);

    // Contar trabajadores por área
    trabajadoresPorArea[row.area] = (trabajadoresPorArea[row.area] || 0) + 1;
    // Sumar sueldos por área
    gastosPorArea[row.area] = (gastosPorArea[row.area] || 0) + (row.sueldo || 0);
  });

  // Devolver un objeto con todos los KPIs calculados
  return {
    trabajadoresPorEmpresa,
    trabajadoresPorArea,
    gastosPorEmpresa,
    gastosPorArea
  };
};