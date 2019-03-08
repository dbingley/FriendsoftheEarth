import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import '../App.css';

const Navbar = (props) => {

  return(
<header className="App-header">
  <nav>
    <ul>
      <li><NavLink to="/Home">Home</NavLink></li>
      <li><NavLink to="/today">Today</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
    </ul>
  </nav>
</header>
)
}

export default Navbar
