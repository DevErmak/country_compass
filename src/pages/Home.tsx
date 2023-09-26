import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFullInfoCountryFetch } from '../store/country/fullInfoCountrySlice';
import { getFullInfoCountry } from '../store/country/fullInfoCountrySelectors';

type Props = {};

export default function HomeContainer({}: Props) {
  const fullInfoCountry = useSelector(getFullInfoCountry);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFullInfoCountryFetch());
  }, []);

  console.log(fullInfoCountry);

  return <div></div>;
}
