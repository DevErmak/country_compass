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

  const renderComponent = (renderProps?: Record<string, any>) => (
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
  );

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
