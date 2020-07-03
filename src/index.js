import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "font-awesome/css/font-awesome.min.css";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../src/store/reducers/RootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={mainStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
