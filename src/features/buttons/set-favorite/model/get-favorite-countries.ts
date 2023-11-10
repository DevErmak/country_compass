// import { useQuery } from '@apollo/client';
// import { GET_FAVOURITECOUNTRIES } from '../../../../shared/api/graphqlV1';
// import { useCookies } from 'react-cookie';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addFavoriteCountry } from '../../../../entities/viewer/model/user/infoUserSlice';
// import { AnyAction, Dispatch } from '@reduxjs/toolkit';

// export const GetFavoriteCountry = (
//   cookie: { accessToken?: any },
//   dispatch: Dispatch<AnyAction>,
//   getFavoriteCountry: () => any,
// ) => {
//   // getFavoriteCountry({
//   //   context: {
//   //     headers: {
//   //       ...Headers,
//   //       authorization: `Bearer ${cookie.accessToken}`,
//   //     },
//   //   },
//   // });
//   useEffect(() => {
//     if (data) {
//       if (data.getMe.FavoriteCountry) {
//         dispatch(addFavoriteCountry(data.getMe.FavoriteCountry));
//       }
//     }
//   }, [data]);
// };
