import React from 'react';
import styles from './RepoList.module.scss';
import classNames from 'classnames/bind';
import RepoItem from '../RepoItem';
import { Repo } from '../../modules/repo';

const cx = classNames.bind(styles);

interface Props {
  repos: Repo[];
}

const RepoList: React.FC<Props> = ({ repos }) => {
  return (
    <ul className={cx('repo-list')}>
      {
        repos.map((repo, index) => <RepoItem key={index} repo={repo} />)
      }
    </ul>
  );
};

export default RepoList;