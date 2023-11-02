import { Route, Routes } from 'react-router-dom';
import HomeContainer from './home';
import PrivateFullInfoCountry from './full-Info-country';
import MyCountries from './my-countries';
import DefaultLayout from '../widgets/layout';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomeContainer />} />
        <Route path="full-info-country" element={<PrivateFullInfoCountry />} />
        <Route path="my-countries" element={<MyCountries />} />
      </Route>
    </Routes>
  );
};
