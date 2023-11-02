import { renderComponentWithStore } from '../../../widgets/test-helpers/TestHelpers';
import InfoCountry from '../InfoCountry';

describe('InfoCountry', () => {
  it('renders correctly InfoCountry', () => {
    const { container } = renderComponentWithStore({
      Component: InfoCountry,
      props: {
        fullInfoCountry: {
          nameCountry: '',
          nameCapital: '',
          currencies: '',
          region: '',
          languages: '',
          population: '',
          flags: '',
          flagsAlt: '',
          coatOfArms: '',
        },
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
