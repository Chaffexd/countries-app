"use client"; 

import Image from "next/image";
import Borders from "./Borders";
import { motion } from "framer-motion";

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
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="w-full lg:flex lg:flex-row flex flex-col">
      <div className="lg:w-1/2 w-full">
        <Image src={countryFlag} alt={countryAlt || `The flag of ${countryName}`} width={550} height={550} className="lg:w-5/6 w-full lg:h-96 h-62" />
      </div>
      <div className="lg:p-8 pt-8 lg:w-1/2 w-full flex flex-col justify-around dark:text-white">
        <h1 className="font-bold">{countryName}</h1>
        <div className="flex lg:justify-between flex-col">
          <div className="">
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
        <p className="flex items-center flex-wrap">Border countries: {countryBorders && countryBorders.length > 0 ? (<Borders countryBorders={countryBorders} />) : "No border countries"}</p>
      </div>
    </motion.div>
  );
};

export default CountryDetail;
