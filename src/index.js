import React from "react";
import ReactDOM from "react-dom";
import App from "./app/components/App";
import registerServiceWorker from "./app/registerServiceWorker";
import { Provider } from "react-redux";

// Import Store
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
