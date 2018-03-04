import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddWish extends Component {

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
                     required></input>
              <h2>Set the Date:</h2>

              <input type="date" value={this.props.date} onChange={this.props.handleGetDate}/>

              <button type="submit" onClick={this.props.handleAddWish} required>Recognize</button>
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
