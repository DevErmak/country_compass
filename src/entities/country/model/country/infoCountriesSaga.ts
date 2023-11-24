import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../../../shared/api/v3.1';
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
    axios.get('/region/europe').catch(function (error: any) {
      if (error.response) {
        infoError = 'Bad response. Status:' + String(error.response.status);
      } else if (error.request) {
        infoError = 'Bad request';
      } else {
        infoError = 'Something happened in setting up the request that triggered an Error';
      }
    }),
  );
  if (infoError.trim().length === 0) {
    yield put(getListCountrySuccess(result));
  } else {
    yield put(getListCountryFailure(infoError));
  }
}

function* workFullInfoCountryFetch({ payload }: { type: string; payload: string }): SagaIterator {
  let infoError = '';
  const result = yield call(() =>
    axios.get(`/name/${payload}?fullText=true`).catch(function (error: any) {
      if (error.response) {
        infoError = 'Bad response. Status:' + String(error.response.status);
      } else if (error.request) {
        infoError = 'Bad request';
      } else {
        infoError = 'Something happened in setting up the request that triggered an Error';
      }
    }),
  );
  if (infoError.trim().length === 0) {
    yield put(getFullInfoCountrySuccess(result));
  } else {
    yield put(getFullInfoCountryFailure(infoError));
  }
}

function* infoCountriesSaga() {
  yield takeEvery('infoCountries/getListCountriesFetch', workGetListCountriesFetch);
  yield takeEvery('infoCountries/getFullInfoCountryFetch', workFullInfoCountryFetch);
}

export default infoCountriesSaga;
