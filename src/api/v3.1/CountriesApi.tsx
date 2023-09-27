import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/region/europe',
});

// instance.interceptors.request.use(
//   async (config) => {
//     console.log('inaxiosresponseconfig', config);
//     config.url = config.url + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY;
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// export async function getInfoCountry(nameCountry: string) {
//   try {
//     const response = await instance.get(`/name/${nameCountry}?fullText=true`);
//     console.log('--------->responsedataCity', response);
//     const data = await response.data;
//     console.log('--->dataindataCity', data);
//     if (Object.keys(data).length > 0) {
//       setDataCity(data);
//       return data.map((item) => ({
//         value: item.name.common,
//         label: item.country,
//       }));
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

export default instance;
