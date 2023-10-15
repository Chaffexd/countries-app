import CountryDetail from "@/components/Countries/CountryDetail";
import Button from "@/components/UI/Button";
import { getAllCountries, getSingleCountry } from "@/helpers/api-util";

export async function generateStaticParams() {
  const allCountryData = await getAllCountries();

  const allSlugs = allCountryData.map((country) =>
    country.name.official.replace(/ /g, "-")
  );

  return allSlugs.map((slug) => ({
    params: {
      slug: slug,
    },
  }));
}

const CountryDetailPage = async ({ params }) => {
  // returns country-name, in that format
  const { slug } = params;

  // this removes any hyphons
  const unformattedSlug = slug.replace(/-/g, " ");

  // fetch the single country data using the slug
  const singleCountryData = await getSingleCountry(unformattedSlug);

  const countryFlag = singleCountryData[0].flags.svg;
  const countryAlt = singleCountryData[0].flags.alt;
  const countryName = singleCountryData[0].name.official;
  const nativeName = singleCountryData[0].altSpellings[1];
  const countryPopulation = singleCountryData[0].population.toLocaleString();
  const countryRegion = singleCountryData[0].region;
  const countrySubRegion = singleCountryData[0].subregion;
  const countryCapital = singleCountryData[0].capital[0];
  const countryTopLevelDomain = singleCountryData[0].tld[0];
  const countryCurrencies = singleCountryData[0].currencies;
  const countryLanguages = singleCountryData[0].languages;
  const countryBorders = singleCountryData[0].borders;

  return (
    <article className="pt-12">
      <Button />
      <div className="flex gap-8">
        <CountryDetail 
            countryFlag={countryFlag}
            countryAlt={countryAlt}
            countryName={countryName}
            nativeName={nativeName}
            countryPopulation={countryPopulation}
            countryRegion={countryRegion}
            countrySubRegion={countrySubRegion}
            countryCapital={countryCapital}
            countryTopLevelDomain={countryTopLevelDomain}
            countryCurrencies={countryCurrencies}
            countryLanguages={countryLanguages}
            countryBorders={countryBorders}
        />
      </div>
    </article>
  );
};

export default CountryDetailPage;
