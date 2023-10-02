import { useSelector } from 'react-redux';
import { getFullInfoCountry, isFullInfoCountry } from '../store/country/countriesSelectors';
import './fullInfoCountry.css';
import { Navigate } from 'react-router-dom';
import InfoCountry from '../components/InfoCountry/InfoCountry';
import Flag from '../components/falg/Flag';

type Props = {};

export default function PrivateFullInfoCountry({}: Props) {
  const ff = useSelector(isFullInfoCountry);
  const fullInfoCountry = useSelector(getFullInfoCountry);
  if (!ff) {
    return <Navigate to="/" />;
  }

  const getPopulation = (population: any): string =>
    population
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (typeof fullInfoCountry !== 'undefined') {
    const population = getPopulation(fullInfoCountry[0].population);

    return (
      <div className="full-info-country">
        <InfoCountry
          nameCountry={fullInfoCountry[0].name.official}
          nameCapital={fullInfoCountry[0].capital.join(', ')}
          currencies={Object.keys(fullInfoCountry[0].currencies).join(', ')}
          region={fullInfoCountry[0].region}
          languages={Object.keys(fullInfoCountry[0].languages).join(', ')}
          population={population}
          isFavorites={true}
        />
        <Flag
          flags={fullInfoCountry[0].flags.svg}
          flagsAlt={fullInfoCountry[0].flags.alt}
          coatOfArms={fullInfoCountry[0].coatOfArms.svg}
        />
      </div>
    );
  } else return <div></div>;
}
