import { useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { getOptionsCountry } from '../../store/country/countriesSelectors';
import { IOptionCountry } from '../../store/country/types';
import { useDispatch } from 'react-redux';
import {
  getFullInfoCountryFetch,
  getListCountriesFetch,
} from '../../store/country/infoCountrySlice';
import { useEffect } from 'react';
import './selector-country.css';

type Props = {};

export default function Header({}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListCountriesFetch());
  }, []);

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
