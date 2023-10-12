import renderer from 'react-test-renderer';
import Flag from '../Flag';

it('renders correctly', () => {
  const flags = '';
  const flagsAlt = '';
  const coatOfArms = '';
  const flag = renderer
    .create(<Flag flags={flags} flagsAlt={flagsAlt} coatOfArms={coatOfArms} />)
    .toJSON();
  expect(flag).toMatchSnapshot();
});
