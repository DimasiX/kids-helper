import React, { Component } from "react";
import Wish from "../Wish/Wish";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class WishList extends Component {
  render() {
    const { wishes } = this.props;
    return (
      <div className="wishes" id="wishes">
        {Object.keys(wishes).map((wish, index)=> {
          return <Wish key={index} wish={wishes[wish]} wishKey={wish}/>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishes: state.wishes
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishList);



