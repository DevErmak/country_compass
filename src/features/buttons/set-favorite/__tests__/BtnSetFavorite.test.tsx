import { renderComponentWithStore } from '@/shared/lib/test-helpers';
import BtnSetFavorite from '..';

it('renders correctly BtnSetFavorite', () => {
  const { container } = renderComponentWithStore({
    Component: BtnSetFavorite,
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
      modCard: '',
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
