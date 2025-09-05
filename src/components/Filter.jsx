import { useState } from "react";
import { getUniqueCompanies, getUniqueAreas, applyFilters } from "../utils/filterUtils";
import "./Filter.css"; // Importar estilos
import "./Global.css";

const Filter = ({ data, onFilter }) => {
  // Estados para almacenar selecciones y entradas del filtro
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [sueldoMin, setSueldoMin] = useState("");
  const [sueldoMax, setSueldoMax] = useState("");

  // Obtener valores únicos para botones de empresa y área
  const companies = getUniqueCompanies(data);
  const areas = getUniqueAreas(data);

  // Maneja la selección/deselección de empresas
  const handleCompanyChange = (empresa) => {
    setSelectedCompanies((prev) =>
      prev.includes(empresa) ? prev.filter((e) => e !== empresa) : [...prev, empresa]
    );
  };

  //Maneja la selección/deselección de área
  const handleAreaChange = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  // Aplica los filtros seleccionados sobre los datos
  const handleFilter = () => {
    // Validación de sueldos
    if (
      (sueldoMin && (isNaN(sueldoMin) || sueldoMin < 0)) ||
      (sueldoMax && (isNaN(sueldoMax) || sueldoMax < 0))
    ) {
      alert("Por favor ingrese solo números positivos para el sueldo.");
      return;
    }

    // Llamada a función que filtra datos
    const filtered = applyFilters(data, {
      empresas: selectedCompanies,
      areas: selectedAreas,
      nombre,
      rut,
      sueldoMin: sueldoMin ? Number(sueldoMin) : null,
      sueldoMax: sueldoMax ? Number(sueldoMax) : null,
      });

    // Devuelve los datos filtrados al componente padre
    onFilter(filtered);
  };

  //Codigo html para selección de filtros
  return (
    <div className="section-container filter">
      <div className="filter__group">
        <h4 className="filter__group-title">Empresas:</h4>
        <div className="filter__button-group">
          {companies.map((empresa) => (
            <button
              key={empresa}
              className={`filter__company-button ${selectedCompanies.includes(empresa) ? 'filter__company-button--selected' : ''}`}
              onClick={() => handleCompanyChange(empresa)}
            >
              {empresa}
            </button>
          ))}
        </div>
      </div>

      <div className="filter__group">
        <h4 className="filter__group-title">Áreas:</h4>
        <div className="filter__button-group">
          {areas.map((area) => (
            <button
              key={area}
              className={`filter__area-button ${selectedAreas.includes(area) ? 'filter__area-button--selected' : ''}`}
              onClick={() => handleAreaChange(area)}
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      <div className="filter__group">
        <label className="filter__group-title">Nombre:</label>
        <input
          type="text"
          className="filter__input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Buscar por nombre"
        />
      </div>

      <div className="filter__group">
        <label className="filter__group-title">RUT:</label>
        <input
          type="text"
          className="filter__input"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
          placeholder="Buscar por RUT"
        />
      </div>
      <div className="filter__group">
        <label className="filter__group-title">Sueldo mínimo:</label>
        <input
          type="number"
          min="0"
          className="filter__input"
          value={sueldoMin}
          onChange={(e) => setSueldoMin(e.target.value)}
          placeholder="Ingrese sueldo mínimo"
        />
      </div>

      <div className="filter__group">
        <label className="filter__group-title">Sueldo máximo:</label>
        <input
          type="number"
          min="0"
          className="filter__input"
          value={sueldoMax}
          onChange={(e) => setSueldoMax(e.target.value)}
          placeholder="Ingrese sueldo máximo"
        />
      </div>
      <button className="filter__button" onClick={handleFilter}>
        Aplicar filtros
      </button>
    </div>
  );
};

export default Filter;
