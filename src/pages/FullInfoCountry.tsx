import { useSelector } from 'react-redux';
import { getFullInfoCountry } from '../store/country/countriesSelectors';
// import { Navigate, Outlet, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

type Props = {};

export default function PrivateFullInfoCountry({}: Props) {
  //   const navigate = useNavigate();
  const fullInfoCountry = useSelector(getFullInfoCountry);
  console.log(fullInfoCountry);
  //   useEffect(() => {
  //     if (typeof fullInfoCountry === 'undefined') {
  //       console.log('undef');
  //       navigate('/');
  //     } else if (fullInfoCountry.length === 0) {
  //       console.log('posto');
  //       navigate('/');
  //     }
  //   }, []);
  return <div>asdasdasd</div>;
}
