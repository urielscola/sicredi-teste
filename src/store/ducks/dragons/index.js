export const Types = {
  GET_DRAGONS: '@dragons/GET_DRAGONS',
  GET_DRAGONS_SUCCESS: '@dragons/GET_DRAGONS_SUCCESS',
  GET_DRAGONS_FAILURE: '@dragons/GET_DRAGONS_FAILURE',
  SET_DRAGON_DETAIL: '@dragons/SET_DRAGON_DETAIL',
  GET_DRAGON_DETAIL: '@dragons/GET_DRAGON_DETAIL',
  GET_DRAGON_DETAIL_SUCCESS: '@dragons/GET_DRAGON_DETAIL_SUCCESS',
  GET_DRAGON_DETAIL_FAILURE: '@dragons/GET_DRAGON_DETAIL_FAILURE',
  UPDATE_DRAGON: '@dragons/UPDATE_DRAGON',
  CREATE_DRAGON: '@dragons/CREATE_DRAGON',
  DELETE_DRAGON: '@dragons/DELETE_DRAGON'
};

export const Creators = {
  getDragons: payload => ({ type: Types.GET_DRAGONS, payload }),
  getDragonsSuccess: payload => ({
    type: Types.GET_DRAGONS_SUCCESS,
    payload
  }),
  getDragonsFailure: () => ({ type: Types.GET_DRAGONS_FAILURE }),
  getDragonDetail: payload => ({ type: Types.GET_DRAGON_DETAIL, payload }),
  getDragonDetailSuccess: payload => ({
    type: Types.GET_DRAGON_DETAIL_SUCCESS,
    payload
  }),
  getDragonDetailsFailure: () => ({ type: Types.GET_DRAGON_DETAIL_FAILURE }),
  setDragonDetail: payload => ({ type: Types.SET_DRAGON_DETAIL, payload }),
  updateDragon: payload => ({ type: Types.UPDATE_DRAGON, payload }),
  createDragon: payload => ({ type: Types.CREATE_DRAGON, payload }),
  deleteDragon: payload => ({ type: Types.DELETE_DRAGON, payload })
};

export const INITIAL_STATE = {
  list: [],
  detail: null,
  loading: false,
  error: false
};

export default function dragons(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.GET_DRAGONS:
      return { ...state, loading: true };
    case Types.GET_DRAGONS_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false
      };
    case Types.GET_DRAGONS_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.GET_DRAGON_DETAIL:
      return { ...state, loading: true };
    case Types.GET_DRAGON_DETAIL_SUCCESS:
      return {
        ...state,
        detail: payload,
        loading: false
      };
    case Types.GET_DRAGON_DETAIL_FAILURE:
      return { ...state, loading: false, error: true };
    case Types.SET_DRAGON_DETAIL:
      return { ...state, detail: payload };
    default:
      return state;
  }
}
