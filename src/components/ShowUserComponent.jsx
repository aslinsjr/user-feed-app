import React from 'react'

import './ShowUserComponent.css'

const ShowUserComponent = ({user}) => {

    if(user === ""){
        return (<div className='user-expand'>
            <h2 id='instructions-text'>Selec user to see more informations...</h2>
        </div>)
    }else {
        return (
            <div className='user-expand'>
                 <p id='user-login'>User: {user.login.username}</p>
                <div className='informations-container'>
                    <div className='right-container'>
                        <h2 id='user-name'>{user.name.title}  {user.name.first} {user.name.last}</h2>
                        <p id='user-email'>Email: {user.email}</p>
                        <h3>User for {user.registered.age} years</h3>
                        <p>Age: {user.dob.age}</p>
                        <p>Nationality: {user.nat}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                    <div className='left-container'>
                        <img src={user.picture.large} alt="User Picture" />
                        <h3>Adress:</h3>
                        <p>{user.location.street.number} {user.location.street.name},</p>
                        <p>{user.location.city}, {user.location.country} - {user.location.postcode}</p>
                    </div>
                </div>
            </div>
          )
    }
  
}

export default ShowUserComponent