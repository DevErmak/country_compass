import renderer from 'react-test-renderer';
import Flag from '../Flag';

it('renders correctly', () => {
  const flags = '';
  const flagsAlt = '';
  const coatOfArms = '';
  const component = renderer
    .create(<Flag flags={flags} flagsAlt={flagsAlt} coatOfArms={coatOfArms} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
