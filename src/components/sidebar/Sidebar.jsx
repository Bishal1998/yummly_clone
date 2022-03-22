import Link from './link/Link';
import Logo from './logo/Logo';
import Recipe from './recipe/Recipe';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Logo />
      <Link />
      <Recipe />
    </div>
  )
}

export default Sidebar;