import CountryGrid from "@/components/Countries/CountryGrid";
import Dropdown from "@/components/Search/Dropdown";
import InputBar from "@/components/Search/InputBar";
import { getAllCountries } from "@/helpers/api-util";

export default async function Home() {
  const allCountries = await getAllCountries();

  return (
    <>
      <section className="pt-12">
        <div className="flex justify-between mb-12">
          <InputBar />
          <Dropdown />
        </div>
      </section>
      <section>
        <CountryGrid 
          allCountries={allCountries}
        />
      </section>
    </>
  );
}
