export async function getData() {
  try {
    const response = await fetch("https://swapi.dev/api/people/1/");

    if (!response.ok) {
      throw new Error(`Ошибка при загрузке: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
