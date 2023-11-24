import { LazyQueryExecFunction, OperationVariables, useQuery } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFavoriteCountry } from '../../../../entities/viewer/model/user/infoUserSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { Zoom, toast } from 'react-toastify';

export const updateFavoriteCountry = async (
  cookie: { accessToken?: any },
  dispatch: Dispatch<AnyAction>,
  getFavoriteCountry: LazyQueryExecFunction<any, OperationVariables>,
) => {
  const { data, error } = await getFavoriteCountry({
    context: {
      headers: {
        ...Headers,
        authorization: `Bearer ${cookie.accessToken}`,
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
  else if (data) dispatch(addFavoriteCountry(data.getMe.FavoriteCountry));
};
