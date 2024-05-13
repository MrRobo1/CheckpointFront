import React from 'react';
import { useQuery } from '@apollo/client';
import CountriesList from '../components/CountriesList';
import {GET_COUNTRIES} from '../graphql/client';


const CountriesListPage = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  console.log('data :', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">List of Countries</h1>
      <CountriesList countries={data.countries} />
    </div>
  );
};

export default CountriesListPage;