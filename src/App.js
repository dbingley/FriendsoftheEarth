import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import Home from './home';
import Today from './today';
import Profile from './profile';
import Enter from './enter';
import AddPost from './addPost/addPost.js';



import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }



  state = {
    firstName:"",
    lastName:"",
  }

globalUpdateName = (firstName, lastName) => {
  this.setState({
    firstName:firstName,
    lastName:lastName,

  })
}



  render() {
    return (

      <Router>
        <div className="App">

        <Route exact path="/" component={(props)=>(
          <Enter handleUpdateName={this.globalUpdateName} {...props}/>
        )}/>
        <Route exact path="/home" component={()=>(
            <Home firstName={this.state.firstName}
            lastName={this.state.lastName}/>
          )}/>
          <Route exact path="/addPost" component={()=>(
              <AddPost firstName={this.state.firstName}
              lastName={this.state.lastName} />
            )}/>

          <Route exact path="/today" component={Today} />



          <Route exact path="/profile" component={()=>(
              <Profile firstName={this.state.firstName}
              lastName={this.state.lastName} />
            )}/>


        </div>
      </Router>
    );
  }
}

export default App;
