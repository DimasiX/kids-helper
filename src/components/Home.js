import React, {Component, PropTypes} from 'react';
import {
  Link
} from 'react-router-dom';
import image from '../css/mobile1.jpg';
class Home extends Component{
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
          <Link to="#wishes"><i className="arrow down"></i></Link>
        </div>
        <div className="wishes" id="wishes">
          <div className="wish">
            <h1>FUCK UR LADY!</h1>
            <h2>Date:01.05.2019</h2>
          </div>
          <div className="wish">
            <h1>Have so much damn money, to live in HAWAII</h1>
            <h2>Date:20.03.2022</h2>
          </div>
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
