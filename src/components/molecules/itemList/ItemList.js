import React from 'react'
import Item from '../../atoms/item/Item'
import './ItemList.css'

export default function ItemList(props) {

  const repos = (props.repoList).map(
    ({id, name, starCount}) => (
      <Item
        key={id}
        id={id}
        name={name}
        stars={starCount}
      />
    )
  )

  return (
    <div className="itemList">
      {repos}
    </div>
  )
}
