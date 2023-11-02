import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

type Props = {};

export default function DefaultLayout({}: Props) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
