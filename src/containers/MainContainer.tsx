import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initalize, getRepo } from '../modules/repo';
import { RootState } from '../modules';
import MainComponent from '../components/MainComponent';
import Loading from '../components/Loading';

const MainContainer: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const dispatch = useDispatch();
  const {
    repos,
    loading,
  } = useSelector(({ repo }: RootState) => repo);

  const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
  }, [])

  const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getRepo(username));
  }, [username, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initalize);
    }
  }, [dispatch]);

  return (
    <Loading loading={loading}>
      {
        () => (
          <MainComponent
            repos={repos}
            username={username}
            onChangeInput={handleChangeInput}
            onSearch={handleSearch}
          />
        )
      }
    </Loading>
  );
}

export default MainContainer;