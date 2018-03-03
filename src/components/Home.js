import React, {Component, PropTypes} from 'react';
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
          <a href="#wishes"><i className="arrow down"></i></a>
        </div>
        <div className="wishes" id="wishes">
          <div className="wish">
            <h1>FUCK UR LADY!</h1>
          </div>
          <div className="wish">
            <h1>Have so much damn money, to live in HAWAII</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
