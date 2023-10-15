import Image from "next/image";
import Link from "next/link";

const Country = ({
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
  countryFlagSVG,
  countryFlagPNG,
}) => {
  // this will give us the readble url
  const countrySlug = countryName.toLowerCase().replace(/[^a-z0-9À-ÿ]+/g, "-");
  
  // this will format the population number
  const formattedPopulation = countryPopulation.toLocaleString();

  return (
    <Link href={`/country/${countrySlug}`}>
      <li className="shadow-lg rounded-lg dark:bg-gray-700 dark:text-white">
        <Image
          src={countryFlagSVG || countryFlagPNG}
          width={300}
          height={200}
          alt={`The national flag of ${countryName}`}
          className="rounded-t-lg w-full h-44 object-cover"
        />
        <div className="p-4 h-40">
          <h1 className="font-bold">{countryName}</h1>
          <p>
            <span className="font-bold">Population:</span> {formattedPopulation}
          </p>
          <p>
            <span className="font-bold">Region:</span> {countryRegion}
          </p>
          <p>
            <span className="font-bold">Capital:</span> {countryCapital}
          </p>
        </div>
      </li>
    </Link>
  );
};

export default Country;
