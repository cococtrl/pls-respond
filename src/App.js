import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
 
import './App.css';
import userService from './utils/userService';
import eventService from './utils/eventService';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';



class App extends Component {

  state = {
    user: userService.getUser(),
    events: [],
    event: []
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() }, () => {
      this.handleGetEvents();
    })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, events: [] });
  }

handleGetEvents = async () => {
  if(userService.getUser()) {
    const {events} = await eventService.index();
    this.setState({ events });
  }
}

handleGetEvent = async () => {
  const { event } = await eventService.getEvent();
  this.setState({ event });
}

async componentDidMount() {
  this.handleGetEvent();
  this.handleGetEvents();
  }


  render() {
    return (
      <div className="App-outer-container">
        <Navbar handleLogout={this.handleLogout} />
        <div className="App-inner-container">
          <Switch>
            <Route exact path="/" render={props => 
              <Home getEvent={this.state.getEvent}/>
            }/>
            <Route exact path="/events" render={props =>
            userService.getUser()
            ? <Events 
            {...props}
            handleGetEvents={this.handleGetEvents}
            events={this.state.events}
            />
            : <Redirect to="/login" />
          }/>
            <Route exact path="/login" render={props => 
              <Login 
              {...props}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path="/signup" render={props =>
            <Signup 
            {...props}
            handleSignupOrLogin={this.handleSignupOrLogin}/>
          }/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
// join pages to database..
//add oauth 
//drop down navbar - connect to event api ??

