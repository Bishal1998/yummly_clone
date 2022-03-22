import Sidebar from './components/sidebar/Sidebar'
import './App.css';
import Design from './components/main/design/Design';

function App() {

  return (
    <div className="app">
      <Sidebar />
      <div className="sidebar__div"></div>
      <Design/>
    </div>
  );
}

export default App;
