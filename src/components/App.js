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
import Progress from './Progress';
//Variables
var today = new Date();

console.log(today);
class App extends Component {
  state = {
    date: "Next Year",
    input: "",
    wishList: [
      {
        name: "Visit Paris",
        date: "10.05.2019"
      },
      {
        name: "Live in Hawaii",
        date: "10.03.2022"
      },
      {
        name: "Buy Mustang 2017",
        date: "20.03.2020"
      },
    ],
  }

  getDate = (e) => {
    this.setState({
      date: e.target.value,
    })
  }

  setInput = (e) => {
    this.setState({
      input: e.target.value.replace(/\b\w/g, l => l.toUpperCase()),
    })
  }

  addWish = (e) => {
    e.preventDefault();
    if(this.state.input == ""){
      console.log("Hmmmmm");
    }else{
      this.setState({
        input: "",
        date: "Next Year",
        wishList: [
          ...this.state.wishList,
          {
            name: this.state.input,
            date: this.state.date,
          }
        ]
      })
    }
  }

  test = (message) => {
    console.log(message);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
            <Header />

              <Route exact path="/" render={()=><Home wishes={this.state.wishList}/>}/>
              <Route path="/add-wish" render={()=><AddWish handleGetDate={this.getDate}
                                                           date={this.state.date}
                                                           inputValue={this.state.input}
                                                           handleSetInput={this.setInput}
                                                           handleAddWish={this.addWish}
                                                           testMes={this.test}/>}/>

                                                         <Route path="/progress" render={()=><Progress wish={this.state.wishList}/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
