import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import SearchResults from './SearchResults';
import Actions from './flux/Actions';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this)
    Actions.searchHN(this.refs.query.value);
  }

  render() {
    var searchResults = '';
    if(this.props.state.results) {
      searchResults = '';
    } else {
      searchResults = <SearchResults results={this.props.state.results}/>;
    }
    return (
      <div>
        <h2>search the Hacker News:</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <TextField
              id="query"
              label="Search"
              margin="normal"
              ref="query"
            />
          </div>
          <Button variant="contained" color="secondary" type="submit">
            Search
          </Button>
        </form>
        {searchResults}
      </div>
    );
  }
}
export default SearchForm;
