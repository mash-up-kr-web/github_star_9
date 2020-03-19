import React from 'react';
import styles from './RepoItem.module.scss';
import classNames from 'classnames/bind';
import { Repo } from '../../modules/repo';
import starImg from '../../images/star.png';

interface Props {
  repo: Repo;
}

const cx = classNames.bind(styles);

const RepoItem: React.FC<Props> = ({ repo }) => {
  return (
    <li className={cx('repo-item')}>
      <p className={cx('username')}>{repo.name}</p>
      <p className={cx('star')}>
        <img src={starImg} alt="" />
        {repo.star}
      </p>
    </li>
  );
};

export default RepoItem;