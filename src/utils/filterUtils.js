// src/utils/filterUtils.js

/**
 * Filtra los datos según los criterios seleccionados
 * @param {Array} data - Lista completa de trabajadores
 * @param {Object} filters - Filtros { empresa, area, nombre, rut }
 * @returns {Array} - Lista filtrada
 */
export const filterData = (data, filters) => {
  return data.filter(item => {
    const matchEmpresa =
      !filters.empresa || filters.empresa === "Todos" || item.empresa === filters.empresa;
    const matchArea =
      !filters.area || filters.area === "Todos" || item.area === filters.area;
    const matchNombre =
      !filters.nombre || item.nombre.toLowerCase().includes(filters.nombre.toLowerCase());
    const matchRut =
      !filters.rut || item.rut.includes(filters.rut);

    return matchEmpresa && matchArea && matchNombre && matchRut;
  });
};
