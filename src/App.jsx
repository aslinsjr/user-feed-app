import { useState, useEffect} from 'react'

import UsersComponent from './components/UsersComponent';
import ShowUserComponent from './components/ShowUserComponent';

import './App.css'

function App() {
  
  const [data, setData] = useState([])
  const [user, setUser] = useState("")

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const response = await fetch("https://randomuser.me/api/?results=50")
    try {
      const data = await response.json()

      setData(data.results)

    }catch (error) {
      console.log(error)
    }
  }


  const handleClick = (item) => {
    setUser(item)
  }

  

  return (
    <div className='container'>
      <div className="header">
        <h2>Users Dashboard</h2>
      </div>
      <div className='dashboard-container'>
        <div className='feed-container'>
          {data.map((item, index) => (
            <UsersComponent key={index} item={item} handleClick={handleClick}/>
           ))}
        </div>
        <ShowUserComponent user={user}/>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
