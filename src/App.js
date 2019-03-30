import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/landing.js';
import Dashboard from './components/dashboard.js';
import NavbarR from './components/navbar.js';
import Workout from './components/workout.js';
import Goals from './components/goals.js';
import Timer from './components/timer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarR />
          <main>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/workout' component={Workout} />
              <Route exact path='/goals' component={Goals} />
              <Route exact path='/timer' component={Timer} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
