import renderer from 'react-test-renderer';
import ErrorFetch from '../ErrorFetch';
import { renderComponent } from '../../../widgets/test-helpers/TestHelpers';

it('renders correctly ErrorFetch', () => {
  const { container } = renderComponent({
    Component: ErrorFetch,
    props: { infoError: '' },
  });
  expect(container).toMatchSnapshot();
});
