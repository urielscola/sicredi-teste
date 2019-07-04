import { all } from 'redux-saga/effects';

import dragonsSaga from './dragons';
import usersSaga from './users';

export default function* rootSaga() {
  yield all([dragonsSaga(), usersSaga()]);
}
