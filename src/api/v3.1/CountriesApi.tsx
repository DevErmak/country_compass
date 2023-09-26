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

export default instance;
