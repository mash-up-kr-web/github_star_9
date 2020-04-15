import React from 'react'

export default function UserInfo(props) {
  return (
    <div>
      <div>
        {props.userName}
      </div>
      <div>
        {props.repoCount} Repositories | {props.starCount} stars
      </div>
    </div>
  )
}
