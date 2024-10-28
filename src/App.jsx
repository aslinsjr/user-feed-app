import { useState, useEffect} from 'react'

import UsersComponent from './components/UsersComponent';
import ShowUserComponent from './components/ShowUserComponent';
import SearchComponent from './components/SearchComponent';

import './App.css'

function App() {
  
  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [user, setUser] = useState("")

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const response = await fetch("https://randomuser.me/api/?results=50")
    try {
      const data = await response.json()

      setData(data.results)

      setSearchData(data.results)

    }catch (error) {
      console.log(error)
    }
  }

  function handleMouseOver(item) {
    setUser(item)
  }

  function handleSearch(e) {
    if(e.target.value !== "") {
      setSearchData(data.filter((item) => item.name.first.toLowerCase().includes(e.target.value)))
    } else {
      setSearchData(data)
    }
    
  }

  function handleClean() {
    setSearchData(data)
  }

  

  return (
    <div className='container'>
      <div className="header">
        <h2>Users Dashboard</h2>
      </div>
      <div className='dashboard-container'>
        <div className='feed-container'>
          <SearchComponent handleClean={handleClean} handleSearch={handleSearch} />
          {searchData.map((item, index) => (
            <UsersComponent key={index} item={item} handleMouseOver={handleMouseOver}/>
           ))}
        </div>
        <ShowUserComponent user={user}/>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
