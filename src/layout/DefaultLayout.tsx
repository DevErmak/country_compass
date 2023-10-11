import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { getIsAuthentication } from '../store/user/userSelectors';
import Loader from '../components/loader/Loader';
import { getIsLoading } from '../store/country/countriesSelectors';

type Props = {};

export default function DefaultLayout({}: Props) {
  // const isLoading = useSelector(getIsLoading);
  // if (isLoading) {
  //   <Loader />;
  // } else {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
  // }
}
