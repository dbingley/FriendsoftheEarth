import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import Home from './home';
import AddTask from './add-task';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/add-task">Add a task</NavLink></li>
              </ul>
            </nav>
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-task" component={AddTask} />
        </div>
      </Router>
    );
  }
}

export default App;
