import Header from '../Header';
import { renderComponentWithStore } from '../../../utils/TestHelpers';
// import * as ReactDOMPortal from 'react-dom';

// jest.spyOn(ReactDOMPortal, 'createPortal');

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
