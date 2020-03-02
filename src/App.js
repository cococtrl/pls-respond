import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
 
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


function App() {
  return (
    <div className="App-outer-container">
      <Navbar />
      <div className="App-inner-container">
        <Switch>
          <Route exact path="/" render={props => 
            <Home />
           }/>
          <Route exact path="/events" render={props =>
          <Events />
        }/>
          <Route exact path="/login" render={props => 
            <Login />
           }/>
          <Route exact path="/signup" render={props =>
          <Signup />
        }/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
// join pages to database..
//add oauth 
//drop down navbar - connect to event api ??

