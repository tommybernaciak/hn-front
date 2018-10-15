import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';

class NoteView extends Component {
  render() {
    var results = '';
    if(this.props.notebook_results) {
      results = this.props.notebook_results;
    } else {
      results = [{title: 'empty'}];
    }
    return (
      <div>
        { Object.keys(results).map((item, i) => {
        return (
          <Card key={i}>
            <CardContent>
            <p>{results[item].title}</p>
            <p>{results[item].author}</p>
            <p>{results[item].url}</p>
            </CardContent>
          </Card>
        );
        })}
      </div>
    );
  }
}
export default NoteView;
