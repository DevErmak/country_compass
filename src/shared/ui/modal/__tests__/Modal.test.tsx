import { renderComponentWithStore } from '@/shared/lib/test-helpers';
import Modal from '..';
import FormLogin from '@/widgets/Login';

it('renders correctly Modal', () => {
  const { container } = renderComponentWithStore({
    Component: Modal,
    props: { children: FormLogin },
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
