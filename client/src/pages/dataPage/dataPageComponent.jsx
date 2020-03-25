import React from "react";
// import "./homepage.styles.scss";
// import axios from 'axios';
// import { ReactReduxContext } from "react-redux";
import TableComponent from "../../components/table/TableComponent";
import EnhancedTable from "../../components/sortedTable/sortedTableComponent";
import BasicTextField from "../../components/mobileView/mobileViewComponent";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import { connect } from "react-redux";
import * as actions from "../../actions";

class DataPageComponent extends React.Component {
  state = {
    cases: "",
    deaths: "",
    recovered: "",
    updated: "",
    countries: [],
    loading: true
  };

  async componentDidMount() {
    // Fetch countries data
    const rows = [];
    await actions.fetchCountries().then(result => rows.push(result));
    this.setState({ countries: rows[0] });

    // Fetch all Data
    const allData = [];
    await actions.fetchAllData().then(result => allData.push(result));
    const dataInView = allData[0];

    this.setState({
      cases: dataInView.cases,
      deaths: dataInView.deaths,
      recovered: dataInView.recovered,
      updated: Date(dataInView.updated)
    });

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading ...</div>;
    }

    return (
      <div className="homepage">
        <h1>Latest Statistics</h1>
        <h3>Total cases: {this.state.cases}</h3>
        <h3>Total deaths: {this.state.deaths}</h3>
        <h3>Recovered cases: {this.state.recovered}</h3>
        <BasicTextField />
        <h6>Last updated: {this.state.updated}</h6>
      </div>
    );
  }
}

function mapStateToProps({ countries }) {
  return { countries };
}

export default connect(mapStateToProps)(DataPageComponent);
