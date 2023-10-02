import { useSelector } from 'react-redux';
import { getFullInfoCountry, isFullInfoCountry } from '../store/country/countriesSelectors';
// import { Navigate, Outlet, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import './fullInfoCountry.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { Navigate } from 'react-router-dom';
import InfoCountry from '../components/InfoCountry/InfoCountry';
import Flag from '../components/falg/Flag';
type Props = {};

export default function PrivateFullInfoCountry({}: Props) {
  const ff = useSelector(isFullInfoCountry);
  const fullInfoCountry = useSelector(getFullInfoCountry);
  console.log('---------------->fullInfoCountry', fullInfoCountry);
  if (!ff) {
    return <Navigate to="/home" />;
  }

  const getCurrencies = (currencies: any, separator: string): string => {
    const properties = Object.keys(currencies).map((key) => currencies[key].name);
    return properties.join(separator);
  };

  const getLanguages = (languages: any, separator: string): string => {
    const properties = Object.keys(languages).map((key) => languages[key]);
    return properties.join(separator);
  };

  const getCapital = (capital: any, separator: string): string => {
    const properties = capital.map((key: number) => capital[key]);
    return properties.join(separator);
  };

  const getPopulation = (population: any): string =>
    population
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (typeof fullInfoCountry !== 'undefined') {
    const currencies = getCurrencies(fullInfoCountry[0].currencies, ', ');
    const languages = getLanguages(fullInfoCountry[0].languages, ', ');
    const capital = getLanguages(fullInfoCountry[0].capital, ', ');
    const population = getPopulation(fullInfoCountry[0].population);

    return (
      <div className="full-info-country">
        <InfoCountry
          nameCountry={fullInfoCountry[0].name.official}
          nameCapital={capital}
          currencies={currencies}
          region={fullInfoCountry[0].region}
          languages={languages}
          population={population}
          isFavorites={true}
        />
        <Flag
          flags={fullInfoCountry[0].flags.svg}
          flagsAlt={fullInfoCountry[0].flags.alt}
          coatOfArms={fullInfoCountry[0].coatOfArms.svg}
        />
      </div>
    );
  } else return <div></div>;
}
