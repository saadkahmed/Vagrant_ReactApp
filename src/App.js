import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Dashboard from './components/Pages/Dashboard';
import Nav from './components/Appbar';

import './App.css';

class App extends Component {


  render() {
    return (
    <Nav>
      <Router>

        <div className="App">

          <div className="container">
            <Route exact path="/" component={Login} />

            <Route path="/dashboard" component={Dashboard}/>

            <Route path="/signup" component={Signup} />

          </div>
          
        </div>

      </Router>
    </Nav>

    );
  }
}

export default App;
