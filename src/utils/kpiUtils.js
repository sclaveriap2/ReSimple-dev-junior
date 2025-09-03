// src/utils/kpiUtils.js

export const calcularKPIs = (data) => {
  const trabajadoresPorEmpresa = {};
  const trabajadoresPorArea = {};
  const gastosPorEmpresa = {};
  const gastosPorArea = {};

  data.forEach(row => {
    // Por empresa
    trabajadoresPorEmpresa[row.empresa] = (trabajadoresPorEmpresa[row.empresa] || 0) + 1;
    gastosPorEmpresa[row.empresa] = (gastosPorEmpresa[row.empresa] || 0) + (row.sueldo || 0);

    // Por área
    trabajadoresPorArea[row.area] = (trabajadoresPorArea[row.area] || 0) + 1;
    gastosPorArea[row.area] = (gastosPorArea[row.area] || 0) + (row.sueldo || 0);
  });

  return {
    trabajadoresPorEmpresa,
    trabajadoresPorArea,
    gastosPorEmpresa,
    gastosPorArea
  };
};