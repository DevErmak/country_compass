import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FullInfoCountry from './pages/FullInfoCountry';
import MyCountries from './pages/MyCountries';
import { Provider } from 'react-redux';
import { store } from './store/index';
import DefaultLayout from './layout/DefaultLayout';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
  HttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import { useCookies } from 'react-cookie';

function AppRouter() {
  // const link = createHttpLink({
  //   uri: 'http://localhost:3500/graphql',
  //   credentials: 'include',
  // });

  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   link,
  //   defaultOptions: {
  //     watchQuery: {
  //       fetchPolicy: 'no-cache',
  //     },
  //     query: {
  //       fetchPolicy: 'no-cache',
  //     },
  //   },
  // });
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    console.log('---------------->graphQLErrors', graphQLErrors);
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            if (Object.keys(cookie).length !== 0) {
              console.log('---------------->cookie', cookie);
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
    if (networkError) console.log(`[Network error]: ${networkError}`);
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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path="full-info-country" element={<FullInfoCountry />} />
              <Route path="my-countries" element={<MyCountries />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
}

export default AppRouter;
