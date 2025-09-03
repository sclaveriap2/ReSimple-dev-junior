import { useEffect, useState } from "react";
import { getCombinedData } from "./data/combineData";
import PaginatedTable from "./components/PaginatedTable";
import KpiSection from "./components/KpiSection";
import Filter from "./components/Filter";

function App() {
  const [data, setData] = useState([]); // data completa
  const [dataFiltered, setDataFiltered] = useState([]); // data que verá la tabla

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCombinedData();
      setData(result);
      setDataFiltered(result); // inicializa la tabla con toda la data
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Trabajadores</h1>
      <Filter data={data} setDataFiltered={setDataFiltered} />
      <PaginatedTable data={dataFiltered} />
      <KpiSection data={data} /> {/* KPIs siempre con la data completa */}
    </div>
  );
}

export default App;

