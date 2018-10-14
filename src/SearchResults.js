import React, { Component } from 'react';
import Statistics from './Statistics';
import SearchResult from './SearchResult'

class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.props.results.map(result => {
            return (
              <SearchResult result={result}/>
            );
          })}
        <Statistics />
      </div>
    );
  }
}

export default SearchResults;
