export const Types = {
  GET_DRAGONS: '@books/GET_DRAGONS',
  GET_DRAGONS_SUCCESS: '@books/GET_DRAGONS_SUCCESS',
  GET_DRAGONS_FAILURE: '@books/GET_DRAGONS_FAILURE',
  SET_DRAGON_DETAIL: '@books/SET_DRAGON_DETAIL',
  GET_DRAGON_DETAIL: '@books/GET_DRAGON_DETAIL',
  GET_DRAGON_DETAIL_SUCCESS: '@books/GET_DRAGON_DETAIL_SUCCESS',
  GET_DRAGON_DETAIL_FAILURE: '@books/GET_DRAGON_DETAIL_FAILURE'
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
  getDragonDetailsFailure: () => ({ type: Types.GET_DRAGON_DETAILS_FAILURE }),
  setDragonDetail: payload => ({ type: Types.SET_DRAGON_DETAIL, payload })
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
