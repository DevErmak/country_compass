import {
  ApolloCache,
  DefaultContext,
  LazyQueryExecFunction,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { SET_FAVORITECOUNTRIES } from '../../../../shared/api/graphqlV1';
import { useCookies } from 'react-cookie';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { Zoom, toast } from 'react-toastify';
import { updateFavoriteCountry } from './update-favorite-countries';

export const handleAddFavoriteCountry = async (
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
  cookie: { accessToken?: any },
  setFavoriteCountry: (
    options?:
      | MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>>
      | undefined,
  ) => any,
  getFavoriteCountry: LazyQueryExecFunction<any, OperationVariables>,
  dispatch: Dispatch<AnyAction>,
  e?: React.SyntheticEvent,
) => {
  if (e) e.stopPropagation();
  const { error } = await setFavoriteCountry({
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

  if (error)
    toast.error('country not add', {
      position: 'bottom-left',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Zoom,
    });
  else {
    updateFavoriteCountry(cookie, dispatch, getFavoriteCountry);
  }
};
