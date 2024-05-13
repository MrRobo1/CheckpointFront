import CountryCardProps from '../types';
import Link from 'next/link';

const CountryCard = ({ code, name, emoji }: CountryCardProps) => {
    return (
        <Link className="border p-4 rounded" href={`${code}`}>
          <div className="text-xl">{name}</div>
          <div className="text-2xl">{emoji}</div>
      </Link>
    );
  };
  
export default CountryCard;