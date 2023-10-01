import { useSelector } from 'react-redux';
import { getFullInfoCountry } from '../store/country/countriesSelectors';
// import { Navigate, Outlet, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import './fullInfoCountry.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
type Props = {};

export default function PrivateFullInfoCountry({}: Props) {
  //   const navigate = useNavigate();
  const fullInfoCountry = useSelector(getFullInfoCountry);
  console.log(fullInfoCountry);
  const [isStarVisible, setIsStarVisible] = useState(false);
  // const [svgData, setSvgData] = useState(null);

  // useEffect(() => {
  //   if (typeof fullInfoCountry !== 'undefined') {
  //     axios
  //       .get(fullInfoCountry[0].flags.svg)
  //       .then((response) => setSvgData(response.data))
  //       .catch((error) => console.log(error));
  //   }
  // }, [fullInfoCountry]);

  //   useEffect(() => {
  //     if (typeof fullInfoCountry === 'undefined') {
  //       console.log('undef');
  //       navigate('/');
  //     } else if (fullInfoCountry.length === 0) {
  //       console.log('posto');
  //       navigate('/');
  //     }
  //   }, []);
  // console.log(svgData);

  // function getAttributesFromRegex(input: any, regex: RegExp): any {
  //   if (typeof input !== 'undefined') {
  //     const matches = regex.exec(input);
  //     if (matches === null) {
  //       throw new Error('Invalid input');
  //     }
  //     const attributes = matches.slice(1);
  //     return attributes.join('');
  //   }
  // }

  // let width = getAttributesFromRegex(svgData, /width=“(\d+)”/);
  // let height = getAttributesFromRegex(svgData, /height=“(\d+)”/);

  // console.log('qwe', width, height);

  // function replaceSvgParams(svg: any, width: string, height: string): any {
  //   console.log('qqqqqqqqqweqw');

  // const matches = regex.exec(input);
  // if (matches === null) {
  //   throw new Error('Invalid input');
  // }
  // const attributes = matches.slice(1);
  // return attributes.join('');

  // const reWidth = new RegExp(`width="(\\d+)""`, 'g');
  // const reHeight = new RegExp(`height="(\\d+)"""`, 'g');

  // const matchesWidth = reWidth.exec(svg);
  // console.log('matchesWidth', matchesWidth);
  // const matchesHeight = reHeight.exec(svg);
  // console.log('e', matchesHeight);
  // if (!matchesWidth || !matchesHeight) {
  //   throw new Error('Invalid SVG');
  // }

  // svg = svg
  //   .replace(reWidth, () => `width="${Number(matchesWidth[1]) * 2}"`)
  //   .replace(reHeight, () => `height="${Number(matchesHeight[1]) * 2}"`);

  // return svg;

  // const parsedStr = svg?.replace(/width="([^"]+)"/g, (match, width) => {
  //   const parsedWidth = parseInt(width);
  //   const multipliedWidth = parsedWidth * parseInt(newWidth);
  //   return (width = '${multipliedWidth}');
  // });

  // const parsedStrWithHeight = parsedStr.replace(/height="([^"]+)"/g, (match, height) => {
  //   const parsedHeight = parseInt(height);
  //   const multipliedHeight = parsedHeight * parseInt(newHeight);
  //   return (height = `${multipliedHeight}`);
  // });

  // return parsedStrWithHeight;

  // const newStr = svg?.replace(/width="[^"]+"/g, `width="${width}"`);
  // return newStr?.replace(/height="[^"]+"/g, `height="${height}"`);

  // const regex = /(width\s*=\s*“\d+”)(height\s*=\s*“\d+”)/g;
  // return svg?.replace(regex, $1 ${width} $2 ${height});
  // const reWidth = /(width=“.?)“/g;
  // const reHeight = /(height=”.?)”/g;
  // svg as string;
  // if (typeof svg !== null) {
  //   svg = svg?.replace(reWidth, (width = '${width}'));
  //   svg = svg?.replace(reHeight, (height = '${height}'));
  // }

  // return svg;
  // }

  if (typeof fullInfoCountry !== 'undefined') {
    return (
      <div className="container">
        <div
          className="flag-container"
          onMouseEnter={() => setIsStarVisible(true)}
          onMouseLeave={() => setIsStarVisible(false)}
        >
          {isStarVisible && <span className="star">⭐</span>}

          <img
            className="flag-img"
            src={fullInfoCountry[0].flags.svg}
            alt={fullInfoCountry[0].flags.alt}
          />

          {/* <div flag-img>{svgData ? parse(svgData) : ''}</div> */}
          {/* <img
            className="flag-img"
            src={fullInfoCountry[0].flags.svg}
            alt={fullInfoCountry[0].flags.alt}
          /> */}
          <div className="top-name">
            <div className="top-name-rus-common">
              {fullInfoCountry[0].translations.rus.common}
              <div className="top-name-eng-common">{fullInfoCountry[0].name.common}</div>
            </div>
          </div>
        </div>

        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>

        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>

        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>

        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
        <dl className="name-container">
          <dt>Общие название:</dt>
          <dd className="name-rus-common">{fullInfoCountry[0].translations.rus.common}</dd>
          <dd className="name-eng-common">{fullInfoCountry[0].name.common}(eng)</dd>
          <dt>Полное название:</dt>
          <dd className="name-eng-official">{fullInfoCountry[0].translations.rus.official}</dd>
          <dd className="name-eng-official">{fullInfoCountry[0].name.official}(eng)</dd>
        </dl>
      </div>
    );
  } else return <div>123</div>;
}
