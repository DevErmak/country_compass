import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../static/images/logo.svg';
import AsyncSelect from 'react-select/async';
import { getOptionsCountry } from '../store/country/countriesSelectors';
import { IOptionCountry } from '../store/country/types';
import { TbWorldSearch } from 'react-icons/tb';
import { getListCountry } from '../store/country/countriesSelectors';

type Props = {};

export default function Header({}: Props) {
  const optionsCountry: IOptionCountry[] = useSelector(getOptionsCountry);

  const s = useSelector(getListCountry);

  const findCounty = (inputValue: string) => {
    return optionsCountry.filter((item) =>
      item.value.toLowerCase().includes(inputValue.toLowerCase()),
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

  // const getInfoCountry = (setCounrty) => {};

  {
    /* <AsyncSelect
          classNamePrefix="custom-select-weather"
          onChange={handleChange}
          components={{ DropdownIndicator: customIcon }}
          placeholder="Введите название страны"
          loadOptions={promiseOptions}
          value={nameCity}
        /> */
  }

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
          // onChange={getInfoCountry}
        />
      </div>
      <Logo width={90} height={80} />
    </div>
  );
}
