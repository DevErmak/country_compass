// import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import FullInfoCountry from './pages/FullInfoCountry';
// import MyCountries from './pages/MyCountries';
import { Provider } from 'react-redux';
// import DefaultLayout from './layout/DefaultLayout';
// import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client';
// import { onError } from '@apollo/client/link/error';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import { store } from './appStore';
import { appRouter } from './appRouter';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';

import './index.scss';
import { useCookies } from 'react-cookie';
import { onError } from '@apollo/client/link/error';
import { useDispatch } from 'react-redux';
import { setAuthentication } from '../entities/viewer/model/user/infoUserSlice';
import { useEffect } from 'react';

function AppRouter() {
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);
  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            if (Object.keys(cookie).length !== 0) {
              toast.error('you are unauthenticated', {
                position: 'bottom-left',
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: Zoom,
              });
            }
            break;
          case 'INTERNAL_SERVER_ERROR':
            switch (err.message) {
              case 'User has been registered':
                toast.error('User has been registered', {
                  position: 'bottom-left',
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
                  transition: Zoom,
                });
                break;
              case 'User not found':
                toast.error('User not found', {
                  position: 'bottom-left',
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
                  transition: Zoom,
                });
                break;
              default:
                toast.error('we are maintenance', {
                  position: 'bottom-left',
                  autoClose: 1500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
                  transition: Zoom,
                });
                removeCookie('accessToken');
            }
        }
        return forward(operation);
      }
    }
    if (networkError) {
      toast.error('server is unavailable', {
        position: 'bottom-left',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Zoom,
      });
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const httpLink = new HttpLink({ uri: 'http://localhost:3500/graphql' });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
        fetchPolicy: 'no-cache',
      },
    },
  });

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={appRouter()} />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path="full-info-country" element={<FullInfoCountry />} />
              <Route path="my-countries" element={<MyCountries />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
      </Provider>
    </ApolloProvider>
  );
}

export default AppRouter;
