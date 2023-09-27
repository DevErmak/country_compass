import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../api/v3.1/CountriesApi';
import { getListCountrySuccess } from './infoCountrySlice';
import { SagaIterator } from 'redux-saga';

function* workGetListCountriesFetch(): SagaIterator {
  const listCountries = yield call(() => axios.get(''));
  yield put(getListCountrySuccess(listCountries));
}

function* infoCountriesSaga() {
  yield takeEvery('infoCountries/getListCountryFetch', workGetListCountriesFetch);
}

export default infoCountriesSaga;
