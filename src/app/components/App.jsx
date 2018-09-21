import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
//Components
import Home from "./HomePage/Home";
import AddWish from "./AddWishPage/AddWish";

class App extends Component {
  MyCoolMethod = () => {



  };
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route path="/Add" render={() => <AddWish />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
