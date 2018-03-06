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
        date: "10.05.2019",
        isOnEdit: false,
        isEdit: true,
      },
      {
        name: "Live in Hawaii",
        date: "10.03.2022",
        isOnEdit: false,
        isEdit: false,
      },
      {
        name: "Buy Mustang 2017",
        date: "20.03.2020",
        isOnEdit: false,
        isEdit: false,
      },
    ],
  }

  getDate = (e) => {
    console.log(e.target.value);
    this.setState({
      date: e.target.value,
    })
  }

  setInput = (e) => {
    console.log(e.target.value);
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
            isOnEdit: false,
            isEdit: false,
          }
        ]
      })
    }
  }

Edit = (index) => {
    if(this.state.wishList[index].isOnEdit){
      this.state.wishList[index].isOnEdit = !this.state.wishList[index].isOnEdit;
      this.setState({});
    }else{
      this.state.wishList[index].isOnEdit = !this.state.wishList[index].isOnEdit;
      this.setState({});
    }
  }
  editWish = (index) => {
    if(this.state.wishList[index].isEdit){
      this.state.wishList[index].isEdit = !this.state.wishList[index].isEdit;
      this.setState({});
    }else{
      this.state.wishList[index].isEdit = !this.state.wishList[index].isEdit;
      this.state.wishList[index].isOnEdit = !this.state.wishList[index].isOnEdit;
      this.setState({});
    }

  }
  saveWishChange = (index) => {
    this.state.wishList[index].name = this.state.input;
    this.state.wishList[index].date = this.state.date;
    this.state.wishList[index].isEdit = !this.state.wishList[index].isEdit;
    this.setState({
      input:"",
      date: "Next Year",
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
            <Header />

              <Route exact path="/" render={()=><Home wishes={this.state.wishList}
                                                      Edit={this.Edit}
                                                      closeEdit={this.closeEdit}
                                                      editWish={this.editWish}
                                                      getInput={this.setInput}
                                                      saveWishChange={this.saveWishChange}
                                                      getDate={this.getDate}/>}/>
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
