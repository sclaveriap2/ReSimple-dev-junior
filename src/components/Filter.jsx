import { useState } from "react";
import { getUniqueCompanies, getUniqueAreas, applyFilters } from "../utils/filterUtils";
import "./Filter.css"; // Importar estilos

const Filter = ({ data, onFilter }) => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");

  const companies = getUniqueCompanies(data);
  const areas = getUniqueAreas(data);

  const handleCompanyChange = (empresa) => {
    setSelectedCompanies((prev) =>
      prev.includes(empresa) ? prev.filter((e) => e !== empresa) : [...prev, empresa]
    );
  };

  const handleAreaChange = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleFilter = () => {
    const filtered = applyFilters(data, {
      empresas: selectedCompanies,
      areas: selectedAreas,
      nombre,
      rut,
    });
    onFilter(filtered);
  };

  return (
    <div className="filter">
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

      <button className="filter__button" onClick={handleFilter}>
        Aplicar filtros
      </button>
    </div>
  );
};

export default Filter;
