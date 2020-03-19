import React from 'react';
import styles from './Loading.module.scss';
import classNames from 'classnames/bind';
import loadingImg from '../../images/loading.gif';

interface Props {
  loading: boolean;
  children: () => React.ReactElement;
}

const cx = classNames.bind(styles);

const Loading: React.FC<Props> = ({ loading, children }) => {
  return (
    loading ?
      (
        <>
          <div className={cx('loading-img')}>
            <img src={loadingImg} alt="" />
          </div>
          {children()}
        </>
      ) :
      (
        children()
      )
  )
};

export default Loading;