import Image from "next/image"

const Country = ({ countryName, countryPopulation, countryRegion, countryCapital, countryFlagSVG, countryFlagPNG }) => {
  return (
    <li className="shadow-lg">
        <Image 
            src={countryFlagSVG || countryFlagPNG}
            width={300}
            height={200}
        />
        <div>
            <h1 className="font-bold">{countryName}</h1>
            <p><span className="font-bold">Population:</span> {countryPopulation}</p>
            <p><span className="font-bold">Region:</span> {countryRegion}</p>
            <p><span className="font-bold">Capital:</span> {countryCapital}</p>
        </div>
    </li>
  )
}

export default Country