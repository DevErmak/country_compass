import { useSelector } from 'react-redux';
import {
  getFullInfoCountry,
  getState,
  isFullInfoCountry,
} from '../store/country/countriesSelectors';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type Props = {};

export default function PrivateFullInfoCountry({}: Props) {
  //   const navigate = useNavigate();
  const ff = useSelector(isFullInfoCountry);
  console.log(ff);
  // let ff = false;
  // useEffect(() => {
  //   if (typeof fullInfoCountry === 'undefined') {
  //     console.log('undef');
  //     ff = false;
  //   } else ff = true;

  //   if (fullInfoCountry?.length === 0) {
  //     console.log('posto');
  //     ff = false;
  //   } else ff = true;
  // }, []);
  // return fullInfoCountry ? <Outlet /> : <Navigate to="/" />;
  return ff ? <Outlet /> : <Navigate to="/" />;
}
