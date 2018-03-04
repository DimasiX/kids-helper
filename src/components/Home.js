import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';
import image from '../css/mobile1.jpg';

class Home extends Component{
  static propTypes = {
    wishes: PropTypes.array.isRequired,
  }

  state = {
    isActive: false,
  }

  addActiveClass = () =>{
    this.setState({
      isActive: !this.state.isActive,
    });
    this.setState();
  };

  render = () => {
    return(
        <div className="home">
          <div className="intro">
            <h1>I WANT!</h1>
            <a href="/#wishes"><i className="arrow down"></i></a>
          </div>
          <div className="wishes" id="wishes">

            {this.props.wishes.map((wish,index) => {
              return(
                <div className="wish" key={index}>
                  <h1>{wish.name}</h1>
                  <h2>Date: {wish.date}</h2>
                </div>
              )
            })}

          </div>
          <div className="add-wish-butt">
            <Link to="add-wish">
              <span></span>
              <span></span>
            </Link>
          </div>
        </div>
    )
  }
}

export default Home;
