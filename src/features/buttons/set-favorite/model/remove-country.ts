import {
  ApolloCache,
  DefaultContext,
  LazyQueryExecFunction,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { DELETE_FAVORITECOUNTRIES } from '../../../../shared/api/graphqlV1';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { Zoom, toast } from 'react-toastify';
import { updateFavoriteCountry } from './update-favorite-countries';

export const handleRemoveFavoriteCountry = async (
  nameCountry: string,
  e: React.SyntheticEvent,
  cookie: { accessToken?: any },
  dispatch: Dispatch<AnyAction>,
  deleteFavoriteCountry: (
    options?:
      | MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>>
      | undefined,
  ) => any,
  getFavoriteCountry: LazyQueryExecFunction<any, OperationVariables>,
) => {
  e.stopPropagation();

  const { error } = await deleteFavoriteCountry({
    context: {
      headers: {
        ...Headers,
        authorization: `Bearer ${cookie.accessToken}`,
      },
    },
    variables: {
      nameCountry: nameCountry,
    },
  });

  if (error)
    toast.error('country not remove', {
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
  else await updateFavoriteCountry(cookie, dispatch, getFavoriteCountry);
};
