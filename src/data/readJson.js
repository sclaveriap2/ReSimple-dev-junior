// Función para leer datos desde un archivo JSON
export const readJsonData = async () => {
  try {
    // Hacer fetch del archivo JSON desde la ruta pública
    const response = await fetch("/dicionario-de-datos.json"); // Asegúrate de que el nombre del archivo sea correcto
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    // Convertir la respuesta a objeto JavaScript
    const data = await response.json();

    return data;// Retornar los datos leídos
  } catch (error) {
    console.error("Error leyendo JSON:", error);// Mostrar error en consola si ocurre
    return null;// Retornar null en caso de error
  }
};