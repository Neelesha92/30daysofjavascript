const container = document.getElementById("countriesContainer");
const searchInput = document.getElementById("search");
const count = document.getElementById("count");

let countriesData = [];
let filteredCountries = [];

// Fetching data from REST API
async function fetchCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,languages,population,flags"
  );
  const data = await res.json();

  countriesData = data.map((country) => ({
    name: country.name.common,
    capital: country.capital ? country.capital[0] : "No capital",
    languages: country.languages
      ? Object.values(country.languages).join(", ")
      : "No languages",
    population: country.population,
    flag: country.flags.png,
  }));

  filteredCountries = countriesData;
  renderCountries(countriesData);
}

function renderCountries(countries) {
  container.innerHTML = "";
  count.textContent = `Currently, we have ${countries.length} countries`;

  countries.forEach((country) => {
    const card = document.createElement("div");
    card.classList.add("country");

    card.innerHTML = `
      <img src="${country.flag}" alt="${country.name} flag" />
      <h2>${country.name}</h2>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Languages:</strong> ${country.languages}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    `;

    container.appendChild(card);
  });
}

// Search function
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  filteredCountries = countriesData.filter((country) => {
    const name = country.name ? country.name.toLowerCase() : "";
    const capital = country.capital ? country.capital.toLowerCase() : "";
    const languages = country.languages ? country.languages.toLowerCase() : "";

    return (
      name.includes(searchTerm) ||
      capital.includes(searchTerm) ||
      languages.includes(searchTerm)
    );
  });

  renderCountries(filteredCountries);
});

// Sorting functions
document.getElementById("sortName").addEventListener("click", () => {
  filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
  renderCountries(filteredCountries);
});

document.getElementById("sortCapital").addEventListener("click", () => {
  filteredCountries.sort((a, b) => {
    const capA = a.capital ? a.capital.toLowerCase() : "";
    const capB = b.capital ? b.capital.toLowerCase() : "";
    return capA.localeCompare(capB);
  });
  renderCountries(filteredCountries);
});

document.getElementById("sortPopulation").addEventListener("click", () => {
  filteredCountries.sort((a, b) => b.population - a.population);
  renderCountries(filteredCountries);
});

fetchCountries();
