import { useState, useEffect } from "react";
import { filterData } from "../utils/filterUtils";

const Filter = ({ data, onFilter }) => {
  const [empresa, setEmpresa] = useState("Todos");
  const [area, setArea] = useState("Todos");
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");

  // Listas únicas para dropdowns
  const empresas = ["Todos", ...new Set(data.map(d => d.empresa))];
  const areas = ["Todos", ...new Set(data.map(d => d.area))];

  const handleFilter = () => {
    const filtered = filterData(data, { empresa, area, nombre, rut });
    onFilter(filtered);
  };

  // Opcional: actualizar automáticamente al cambiar dropdowns
  useEffect(() => {
    handleFilter();
  }, [empresa, area, nombre, rut]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <div>
        <label>Empresa:</label>
        <select value={empresa} onChange={e => setEmpresa(e.target.value)}>
          {empresas.map(e => <option key={e} value={e}>{e}</option>)}
        </select>
      </div>
      <div>
        <label>Área:</label>
        <select value={area} onChange={e => setArea(e.target.value)}>
          {areas.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
      </div>
      <div>
        <label>RUT:</label>
        <input type="text" value={rut} onChange={e => setRut(e.target.value)} />
      </div>
    </div>
  );
};

export default Filter;


