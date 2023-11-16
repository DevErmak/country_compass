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
  if (!isFullInfoCountry) navigate('/');
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
          path: 'full-info-country',
          element: (
            <FullInfoCountryGuard>
              <FullInfoCountry />
            </FullInfoCountryGuard>
          ),
        },
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
