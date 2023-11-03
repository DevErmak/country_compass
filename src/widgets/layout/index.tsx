import { Outlet } from 'react-router-dom';
import Header from '../header';

type Props = {};

export default function DefaultLayout({}: Props) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
