import React from 'react'

export default function Item(props) {
  return (
    <div>
      {props.name}
      <div>
      ★ {props.stars}
      </div>
    </div>
  )
}
