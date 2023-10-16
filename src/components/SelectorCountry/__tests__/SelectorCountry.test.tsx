import { renderComponentWithStore } from '../../../utils/TestHelpers';
import SelectorCountry from '../SelectorCountry';

it('renders correctly selector-country', () => {
  const { container } = renderComponentWithStore({
    Component: SelectorCountry,
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
