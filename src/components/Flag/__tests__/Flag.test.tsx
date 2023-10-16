import Flag from '../Flag';
import { renderComponent } from '../../../utils/TestHelpers';

it('renders correctly Flag', () => {
  const { container } = renderComponent({
    Component: Flag,
    props: { flags: '', flagsAlt: '', coatOfArms: '' },
  });
  expect(container).toMatchSnapshot();
});
