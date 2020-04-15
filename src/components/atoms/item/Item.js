import React from 'react'
import './Item.css'

export default function Item(props) {
  return (
    <div className="item">
      <a className="name">
        {props.name}
      </a>
      <a className="star">
        ★ {props.stars}
      </a>
    </div>
  )
}
