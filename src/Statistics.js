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
          <TableRow>
            <TableCell>{this.props.query}</TableCell>
            <TableCell numeric>2</TableCell>
            <TableCell numeric>3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
export default Statistics;
