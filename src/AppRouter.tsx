import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FullInfoCountry from './pages/FullInfoCountry';
import MyCountries from './pages/MyCountries';
import { Provider } from 'react-redux';
import { store } from './store/index';
import DefaultLayout from './layout/DefaultLayout';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

function AppRouter() {
  // const link = createHttpLink({
  //   uri: 'http://localhost:3500/graphql',
  //   credentials: 'include',
  // });

  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   link,
  // });

  const errorLink = onError(({ graphQLErrors, networkError, response, operation }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
    // @ts-ignore
    response.errors = { errorPolicy: 'all' };
  });

  const httpLink = createHttpLink({ uri: 'http://localhost:3500/graphql' });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
  });
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
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
