import moment from "moment";
import {DATEFORMAT} from "../../services/api.values";

const initialState = {
  wishID: {
    wishText: "Live in Hawaii",
    dateToAchieve: moment().format(DATEFORMAT),
    isEditing: false
  },
  wishID2: {
    wishText: "Visit France",
    dateToAchieve: moment().format(DATEFORMAT),
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


