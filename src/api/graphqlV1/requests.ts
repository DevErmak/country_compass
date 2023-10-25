import { gql } from '@apollo/client';
export const GET_FAVOURITECOUNTRIES = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const GET_ME = gql`
  query GetMe {
    getMe {
      FavoriteCountry {
        nameCountry
      }
    }
  }
`;
