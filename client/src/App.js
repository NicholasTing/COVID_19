import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/signInAndSignUp/signInAndSignUp.component";
import ExportDataPage from "./pages/exportData/exportData.component";
import RecordDataPage from "./pages/recordData/recordData.component";

import Header from "./components/header/header.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/export" component={ExportDataPage} />
          <Route exact path="/record" component={RecordDataPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
