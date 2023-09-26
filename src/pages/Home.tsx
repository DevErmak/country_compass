import { useEffect } from 'react';
import { ReactComponent as Logo } from '../static/images/logo.svg';
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

  return (
    <div>
      <Logo width={90} height={80} />
    </div>
  );
}
