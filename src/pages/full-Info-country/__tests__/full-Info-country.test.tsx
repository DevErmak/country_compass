import { renderComponentWithStore } from '@/shared/lib/test-helpers';
import FullInfoCountry from '..';

it('renders correctly FullInfoCountry', () => {
  const { container } = renderComponentWithStore({
    Component: FullInfoCountry,
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
