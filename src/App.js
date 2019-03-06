import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import Home from './home';
import Today from './today';
import Profile from './profile';
import Enter from './enter';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={Enter} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/today" component={Today} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/enter" component={Enter} />

        </div>
      </Router>
    );
  }
}

export default App;
