import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import {
  BrowserRouter,
  Route
}from 'react-router-dom';

//My Components
import Header from './Header';
import Home from './Home';

//Variables
let GAMES = ["Запомни на время",
            "Угадай цвет",
            "Считай на время",
            "Развивай концентрацию",
];




class App extends Component {
  state = {
    input: "",
    games: GAMES,
  }
  getInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  addGame = (e) => {
    e.preventDefault();
    GAMES.push(this.state.input);
    this.setState({
      input: ""
    });
  }
  render() {
    return (
      <BrowserRouter>
          <div className="App">
              <div className='wallpaper'>
              </div>
            <Header />
            <Route exact path="/" render={()=> <Home inputField={this.state.input}
                                                     games={GAMES}
                                                     input={this.getInput}
                                                     addGame={this.addGame}/>}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
