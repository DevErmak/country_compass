import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListCountryFetch } from '../store/country/infoCountrySlice';
// import { getFullInfoCountry } from '../store/country/countriesSelectors';

type Props = {};

export default function HomeContainer({}: Props) {
  // const fullInfoCountry = useSelector(getFullInfoCountry);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCountryFetch());
  }, []);

  // console.log(fullInfoCountry);

  return <div></div>;
}
