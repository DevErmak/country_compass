import './full-text-info-country.scss';
import { useSelector } from 'react-redux';
import {
  getFormatFullInfoCountry,
  getIsLoading,
} from '@/entities/country/model/country/countriesSelectors';
import FullDescriptionCountry from '@/entities/country/ui/full-description-country';
import BtnSetFavorite from '@/features/buttons/set-favorite';
import { useEffect } from 'react';
import { getFullInfoCountryFetch } from '@/entities/country/model/country/infoCountrySlice';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from '@/shared/ui/loader';

type Props = {};
const FullTextInfoCountry: React.FC<any> = ({}: Props) => {
  // console.log('rrr');
  const dispatch = useDispatch();

  let { nameCountry } = useParams();

  console.log('qinfulltext nameCountry', nameCountry);

  // useEffect(() => {
  //   console.log('111---------------->nameCountry', nameCountry);
  //   console.log('sss s', nameCountry);
  //   dispatch(getFullInfoCountryFetch(nameCountry));
  // }, []);

  const currentInfoCountry = useSelector(getFormatFullInfoCountry);
  console.log('ggg currentInfoCountry', currentInfoCountry);
  const isLoading = useSelector(getIsLoading);

  if (isLoading) {
    console.log('ert111');
    return <Loader />;
  } else
    return (
      <div className="container-info-country">
        <FullDescriptionCountry />
        <BtnSetFavorite fullInfoCountry={currentInfoCountry} className="star-full-info" />
      </div>
    );
};

export default FullTextInfoCountry;
