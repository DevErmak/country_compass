import { renderComponentWithStore } from '@/shared/lib/test-helpers';
import Header from '..';
jest.mock('jwt-decode', () => ({
  jwtDecode: () => 'some-name',
}));
describe('renders correctly Header', () => {
  it('renders correctly Header is auth', () => {
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
          isAuthentication: true,
          infoModal: { isActiveModal: false, formModal: 'login' },
        },
      },
    });
    expect(container.getElementsByClassName('logout').length).toBe(1);
  });
  it('renders correctly Header is no-auth', () => {
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
    expect(container.getElementsByClassName('login').length).toBe(1);
  });
});
