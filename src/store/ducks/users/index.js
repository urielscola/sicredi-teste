export const Types = {
  LOGIN_START: '@users/LOGIN_START',
  LOGIN_SUCCESS: '@users/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@users/LOGIN_FAILURE',
  LOGOUT: '@users/LOGOUT',
  SET_ERROR: '@users/SET_ERROR'
};

export const Creators = {
  loginStart: payload => ({ type: Types.LOGIN_START, payload }),
  loginSuccess: payload => ({
    type: Types.LOGIN_SUCCESS,
    payload
  }),
  loginFailure: () => ({ type: Types.LOGIN_FAILURE }),
  logout: () => ({ type: Types.LOGOUT }),
  setError: payload => ({ type: Types.SET_ERROR, payload })
};

export const INITIAL_STATE = {
  user: null,
  loading: false,
  error: false
};

export default function users(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.LOGIN_START:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case Types.LOGIN_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.LOGOUT:
      return { ...state, user: null };
    case Types.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
