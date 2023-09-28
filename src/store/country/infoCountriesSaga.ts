import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../api/v3.1/CountriesApi';
import { getFullInfoCountrySuccess, getListCountrySuccess } from './infoCountrySlice';
import { SagaIterator } from 'redux-saga';

function* workGetListCountriesFetch(): SagaIterator {
  const listCountries = yield call(() => axios.get('/region/europe'));
  yield put(getListCountrySuccess(listCountries));
}

function* workFullInfoCountryFetch({ payload }: { type: string; payload: string }): SagaIterator {
  const listCountries = yield call(() => axios.get(`/name/${payload}?fullText=true`));
  yield put(getFullInfoCountrySuccess(listCountries));
}

function* infoCountriesSaga() {
  yield takeEvery('infoCountries/getListCountriesFetch', workGetListCountriesFetch);
  yield takeEvery('infoCountries/getFullInfoCountryFetch', workFullInfoCountryFetch);
}

export default infoCountriesSaga;
