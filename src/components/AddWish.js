import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AddWish extends Component {
  state = {
    popUp: false,
  }

  popUp = (e) => {
    e.preventDefault;
    if(this.props.inputValue !== ""){
      this.props.handleAddWish(e);
      this.setState({
        popUp: true,
      });
    }
    if(this.props.inputValue !== ""){
      setTimeout(()=>{  this.setState({
          popUp: false
        });},1500)
    }

  }
  render = () =>{
    return(
        <div className="add-wish">
          <div className="intro">
            <h1>ADD WISH</h1>
            <form>
              <input type="text"
                     placeholder="Say me your wish"
                     value={this.props.inputValue}
                     onChange={this.props.handleSetInput}
                     ></input>
              <h2>Set the Date:</h2>

              <input type="date" value={this.props.date} onChange={this.props.handleGetDate} required/>
              <button type="button" onClick={(e)=>this.popUp(e)}  >Recognize</button>

              <div className={"modalWindow " + this.state.popUp}>
                <div className={"modalPopUp " + this.state.popUp}>
                  <h1>Your Wish Added To List!</h1>
                  {/*<button type="button" className="testing" onClick={this.popUp}>OK</button>*/}
                </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

AddWish.propTypes = {
  handleGetDate: PropTypes.func.isRequired,
  handleAddWish: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired
}

export default AddWish;
