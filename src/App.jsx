import PaginatedTable from "./components/PaginatedTable";

function App() {
  const emptyData = []; // Por ahora vacía

  return (
    <div className="app__container">
      <h1>Página Principal</h1>
      <PaginatedTable data={emptyData} />
    </div>
  );
}

export default App;

