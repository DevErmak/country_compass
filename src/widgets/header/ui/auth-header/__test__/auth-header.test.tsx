import { renderComponentWithStore } from '@/shared/lib/test-helpers';
import AuthHeader from '..';

jest.mock('jwt-decode', () => ({
  jwtDecode: () => 'some-name',
}));

it('renders correctly AuthHeader', () => {
  const { container } = renderComponentWithStore({
    Component: AuthHeader,
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
