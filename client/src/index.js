import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import "./index.css";
import App from "./App";

// import App from './components/App';
import reducers from "./reducers";

// first argument is reducer, second is setup
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// use JSX tags to create component instance (root is in index.html)
ReactDom.render(
  // created a redux store, hooked up to react side of application using Provider tag
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
