import { renderComponent } from '@/shared/lib/test-helpers';
import Loader from '..';

it('renders correctly Flag', () => {
  const { container } = renderComponent({
    Component: Loader,
  });
  expect(container).toMatchSnapshot();
});
