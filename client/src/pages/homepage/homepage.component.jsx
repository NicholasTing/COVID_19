import React from "react";
import "./homepage.styles.scss";
import axios from 'axios';
import { ReactReduxContext } from "react-redux";
import TableComponent from '../../components/table/TableComponent';
export default class HomePage extends React.Component {

    state = {
        cases:'',
        deaths:'',
        recovered:'',
        updated:'',
        countries: [],
    };
    
    constructor(props){
        super(props);
    };

    async componentDidMount(){

        Promise.all([
        await axios.get('https://corona.lmao.ninja/countries')
        .then(res => {
            this.setState({countries:res.data})
        }),
        await axios.get('https://corona.lmao.ninja/all')
        .then(res=> {
        this.setState(
            {   cases:res.data.cases,
                deaths:res.data.deaths,
                recovered:res.data.recovered,
                updated:res.data.updated
            })
        })])
    }

    render(){
        return <div className="homepage">
            <h1>Corona Statistics</h1>
            <h3>Total cases: {this.state.cases}</h3>
            <h3>Total deaths: {this.state.deaths}</h3>
            <h3>Recovered cases: {this.state.recovered}</h3>
            {/* <h2>Updated: {(this.state.updated)}</h2> */}
            <TableComponent />
        </div>;
    }
}