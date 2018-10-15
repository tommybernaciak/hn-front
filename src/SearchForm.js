import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import SearchResults from './SearchResults';
import Actions from './flux/Actions';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clear = this.clear.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    Actions.searchHN(this.props.state.query);
  }

  onChange(e) {
    e.persist();
    this.setState((state) => this.props.state.query += e.nativeEvent.data);
  }

  clear() {
    this.setState((state) => this.props.state.query = '');
  }

  render() {
    var searchResults = '';
    if(this.props.state.search_results) {
      searchResults = <SearchResults results={this.props.state.search_results} page={this.props.state.page} state={this.props.state}/>;
    } else {
      searchResults = '';
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
              ref="name"
              value={this.props.state.query}
              onChange={this.onChange}
            />
          </div>
          <Button variant="contained" color="secondary" type="submit">
            Search
          </Button>
          <Button variant="contained" color="primary" onClick={this.clear}>
            Clear
          </Button>
        </form>
        {searchResults}
      </div>
    );
  }
}
export default SearchForm;
