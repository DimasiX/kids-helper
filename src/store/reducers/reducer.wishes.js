import moment from "moment";

const initialState = {
  wishID: {
    wishText: "Live in Hawaii",
    dateToAchieve: moment().format(),
    isEditing: false
  },
  wishID2: {
    wishText: "Visit France",
    dateToAchieve: moment().format(),
    isEditing: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const EditWish = wishID => {
  console.log("EDITING WISH", wishID);
};
