import React, { Component } from 'react';
import { Card, CardContent, IconButton, CardActions, Collapse, Select, MenuItem, Button } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Actions from './flux/Actions';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  state = { expanded: false, id: 0};

  onSubmit(e) {
    e.preventDefault();
    Actions.saveResultToNotebook(this.state.id, this.props.result);
  }

  onChange(e) {
    this.setState(state => state.id = e.target.value);
  }

  handleExpandClick = () => {
    this.setState(state => state.expanded = !state.expanded);
  };
  render() {
    return (
      <Card>
        <CardContent>
          {this.props.result.title} by {this.props.result.author}
          <CardActions>
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMore />
            </IconButton>
          </CardActions>
        </CardContent>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <p>{this.props.result.created_at}</p>
            <p>{this.props.result.url}</p>
            <p>{this.props.result.title}</p>
            <form onSubmit={this.onSubmit}>
              <Select
                value={this.state.id}
                onChange={this.onChange}>
                { Object.keys(this.props.state.notebooks).map((item, i) => {
                  return (
                    <MenuItem value={this.props.state.notebooks[item].id} key={i}>{this.props.state.notebooks[item].title}</MenuItem>
                  );
                })}
              </Select>
              <Button variant="outlined" color="secondary" type="submit">
                SAVE
              </Button>
            </form>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default SearchResult;
