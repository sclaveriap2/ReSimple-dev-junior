/**
 * Obtener empresas únicas
 * @param {Array} data
 * @returns {Array}
 */
export const getUniqueCompanies = (data) => {
  return [...new Set(data.map((row) => row.empresa))];
};

/**
 * Obtener áreas únicas
 * @param {Array} data
 * @returns {Array}
 */
export const getUniqueAreas = (data) => {
  return [...new Set(data.map((row) => row.area))];
};

/**
 * Obtener sueldos únicas
 * @param {Array} data
 * @returns {Array}
 */
export const getUniqueSueldos = (data) => {
  return [...new Set(data.map((row) => row.sueldo))];
};

/**
 * Aplica los filtros seleccionados
 * @param {Array} data - Lista de trabajadores
 * @param {Object} filters - { empresas, areas, nombre, rut }
 * @returns {Array}
 */
export const applyFilters = (data, { empresas, areas, nombre, rut, sueldoMin, sueldoMax}) => {
  let filtered = data;

  // Filtrar por empresas
  if (empresas.length > 0) {
    filtered = filtered.filter((row) => empresas.includes(row.empresa));
  }

  // Filtrar por áreas
  if (areas.length > 0) {
    filtered = filtered.filter((row) => areas.includes(row.area));
  }

  // Filtrar por nombre
  if (nombre.trim() !== "") {
    const normalizedName = nombre.toLowerCase();
    filtered = filtered.filter((row) =>
      row.nombre.toLowerCase().includes(normalizedName)
    );
  }

  // Filtrar por RUT
  if (rut.trim() !== "") {
    const normalizedRut = rut.replace(/\./g, "").replace(/-/g, "").toLowerCase();
    filtered = filtered.filter((row) => {
      const rowRut = row.rut.replace(/\./g, "").replace(/-/g, "").toLowerCase();
      return rowRut.includes(normalizedRut);
    });
  }

 // Filtrar por sueldo mínimo
  if (sueldoMin != null && sueldoMin !== "") {
    filtered = filtered.filter(row => row.sueldo >= sueldoMin);
  }

  // Filtrar por sueldo máximo
  if (sueldoMax != null && sueldoMax !== "") {
    filtered = filtered.filter(row => row.sueldo <= sueldoMax);
  }

  return filtered;
};
