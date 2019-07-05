import { runSaga } from 'redux-saga';
import { login, logout } from '../../store/sagas/users';
import { Creators as UsersActions } from '../../store/ducks/users';

describe('Users Sagas', () => {
  it('Should handle login saga', async () => {
    const dispatched = [];
    const payload = { username: 'dragon999', password: 'south' };
    const setItemMock = jest.fn();
    global.localStorage.__proto__.setItem = setItemMock;

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      login,
      { payload }
    ).toPromise();

    expect(setItemMock.mock.calls.length).toEqual(2);
  });

  it('Should handle login error saga', async () => {
    const dispatched = [];
    const payload = { username: 'wronguser', password: 'badpass' };

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      login,
      { payload }
    ).toPromise();

    expect(dispatched[0]).toEqual(UsersActions.loginFailure());
  });

  it('Should handle logout saga', async () => {
    const removeItemMock = jest.fn();
    global.localStorage.__proto__.removeItem = removeItemMock;

    await runSaga({}, logout).toPromise();

    expect(removeItemMock.mock.calls.length).toEqual(0);
  });
});
