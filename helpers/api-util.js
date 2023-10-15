export async function getAllCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");

  if (!response.ok) {
    throw new Error("Failed to fetch data...");
  }

  const data = await response.json();

  return data;
}

export async function getSingleCountry(countryId) {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch this countries data..");
  }

  const data = await response.json();

  return data;
}
