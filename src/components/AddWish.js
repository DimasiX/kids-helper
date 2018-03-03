import React from 'react';
import PropTypes from 'prop-types';

const AddWish = (props) => {
    return(
        <div className="add-wish">
          <div className="intro">
            <h1>ADD WISH</h1>
            <form>
              <input type="text" placeholder="Say me your wish"></input>
              <button type="">fuck you</button>
            </form>
          </div>
        </div>
    )
}

AddWish.propTypes = {
    total: PropTypes.number.isRequired,
    unconfirmed: PropTypes.number.isRequired,
    attended: PropTypes.number.isRequired,
}

export default AddWish;
