import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as actions from '../../actions';
import './mobileView.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default class BasicTextField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      country: '',
      countryInfo: '',
      cases: '',
      todayCases: '',
      deaths: '',
      todayDeaths: '',
      recovered: '',
      active: '',
      critical: '',
      casesPerOneMillion: '',
      deathsPerOneMillion: '',
      entered:false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    
    event.preventDefault();
    const data = await actions.fetchSpecificCountry(this.state.value);
    if(data === 'no country found'){
      return "Error no country found"
    }

    this.setState({
      country: data.country,
      countryInfo: data.countryInfo,
      cases: data.cases,
      todayCases: data.todayCases,
      deaths: data.deaths,
      todayDeaths: data.todayDeaths,
      recovered: data.recovered,
      active: data.active,
      critical: data.critical,
      casesPerOneMillion: data.casesPerOneMillion,
      deathsPerOneMillion: data.deathsPerOneMillion,
      entered:true,
    })

  }

  render() {

    if(!this.state.entered){
      return (
        <div className="homePage">
        <form onSubmit={this.handleSubmit}>
         
          <TextField helperText="Enter a country to get statistics" id="filled-search"
           label="Country" variant="outlined" value={this.state.value} onChange={this.handleChange} />
           <div>
           <Button fullWidth={true} variant="contained" color="primary" type="submit">
            Search
          </Button>
          </div>
        </form>
        </div>
      );
    }

    return (
          <div className="homepage">
            <h1>Country in View: {this.state.country}</h1>
            <h3>Total cases: {this.state.cases}</h3>
            <h3>Total deaths: {this.state.deaths}</h3>
            <h3>Recovered cases: {this.state.recovered}</h3>
            <h3>Cases per one million: {this.state.casesPerOneMillion}</h3>
            <h3>Death per one million: {this.state.deathsPerOneMillion}</h3>

            <br />

            <h1> Recent stats </h1>
            <h3>Today cases: {this.state.cases}</h3>
            <h3>Today deaths: {this.state.deaths}</h3>

            <br />
            <h1> Current Conditions </h1>
            <h3>Active : {this.state.active}</h3>
            <h3>Critical : {this.state.critical}</h3>
            <h3>Recovered cases: {this.state.recovered}</h3>

            <form onSubmit={this.handleSubmit}>
         
            <TextField helperText="Enter another country to get statistics" id="filled-search"
              label="Country" variant="outlined" value={this.state.value} onChange={this.handleChange} />
              <div>
              <Button fullWidth={true} variant="contained" color="primary" type="submit">
              Search
            </Button>
            </div>
          </form>
       
          </div>
    );
  }
}