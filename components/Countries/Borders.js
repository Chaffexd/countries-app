import Link from "next/link";
const iso = require('iso-3166-1');

const Borders = ({ countryBorders, countryName }) => {
  console.log(countryBorders, countryName);

  const borderURL = countryName.replace(/ /g, "-").toLowerCase();
  console.log(borderURL);

    console.log(iso.whereAlpha3("FRA"))

  return (
    <>
      {countryBorders.map((border) => (
        <Link
          key={border}
          href={`/country/${iso.whereAlpha3(border).country.replace(/ /g, "-")}`}
          className="shadow-xl p-2 ml-4"
        >
          <span>{border}</span>
        </Link>
      ))}
    </>
  );
};

export default Borders;
