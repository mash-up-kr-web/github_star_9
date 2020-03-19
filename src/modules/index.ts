import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import repo, { repoSaga } from './repo';

const rootReducer = combineReducers({
  repo
});

export function* rootSaga () {
  yield all([repoSaga()]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;