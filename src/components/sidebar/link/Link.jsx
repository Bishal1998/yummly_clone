import './Link.css';

const Link = () => {
  return (
    <div className="sidebar__link-list">
        <ul>
            <li><a href="#feed">My Feed</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#meal">Meal Planner <span className='sidebar__link-list__span'>NEW</span></a></li>
            <li><a href="#pantry">Pantry-Ready Recipes <span className='sidebar__link-list__span'>NEW</span></a></li>
            <li><a href="#browse">Browse</a></li>
            <li><a href="#pro">Pro Recipes</a></li>
            <li><a href="#guided">Guided Recipes</a></li>
        </ul>
        <div className="sidebar__link-list__smart">
            Smart Thermometer
        </div>
    </div>
  )
}

export default Link;