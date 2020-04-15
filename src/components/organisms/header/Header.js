import React from 'react'
import SearchBar from '../../molecules/searchBar/SearchBar';
import './Header.css'

export default function Header(props) {
  return (
    <div className="Header">
      <h1>Gitstar Ranking</h1>
      <p>Unofficial GitHub star ranking for users, organizations and repositories.</p>
      <SearchBar userName={props.userName} setUserName={props.setUserName} setRepoList={props.setRepoList}/>
    </div>
  )
}
