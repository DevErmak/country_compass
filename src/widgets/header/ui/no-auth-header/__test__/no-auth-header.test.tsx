import { renderComponentWithStore } from '@/shared/lib/test-helpers';
import NoAuthHeader from '..';

jest.mock('jwt-decode', () => ({
  jwtDecode: () => 'some-name',
}));

it('renders correctly NoAuthHeader', () => {
  const { container } = renderComponentWithStore({
    Component: NoAuthHeader,
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
