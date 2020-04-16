import React from 'react'
import ItemList from '../../molecules/itemList/ItemList'
import UserInfo from '../../molecules/userInfo/UserInfo'

export default function SearchResult(props) {

  const starCount = (ItemList) => {
   return ItemList.reduce((acc, {starCount}) =>  acc += starCount, 0);
  }

  return (
    <div>
      <UserInfo repoCount={(props.repoList).length} starCount={starCount(props.repoList)} userName={props.userName}/>
      <br/>
      <ItemList repoList={props.repoList}/>
    </div>
  )
}
