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
import AddWish from './AddWish';
//Variables




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
            <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/add-wish" component={AddWish}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
