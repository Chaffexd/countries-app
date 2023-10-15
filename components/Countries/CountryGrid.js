import Country from "./Country";

const CountryGrid = ({ allCountries }) => {

    // name = allCountries.name.official
    // population = allCountries.population
    // region = allCountries.region
    // capital = allCountries.capital

  return (
    <div>
      <ul className="grid grid-cols-4 gap-12">
        {allCountries.map((country) => (
          <Country 
            key={country.name.official}
            countryName={country.name.common}
            countryPopulation={country.population}
            countryRegion={country.region}
            countryCapital={country.capital}
            countryFlagSVG={country.flags.svg}
            countryFlagPNG={country.flags.png}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountryGrid;
