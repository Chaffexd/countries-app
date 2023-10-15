import Image from "next/image";
import Borders from "./Borders";

const CountryDetail = ({
  countryFlag,
  countryAlt,
  countryName,
  nativeName,
  countryPopulation,
  countryRegion,
  countrySubRegion,
  countryCapital,
  countryTopLevelDomain,
  countryCurrencies,
  countryLanguages,
  countryBorders,
}) => {
  const currencyCode = Object.keys(countryCurrencies).map((code) => ({
    code,
    data: countryCurrencies[code],
  }));
  // console.log(currencyCode[0].data.name)
  const countryCurrency = currencyCode[0].data.name;

  const languages = Object.keys(countryLanguages).map((language) => ({
    language,
    name: countryLanguages[language],
  }));
  // console.log(languages.map((lang) => lang.name));
  // prints: [ 'German', 'French', 'Dutch' ]
  const formattedLanguages = languages.map((lang) => lang.name).join(', ');

  return (
    <>
      <div className="w-1/2">
        <Image src={countryFlag} alt={countryAlt} width={550} height={550} className="w-5/6 h-96" />
      </div>
      <div className="p-8 w-1/2 flex flex-col justify-around">
        <h1 className="font-bold">{countryName}</h1>
        <div className="flex justify-between">
          <div>
            <p className="mb-2">
              <span>Native Name:</span> {nativeName}
            </p>
            <p className="mb-2">
              <span>Population:</span> {countryPopulation}
            </p>
            <p className="mb-2">
              <span>Region:</span> {countryRegion}
            </p>
            <p className="mb-2">
              <span>Sub Region:</span> {countrySubRegion}
            </p>
            <p>
              <span>Capital:</span> {countryCapital}
            </p>
          </div>
          <div>
            <p className="mb-2">
              <span>Top Level Domain:</span> {countryTopLevelDomain}
            </p>
            <p className="mb-2">
              <span>Currencies:</span> {countryCurrency}
            </p>
            <p>
              <span>Languages: </span>
              {formattedLanguages}
            </p>
          </div>
        </div>
        <p>Border countries: {countryBorders && countryBorders.length > 0 && (<Borders countryBorders={countryBorders} countryName={countryName}  />)}</p>
      </div>
    </>
  );
};

export default CountryDetail;
