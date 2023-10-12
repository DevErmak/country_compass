import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../api/v3.1/CountriesApi';
import {
  getFullInfoCountryFailure,
  getFullInfoCountrySuccess,
  getListCountryFailure,
  getListCountrySuccess,
} from './infoCountrySlice';
import { SagaIterator } from 'redux-saga';

function* workGetListCountriesFetch(): SagaIterator {
  let infoError = '';
  const result = yield call(() =>
    axios
      .get('/region/europe')
      // .then((response) => put(getListCountrySuccess(response.data)))
      .catch(function (error) {
        console.log('---------------->error', error);
        if (error.response) {
          console.log('поймали ошибку');
          infoError = 'Bad response. Status:' + String(error.response.status);
          // put(getListCountryFailure('Bad response. Status:' + String(error.response.status)));
        } else if (error.request) {
          console.log('поймали ошибку');
          infoError = 'Bad request';
          // put(getListCountryFailure('Bad request'));
        } else {
          console.log('поймали ошибку');
          infoError = 'Something happened in setting up the request that triggered an Error';

          // put(
          //   getListCountryFailure(
          //     'Something happened in setting up the request that triggered an Error',
          //   ),
          // );
        }
      }),
  );
  if (infoError.trim().length === 0) {
    console.log('---------------->good response', result);
    yield put(getListCountrySuccess(result));
  } else {
    console.log('---------------->bad response');
    yield put(getListCountryFailure(infoError));
  }
}

function* workFullInfoCountryFetch({ payload }: { type: string; payload: string }): SagaIterator {
  let infoError = '';
  const result = yield call(() =>
    axios
      .get(`/name/${payload}?fullText=true`)
      // .then((response) => put(getListCountrySuccess(response.data)))
      .catch(function (error) {
        if (error.response) {
          console.log('поймали ошибку');
          infoError = 'Bad response. Status:' + String(error.response.status);
          // put(getListCountryFailure('Bad response. Status:' + String(error.response.status)));
        } else if (error.request) {
          console.log('поймали ошибку');
          infoError = 'Bad request';
          // put(getListCountryFailure('Bad request'));
        } else {
          console.log('поймали ошибку');
          infoError = 'Something happened in setting up the request that triggered an Error';

          // put(
          //   getListCountryFailure(
          //     'Something happened in setting up the request that triggered an Error',
          //   ),
          // );
        }
      }),
  );
  if (infoError.trim().length === 0) yield put(getFullInfoCountrySuccess(result));
  else yield put(getFullInfoCountryFailure(infoError));
}

function* infoCountriesSaga() {
  yield takeEvery('infoCountries/getListCountriesFetch', workGetListCountriesFetch);
  yield takeEvery('infoCountries/getFullInfoCountryFetch', workFullInfoCountryFetch);
}

export default infoCountriesSaga;
