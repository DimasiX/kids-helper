import React, {Component} from "react";
import PropTypes from "prop-types";
import WishList from "./WishList/WishList";
import AddWishButton from "./WishList/AddWishButton";

class Home extends Component {
  static propTypes = {
    wishes: PropTypes.array.isRequired
  };

  render = () => {
    const { wishes, onToggleEditMenu } = this.props;

    return <div className="home">
        <div className="intro">
          <h1>I WISH!</h1>
          <i className="arrow down" />
        </div>
        <WishList wishes={wishes} onToggleEditMenu={onToggleEditMenu}/>

        {/*<div className="wishes" id="wishes">
          {wishes.map((wish, index) => {
            if (wish.isEdit === true) {
              return <div className="wish" key={index}>
                  <div className="more-options" onClick={() => this.props.Edit(index)} key={index} />
                  <div className={"menu " + wish.isOnEdit}>
                    <div className="close" onClick={() => this.props.Edit(index)} />
                    <div className="menu-choice change-descr" onClick={() => this.props.editWish(index)}>
                      Save Description
                    </div>
                    <div className="divide" />
                    <div className="menu-choice delete" onClick={() => this.props.removeWish(index)}>
                      Remove
                    </div>
                  </div>
                  <input type="text" placeholder={wish.name} value={wish.name} onChange={e => this.props.getInput(e, index)} />
                  <input type="date" onChange={e => this.props.getDate(e)} />
                  <button onClick={() => this.props.saveWishChange(index)}>
                    SAVE
                  </button>
                </div>;
            } else {
            }
            return <div className="wish" key={index}>
                <div className="more-options" onClick={() => this.props.Edit(index)} key={index} />
                <div className={"menu " + wish.isOnEdit}>
                  <div className="close" onClick={() => this.props.Edit(index)} />
                  <div className="menu-choice change-descr" onClick={() => this.props.editWish(index)}>
                    Change Description
                  </div>
                  <div className="divide" />
                  <div className="menu-choice delete" onClick={() => this.props.removeWish(index)}>
                    Remove
                  </div>
                </div>
                <h1>{wish.name}</h1>
                <h2>Date: {wish.date}</h2>
              </div>;
          })}
        </div>*/}

        <AddWishButton />
      </div>;
  };
}
Home.propTypes = {
  wishes: PropTypes.array.isRequired,
  Edit: PropTypes.func.isRequired,
  onToggleEditMenu: PropTypes.func.isRequired,
  getInput: PropTypes.func.isRequired
};

export default Home;
