import './list-country-card.scss';
import CountryCard from '../сountry-сard';

type Props = { listCountry: {}[] };

const ListCountryCard: React.FC<any> = ({ listCountry }: Props) => {
  console.log('---------------->listCountry', listCountry);
  if (listCountry && listCountry.length)
    if ('name' in listCountry[0]) {
      return (
        <div className="container-countries-cards">
          {listCountry.map((country: any, i: any) => {
            let currentInfoCountry = {
              nameCountry: country.name.official,
              nameCapital: country.capital.join(', '),
              currencies: Object.keys(country.currencies).join(', '),
              region: country.region,
              languages: Object.keys(country.languages).join(', '),
              population: country.population
                .toString()
                .replace(/,/g, '')
                .replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
              flags: country.flags.svg,
              flagsAlt: country.flags.alt,
              coatOfArms: country.coatOfArms.svg,
            };
            console.log('!!!currentInfoCountry', currentInfoCountry);
            return <CountryCard key={i} currentInfoCountry={currentInfoCountry} />;
          })}
        </div>
      );
    } else
      return (
        <div className="container-countries-cards">
          {listCountry.map((infoCountry: any, i: any) => {
            console.log('!!!qwe infoCountry', infoCountry);
            return <CountryCard key={i} currentInfoCountry={infoCountry} />;
          })}
        </div>
      );
};

export default ListCountryCard;
