import renderer from 'react-test-renderer';
import ErrorFetch from '../ErrorFetch';
import { renderComponent } from '../../../shared/lib/test-helpers';

it('renders correctly ErrorFetch', () => {
  const { container } = renderComponent({
    Component: ErrorFetch,
    props: { infoError: '' },
  });
  expect(container).toMatchSnapshot();
});
