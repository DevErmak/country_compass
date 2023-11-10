import { renderComponentWithStore } from '../../../shared/lib/test-helpers';
import FormLogin from '../FormLogin';

it('renders correctly FormLogin', () => {
  const { container } = renderComponentWithStore({
    Component: FormLogin,
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
