import { all, takeLatest, call, put } from 'redux-saga/effects';
import UserService from '../../../services/user';
import { setSession, clearSession } from '../../../helpers/auth';
import { Creators as UserActions, Types as UserTypes } from '../../ducks/users';

export function* login({ payload }) {
  const { username, password } = payload;
  try {
    yield call(UserService.login, { username, password });
    yield setSession({ username });
    window.location.href = '/';
  } catch (err) {
    yield put(UserActions.loginFailure());
  }
}

export function* logout() {
  yield clearSession();
}

export default function* usersSaga() {
  yield all([
    takeLatest(UserTypes.LOGIN_START, login),
    takeLatest(UserTypes.LOGOUT, logout)
  ]);
}
