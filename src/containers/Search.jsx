import React, { useState, useCallback } from 'react';
import axios from 'axios';

import Frame from '../components/Frame';
import Header from '../components/Header';
import Result from '../components/Result';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const Search = () => {
  const [fetchState, setFetchState] = useState('none');
  const [value, setValue] = useState('');
  const [user, setUser] = useState([]);
  const [errorName, setErrorName] = useState('');

  const fetchData = useCallback(async username => {
    try {
      const response = await axios(
        `https://api.github.com/search/repositories?q=+user:${username}`,
      );
      setUser(response.data.items);
      setFetchState('render');
    } catch (error) {
      setFetchState('error');
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setFetchState('loading');
    setUser([]);
    fetchData(value);
    setErrorName(value);
    setValue('');
  };

  return (
    <Frame>
      <Header value={value} setValue={setValue} onSubmit={handleSubmit} />
      {
        {
          loading: fetchState === 'loading' && <Loading />,
          error: fetchState === 'error' && (
            <ErrorMessage errorName={errorName} />
          ),
          render: fetchState === 'render' && <Result user={user} />,
        }[fetchState]
      }
    </Frame>
  );
};

Search.propTypes = {};

export default Search;
