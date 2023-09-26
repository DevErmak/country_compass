import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../api/v3.1/CountriesApi';
import { getFullInfoCountrySuccess } from './fullInfoCountrySlice';
import { SagaIterator } from 'redux-saga';

function* workGetFullInfoCountryFetch(): SagaIterator {
  const fullInfoCountry = yield call(() => axios.get(''));
  yield put(getFullInfoCountrySuccess(fullInfoCountry));
}

function* fullInfoCountrySaga() {
  yield takeEvery('fullInfoCountry/getFullInfoCountryFetch', workGetFullInfoCountryFetch);
}

export default fullInfoCountrySaga;
