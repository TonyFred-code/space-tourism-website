let cache = null;

export default async function fetchData() {
  if (cache) return cache;

  try {
    const response = await fetch("/data.json");

    if (!response.ok) throw new Error("Network response was not ok.");

    const data = await response.json();

    if (!data.destinations || !data.crew || !data.technology)
      throw new Error("Data fetch failed");

    cache = data;
    return data;
  } catch (error) {
    console.error("Failed to fetch data: ", error);
    throw error;
  }
}
