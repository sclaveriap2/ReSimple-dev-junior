const KpiSection = ({ rows }) => {
  if (!rows || rows.length === 0) return <p>No hay datos para mostrar KPIs</p>;

  // Inicializar estadísticas
  const empresaStats = {};
  const areaStats = {};

  rows.forEach(worker => {
    const empresa = worker.empresa || "Desconocida";
    const area = worker.area || "Desconocida";
    const sueldo = worker.sueldo || 0; // asumimos que en combineData ya agregaste el sueldo del JSON

    // Número de trabajadores por empresa
    if (!empresaStats[empresa]) {
      empresaStats[empresa] = { trabajadores: 0, gastoSueldos: 0 };
    }
    empresaStats[empresa].trabajadores += 1;
    empresaStats[empresa].gastoSueldos += sueldo;

    // Número de trabajadores por área
    if (!areaStats[area]) {
      areaStats[area] = { trabajadores: 0, gastoSueldos: 0 };
    }
    areaStats[area].trabajadores += 1;
    areaStats[area].gastoSueldos += sueldo;
  });

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>📊 KPIs de todos los trabajadores</h3>

      <h4>📌 Número de trabajadores por empresa</h4>
      <ul>
        {Object.entries(empresaStats).map(([empresa, stats], i) => (
          <li key={i}>
            <strong>{empresa}</strong>: {stats.trabajadores} trabajadores
          </li>
        ))}
      </ul>

      <h4>📌 Gastos totales mensuales por empresa</h4>
      <ul>
        {Object.entries(empresaStats).map(([empresa, stats], i) => (
          <li key={i}>
            <strong>{empresa}</strong>: ${stats.gastoSueldos.toLocaleString()}
          </li>
        ))}
      </ul>

      <h4>📌 Número de trabajadores por área</h4>
      <ul>
        {Object.entries(areaStats).map(([area, stats], i) => (
          <li key={i}>
            <strong>{area}</strong>: {stats.trabajadores} trabajadores
          </li>
        ))}
      </ul>

      <h4>📌 Gastos totales mensuales por área</h4>
      <ul>
        {Object.entries(areaStats).map(([area, stats], i) => (
          <li key={i}>
            <strong>{area}</strong>: ${stats.gastoSueldos.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KpiSection;
