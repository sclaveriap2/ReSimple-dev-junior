import { useState } from "react";

const Filter = ({ data, setDataFiltered }) => {
  const [filterType, setFilterType] = useState("empresa");
  const [searchValue, setSearchValue] = useState("");

  // Normaliza RUT eliminando puntos y guión
  const normalizeRut = (rut) => rut.replace(/\./g, "").replace(/-/g, "").toLowerCase();

  // Obtiene listas únicas para los dropdowns
  const empresas = ["Todos", ...new Set(data.map((d) => d.empresa))];
  const areas = ["Todos", ...new Set(data.map((d) => d.area))];

  const handleFilter = () => {
    if (searchValue === "Todos" || searchValue === "") {
      setDataFiltered(data); // Muestra todos los datos
      return;
    }

    const filteredData = data.filter((worker) => {
      switch (filterType) {
        case "empresa":
          return worker.empresa === searchValue;
        case "area":
          return worker.area === searchValue;
        case "nombre":
          return worker.nombre.toLowerCase().includes(searchValue.toLowerCase());
        case "rut":
          return normalizeRut(worker.rut).includes(normalizeRut(searchValue));
        default:
          return true;
      }
    });

    setDataFiltered(filteredData);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        Filtrar por:{" "}
        <select
          value={filterType}
          onChange={(e) => { setFilterType(e.target.value); setSearchValue(""); }}
        >
          <option value="empresa">Empresa</option>
          <option value="area">Área</option>
          <option value="nombre">Nombre</option>
          <option value="rut">RUT</option>
        </select>
      </label>

      {filterType === "empresa" && (
        <select
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          {empresas.map((empresa) => (
            <option key={empresa} value={empresa}>{empresa}</option>
          ))}
        </select>
      )}

      {filterType === "area" && (
        <select
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          {areas.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      )}

      {(filterType === "nombre" || filterType === "rut") && (
        <input
          type="text"
          placeholder={`Buscar ${filterType}`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      )}

      <button onClick={handleFilter} style={{ marginLeft: "10px" }}>Filtrar</button>
    </div>
  );
};

export default Filter;

