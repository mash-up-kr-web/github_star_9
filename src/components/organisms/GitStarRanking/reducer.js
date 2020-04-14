export const Action = {
  SEARCH_LOADING: 'SEARCH_LOADING',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_NOT_FOUND: 'SEARCH_NOT_FOUND',
  SEARCH_FINISH: 'SEARCH_FINISH',
};

export const initialState = {
  keyword: null,
  repos: [],
  loading: false,
  isNotFound: false,
};

const reducers = {
  [Action.SEARCH_LOADING]: state => ({ ...state, loading: true }),
  [Action.SEARCH_SUCCESS]: (state, { keyword, repos }) => ({
    ...state,
    keyword,
    repos,
  }),
  [Action.SEARCH_NOT_FOUND]: state => ({ ...state, isNotFound: true }),
  [Action.SEARCH_FINISH]: state => ({ ...state, loading: false }),
};

export default (state, action) => {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action.payload) : state;
};
