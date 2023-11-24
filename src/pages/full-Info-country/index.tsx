import { useSelector } from 'react-redux';
import './full-info-country.scss';
import {
  getFormatFullInfoCountry,
  getFullInfoCountry,
  getIsLoading,
} from '../../entities/country/model/country/countriesSelectors';
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

  useEffect(() => {
    dispatch(getFullInfoCountryFetch(nameCountry));
  }, []);

  const isLoading = useSelector(getIsLoading);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="full-info-country">
        <FullTextInfoCountry />
        <FullImgInfoCountry />
      </div>
    );
  }
};

export default FullInfoCountry;
