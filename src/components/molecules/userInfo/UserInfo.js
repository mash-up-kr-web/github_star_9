import React from 'react'
import './UserInfo.css'

export default function UserInfo(props) {
  return (
    <div className="userInfo">
      <a className="nameinfo">
        {props.userName}
      </a>
      <br/>
      <a className="repo">
        {props.repoCount} Repositories | {props.starCount} stars
      </a>
    </div>
  )
}
