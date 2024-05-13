import { useQuery } from "@apollo/client";
import { GET_DETAILS_COUNTRIES } from "../graphql/client";
import { useRouter } from "next/router";

const CountryDetailsPage = () => {
  const router = useRouter();
  const { countryCode } = router.query;

  const { loading, error, data } = useQuery(GET_DETAILS_COUNTRIES, {
    variables: { code: String(countryCode) },
  });

  if (loading) return <div>Chargement...</div>;
  if (error) return `Error! ${error.message}`;

  const { country } = data;

  if (!country) return <div>Pays non trouvé</div>;

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Code: {country.code}</p>
      <p>Emoji: {country.emoji}</p>
      {country.continent && <p>Continent: {country.continent.name}</p>}
    </div>
  );
};

export default CountryDetailsPage;
