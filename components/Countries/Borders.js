import Link from "next/link";
const iso = require('iso-3166-1');

const Borders = ({ countryBorders }) => {

  return (
    <>
      {countryBorders.map((border) => (
        <Link
          key={border}
          href={`/country/${iso.whereAlpha3(border).country.replace(/ /g, "-").toLowerCase()}`}
          className="shadow-xl p-2 ml-4 rounded-sm dark:bg-gray-700"
        >
          <span>{border}</span>
        </Link>
      ))}
    </>
  );
};

export default Borders;
