import { useSelector } from 'react-redux';
import {
  getFullInfoCountry,
  getIsFullInfoCountry,
  getIsLoading,
} from '../../store/country/countriesSelectors';
import './fullInfoCountry.css';
import { Navigate } from 'react-router-dom';
import InfoCountry from '../../entities/full-description-country';
import Flag from '../../entities/Flag';
import Loader from '../../components/Loader/Loader';

type Props = {};

export default function FullInfoCountry({}: Props) {
  const isFullInfoCountry = useSelector(getIsFullInfoCountry);
  const fullInfoCountry = useSelector(getFullInfoCountry);
  const isLoading = useSelector(getIsLoading);
  if (isLoading && !isFullInfoCountry) {
    return <Loader />;
  } else {
    if (Array.isArray(fullInfoCountry) && fullInfoCountry.length === 0) {
      return <Navigate to="/" />;
    } else {
      if (Array.isArray(fullInfoCountry)) {
        const currentInfoCountry = {
          nameCountry: fullInfoCountry[0].name.official,
          nameCapital: fullInfoCountry[0].capital.join(', '),
          currencies: Object.keys(fullInfoCountry[0].currencies).join(', '),
          region: fullInfoCountry[0].region,
          languages: Object.keys(fullInfoCountry[0].languages).join(', '),
          population: fullInfoCountry[0].population
            .toString()
            .replace(/,/g, '')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
          flags: fullInfoCountry[0].flags.svg,
          flagsAlt: fullInfoCountry[0].flags.alt,
          coatOfArms: fullInfoCountry[0].coatOfArms.svg,
        };

        return (
          <div className="full-info-country">
            <InfoCountry fullInfoCountry={currentInfoCountry} />
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
