import { useSelector } from 'react-redux';
import { getFullInfoCountry } from '../store/country/countriesSelectors';

type Props = {};

export default function FullInfoCountry({}: Props) {
  const s = useSelector(getFullInfoCountry);
  console.log(s);
  return <div>FullInfoCountry</div>;
}
