
import './UsersComponent.css'

const UsersComponent = ({item, handleMouseOver}) => {

  return (
    <div className='users-container' onMouseOver={() => handleMouseOver(item)}>
        <p>{item.login.username}</p>
        <p id='feed-name'>{item.name.first} {item.name.last}</p>
        <img id='thumbnail' src={item.picture.thumbnail} alt="User Picture" />
    </div>
  )
}

export default UsersComponent