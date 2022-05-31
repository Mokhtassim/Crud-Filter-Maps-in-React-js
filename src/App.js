import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Create from './pages/Create';
import View from './pages/View';
import Edit from './pages/Edit';
import Filter from './pages/Filter';
import Map from './pages/TestMap';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
          <Link to={"/"} className="nav-link">Home</Link>
          </li><li className="nav-item">
          <Link to={"/create"} className="nav-link">Create</Link>
          </li><li className="nav-item">
          <Link to={"/filter"} className="nav-link">Filter</Link>
          </li>
          <li className="nav-item">
          <Link to={"/map"} className="nav-link">Map</Link>
          </li>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/create'} element={<Create/>}/>
          <Route path={'/view/:id'} element={<View/>}/>
          <Route path={'/edit/:id'} element={<Edit/>}/>
          <Route path={'/filter'} element={<Filter/>}/>
          <Route path={'/map'} element={<Map/>}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;
