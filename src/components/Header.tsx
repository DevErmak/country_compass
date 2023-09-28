import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../static/images/logo.svg';
import AsyncSelect from 'react-select/async';
import { getOptionsCountry, getState } from '../store/country/countriesSelectors';
import { IOptionCountry } from '../store/country/types';
import { TbWorldSearch } from 'react-icons/tb';
import { getListCountry } from '../store/country/countriesSelectors';
import { useDispatch } from 'react-redux';
import { getFullInfoCountryFetch, getListCountriesFetch } from '../store/country/infoCountrySlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

export default function Header({}: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate('/full-info-country');
  };

  const customIcon = () => (
    <div>
      <TbWorldSearch color="black" />
    </div>
  );

  return (
    <div className="header-container">
      <div className="find-country">
        <AsyncSelect
          placeholder="Введите название страны"
          classNamePrefix="custom-select"
          defaultOptions={optionsCountry}
          loadOptions={promiseOptions}
          components={{ DropdownIndicator: customIcon }}
          onChange={getFullInfoCountry}
        />
      </div>
    </div>
  );
}
