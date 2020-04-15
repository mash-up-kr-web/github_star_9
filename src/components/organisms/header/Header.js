import React from 'react'
import SearchBar from '../../molecules/searchBar/SearchBar';

export default function Header(props) {
  return (
    <div>
      <h1>Gitstar Ranking</h1>
      <p>Unofficial GitHub star ranking for users, organizations and repositories.</p>
      <SearchBar userName={props.userName} setUserName={props.setUserName} setRepoList={props.setRepoList}/>
    </div>
  )
}
