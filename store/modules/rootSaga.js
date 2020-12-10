import { all } from 'redux-saga/effects';

import heroes from './heroes/sagas';

export default function* rootSaga() {
  return yield all([heroes]);
}
