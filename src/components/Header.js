import React, {Component} from 'react';
import {
  NavLink
} from 'react-router-dom';

class Header extends Component {

  state = {
    isActive: false,
  }

  addActiveClass = () =>{
    this.setState({
      isActive: !this.state.isActive,
    });
    this.setState();
  }

  render = () => {
    return(
      <div>
        <div className={""+this.state.isActive} id="burger-container" onClick={this.addActiveClass}>
          <div id="burger">
              <span></span>
               <span></span>
               <span></span>
               <span></span>
          </div>
        </div>

        <div className={"header " + this.state.isActive}>

          <NavLink className="nav" exact to="/" onClick={this.addActiveClass}>
              <span>Home</span>
          </NavLink>
          <NavLink className="nav" to="/add-wish" onClick={this.addActiveClass}>
              <span>Add Wish</span>
          </NavLink>
          <NavLink className="nav" to="/progress" onClick={this.addActiveClass}>
              <span>Progress</span>
          </NavLink>
          <NavLink className="nav" to="/about" onClick={this.addActiveClass}>
              <span>About</span>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default Header;
