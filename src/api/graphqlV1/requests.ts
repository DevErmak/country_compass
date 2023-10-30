import { gql } from '@apollo/client';
export const GET_FAVOURITECOUNTRIES = gql`
  query GetMe {
    getMe {
      FavoriteCountry {
        coatOfArms
        currencies
        flags
        flagsAlt
        languages
        nameCapital
        nameCountry
        population
        region
      }
    }
  }
`;

export const SET_FAVOURITECOUNTRIES = gql`
  mutation CreateFavoriteCountry($createFavoriteCountry: CreateCountryInput!) {
    CreateFavoriteCountry(CreateFavoriteCountry: $createFavoriteCountry) {
      nameCountry
    }
  }
`;

export const DELETE_FAVOURITECOUNTRIES = gql`
  mutation DeleteFavoriteCountry($nameCountry: String!) {
    DeleteFavoriteCountry(nameCountry: $nameCountry)
  }
`;

// export const GET_ME = gql`
//   query GetMe {
//     getMe {
//       FavoriteCountry {
//         nameCountry
//       }
//     }
//   }
// `;

export const REGISTER = gql`
  mutation RegisterUser($createUser: CreateUserInput!) {
    registerUser(createUser: $createUser) {
      token
    }
  }
`;

export const LOGIN = gql`
  query Login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      token
    }
  }
`;
