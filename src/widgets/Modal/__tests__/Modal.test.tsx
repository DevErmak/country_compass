import { renderComponentWithStore } from '../../../shared/lib/test-helpers';
import FormLogin from '../../Login/FormLogin';
import Modal from '../Modal';

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
