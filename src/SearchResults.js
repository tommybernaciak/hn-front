import React, { Component } from 'react';
import Statistics from './Statistics';
import SearchResult from './SearchResult'

class SearchResults extends Component {

  render() {
    return (
      <div>
        <p>results for: {this.props.query}</p>
         { Object.keys(this.props.results).map((item, i) => {
            return (
              <SearchResult result={this.props.results[item]} key={i} state={this.props.state}/>
            );
          })}
        Page: {this.props.page}
        <Statistics query={this.props.query}/>
      </div>
    );
  }
}

export default SearchResults;
