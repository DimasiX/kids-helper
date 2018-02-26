import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import {
  BrowserRouter,
  Route
}from 'react-router-dom';

//My Components
import Header from './components/Header';
import Home from './components/Home';

//Variables
let GAMES = ["Запомни на время",
            "Угадай цвет",
            "Считай на время",
            "Развивай концентрацию"
];




class App extends Component {
  state = {

  }
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <div className='wallpaper'>
              </div>
            <Header />
            <Route exact path="/" render={()=><Home games={GAMES}/>}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
