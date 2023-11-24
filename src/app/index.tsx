import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './appStore';
import { appRouter } from './appRouter';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';

import './index.scss';
import { useCookies } from 'react-cookie';
import { handlerGraphQLErrors } from './model/handlerGraphQLErrors';

function AppRouter() {
  const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);
  const errorLink = handlerGraphQLErrors(cookie, removeCookie);
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
      </Provider>
    </ApolloProvider>
  );
}

export default AppRouter;
