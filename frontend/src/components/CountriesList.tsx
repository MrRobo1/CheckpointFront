
import CountryCard from './CountryCard';

interface Country {
  id: number;
  name: string;
  emoji: string;
  code: string;
}

type CountriesListProps = {
  countries: Country[];
}

const CountriesList = ({ countries } : CountriesListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {countries.map((country, id) => (
        <CountryCard id={id} name={country.name} emoji={country.emoji} code={country.code} />
      ))}
    </div>
  );
};

export default CountriesList;