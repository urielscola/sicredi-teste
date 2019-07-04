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

export function* createDragon({ payload }) {
  try {
    yield call(DragonsService.post, payload);
    yield put(DragonsActions.getDragons());
  } catch (err) {
    yield put(DragonsActions.getDragonDetailsFailure());
  }
}

export function* updateDragon({ payload }) {
  const { data, id } = payload;
  try {
    yield call(DragonsService.put, { data, id });
    yield put(DragonsActions.getDragons());
  } catch (err) {
    yield put(DragonsActions.getDragonDetailsFailure());
  }
}

export function* deleteDragon({ payload }) {
  try {
    yield call(DragonsService.delete, payload);
    yield put(DragonsActions.getDragons());
  } catch (err) {
    yield put(DragonsActions.getDragonDetailsFailure());
  }
}

export default function* dragonsSaga() {
  yield all([
    takeLatest(DragonsTypes.GET_DRAGONS, getDragons),
    takeLatest(DragonsTypes.GET_DRAGON_DETAIL, getDragonDetail),
    takeLatest(DragonsTypes.UPDATE_DRAGON, updateDragon),
    takeLatest(DragonsTypes.CREATE_DRAGON, createDragon),
    takeLatest(DragonsTypes.DELETE_DRAGON, deleteDragon)
  ]);
}
