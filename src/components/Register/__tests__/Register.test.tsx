import { renderComponentWithStore } from '../../../widgets/test-helpers/TestHelpers';
import FormRegister from '../FormRegister';

it('renders correctly FormRegister', () => {
  const { container } = renderComponentWithStore({
    Component: FormRegister,
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
