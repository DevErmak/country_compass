import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { getIsAuthentication } from '../store/user/userSelectors';

type Props = {};

export default function DefaultLayout({}: Props) {
  const isAuth = useSelector(getIsAuthentication);

  console.log('---------------->LayoutisAuth', isAuth);
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
