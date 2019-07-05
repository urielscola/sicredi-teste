import usersReducer, {
  Creators as UsersActions,
  INITIAL_STATE
} from '../../store/ducks/users';

describe('Users Reducer', () => {
  it('Should be able to handle loginStart', () => {
    const state = usersReducer(INITIAL_STATE, UsersActions.loginStart());

    expect(state.loading).toBe(true);
  });

  it('Should be able to handle loginSuccess', () => {
    const state = usersReducer(
      INITIAL_STATE,
      UsersActions.loginSuccess(JSON.stringify({ username: 'dragon' }))
    );

    expect(state.loading).toBe(false);
    expect(state.user).toBe(JSON.stringify({ username: 'dragon' }));
  });

  it('Should be able to handle loginFailure', () => {
    const state = usersReducer(INITIAL_STATE, UsersActions.loginFailure());

    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
  });

  it('Should be able to handle logout', () => {
    const state = usersReducer(INITIAL_STATE, UsersActions.logout());

    expect(state.user).toBe(null);
  });

  it('Should be able to handle setError', () => {
    const state = usersReducer(INITIAL_STATE, UsersActions.setError(true));

    expect(state.error).toBe(true);
  });
});
