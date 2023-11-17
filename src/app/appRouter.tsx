import { ReactElement, useEffect } from 'react';
import { Navigate, createBrowserRouter, useNavigate } from 'react-router-dom';
import Home from '../pages/home';
import FullInfoCountry from '../pages/full-Info-country';
import MyCountries from '../pages/my-countries';
import DefaultLayout from '../widgets/layout';
import { useSelector } from 'react-redux';
import { getIsAuthentication } from '../entities/viewer/model/user/userSelectors';
import {
  getFormatFullInfoCountry,
  getIsFullInfoCountry,
} from '../entities/country/model/country/countriesSelectors';
import { useDispatch } from 'react-redux';
import { getFullInfoCountryFetch } from '@/entities/country/model/country/infoCountrySlice';

type AuthGuardProps = {
  children: ReactElement;
};

function AuthGuard({ children }: AuthGuardProps) {
  const isAuthorized = useSelector(getIsAuthentication);
  const navigate = useNavigate();
  if (!isAuthorized) navigate('/');
  return children;
}

type fullInfoCountryGuardProps = {
  children: ReactElement;
};

function FullInfoCountryGuard({ children }: fullInfoCountryGuardProps) {
  const isFullInfoCountry = useSelector(getFormatFullInfoCountry);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log('1111---------------->!isFullInfoCountry', !isFullInfoCountry);
  //   console.log('1111---------------->isFullInfoCountry', isFullInfoCountry);
  //   if (!isFullInfoCountry) {
  //     navigate('/');
  //   }
  // }, []);
  // dispatch(getFullInfoCountryFetch(nameCountry));

  if (!isFullInfoCountry) {
    navigate('/');
  }
  return children;
}

export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'detailed-info/:nameCountry',
          element: (
            // <FullInfoCountryGuard>
            <FullInfoCountry />
            // </FullInfoCountryGuard>
          ),
        },
        // {
        //   path: 'detailed-info?country=nameCountry',
        //   element: (
        //     // <FullInfoCountryGuard>
        //     <FullInfoCountry />
        //     // </FullInfoCountryGuard>
        //   ),
        // },
        {
          path: 'my-countries',
          element: (
            <AuthGuard>
              <MyCountries />
            </AuthGuard>
          ),
        },
      ],
    },
  ]);
