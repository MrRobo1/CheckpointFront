// TODO
import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query Countries {
  countries {
    code
    name
    id
    emoji
    continent {
      id
      name
    }
  }
}
`;

export const GET_DETAILS_COUNTRIES = gql `
  query Query($code: String!) {
    country(code: $code) {
    code
    continent {
      id
      name
    }
    emoji
    id
    name
  }
}
`