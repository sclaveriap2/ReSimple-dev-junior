import { useState } from "react";
import { exportToExcel } from "../utils/exportToExcel";
import { paginateData } from "../utils/paginationUtils";

const PaginatedTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const { currentRows, totalPages } = paginateData(data, currentPage, rowsPerPage);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Área</th>
            <th>RUT</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Profesión</th>
            <th>Cargo</th>
            <th>Sueldo</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index}>
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

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span> Página {currentPage} de {totalPages} </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
      <button onClick={() => exportToExcel(data)}>Descargar Excel</button>
    </div>
  );
};

export default PaginatedTable;



