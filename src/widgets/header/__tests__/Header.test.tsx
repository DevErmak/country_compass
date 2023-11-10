import Header from '../ui/no-auth-header';
import { renderComponentWithStore } from '../../../shared/lib/test-helpers';

it('renders correctly Header', () => {
  const { container } = renderComponentWithStore({
    Component: Header,
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
