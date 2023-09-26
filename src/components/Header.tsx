import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../static/images/logo.svg';
// import AsyncSelect from 'react-select/async';
import { getFullInfoCountry, getOptionsCountry } from '../store/country/fullInfoCountrySelectors';
import Select from 'react-select';

type Props = {};

export default function Header({}: Props) {
  const fullInfoCountry = useSelector(getOptionsCountry);

  // const getDataCity = () => {
  //   return fullInfoCountry.map((item) => ({
  //     value: item.name.common,
  //     label: item.name.common,
  //   }));
  // };

  // const FindDataCity = (inputValue:string) => {
  //   return fullInfoCountry.filter((item) => { if (inputValue === item.name.common) {
  //     value: item.name.common,
  //     label: item.name.common,
  //   });
  // };

  // let timerId: ReturnType<typeof setTimeout>;

  // const promiseOptions = (inputValue: string) => {
  //   return new Promise((resolve, reject) => {
  //     clearTimeout(timerId);
  //     timerId = setTimeout(async () => {
  //       try {
  //         const results = await getDataCity;
  //         resolve(results);
  //       } catch (error) {
  //         reject(error);
  //       }
  //     }, 1000);
  //   });
  // };
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
  return (
    <div className="header-container">
      <div className="find-country">
        <Select options={fullInfoCountry} />
      </div>
      <Logo width={90} height={80} />
    </div>
  );
}
