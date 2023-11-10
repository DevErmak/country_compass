import {
  ApolloCache,
  DefaultContext,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { SET_FAVOURITECOUNTRIES } from '../../../../shared/api/graphqlV1';
import { useCookies } from 'react-cookie';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export const handleAddFavoriteCountry = (
  fullInfoCountry: {
    nameCountry: string;
    nameCapital: string;
    currencies: string;
    region: string;
    languages: string;
    population: string;
    flags: string;
    flagsAlt: string;
    coatOfArms: string;
  },
  e: React.SyntheticEvent,
  cookie: { accessToken?: any },
  setFavoriteCountry: (
    options?:
      | MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>>
      | undefined,
  ) => any,
) => {
  e.stopPropagation();
  setFavoriteCountry({
    context: {
      headers: {
        ...Headers,
        authorization: `Bearer ${cookie.accessToken}`,
      },
    },
    variables: {
      createFavoriteCountry: {
        coatOfArms: fullInfoCountry.coatOfArms,
        currencies: fullInfoCountry.currencies,
        flags: fullInfoCountry.flags,
        flagsAlt: fullInfoCountry.flagsAlt || '',
        languages: fullInfoCountry.languages,
        nameCapital: fullInfoCountry.nameCapital,
        nameCountry: fullInfoCountry.nameCountry,
        population: fullInfoCountry.population,
        region: fullInfoCountry.region,
      },
    },
  });
};
