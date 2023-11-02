import { renderComponent } from '../../../widgets/test-helpers/TestHelpers';
import Loader from '../Loader';

it('renders correctly Flag', () => {
  const { container } = renderComponent({
    Component: Loader,
  });
  expect(container).toMatchSnapshot();
});
