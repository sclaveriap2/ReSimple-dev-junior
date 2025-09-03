export const readJsonData = async () => {
  try {
    const response = await fetch("/dicionario-de-datos.json"); // asegúrate del nombre correcto
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error leyendo JSON:", error);
    return null;
  }
};