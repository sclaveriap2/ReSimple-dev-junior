import { useEffect, useState } from "react";
import { getCombinedData } from "./data/combineData"; // combina Excel + JSON
import PaginatedTable from "./components/PaginatedTable";
import KpiSection from "./components/KpiSection";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCombinedData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Trabajadores</h1>
      <PaginatedTable data={data} />
      <KpiSection data={data} />
    </div>
  );
}

export default App;
