import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {};

export default function layout({}: Props) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}