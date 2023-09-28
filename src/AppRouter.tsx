import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PrivateFullInfoCountry from './pages/PrivateFullInfoCountry';
import FullInfoCountry from './pages/FullInfoCountry';
import { Provider } from 'react-redux';
import { store } from './store/index';
import DefaultLayout from './layout/DefaultLayout';

function AppRouter() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route element={<PrivateFullInfoCountry />}>
              <Route path="full-info-country" element={<FullInfoCountry />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default AppRouter;
