import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/reducer.root";

// Initialize middleware and enhancers
const middleware = [thunk];
const devToolsExtension = window.devToolsExtension;
const enhancers = [];

if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

// Creating Store
const initialState = {};

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
