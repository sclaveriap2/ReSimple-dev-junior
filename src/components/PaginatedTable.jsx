import { useState } from "react";

function PaginatedTable({ data = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calcular el índice de los elementos que se muestran en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table className="table__container">
        <thead>
          <tr>
            <th>RUT</th>
            <th>Empresa</th>
            <th>Área</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length ? (
            currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.rut || ""}</td>
                <td>{item.nombreEmpresa || ""}</td>
                <td>{item.nombreArea || ""}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>No hay datos</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Paginación */}
      <div className="pagination__container">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
            className={page === currentPage ? "page__active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaginatedTable;
