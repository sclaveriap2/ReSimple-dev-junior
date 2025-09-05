import { useState } from "react";
import { exportToExcel } from "../utils/exportToExcel";
import { paginateData } from "../utils/paginationUtils";
import "./PaginatedTable.css"; // Asegúrate de importar el CSS
import "./Global.css";

const PaginatedTable = ({ data }) => {
  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Estado para la cantidad de filas por página
  const [rowsPerPage, setRowsPerPage] = useState(10); 

   // Obtener las filas actuales según la página y total de páginas
  const { currentRows, totalPages } = paginateData(data, currentPage, rowsPerPage);

  return (
    <div className="section-container paginated-table">
      <div className="paginated-table__controls">
        <label>
          Filas por página:{" "}
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reinicia a la primera página al cambiar filas por página
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>
      <div className="paginated-table__scroll-container">
        <table className="paginated-table__table">
          <thead className="paginated-table__thead">
            <tr>
              <th>NOMBRE_EMPRESA</th>
              <th>NOMBRE_AREA </th>
              <th>RUT_TRABAJADOR </th>
              <th>NOMBRE_TRABAJADOR </th>
              <th>EDAD </th>
              <th>PROFESION </th>
              <th>CARGO </th>
              <th>SUELDO </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr key={index} className="paginated-table__row">
                <td>{row.empresa}</td>
                <td>{row.area}</td>
                <td>{row.rut}</td>
                <td>{row.nombre}</td>
                <td>{row.edad}</td>
                <td>{row.profesion}</td>
                <td>{row.cargo}</td>
                <td>{row.sueldo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paginated-table__pagination">
        <button
          className="paginated-table__button"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span> Página {currentPage} de {totalPages} </span>
        <button
          className="paginated-table__button"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>

      <button
        className="paginated-table__export-button"
        onClick={() => exportToExcel(data)}
      >
        Descargar Excel
      </button>
    </div>
  );
};

export default PaginatedTable;




