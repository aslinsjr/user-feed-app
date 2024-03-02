import { useState } from 'react'

import './UsersComponent.css'

const UsersComponent = ({item, handleClick}) => {

  console.log(item)

  return (
    <div className='users-container' onMouseOver={(e) => handleClick(item)}>
        <p>{item.login.username}</p>
        <p id='feed-name'>{item.name.first} {item.name.last}</p>
        <img id='thumbnail' src={item.picture.thumbnail} alt="User Picture" />
    </div>
  )
}

export default UsersComponent