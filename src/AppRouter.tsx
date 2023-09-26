import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Newpage from './pages/Newpage';
import { Provider } from 'react-redux';
import { store } from './store';
import DefaultLayout from './layout/DefaultLayout';

function AppRouter() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default AppRouter;
