import React, { useReducer } from 'react';
import Spinner from '@atoms/Spinner';
import NotFound from '@atoms/NotFound';
import SearchBar from '@molecules/SearchBar';
import SearchResult from '@organisms/SearchResult';
import './style.scss';

import * as api from 'apis';
import reducer, { Action, initialState } from './reducer';

const PageBody = ({ status: { loading, isNotFound }, ...rest }) => {
  if (loading) return <Spinner />;
  if (isNotFound) return <NotFound />;

  return <SearchResult {...rest} />;
};

export default function GitStarRanking() {
  const [{ keyword, repos, loading, isNotFound }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const onSearch = word => {
    dispatch({ type: Action.SEARCH_LOADING });
    api
      .getRepos(word)
      .then(payload => {
        dispatch({
          type: Action.SEARCH_SUCCESS,
          payload,
        });
      })
      .catch(err => {
        if (err.response.status === 404) {
          dispatch({ type: Action.SEARCH_NOT_FOUND });
        }
      })
      .finally(() => dispatch({ type: Action.SEARCH_FINISH }));
  };

  return (
    <main className="gitstar_ranking">
      <h1>GitStar Ranking</h1>
      <p>
        Unofficial GitHub star ranking for users, organizations and
        repositories.
      </p>
      <SearchBar onSearch={onSearch} />
      <PageBody
        status={{ loading, isNotFound }}
        name={keyword}
        resultItems={repos}
        repoCount={repos.length}
        starCount={repos.reduce((acc, cur) => acc + cur.starCount, 0)}
      />
    </main>
  );
}
