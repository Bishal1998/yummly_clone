import './Search.css';
import Overlay from '../overlay/Overlay';

const Search = ({ searchOverlay, setSearchOverlay }) => {

  return (
    <>
    
        
        <div className="search">
        
        <input type="text" 
        placeholder='Search 2M+ recipes'
        onClick={() => {setSearchOverlay(true)}}
        />
    </div>

    
    </>
  )
}

export default Search;