import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
// import { FormControl } from '@material-ui/core';

import EnhancedTable from '../sortedTable/sortedTableComponent';

function createData(country,cases, deaths, recovered) {
    var recovery_percentage = cases / recovered;
  return { country,cases, deaths, recovered };
}

var rows = []

class TableComponent extends React.Component { 

    state = {
        countries:[],
        loading: true,
    }

    async componentDidMount(){
        this.props.data.map(x=> 
            rows.push(createData(x.country, x.cases, x.deaths, x.recovered)));
        this.setState({loading:false});
    }

    getStyles(){
        makeStyles({
        table: {
            minWidth: 2000,
        },
        });
    }

  render(){

    if (this.state.loading){
        return <div>Loading.. </div>
    }
    
    return (
        <EnhancedTable data={this.props.data}></EnhancedTable>
    //   <TableContainer component={Paper}>
    //     <Table className={this.getStyles.makeStyles} aria-label="simple table">
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>Country</TableCell>
    //           <TableCell align="right">Cases</TableCell>
    //           <TableCell align="right">Recovered</TableCell>
    //           <TableCell align="right">Recovery Rate</TableCell>
           
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {rows.map(row => (
    //           <TableRow key={row.country}>
    //             <TableCell component="th" scope="row">
    //               {row.country}
    //             </TableCell>
    //             <TableCell align="right">{row.cases}</TableCell>
    //             <TableCell align="right">{row.recovered}</TableCell>
    //             <TableCell align="right">{ (row.recovered/row.cases * 100).toFixed(2)}%</TableCell>
              
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    );
  }

}

function mapStateToProps({countries}) {
    return {countries};
}

export default connect(mapStateToProps)(TableComponent);