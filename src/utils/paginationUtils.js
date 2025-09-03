// src/utils/paginationUtils.js

export const paginateData = (data, currentPage, rowsPerPage = 10) => {
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return {
    currentRows,
    totalPages,
  };
};
