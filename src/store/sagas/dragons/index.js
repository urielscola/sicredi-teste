import { all, takeLatest, call, put } from 'redux-saga/effects';
import { DragonsService } from '../../../services';

import {
  Creators as DragonsActions,
  Types as DragonsTypes
} from '../../ducks/dragons';

export function* getDragons() {
  try {
    const { data } = yield call(DragonsService.list);
    yield put(DragonsActions.getDragonsSuccess(data));
  } catch (err) {
    yield put(DragonsActions.getDragonsFailure());
  }
}

export function* getDragonDetail({ payload }) {
  try {
    const { data } = yield call(DragonsService.get, { id: payload });
    yield put(DragonsActions.getDragonDetailSuccess(data));
  } catch (err) {
    yield put(DragonsActions.getDragonDetailsFailure());
  }
}

export default function* booksSaga() {
  yield all([
    takeLatest(DragonsTypes.GET_DRAGONS, getDragons),
    takeLatest(DragonsTypes.GET_DRAGON_DETAIL, getDragonDetail)
  ]);
}
