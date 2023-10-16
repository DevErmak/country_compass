import СountryСard from '../СountryСard';
import BtnFavorite from '../BtnFavorite';
import { renderComponentWithStore } from '../../../utils/TestHelpers';

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
    expect(container).toMatchSnapshot();
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
      expect(container).toMatchSnapshot();
    });
});
