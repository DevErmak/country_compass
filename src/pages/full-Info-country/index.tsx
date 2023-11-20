import { useSelector } from 'react-redux';
import './full-info-country.scss';
// import { Navigate } from 'react-router-dom';
import {
  getFormatFullInfoCountry,
  getFullInfoCountry,
  getIsLoading,
} from '../../entities/country/model/country/countriesSelectors';
// import FullDescriptionCountry from '../../entities/country/ui/full-description-country';
// import Flag from '../../entities/country/ui/full-img-info-country';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFullInfoCountryFetch } from '@/entities/country/model/country/infoCountrySlice';
import { useEffect, useLayoutEffect } from 'react';
import FullTextInfoCountry from '@/widgets/full-text-info-country';
import FullImgInfoCountry from '@/entities/country/ui/full-img-info-country';
import Loader from '@/shared/ui/loader';

type Props = {};
const FullInfoCountry: React.FC<any> = ({}: Props) => {
  let { nameCountry } = useParams();
  const dispatch = useDispatch();
  // const currentInfoCountry = useSelector(getFormatFullInfoCountry);

  useEffect(() => {
    // console.log('111---------------->nameCountry', nameCountry);
    console.log('sss s', nameCountry);
    dispatch(getFullInfoCountryFetch(nameCountry));
  }, []);

  // console.log('---------------->nameCountry', nameCountry);
  // useLayoutEffect(() => {
  //   // console.log('111---------------->nameCountry', nameCountry);
  //   console.log('sss s', nameCountry);
  //   dispatch(getFullInfoCountryFetch(nameCountry));
  // }, [nameCountry]);
  // console.log('sss', useSelector(getFormatFullInfoCountry));
  const isLoading = useSelector(getIsLoading);

  if (isLoading) {
    return <Loader />;
  } else {
    // if (Array.isArray(fullInfoCountry) && fullInfoCountry.length === 0) {
    // return <Navigate to="/" />;
    // } else {
    // if (Array.isArray(fullInfoCountry)) {
    //   const currentInfoCountry = {
    //     nameCountry: fullInfoCountry[0].name.official,
    //     nameCapital: fullInfoCountry[0].capital.join(', '),
    //     currencies: Object.keys(fullInfoCountry[0].currencies).join(', '),
    //     region: fullInfoCountry[0].region,
    //     languages: Object.keys(fullInfoCountry[0].languages).join(', '),
    //     population: fullInfoCountry[0].population
    //       .toString()
    //       .replace(/,/g, '')
    //       .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
    //     flags: fullInfoCountry[0].flags.svg,
    //     flagsAlt: fullInfoCountry[0].flags.alt,
    //     coatOfArms: fullInfoCountry[0].coatOfArms.svg,
    //   };

    return (
      <div className="full-info-country">
        {/* <FullDescriptionCountry fullInfoCountry={currentInfoCountry} />
          <Flag
          flags={fullInfoCountry[0].flags.svg}
          flagsAlt={fullInfoCountry[0].flags.alt}
            coatOfArms={fullInfoCountry[0].coatOfArms.svg}
          /> */}

        <FullTextInfoCountry />
        <FullImgInfoCountry />
      </div>
    );
  }
};

export default FullInfoCountry;
