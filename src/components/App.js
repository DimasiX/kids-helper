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
        isEdit: false,
        achieved: false,
      },
      {
        name: "Live in Hawaii",
        date: "10.03.2022",
        isOnEdit: false,
        isEdit: false,
        achieved: true,
      },
      {
        name: "Get Front End Job",
        date: "15.05.2018",
        isOnEdit: false,
        isEdit: false,
        achieved: false,
      },
    ],
  }

  getDate = (e, index=-1) => {
    if(index === -1) {
      this.setState({
        date: e.target.value,
      })
    }else{
      this.state.wishList[index].name = e.target.value;
      this.setState({
        date: e.target.value,
      })
    }
  }

  setInput = (e, index=-1) => {
    if(index === -1){
      this.setState({
        input: e.target.value.replace(/\b\w/g, l => l.toUpperCase()),
      })
    }else{
      this.state.wishList[index].name = e.target.value;
      console.log(this.state.wishList[index].name);
      this.setState({
        input: e.target.value.replace(/\b\w/g, l => l.toUpperCase()),
      })
    }
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
            achieved: false,
          }
        ]
      })
    }
  }

Edit = (index) => {
    if(this.state.wishList[index].isOnEdit){
      this.state.wishList[index].isOnEdit = !this.state.wishList[index].isOnEdit;
      this.setState({
      });
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
      this.state.input = this.state.wishList[index].name;
      this.state.date = this.state.wishList[index].date;
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
  removeWish = (index) => {
    this.setState({
      ...this.state
    })
    this.state.wishList.splice(index,1);
    console.log("HEY!");
  }

  setAchieved = (index) => {
    this.state.wishList[index].achieved = true;
    this.setState({});
  }
  setNotAchieved = (index) => {
    this.state.wishList[index].achieved = false;
    this.setState({});
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
                                                      getDate={this.getDate}
                                                      removeWish={this.removeWish}/>}/>
              <Route path="/add-wish" render={()=><AddWish handleGetDate={this.getDate}
                                                           date={this.state.date}
                                                           inputValue={this.state.input}
                                                           handleSetInput={this.setInput}
                                                           handleAddWish={this.addWish}
                                                           testMes={this.test}/>}/>

              <Route path="/progress" render={()=><Progress wish={this.state.wishList}
                                                            setAchieved={this.setAchieved}
                                                            setNotAchieved={this.setNotAchieved}/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
