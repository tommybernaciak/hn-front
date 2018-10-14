import React, { Component } from 'react';

class SearchResult extends Component {
  render() {
    return (
      <div>
        {this.props.result}
      </div>
    );
  }
}

export default SearchResult;
