import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn  } from "mdbreact";
import Nav from './Nav.js'
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import Signup from './Sign up'
import Checkout from './Checkout';
import Order from './Order';
import Payment from './Payment'
import Additem from './Additem'
import Chat from './chat'
import Chat2 from "./chat2"




class App extends Component {

  

  render() {
    return (
      <div >
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>Family Care</h1>
        </header> */}

      <Nav/>
    
      <Router>
        <Switch>
        <Route path="/chat"   component={Chat} / > 
        <Route path="/chat2"   component={Chat2} / > 

          <Route path="/login"   component={Login} / > 
          <Route path="/signup"   component={Signup} / > 
          <Route path="/checkout"   component={Checkout} / > 
          <Route path="/order"   component={Order} / > 
          <Route path="/payment"   component={Payment} / >
          <Route path="/additem"   component={Additem} / >  
          <Route path="/"   component={Home} exact /> 
        </Switch>
      </Router>
    

      </div>
    );
  }
}

export default App;
