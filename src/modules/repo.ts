import { takeLatest, call, put } from 'redux-saga/effects';
import * as repoAPI from '../api/repo';

interface ResponseRepo {
  name: string;
  stargazers_count: number;
}
export interface Repo {
  name: string;
  star: number;
}
interface RepoState {
  repos: Repo[];
  loading: boolean;
  success: boolean;
  failure: boolean;
}
type RepoAction =
ReturnType<typeof initalize> |
ReturnType<typeof getRepo> |
ReturnType<typeof getRepoLoading> |
ReturnType<typeof getRepoSuccess> |
ReturnType<typeof getRepoFailure>

const INITIALIZE = 'repo/INITIALIZE' as const;
const GET_REPO = 'repo/GET_REPO' as const;
const GET_REPO_LOADING = 'repo/GET_REPO_LOADING' as const;
const GET_REPO_SUCCESS = 'repo/GET_REPO_SUCCESS' as const;
const GET_REPO_FAILURE = 'repo/GET_REPO_FAILURE' as const;

export const initalize = () => ({ type: INITIALIZE });
export const getRepo = (username: string) => ({ type: GET_REPO, payload: username });
const getRepoLoading = () => ({ type: GET_REPO_LOADING });
const getRepoSuccess = (data: ResponseRepo[]) => ({ type: GET_REPO_SUCCESS, payload: data });
const getRepoFailure = () => ({ type: GET_REPO_FAILURE });

const getRepoSaga = function* (action: ReturnType<typeof getRepo>) {
  yield put(getRepoLoading());
  try {
    const response = yield call(repoAPI.getRepo, action.payload);
    yield put(getRepoSuccess(response.data));
  } catch (err) {
    yield put(getRepoFailure());
  }
}

export function* repoSaga () {
  yield takeLatest(GET_REPO, getRepoSaga);
}

const initialState: RepoState = {
  repos: [],
  loading: false,
  success: false,
  failure: false
}

function repoReducer (state: RepoState = initialState, action: RepoAction) {
  switch (action.type) {
    case INITIALIZE:
      return initialState;
    case GET_REPO_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        failure: false
      }
    case GET_REPO_SUCCESS:
      const repos = action.payload.map(repo => ({
        name: repo.name,
        star: repo.stargazers_count
      }));
      return {
        ...state,
        repos,
        loading: false,
        success: true,
        failure: false
      }
    case GET_REPO_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        failure: true
      }
    default:
      return state;
  }
}

export default repoReducer;