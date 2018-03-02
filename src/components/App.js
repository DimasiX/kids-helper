import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../css/App.css';
import {
  BrowserRouter,
  Route
}from 'react-router-dom';

//My Components
import Header from './Header';
import Home from './Home';
//Variables




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
            <Header />
            <Route path="/" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
