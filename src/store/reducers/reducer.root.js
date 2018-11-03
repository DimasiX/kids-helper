import { combineReducers } from "redux";

// Reducers
import wishes from "./reducer.wishes";
import addWishes from "./reducer.add_wish";

export default combineReducers({ wishes, addWishes });
