import { renderComponentWithStore } from '@/shared/lib/test-helpers';
import CountryCard from '..';

it('renders correctly Country-card', () => {
  const { container } = renderComponentWithStore({
    Component: CountryCard,
    props: {
      currentInfoCountry: {
        nameCountry: '',
        nameCapital: '',
        currencies: '',
        region: '',
        languages: '',
        population: '',
        flags: '',
        flagsAlt: '',
        coatOfArms: '',
      },
    },
    preloadedState: {
      infoCountries: {
        listCountries: [],
        fullInfoCountry: [],
        isFullInfoCountry: false,
        isLoading: false,
        infoErrorResponse: '',
      },
    },
  });
  expect(container).toMatchSnapshot();
});
