import { renderComponentWithStore } from '@/shared/lib/test-helpers';
import FullDescriptionCountry from '..';

describe('InfoCountry', () => {
  it('renders correctly InfoCountry', () => {
    const { container } = renderComponentWithStore({
      Component: FullDescriptionCountry,
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
