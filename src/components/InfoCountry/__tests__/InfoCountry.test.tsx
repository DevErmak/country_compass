import { renderComponentWithStore } from '../../../utils/TestHelpers';
import BtnFavoriteInfoCountry from '../BtnFavoriteInfoCountry';
import InfoCountry from '../InfoCountry';

describe('InfoCountry', () => {
  it('renders correctly InfoCountry', () => {
    const { container } = renderComponentWithStore({
      Component: InfoCountry,
      props: {
        nameCountry: '',
        nameCapital: '',
        currencies: '',
        region: '',
        languages: '',
        population: '',
      },
      preloadedState: {
        infoCountries: {
          listCountries: [],
          fullInfoCountry: [],
          isFullInfoCountry: false,
          isLoading: false,
          infoErrorResponse: '',
        },
        infoUser: {
          userName: '',
          listFavoriteCountries: [],
          isAuthentication: false,
          infoModal: { isActiveModal: false, formModal: 'login' },
        },
      },
    });
    expect(container).toMatchSnapshot();
  });

  it('renders correctly BtnFavoriteInfoCountry', () => {
    const { container } = renderComponentWithStore({
      Component: BtnFavoriteInfoCountry,
      props: {
        nameCountry: '',
      },
      preloadedState: {
        infoCountries: {
          listCountries: [],
          fullInfoCountry: [],
          isFullInfoCountry: false,
          isLoading: false,
          infoErrorResponse: '',
        },
        infoUser: {
          userName: '',
          listFavoriteCountries: [],
          isAuthentication: false,
          infoModal: { isActiveModal: false, formModal: 'login' },
        },
      },
    });
    expect(container).toMatchSnapshot();
  });
});
