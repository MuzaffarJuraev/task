import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../containers/App";

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};
