/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { Store } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import infoCountriesReducer from '../store/country/infoCountrySlice';
import infoUserReducer from '../store/user/infoUserSlice';
import createSagaMiddleware from 'redux-saga';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client';
import { Zoom, toast } from 'react-toastify';
import { onError } from '@apollo/client/link/error';
import { useCookies } from 'react-cookie';
export const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  infoCountries: infoCountriesReducer,
  infoUser: infoUserReducer,
});

interface IFormWrapperProps {
  children: React.ReactNode;
  defaultValues: Record<string, any>;
}

interface IInitialEntry {
  pathname: string;
  hash?: string;
  key?: string;
  search?: string;
  state?: any;
}

const FormWrapper: React.FC<IFormWrapperProps> = ({ defaultValues, children }) => {
  const formMethods = useForm<typeof defaultValues>({
    defaultValues,
  });

  return <FormProvider<typeof defaultValues> {...formMethods}>{children}</FormProvider>;
};

type RenderComponentWithStoreArgs = {
  Component: React.FC<any>;
  children?: React.ReactNode;
  defaultFormValues?: Record<string, any>;
  memoryRouterInitialEntries?: IInitialEntry[];
  preloadedState?: Record<string, any>;
  props?: Record<string, any>;
};

export const renderComponentWithStore = ({
  Component,
  props,
  preloadedState,
  defaultFormValues,
  memoryRouterInitialEntries = [{ pathname: '/' }],
  children,
}: RenderComponentWithStoreArgs): {
  container: HTMLElement;
  mockStore: Store;
  rerender: (rerenderProps: Record<string, any>) => void;
} => {
  const mockStore = configureStore({
    reducer: rootReducer,
    middleware: [saga],
    preloadedState,
  });

  const renderComponent = (renderProps?: Record<string, any>) => {
    const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (let err of graphQLErrors) {
          switch (err.extensions.code) {
            case 'UNAUTHENTICATED':
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
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={memoryRouterInitialEntries}>
            {defaultFormValues ? (
              <FormWrapper defaultValues={defaultFormValues}>
                <Component {...renderProps}>{children}</Component>
              </FormWrapper>
            ) : (
              <Component {...renderProps}>{children}</Component>
            )}
            <div id="portal"></div>
          </MemoryRouter>
        </Provider>
      </ApolloProvider>
    );
  };

  const { container, rerender: reactRerender } = render(renderComponent(props));

  const rerender = (rerenderProps: Record<string, any>) =>
    reactRerender(renderComponent(rerenderProps));

  return { container, mockStore, rerender };
};

type RenderComponentArgs = {
  Component: React.FC<any>;
  children?: React.ReactNode;
  defaultFormValues?: Record<string, any>;
  memoryRouterInitialEntries?: IInitialEntry[];
  props?: Record<string, any>;
};

export const renderComponent = ({
  Component,
  props,
  defaultFormValues,
  memoryRouterInitialEntries = [{ pathname: '/' }],
  children,
}: RenderComponentArgs): { container: HTMLElement } => {
  const { container } = render(
    <MemoryRouter initialEntries={memoryRouterInitialEntries}>
      {defaultFormValues ? (
        <FormWrapper defaultValues={defaultFormValues}>
          <Component {...props}>{children}</Component>
        </FormWrapper>
      ) : (
        <Component {...props}>{children}</Component>
      )}
      <div id="portal"></div>
    </MemoryRouter>,
  );

  return { container };
};
