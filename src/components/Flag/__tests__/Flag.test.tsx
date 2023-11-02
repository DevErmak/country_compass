import Flag from '../Flag';
import { renderComponent } from '../../../widgets/test-helpers/TestHelpers';

it('renders correctly Flag', () => {
  const { container } = renderComponent({
    Component: Flag,
    props: { flags: '', flagsAlt: '', coatOfArms: '' },
  });
  expect(container).toMatchSnapshot();
});
