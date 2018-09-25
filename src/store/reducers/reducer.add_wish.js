let initialState = {
  isAddFormOpen: false
};

const OPEN_ADD_FORM = "add-wish/OPEN_ADD_FORM";

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ADD_FORM:
      return {
        ...state,
        isAddFormOpen: !state.isAddFormOpen
      };
    default:
      return state;
  }
};

export const OpenAddForm = () => {
  return dispatch => {
    dispatch({
      type: OPEN_ADD_FORM
    });
  };
};
