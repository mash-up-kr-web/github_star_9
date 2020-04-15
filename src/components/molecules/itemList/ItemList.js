import React from 'react'
import Item from '../../atoms/item/Item'

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
    <div>
      {repos}
    </div>
  )
}
