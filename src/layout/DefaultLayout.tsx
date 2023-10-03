import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

type Props = {};

export default function layout({}: Props) {
  return (
    <>
      <Header isLogin={false} />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
