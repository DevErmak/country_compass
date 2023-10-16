import renderer from 'react-test-renderer';
import СountryСard from '../СountryСard';
import BtnFavorite from '../BtnFavorite';
import { renderComponentWithStore } from '../../../utils/TestHelpers';
// import * as reduxHooks from 'react-redux';
// import * as actions from '../../../store/country/infoCountrySlice';

// jest.mock('react-redux');

// const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('CountryCards', () => {
  it('renders correctly Country-card', () => {
    const { container } = renderComponentWithStore({
      Component: СountryСard,
      props: { flags: '', flagsAlt: '', nameCountry: '', nameCapital: '' },
      preloadedState: {
        infoCountries: {
          listCountries: [],
          fullInfoCountry: [],
          isFullInfoCountry: false,
          isLoading: false,
          infoErrorResponse: '',
        },
      },
    });
  }),
    it('renders correctly BtnFavorite', () => {
      const { container } = renderComponentWithStore({
        Component: BtnFavorite,
        props: { nameCountry: '' },
        preloadedState: {
          infoCountries: {
            listCountries: [],
            fullInfoCountry: [],
            isFullInfoCountry: false,
            isLoading: false,
            infoErrorResponse: '',
          },
        },
      });
    });
});
