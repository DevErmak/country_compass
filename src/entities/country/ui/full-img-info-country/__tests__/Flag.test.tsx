import Flag from '..';
import { renderComponent } from '../../../shared/lib/test-helpers';

it('renders correctly Flag', () => {
  const { container } = renderComponent({
    Component: Flag,
    props: { flags: '', flagsAlt: '', coatOfArms: '' },
  });
  expect(container).toMatchSnapshot();
});
