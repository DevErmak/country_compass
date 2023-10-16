import { useSelector } from 'react-redux';
import {
  getFullInfoCountry,
  getIsFullInfoCountry,
  getIsLoading,
} from '../store/country/countriesSelectors';
import './fullInfoCountry.css';
import { Navigate } from 'react-router-dom';
import InfoCountry from '../components/InfoCountry/InfoCountry';
import Flag from '../components/Flag/Flag';
import Loader from '../components/Loader/Loader';

type Props = {};

export default function PrivateFullInfoCountry({}: Props) {
  const isFullInfoCountry = useSelector(getIsFullInfoCountry);
  const fullInfoCountry = useSelector(getFullInfoCountry);

  const getPopulation = (population: any): string =>
    population
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const isLoading = useSelector(getIsLoading);
  if (isLoading && !isFullInfoCountry) {
    return <Loader />;
  } else {
    if (Array.isArray(fullInfoCountry) && fullInfoCountry.length === 0) {
      return <Navigate to="/" />;
    } else {
      if (Array.isArray(fullInfoCountry)) {
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
            />
            <Flag
              flags={fullInfoCountry[0].flags.svg}
              flagsAlt={fullInfoCountry[0].flags.alt}
              coatOfArms={fullInfoCountry[0].coatOfArms.svg}
            />
          </div>
        );
      }
    }
  }
}
