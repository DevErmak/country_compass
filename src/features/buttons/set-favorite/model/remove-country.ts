import {
  ApolloCache,
  DefaultContext,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
} from '@apollo/client';
import { DELETE_FAVOURITECOUNTRIES } from '../../../../shared/api/graphqlV1';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export const handleRemoveFavoriteCountry = (
  nameCountry: string,
  e: React.SyntheticEvent,
  cookie: { accessToken?: any },
  // dispatch: Dispatch<AnyAction>,
  deleteFavoriteCountry: (
    options?:
      | MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>>
      | undefined,
  ) => any,
) => {
  // const [deleteFavoriteCountry, { data, loading, error }] = useMutation(DELETE_FAVOURITECOUNTRIES);
  e.stopPropagation();

  deleteFavoriteCountry({
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
};
