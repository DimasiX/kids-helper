import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
//Components
import Home from "../HomePage/Home";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
            <Switch>
              <Route path="/" render={() => <Home />} />
            </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
