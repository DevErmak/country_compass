import { renderComponent } from '../../../utils/TestHelpers';
import Loader from '../Loader';

it('renders correctly Flag', () => {
  const { container } = renderComponent({
    Component: Loader,
  });
  expect(container).toMatchSnapshot();
});
