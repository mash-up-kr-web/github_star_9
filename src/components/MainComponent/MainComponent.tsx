import React from 'react';
import styles from './MainComponent.module.scss';
import classNames from 'classnames/bind';
import RepoList from '../RepoList';
import { Repo } from '../../modules/repo';

interface Props {
  repos: Repo[];
  username: string;
  onChangeInput: React.ReactEventHandler<HTMLInputElement>;
  onSearch: React.ReactEventHandler<HTMLFormElement>;
}

const cx = classNames.bind(styles);

const MainComponent: React.FC<Props> = ({ repos, username, onChangeInput, onSearch}) => {
  const starCount = repos.reduce((p, c) => p + c.star, 0);
  return (
    <>
      <header className={cx('header')}>
        <h1>Gitstar Ranking</h1>
        <h2>Unofficial Github star ranking for users, organizations and repositories.</h2>
        <form onSubmit={onSearch}>
          <input type="text" value={username} onChange={onChangeInput} />
          <input type="submit" value="Search" />
        </form>
      </header>
      <section>
        <article className={cx('info')}>
          <ul>
            <li>{repos.length} Repositories</li>
            <li>{starCount} stars</li>
          </ul>
        </article>
        {
          !!repos.length && (
            <article className={cx('repo-list')}>
              <RepoList repos={repos} />
            </article>
          )
        }
      </section>
    </>
  );
};

export default MainComponent;