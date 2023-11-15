import { useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { useDispatch } from 'react-redux';
import './selector-country.scss';
import { useNavigate } from 'react-router-dom';
import { getOptionsCountry } from '../../entities/country/model/country/countriesSelectors';
import { IOptionCountry } from '../../entities/country/model/country/types';
import { getFullInfoCountryFetch } from '../../entities/country/model/country/infoCountrySlice';

type Props = {};

export default function SelectorCountry({}: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const optionsCountry: IOptionCountry[] = useSelector(getOptionsCountry);

  const findCounty = (inputValue: string) => {
    return optionsCountry.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  let timerId: ReturnType<typeof setTimeout>;

  const promiseOptions = (inputValue: string) => {
    return new Promise<IOptionCountry[]>((resolve, reject) => {
      clearTimeout(timerId);
      timerId = setTimeout(async () => {
        try {
          const results = await findCounty(inputValue);
          resolve(results);
        } catch (error) {
          reject(error);
        }
      }, 1000);
    });
  };
  const getFullInfoCountry = (value: IOptionCountry | null) => {
    dispatch(getFullInfoCountryFetch(value?.value));
    navigate('/full-info-country');
  };

  return (
    <div className="header-container">
      <div className="label-search">Search your country:</div>
      <div className="find-country">
        <AsyncSelect
          placeholder={null}
          classNamePrefix="custom-select"
          defaultOptions={optionsCountry}
          loadOptions={promiseOptions}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => null,
          }}
          onChange={getFullInfoCountry}
        />
      </div>
    </div>
  );
}
