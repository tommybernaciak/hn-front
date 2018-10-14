import React, { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

class Statistics extends Component {
  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>search query string</TableCell>
            <TableCell numeric>av. of total search result hits (last day)</TableCell>
            <TableCell numeric>av. of total search result hits (last week)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.carbs}</TableCell>
                <TableCell numeric>{row.protein}</TableCell>
              </TableRow>
            );
          })} */}
        </TableBody>
      </Table>
    );
  }
}
export default Statistics;
