
// Función para paginar los datos
export const paginateData = (data, currentPage, rowsPerPage = 10) => {
  // Calcular índice de la última fila de la página actual
  const indexOfLastRow = currentPage * rowsPerPage;

  // Calcular índice de la primera fila de la página actual
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Obtener solo las filas que corresponden a la página actual
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Calcular el total de páginas necesarias
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Devolver filas actuales y total de páginas
  return {
    currentRows,
    totalPages,
  };
};
