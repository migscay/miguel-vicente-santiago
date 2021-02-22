import './App.css';
import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
// import SideBar from './SideBar.js';
// import RecommendedVideos from './RecommendedVideos.js';
// import SearchPage from './SearchPage.js';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import logo from './logo.svg';

function App() {
  return ( 
    <div className="app">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;