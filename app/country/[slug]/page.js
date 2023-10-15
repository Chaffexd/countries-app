import { getSingleCountry } from "@/helpers/api-util";

export async function generateStaticParams() {
    const singleCountryData = await getSingleCountry("france")

    console.log(singleCountryData)

    return singleCountryData
};

const CountryDetailPage = ({ params }) => {
  // returns country-name, in that format
  const { slug } = params;

  // this removes any hyphons
  const unformattedSlug = slug.replace(/-/g, " ");

  return <div>This is {unformattedSlug}</div>;
};

export default CountryDetailPage;
