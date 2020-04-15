import React from 'react'
import SearchBar from '../../molecules/searchBar/SearchBar';

export default function Header(props) {
  return (
    <div>
      <h1>Gitstar Ranking</h1>
      <h3>Unofficial GitHub star ranking for users, organizations and repositories</h3>
      <SearchBar userName={props.userName} setUserName={props.setUserName} setRepoList={props.setRepoList}/>
    </div>
  )
}
