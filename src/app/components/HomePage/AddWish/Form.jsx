import React, {Component} from 'react';
import {AnimateAddFormOnOpen} from "../../../../services/api.animate";

class Form extends Component {


  componentDidMount() {
    AnimateAddFormOnOpen()
  }


  render() {
    return (
      <div className="add-wish__form">

      </div>
    );
  }
}

export default Form;