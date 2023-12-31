import { gql } from '@apollo/client';
export const GET_FAVORITECOUNTRIES = gql`
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

export const SET_FAVORITECOUNTRIES = gql`
  mutation CreateFavoriteCountry($createFavoriteCountry: CreateCountryInput!) {
    CreateFavoriteCountry(CreateFavoriteCountry: $createFavoriteCountry) {
      nameCountry
    }
  }
`;

export const DELETE_FAVORITECOUNTRIES = gql`
  mutation DeleteFavoriteCountry($nameCountry: String!) {
    DeleteFavoriteCountry(nameCountry: $nameCountry)
  }
`;

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
