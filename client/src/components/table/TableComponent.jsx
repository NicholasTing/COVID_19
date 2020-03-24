import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(country,cases,recovered) {
  return { country,cases,recovered };
}

var rows = [];

async function getRows(){

  var countries = []
  await axios.get('https://corona.lmao.ninja/countries').then(res => { 
    countries = res.data;
    countries.map(x=> rows.push(createData(x.country, x.cases, x.recovered)));
  });

}

export default function TableComponent() {

  const classes = useStyles();
  getRows();  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">cases</TableCell>
            <TableCell align="right">Recovered</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.country}>
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell align="right">{row.cases}</TableCell>
              <TableCell align="right">{row.recovered}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
