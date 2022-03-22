import './Recipe.css';
import { CgFile } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';

const Recipe = () => {
  return (
    <div className="sidebar__recipe-list">
        <div className="sidebar__recipe-list__title">
            Saved Recipe
        </div>
        <div className="sidebar__recipe-list__collection">
            <div className="sidebar__recipe-list__collection-title"><AiOutlinePlus /> New Collection</div>
            <div className="sidebar__recipe-list__collection-list">
                <ul>
                    <li><a href="#yums"><CgFile /> All Yums</a></li>
                    <li><a href="#breakfasts"><CgFile /> Breakfasts</a></li>
                    <li><a href="#desserts"><CgFile /> Desserts</a></li>
                    <li><a href="#dinners"><CgFile /> Dinners</a></li>
                    <li><a href="#drinks"><CgFile /> Drinks</a></li>
                    <li><a href="#sides"><CgFile /> Sides</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Recipe;