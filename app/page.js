"use client";
import { useState, useEffect } from "react";
import CountryGrid from "@/components/Countries/CountryGrid";
import Dropdown from "@/components/Search/Dropdown";
import InputBar from "@/components/Search/InputBar";
import { getAllCountries } from "@/helpers/api-util";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [region, setRegion] = useState(null);

  console.log(region)
  console.log(searchResults)

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        setAllCountries(data);
      })
      .catch((error) => {
        console.error("There's an error: " + error);
      });
  }, []);

  const handleSearch = (query) => {
    // filter through all results
    // const filteredResults = allCountries.filter((country) =>
    // by the common name in lower case comparing it to the query which is typed in
    // country.name.common.toLowerCase().includes(query.toLowerCase())
    //)
    // then store it in a state
    // setSearchResults(filteredResults);

    const filteredResults = filterCountries(allCountries, region, query);
    console.log(filteredResults)

    setSearchResults(filteredResults);
  };

  const filterCountries = (countries, selectedRegion, searchQuery) => {
    return countries.filter((country) => {
      const matchesRegion = selectedRegion
        ? country.region === selectedRegion
        : true;
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesRegion && matchesSearch;
    });
  };

  useEffect(() => {
    // this will trigger if region updates, so if region is not null, filter again based on region
    if(region !== null) {
      const filteredResults = filterCountries(allCountries, region, "");

      setSearchResults(filteredResults)
    }

  } , [region])

  return (
    <>
      <section className="pt-12 dark:bg-gray-800">
        <div className="lg:flex justify-between mb-12">
          <InputBar onSearch={handleSearch} />
          <Dropdown onSelectRegion={setRegion} region={region} />
        </div>
      </section>
      <section>
        <CountryGrid
          allCountries={searchResults.length > 0 ? searchResults : allCountries}
        />
      </section>
    </>
  );
}
