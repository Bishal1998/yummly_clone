import './Overlay.css';
import { VscSearch } from 'react-icons/vsc';

const Overlay = () => {
  return (
    <div className="search__onclick-div">
          <div className="search__onclick">
            <VscSearch className='search__icon'/>
              <input type="text"
                  placeholder='Search Recipes'
                  autoFocus
              />
          </div>
          <div className="search__onclick-desc">
              <p className='search__onclick-desc__p'>New</p>
              <h3>Find recipes you can make right now</h3>
              <p>Get inspired by recipes you can make with the ingredients you have at home today.</p>
          </div>
          
            <button className='search__onclick-desc__button'>Find Pantry-Ready Recipes</button>
        </div>
  )
}

export default Overlay;