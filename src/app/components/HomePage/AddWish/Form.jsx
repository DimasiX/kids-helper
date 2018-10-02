import React, {Component} from 'react';
import {AnimateWishMenuOnOpen} from "../../../../services/api.animate";

class Form extends Component {


  componentDidMount() {
    AnimateWishMenuOnOpen()
  }


  render() {
    return (
      <div className="add-wish__form">

      </div>
    );
  }
}

export default Form;