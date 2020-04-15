import React, {useState} from 'react';
import Header from '../organisms/header/Header'
import SearchResult from '../organisms/searchResult/SearchResult'

function GithubStar() {

  const [userName, setUserName] = useState("");
  const [repoList, setRepoList] = useState([]);

  return (
    <div>
      <Header userName={userName} setUserName={setUserName} setRepoList={setRepoList}/>
      {!repoList.length ? null:(<SearchResult repoList={repoList} userName={userName}/>)}
    </div>
  );
}

export default GithubStar;
