import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Home';
import Navigation from "./Navbar"
import Trending from './Trending';
import TopNav from './TopNav';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <TopNav/>
      <Routes>
      <Route path='/' Component={Home}></Route>
    </Routes>
      <Trending/>
    </div>
  );
}

export default App;
