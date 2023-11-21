import { renderComponentWithStore } from '@/shared/lib/test-helpers';
import FullImgInfoCountry from '..';

it('renders correctly home', () => {
  const { container } = renderComponentWithStore({
    Component: FullImgInfoCountry,
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
