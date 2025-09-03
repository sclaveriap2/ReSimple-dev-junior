import { useEffect, useState } from "react";
import { getCombinedData } from "../data/combineData";
import KpiSection from "./KpiSection"; // ajusta la ruta según tu estructura

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCombinedData();
      setData(result);
    };
    fetchData();
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div>
      <h2>Lista de Trabajadores</h2>
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
            </tr>
          ))}
        </tbody>
      </table>

      <div>
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
      <KpiSection rows={data} />
    </div>
  );
};

export default Pagination;

