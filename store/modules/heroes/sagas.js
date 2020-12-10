import { takeLatest, all, put, select } from 'redux-saga/effects';

import api from '../../../services/api';

import { validationResponse } from '../../../utils/validation';

import { setCurrentLimit, setHeroes } from './actions';

export function* getHeroes({ payload }) {
  let { limit } = payload;
  const currentLimit = yield select((state) => state.heroes.currentLimit);
  limit += currentLimit;

  if (limit) {
    const response = yield api.getHeroes(limit);

    const validation = validationResponse(response);
    if (!validation) {
      return console.log(`Error code ${response.code}`);
    }

    yield put(setCurrentLimit(limit));
    return yield put(setHeroes(response.data.results));
  }
  const response = yield api.getHeroes(25);

  const validation = validationResponse(response);
  if (!validation) {
    return console.log(`Error code ${response.code}`);
  }

  yield put(setCurrentLimit(25));
  return yield put(setHeroes(response.data.results));
}

export default all([takeLatest('GET_HEROES', getHeroes)]);
