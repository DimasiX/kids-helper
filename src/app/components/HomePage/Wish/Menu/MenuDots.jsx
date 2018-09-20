import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { OpenMenu } from "../../../../../store/reducers/reducer.wishes";

class MenuDots extends Component {
  render() {
    const { wishKey, OpenMenu } = this.props;
    return (
      <div className="open-dots" >
        <div className="dots" onClick={() => OpenMenu(wishKey)}>
          <div className="dots__dot" />
          <div className="dots__dot" />
          <div className="dots__dot" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ OpenMenu: wishID => OpenMenu(wishID) }, dispatch);

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuDots);
