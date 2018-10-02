let initialState = {
  isAddFormOpen: false
};

const TOGGLE_ADD_FORM = "add-wish/TOGGLE_ADD_FORM";

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_FORM:
      return {
        ...state,
        isAddFormOpen: !state.isAddFormOpen
      };
    default:
      return state;
  }
};

export const OpenAddWishForm = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_ADD_FORM
    });
  };
};

export const CloseAddWishForm = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_ADD_FORM
    });
  };
};
