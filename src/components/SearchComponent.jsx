import './SearchComponent.css'

const SearchComponent = ({handleSearch, handleClean}) => {
  return (
    <form className='search-container'>
        <input type="text" onChange={(e) => handleSearch(e)}/>
        <input type="reset" value="Clear" onClick={() => handleClean()}/>
    </form>
  )
}

export default SearchComponent