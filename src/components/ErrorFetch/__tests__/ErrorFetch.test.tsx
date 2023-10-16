import renderer from 'react-test-renderer';
import ErrorFetch from '../ErrorFetch';

it('renders correctly', () => {
  const component = renderer.create(<ErrorFetch infoError="" />).toJSON();
  expect(component).toMatchSnapshot();
});
