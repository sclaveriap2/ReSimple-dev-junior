import { useEffect, useState } from "react";
import { getCombinedData } from "./data/combineData";
import PaginatedTable from "./components/PaginatedTable";
import KpiSection from "./components/KpiSection";
import Filter from "./components/Filter";

function App() {
  const [data, setData] = useState([]);// Estado para almacenar toda la data
  const [dataFiltered, setDataFiltered] = useState([]); // Estado para almacenar la data filtrada que se muestra en la tabla
  useEffect(() => {
    const fetchData = async () => {
      const result = await getCombinedData();// Obtener la data combinada
      setData(result);// Guardar data completa
      setDataFiltered(result); // Inicializar tabla con toda la data
    };
    fetchData();// Se ejecuta solo una vez al montar el componente
  }, []);

  return (
    <div>
      
      <Filter data={data} onFilter={setDataFiltered} />
      <PaginatedTable data={dataFiltered} />
      <KpiSection data={data} /> 
    </div>
  );
}

export default App;

